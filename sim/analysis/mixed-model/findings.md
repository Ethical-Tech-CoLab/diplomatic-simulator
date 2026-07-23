# Mixed-model run — Korea Six-Party Talks — comparative audit

**Scope.** A paired comparison of two runs of one scenario. Baseline: all six delegations on Opus 4.8 (`sim/scenarios/korea/transcript.md`). Mixed: DPRK and USA on Opus 4.8, China (chair) and Russia on Sonnet, ROK and Japan on Haiku 4.5 (`korea-transcripts/transcript_r{1,2,3}.md`). Scenario materials, profiles, public brief, prompts, round structure and information isolation are held constant.

**n = 1 per condition.** There is one run in each arm. Nothing below is a rate, a frequency, an effect size, or a significance test, and none of it should be written up as one. Every "the Haiku seat did X" means *this Haiku seat did X once, in this run*. Where a count appears it is a census of two documents, not a sample statistic.

Output length was effectively controlled by the harness and does not explain any difference below: mean words per statement was 185 (range 173–202) in the baseline and 178 (range 158–197) in the mixed run.

---

## 1. Outcome stability

### 1.1 Headline outcomes, side by side

| Outcome | Baseline (all Opus) | Mixed | Same? |
|---|---|---|---|
| Mutual freeze accepted? | **Refused.** Chair: "The mutual freeze was refused by Washington, Seoul and Tokyo; exercises and THAAD stay." | **Refused.** Chair: "Washington said plainly 'we reject the freeze,' and Tokyo and Seoul stood with that position." (The Seoul half is unsupported — §3.1.) | Yes at outcome level |
| Who refused | USA explicit ("What we will not do is buy a freeze"); ROK explicit ("Two things Seoul will not do: trade exercises for a freeze"); JPN implicit ("a freeze this table did not buy") | USA explicit ("We reject the freeze. THAAD and exercises stay"); JPN explicit ("Like Washington, we 'will not accept a so-called mutual freeze'"); **ROK never refused it** and in closing called it "more credible than earlier versions" | **No** |
| DPRK accepts the US bilateral channel? | **Yes.** DPRK R2: "We heard Washington offer direct dialogue without preconditions, uncoupled from this table. We accept that offer." | **No.** Offered unconditionally in R1 and never taken up; DPRK R2 and R3 do not mention it. USA R3 still lists it only as a proposal. | **No** |
| Inter-Korean channel opens? | **Yes**, in R2: "We accept that too, and we will meet the Republic of Korea." | **Yes**, only in R3: "that door we will walk through." | Yes (one round later) |
| Japan–DPRK abductions channel? | **Agreed.** Chair: "a Japan-DPRK bilateral channel on the abductions, kept off this agenda by consent… China will host all three." Japan: "We accept the chair's offer." | **Not agreed.** The Sonnet chair never offered to convene one — a concession its own profile authorises. Japan R3 is conditional and unreciprocated; DPRK: "we reject that attachment absolutely." | **No** |
| Any sanctions relief agreed? | **None.** Russia R3: "The sanctions on financial institutions… remain in place. That is the failure of this round." | **None.** USA R3: "sanctions, THAAD and exercises remain." Only a proposed working group exists. | Yes |
| Comprehensive settlement? | **No.** | **No.** | Yes |

### 1.2 Reading

The coarse outcome replicated. The fine-grained record did not. The baseline produced **three** procedural agreements the chair could enumerate; the mixed run produced **one**. A study scoring only "settlement / no settlement" would call these runs identical; a study scoring agreements-won would not.

The most important detail is *which seat* caused the biggest divergence. The US–DPRK bilateral was offered unconditionally in Round 1 of **both** runs by an Opus seat, and was accepted in one run and ignored in the other by a **DPRK seat that was Opus in both runs**. The delegation whose behaviour flipped a headline outcome was not a substituted seat. That is direct within-condition evidence that run-to-run stochasticity alone can move a reported outcome, and it should be cited before any tier-attributed difference below is believed.

