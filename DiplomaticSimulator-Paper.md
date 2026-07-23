# The Diplomatic Simulator

### A Research Report on a Multi-Party Negotiation Simulator Driven by Artificial Intelligence Agents

*Prepared as a plain-language review of the Diplomatic Simulator research prototype*
*based on the software, documentation, and run records contained in this repository*

---

## Foreword

Multi-party negotiation is difficult to teach and almost impossible to rehearse. A conference table with seven governments on it behaves differently from a conference table with two. Coalitions form and dissolve. A concession offered to one delegation is read as a threat by another. Each delegation arrives with instructions it cannot show anyone, and much of the skill of diplomacy lies in deciding how much of that private mandate to reveal, to whom, and at what moment.

Universities and staff colleges have long addressed this through crisis-negotiation exercises, in which students role-play national delegations from confidential briefs. These exercises are effective, but they are expensive. They require a room, a weekend, a faculty mentor for each team, and enough participants to fill every chair. Once the exercise ends, the record of what was said usually disappears with the participants.

The Diplomatic Simulator is a research prototype that asks what happens when the delegations are played by artificial intelligence agents instead of by people. Each delegation is given a confidential brief and nothing else, the talks are run in rounds, and every word spoken is preserved, tagged, and scored. This report explains what the tool does, what its numbers mean, how each of its variables was chosen, and what it cannot be trusted to tell anyone.

---

## 1. Executive Summary

1.1 The Diplomatic Simulator replays multi-party diplomatic negotiations in which every national delegation is played by an artificial intelligence agent, that is, a language program instructed to speak and reason in the voice of one government. It is a teaching and exploration tool. It is not a forecasting system, and its authors state plainly that it must not be used to inform real policy, negotiation, or intelligence judgements.

1.2 Six scenarios have been simulated to date: the Arctic, with seven delegations; Central Asia and the Fergana Valley, with seven; Cyprus reunification, with six; the South China Sea, with nine; the Korean Peninsula Six-Party Talks, with six; and Jammu and Kashmir, with seven. An earlier two-party session on the Strait of Hormuz, involving Iran and the United States, is preserved as the original demonstration. Across the six multi-party scenarios, forty-two delegation agents produced one hundred and thirty-three statements of record.

1.3 The organising principle of the design is information isolation. When a delegation agent writes its statement for a round, it receives only its own confidential brief, a neutral public brief that everyone shares, and the public transcript of what has already been said aloud. It never sees another government's private instructions, and it never sees another delegation's private reasoning. This mirrors the informational structure of real diplomacy, where the public record is common property and the mandate is not.

1.4 The scenario material is not invented. The confidential briefs are adapted from crisis-negotiation exercise packs associated with the United States Army War College International Strategic Crisis Negotiation Exercise programme, which are taken to universities. The file names preserved in the repository record where each pack was used, including New York University, Penn, Syracuse, and the University of Minnesota.

1.5 After the talks conclude, a separate analyst agent reads the whole transcript and produces a scoreboard, a debrief for each delegation, and a neutral summary written in the voice of a convening envoy. A further layer re-runs each scenario twenty times under randomly varied external conditions, in order to show which outcomes are stable and which depend on luck.

1.6 The repository is candid that every number on the site is one artificial intelligence system's subjective judgement of another artificial intelligence system's writing. There is no ground truth anywhere in the tool. The most serious structural limitation is that a single underlying model plays every side of every table, so the adversaries are not genuinely independent minds. That limitation has now been tested once, on the Korean scenario, by re-running it with different models behind four of the six seats. The coarse outcomes replicated. The test also established something the report had not seen: on that scenario a comprehensive settlement is impossible by construction, because the concessions the parties are authorised to make do not overlap, so the zero-settlement result reported at 8.6 measures the scenario pack rather than the negotiation. Section 11.1a sets out what the comparison does and does not license.

---

## 2. Background and Rationale

2.1 The problem. Crisis-negotiation exercises are among the most effective ways to teach diplomacy, because they force a participant to argue a position they may not hold, under time pressure, against people who have been told to resist them. But an exercise consumes an enormous amount of scarce human attention. A seven-party Arctic exercise needs seven teams, seven mentors, and two days. It can be run perhaps once a year at any given institution.

2.2 The second problem is that exercises leave almost no durable record. What a delegation said in round two, why it said it, and how that changed the shape of the room afterwards is rarely written down in a form anyone can study later. The learning is real but it is locked inside the experience of having been there.

2.3 The gap. Existing computational work on negotiation has largely concentrated on games with fixed rules. The best known example is CICERO, the system developed by Meta's Fundamental AI Research team and reported in Science in 2022, which reached human-level play in the board game Diplomacy by combining a language model with strategic planning. That is a considerable achievement, but a board game has a scoring function and a win condition. Real multi-party talks have neither. A separate strand of work has examined what happens when language models are placed in simulated wargames: Rivera and colleagues, publishing at the ACM Conference on Fairness, Accountability, and Transparency in 2024, found that all five models they tested displayed escalation patterns that were difficult to predict. That finding is a caution rather than an endorsement, and this prototype should be read against it.

