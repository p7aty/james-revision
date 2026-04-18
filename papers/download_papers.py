#!/usr/bin/env python3
"""Download AQA past papers and mark schemes for James's revision site.

Tries standard URL patterns on filestore.aqa.org.uk. Papers from the last
two years (June 2024 onwards) may be embargoed and return 302 redirects.
Papers from November/June 2023 and earlier should be freely available.
"""
import os
import subprocess
import sys
from pathlib import Path

BASE = Path('/home/ubuntu/revision-site/papers')

# Subject configurations
# code = AQA paper code, paper_count = how many papers in the A-level
SUBJECTS = {
    'econ': {
        'dir': 'econ',
        'title': 'Economics',
        'code': '7136',
        'papers': [1, 2, 3],
        'paper_titles': {
            1: 'Markets & Market Failure',
            2: 'National & International Economy',
            3: 'Economic Principles & Issues',
        },
    },
    'maths': {
        'dir': 'maths',
        'title': 'Mathematics',
        'code': '7357',
        'papers': [1, 2, 3],
        'paper_titles': {
            1: 'Paper 1',
            2: 'Paper 2',
            3: 'Paper 3',
        },
    },
    'fm': {
        'dir': 'fm',
        'title': 'Further Maths',
        'code': '7367',
        'papers': [1, 2, 3],
        'paper_titles': {
            1: 'Paper 1',
            2: 'Paper 2',
            3: 'Paper 3 (Stats & Mech option SM)',
        },
        # FM paper 3 has multiple options; SM is option for Stats+Mech
        'paper3_variant': 'SM',
    },
    'politics': {
        'dir': 'politics',
        'title': 'Politics',
        'code': '7152',
        'papers': [1, 2, 3],
        'paper_titles': {
            1: 'UK Government & Politics',
            2: 'US Government & Comparative',
            3: 'Political Ideas',
        },
    },
}

# Exam series to try
# Format: (year, month_code, month_name)
SERIES = [
    (2022, 'JUN22', 'june', 'June 2022'),
    (2023, 'JUN23', 'june', 'June 2023'),
    (2024, 'JUN24', 'june', 'June 2024'),
]

# Filestore URL pattern:
# https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/{year}/{month}/AQA-{code}{paper}-{type}-{SERIES}.PDF
# type = QP (question paper), MS (mark scheme), INS (insert)

def try_download(url, out_path):
    """Try downloading; return (success, size)."""
    if out_path.exists() and out_path.stat().st_size > 1000:
        return True, out_path.stat().st_size
    result = subprocess.run(
        ['curl', '-sLf', '-o', str(out_path), '-w', '%{http_code}|%{size_download}', url],
        capture_output=True, text=True, timeout=30,
    )
    if result.returncode == 0:
        parts = result.stdout.split('|')
        if len(parts) == 2 and parts[0] == '200':
            size = int(parts[1])
            if size > 5000:
                return True, size
    if out_path.exists():
        out_path.unlink()
    return False, 0


def build_urls(subject_cfg, paper, series_code):
    """Build all plausible URL variants for a given subject/paper/series."""
    code = subject_cfg['code']
    urls = []

    # Standard: AQA-71361-QP-JUN23.PDF
    paper_code = f"{code}{paper}"
    base = f"https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/{SERIES_MAP[series_code][1]}/{SERIES_MAP[series_code][0]}/"

    # FM paper 3 has option variants (W for Mech+Stats combined, etc.)
    if subject_cfg.get('paper3_variant') and paper == 3:
        variant = subject_cfg['paper3_variant']
        # e.g. AQA-7367SM-QP-JUN23.PDF (further maths Stats+Mech option)
        variants = [
            (f"AQA-{code}{variant}-QP-{series_code}.PDF", f"AQA-{code}{variant}-MS-{series_code}.PDF", None),
            (f"AQA-{code}3{variant}-QP-{series_code}.PDF", f"AQA-{code}3{variant}-MS-{series_code}.PDF", None),
        ]
        return [(base + q, base + m, base + (i if i else '')) for q, m, i in variants]

    # Standard pattern: AQA-71361-QP-JUN23.PDF
    q_url = base + f"AQA-{paper_code}-QP-{series_code}.PDF"
    m_url = base + f"AQA-{paper_code}-MS-{series_code}.PDF"
    # Insert (for Econ P3 which has extracts)
    i_url = base + f"AQA-{paper_code}-INS-{series_code}.PDF"
    return [(q_url, m_url, i_url)]


SERIES_MAP = {
    'JUN22': ('june', 2022),
    'JUN23': ('june', 2023),
    'JUN24': ('june', 2024),
}

def main():
    results = {}
    for subj_key, cfg in SUBJECTS.items():
        results[subj_key] = {}
        subj_dir = BASE / cfg['dir']
        subj_dir.mkdir(parents=True, exist_ok=True)

        for year, series_code, month, label in SERIES:
            year_dir = subj_dir / str(year)
            year_dir.mkdir(exist_ok=True)
            series_results = []

            for paper in cfg['papers']:
                url_variants = build_urls(cfg, paper, series_code)
                paper_result = {'paper': paper, 'qp': None, 'ms': None, 'ins': None}

                for q_url, m_url, i_url in url_variants:
                    # QP
                    qp_out = year_dir / f"p{paper}-qp.pdf"
                    ok, size = try_download(q_url, qp_out)
                    if ok:
                        paper_result['qp'] = size
                    # MS
                    ms_out = year_dir / f"p{paper}-ms.pdf"
                    ok, size = try_download(m_url, ms_out)
                    if ok:
                        paper_result['ms'] = size
                    # INS (only try for Econ P3 and similar)
                    if i_url:
                        ins_out = year_dir / f"p{paper}-ins.pdf"
                        ok, size = try_download(i_url, ins_out)
                        if ok:
                            paper_result['ins'] = size
                    if paper_result['qp'] or paper_result['ms']:
                        break

                series_results.append(paper_result)
                status = []
                if paper_result['qp']: status.append(f"QP({paper_result['qp']//1024}KB)")
                if paper_result['ms']: status.append(f"MS({paper_result['ms']//1024}KB)")
                if paper_result['ins']: status.append(f"INS({paper_result['ins']//1024}KB)")
                sym = '✓' if status else '✗'
                print(f"  {sym} {cfg['title']:<15} {label} Paper {paper}: {', '.join(status) if status else 'NOT FOUND'}")

            results[subj_key][str(year)] = series_results

    # Write results.json for the index page to consume
    import json
    with open(BASE / 'results.json', 'w') as f:
        json.dump({'subjects': SUBJECTS, 'series': [{'code': c, 'year': y, 'label': l} for y, c, _, l in SERIES], 'results': results}, f, indent=2)

    print("\nDone.")


if __name__ == '__main__':
    main()