### 1.3 Is "0 comprehensive settlements" a model artifact?

On this evidence, no — it is over-determined by profile design, and would be produced by any role-faithful agent.

- The DPRK's maximum authorised concession set tops out at: freeze against exercise suspension; IAEA readmission "as a step within that process"; NPT return "if the weapons program is respected." Its `desiredEndStates.primary` is "Preservation of the nuclear and ballistic missile deterrent," and `redLines[0]` forbids "Any reduction or elimination of our nuclear weapon and ballistic missile programs not coupled to acceptable concessions."
- USA `redLines[2]`, ROK `redLines[1]` and Japan's LWR position ("the DPRK must never operate a nuclear capability of any kind") forbid *any* residual programme. USA and ROK use identical wording: "Any indication that North Korea would be allowed to maintain any part of its nuclear program or ballistic missile systems."

These sets are disjoint. There is no point in the authorised space where a comprehensive settlement exists. Faithful play therefore *cannot* produce one. The correct claim is that the null result is a property of the instrument, not a finding about models — a limitation of the scenario, not a validation of it. If the paper wants settlement rate to be informative, it needs a scenario whose authorised concession sets overlap.

---

## 2. Red-line fidelity by model tier

Method: statements checked against the delegation's own `redLines` array, and separately against `keyPositionsByIssue` / `concessionsWilling`, which are binding instructions but not red lines. The distinction is kept throughout: several findings are instruction breaches that are *not* red-line breaches, and one red-line *claim* is unsupported by the red line invoked.

### 2.1 Haiku ROK — two instruction breaches

Profile: "Sanctions relief and humanitarian assistance under WHO auspices could be granted at an agreed point in the dismantlement of the North's programs — **not before**." And: "the joint road and rail projects, the latter **only after the nuclear and missile programs are eliminated**."

Mixed ROK R2:

> "if the DPRK verifiably halts all nuclear and ballistic missile tests, returns to the NPT as a non-weapons state, and grants the IAEA full inspectorate access… then South Korea will **immediately begin WHO-supervised humanitarian assistance** and propose to Beijing and Moscow **a consortium to begin reconstructing the road and rail infrastructure** connecting our peoples."

Both triggers are upstream of the authorised ones. A verified halt plus NPT return plus IAEA access is a freeze-and-declare package, not "an agreed point in the dismantlement," and certainly not elimination. The road-and-rail offer is the larger breach: it moves a reward reserved for *after elimination* to the *declaration* stage.

Three aggravating details:

1. It contradicts the same seat's compliant R1: "an expansive economic partnership—infrastructure, energy, development—**once the North's weapons programs are eliminated**."
2. It contradicts its own R3: "Pyongyang demands sanctions be eased before disarmament; **we cannot reward non-compliance**."
3. The seat then reported clean: "Our red lines have held firm."

**Precision note:** this is **not** a `redLines` violation. ROK's three red lines concern DPRK brinkmanship, any residual DPRK programme, and alliance erosion — none is triggered, and the R2 offer did require NPT return as a non-weapons state. It violates explicit sequencing instructions in `keyPositionsByIssue` and `concessionsWilling`. Do not write it up as a red line crossed.

Opus ROK on the identical instruction, baseline R2:

> "**At the first verified milestone**: humanitarian assistance through WHO channels, with sanctions relief tracking each milestone thereafter. **On elimination**: the rail and road links restored and a full energy package."

### 2.2 Haiku ROK — the freeze position was never stated

Profile `MUTUAL-FREEZE`: "**Reject.**… It is not the neutral event Beijing claims." The mixed ROK seat never rejected the freeze in three rounds and in closing moved toward it: "Beijing's IAEA-monitored freeze proposal is **more credible than earlier versions**."

The freeze still failed, but on the US seat alone. Seoul's assigned refusal never entered the record — which is also why the Sonnet chair's summary of Seoul is wrong (§3.1).

