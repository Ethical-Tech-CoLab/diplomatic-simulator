# Decision-model recommendation: independent post-run annotation

Date: 2026-10-11. Public-source proposal.
Reviewed [README](https://github.com/Ethical-Tech-CoLab/diplomatic-simulator/blob/65237f1bd06724b185320788e0b13bd4c9a122e8/README.md).
This assessment concerns documented notional educational simulations, not real
diplomatic behavior or a full review of the simulation engine.

## Useful seam

After a transcript is sealed, test tactic/rubric classification as a derived
annotation layer. Supply only text visible to the authorized evaluator and
return tactic-present / absent / ambiguous under explicit criteria. Retain
utterance spans and permit multi-label outcomes where tactics overlap.

Do not replace generative delegations, privileged instructions or outcome
mechanics with a bounded model. A changed agent changes the experimental
condition. Do not judge actual state intent or prescribe negotiation tactics
for real-world operations from synthetic transcripts.

## Models and test

Compare existing analysis, human annotation and simple rules with a local
classifier, Jev, Microsoft-Decision-1 and Sage. The
[TypeSafe guide](https://docs.typesafe.ai/concepts/how-to-build-with-system-one.md)
is a design reference, not evidence of validated diplomatic inference.
Keep confidential caucus text within its authorized audience.

Split by run/scenario, blind raters to model identity, and record disagreements.
Measure per-tactic precision/recall, calibration, order sensitivity, source-span
fidelity and annotation cost including human correction. Do not count turns
from the same run as independent trials.

## Gate

Derived annotations cannot feed back into the sealed run or silently replace
original analyses. Preserve educational disclaimers and visibility controls.
Adopt only if held-out review benefit is demonstrated. Exact proprietary
checkpoints are not locally downloadable; local candidates are separate models.
No actual saving or geopolitical validity is claimed.