2.4 The response. The Diplomatic Simulator occupies the space between the two. It takes the scenario packs and confidential briefs that human exercises already use, replaces the human delegations with agents, and keeps the entire record. What the tool produces is not a prediction of what governments would do. It is a legible artefact: a transcript, a set of tagged tactics, and a scoreboard, all of which can be read, disputed, and compared against what a human exercise produced from the same brief.

2.5 The design commitment that makes this worth doing is transparency about provenance. Every intermediate product of every run is committed to the repository in a readable form: the extracted party profiles, the public brief, the transcript, the analysis. A reader who doubts a score can open the transcript and check what was actually said.

---

## 3. Objectives

The prototype is designed to:

3.1 Reproduce the structure of a multi-party crisis negotiation, including confidential mandates, public plenary statements, coalition formation, and a convening mediator.

3.2 Preserve information isolation, so that no delegation gains an advantage the corresponding human team would not have had.

3.3 Produce a complete and inspectable record of each session, including what each delegation said, which negotiating tactics it used, and how an independent analyst judged the result.

3.4 Express the outcome in variables simple enough for a non-specialist to read, while keeping the reasoning behind each variable visible.

3.5 Test how sensitive each outcome is to conditions no negotiator controls, by re-running each scenario under randomly varied external shocks and moods.

3.6 Document its own method and its own failures, including the specific point at which an orchestration run broke and had to be repeated.

---

## 4. How the Simulator Works

The tool runs each scenario through six stages. The first five use the same reusable toolchain, held in the repository under the folder named `sim`; only the source documents change from scenario to scenario. Three of the six stages are ordinary computer code with no artificial intelligence involved at all.

### 4.1 Stage one: reading the source documents

Each scenario arrives as a set of documents: one public scenario brief describing the crisis, plus one confidential instruction file for each country. These are converted from page images into plain text. No judgement is exercised at this stage.

### 4.2 Stage two: building a party profile

One agent is assigned to each country. It reads that country's confidential instructions and nothing else, and distils them into a structured profile. This is the single most important step in the whole pipeline, because the profile is the entirety of what that delegation will know about itself for the rest of the negotiation. Section 5 sets out what the profile contains.

### 4.3 Stage three: writing the public brief

A separate agent reads the shared scenario document and writes the neutral briefing that every delegation will see. It states the situation, lists the issues formally on the table, sets out the procedure, and fixes the vocabulary of negotiating tactics that delegations will use to label their own moves.

### 4.4 Stage four: the negotiation

The delegations then negotiate in plenary rounds. In each round, every delegation writes exactly one statement. It is given its own profile, the public brief, and the running public transcript. It is instructed to stay in role, to ground its claims in its brief, to protect its secret bottom lines, and to label the tactics it has just used.

The flagship Arctic scenario runs four rounds: an opening plenary, a positioning round, a bargaining and coalitions round, and a closing plenary. The other three scenarios run three rounds, dropping the separate positioning stage. Seven delegations across four rounds produce twenty-eight statements in the Arctic; nine delegations across three rounds produce twenty-seven in the South China Sea.

### 4.5 Stage five: the analysis

A single analyst agent, cast as a neutral control group, then reads the entire transcript together with every delegation's confidential profile. It is the only agent in the system that sees both sides of the information barrier. It produces the scoreboard, the per-delegation debriefs, and the convener report described in Section 6.

### 4.6 Stage six: assembly and publication

Plain computer code stitches the outputs together, standardises the tactic labels, and renders the interactive pages. No model is involved. This matters for auditing: the numbers a reader sees on the published pages are arithmetic performed on agent outputs, not a second layer of interpretation.

---

## 5. The Variables, and Why Each One Exists

This section is the heart of the report. Everything the simulator produces rests on a small number of variables, each of which has a plain meaning.

### 5.1 The party profile: what a delegation knows about itself

When an agent reads a country's confidential instructions, it fills in eleven fields. Together they constitute the delegation's entire identity.

Delegation role. One sentence describing who this delegation formally is and how much authority it holds. The Russian profile in the Arctic scenario, for example, records a foreign ministry delegation mandated to defend Arctic sovereignty while deferring major deviations to the Foreign Minister. This field exists because a negotiator's freedom to concede is itself a variable, and a delegation that must telephone home behaves differently from one that can sign.

Fundamental principles. The standing commitments the government would assert regardless of this particular crisis. These give the agent something to argue from when the transcript moves somewhere its specific instructions did not anticipate.