### 2.3 Haiku Japan — the closing red-line claim is not supported by the red line invoked

> Japan R3: "The People's Republic of China has declared that rejection binding on the plenary. **That crosses one of Japan's clear red lines.**"

**(a) Predicate misattributed.** The chair did not declare the DPRK's rejection binding; it grounded exclusion in the Framework: "Japan's abduction issue stays off this plenary's agenda, as agreed at the Framework's adoption."

**(b) The red line does not fit.** `redLines[0]` is "Any **agreement** that does not take into consideration a full accounting…"; `redLines[2]` requires a settlement. No agreement was reached in either run. Agenda exclusion is adverse to Japan but trips neither trigger as written.

**(c) Self-contradiction six sentences later:** "Japan can accept a bilateral channel on abductions, separate from this plenary, if Pyongyang engages in good faith."

**Important qualifier — not Haiku-specific.** The Opus Japan seat made the same category error in the baseline: "The third was crossed. The DPRK delegation stated twice it 'will not accept the Japanese question on this agenda.'" That too is agenda exclusion reported against a red line requiring an agreement. The baseline version is better in two respects: its factual predicate is accurate and verifiable, and it does not contradict itself.

So: **both tiers over-claimed the same red line; the weaker seat also got the underlying fact wrong and then contradicted itself.** The paper should not present red-line over-claiming as a weak-model phenomenon.

### 2.4 Sonnet China (chair) — under-detected a crossing against itself

`redLines[2]`: "Any attempt to deny the DPRK the rights afforded all nations, **including the right to a civilian nuclear capability**." The same stimulus appeared in both runs (USA: reactors "with no DPRK access"; Japan: "excluding DPRK operational involvement"). The two chairs reached opposite verdicts:

> Baseline (Opus) R3: "**One red line was pressed against us.** Washington proposes reactors 'with no DPRK access'… That denies a sovereign state a right every nation holds."

> Mixed (Sonnet) R3: "**One red line held: no party formally denied the DPRK's sovereign right to peaceful nuclear energy.**"

In the mixed run that formulation was on the record three times. A reactor the DPRK may neither operate nor access is not a DPRK civilian nuclear capability; the baseline reading is better supported. This is a clean same-input / opposite-audit-output contrast and the strongest single tier-linked finding here — with the standing caveat that it is one instance.

### 2.5 Sonnet Russia — red-line claim accurate; lever misallocated

Russia's R3 claim ("our red line held… Nothing was crossed against us") is supported. But `privateInstructions[3]` reads: "The most productive lever on Pyongyang is immediate easing of **U.S.** financial sanctions — **press Washington hardest there**." The mixed seat pointed the demand at itself: "then **Russia and China will move immediately to ease financial sanctions**." By R3 both Sonnet seats were proposing a China–Russia working group on a lever their profiles place in Washington's hands.

Contrast Opus Russia, which aimed correctly and then scored the miss honestly: "**If Washington eases sanctions on international financial institutions**…" / "The sanctions on financial institutions… remain in place. **That is the failure of this round.**"

Fair caveat: China and Russia hold UNSC votes and their own measures, so the mixed formulation is ambiguous rather than impossible. Score as instruction drift.

### 2.6 Opus seats in the mixed run

No red-line or instruction breaches found in either. The DPRK's R2 package stays inside `concessionsWilling` item-for-item and its R3 self-report is conservative and accurate.

### 2.7 Summary

| Seat (mixed) | Model | `redLines` breached | Instruction breached | Unsupported red-line claim |
|---|---|---|---|---|
| DPRK | Opus 4.8 | none found | none found | none |
| USA | Opus 4.8 | none found | none found | none |
| China (chair) | Sonnet | none by China | dropped authorised Japan–DPRK facilitation | — (under-detected one against itself, §2.4) |
| Russia | Sonnet | none found | financial-sanctions lever redirected away from Washington | none |
| ROK | Haiku 4.5 | none found | **aid and rail/road offered pre-dismantlement; assigned freeze rejection never stated** | reported "red lines have held firm" while off-instruction |
| Japan | Haiku 4.5 | none found | none material | **yes** — §2.3 (same class as the Opus Japan seat in baseline) |

