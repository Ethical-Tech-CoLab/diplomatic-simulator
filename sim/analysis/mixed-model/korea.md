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

_(Completed after the run; see the sections below.)_