Desired end states, recorded as a primary and an alternate. This is the delegation's definition of victory, and its definition of an acceptable substitute. Having two rather than one is deliberate. A negotiator with only a maximum position cannot trade.

Key positions by issue. The government's stated line on each numbered issue in the public brief, stored issue by issue. This is what keeps a delegation consistent across rounds and prevents it from quietly abandoning a position it took an hour earlier.

Red lines. The commitments the delegation states it will not cross. In negotiation practice a red line is a declared non-negotiable limit whose value depends entirely on whether other parties believe it. The simulator makes this measurable, because the analyst later records how many of a delegation's red lines were crossed by others.

BATNA. This is a term of art from negotiation theory, introduced by Roger Fisher and William Ury in Getting to Yes in 1981. It stands for Best Alternative to a Negotiated Agreement, and it means the outcome a party falls back on if the talks collapse. It is the benchmark against which every proposal should be judged: a rational party accepts nothing worse than its BATNA. Recording it explicitly is what allows an agent to walk away credibly. Russia's Arctic BATNA, for instance, is to proceed unilaterally with resource extraction and sea-route regulation backed by its partnership with China. A delegation with an attractive fallback has little reason to concede, and the simulator makes that logic explicit rather than leaving it to chance.

Concessions willing. What the delegation is authorised to give away, and therefore what can be traded. Without this field a negotiation of principled statements never becomes a negotiation of packages.

Coalition leanings. Which other delegations this one expects to work with or against. This is what allows blocs to form early rather than emerging only by accident.

Negotiating style. How the delegation speaks: legalistic, conciliatory, blunt. Style is not decoration. In a transcript that will later be judged, tone is part of what is being judged.

Private instructions. The secret material the delegation must never state verbatim. This field is the reason information isolation matters. If it were shared, the exercise would collapse into a game of open cards.

### 5.2 The statement record: what a delegation does in a round

Every statement in the transcript is stored with six pieces of information: which delegation spoke, which round it was, what kind of statement it was, the full text, the list of tactics the delegation applied, and the list of other delegations it aligned itself with. The last two are what turn a wall of prose into something that can be counted.

### 5.3 The tactic vocabulary: naming the moves

Delegations label their own moves from a fixed list of seventeen terms, set in the public brief. The Arctic list runs: anchoring, counter-anchoring, conditional-offer, red-line-signaled, verification-demand, deadline-pressure, coalition-building, issue-linkage, appeal-to-law, appeal-to-precedent, sovereignty-assertion, freedom-of-navigation-frame, side-payment, delay-tactic, principled-bargaining-frame, environmental-frame, and indigenous-inclusion-frame.

Several of these are established concepts rather than inventions of the project. Anchoring is the practice of stating an extreme opening figure in order to drag the eventual settlement toward it, and it draws on the anchoring effect documented by Amos Tversky and Daniel Kahneman in Science in 1974, who found that an arbitrary starting number measurably shifted people's later estimates even when they were paid to be accurate. Issue-linkage means refusing to settle one question except as part of a package with another. A side-payment is a benefit offered outside the disputed issue to buy agreement on it. Principled-bargaining-frame refers to the approach set out in Getting to Yes, which urges parties to argue from interests and objective criteria rather than from fixed positions.

Because agents do not always use the exact word from the list, a short standardising table in the assembly code folds synonyms into the canonical term. Logrolling, package-linkage, and linkage all become issue-linkage. Batna-signaling and red-line-reaffirmation both become red-line-signaled. Face-saving-formula and consensus-appeal both become principled-bargaining-frame. This is a small piece of housekeeping with a real effect on the counts, and it is worth knowing that it happens.

Each tactic label is stored as a detection record carrying a fixed confidence value of 0.8 and a source marked as self-tagging. That number is not a measurement. It is a constant, recording the fact that the label came from the speaker rather than from an independent observer. A reader should treat the tactic counts as a description of what each delegation said it was doing.

The resulting counts are informative in aggregate. In the Arctic session, coalition-building was tagged twenty-five times and red-line-signaled sixteen, against a single appeal-to-precedent. In the South China Sea session, coalition-building appears twenty-four times and conditional-offer fourteen, with delay-tactic appearing only twice. The shape of a negotiation is legible in these numbers before anyone reads a word of the transcript.

### 5.4 The scoreboard: how the outcome is scored

> **Conditional on a single model.** The scores this section defines were all
> produced with one underlying model driving every delegation. A mixed-model
> A/B run for Korea has now been executed and audited; what it licenses and
> what it does not is set out at 11.1a. In particular, no scoreboard comparison
> between the two runs is made, because the mixed run has no `analysis.json`
> and constructing one post hoc by a different method than the baseline used
> would not be a comparison. See 11.1 and 11.1a.


The analyst agent produces four numbers for each delegation.

