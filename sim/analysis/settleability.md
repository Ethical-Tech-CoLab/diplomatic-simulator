# Settleability check: can any of the six tables reach a comprehensive settlement?

*Added 2026-10-12. A reading of each scenario's profile files, not a model output.*

## Why this exists

The mixed-model audit (`mixed-model/findings.md`, section 1.3) found that on the
Korea scenario the DPRK's maximum authorised concession set and the trilateral
bloc's minimum authorised demand are logically disjoint, so no role-faithful
agent can produce a comprehensive settlement there. The backlog asked for the
same check on the other five scenarios. This note does that check by reading
every delegation's `redLines` and `concessionsWilling` in
`sim/scenarios/<scenario>/profiles/*.json` against each other and asking one
question per scenario: is there any point in the authorised space where every
delegation's red lines hold at once and the core dispute is resolved?

"Comprehensive settlement" is used in the sense the Monte Carlo layer uses it:
the central dispute of the scenario is resolved in an instrument every party can
sign. A framework, a partial deal or a confidence-building package does not
count, and none of those is in question here. All six scenarios produce them.

## Result

None of the six tables is settleable on a strict reading of the profiles. In
every scenario at least one pair of delegations holds red lines that contradict
each other on the central question, and no listed concession on either side
bridges them. Cyprus has the narrowest gap. The others are closed outright.

| Scenario | Settleable? | Blocking contradiction (red line vs red line) |
|---|---|---|
| Korea | No | DPRK: no reduction of the deterrent "not coupled to acceptable concessions"; its best concession is a freeze and NPT return "if the weapons program is respected". USA and ROK, identical wording: no indication North Korea "would be allowed to maintain any part of its nuclear program". |
| Jammu and Kashmir | No | Pakistan: "No agreement in which all of Jammu and Kashmir is not a part of Pakistan." India: "No talks in which India would cede any part of the State." China: "No consolidated Indian or Pakistani claim on the entirety." Three mutually exclusive sovereignty red lines. |
| Central Asia | No | Kazakhstan, Kyrgyzstan and Uzbekistan each carry a red line forbidding any binding border, water or security agreement at this summit; Tajikistan's BATNA is the same. China's first red line is "Central Asian states reaching a comprehensive settlement of border and resource disputes." Five of seven delegations are instructed against the thing a settlement would be. |
| South China Sea | No | China: no concession on the ten-dashed line, no recognition of the 2016 award, passage for foreign military vessels only with Chinese permission. Every other delegation holds the opposite as a red line: the Philippines ("No abandonment of the binding 2016 UNCLOS arbitration award"), Japan ("non-negotiable"), the United States, India and Japan on freedom of navigation, and all four ASEAN states on the ten-dashed line. |
| Arctic | No | Russia: "Not maintaining full control of the NSR as a Russian trade route" is a red line. United States: "No Russian control/military oversight of the NSR." Separately, Russia refuses recognition of Norway's Svalbard EEZ while Norway refuses any limit on it; and China's red line against being denied Arctic Council membership meets an identical "no China member" red line in all six Arctic states. China's own concessions list accepts observer status instead, so that pair can close; the NSR and Svalbard pairs cannot. |
| Cyprus | No, narrowly | Republic of Cyprus: "The office of President must be elected by popular vote." Turkey and the TRNC: "No popular-vote national elections." Also Cyprus "No confederation with a weak federal government" against Turkey and the TRNC "No strong federal system." The second pair has middle ground (a federation of ordinary strength is forbidden by neither). The first does not, unless a weighted or cross-voting formula, which the UK and US profiles offer, is accepted by both sides as "popular vote". Nothing in the Cypriot or Turkish concession lists says it would be. |

## What this means for the reported numbers

1. The "0 comprehensive settlements" result across all Monte Carlo trials is a
   property of all six scenario packs, not of the model and not of the
   negotiations. It should not be reported as a finding anywhere. The paper
   already carries the Korea case as a limitation (sections 8.6 and 11.1a);
   the same wording applies to the other five.
2. On every scenario the settlement-rate metric cannot vary, so it cannot
   discriminate between models, dispositions or conditions. Process measures
   (agreements won, round in which a concession lands, channels taken up,
   red-line breaks) are the only outcome measures that can.
3. The packs are teaching material and this is by design: the exercises are
   built so that students must find partial instruments. Building one scenario
   whose authorised concession sets overlap remains the single change that would
   make settlement rate measurable.

## Per-delegation flag: does the BATNA beat any available deal?

The backlog's "satisfaction is not success" item asked for a per-delegation flag
recording whether a delegation's BATNA beats any deal available to it, so that a
breakdown can be read as a win for that delegation rather than a failure. Each
scenario's `analysis.json` scoreboard rows now carry `batnaBeatsDeal` (boolean)
and `batnaNote` (one line). The flag is set to `true` only where the profile's
own `batna` text describes no deal as securing the delegation's primary
objective, a status-quo or spoiler posture. It is an authored reading of the
profile, like the red-line calls, not detector output.

| Scenario | BATNA beats deal (breakdown is a win or no loss) | Needs a deal |
|---|---|---|
| Arctic | Canada, Denmark, Norway, Russia, United States | China, Finland |
| Central Asia | China, Kazakhstan, Kyrgyzstan, Russia, Tajikistan, Uzbekistan | India |
| Cyprus | Turkey, TRNC | Republic of Cyprus, Greece, United Kingdom, United States |
| South China Sea | China, United States | Brunei, Indonesia, India, Japan, Malaysia, Philippines, Vietnam |
| Korea | DPRK, Russia, United States | China, Japan, Republic of Korea |
| Jammu and Kashmir | China, India, Pakistan, Russia | Jammu and Kashmir delegation, United Kingdom, United States |

Reading the flag against the scoreboards is instructive. In Jammu and Kashmir
the three highest satisfaction scores in the isolated run (China 0.82, India
0.74, Russia 0.70) all belong to delegations flagged `true`: they are satisfied
because nothing happened. The lowest (Kashmiri delegation 0.34, Pakistan 0.38)
belong to delegations that needed a text. In Korea the pattern is weaker: the
United States (0.55) is flagged `true` and scores above China (0.48), which is
flagged `false` because collapse of the talks is a Chinese red line and the
chair's fallback goal is process continuity. A reader who sees "China 0.48,
United States 0.55" without the flag would conclude Washington negotiated
better. With the flag the reading is that Washington's instructions let it win
by standing still, and Beijing's did not.

The convening-plausibility ratings on `methodology.html` are consistent with
this: the scenarios rated low are the ones where several pivotal delegations
are flagged `true`.

## Scope and caveats

- This reads the profile JSON as written. Where a profile's concessions list
  contradicts its own red lines (Arctic China on Council membership), the
  concession is taken as the operative limit.
- "Contradiction" here means two red lines that cannot both hold in a text that
  resolves the central dispute. Red lines that merely restrict format or venue
  (bilateral contact bans, no third parties) are not counted; they block
  process, not outcomes.
- The Strait of Hormuz two-party demonstration is not covered. It was not built
  from the ISCNE packs and has no profile files in this schema.
- The flag and this table were produced by one reader. They are offered as a
  starting point for the second-coder pass the backlog already calls for on the
  red-line calls.
