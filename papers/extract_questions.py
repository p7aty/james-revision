#!/usr/bin/env python3
"""Extract essay-style questions from AQA past paper PDFs.

Scans all question paper PDFs in the papers/ tree, extracts questions worth
9+ marks with their immediate context (the question text above [X marks]).
Produces questions.json which is later hand-curated with spec code tags.
"""
import re
import json
import subprocess
from pathlib import Path

BASE = Path(__file__).parent

SUBJECTS = {
    'econ': '7136',
    'maths': '7357',
    'fm': '7367',
    'politics': '7152',
}

# Target marks for "essay-style" questions
# 9+ marks = substantial question with real content
MARK_PATTERN = re.compile(r'\[(\d+)\s*marks?\]')


def extract_questions(pdf_path):
    """Extract list of {marks, context, page_hint} from a PDF."""
    try:
        # Use layout mode for better structure, then fall back if empty
        result = subprocess.run(
            ['pdftotext', str(pdf_path), '-'],
            capture_output=True, text=True, timeout=30,
        )
        if result.returncode != 0:
            return []
        text = result.stdout
    except Exception as e:
        print(f"  ERROR extracting {pdf_path}: {e}")
        return []

    lines = text.split('\n')
    questions = []

    for idx, line in enumerate(lines):
        m = MARK_PATTERN.search(line)
        if not m:
            continue
        marks = int(m.group(1))
        if marks < 9:  # skip 1, 2, 4-mark questions
            continue

        # Walk backwards to find the question text
        # Questions typically span 2-8 lines above the [X marks] tag
        context = []
        for back in range(idx - 1, max(0, idx - 15), -1):
            prev = lines[back].strip()
            if not prev:
                if context:  # first blank after text = stop
                    break
                continue
            # Stop if we hit a structural marker or another [X marks]
            if MARK_PATTERN.search(prev):
                break
            if prev.startswith(('IB/', 'Section', 'Context', 'EITHER', 'OR', 'Essay',
                                'Turn over', 'END OF', 'Advice', 'Information',
                                'Extract ', 'Study Extract', 'Materials', 'Instructions')):
                break
            if prev.startswith(('0 ', '1 ', '2 ', '3 ')) and len(prev) < 10:
                break
            context.insert(0, prev)

        if not context:
            continue

        question_text = ' '.join(context).strip()

        # Clean up obvious artifacts
        question_text = re.sub(r'\s+', ' ', question_text)
        question_text = re.sub(r'^[\*\d\s]+', '', question_text)

        # Skip if too short — likely extraction artifact
        if len(question_text) < 30:
            continue

        questions.append({
            'marks': marks,
            'text': question_text,
            'char_count': len(question_text),
        })

    return questions


def main():
    results = {}

    for subj in SUBJECTS.keys():
        subj_dir = BASE / subj
        if not subj_dir.exists():
            continue

        results[subj] = {}

        for year_dir in sorted(subj_dir.iterdir()):
            if not year_dir.is_dir():
                continue
            year = year_dir.name
            results[subj][year] = {}

            for pdf_path in sorted(year_dir.glob('p*-qp.pdf')):
                # Extract the paper identifier (p1, p2, p3, p3-m, p3-s)
                paper_id = pdf_path.stem.replace('-qp', '')
                qs = extract_questions(pdf_path)
                if qs:
                    results[subj][year][paper_id] = qs
                    print(f"  {subj} {year} {paper_id}: {len(qs)} questions extracted")
                else:
                    print(f"  {subj} {year} {paper_id}: no questions found")

    output = BASE / 'questions.json'
    with open(output, 'w') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    print(f"\nWrote {output}")
    total = sum(
        len(qs)
        for subj in results.values()
        for year in subj.values()
        for qs in year.values()
    )
    print(f"Total questions extracted: {total}")


if __name__ == '__main__':
    main()
