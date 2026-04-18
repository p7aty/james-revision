// Master schedule — single source of truth for calendar + today view
// Edit here, everything updates. Dates are ISO format.

const SCHEDULE = [
  // ============ PHASE 1: AT 6TH FORM ============
  {
    week: 1,
    weekTitle: "Week 1 · Sat 18 – Sun 26 Apr",
    weekFocus: "Econ Labour market cluster · FM core reactivation begins",
    days: [
      { date: "2026-04-18", phase: "Starter", hours: 1.5, tasks: [
        { subj: "econ", text: 'Labour market part 1 (half-session): 3.1.6.1 demand for labour + 3.1.6.2 supply of labour. 20 min read spec → 30 min notes → 30 min draw 3.1.6.3 perfect comp wage diagram 3 times → 10 min retrieval test.', pack: "econ-labour-1" }
      ]},
      { date: "2026-04-19", hours: 3, tasks: [
        { subj: "econ", text: 'Labour market part 2: 3.1.6.4 monopsony (hardest diagram — memorise cold), 3.1.6.5 trade unions, 3.1.6.6 NMW, 3.1.6.7 discrimination.', pack: "econ-labour-2" }
      ]},
      { date: "2026-04-20", hours: 3, tasks: [
        { subj: "econ", text: 'Market structures tidy-up: 3.1.5.2 objectives of firms, 3.1.5.3 perfect competition (SR/LR diagrams, shutdown).', pack: "econ-market-structures-1" },
        { subj: "fm", text: 'C2 Linear transformations (RED) — ExamSolutions video + 3 worked examples.', pack: "fm-linear-transformations" }
      ]},
      { date: "2026-04-21", hours: 3, tasks: [
        { subj: "econ", text: 'Market structures: 3.1.5.4 monopolistic comp, 3.1.5.7 price discrimination, 3.1.5.8 creative destruction (RED), 3.1.5.9 contestability.', pack: "econ-market-structures-2" },
        { subj: "fm", text: 'D3 Maclaurin series (RED) — standard series list, then 3 practice Qs.', pack: "fm-maclaurin" }
      ]},
      { date: "2026-04-22", hours: 3, tasks: [
        { subj: "econ", text: 'Past paper Qs: 2 labour market essay plans (don\'t write out — plan structure only).', pack: "econ-labour-essays" },
        { subj: "pol", text: 'Light session: COMP-1 comparative theories (RED) — rational/cultural/structural approaches. One-page summary.', pack: "pol-comp-theories" }
      ]},
      { date: "2026-04-23", hours: 3, tasks: [
        { subj: "econ", text: 'Externalities + market failure: 3.1.8.2, 3.1.8.4. Practice MSB/MSC diagrams until automatic.', pack: "econ-externalities" },
        { subj: "fm", text: 'H2 Inverse hyperbolics + H3 Hyperbolic calculus (both RED) — paired session.', pack: "fm-hyperbolics" }
      ]},
      { date: "2026-04-24", hours: 3, tasks: [
        { subj: "econ", text: '3.1.8.7 Competition policy (RED) — CMA examples, one recent merger case. Plus 3.1.1.1 methodology, 3.1.1.4 scarcity ambers.', pack: "econ-competition-policy" },
        { subj: "math", text: 'Ambers: E2 small angle approximations + E4 R sin(x+α) form. 5 questions each.', pack: "math-trig-ambers" }
      ]},
      { date: "2026-04-25", hours: 5, tasks: [
        { subj: "econ", text: 'Full timed Micro Paper 1 (2hr) + mark (1hr). First diagnostic after a week of work.', pack: "past-paper-log" },
        { subj: "fm", text: 'E1 Improper integrals (RED) + E5 Inverse trig/hyperbolic integration (RED) — reactivation only.', pack: "fm-improper-integrals" }
      ]},
      { date: "2026-04-26", hours: 4, tasks: [
        { subj: "fm", text: 'I3 SHM + damped/forced oscillations (RED) — this is hard. Book tutor session if stuck.', pack: "fm-shm" },
        { subj: "pol", text: 'US-7 Pressure groups/PACs/Super PACs (RED) — case studies (NRA, AIPAC, AARP). One-page summary.', pack: "pol-us-pressure-groups" }
      ]}
    ]
  },
  {
    week: 2,
    weekTitle: "Week 2 · Mon 27 Apr – Sun 3 May",
    weekFocus: "Econ Financial markets cluster · FM core continues",
    days: [
      { date: "2026-04-27", hours: 3, tasks: [
        { subj: "econ", text: 'Financial markets project: 3.2.4.1 structure (money/capital markets, bond-yield inverse). 3.2.4.2 commercial vs investment banks, credit creation.', pack: "econ-financial-1" },
        { subj: "fm", text: 'Review all 7 FM core reds — quick re-test. Anything still shaky gets another session later.', pack: "fm-core-review" }
      ]},
      { date: "2026-04-28", hours: 3, tasks: [
        { subj: "econ", text: 'Financial markets: 3.2.4.3 central banks, MPC, monetary policy transmission, QE, forward guidance. Check BoE current stance.', pack: "econ-financial-2" },
        { subj: "math", text: 'Amber cluster: G2 chain/product/quotient rules + H4 integration by parts. 10 mixed Qs.', pack: "math-calc-ambers" }
      ]},
      { date: "2026-04-29", hours: 3, tasks: [
        { subj: "econ", text: 'Financial markets: 3.2.4.4 regulation (PRA, FPC, FCA), moral hazard, systemic risk. Plus 3.2.1.3 index numbers (RED) — 3 calc questions.', pack: "econ-financial-3" },
        { subj: "pol", text: 'Jan-dated ambers: UK-7 parties, US-5 electoral process. Refresh notes.', pack: "pol-uk-us-ambers" }
      ]},
      { date: "2026-04-30", hours: 3, tasks: [
        { subj: "econ", text: 'Macro ambers: 3.2.2.4 multiplier (calc practice), 3.2.2.5/6 AS determinants. Keynesian vs Classical AS side-by-side.', pack: "econ-macro-ambers-1" },
        { subj: "math", text: 'Ambers: H5 partial fractions + H6 differential equations. Paired — they often appear together.', pack: "math-integration-ambers" }
      ]},
      { date: "2026-05-01", hours: 3, tasks: [
        { subj: "econ", text: 'Micro cleanup: 3.1.3.1/3.1.3.3 demand/supply determinants, 3.1.4.2 specialisation, 3.1.4.3 returns to scale, 3.1.4.8 tech change. Jan-dated — assume decayed.', pack: "econ-micro-cleanup" }
      ]},
      { date: "2026-05-02", hours: 5, tasks: [
        { subj: "econ", text: 'Full timed Micro Paper 1 (different paper) + mark review. Compare marks vs last week\'s attempt.', pack: "past-paper-log" },
        { subj: "fm", text: 'Mechanics reactivation starts: MA1 Momentum + impulse (RED) — worked examples, 5 practice Qs.', pack: "fm-momentum" }
      ]},
      { date: "2026-05-03", hours: 5, tasks: [
        { subj: "econ", text: 'Remaining micro ambers: 3.1.5.11 surplus, 3.1.6.2 labour supply, 3.1.7.1 Gini/Lorenz, 3.1.8.2 market failure. Plus essay plan on monopoly evaluation.', pack: "econ-micro-remaining" },
        { subj: "fm", text: 'Mechanics: MA2 Coeff of restitution + MA3 Direct/oblique impacts (both RED). Paired.', pack: "fm-collisions" }
      ]}
    ]
  },
  {
    week: 3,
    weekTitle: "Week 3 · Mon 4 – Sun 10 May",
    weekFocus: "Econ P1 final run-in · last week of 6th form",
    days: [
      { date: "2026-05-04", hours: 3, tasks: [
        { subj: "econ", text: 'Full timed Paper 1 (save June 2024 for this — dress rehearsal). Mark honestly. Wrong answers = tomorrow\'s list.', pack: "past-paper-log" }
      ]},
      { date: "2026-05-05", hours: 3, tasks: [
        { subj: "econ", text: 'Review yesterday\'s paper in depth. Dropped-mark topic → back to notes. 2 essay plans on weak areas.' }
      ]},
      { date: "2026-05-06", hours: 3, tasks: [
        { subj: "econ", text: 'Data response drill — 2 data response Qs from different papers, 25 mins each under time pressure. This is where marks swing.' }
      ]},
      { date: "2026-05-07", hours: 3, tasks: [
        { subj: "econ", text: 'Essay technique drill — 3 essay plans on examiner favourites: monopoly efficiency, minimum wage effects, market failure & govt intervention. Evaluation focus (magnitude, SR/LR, assumptions).', pack: "econ-essay-technique" }
      ]},
      { date: "2026-05-08", phase: "Last day at 6th form", hours: 3, tasks: [
        { subj: "econ", text: 'Light retrieval: flashcard blast through all Micro definitions + diagrams. No new learning.' },
        { rest: true, text: 'Last day of 6th form. Celebrate briefly — big push starts tomorrow.' }
      ]},
      { date: "2026-05-09", phase: "Study leave begins", hours: 2, tasks: [
        { subj: "econ", text: 'Light review only: any still-shaky diagrams, re-read labour market notes. Stop by 4pm.' }
      ]},
      { date: "2026-05-10", phase: "P1 eve", hours: 2, tasks: [
        { subj: "econ", text: 'Final pre-exam: flashcards on weak diagrams. Early night.' }
      ]}
    ]
  },
  // ============ PHASE 2: STUDY LEAVE ============
  {
    week: 4,
    weekTitle: "Week 4 · Mon 11 – Sun 17 May",
    weekFocus: "Econ P1 → Econ P2 · Pol P1 + FM P1 double looms",
    exams: [{ date: "2026-05-11", name: "Economics Paper 1 (Micro)", time: "09:05", room: "Gymnasium", seat: "F8", duration: "2 hours" }],
    days: [
      { date: "2026-05-11", phase: "Exam day", hours: 2, tasks: [
        { rest: true, text: 'After Econ P1, rest afternoon. Then 2hr Econ P2 (Macro) start: refresh 3.2.4 financial markets notes (re-read only).' }
      ]},
      { date: "2026-05-12", hours: 6, tasks: [
        { subj: "econ", text: 'Macro ambers: 3.2.3.3 inflation (demand-pull/cost-push, Fisher MV=PQ), 3.2.3.4 Phillips curve (SR + LR diagrams).', pack: "econ-inflation" },
        { subj: "pol", text: 'LIB-T2 Mill (RED) — hedonism criticism, self/other-regarding actions. Plus Wollstonecraft, Green ambers.', pack: "pol-liberalism-thinkers" }
      ]},
      { date: "2026-05-13", hours: 6, tasks: [
        { subj: "econ", text: 'International: 3.2.6.1 globalisation, 3.2.6.2 trade/comp advantage, 3.2.6.3 BoP. Comp advantage calc practice.', pack: "econ-international" },
        { subj: "fm", text: 'Mechanics: MB1 work done + MB4 Hooke\'s Law/EPE (both RED). Paired.', pack: "fm-work-energy" }
      ]},
      { date: "2026-05-14", hours: 6, tasks: [
        { subj: "econ", text: '3.2.5.2 supply-side policies — 3 current UK examples. Multiplier calcs one more time.', pack: "econ-supply-side" },
        { subj: "fm", text: 'Mechanics: MB5 Power + MC1 Horizontal circular motion (both RED).', pack: "fm-power-circular" }
      ]},
      { date: "2026-05-15", hours: 6, tasks: [
        { subj: "econ", text: 'Full timed Macro Paper 2 + mark. Final diagnostic before Monday.', pack: "past-paper-log" },
        { subj: "fm", text: 'MC2 Vertical circular motion (RED) — 2 worked examples. Ideal day for tutor session.', pack: "fm-vertical-circular" }
      ]},
      { date: "2026-05-16", hours: 6, tasks: [
        { subj: "econ", text: 'Review yesterday\'s paper + any remaining weak macro. Essay plans.' },
        { subj: "pol", text: 'UK-5 Devolution (amber), UK-6 Electoral systems (amber). Paired.', pack: "pol-uk-devolution" }
      ]},
      { date: "2026-05-17", phase: "P2 eve", hours: 3, tasks: [
        { subj: "econ", text: 'Light review only. Financial markets one more time. Macro diagram flashcards. Early night.' }
      ]}
    ]
  },
  {
    week: 5,
    weekTitle: "Week 5 · Mon 18 – Sun 24 May",
    weekFocus: "The brutal double: Pol P1 + FM P1 on Thursday",
    exams: [
      { date: "2026-05-18", name: "Economics Paper 2 (Macro)", time: "13:00", room: "Main Hall", seat: "B9", duration: "2 hours" },
      { date: "2026-05-21", name: "Politics Paper 1 (UK)", time: "09:05", room: "Gymnasium", seat: "F10", duration: "3 hours" },
      { date: "2026-05-21", name: "Further Maths Paper 1", time: "13:00", room: "Main Hall", seat: "C6", duration: "2 hours" }
    ],
    days: [
      { date: "2026-05-18", phase: "Exam day", hours: 2, tasks: [
        { rest: true, text: 'Econ P2 afternoon. After: rest. 2hr light session — FM core reds quick review (C2, D3, E1, E5, H2, H3, I3).' }
      ]},
      { date: "2026-05-19", phase: "FM P1 emergency", hours: 6, tasks: [
        { subj: "fm", text: 'FM P1 emergency session 1 — all 7 core reds with reactivation Qs. Plus FM core ambers B3, B4, D1, D2.' },
        { subj: "pol", text: '1hr: UK Paper 1 reds/ambers sweep — Mill, Wollstonecraft, Green.' }
      ]},
      { date: "2026-05-20", phase: "Pol P1 + FM P1 eve", hours: 6, tasks: [
        { subj: "pol", text: 'UK Paper 1 final review: constitution, Parliament, PM, judiciary, devolution, elections, parties, pressure groups, EU, rights. 3 essay plans.' },
        { subj: "fm", text: 'FM P1 final review: focus on weakest core topics (hyperbolics, Maclaurin, SHM). No new material.' }
      ]},
      { date: "2026-05-21", phase: "Double exam day", hours: 0, tasks: [
        { rest: true, text: 'Politics P1 morning. Quick lunch. FM P1 afternoon. Then total rest — brain will be fried.' }
      ]},
      { date: "2026-05-22", phase: "Golden window starts", hours: 4, tasks: [
        { subj: "math", text: 'Maths P1 prep starts. Pure reds/ambers sweep: D1/D2/D4 sequences & series + E2/E4 trig. Small session after yesterday.' },
        { subj: "fm", text: 'Gentle FM Mechanics: MD3 equilibrium/toppling (RED) — video + 3 Qs.', pack: "fm-equilibrium" }
      ]},
      { date: "2026-05-23", hours: 6, tasks: [
        { subj: "math", text: 'Maths ambers: G2 chain/product/quotient, H4 parts, H5 partial fractions, H6 diff eqns. 15-question mixed set.' },
        { subj: "fm", text: 'Mechanics: ME1 variable force + ME2 variable mass (both RED). Paired.', pack: "fm-variable-force" }
      ]},
      { date: "2026-05-24", hours: 6, tasks: [
        { subj: "econ", text: 'Econ P3 prep starts: P3 is synoptic, case-study based. Read through 2 past Paper 3s + mark schemes to understand format.', pack: "econ-p3-technique" },
        { subj: "fm", text: 'FM P2 prep: review FM core reds/ambers from P1 perspective (anything that could reappear on P2).' }
      ]}
    ]
  },
  {
    week: 6,
    weekTitle: "Week 6 · Mon 25 – Sun 31 May",
    weekFocus: "Golden window — Maths P1 + FM P2 + Econ P3 + heavy FM Mechanics",
    days: [
      { date: "2026-05-25", hours: 6, tasks: [
        { subj: "math", text: 'Stats ambers: L2 histograms/boxplots, L3 correlation/regression, L4 Large data set (RED — DEFRA dataset, know it cold), N3 binomial→normal.' },
        { subj: "fm", text: 'Stats option ambers: SA2 distributions, SB2 Poisson→binomial, SC1/SC2 continuous RVs.' }
      ]},
      { date: "2026-05-26", hours: 6, tasks: [
        { subj: "math", text: 'Mechanics ambers: Q3 projectiles, R1 Newton\'s laws, R3 friction, R4 connected particles, R5 inclined, S moments. 10-Q set.' },
        { subj: "fm", text: 'Stats reds: SC3 rectangular dist + SC4 exponential dist (both RED). Paired.', pack: "fm-stats-distributions" }
      ]},
      { date: "2026-05-27", hours: 6, tasks: [
        { subj: "math", text: 'Full timed Maths Paper 1 + mark. First real diagnostic.', pack: "past-paper-log" },
        { subj: "fm", text: 'Stats: SE1 goodness of fit tests (RED). Plus SD1/SD4 ambers.', pack: "fm-goodness-of-fit" }
      ]},
      { date: "2026-05-28", hours: 6, tasks: [
        { subj: "math", text: 'Review yesterday\'s paper. Focus on dropped-mark topics.' },
        { subj: "econ", text: 'Econ P3: do one past case study under time pressure (~45 min).' }
      ]},
      { date: "2026-05-29", hours: 5, tasks: [
        { subj: "fm", text: 'Full timed FM Paper 2 + mark. Big diagnostic before a week with no maths exams.', pack: "past-paper-log" }
      ]},
      { date: "2026-05-30", hours: 6, tasks: [
        { subj: "fm", text: 'Review yesterday\'s FM P2. Any red that reappeared = topic for next tutor session.' },
        { subj: "econ", text: 'Second past P3 timed. Compare marks to Thursday.' }
      ]},
      { date: "2026-05-31", hours: 6, tasks: [
        { subj: "math", text: 'Second timed Maths P1 (different paper). Progress check vs Wed.' },
        { subj: "pol", text: 'Politics P2 prep: US reds/ambers sweep — US-7 pressure groups, US-5 electoral, US-6 parties, US-8 civil rights. Plus COMP-1 theories (RED).' }
      ]}
    ]
  },
  {
    week: 7,
    weekTitle: "Week 7 · Mon 1 – Sun 7 Jun",
    weekFocus: "Maths P1, Econ P3, FM P2 cluster — three exams in three days",
    exams: [
      { date: "2026-06-03", name: "Mathematics Paper 1", time: "13:00", room: "Main Hall", seat: "C4", duration: "2 hours" },
      { date: "2026-06-04", name: "Economics Paper 3 (Synoptic)", time: "09:05", room: "Gymnasium", seat: "F7", duration: "2 hours" },
      { date: "2026-06-05", name: "Further Maths Paper 2", time: "13:05", room: "Main Hall", seat: "C4", duration: "2 hours" }
    ],
    days: [
      { date: "2026-06-01", hours: 5, tasks: [
        { subj: "math", text: 'Maths P1 review: flashcards + diagram retrieval. Light session — tomorrow is prep-only.' },
        { subj: "fm", text: 'FM Mechanics buffer: revisit any RED still feeling shaky.' }
      ]},
      { date: "2026-06-02", phase: "Maths P1 eve", hours: 3, tasks: [
        { subj: "math", text: 'Pre-exam review only. No new material. Walk, early night.' }
      ]},
      { date: "2026-06-03", phase: "Exam day", hours: 2, tasks: [
        { rest: true, text: 'Maths P1 afternoon. After: 2hr Econ P3 — full synoptic review of weakest topics (labour market + financial markets).' }
      ]},
      { date: "2026-06-04", phase: "Exam day", hours: 2, tasks: [
        { rest: true, text: 'Econ P3 morning. Afternoon rest. Evening: FM P2 is tomorrow — flashcards only, no new material.' }
      ]},
      { date: "2026-06-05", phase: "Exam day", hours: 0, tasks: [
        { rest: true, text: 'FM P2 afternoon. After: total rest. Big week done. Weekend is Politics P2 focus.' }
      ]},
      { date: "2026-06-06", hours: 6, tasks: [
        { subj: "pol", text: 'Politics P2 intensive: US + Comparative. All reds/ambers. Full essay plans on US pressure groups + comparative electoral systems.' },
        { subj: "fm", text: 'Switch to FM P3 prep. Review all Mechanics reactivation notes. Which 3 topics feel weakest?' }
      ]},
      { date: "2026-06-07", phase: "Pol P2 eve", hours: 4, tasks: [
        { subj: "pol", text: 'Politics P2 final review. Flashcards on US institutions + comparative frameworks. Early night.' }
      ]}
    ]
  },
  {
    week: 8,
    weekTitle: "Week 8 · Mon 8 – Sun 14 Jun",
    weekFocus: "Pol P2 → Maths P2 → FM P3 — the final maths stretch",
    exams: [
      { date: "2026-06-08", name: "Politics Paper 2 (USA & Comparative)", time: "09:05", room: "Gymnasium", seat: "D6", duration: "3 hours" },
      { date: "2026-06-11", name: "Mathematics Paper 2", time: "13:00", room: "Main Hall", seat: "C7", duration: "2 hours" },
      { date: "2026-06-12", name: "Further Maths Paper 3 (Mech & Stats)", time: "13:00", room: "Main Hall", seat: "F6", duration: "2 hours" }
    ],
    days: [
      { date: "2026-06-08", phase: "Exam day", hours: 2, tasks: [
        { rest: true, text: 'Politics P2 morning. Afternoon rest. Evening: Maths P2 prep — Mechanics ambers (projectiles, connected particles, inclined planes).' }
      ]},
      { date: "2026-06-09", hours: 6, tasks: [
        { subj: "math", text: 'Full timed Maths Paper 2 + mark. Focus on dropped-mark topics.' },
        { subj: "fm", text: 'FM P3 Mechanics review: MA, MB, MC, MD, ME chunks quickly.' }
      ]},
      { date: "2026-06-10", phase: "Maths P2 eve", hours: 4, tasks: [
        { subj: "math", text: 'Maths P2 final review. Flashcards on stats formulas, mechanics diagrams. Early night.' }
      ]},
      { date: "2026-06-11", phase: "FM P3 eve", hours: 3, tasks: [
        { subj: "math", text: 'Maths P2 afternoon. After: FM P3 final run-in. Mechanics + Stats reds one more time. Early night — tomorrow is the big one.' }
      ]},
      { date: "2026-06-12", phase: "THE big one", hours: 0, tasks: [
        { rest: true, text: 'FM P3 afternoon. After: total rest. Order takeaway. Hardest paper given starting position — celebrate regardless of outcome.' }
      ]},
      { date: "2026-06-13", hours: 5, tasks: [
        { subj: "pol", text: 'Politics P3 intensive: Political Ideas. All three core ideologies + Nationalism. Thinkers drill — 30 seconds on each named thinker\'s key concepts.' }
      ]},
      { date: "2026-06-14", hours: 6, tasks: [
        { subj: "pol", text: 'Politics P3: SOC-T5 Giddens (RED), Mill (RED), Crosland, Luxemburg. Essay plan: Third Way vs traditional socialism.' },
        { subj: "math", text: 'Maths P3 prep: it\'s synoptic — do a past P3 to see the style.' }
      ]}
    ]
  },
  {
    week: 9,
    weekTitle: "Week 9 · Mon 15 – Thu 18 Jun",
    weekFocus: "Final stretch — Pol P3 + Maths P3 and done",
    exams: [
      { date: "2026-06-16", name: "Politics Paper 3 (Ideas)", time: "13:05", room: "Main Hall", seat: "C9", duration: "3 hours" },
      { date: "2026-06-18", name: "Mathematics Paper 3", time: "13:00", room: "Main Hall", seat: "C4", duration: "2 hours" }
    ],
    days: [
      { date: "2026-06-15", phase: "Pol P3 eve", hours: 5, tasks: [
        { subj: "pol", text: 'Political Ideas final review: thinkers quick-fire test. Essay plan on one core ideology + one on Nationalism. Early night.' }
      ]},
      { date: "2026-06-16", phase: "Exam day", hours: 2, tasks: [
        { rest: true, text: 'Politics P3 afternoon. After: 2hr Maths P3 — synoptic past paper review. No new material.' }
      ]},
      { date: "2026-06-17", phase: "Maths P3 eve", hours: 4, tasks: [
        { subj: "math", text: 'Maths P3 final review: remaining weak areas. 5 mixed practice Qs. Early night.' }
      ]},
      { date: "2026-06-18", phase: "DONE", hours: 0, tasks: [
        { rest: true, text: 'Maths P3 afternoon. Last exam. 13 papers over 38 days. Go celebrate — earned every moment.' }
      ]}
    ]
  }
];