Satisfaction, on a scale from 0 to 1. This expresses how well the analyst judges that a delegation achieved the objectives recorded in its own profile. It is scored against that delegation's stated end states, not against any external standard of a good outcome, which is why a delegation can score well in a session that produced no agreement at all. In the Arctic session, Denmark scored 0.75 and Russia 0.38.

Agreements won, a simple count of the understandings the delegation secured. Canada won six in the Arctic session, the highest of the seven.

Red lines crossed, a count of the delegation's declared limits that other parties breached. Russia's three in the Arctic session, against zero for Denmark, is the clearest single indicator of why the two scored so differently.

Self-rating, a separate figure the delegation assigns to its own performance in its debrief. The United States gave itself 3.3 while the analyst assigned it a satisfaction of 0.6. Keeping the two apart is a useful discipline, since the gap between how a delegation rates itself and how a neutral observer rates it is itself diplomatically interesting.

Each debrief also lists the delegation's goals individually. Every goal carries a priority, either critical or high, a status of achieved, partial, or failed, and a short list of evidence quoting the rounds in which the outcome was settled. This is the part of the output that resists being reduced to a number, and it is the part a reader should check before trusting the number.

---

## 6. Reading the Results

> **Conditional on a single model.** Every quantitative result in this section --
> satisfaction scores, red-line survival rates, deal-type distributions, and
> coalition frequencies -- was produced with one underlying model driving all
> delegations. As 11.1 states, the adversaries are therefore not independent
> minds. A mixed-model A/B run for Korea has since been executed and audited
> (11.1a). It found that the coarse outcomes replicated under substitution of
> four of six seats, and that three finer outcomes did not. It also found that
> one headline outcome moved between the two runs at a seat whose model never
> changed, which bounds how much weight any single reported result can carry.
> These numbers should still be read as describing how one model behaves when
> playing every side, on all scenarios but Korea, and as resting on one paired
> run there.

6.1 The convener report. Alongside the scoreboard, the analyst writes a neutral summary in the voice of a Special Representative of the Secretary-General, the title given to a senior envoy appointed by the United Nations Secretary-General to convene and mediate. The report carries a headline, a summary, a list of key outcomes, and a list of unresolved issues. The Arctic report concluded that the conference produced a scaffolding of cooperation tracks but no binding settlement, and observed that what broke through was the low-politics agenda, where trust was cheapest, while everything touching sovereignty, jurisdiction, and membership stalled.

6.2 The interactive table. The published site replays each session as a negotiation table, with a scenario picker, the full transcript, and the session insights attached to each statement.

6.3 The dashboard. A separate page presents each delegation's private reasoning, its proposals, the tactic labels attached to its statements, and the scoreboard, for any chosen scenario.

6.4 The live replay. A third page streams a completed session statement by statement, at adjustable speed, to convey the pace of a plenary. The page states explicitly that this is a replay of a finished simulation and that nothing is being generated in the reader's browser.

6.5 The report pages. Each scenario also has a standalone written report combining the overview, the convener report, the scoreboard, and the complete transcript, for readers who want the record rather than the interface.

---

## 7. The Six Scenarios

7.1 The Arctic. Seven delegations, four rounds. The issues are the overlapping continental shelf claims of Russia, Canada, and Denmark over the Lomonosov Ridge, which remain before the United Nations Commission on the Limits of the Continental Shelf; the contested legal status of the Northwest Passage and the Northern Sea Route, which Canada and Russia respectively treat as waters under their own control and which the United States regards as international straits; the equal-access provisions of the 1920 Svalbard Treaty and the fisheries zone Norway maintains around the archipelago; militarisation; resources; environment; governance; and the inclusion of Indigenous peoples. The scenario notes that the United States is not a party to the United Nations Convention on the Law of the Sea, which shapes what legal arguments it can and cannot make.

7.2 Central Asia and the Fergana Valley. Seven delegations. The issues are the enclave-riddled borders inherited from Soviet administrative divisions, the sharing of Syr Darya water between upstream and downstream states, hydropower, and the competing influence of outside powers.

7.3 Cyprus. Six delegations. The issues are the choice between a bizonal bicommunal federation and a two-state settlement, territory, property, security guarantees, and the disputed gas fields of the eastern Mediterranean. This is the only scenario whose source pack predates the others, and it is the scenario the simulator finds hardest to settle.

7.4 The South China Sea. Nine delegations, the largest table. The issues are the competing maritime claims, the application of the Law of the Sea Convention, freedom of navigation, and the long-running attempt to agree a code of conduct between China and the states of the Association of Southeast Asian Nations.

