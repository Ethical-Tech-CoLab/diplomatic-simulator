# Peer Review — *The Diplomatic Simulator: A Research Report on a Multi-Party Negotiation Simulator Driven by Artificial Intelligence Agents*

**Reviewer role:** Generous-but-rigorous referee (general audience: reader interested in AI, negotiation pedagogy, and computational social science)
**Recommendation:** **Major revisions**
**Date:** 22 July 2026

---

## Summary of the submission

The report describes a research prototype that replays multi-party crisis-negotiation exercises with each national delegation played by an AI agent. Its organising principle is *information isolation*: each delegation agent sees only its own confidential brief, a shared public brief, and the running public transcript. Four multi-party scenarios (Arctic, Central Asia, Cyprus, South China Sea) plus an earlier two-party Hormuz session have been run; a separate analyst agent scores each session; and a Monte Carlo layer re-runs each scenario eight times under randomised external conditions to distinguish robust outcomes from lucky ones. Every intermediate artefact is committed to the repository, and search indexing is disabled so that AI-invented statements attributed to real states cannot circulate as reporting.

This is a careful, modest, and unusually honest piece of work. The report does not oversell; §11 and §12 are candid to a degree that most work in this space is not, and the decision to disable search indexing (§10.3) is a genuinely responsible design choice that the field should copy. The writing is clear and the provenance trail is exemplary.

My recommendation is *major revisions* rather than *minor* for one reason that dominates all the others: **the report acknowledges its deepest limitation — one model plays every side — but never tests it, even though the test is cheap and available.** Several of the headline findings are, as written, indistinguishable from artefacts of that single limitation. The revisions below are mostly about *interrogating claims the report already half-makes against itself*, not about adding scope.

---

## Major issues

### M1. The central confound (§11.1) is acknowledged but never probed, though it is the cheapest thing in the paper to probe

The report states plainly in §1.6 and §11.1 that "a single underlying model plays every side of every table, so the adversaries are not genuinely independent minds," and calls this "the deepest limitation in the design, because it undercuts the premise that a negotiation is a meeting of different minds." I agree with the diagnosis. The problem is that the report then proceeds to report satisfaction scores, red-line survival rates, deal-type distributions, and coalition frequencies *as if* they were findings about negotiation, when every one of them is confounded by this single fact.

The distinctive move a referee wants to see is not more scenarios — it is a *seam*. Run **one** scenario (the Arctic is the natural choice, as the flagship) with delegations driven by two or three *different* underlying models, or at minimum with materially different sampling temperatures / system-prompt personas, and report whether the deal type, the satisfaction ordering, and the "zero comprehensive settlements" result survive. This is one afternoon of compute against the paper's own stated central weakness. As it stands, the report tells the reader the results may be an artefact of monoculture and then declines to check. Until that check exists, every quantitative claim in §5.4, §6, and §8.6 should be explicitly labelled as *conditional on a single model*, and the conclusion in §13 should be softened accordingly.

*Even a negative result strengthens the paper:* if the ordering is stable across models, that is a real and reportable finding. If it collapses, that is more important still.

### M2. The headline empirical result — "not one comprehensive settlement in any trial" — is under-interrogated and may measure model disposition, not diplomacy

§8.6 reports the most quotable finding in the paper: across every Monte Carlo trial of every scenario, *no* comprehensive settlement occurred. This is presented as a fact about the scenarios. But given M1, it is at least as plausibly a fact about the model's *disposition* — a tendency of the underlying model, when asked to simulate adversarial diplomacy, to default toward framework/partial outcomes and to treat "comprehensive settlement" as an over-claim it avoids. The report itself supplies the mechanism in §11.4 ("training data shapes the outcome") without connecting it to this specific result.

Two things are needed:
1. **A disambiguating test.** Does the model *ever* return "comprehensive" on the five-point scale (§8.4) under any prompt — e.g. a deliberately cooperative scenario, or a scenario seeded to succeed? If "comprehensive" is effectively a dead category the model never emits, then "zero comprehensive settlements" is a statement about the scale, not the world, and must be reported that way.
2. **An anchor.** How do the real ISCNE human exercises these packs come from tend to resolve? If human teams on the Arctic pack also rarely reach comprehensive settlement, that is powerful corroboration and belongs in the paper. If they reach it routinely, the divergence is the finding. Either way §8.6 currently floats without a baseline.