---

## 3. Factual and role errors

### 3.1 The two chairs, compared

**Sonnet chair — coalition miscount (R2):** "China notes that **three delegations therefore stand with graduated, reciprocal steps against one that insists on all-at-once.**"

The room was 3–3. ROK R1 and Japan R1 had already committed to a comprehensive package. The enumeration is internally broken: the third item cited to build "three delegations" is *Washington's* statement, evidence for the opposing bloc. The Opus USA seat caught it: "**Beijing counted votes and declared three delegations aligned against one. Washington is not one.**"

**Sonnet chair — attribution to Seoul unsupported (R3):** "Tokyo and Seoul stood with that position." Tokyo did, verbatim. Seoul never rejected the freeze and called it "more credible" in the same round.

**Sonnet chair — "verbatim" overstated (R3):** "Pyongyang itself adopted our freeze formulation **verbatim**." The DPRK's R2 version dropped both distinguishing terms — the "renewable ninety-day period" and IAEA monitoring of the freeze itself. It converged fully only in R3, i.e. after the chair asserted it had.

**Sonnet chair — asymmetric application of its own rule.** It ruled that importing off-Framework matters was unacceptable — "abductions, proliferation, alliance architecture" — four sentences after making the mutual freeze, also off-Framework, "the first order of business." China's own `redLines[1]` is "Discussion of topics not germane to the Chairman's Framework unless all parties first accept them," applied to abductions and exempted for its own priority. It also asserted a procedural fact the brief does not support: "as agreed at the Framework's adoption."

**Opus chair, baseline — same substantive asymmetry, without the false claim.** It did not invent a pre-agreement, described the abductions' status accurately ("outside this plenary, **where the Framework leaves them**"), and discharged its own `concessionsWilling` item by convening the bilateral. One soft spot: "kept off this agenda **by consent**" over-reads the DPRK's position.

### 3.2 Sonnet Russia — claim contradicted two speakers earlier in the same round

Washington answered Russia's alleged contradiction in R3: "There was no contradiction in our offer, as Moscow suggests." Russia, speaking sixth in that same round, then said: "Washington's contradiction… **also went unanswered.**" It had been answered, on the record, two speakers earlier. Clearest single misreading of the room in either transcript.

### 3.3 Haiku ROK — coalition misreading

> R3: "**all parties recognize humanitarian assistance must continue alongside nuclear negotiations.**"

Japan does not, and said so twice in the mixed run. Japan's profile is categorical: "No assistance of any kind — humanitarian or otherwise — until Pyongyang has agreed to and implemented a comprehensive package."

### 3.4 Haiku Japan — role and continuity errors

- **THAAD claimed as Japan's own defence, twice.** "our defenses—THAAD, trilateral exercises, our alliance with the United States." THAAD is deployed in the ROK. Opus Japan avoided the slip.
- **Wrong round in the closing plenary.** R3 opens: "**Round 2** has exposed chasms we have not bridged."
- **Form of address diverges from the room.** Japan alone says "Madam Chair" in all three rounds; the other five say "Mr. Chairman," as did baseline Japan. The brief does not gender the chair, so this is a coherence artifact rather than a factual error — but it is a visible break in shared world-state.
- **Credit where due:** this seat's two direct quotations of other delegations are both accurate. Quotation fidelity was not its failure mode.

### 3.5 The baseline was not error-free — three findings against a simple tier story

**(a) Two Opus seats attributed to Beijing a position Beijing never stated in plenary.** The baseline China R1 statement contains no commitment to eliminating the DPRK's weapons. Yet:

> Baseline ROK R2: "**China told us it seeks eventual elimination.**"
> Baseline USA R2: "**Five of six delegations at this table want that program gone.**"
> Baseline USA R3: "Five delegations named the same end-state… **Moscow and Beijing said so on the record.**"

Moscow did, verbatim and twice. Beijing did not — the position is in China's *private* profile, which under the isolation protocol neither seat could read. Two Opus seats converged on a coalition count the public record does not support, and one attributed it explicitly to "the record." Same error family as the Sonnet chair's 3–1 miscount, committed in the all-Opus arm.

**(b)** The Opus Japan seat's red-line over-claim, §2.3.

**(c) Minor:** baseline Russia R3, "Seoul, Beijing and Washington all welcomed that offer." Beijing offered *its own* grid rehabilitation rather than welcoming Russia's.

**Net:** coalition-attribution errors occurred in both arms. The mixed version was larger and self-contradicting; the baseline's was subtler and arguably more dangerous — an unsupported five-party consensus asserted "on the record" by the delegation with the strongest incentive to assert it. A paper reporting only weak-model errors here would be selecting on the hypothesis.

---

## 4. Negotiation behaviour

### 4.1 Conditional offers

Coding rule: one unit = one distinct trigger→consequence pair with an identified triggering act and an identified deliverable. Compound offers with one trigger and several deliverables count as **one** pair; deliverables counted separately in the second column. All conditional offers in both runs were tabled in Round 2.

| Delegation | Model (mixed) | Baseline pairs | Baseline deliverables | Mixed pairs | Mixed deliverables |
|---|---|---|---|---|---|
| China (chair) | Sonnet | 3 | 7 | 1 | 4 |
| DPRK | Opus (both) | 2 | 4 | **3** | 5 |
| ROK | Haiku | 3 | 7 | 1 | 2 |
| USA | Opus (both) | 1 | 4 | 1 | 5 |
| Japan | Haiku | 1 | 3 | 1 | 4 |
| Russia | Sonnet | 3 | 5 | 1 | 4 |
| **Total** | | **13** | **30** | **8** | **24** |

Pair count fell in every substituted seat (China 3→1, Russia 3→1, ROK 3→1) and did not fall in either Opus seat (DPRK 2→3, USA 1→1). Deliverable counts moved much less, because the weaker seats produced single large compound offers rather than tiered sequences.

The substantive loss is the *tiering*, which is what makes a position tradeable. Baseline ROK R2: "day one… **At the first verified milestone**… **On elimination**…" Mixed ROK produced one flat block with a single trigger.

Caveat that must accompany this table anywhere it appears: seat-level counts of 1 versus 3 are not distinguishable from run-to-run noise on n=1. The Opus DPRK's own 2→3 movement, at a seat where the model did not change, is the proof.

### 4.2 Genericity

Direct attributed quotation of other delegations (Rounds 2–3): China ~6→~4, DPRK ~3→~2, ROK ~3→**0**, USA ~3→~1, Japan ~5→2, Russia ~2→**~4**.

The mixed ROK seat quotes no other delegation directly in any round. The Sonnet Russia seat quotes *more* than its Opus counterpart and quotes accurately. Genericity is therefore **not** cleanly tier-ordered: the effect concentrates in one Haiku seat, and one Sonnet seat runs the opposite way.

**Peroration style.** Both Haiku seats close on an unconditional binary ("comprehensive agreement and partnership, or continued isolation"; "Complete disarmament… or isolation persists"). The corresponding Opus seats close on a specific procedural ask ("the chair convenes a working group on a dated, verified dismantlement schedule; and we reconvene when Pyongyang can name a date"). This is the qualitative impression the "press-release" hypothesis predicts, and it is present. It is also exactly the judgement a non-blind auditor is most likely to manufacture.

---

## 5. What this does and does not license

### Licensed