7.5 The Korean Peninsula. Six delegations, three rounds, convened in Beijing under a Chinese chair as a resumption of the Six-Party Talks. The parties are China, North Korea, South Korea, Japan, Russia, and the United States. The issues are guarantees of the non-use of force and whether a Korean War peace treaty falls inside the process; whether a North Korea returned to the Non-Proliferation Treaty in good standing may hold a civilian nuclear programme; diplomatic normalisation and whether a formal end to the war precedes or follows denuclearisation; sanctions relief and the timing of humanitarian assistance; complete verified dismantlement in one comprehensive package against a rewarded step-by-step sequence; and light-water reactors under a revived Korean Energy Development Organisation. The convening report recorded that Beijing reopened three negotiating channels and kept the Six-Party framework alive without reaching a settlement.

7.6 Jammu and Kashmir. Seven delegations, three rounds, convened in Geneva under a United Nations Special Representative pursuant to Security Council Resolution 2900, and joined for the first time by a delegation from Jammu and Kashmir itself alongside India, Pakistan, China, Russia, the United Kingdom, and the United States. The talks are organised into three chapters. The territory chapter covers sovereignty over the former princely state, whether the Line of Control becomes an international border, and the Sino-Indian claims to Aksai Chin and the Shaksam Valley. The governance chapter covers the end state for Jammu and Kashmir, the status of Article 370, and the terms of any plebiscite under the troop-withdrawal conditions of Resolution 47. The human rights chapter covers whether violations are investigated internationally or domestically, the status and repatriation of roughly 950,000 displaced people, and access to the camps and the Kashmir Valley. The convening report recorded that Geneva closed with a single converged instrument, a screened humanitarian relief mechanism for the displaced.

---

## 8. Testing Under Uncertainty: the Monte Carlo Layer

8.1 What the method is. A Monte Carlo simulation estimates the range of possible outcomes by running a model many times with randomly drawn inputs and counting how often each result occurs. The technique was devised at Los Alamos in 1946 by Stanislaw Ulam and developed with John von Neumann and Nicholas Metropolis, who supplied the name; Metropolis later recorded that it referred to an uncle of Ulam's who kept borrowing money because he just had to go to Monte Carlo.

8.2 Why a negotiation needs it. A single run tells one story. Whether that story was inevitable or a fluke is a different question, and it is usually the more useful one. Saying that a deal fails in two runs out of eight, and specifically when a hardline shock coincides with a confrontational mood, tells a reader far more about fragility than any single result can.

8.3 The four randomised conditions. Each trial draws a fresh value for four things no delegation controls.

External shock, drawn from a list written for each scenario. The Arctic list includes a record ice-free summer opening new routes, a Russian naval incident involving a NATO vessel, and a major hydrocarbon discovery in contested waters. The Central Asian list includes a severe drought collapsing Syr Darya flows and a deadly border clash. The South China Sea list includes a collision at Second Thomas Shoal and the declaration of an air defence identification zone. One option on every list is that no major shock occurs, so that the absence of a crisis is itself a sampled condition.

Mediator pressure, set to low, medium, or high. This represents how hard the convening envoy pushes for a result.

Overall mood, set to cooperative, neutral, or confrontational. This represents the atmosphere in the room, which experienced negotiators treat as a real variable rather than a soft one.

Momentum, recording which delegation enters with the initiative.

8.4 What each trial returns. An agent simulates the outcome under that specific draw and reports the type of deal reached, each party's satisfaction, whether each party's primary goal was achieved, partial, or failed, whether its red line held, and which coalitions formed. Deal types are recorded on a five-point ordered scale: comprehensive, framework, partial, stalemate, breakdown.

8.5 How the trials are aggregated. Ordinary code, with no model involved, counts the deal types, computes each delegation's satisfaction as a mean, a standard deviation, a median, and a lowest and highest value, calculates the percentage of trials in which each red line held, and ranks the coalitions by how often they recurred. A wide spread means the outcome depends on conditions; a narrow one means it is robust.

> **Conditional on a single model.** Every quantitative result in this section --
> satisfaction scores, red-line survival rates, deal-type distributions, and
> coalition frequencies -- was produced with one underlying model driving all
> delegations. As 11.1 states, the adversaries are therefore not independent
> minds. A mixed-model A/B run for Korea has since been executed and audited
> (11.1a). It found that the coarse outcomes replicated under substitution of
> four of six seats, and that three finer outcomes did not. It also found that
> one headline outcome moved between the two runs at a seat whose model never
> changed, which bounds how much weight any single reported result can carry.
> These numbers should still be read as describing how one model behaves when
> playing every side, on all scenarios but Korea, and as resting on one paired
> run there.

