# Backlog

## Delegation realism — feedback-driven enhancements (added 2026-07-24)

- **Multiple personas within a delegation (from U.S. military feedback).** A
  delegation is currently a single unified voice. The suggestion is to model each
  party as several internal actors — head of state or president, ministry of
  defence, foreign ministry, and so on — each with its own priorities, risk
  tolerance and red lines, so a delegation can carry visible internal
  disagreement and strike an inter-agency bargain of its own before it reaches
  the table. This would add the domestic, or two-level-game, layer that Section 9
  of the report currently notes is deliberately absent (Putnam 1988): the
  position a delegation brings would be the outcome of a prior internal
  negotiation, not a given. Open questions: whether the internal actors caucus
  before each round or argue live in plenary; how their disagreement is scored;
  and how to keep information isolation intact across the added actors.
- **Ground delegations in real decision-makers' personalities.** Research the
  documented negotiating style of the actual named leadership of each country —
  rhetoric, risk appetite, use of brinkmanship, history at the table — and fold
  it into each delegation's profile, so a party negotiates in the recognizable
  manner of its current government rather than a generic national voice. Pairs
  naturally with the multiple-personas item: the president persona shaped by the
  real head of state, the defence persona by the real defence minister. Caveat to
  carry forward: this sharpens realism but imports more of the model's biases
  about real individuals, and must stay clearly labelled as notional
  characterisation, not a claim about how a named person would actually behave.

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

- ~~**Mixed-model negotiation**~~ — first run done for Korea, as a controlled
  A/B against the isolated single-model baseline: DPRK and USA on Opus 4.8,
  China and Russia on Sonnet, ROK and Japan on Haiku 4.5, everything else held
  constant. Design, transcripts and comparative audit under
  [`sim/analysis/mixed-model/`](sim/analysis/mixed-model/).
  Still to do: repeat for Jammu & Kashmir; rotate which seats get which tier so
  the finding is not an artifact of *which* delegation was downgraded; and try
  distinct temperature settings, which this run did not vary.
- ~~**Behavioural personality variable — schema.**~~ Done (2026-07-23). Every
  profile now carries `behavioralProfile`: seven coded dimensions (temperament,
  risk tolerance, time horizon, concession pattern, procedural posture, trust
  posture, register), each a controlled level plus a note grounded in that
  delegation's own role, BATNA or privileged instructions. Authored for all 42
  delegations across the six scenarios; schema documented in
  [`sim/README.md`](sim/README.md) and on
  [`methodology.html`](methodology.html#dispositions); rendered as the
  *Delegation dispositions* table on each scenario report.
- **Personality is not yet a variable — only a field.** The blocks are authored
  per delegation and held constant across runs of a scenario, exactly like a red
  line, so nothing so far tests whether disposition *changes* anything. Two
  things needed to make it an experiment, in order:
  1. **Feed it into the negotiation.** No published transcript was generated
     with these blocks present. Until a run puts `behavioralProfile` in the
     delegation prompt, it is descriptive metadata with no causal role.
  2. **Vary it against a fixed profile.** The clean A/B is the mixed-model
     design with the axis swapped: same scenario, same profiles, same prompts
     and rounds, changing only the disposition on one or two seats — e.g. the
     DPRK seat played `patient`/`reciprocal` instead of `volatile`/
     `attritional`. Korea is the natural target since it already has a baseline
     and a mixed-model arm to sit beside.
  Worth reading `sim/analysis/mixed-model/findings.md` §1.3 first: Korea's
  authorised concession sets are disjoint, so **settlement rate cannot
  discriminate anything** on that scenario. Score a disposition arm on process
  instead — agreements won, which round a concession lands in, whether an
  offered channel is taken up, red-line breaks.
- **Cheap check available now.** The register dimension predicts which
  delegations should sound unlike each other. Re-running the cross-party
  bleeding audit with those labels turns "the voices feel similar" into a
  testable claim, using transcripts that already exist.
- **Model assignment may be a confound in the existing scenarios.** The four
  original negotiations ran on Opus while their Monte Carlo trials ran on
  Sonnet (see `methodology.html`). The audit is now done and does not settle
  this: it found tier-linked defects that are real and quotable, but also found
  the same error families in the all-Opus arm, and its design confounds model
  with seat. Treat the split as an unresolved confound and state it wherever
  those trial distributions are quoted.
- **The settlement-rate metric cannot vary on Korea, and possibly not
  elsewhere.** The audit found the DPRK's maximum authorised concession and the
  trilateral bloc's minimum authorised demand are logically disjoint, so no
  role-faithful agent can produce a comprehensive settlement on that scenario.
  The same check has not been run on the other five. Run it: read each
  scenario's `redLines` and `concessionsWilling` against each other and record
  which tables are settleable at all. Any scenario that is not should stop
  having its zero-settlement result reported as a finding. Building one
  scenario whose authorised concession sets *do* overlap would make settlement
  rate a variable rather than a constant, and is the single change that would
  most improve what the Monte Carlo layer can measure.
- **The mixed-model comparison needs replication before any of it is a rate.**
  n = 1 per condition. To turn documented instances into frequencies: rotate
  each tier across each seat so model and role come apart, run at least ten
  replicates per cell, and have a second coder repeat the red-line audit blind
  to the model assignment, reporting inter-rater agreement. Until then nothing
  in `findings.md` should be cited as an effect size.
- **No `analysis.json` exists for the mixed run**, so no scoreboard comparison
  between the two arms is possible without constructing one post hoc by a
  different method than the baseline used. If a numeric comparison is wanted,
  re-run the mixed arm through the same analyst pipeline rather than
  reconstructing figures by hand.