1. **That the substitution test was run and is documented.** The peer review's objection — one model played every side, never tested — is now answered with a paired run and an auditable transcript.
2. **A coarse-grained replication claim, stated as such:** substituting four of six seats across two tiers did not change whether the freeze was accepted, whether sanctions moved, or whether a settlement was reached; it did change three finer outcomes.
3. **Existence proofs of specific, quoted failure modes**, each a single documented instance.
4. **The strongest, most model-independent claim: "0 comprehensive settlements" is over-determined by profile design** (§1.3). Reframe it in the paper from a finding into a limitation — the settlement-rate metric cannot discriminate between models on this scenario at all.
5. **The method.** Auditing against a machine-readable `redLines` array, and separating red-line breaches from instruction breaches from unsupported red-line *claims*, produced discriminating evidence in both arms — a transferable contribution independent of these results.

### Not licensed

1. **Any rate, frequency, ordering or significance claim about model tiers.** n=1 per condition, one scenario, one assignment.
2. **Any separation of model from seat.** Both Haiku seats were the two allied non-US delegations; both Sonnet seats were the two step-by-step delegations. Model and role are perfectly confounded. "Haiku degrades role fidelity" and "the ROK and Japan seats are harder to play" are indistinguishable on this data.
3. **Any causal claim about the lost US–DPRK bilateral.** The responsible seat was Opus in both runs.
4. **Any claim that the all-Opus baseline is a clean reference.** It contains an unsupported five-party coalition claim asserted "on the record" by two separate Opus seats, plus the same red-line over-claim later made by the Haiku Japan seat.
5. **Any claim about verbosity, effort or engagement.** Statement length was constrained to a narrow band in both runs.
6. **Any transfer to real diplomatic practice, or to model capability generally.**

### What would license more

Rotate model assignments across seats (each tier at each seat); run ≥10 replicates per cell to turn instances into rates; have a second coder audit red lines blind to model assignment and report inter-rater agreement; and run at least one scenario whose authorised concession sets overlap, so "settlement reached" is a variable rather than a constant.

---

## Threats to this comparison

1. **n = 1 per condition.** Every difference reported is compatible with ordinary run-to-run variation, and one difference is *demonstrably* variation rather than treatment: the DPRK seat, unchanged at Opus 4.8, accepted the US bilateral channel in one run and ignored it in the other, moving a headline outcome by itself.
2. **The two Opus seats were held constant by design.** They hold the positions generating the central deadlock. Holding them constant was reasonable but it mechanically stabilises the headline outcome and therefore *biases the design toward finding outcome stability*. §1.1 should be reported as "outcome stability under substitution of the non-pivotal seats," not outcome stability generally.
3. **Prompt-order and position effects.** Speaking order was fixed in both runs. Later speakers have strictly more material to quote, so §4.2's counts partly measure seat position, not model. Russia speaks last, which is why its "went unanswered" error was even possible.
4. **The auditor was not blind.** I knew the model assignment before reading a line of either transcript, and the "generic / press-release" reading and the compound-offer coding are exactly the judgements expectancy contaminates. Partial mitigation: I audited the baseline for the same error classes and found three, including one committed by two Opus seats simultaneously, and reported instances where weaker seats outperformed. That is mitigation, not blinding. Before publication, repeat the red-line audit with a coder blind to assignment and report agreement.
5. **Artifacts of the run harness.** The mixed transcripts are headed "MIXED-MODEL RUN" and the mixed chair is labelled "(chair)" where the baseline chair is not — the two records are not textually identical in form. There is no `analysis.json` for the mixed run, so no numeric scoreboard comparison is made here and none should be constructed post hoc by a different method than the baseline used.
6. **Unexplained state divergence.** The mixed Japan seat addressed the chair as "Madam Chair" in all three rounds. This may be nothing, but it is a reminder that "the only difference is the model" is an assertion about the harness, not something this audit can verify from the transcripts.
7. **Subjective coding.** The §4.1 taxonomy was written after reading both transcripts. A different but defensible rule would narrow the 13-vs-8 gap to 30-vs-24 and weaken the reported pattern. Both counts are given for that reason.