### M3. Small-*n* percentages are quoted in a way the report's own §11.6 forbids

§8.6 states that "China's red line held in only thirty-eight per cent of runs and the United States red line in eighty-eight per cent." With eight trials, 38% is 3 of 8 and 88% is 7 of 8. §11.6 explicitly says eight trials is "not enough to support a percentage figure quoted on its own." The report thus violates its own caveat in the same document, and the percentage framing invites exactly the over-reading §11.6 warns against — a reader will remember "38%" as a rate, not as "3 of 8 runs."

Fix: report these as raw fractions (3/8, 7/8) throughout §8.6 and anywhere the interactive pages surface them, and drop the percentage rendering for any denominator under, say, 30. If the pages compute percentages automatically, that is a rendering bug to correct, not a wording choice. This is a small change with a large effect on how honestly the result reads, and it costs nothing.

### M4. The report claims companion-to-human-exercise as its "most defensible use" (§12.1) but presents no human-versus-agent comparison

§12.1 argues the tool's best use is alongside a human exercise: "A class that has run the Arctic scenario itself can compare its own transcript against the simulated one." This is the right framing and I find it persuasive as a *design* claim. But the report never once actually performs that comparison, even at the level of a single illustrative paragraph — and the ISCNE packs mean human transcripts on the *same* briefs plausibly exist or could be generated in a classroom the author has access to (§10.1 names NYU, Penn, Syracuse, Minnesota).

Even one worked comparison — "here is where the agent Denmark and a human Denmark on this pack diverged" — would move §12.1 from an assertion to a demonstration and would simultaneously give the paper its missing external anchor (see M2). Without it, the paper's central use-case claim rests on an exercise the paper never shows can be done usefully.

### M5. The self-tagging tactic counts carry a fixed confidence of 0.8, and the report leans on aggregate counts without controlling for the obvious confound: verbosity and self-labelling habit

§5.3 is admirably candid that the 0.8 confidence is "not a measurement… a constant," and that tactic labels are self-reported. Good. But §5.3 then presents aggregate counts as substantively "informative" ("coalition-building was tagged twenty-five times… against a single appeal-to-precedent"), and §9.2 builds a value-claiming/value-creating interpretation on top of those counts. The confound is that these are counts of *how often an agent chose to attach a label to itself*, which conflates (a) how often a tactic was used, (b) how willing the model is to name that tactic, and (c) how much each delegation talked. A delegation that speaks longer or labels more diligently will dominate the counts regardless of its actual behaviour.

At minimum the report should (i) normalise counts by statements per delegation, and (ii) state explicitly that cross-tactic comparisons (25 coalition-building vs 1 appeal-to-precedent) may reflect label salience in the model rather than tactic frequency in the negotiation. The §9.2 Walton–McKersie interpretation should be flagged as illustrative until an independent tagger (even a second model reading the transcript blind) reproduces the pattern. A blind second-model tagging pass would be a strong, cheap addition.

### M6. The synonym-folding table (§5.3) silently changes the headline counts and its rules are consequential

§5.3 notes that assembly code folds synonyms into canonical terms: "Logrolling, package-linkage, and linkage all become issue-linkage… Face-saving-formula and consensus-appeal both become principled-bargaining-frame." The report deserves credit for disclosing this. But two of these mappings are *interpretive*, not clerical — collapsing "face-saving-formula" and "consensus-appeal" into "principled-bargaining-frame" merges distinct diplomatic moves, and it directly inflates the count of a category §9 then treats as theoretically meaningful (value-creating, Getting-to-Yes-style bargaining). The report should (a) publish the full mapping table, not a sample, (b) report counts both pre- and post-folding for at least one scenario so the reader can see the size of the effect, and (c) justify the two interpretive merges or split them back out.

---

## Minor issues

- **m1 — The 32-vs-40 trial discrepancy (§11.7) is disclosed but not resolved in the reported figures.** Crediting the honesty, the report should still pick one denominator as canonical for each stated result and footnote the other, rather than leaving the reader to reconcile "thirty-two" and "forty." Right now §8.6 says "eight trials per scenario" while §11.7 says the aggregate file holds forty; a reader cannot tell which trials underlie the §8.6 numbers.