8.6 What the runs found. Twenty trials were run for each scenario, nineteen for the South China Sea. Across every trial of every scenario, not one produced a comprehensive settlement. Central Asia was the most stable, returning a framework agreement in fourteen trials of twenty and a partial in the remaining six, with no failures at all. The Arctic returned a framework in nine and a partial in ten, with a single stalemate and no breakdowns. Cyprus was the most fragile of the original four, returning six stalemates and two breakdowns against eight frameworks. Of the two scenarios added later, the Korean Peninsula proved the most fragile table in the whole set, reaching a framework in only three trials against six partials, eight stalemates, and three breakdowns, while Jammu and Kashmir returned three frameworks, nine partials, six stalemates, and two breakdowns. Individual variables are equally revealing: in the Arctic trials, China's red line held in nine runs of twenty and the United States red line in fifteen of twenty, while the five other delegations held theirs in all twenty. Counts are given rather than percentages throughout this section, because a percentage taken over twenty trials invites a reader to treat it as a rate estimated from a sample, and it is a census of twenty runs of one scenario.

The absence of a comprehensive settlement across every trial reads as a finding about diplomacy and is not one, at least on the scenario where it has been examined. The mixed-model audit at 11.1a checked the Korean profiles against each other and found that the maximum concession the DPRK is authorised to make and the minimum the United States, the Republic of Korea and Japan are authorised to accept do not overlap at any point. On that table a comprehensive settlement is unreachable by construction, so its absence measures the scenario pack rather than the negotiation, and the metric cannot discriminate between two runs, two models, or two sets of tactics. The same check has not been run on the other five scenarios, and until it has, the zero-settlement result should be read as a property the scenarios may impose rather than an outcome the talks produced. What the trials do measure, and measure usefully, is the distribution below that ceiling: how often a table reaches a framework rather than a partial, how often it breaks down, and which red lines survive varied conditions.

8.7 What this is not. The methodology page is explicit that each trial is a reduced-form outcome simulation conditioned on the random draw, not a complete re-run of the multi-round negotiation. What the exercise samples is the model's own distribution over plausible outcomes. It is not an empirical distribution of real events, and the randomised conditions are illustrative rather than calibrated probabilities. The right reading is how sensitive the model thinks this outcome is to shocks and mood, and nothing stronger.

---

## 9. Grounding in Negotiation Theory

9.1 The variables described in Section 5 are not arbitrary. Recording a BATNA, red lines, and a set of tradeable concessions for every party reproduces the standard analytic apparatus of the Harvard Negotiation Project, and it is what allows the simulator to distinguish a delegation that conceded from a delegation that had nothing to gain by holding out.

9.2 The distinction between claiming value and creating value, developed in the study of labour negotiations by Richard Walton and Robert McKersie in 1965, appears in the structure of the tactic vocabulary. Anchoring, counter-anchoring, and deadline-pressure are moves that divide a fixed quantity. Issue-linkage, side-payments, and conditional offers are moves that enlarge what is available to divide. The counts therefore say something about what kind of negotiation took place, not merely how much of it there was.

9.3 One well-established feature of real diplomacy is deliberately absent. Robert Putnam's account of two-level games, published in International Organization in 1988, describes negotiators bargaining simultaneously at an international table and a domestic one, where a leader whose parliament will reject a deal has less room to agree but more leverage to refuse. The simulator captures a trace of this in the delegation role field, which records how much authority a delegation holds, but it does not model the domestic table. No agent faces a legislature, a coalition partner, or an election. This is a substantial simplification of what constrains real negotiators.

9.4 The convening role is modelled at a similarly light touch. The public brief provides that a Special Representative chairs the plenary and may invite proposals and summarise, and the analyst writes in that voice afterwards. But no agent plays the mediator during the talks. Mediator pressure appears only as a randomised condition in the Monte Carlo layer, never as an actor making choices in the room.

---

## 10. Provenance of the Scenario Material

10.1 The scenario packs are adapted from crisis-negotiation exercise materials associated with the International Strategic Crisis Negotiation Exercise programme run by the Center for Strategic Leadership at the United States Army War College, which takes the exercise to universities each year and has developed regional scenario sets including the Arctic, Cyprus, and the South China Sea.

10.2 The repository preserves the source documents themselves, organised by scenario, with one public scenario brief and one confidential instruction file per country. Their file names record the institution and academic year of the exercise from which each pack came, which is an unusually clean audit trail for material of this kind.

10.3 The material is notional exercise content written for teaching. It does not represent the actual negotiating position of any government, and the simulator inherits that status. Search-engine indexing of the published site is disabled, both through a site-wide instruction file and through per-page tags, so that AI-generated statements attributed to real states do not circulate as though they were reporting.

---

## 11. Limitations and Caveats

The repository documents its own limitations at length, and they are serious enough to state in full.

11.1 One mind plays every side. All delegations are driven by the same underlying model. Information is isolated, but the adversaries are not genuinely independent actors, and shared assumptions or style can leak across roles. This is the deepest limitation in the design, because it undercuts the premise that a negotiation is a meeting of different minds.

11.1a The confound has now been tested on one scenario.
Diagnosing the monoculture problem is not the same as measuring it. The check
this design needs is a seam: run one scenario with delegations driven by
*different* underlying models and report whether the deal type, the
satisfaction ordering, and the "zero comprehensive settlements" result survive.