// Helper: format an ISO date into human-readable form
function formatDate(iso) {
  const d = new Date(iso + 'T12:00:00');
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
}

function formatDateShort(iso) {
  const d = new Date(iso + 'T12:00:00');
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
}

// Today as ISO string
function todayISO() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// Find today's day object in the schedule
function findToday() {
  const today = todayISO();
  for (const week of SCHEDULE) {
    for (const day of week.days) {
      if (day.date === today) return { day, week };
    }
  }
  return null;
}

// Find next exam from today
function findNextExam() {
  const today = todayISO();
  const exams = [];
  for (const week of SCHEDULE) {
    if (week.exams) {
      for (const ex of week.exams) {
        if (ex.date >= today) exams.push(ex);
      }
    }
  }
  exams.sort((a, b) => a.date.localeCompare(b.date));
  return exams[0] || null;
}

// Count days between ISOs (inclusive)
function daysBetween(a, b) {
  const d1 = new Date(a + 'T12:00:00');
  const d2 = new Date(b + 'T12:00:00');
  return Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
}

// Render a day's tasks as HTML
function renderTasks(day) {
  return day.tasks.map(t => {
    if (t.rest) {
      return `<div class="task rest">${t.text}</div>`;
    }
    const subjLabel = { econ: 'ECON', math: 'MATH', fm: 'FM', pol: 'POL' }[t.subj] || '';
    const subjClass = `s-${t.subj}`;
    if (t.pack && t.pack !== 'past-paper-log') {
      return `<div class="task"><span class="s ${subjClass}">${subjLabel}</span><a href="packs/${t.pack}.html">${t.text}</a></div>`;
    }
    return `<div class="task"><span class="s ${subjClass}">${subjLabel}</span>${t.text}</div>`;
  }).join('');
}

// Render a day's tasks — for packs subfolder (relative path fix)
function renderTasksFromPack(day) {
  return day.tasks.map(t => {
    if (t.rest) {
      return `<div class="task rest">${t.text}</div>`;
    }
    const subjLabel = { econ: 'ECON', math: 'MATH', fm: 'FM', pol: 'POL' }[t.subj] || '';
    const subjClass = `s-${t.subj}`;
    if (t.pack && t.pack !== 'past-paper-log') {
      return `<div class="task"><span class="s ${subjClass}">${subjLabel}</span><a href="${t.pack}.html">${t.text}</a></div>`;
    }
    return `<div class="task"><span class="s ${subjClass}">${subjLabel}</span>${t.text}</div>`;
  }).join('');
}