- **m2 — "Momentum" (§8.3) is defined too thinly to interpret.** Shock, mediator pressure, and mood each get a clear operational meaning; momentum is only "which delegation enters with the initiative," with no statement of how the agent is told to act on it or whether it measurably moved any outcome. Either show it matters (a sensitivity result) or note that it is included but not shown to be influential.

- **m3 — The Cyprus "hardest to settle" claim (§7.3, §8.6) is asserted twice but never linked to a mechanism.** Is Cyprus fragile because its pack "predates the others" (§7.3 hints at this), because six parties with a bizonal/two-state binary genuinely admit fewer stable outcomes, or because the older pack is written differently in a way the model reads as more zero-sum? The report should at least name the candidate explanations; as written the pack-vintage remark and the fragility finding sit adjacent without a stated relationship, which invites the reader to assume causation the paper has not argued.

- **m4 — The analyst agent "sees both sides of the information barrier" (§4.5) and produces the satisfaction scores that anchor the whole results section.** The report should say more about whether the analyst's access to the confidential profiles biases its satisfaction scores toward delegations whose *stated* goals were legible, versus those whose real interest was to obstruct. A delegation that "wins" by preventing a deal may be scored low on satisfaction against its written end-states even if obstruction was the mandate. One sentence in §5.4 acknowledging this scoring asymmetry would help.

- **m5 — CICERO and the Rivera et al. wargaming result (§2.3) are cited well, but the report never returns to them.** §2.3 sets up the escalation finding as "a caution… this prototype should be read against it," which is exactly right — but §11 never checks whether *this* model's agents showed the escalation tendency Rivera found. Given the Arctic includes a "Russian naval incident involving a NATO vessel" shock (§8.3), the paper is one paragraph away from saying something concrete about whether it reproduced or avoided that pattern. Close the loop opened in §2.3.

- **m6 — §9.3 (two-level games) is one of the strongest passages** and correctly identifies the absent domestic table as "a substantial simplification." Consider promoting this from §9 into the limitations list (§11), where a reader looking for caveats will actually find it; right now the single most important *theoretical* limitation lives in a section a skimming reader may treat as background.

- **m7 — Terminology consistency.** The report uses "delegation agent," "delegation," and "party" interchangeably (e.g. §5.1 "party profile" vs §4.2 "party profile" vs §5.1 "delegation role"). Fix on one primary term for the actor and one for its record. Minor, but it matters in a document whose whole value is legibility.

- **m8 — The Attribution note states "All negotiation content was generated by Claude Opus 4.8 agents,"** which is the specific fact §11.1 turns on. Move a one-line version of this into §4 or §11.1 itself — a reader should not have to reach the final attribution block to learn which single model is the "one mind" the central limitation refers to.

---

## Things the report gets right (and should keep)

- **The honesty of §11 is the paper's best asset**, and §13.2 is correct that the methodology page — publishing where the run broke, which model produced each layer, and why nothing carries ground truth — is the most valuable thing here. Do not let revisions dilute this. If anything, M1–M4 ask the paper to live up to §11 more fully.
- **Disabling search indexing (§10.3)** so AI-invented statements attributed to real states cannot circulate as reporting is a model of responsible practice and should be stated as a *recommendation to the field*, not just a description of what was done.
- **Defining satisfaction against each delegation's own stated end-states** rather than an external standard (§5.4) is the right choice and is well explained. Keep the worked contrast (Denmark 0.75 / Russia 0.38, three red lines crossed vs zero) — it is the clearest passage in the results.
- **The provenance trail** (§10.2, file names recording institution and year) is genuinely unusual and worth foregrounding as a methodological contribution in its own right.

---

## Verdict

**Major revisions.** This is good, careful, honest work whose problems are almost entirely problems of *following through on its own stated caveats*. The single highest-value revision is M1: run one scenario across more than one model and report whether the findings survive. Doing that, converting the small-*n* percentages to fractions (M3), and adding even one human-vs-agent comparison (M4) would move this from a well-documented demo to a paper that earns the conclusions it currently draws. The bones are strong; the revisions are about rigour, not rework.
