# Diplomatic Simulator — simulation toolchain

Replicates the Iran–US "diplomacy table" negotiation format for new scenarios,
driven by each scenario's source PDFs (scenario brief + per-party *privileged
instructions*).

## Pipeline
1. `extract_pdf.py "<Scenario Docs folder>" <out_dir>` — PDF → text.
2. Build a structured **party profile** per delegation (end-states, red lines,
   BATNA, private instructions) — see `scenarios/<name>/profiles/*.json`.
3. Run the **negotiation**: one agent per party, each seeing only its own
   privileged instructions + a shared public brief + the running transcript,
   across plenary rounds (opening → positioning → bargaining → closing).
4. Analyze (`analysis.json`): scoreboard (satisfaction, red-lines crossed),
   per-party debriefs, and an SRSG convener report.
5. `build_session.py <manifest.json> <out.json>` — assemble a `data.js`
   session+scenario in the diplomacy-table schema.
6. `inject.py <built.json>...` — merge into `diplomacy-demo/data.js`.

## Scenarios
- `scenarios/arctic/` — 7 parties (CAN, CHN, DNK, FIN, NOR, RUS, USA). Full run.
- Central Asia, Cyprus, South China Sea — see their folders.

Source scenario packs: U.S. Army War College ISCNE materials (see the
`* Scenario Docs/` folders at repo root).