**That run has been executed for the Korea Six-Party Talks** as a controlled
A/B against the isolated single-model baseline, holding scenario, profiles,
public brief, prompts, rounds and information isolation constant and varying
only which model sits behind each seat: the DPRK and the United States on Opus
4.8 (kept on the strongest model, because a weaker model self-breaching a red
line would confound "the model cannot hold a position" with "the position did
not hold"), China and Russia on Sonnet, and the Republic of Korea and Japan on
Haiku 4.5. Design and all three round transcripts are committed under
`sim/analysis/mixed-model/`.

**The comparative audit is now written up** and committed at
`sim/analysis/mixed-model/findings.md`, with the summary at `korea.md`. It is a
paired comparison of two runs of one scenario, with one run in each arm.
Nothing in it is a rate, a frequency, or an effect size, and it should not be
cited as one. Its results are not the ones the run was expected to produce.

The coarse outcome replicated. Substituting four of six seats across two model
tiers did not change whether the mutual freeze was accepted, whether sanctions
moved, or whether a settlement was reached. The peer review's specific worry,
that the zero-settlements result is an artefact of one model's disposition, is
not supported by this pair. The finer record did not replicate: the baseline
produced three procedural agreements the chair could enumerate and the mixed run
produced one, and the Japan-DPRK bilateral channel on the abductions, agreed in
the baseline, was never convened in the mixed run.

The most important finding is one the review did not anticipate and it is
adverse to the paper. **The zero-settlements result is over-determined by
profile design, and belongs in this section as a limitation rather than in
section 8 as a finding.** The DPRK's maximum authorised concession set and the
minimum authorised demand of the United States, the Republic of Korea and Japan
are logically disjoint: the DPRK's red line forbids reducing its deterrent
without acceptable compensation, and the other three forbid any residual
programme whatsoever. There is no point in the authorised space where a
comprehensive settlement exists, so no role-faithful agent of any tier can
produce one. On the Korea scenario the settlement rate cannot discriminate
between models at all, because it cannot vary. Making it informative requires a
scenario whose authorised concession sets overlap, which is now the first item
of future work.

**Run-to-run variance moved a headline outcome by itself.** The United States
offered the DPRK an unconditional bilateral channel in round one of both runs.
The DPRK accepted it in the baseline and ignored it in the mixed run, from a
seat that was on the same model in both. The delegation whose behaviour flipped
a reported outcome was not a substituted seat. Any tier-attributed difference
in the audit has to be read against that.

**Tier-linked defects are real, quotable, and weaker than they first look.** The
Sonnet chair miscounted a three-three room as three-one and was corrected on the
record by the American delegation; a Haiku seat offered humanitarian aid and
rail reconstruction at the declaration stage when its instructions reserve them
for after elimination, then reported its red lines intact. But the all-Opus
baseline contains the same error families. Two Opus seats asserted an
unsupported five-party coalition and attributed it to the record, and the Opus
Japan seat made the same red-line category error later made by its Haiku
counterpart. Reporting only the weak-model errors would be selecting on the
hypothesis, so both arms are audited and both are reported.

**Model and role are perfectly confounded in this design**, which is the
limitation that most constrains what the run licenses. Both Haiku seats were the
two allied non-American delegations and both Sonnet seats were the two
step-by-step delegations. "The weaker model degrades role fidelity" and "the
Seoul and Tokyo seats are harder to play" are indistinguishable on this data.
Rotating each tier across each seat is the next run. A further design bias
should be stated with the replication claim: the two seats holding the positions
that generate the central deadlock were deliberately kept on the strongest
model, which mechanically stabilises the headline outcome, so what replicated is
outcome stability under substitution of the non-pivotal seats rather than
outcome stability generally.

The audit was also not blind. Its author knew the model assignment before
reading either transcript, and the qualitative judgements most exposed to that,
the "press-release" reading and the coding of conditional offers, are flagged as
such in its threats section. Auditing the baseline for the same error classes,
and reporting the instances where a weaker seat outperformed a stronger one, is
mitigation rather than blinding. Repeating the red-line audit with a coder blind
to assignment, and reporting inter-rater agreement, is required before any of
this is presented as more than a documented pair of runs.

What the exercise contributes independently of its results is the method:
auditing statements against each delegation's own machine-readable red-line
array, and keeping three things apart that are routinely collapsed together, a
red line breached, a binding instruction breached, and a red-line breach
falsely claimed. That produced discriminating evidence in both arms and
transfers to any run of this kind.

11.2 There is no ground truth. Nothing in the tool has been validated against a real negotiation, an expert assessment, or a historical outcome. The scoreboard numbers are one system's subjective judgement of another system's writing. Satisfaction should be read as how the analyst rated the argument on the page, not as an assessment of any national interest.

11.3 Agents can fabricate. A language model can invent a plausible-sounding treaty, figure, or precedent that appears nowhere in its brief, and can drift from a government's real position in ways that read smoothly.

11.4 Training data shapes the outcome. Which arguments sound strong, which framings feel reasonable, and how sympathetically each actor is portrayed all reflect biases in the material the model learned from. A simulator in which one delegation consistently argues more persuasively than another may be reporting a fact about the model rather than about the dispute.

11.5 The exercise is compressed. A multi-day negotiation becomes three or four short plenary rounds. Caucuses, bilateral side-channels, corridor conversations, and escalation dynamics are simplified or absent. Much of what determines the outcome of real talks happens outside the plenary, and none of that is here.

11.6 The samples are small. Twenty trials per scenario is enough to show that Cyprus is fragile and Central Asia is not, and that the two scenarios added later, Korea and Jammu and Kashmir, are more fragile still. It is not enough to support a percentage figure quoted on its own.

11.7 The Monte Carlo layer now holds twenty trials for each scenario, with nineteen for the South China Sea, and a further twenty for the earlier Strait of Hormuz session, for one hundred and thirty-nine trials in total. Anyone reconciling this figure against an earlier count should note that the run was topped up from an initial eight trials per scenario.

11.8 The project records a failure honestly. The first orchestration run struck a transient network outage that stopped roughly half its agents mid-negotiation, and a targeted re-run completed the missing rounds. The repository states that no gaps were papered over and that every published statement is a genuine agent output, with the intermediate artefacts committed for inspection. Because language models are not deterministic, the exact wording of any repeat run will differ even from identical source documents.

11.9 It is not decision support. The repository states directly that the tool must not be used to inform real policy, negotiation, or intelligence judgements.

---

## 12. Intended Audience and Use

12.1 The prototype is built for teaching and for structured exploration. Its most defensible use is as a companion to a human exercise rather than a replacement for one. A class that has run the Arctic scenario itself can compare its own transcript against the simulated one and argue about where the agents were wrong, which is a more demanding exercise than either activity alone.

12.2 It is also of interest to researchers examining what happens when language models are asked to hold a position under pressure. The run artefacts are complete enough to support that kind of scrutiny, which is precisely what makes the honest limitations section valuable rather than decorative.

12.3 It is of no use to anyone seeking to know what any government will actually do. The tool says so itself, and this report repeats it because the output is fluent enough to be mistaken for analysis.

---

## 13. Conclusion

13.1 The Diplomatic Simulator is a modest and carefully documented prototype.
**Its negotiation results should not yet be read as findings about negotiation.**
One model plays every side. The multi-model check that would tell the reader
whether the satisfaction ordering, the deal types, and the "zero comprehensive
settlements" result are properties of the scenarios or artefacts of that
monoculture has now been run and audited for Korea (11.1, 11.1a). It answers
less than it was meant to. The coarse outcomes replicated, but the audit found
that the zero-settlements result on that scenario is fixed by the profiles
rather than produced by the talks, so the metric the check was supposed to test
cannot vary there; one headline outcome moved between runs at a seat whose model
never changed; and model and seat are perfectly confounded in the assignment
used. The honest position is that the monoculture has been tested once, on one
scenario, in a design that cannot separate the model from the chair it sits in.
Every number reported here remains conditional on a single model, and on Korea
it rests on one paired run.

What the prototype does contribute is less the simulated negotiations themselves than the discipline imposed on them: confidential mandates that stay confidential, statements that are counted and labelled, scores that are defined against each delegation's own stated goals rather than an invented standard of success, and a sensitivity layer that reports how much of the outcome was luck.

13.2 The most valuable thing in the repository may be its methodology page, which sets out what the agents do, what they do not do, which model produced each layer, where the run broke, and why none of the numbers carry ground truth. Tools of this kind will become common, and their outputs will be fluent enough that readers extend them more credibility than they have earned. A prototype that publishes its own failure modes alongside its results, and that turns off search indexing so its invented statements are not mistaken for reporting, sets a standard worth borrowing.

---

## Attribution

Developed by Carolina Moron as part of masters research at the NYU Center for Global Affairs (2026), under the Ethical Tech CoLab. The original diplomacy table demonstration and the Strait of Hormuz session report, from which the simulator's presentation layer is adapted, were built by Yorke Rhodes III. Scenario packs are adapted from United States Army War College International Strategic Crisis Negotiation Exercise and related academic crisis-negotiation materials. All negotiation content was generated by Claude Opus 4.8 agents.

> Note: This report is a plain-language summary of a research prototype.
> The prototype is for academic demonstration and teaching only. All
> negotiation statements, scores, and summaries are generated by artificial
> intelligence agents role-playing governments. They are notional, carry no
> ground truth, do not represent the position of any state or official, and
> must not be used to inform policy, negotiation, or intelligence judgements.
