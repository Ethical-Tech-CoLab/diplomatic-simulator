# Backlog

## Needs review — Korea & Jammu-Kashmir scenarios (added 2026-07-22)

Both scenarios are live (`sess-korea-iscne-01`, `sess-kashmir-iscne-01`) but have
not been reviewed. In rough priority order:

- **Generation method differs from the first four scenarios.** Korea and
  Jammu-Kashmir were written in a single context rather than by one isolated
  agent per delegation seeing only its own privileged instructions. The
  information-isolation claim in `methodology.html` and in
  `DiplomaticSimulator-Paper.md` does not hold for these two as generated.
  Either re-run them through the isolated multi-agent pipeline, or state the
  difference explicitly on both pages and in the scenario reports.
- **Fidelity check against the source PDFs.** Verify each profile's principles,
  red lines, BATNA, concessions and private instructions against the
  corresponding `* Scenario Docs/` privileged-instruction PDF. Particular
  attention to Korea/PRK (refusal to discuss the Japanese abductions, permission
  to ignore the Japanese delegation) and Kashmir/CHN and Kashmir/RUS (standing
  bans on bilateral contact with the Jammu & Kashmir delegation) — those
  constraints shape the transcript and must be right.
- **Second opinion on the red-line-crossed calls.** These are authored
  judgments, not detector output. Korea: the U.S. pressing chemical/cyber
  against the chair's framework ruling (China), and refusal of sanctions relief
  during an acknowledged humanitarian crisis (DPRK). Jammu-Kashmir: a final text
  containing no autonomy provision (US and UK), and reconstruction vested in the
  administering authority (J&K delegation). Same caveat applies to the
  satisfaction scores and `agreementsWon` counts.
- **Kashmir venue/date reconciliation.** The source pack is internally
  inconsistent: UNSCR 2900 sets a conference "target date of 9 February 2024, in
  Vienna Austria", while the 17 October entry datelines Geneva. We used Geneva,
  9 February 2026. Confirm that is the reading we want, and note it if so.
- **Monte Carlo trials are thin and authored.** Korea and Jammu-Kashmir have 12
  trials each against 19–20 for the other five, and — like the rest of the
  corpus — the outcomes were written rather than sampled from re-run
  negotiations. Top up to 20 for comparability, and treat every percentage the
  page derives from 12 trials with the same caution the peer review applies to
  "38% of runs" (3 of 8). Neither new scenario produced a comprehensive
  settlement, which is consistent with the other five and therefore *not*
  independent evidence for the paper's headline claim.
- **Stale counts across the site.** `methodology.html`, the paper, and any
  "four scenarios" phrasing need updating to six.
- **Re-run the cross-party bleeding audit.** `analysis.html` and
  `sim/analysis/audits` predate these two scenarios. Korea and Jammu-Kashmir
  were deliberately written with more distinct delegation voices and
  differentiated outcomes than Cyprus's all-zeros scoreboard, so they are a
  useful test of whether the audit detects stylistic homogenization.
- **`sim/build_transcript.py` is new** — rolls `moves/` into
  `transcript.json`/`transcript.md`. Korea and Jammu-Kashmir keep their
  `moves/` directories so they can be rebuilt from source; the original four
  cannot (their move files were discarded after the build). Consider
  reconstructing `moves/` for the first four from their transcripts.

## Live simulation

- ~~**Loop playback.**~~ Done. `live.html` has a Loop control (Off / This
  session / All scenarios) and honours `?loop=one|all` and `?autoplay=1`;
  "All scenarios" cycles the curated `PREF` list, so every scenario is covered
  by the one page. Every scenario report now links to it.
- **Kiosk polish, if the loop gets real use:** a full-screen mode that hides the
  controls and the header, and a visible countdown on the outcome card instead
  of the current "shortly…" text.

## Experiments

- **Mixed-model negotiation** — assign different LLMs to different delegations
  (e.g. Opus for some parties, Sonnet/Haiku for others) with distinct
  persona/temperature settings, to break the single-model stylistic
  homogenization seen in the bleeding audit and produce more genuinely
  independent adversaries. Keep any delegation that must defend a hard red line
  on Opus or Sonnet (see `analysis.html`: Haiku self-breaches red lines and
  fabricates terms at dense adversarial tables). Not yet run.
