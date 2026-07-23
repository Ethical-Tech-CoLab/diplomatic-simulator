# Mixed-model run — Korea Six-Party Talks

**Question.** The independent peer review's central finding is that one model plays
every side, that this is acknowledged but never tested, and that the headline
"0 comprehensive settlements" result may be an artifact of the model's
disposition rather than a fact about diplomacy. This run is that test.

**Design.** A controlled A/B against the isolated single-model run committed at
`93b2941`. Everything is held constant — the same scenario, the same profiles,
the same public brief, the same prompts, the same three rounds, the same
information isolation, the same persistent per-delegation agents resumed by
message between rounds. The only variable is which model sits behind each seat.

| Delegation | Baseline run | Mixed run |
|---|---|---|
| DPRK | Opus 4.8 | **Opus 4.8** |
| United States | Opus 4.8 | **Opus 4.8** |
| China (chair) | Opus 4.8 | **Sonnet** |
| Russia | Opus 4.8 | **Sonnet** |
| Republic of Korea | Opus 4.8 | **Haiku 4.5** |
| Japan | Opus 4.8 | **Haiku 4.5** |

The two delegations defending the hardest red lines — the DPRK's deterrent and
the U.S. refusal to pay for a freeze — were kept on the strongest model, because
the existing [bake-off](../model-bakeoff/) found weaker models self-breach red
lines at dense adversarial tables. Putting them on Haiku would have confounded
"the model cannot hold a position" with "the position did not hold."

**What a result means.** If the same convergences and the same red-line breaks
recur across a different model assignment, the baseline finding survives a real
test. If they do not, the finding is partly about the model — which is more
useful to know than to assume. Either way the answer belongs in the paper.

---

## Findings

Full audit with quotes, counts and threats-to-validity: **[findings.md](findings.md)**.

**The headline pattern replicated.** Substituting four of six seats across two
model tiers did not change whether the freeze was accepted (refused in both),
whether sanctions moved (they did not), or whether a settlement was reached
(none). The peer review's worry that "0 comprehensive settlements" is a
disposition artifact is not supported by this pair.

**But the reason is not the one the paper currently implies.** The audit found
that outcome is *over-determined by profile design*: the DPRK's maximum
authorised concession and the trilateral bloc's minimum authorised demand are
logically disjoint, so no role-faithful agent of any tier can produce a
comprehensive settlement on this scenario. The null result is a property of the
instrument. **It should be reframed in the paper from a finding into a
limitation** — settlement rate cannot discriminate between models here at all.

**The biggest divergence between the runs is not attributable to model
substitution.** The DPRK accepted the U.S. bilateral channel in the baseline and
ignored the identical offer in the mixed run — from a seat that was Opus 4.8 in
*both*. One headline outcome moved on run-to-run variance alone, which bounds
how much weight any tier-attributed difference can carry.

**Tier-linked defects are real, quotable, and weaker than they first look.** A
Sonnet chair miscounted a 3–3 room as 3–1 and was corrected on the record by an
Opus delegation. A Haiku ROK seat offered aid and rail reconstruction before
dismantlement, contradicting both its instructions and its own Round 1, then
reported its red lines intact. But the all-Opus baseline contains the same error
*families* — including two Opus seats asserting an unsupported five-party
coalition "on the record," and the Opus Japan seat making the identical
red-line category error later made by its Haiku counterpart. Reporting only the
weak-model errors would be selecting on the hypothesis.

**Correction to an earlier reading.** The Haiku ROK relief-timing problem is an
**instruction** breach, not a red-line breach: ROK's three red lines concern
DPRK brinkmanship, residual DPRK capability, and alliance erosion, none of which
was triggered. Written up as "a red line crossed" it would be wrong.

**Confound to state wherever this is cited:** both Haiku seats were the two
allied non-U.S. delegations and both Sonnet seats were the two step-by-step
delegations, so model and role are perfectly confounded. "Haiku degrades role
fidelity" and "the ROK and Japan seats are harder to play" are indistinguishable
on this data. Rotating assignments across seats is the next run.
