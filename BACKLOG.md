# Backlog

## Needs review — Korea & Jammu-Kashmir scenarios (added 2026-07-22)

Both scenarios are live (`sess-korea-iscne-01`, `sess-kashmir-iscne-01`) but have
not been reviewed. In rough priority order:

- ~~**Generation method differs from the first four scenarios.**~~ Fixed. Both
  scenarios were re-run through the isolated pipeline: one agent per delegation,
  each reading only the public brief and its own profile, three rounds in
  lockstep, each round seeing only the public transcript so far. The authored
  single-context versions are in git history at commit `ac390a5`. Two caveats
  remain: isolation is enforced by instruction rather than by sandbox (an agent
  *could* read another profile; each was told not to), and the analysis cell
  reads everything by design, as the pipeline intends.
- **Now worth doing: compare the two versions.** We have the same scenario
  generated both ways, which is the cheap test the peer review asks for. The
  authored Korea run had the U.S. pressing chemical/cyber against the chair's
  ruling; in the isolated run that issue was raised once and dropped, and
  China's crossed red line came instead from the "no DPRK access" reactor model.
  The authored Kashmir run and the isolated one reached the same destination — a
  humanitarian annex and nothing else — by different routes. Write that up.
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
- **The Monte Carlo trials predate the isolated re-run.** Both scenarios' 20
  trials were written against the earlier authored transcripts and calibrated to
  their outcomes. The trials vary conditions rather than replay the base run, so
  they are not strictly invalidated — but the baseline they were tuned against
  no longer exists, and at minimum the party satisfaction ranges should be
  re-checked against the isolated runs.
- **Monte Carlo outcomes are authored, not sampled.** Both new scenarios now
  have 20 trials, matching the corpus — but as with every other scenario the
  outcomes were written under varied conditions rather than produced by re-running
  the negotiation. Neither reached a comprehensive settlement, which is
  consistent with the other five and therefore *not* independent evidence for
  the paper's headline claim. The honest fix is the same as the isolation fix
  above: re-run the trials as actual negotiations. Until then the Monte Carlo
  page should say plainly what these numbers are.
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
