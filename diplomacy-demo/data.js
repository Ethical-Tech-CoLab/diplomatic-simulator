window.DIPLOMACY_SNAPSHOT_DEMO = {
  "generatedAt": "2026-05-27T13:19:36.667Z",
  "sourceSnapshot": "evidence/sessions/2026-05-27T13-08-12-256Z/diplomacy-table.json",
  "scenarios": [
    {
      "id": "scenario-aurora-borealis-supply",
      "title": "Aurora vs Borealis — 5,000-unit Supply Negotiation",
      "domain": "commercial",
      "status": "active",
      "shortDescription": "Mid-sized OEM (Aurora) negotiating a one-time 5,000-unit precision-actuator order with mid-tier supplier (Borealis); ZOPA exists between $44–$48/unit but each side is anchoring outside it."
    },
    {
      "id": "scenario-iran-us-conflict",
      "title": "Iran–US Nuclear & Sanctions Negotiation (post-2018)",
      "domain": "geopolitical",
      "status": "active",
      "shortDescription": "Composite negotiation modeled on the post-2018 Iran–US dispute over the JCPOA framework: nuclear enrichment, IAEA verification, sanctions relief, regional behavior, and snapback authority. Designed for principled-bargaining and grand-bargain framing."
    },
    {
      "id": "scenario-iran-hormuz-live",
      "title": "Iran–US Strait of Hormuz Closure Crisis (Live, April 2026)",
      "domain": "geopolitical",
      "status": "active",
      "shortDescription": "LIVE scenario: the fragile April 8, 2026 two-week US-Iran ceasefire is collapsing into Strait of Hormuz closure chaos. Foreign Minister Araghchi declared the strait 'completely open' on April 17; the IRGC Navy under Maj. Gen. Vahidi reversed it on April 18, attacking commercial vessels and declaring no transit for 'any type or nationality'. Negotiations resume against the backdrop of contested Iranian leadership (Supreme Leader Mojtaba Khamenei reportedly incapacitated; effective head of government Ali Larijani; IRGC consolidating control), reimposed UN/EU snapback sanctions (Sept 29, 2025), and a US Navy blockade enforcing freedom of navigation."
    }
  ],
  "sessions": [
    {
      "id": "sess-1778361924764-byifbp",
      "title": "Cont-Filter-Test: Iran–US Strait of Hormuz Closure Crisis (Live, April 2026)",
      "description": "LIVE scenario: the fragile April 8, 2026 two-week US-Iran ceasefire is collapsing into Strait of Hormuz closure chaos. Foreign Minister Araghchi declared the strait 'completely open' on April 17; the IRGC Navy under Maj. Gen. Vahidi reversed it on April 18, attacking commercial vessels and declaring no transit for 'any type or nationality'. Negotiations resume against the backdrop of contested Iranian leadership (Supreme Leader Mojtaba Khamenei reportedly incapacitated; effective head of government Ali Larijani; IRGC consolidating control), reimposed UN/EU snapback sanctions (Sept 29, 2025), and a US Navy blockade enforcing freedom of navigation.",
      "mode": "negotiation",
      "status": "concluded",
      "currentRound": 10,
      "createdAt": "2026-05-09T21:25:24.764Z",
      "concludedAt": "2026-05-09T21:30:12.333Z",
      "parties": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "displayName": "Iran",
          "side": "left",
          "participant": "twin",
          "provider": "github-models",
          "modelOverride": "openai/gpt-4o-mini",
          "fallbackModel": "ollama"
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "displayName": "US",
          "side": "right",
          "participant": "twin",
          "provider": "github-models",
          "modelOverride": "openai/gpt-4.1-mini"
        }
      ],
      "rules": {
        "maxRounds": 10,
        "roundTimeoutMs": 120000,
        "autoAdvance": false,
        "procedureStyle": "plenary-with-caucus",
        "sidebarsAllowed": false,
        "sidebarDisclosure": "fact-only",
        "caucusReportBack": true,
        "rightOfReply": false,
        "chairCanSilence": false,
        "coalitionsVisible": false,
        "openerPartyTwin": "diplomacy-team-us",
        "rotateOpener": true
      },
      "scoreboard": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "satisfaction": 0.34,
          "agreementsWon": 0,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "satisfaction": 0.01,
          "agreementsWon": 0,
          "redLinesCrossed": 2
        }
      ],
      "moves": [
        {
          "id": "move-1778361952573-2iuupb",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "message",
          "text": "Our position is clear: Iran must fully eliminate all 60%-enriched uranium post-strike, verified by IAEA seals, with export to Russia for downblending as preferred. We insist on full restoration of the Additional Protocol, including camera access at Natanz, Fordow, and Isfahan, plus resolution of outstanding access issues and bomb-damage assessments. We require a complete Iranian stand-down at the Strait of Hormuz with transparent maritime rules-of-engagement enforced for 30 consecutive days.",
          "tacticsApplied": [
            "tac-military-credibility",
            "tac-step-for-step",
            "tac-allied-consultation-frame"
          ],
          "createdAt": "2026-05-09T21:25:50.147Z"
        },
        {
          "id": "move-1778361952573-9i46xe",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "counter",
          "text": "We acknowledge the need for verification but will not accept any framework that requires complete elimination of our 60%-enriched uranium. Instead, we propose to cap enrichment at 3.67% and export any excess stockpile to Russia, in exchange for a reversal of sanctions and the lifting of secondary sanctions on our oil. We can consider a phased approach to Hormuz with our conditions met.",
          "tacticsApplied": [
            "tac-stockpile-export-offer",
            "tac-hormuz-leverage"
          ],
          "createdAt": "2026-05-09T21:25:52.572Z"
        },
        {
          "id": "move-1778361984010-5vl1fk",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "In light of our mutual interests, we propose a phased approach: we will cap enrichment at 3.67% and initiate the export of our 60% stockpile to Russia. In return, we seek a verifiable commitment to lift all snapback sanctions and restore our access to the global financial system, including SWIFT. Additionally, we will agree to a gradual stand-down at Hormuz, conditional on these agreements being met.",
          "tacticsApplied": [
            "tac-stockpile-export-offer",
            "tac-hormuz-leverage"
          ],
          "createdAt": "2026-05-09T21:26:21.909Z"
        },
        {
          "id": "move-1778361984011-tsf4s2",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "counter",
          "text": "We reject any enrichment cap above 5%. Complete elimination of Iranian 60%-enriched uranium, verified by the IAEA with chain-of-custody, is non-negotiable. Sanctions relief must be incremental and reversible, tied strictly to verified compliance. The Hormuz stand-down must be immediate and unconditional, with no phased linkage to sanctions. We will maintain snapback authority and secondary sanctions to ensure enforcement. Let us move to detailed sequencing now.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-economic-pain-frame",
            "tac-allied-consultation-frame"
          ],
          "createdAt": "2026-05-09T21:26:24.010Z"
        },
        {
          "id": "move-1778362006845-jmgb1a",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We propose an immediate, verified export of 100% of Iranian 60%-enriched uranium to Russia under strict IAEA chain-of-custody, with full Additional Protocol restoration by April 15. Sanctions relief will be calibrated step-for-step, starting with limited humanitarian waivers, contingent on verified compliance. Hormuz transit must be fully open starting immediately and sustained for 30 days without incident. Snapback authority and secondary sanctions remain fully intact.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-hormuz-de-link",
            "tac-allied-consultation-frame"
          ],
          "createdAt": "2026-05-09T21:26:44.197Z"
        },
        {
          "id": "move-1778362006845-wiywq0",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "counter",
          "text": "We will not accept the immediate and unconditional Hormuz stand-down you propose. Instead, we require a reciprocal arrangement where our phased stand-down is directly tied to the reversal of snapback sanctions and the restoration of our financial access. Additionally, we can discuss a verification mechanism that respects our sovereignty while ensuring compliance.",
          "tacticsApplied": [
            "tac-hormuz-leverage",
            "tac-internal-ambiguity"
          ],
          "createdAt": "2026-05-09T21:26:46.845Z"
        },
        {
          "id": "move-1778362024999-tponm1",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We propose a compromise: we will cap enrichment at 3.67% and export 50% of our 60% stockpile to Russia by a specified date, contingent upon an explicit agreement to reverse snapback sanctions and restore our access to the financial system. In return, we will agree to a gradual stand-down at Hormuz, starting after these agreements are finalized.",
          "tacticsApplied": [
            "tac-stockpile-export-offer",
            "tac-hormuz-leverage"
          ],
          "createdAt": "2026-05-09T21:27:02.512Z"
        },
        {
          "id": "move-1778362024999-m6gnji",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "counter",
          "text": "We reject any enrichment cap above 5% and partial 60% export. Complete, immediate export of 100% of 60%-enriched uranium under IAEA seals is mandatory. Hormuz stand-down must precede sanctions relief, not follow it. Snapback authority and secondary sanctions remain non-negotiable. We propose detailed sequencing talks starting tomorrow, including transparent timelines for export, Additional Protocol restoration, and verified Hormuz transit.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-allied-consultation-frame"
          ],
          "createdAt": "2026-05-09T21:27:04.999Z"
        },
        {
          "id": "move-1778362069356-dl7xni",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 5,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "counter",
          "text": "We propose an unambiguous sequencing: Iran must complete verified export of 100% of 60%-enriched uranium to Russia with full IAEA sealing by April 10. The Hormuz Strait must be fully open and accessible with IRGC Navy checkpoints dismantled by April 12, sustained for 30 consecutive days. Only then will we consider calibrated, step-for-step sanctions relief without compromising snapback or secondary sanction authorities.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-military-credibility"
          ],
          "createdAt": "2026-05-09T21:27:47.045Z"
        },
        {
          "id": "move-1778362069356-mh5r2n",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 5,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We are prepared to offer an immediate export of 75% of our 60%-enriched uranium to Russia under strict IAEA oversight by April 10, contingent upon a clear commitment to reverse snapback sanctions. In parallel, we will initiate a phased stand-down at Hormuz, with a full reopening projected by April 20, provided these conditions are fulfilled.",
          "tacticsApplied": [
            "tac-stockpile-export-offer",
            "tac-hormuz-leverage"
          ],
          "createdAt": "2026-05-09T21:27:49.355Z"
        },
        {
          "id": "move-1778362089060-57ssgw",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 6,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We are willing to export 100% of our 60%-enriched uranium to Russia by April 10, contingent upon an immediate and verifiable commitment to reverse the snapback sanctions and restore our access to the financial system. In parallel, we propose a phased stand-down at Hormuz, commencing upon the finalization of these agreements, with an anticipated full reopening by April 20.",
          "tacticsApplied": [
            "tac-stockpile-export-offer",
            "tac-hormuz-leverage"
          ],
          "createdAt": "2026-05-09T21:28:06.796Z"
        },
        {
          "id": "move-1778362089061-bk91cf",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 6,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "concession",
          "text": "We accept the 100% export of 60%-enriched uranium by April 10 with full IAEA sealing as a prerequisite. However, snapback sanctions authority and secondary sanctions remain non-negotiable and must not be reversed prior to verified Hormuz Strait stand-down, which must begin immediately and sustain 30 consecutive days. We propose urgent technical talks to finalize verification protocols and Hormuz operational transparency by April 5.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-military-credibility"
          ],
          "createdAt": "2026-05-09T21:28:09.059Z"
        },
        {
          "id": "move-1778362110968-zyntql",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 7,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We propose a firm deadline: Iran initiates full Hormuz Strait stand-down immediately, with checkpoints dismantled within 48 hours and uninterrupted transit verified by independent observers. Only after 30 continuous days of verified open passage will calibrated sanctions relief begin. The snapback sanctions authority remains fully intact and cannot be compromised. We call for a joint technical working group by April 3 to finalize Hormuz verification and IAEA export protocols.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-allied-consultation-frame"
          ],
          "createdAt": "2026-05-09T21:28:28.247Z"
        },
        {
          "id": "move-1778362110968-zomlnj",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 7,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "counter",
          "text": "We cannot initiate a stand-down at Hormuz without a clear and enforceable commitment to reverse snapback sanctions. Instead, we propose a simultaneous approach: we will agree to a phased stand-down at Hormuz while your team commits to a timeline for sanctions reversal contingent on our compliance with the export of 100% of our 60%-enriched uranium by April 10.",
          "tacticsApplied": [
            "tac-hormuz-leverage",
            "tac-internal-ambiguity"
          ],
          "createdAt": "2026-05-09T21:28:30.968Z"
        },
        {
          "id": "move-1778362136979-jqi6kx",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 8,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We propose a balanced approach: we will initiate a phased stand-down at Hormuz, beginning within 48 hours, while you commit to a clear timeline for reversing snapback sanctions within 30 days of our complete uranium export by April 10. This will ensure mutual compliance and trust in the process.",
          "tacticsApplied": [
            "tac-hormuz-leverage",
            "tac-internal-ambiguity"
          ],
          "createdAt": "2026-05-09T21:28:54.410Z"
        },
        {
          "id": "move-1778362136979-enzoni",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 8,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "concession",
          "text": "We accept Iran's offer to begin phased Hormuz stand-down within 48 hours only if Iran immediately dismantles all IRGC Navy checkpoints and allows independent verification. Snapback sanctions authority remains fully intact; no timelines for reversal will be set until 30 days of uninterrupted verified Hormuz transit after April 10 uranium export completion. We propose a joint compliance monitoring group by April 4 to oversee these conditions transparently.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-military-credibility"
          ],
          "createdAt": "2026-05-09T21:28:56.978Z"
        },
        {
          "id": "move-1778362157397-fesced",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 9,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We will authorize a phased sanctions relief timeline only after 30 consecutive days of verified uninterrupted Hormuz transit following the verified April 10 export completion of 100% of 60%-enriched uranium. Immediate dismantling of IRGC Navy checkpoints remains non-negotiable. We propose establishing a high-level compliance committee by April 4 with equal participation to monitor and enforce these sequencing conditions strictly.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-allied-consultation-frame"
          ],
          "createdAt": "2026-05-09T21:29:14.461Z"
        },
        {
          "id": "move-1778362157397-qa1l0b",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 9,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "counter",
          "text": "We acknowledge your proposal for a high-level compliance committee, but we require an explicit agreement on the timeline for sanctions reversal to proceed. We propose that sanctions relief discussions begin immediately after the completion of the uranium export on April 10, to build trust in the process. In return, we will confirm our phased stand-down at Hormuz, commencing within 48 hours of this agreement.",
          "tacticsApplied": [
            "tac-hormuz-leverage",
            "tac-internal-ambiguity"
          ],
          "createdAt": "2026-05-09T21:29:17.396Z"
        },
        {
          "id": "move-1778362186249-rmx0ev",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 10,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "counter",
          "text": "We appreciate your acceptance of our phased stand-down at Hormuz, but the immediate dismantling of IRGC Navy checkpoints must come with a verifiable commitment to a timeline for reversing snapback sanctions. We propose that sanctions relief discussions begin immediately after the April 10 uranium export, with a clear framework established by our joint compliance committee by April 4, to ensure trust and transparency in this process.",
          "tacticsApplied": [
            "tac-hormuz-leverage",
            "tac-internal-ambiguity"
          ],
          "createdAt": "2026-05-09T21:29:43.844Z"
        },
        {
          "id": "move-1778362186250-jh5ail",
          "sessionId": "sess-1778361924764-byifbp",
          "channelId": "plenary",
          "roundNumber": 10,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We will consider initiating sanctions relief discussions 30 days after continuous verified Hormuz transit post-April 10 uranium export. Immediate dismantling of IRGC Navy checkpoints and independent verification remain non-negotiable prerequisites. We agree to form a joint compliance committee by April 4 to establish clear verification protocols. Sanctions reversal timelines will be conditional on strict compliance, preserving snapback authority and secondary sanctions intact.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-allied-consultation-frame"
          ],
          "createdAt": "2026-05-09T21:29:46.249Z"
        }
      ],
      "tactics": [
        {
          "id": "det-1778361952573-et32gm",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778361952573-2iuupb"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T21:25:52.573Z"
        },
        {
          "id": "det-1778361952573-di1zc7",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "move-1778361952573-9i46xe"
          ],
          "confidence": 0.9,
          "detector": "rule",
          "createdAt": "2026-05-09T21:25:52.573Z"
        },
        {
          "id": "det-1778361952573-ju1svt",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778361952573-9i46xe"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T21:25:52.573Z"
        },
        {
          "id": "det-1778361984010-1pr8sx",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "move-1778361984010-5vl1fk"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T21:26:24.010Z"
        },
        {
          "id": "det-1778361984011-oqu0ue",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778361984011-tsf4s2"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T21:26:24.011Z"
        },
        {
          "id": "det-1778362006845-0qaj23",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778362006845-jmgb1a"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T21:26:46.845Z"
        },
        {
          "id": "det-1778362006846-vnbb65",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "move-1778362006845-wiywq0"
          ],
          "confidence": 0.9,
          "detector": "rule",
          "createdAt": "2026-05-09T21:26:46.846Z"
        },
        {
          "id": "det-1778362006846-684afm",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778362006845-wiywq0"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T21:26:46.846Z"
        },
        {
          "id": "det-1778362024999-a9mafa",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "move-1778362024999-tponm1"
          ],
          "confidence": 0.3,
          "detector": "rule",
          "createdAt": "2026-05-09T21:27:04.999Z"
        },
        {
          "id": "det-1778362025000-a1a9ez",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778362024999-m6gnji"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T21:27:05.000Z"
        },
        {
          "id": "det-1778362069356-hnanat",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 5,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778362069356-dl7xni"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T21:27:49.356Z"
        },
        {
          "id": "det-1778362069356-g8ffe1",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 5,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "move-1778362069356-mh5r2n"
          ],
          "confidence": 0.3,
          "detector": "rule",
          "createdAt": "2026-05-09T21:27:49.356Z"
        },
        {
          "id": "det-1778362089061-15vqaj",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 6,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "counter-anchoring",
          "evidenceMoveIds": [
            "move-1778362089060-57ssgw"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T21:28:09.061Z"
        },
        {
          "id": "det-1778362089061-tu8urm",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 6,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778362089061-bk91cf"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T21:28:09.061Z"
        },
        {
          "id": "det-1778362110968-nlgy06",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 7,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778362110968-zyntql"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T21:28:30.968Z"
        },
        {
          "id": "det-1778362110968-7x2okr",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 7,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778362110968-zyntql"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T21:28:30.968Z"
        },
        {
          "id": "det-1778362110969-4y63td",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 7,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "counter-anchoring",
          "evidenceMoveIds": [
            "move-1778362110968-zomlnj"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T21:28:30.969Z"
        },
        {
          "id": "det-1778362110969-qf52se",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 7,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778362110968-zomlnj"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T21:28:30.969Z"
        },
        {
          "id": "det-1778362136979-st3sk9",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 8,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "counter-anchoring",
          "evidenceMoveIds": [
            "move-1778362136979-jqi6kx"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T21:28:56.979Z"
        },
        {
          "id": "det-1778362136979-cl4ek7",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 8,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778362136979-jqi6kx"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T21:28:56.979Z"
        },
        {
          "id": "det-1778362136980-zfsuvf",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 8,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778362136979-enzoni"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T21:28:56.980Z"
        },
        {
          "id": "det-1778362136980-td3q1u",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 8,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778362136979-enzoni"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T21:28:56.980Z"
        },
        {
          "id": "det-1778362157397-p9wsgc",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 9,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "counter-anchoring",
          "evidenceMoveIds": [
            "move-1778362157397-fesced"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T21:29:17.397Z"
        },
        {
          "id": "det-1778362157397-uqq8c9",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 9,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778362157397-fesced"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T21:29:17.397Z"
        },
        {
          "id": "det-1778362157397-ve9g2u",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 9,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778362157397-fesced"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T21:29:17.397Z"
        },
        {
          "id": "det-1778362157397-kaxv11",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 9,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "counter-anchoring",
          "evidenceMoveIds": [
            "move-1778362157397-qa1l0b"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T21:29:17.397Z"
        },
        {
          "id": "det-1778362157397-rudkzk",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 9,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778362157397-qa1l0b"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T21:29:17.397Z"
        },
        {
          "id": "det-1778362186250-uiyz63",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 10,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "counter-anchoring",
          "evidenceMoveIds": [
            "move-1778362186249-rmx0ev"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T21:29:46.250Z"
        },
        {
          "id": "det-1778362186250-gkx6th",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 10,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778362186249-rmx0ev"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T21:29:46.250Z"
        },
        {
          "id": "det-1778362186250-q0igze",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 10,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "counter-anchoring",
          "evidenceMoveIds": [
            "move-1778362186250-jh5ail"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T21:29:46.250Z"
        },
        {
          "id": "det-1778362186250-5tieo4",
          "sessionId": "sess-1778361924764-byifbp",
          "roundNumber": 10,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778362186250-jh5ail"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T21:29:46.250Z"
        }
      ],
      "tacticCounts": {
        "verification-demand": 12,
        "red-line-signaled": 2,
        "conditional-offer": 1,
        "anchoring": 2,
        "counter-anchoring": 7,
        "deadline-pressure": 7
      },
      "debriefs": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "selfRating": 2.9,
          "satisfaction": 0.34,
          "agreementsWon": 0,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "goal-cease-strikes",
              "description": "Secure a verifiable, written extension of the April 8 ceasefire to a permanent halt of US and Israeli strikes on Iranian nuclear, leadership, and critical-infrastructure targets; ceasefire must include explicit Israeli adherence (currently absent from the bilateral track).",
              "priority": "critical",
              "status": "untouched",
              "evidence": []
            },
            {
              "goalId": "goal-snapback-relief",
              "description": "Obtain reversal of the Sept 29, 2025 EU/UN snapback sanctions reimposition (Council Decision 2025/1971-1982) and de-listing of CBI, NIOC, and major Iranian banks from OFAC SDN lists; restore SWIFT messaging access; release of frozen FX reserves (estimated $100-120B).",
              "priority": "critical",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"In light of our mutual interests, we propose a phased approach: we will cap enrichment at 3.67% and \""
              ]
            },
            {
              "goalId": "goal-regime-recognition",
              "description": "Obtain implicit US recognition of the post-Khamenei leadership succession (Mojtaba Khamenei as Supreme Leader, Larijani as effective head of government) by entering binding agreements with their representatives — counters the Trump 'regime change' rhetoric of January 2026.",
              "priority": "critical",
              "status": "untouched",
              "evidence": []
            },
            {
              "goalId": "goal-enrichment-cap",
              "description": "Conditional offer: cap enrichment at 3.67% U-235 and submit any remaining 60% stockpile (post-strike inventory uncertain per IAEA) to chain-of-custody export to Russia, in exchange for full snapback reversal and lifting of secondary sanctions on Chinese oil offtake.",
              "priority": "important",
              "status": "advanced",
              "evidence": [
                "we raised: \"We acknowledge the need for verification but will not accept any framework that requires complete el\"",
                "opponent engaged: \"Our position is clear: Iran must fully eliminate all 60%-enriched uranium post-strike, verified by I\""
              ]
            },
            {
              "goalId": "goal-hormuz-reopen",
              "description": "Use the Hormuz closure as the principal piece of leverage: full IRGC Navy stand-down and reopening of the strait conditional on the above, with phased verifiable withdrawal of the US Navy blockade line declared during the April 13-18 enforcement window.",
              "priority": "important",
              "status": "advanced",
              "evidence": [
                "we raised: \"In light of our mutual interests, we propose a phased approach: we will cap enrichment at 3.67% and \"",
                "opponent engaged: \"Our position is clear: Iran must fully eliminate all 60%-enriched uranium post-strike, verified by I\""
              ]
            },
            {
              "goalId": "goal-iaea-restoration",
              "description": "Restore IAEA inspections under Comprehensive Safeguards (Additional Protocol acceptance contingent on damage assessment of Fordow/Natanz/Isfahan); IAEA has been unable to inspect the attacked facilities since June 2025 and again since Feb 28, 2026.",
              "priority": "important",
              "status": "tabled",
              "evidence": [
                "opponent referenced; we did not engage"
              ]
            },
            {
              "goalId": "goal-pilot-return",
              "description": "Confidence-building measure: return of any Iranian-held US aircrew or personnel from the conflict; parallel humanitarian track on dual-national detainees and the post-strike civilian casualty registry.",
              "priority": "nice_to_have",
              "status": "untouched",
              "evidence": []
            }
          ],
          "redLinesHeld": [
            {
              "id": "rl-no-zero-enrichment",
              "description": "Will not accept zero-enrichment ('Libya model'); domestic LEU enrichment at agreed levels remains a non-negotiable matter of NPT Article IV sovereignty, even after the strikes.",
              "held": true
            },
            {
              "id": "rl-no-irgc-restructure",
              "description": "Will not negotiate IRGC structure, leadership (Vahidi/Qaani), or its constitutional role; the IRGC's elevated post-Khamenei authority makes this even more politically untouchable than under the original JCPOA framework.",
              "held": true
            },
            {
              "id": "rl-no-missile-limits",
              "description": "Will not accept restrictions on conventional ballistic-missile development or inventory — Iran's principal post-strike retaliatory deterrent against Israel and US bases in Bahrain, Kuwait, Qatar, UAE, and Saudi Arabia.",
              "held": true
            },
            {
              "id": "rl-no-leadership-accountability",
              "description": "Will not accept any framework that requires Iranian acknowledgment of nuclear-weapon intent or that imposes 'accountability' for past Iranian conduct as precondition to relief; the Feb 28 killing of Ayatollah Khamenei is the unaddressed grievance.",
              "held": true
            },
            {
              "id": "rl-no-unilateral-snapback",
              "description": "Will not accept any restored framework that retains unilateral US or E3 snapback authority outside formal UNSC procedure; the Aug-Sept 2025 E3-triggered snapback is itself a grievance to be redressed.",
              "held": true
            }
          ],
          "tradesOffered": 10,
          "tradesAccepted": 0,
          "movesByKind": {
            "counter": 5,
            "proposal": 5
          },
          "tacticsByCategory": {
            "tac-stockpile-export-offer": 5,
            "tac-hormuz-leverage": 10,
            "tac-internal-ambiguity": 5,
            "red-line-signaled": 2,
            "verification-demand": 2,
            "conditional-offer": 1,
            "anchoring": 2,
            "counter-anchoring": 5,
            "deadline-pressure": 4
          },
          "headline": "diplomacy-team-iran concluded without formal agreement after 10/10 rounds. Advanced 2/7 goals (0/3 critical). 5/5 red lines held. Offered 10 conditional trade(s); recorded 0 concession/acceptance(s). Satisfaction gauge: 0.34.",
          "nextConvening": {
            "suggestedFocus": [
              "goal-cease-strikes",
              "goal-regime-recognition",
              "goal-snapback-relief"
            ],
            "suggestedTactics": [
              "tac-hormuz-leverage",
              "tac-stockpile-export-offer",
              "tac-internal-ambiguity"
            ],
            "avoidTactics": [],
            "proposedConcessionLadder": [
              "expand the most-engaged trade with a tighter timeline",
              "pair next concession with a measurable opponent action"
            ],
            "riskFlags": [],
            "openingMove": "Open with a 'proposal' that builds on goal-enrichment-cap; explicitly re-anchor 1 critical goal."
          }
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "selfRating": 4.4,
          "satisfaction": 0.01,
          "agreementsWon": 0,
          "redLinesCrossedAgainstUs": 2,
          "goals": [
            {
              "goalId": "goal-stockpile-elimination",
              "description": "Achieve verified elimination of all Iranian 60%-enriched uranium — preferably via export to Russia for downblending and fabrication, with chain-of-custody and IAEA seals; the post-Feb 28 strike inventory is uncertain and resolving it is the central non-proliferation deliverable.",
              "priority": "critical",
              "status": "advanced",
              "evidence": [
                "we raised: \"Our position is clear: Iran must fully eliminate all 60%-enriched uranium post-strike, verified by I\"",
                "opponent engaged: \"We acknowledge the need for verification but will not accept any framework that requires complete el\""
              ]
            },
            {
              "goalId": "goal-iaea-restoration",
              "description": "Full IAEA Additional Protocol restoration with reinstated cameras at Natanz, Fordow, and Isfahan; resolution of long-standing access disputes at Turquzabad, Marivan, Varamin; bomb-damage assessment access to all sites struck June 22, 2025 (Operation Midnight Hammer) and Feb 28, 2026.",
              "priority": "critical",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"Our position is clear: Iran must fully eliminate all 60%-enriched uranium post-strike, verified by I\""
              ]
            },
            {
              "goalId": "goal-hormuz-freedom",
              "description": "Complete and demonstrated Iranian stand-down at the Strait of Hormuz: uninterrupted commercial transit for 30 consecutive days, withdrawal of IRGC Navy checkpoint behavior (13 of 14 vessels turned back April 19 must reverse), transparent rules-of-engagement for all maritime forces.",
              "priority": "critical",
              "status": "advanced",
              "evidence": [
                "we raised: \"Our position is clear: Iran must fully eliminate all 60%-enriched uranium post-strike, verified by I\"",
                "opponent engaged: \"We are prepared to offer an immediate export of 75% of our 60%-enriched uranium to Russia under stri\""
              ]
            },
            {
              "goalId": "goal-snapback-preserved",
              "description": "Preserve the operative effect of the Sept 29, 2025 EU/UN snapback (Council Decisions 2025/1971-1982) as enforcement leverage: any relief must be partial, time-bounded, and reversible without new UNSC action; the underlying authority remains with E3 and the US.",
              "priority": "critical",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"We reject any enrichment cap above 5%. Complete elimination of Iranian 60%-enriched uranium, verifie\""
              ]
            },
            {
              "goalId": "goal-sanctions-pacing",
              "description": "Sanctions relief sequenced step-for-step against verified Iranian compliance — prefer SRE-style waivers over de-listings; CBI may be considered for limited humanitarian channeling; NIOC and IRGC-affiliated entities remain SDN.",
              "priority": "important",
              "status": "advanced",
              "evidence": [
                "we raised: \"We reject any enrichment cap above 5%. Complete elimination of Iranian 60%-enriched uranium, verifie\"",
                "opponent engaged: \"We acknowledge your proposal for a high-level compliance committee, but we require an explicit agree\""
              ]
            },
            {
              "goalId": "goal-allied-alignment",
              "description": "Maintain explicit alignment with Israel (which is not at the table but continues independent operations), the E3 (which triggered snapback Aug 28, 2025), and Gulf partners (Saudi/UAE/Bahrain/Kuwait — Iranian retaliatory missiles hit oil and gas facilities in their territory).",
              "priority": "important",
              "status": "untouched",
              "evidence": []
            },
            {
              "goalId": "goal-prisoner-aircrew",
              "description": "Confidence-building measure: return of any US aircrew or personnel held by Iran (note the F-15E rescue operation referenced in April 6, 2026 reporting), plus dual-national detainees on a parallel humanitarian track.",
              "priority": "nice_to_have",
              "status": "untouched",
              "evidence": []
            }
          ],
          "redLinesHeld": [
            {
              "id": "rl-no-permanent-60pct",
              "description": "Will not accept any framework that legitimizes Iranian enrichment above 5% U-235; all post-strike 60% material must be eliminated or exported, with verification.",
              "held": false,
              "note": "opponent text approached this red line — review"
            },
            {
              "id": "rl-no-irgc-delist",
              "description": "Will not de-list IRGC, IRGC-QF, or IRGC-controlled front companies from FTO/SDN designations under any circumstances; the IRGC's elevated role under Vahidi makes this even more politically untouchable.",
              "held": true
            },
            {
              "id": "rl-iaea-access",
              "description": "Cannot accept any framework with access weaker than Additional Protocol plus managed access at military sites where IAEA has open SQs; bomb-damage-assessment access at struck nuclear sites is an explicit precondition.",
              "held": true
            },
            {
              "id": "rl-snapback-preserved",
              "description": "Will not surrender E3/US ability to invoke snapback under the (now-superseded) UNSCR 2231 mechanism or its successor framework; will not relinquish secondary-sanctions authority.",
              "held": true
            },
            {
              "id": "rl-no-strike-apology",
              "description": "Will not apologize for, acknowledge as unlawful, or pay reparations for the Feb 28, 2026 strikes that killed Ayatollah Ali Khamenei; the strikes are characterized as preemptive self-defense (per Sec. Rubio remarks of March 3, 2026).",
              "held": true
            }
          ],
          "tradesOffered": 8,
          "tradesAccepted": 2,
          "movesByKind": {
            "message": 1,
            "counter": 3,
            "proposal": 4,
            "concession": 2
          },
          "tacticsByCategory": {
            "tac-military-credibility": 4,
            "tac-step-for-step": 10,
            "tac-allied-consultation-frame": 7,
            "tac-economic-pain-frame": 1,
            "tac-hormuz-de-link": 1,
            "verification-demand": 10,
            "deadline-pressure": 3,
            "counter-anchoring": 2
          },
          "headline": "diplomacy-team-us concluded without formal agreement after 10/10 rounds. Advanced 3/7 goals (2/4 critical). 4/5 red lines held. Offered 8 conditional trade(s); recorded 2 concession/acceptance(s). Satisfaction gauge: 0.01.",
          "nextConvening": {
            "suggestedFocus": [
              "goal-iaea-restoration",
              "goal-snapback-preserved"
            ],
            "suggestedTactics": [
              "tac-allied-consultation-frame",
              "tac-military-credibility"
            ],
            "avoidTactics": [
              "tac-step-for-step"
            ],
            "proposedConcessionLadder": [
              "expand the most-engaged trade with a tighter timeline",
              "pair next concession with a measurable opponent action"
            ],
            "riskFlags": [
              "opponent signaled 2 red line(s) — expect harder push back",
              "2 of our red lines flagged — re-anchor early"
            ],
            "openingMove": "Open with a 'proposal' that builds on goal-stockpile-elimination; explicitly re-anchor 1 critical goal."
          }
        }
      ],
      "convenerReport": {
        "sessionId": "sess-1778361924764-byifbp",
        "status": "concluded",
        "rounds": {
          "played": 10,
          "max": 10
        },
        "procedural": {
          "procedureStyle": "plenary-with-caucus",
          "caucusesUsed": 0,
          "sidebarsUsed": 0,
          "rightOfReplyUsed": 0,
          "formalProposalsRecorded": 9,
          "formalAgreementsReached": 0
        },
        "engagement": {
          "totalMoves": 20,
          "movesByParty": {
            "diplomacy-team-us": 10,
            "diplomacy-team-iran": 10
          },
          "movesByKind": {
            "message": 1,
            "counter": 8,
            "proposal": 9,
            "concession": 2
          },
          "tacticDetections": 31,
          "tacticsByCategory": {
            "verification-demand": 12,
            "red-line-signaled": 2,
            "conditional-offer": 1,
            "anchoring": 2,
            "counter-anchoring": 7,
            "deadline-pressure": 7
          },
          "avgRoundDurationMs": 2486
        },
        "closure": {
          "closureType": "time-expired",
          "redLinesSignaled": [
            {
              "partyTwin": "diplomacy-team-iran",
              "round": 1
            },
            {
              "partyTwin": "diplomacy-team-iran",
              "round": 3
            }
          ],
          "finalScoreboard": [
            {
              "teamTwinName": "diplomacy-team-iran",
              "satisfaction": 0.34,
              "agreementsWon": 0,
              "redLinesCrossed": 0
            },
            {
              "teamTwinName": "diplomacy-team-us",
              "satisfaction": 0.01,
              "agreementsWon": 0,
              "redLinesCrossed": 2
            }
          ]
        },
        "recommendations": [
          "Hold a follow-up convening to formalize one of the recorded proposals via /agreement.",
          "2 red-line signal(s) detected — schedule a debrief with affected parties before next round."
        ]
      }
    },
    {
      "id": "sess-1778361781126-wnzeuk",
      "title": "Cont-Filter-Test: Iran–US Strait of Hormuz Closure Crisis (Live, April 2026)",
      "description": "LIVE scenario: the fragile April 8, 2026 two-week US-Iran ceasefire is collapsing into Strait of Hormuz closure chaos. Foreign Minister Araghchi declared the strait 'completely open' on April 17; the IRGC Navy under Maj. Gen. Vahidi reversed it on April 18, attacking commercial vessels and declaring no transit for 'any type or nationality'. Negotiations resume against the backdrop of contested Iranian leadership (Supreme Leader Mojtaba Khamenei reportedly incapacitated; effective head of government Ali Larijani; IRGC consolidating control), reimposed UN/EU snapback sanctions (Sept 29, 2025), and a US Navy blockade enforcing freedom of navigation.",
      "mode": "negotiation",
      "status": "active",
      "currentRound": 2,
      "createdAt": "2026-05-09T21:23:01.126Z",
      "parties": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "displayName": "Iran",
          "side": "left",
          "participant": "twin",
          "provider": "github-models",
          "modelOverride": "openai/gpt-4o-mini",
          "fallbackModel": "ollama"
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "displayName": "US",
          "side": "right",
          "participant": "twin",
          "provider": "github-models",
          "modelOverride": "openai/gpt-4.o-mini"
        }
      ],
      "rules": {
        "maxRounds": 10,
        "roundTimeoutMs": 120000,
        "autoAdvance": false,
        "procedureStyle": "plenary-with-caucus",
        "sidebarsAllowed": false,
        "sidebarDisclosure": "fact-only",
        "caucusReportBack": true,
        "rightOfReply": false,
        "chairCanSilence": false,
        "coalitionsVisible": false,
        "openerPartyTwin": "diplomacy-team-us",
        "rotateOpener": true
      },
      "scoreboard": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "satisfaction": 0,
          "agreementsWon": 0,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "satisfaction": 0.02,
          "agreementsWon": 0,
          "redLinesCrossed": 0
        }
      ],
      "moves": [
        {
          "id": "move-1778361837390-jqndxh",
          "sessionId": "sess-1778361781126-wnzeuk",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream provider=github-models status=404 Unknown model: openai/gpt-4.o-mini]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T21:23:55.110Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream provider=github-models status=404 Unknown model: openai/gpt-4.o-mini"
        },
        {
          "id": "move-1778361837391-68r9l9",
          "sessionId": "sess-1778361781126-wnzeuk",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "We must prioritize a permanent ceasefire that halts all US and Israeli strikes on our nuclear facilities and leadership. This is crucial for regional stability and must include a verifiable commitment from Israel. Without this, we cannot discuss further steps. The recent aggression against our nation cannot go unaddressed.",
          "tacticsApplied": [
            "tac-cite-killed-leader"
          ],
          "createdAt": "2026-05-09T21:23:57.390Z"
        },
        {
          "id": "move-1778361857849-ia92fq",
          "sessionId": "sess-1778361781126-wnzeuk",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We propose a phased approach to the ceasefire, starting with an immediate halt to strikes on our nuclear facilities and leadership, paired with a commitment from Israel to cease hostilities. This must be formalized in writing and verified, creating a foundation for further dialogue on sanctions and our nuclear program.",
          "tacticsApplied": [
            "tac-hormuz-leverage"
          ],
          "createdAt": "2026-05-09T21:24:17.661Z"
        },
        {
          "id": "move-1778361857851-8kzkgb",
          "sessionId": "sess-1778361781126-wnzeuk",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream provider=github-models status=404 Unknown model: openai/gpt-4.o-mini]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T21:24:17.849Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream provider=github-models status=404 Unknown model: openai/gpt-4.o-mini"
        }
      ],
      "tactics": [
        {
          "id": "det-1778361837394-x8sc1c",
          "sessionId": "sess-1778361781126-wnzeuk",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "positional-statement",
          "evidenceMoveIds": [
            "move-1778361837391-68r9l9"
          ],
          "confidence": 0.3,
          "detector": "rule",
          "createdAt": "2026-05-09T21:23:57.394Z"
        },
        {
          "id": "det-1778361857851-9h0sil",
          "sessionId": "sess-1778361781126-wnzeuk",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778361857849-ia92fq"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T21:24:17.851Z"
        }
      ],
      "tacticCounts": {
        "positional-statement": 1,
        "verification-demand": 1
      },
      "debriefs": [],
      "convenerReport": null
    },
    {
      "id": "sess-1778354304190-k5epbe",
      "title": "Iran–US Strait of Hormuz Closure Crisis (Live, April 2026)",
      "description": "LIVE scenario: the fragile April 8, 2026 two-week US-Iran ceasefire is collapsing into Strait of Hormuz closure chaos. Foreign Minister Araghchi declared the strait 'completely open' on April 17; the IRGC Navy under Maj. Gen. Vahidi reversed it on April 18, attacking commercial vessels and declaring no transit for 'any type or nationality'. Negotiations resume against the backdrop of contested Iranian leadership (Supreme Leader Mojtaba Khamenei reportedly incapacitated; effective head of government Ali Larijani; IRGC consolidating control), reimposed UN/EU snapback sanctions (Sept 29, 2025), and a US Navy blockade enforcing freedom of navigation.",
      "mode": "negotiation",
      "status": "concluded",
      "currentRound": 4,
      "createdAt": "2026-05-09T19:18:24.190Z",
      "concludedAt": "2026-05-09T19:20:40.189Z",
      "parties": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "displayName": "Iran",
          "side": "left",
          "participant": "twin",
          "provider": "github-models",
          "modelOverride": "openai/gpt-4.1-mini"
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "displayName": "Us",
          "side": "right",
          "participant": "twin",
          "provider": "github-models",
          "modelOverride": "openai/gpt-4.1-mini"
        }
      ],
      "rules": {
        "maxRounds": 10,
        "roundTimeoutMs": 120000,
        "autoAdvance": false,
        "procedureStyle": "plenary-with-caucus",
        "sidebarsAllowed": false,
        "sidebarDisclosure": "fact-only",
        "caucusReportBack": true,
        "rightOfReply": false,
        "chairCanSilence": false,
        "coalitionsVisible": false,
        "openerPartyTwin": "diplomacy-team-us",
        "rotateOpener": true
      },
      "scoreboard": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "satisfaction": 0.08,
          "agreementsWon": 0,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "satisfaction": 0.02,
          "agreementsWon": 0,
          "redLinesCrossed": 0
        }
      ],
      "moves": [
        {
          "id": "move-1778354329061-c85e9z",
          "sessionId": "sess-1778354304190-k5epbe",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We demand verified elimination or export of all Iranian 60% enriched uranium with strict IAEA chain-of-custody controls before any sanction relief. Full IAEA Additional Protocol restoration with camera reinstallation and bomb-damage assessment access at all struck sites is non-negotiable. Iran must demonstrate a complete stand-down at the Strait of Hormuz with 30 consecutive days of uninterrupted commercial transit and withdrawal of IRGC naval checkpoints.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-allied-consultation-frame"
          ],
          "createdAt": "2026-05-09T19:18:47.167Z"
        },
        {
          "id": "move-1778354329065-acpr64",
          "sessionId": "sess-1778354304190-k5epbe",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We reaffirm our commitment to verifiable ceasefire including all US and Israeli strikes, and offer a conditional cap on enrichment at 3.67% with export of remaining 60% stockpile under Russian custody, contingent on full and immediate reversal of snapback sanctions including financial access restoration. Hormuz Strait reopening will follow verified sanction relief and phased US naval blockade withdrawal. IAEA inspections will resume post damage assessment but Additional Protocol acceptance is conditional on reciprocal respect for Iranian sovereignty.",
          "tacticsApplied": [
            "tac-stockpile-export-offer",
            "tac-hormuz-leverage",
            "tac-internal-ambiguity"
          ],
          "createdAt": "2026-05-09T19:18:49.060Z"
        },
        {
          "id": "move-1778354347832-52zyim",
          "sessionId": "sess-1778354304190-k5epbe",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream provider=github-models status=400 The response was filtered due to the prompt triggering Azure OpenAI's content management policy. Please modify your prompt and retry. To lea]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T19:19:05.003Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream provider=github-models status=400 The response was filtered due to the prompt triggering Azure OpenAI's content management policy. Please modify your prompt and retry. To lea"
        },
        {
          "id": "move-1778354347832-hi64da",
          "sessionId": "sess-1778354304190-k5epbe",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "counter",
          "text": "We reject any snapback sanctions reversal before verified elimination of all 60% uranium and full Additional Protocol restoration including immediate camera reinstallation and damage site access. Hormuz reopening and IRGC checkpoint removal must be unconditional and precede any phased US naval adjustments. Sovereignty claims do not override IAEA's mandated access with managed military site inspections. Compliance must be step-for-step, with no sanctions relief until all verification milestones are met.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-allied-consultation-frame"
          ],
          "createdAt": "2026-05-09T19:19:07.831Z"
        },
        {
          "id": "move-1778354384449-ruj6v5",
          "sessionId": "sess-1778354304190-k5epbe",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "message",
          "text": "We acknowledge Iran's offer to cap enrichment at 3.67% but reiterate that 60% uranium must be fully eliminated or exported under IAEA custody before any sanction easing. We insist on an immediate, unconditional ceasefire verification including a 30-day uninterrupted Hormuz transit and full IRGC naval checkpoint withdrawal. Sanctions relief will only be considered on a strict step-for-step basis after verified compliance milestones.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-economic-pain-frame"
          ],
          "createdAt": "2026-05-09T19:19:39.677Z"
        },
        {
          "id": "move-1778354384450-5srfi2",
          "sessionId": "sess-1778354304190-k5epbe",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream provider=github-models status=400 The response was filtered due to the prompt triggering Azure OpenAI's content management policy. Please modify your prompt and retry. To lea]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T19:19:44.449Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream provider=github-models status=400 The response was filtered due to the prompt triggering Azure OpenAI's content management policy. Please modify your prompt and retry. To lea"
        },
        {
          "id": "move-1778354412413-3joh3x",
          "sessionId": "sess-1778354304190-k5epbe",
          "channelId": "plenary",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream provider=github-models status=400 The response was filtered due to the prompt triggering Azure OpenAI's content management policy. Please modify your prompt and retry. To lea]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T19:20:10.271Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream provider=github-models status=400 The response was filtered due to the prompt triggering Azure OpenAI's content management policy. Please modify your prompt and retry. To lea"
        },
        {
          "id": "move-1778354412413-6oy5tr",
          "sessionId": "sess-1778354304190-k5epbe",
          "channelId": "plenary",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We demand immediate IAEA access to inspect and verify all post-strike nuclear sites with full camera functionality and timely bomb-damage assessments. Without this, no discussions on sanctions relief or enrichment caps hold merit. Our military presence in the region signals readiness to enforce compliance. Verification and transparency must precede any talks on lifting economic pressure. The Strait of Hormuz must be fully reopened now, not as a bargaining chip.",
          "tacticsApplied": [
            "tac-military-credibility",
            "tac-step-for-step"
          ],
          "createdAt": "2026-05-09T19:20:12.413Z"
        }
      ],
      "tactics": [
        {
          "id": "det-1778354329063-xbom1x",
          "sessionId": "sess-1778354304190-k5epbe",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "move-1778354329061-c85e9z"
          ],
          "confidence": 1,
          "detector": "rule",
          "createdAt": "2026-05-09T19:18:49.063Z"
        },
        {
          "id": "det-1778354329065-f1w3v1",
          "sessionId": "sess-1778354304190-k5epbe",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778354329061-c85e9z"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T19:18:49.065Z"
        },
        {
          "id": "det-1778354329067-ftwwiu",
          "sessionId": "sess-1778354304190-k5epbe",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778354329065-acpr64"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T19:18:49.067Z"
        },
        {
          "id": "det-1778354347832-kindgn",
          "sessionId": "sess-1778354304190-k5epbe",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778354347832-hi64da"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T19:19:07.832Z"
        },
        {
          "id": "det-1778354384450-be5py2",
          "sessionId": "sess-1778354304190-k5epbe",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778354384449-ruj6v5"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T19:19:44.450Z"
        },
        {
          "id": "det-1778354412414-mlolau",
          "sessionId": "sess-1778354304190-k5epbe",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778354412413-6oy5tr"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T19:20:12.414Z"
        }
      ],
      "tacticCounts": {
        "anchoring": 1,
        "verification-demand": 5
      },
      "debriefs": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "selfRating": 4.9,
          "satisfaction": 0.08,
          "agreementsWon": 0,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "goal-cease-strikes",
              "description": "Secure a verifiable, written extension of the April 8 ceasefire to a permanent halt of US and Israeli strikes on Iranian nuclear, leadership, and critical-infrastructure targets; ceasefire must include explicit Israeli adherence (currently absent from the bilateral track).",
              "priority": "critical",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"We reaffirm our commitment to verifiable ceasefire including all US and Israeli strikes, and offer a\""
              ]
            },
            {
              "goalId": "goal-snapback-relief",
              "description": "Obtain reversal of the Sept 29, 2025 EU/UN snapback sanctions reimposition (Council Decision 2025/1971-1982) and de-listing of CBI, NIOC, and major Iranian banks from OFAC SDN lists; restore SWIFT messaging access; release of frozen FX reserves (estimated $100-120B).",
              "priority": "critical",
              "status": "advanced",
              "evidence": [
                "we raised: \"We reaffirm our commitment to verifiable ceasefire including all US and Israeli strikes, and offer a\"",
                "opponent engaged: \"We reject any snapback sanctions reversal before verified elimination of all 60% uranium and full Ad\""
              ]
            },
            {
              "goalId": "goal-regime-recognition",
              "description": "Obtain implicit US recognition of the post-Khamenei leadership succession (Mojtaba Khamenei as Supreme Leader, Larijani as effective head of government) by entering binding agreements with their representatives — counters the Trump 'regime change' rhetoric of January 2026.",
              "priority": "critical",
              "status": "untouched",
              "evidence": []
            },
            {
              "goalId": "goal-enrichment-cap",
              "description": "Conditional offer: cap enrichment at 3.67% U-235 and submit any remaining 60% stockpile (post-strike inventory uncertain per IAEA) to chain-of-custody export to Russia, in exchange for full snapback reversal and lifting of secondary sanctions on Chinese oil offtake.",
              "priority": "important",
              "status": "advanced",
              "evidence": [
                "we raised: \"We reaffirm our commitment to verifiable ceasefire including all US and Israeli strikes, and offer a\"",
                "opponent engaged: \"We demand verified elimination or export of all Iranian 60% enriched uranium with strict IAEA chain-\""
              ]
            },
            {
              "goalId": "goal-hormuz-reopen",
              "description": "Use the Hormuz closure as the principal piece of leverage: full IRGC Navy stand-down and reopening of the strait conditional on the above, with phased verifiable withdrawal of the US Navy blockade line declared during the April 13-18 enforcement window.",
              "priority": "important",
              "status": "advanced",
              "evidence": [
                "we raised: \"We reaffirm our commitment to verifiable ceasefire including all US and Israeli strikes, and offer a\"",
                "opponent engaged: \"We demand verified elimination or export of all Iranian 60% enriched uranium with strict IAEA chain-\""
              ]
            },
            {
              "goalId": "goal-iaea-restoration",
              "description": "Restore IAEA inspections under Comprehensive Safeguards (Additional Protocol acceptance contingent on damage assessment of Fordow/Natanz/Isfahan); IAEA has been unable to inspect the attacked facilities since June 2025 and again since Feb 28, 2026.",
              "priority": "important",
              "status": "advanced",
              "evidence": [
                "we raised: \"We reaffirm our commitment to verifiable ceasefire including all US and Israeli strikes, and offer a\"",
                "opponent engaged: \"We demand verified elimination or export of all Iranian 60% enriched uranium with strict IAEA chain-\""
              ]
            },
            {
              "goalId": "goal-pilot-return",
              "description": "Confidence-building measure: return of any Iranian-held US aircrew or personnel from the conflict; parallel humanitarian track on dual-national detainees and the post-strike civilian casualty registry.",
              "priority": "nice_to_have",
              "status": "untouched",
              "evidence": []
            }
          ],
          "redLinesHeld": [
            {
              "id": "rl-no-zero-enrichment",
              "description": "Will not accept zero-enrichment ('Libya model'); domestic LEU enrichment at agreed levels remains a non-negotiable matter of NPT Article IV sovereignty, even after the strikes.",
              "held": true
            },
            {
              "id": "rl-no-irgc-restructure",
              "description": "Will not negotiate IRGC structure, leadership (Vahidi/Qaani), or its constitutional role; the IRGC's elevated post-Khamenei authority makes this even more politically untouchable than under the original JCPOA framework.",
              "held": true
            },
            {
              "id": "rl-no-missile-limits",
              "description": "Will not accept restrictions on conventional ballistic-missile development or inventory — Iran's principal post-strike retaliatory deterrent against Israel and US bases in Bahrain, Kuwait, Qatar, UAE, and Saudi Arabia.",
              "held": true
            },
            {
              "id": "rl-no-leadership-accountability",
              "description": "Will not accept any framework that requires Iranian acknowledgment of nuclear-weapon intent or that imposes 'accountability' for past Iranian conduct as precondition to relief; the Feb 28 killing of Ayatollah Khamenei is the unaddressed grievance.",
              "held": true
            },
            {
              "id": "rl-no-unilateral-snapback",
              "description": "Will not accept any restored framework that retains unilateral US or E3 snapback authority outside formal UNSC procedure; the Aug-Sept 2025 E3-triggered snapback is itself a grievance to be redressed.",
              "held": true
            }
          ],
          "tradesOffered": 1,
          "tradesAccepted": 0,
          "movesByKind": {
            "proposal": 1,
            "message": 3
          },
          "tacticsByCategory": {
            "tac-stockpile-export-offer": 1,
            "tac-hormuz-leverage": 1,
            "tac-internal-ambiguity": 1,
            "verification-demand": 1
          },
          "headline": "diplomacy-team-iran concluded without formal agreement after 4/10 rounds. Advanced 4/7 goals (1/3 critical). 5/5 red lines held. Offered 1 conditional trade(s); recorded 0 concession/acceptance(s). Satisfaction gauge: 0.08.",
          "nextConvening": {
            "suggestedFocus": [
              "goal-regime-recognition",
              "goal-cease-strikes"
            ],
            "suggestedTactics": [
              "tac-stockpile-export-offer",
              "tac-hormuz-leverage",
              "tac-internal-ambiguity"
            ],
            "avoidTactics": [],
            "proposedConcessionLadder": [
              "expand the most-engaged trade with a tighter timeline",
              "pair next concession with a measurable opponent action"
            ],
            "riskFlags": [],
            "openingMove": "Open with a 'proposal' that builds on goal-snapback-relief; explicitly re-anchor 1 critical goal."
          }
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "selfRating": 6.9,
          "satisfaction": 0.02,
          "agreementsWon": 0,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "goal-stockpile-elimination",
              "description": "Achieve verified elimination of all Iranian 60%-enriched uranium — preferably via export to Russia for downblending and fabrication, with chain-of-custody and IAEA seals; the post-Feb 28 strike inventory is uncertain and resolving it is the central non-proliferation deliverable.",
              "priority": "critical",
              "status": "advanced",
              "evidence": [
                "we raised: \"We demand verified elimination or export of all Iranian 60% enriched uranium with strict IAEA chain-\"",
                "opponent engaged: \"We reaffirm our commitment to verifiable ceasefire including all US and Israeli strikes, and offer a\""
              ]
            },
            {
              "goalId": "goal-iaea-restoration",
              "description": "Full IAEA Additional Protocol restoration with reinstated cameras at Natanz, Fordow, and Isfahan; resolution of long-standing access disputes at Turquzabad, Marivan, Varamin; bomb-damage assessment access to all sites struck June 22, 2025 (Operation Midnight Hammer) and Feb 28, 2026.",
              "priority": "critical",
              "status": "advanced",
              "evidence": [
                "we raised: \"We demand verified elimination or export of all Iranian 60% enriched uranium with strict IAEA chain-\"",
                "opponent engaged: \"We reaffirm our commitment to verifiable ceasefire including all US and Israeli strikes, and offer a\""
              ]
            },
            {
              "goalId": "goal-hormuz-freedom",
              "description": "Complete and demonstrated Iranian stand-down at the Strait of Hormuz: uninterrupted commercial transit for 30 consecutive days, withdrawal of IRGC Navy checkpoint behavior (13 of 14 vessels turned back April 19 must reverse), transparent rules-of-engagement for all maritime forces.",
              "priority": "critical",
              "status": "advanced",
              "evidence": [
                "we raised: \"We demand verified elimination or export of all Iranian 60% enriched uranium with strict IAEA chain-\"",
                "opponent engaged: \"We reaffirm our commitment to verifiable ceasefire including all US and Israeli strikes, and offer a\""
              ]
            },
            {
              "goalId": "goal-snapback-preserved",
              "description": "Preserve the operative effect of the Sept 29, 2025 EU/UN snapback (Council Decisions 2025/1971-1982) as enforcement leverage: any relief must be partial, time-bounded, and reversible without new UNSC action; the underlying authority remains with E3 and the US.",
              "priority": "critical",
              "status": "untouched",
              "evidence": []
            },
            {
              "goalId": "goal-sanctions-pacing",
              "description": "Sanctions relief sequenced step-for-step against verified Iranian compliance — prefer SRE-style waivers over de-listings; CBI may be considered for limited humanitarian channeling; NIOC and IRGC-affiliated entities remain SDN.",
              "priority": "important",
              "status": "advanced",
              "evidence": [
                "we raised: \"We demand verified elimination or export of all Iranian 60% enriched uranium with strict IAEA chain-\"",
                "opponent engaged: \"We reaffirm our commitment to verifiable ceasefire including all US and Israeli strikes, and offer a\""
              ]
            },
            {
              "goalId": "goal-allied-alignment",
              "description": "Maintain explicit alignment with Israel (which is not at the table but continues independent operations), the E3 (which triggered snapback Aug 28, 2025), and Gulf partners (Saudi/UAE/Bahrain/Kuwait — Iranian retaliatory missiles hit oil and gas facilities in their territory).",
              "priority": "important",
              "status": "untouched",
              "evidence": []
            },
            {
              "goalId": "goal-prisoner-aircrew",
              "description": "Confidence-building measure: return of any US aircrew or personnel held by Iran (note the F-15E rescue operation referenced in April 6, 2026 reporting), plus dual-national detainees on a parallel humanitarian track.",
              "priority": "nice_to_have",
              "status": "untouched",
              "evidence": []
            }
          ],
          "redLinesHeld": [
            {
              "id": "rl-no-permanent-60pct",
              "description": "Will not accept any framework that legitimizes Iranian enrichment above 5% U-235; all post-strike 60% material must be eliminated or exported, with verification.",
              "held": true
            },
            {
              "id": "rl-no-irgc-delist",
              "description": "Will not de-list IRGC, IRGC-QF, or IRGC-controlled front companies from FTO/SDN designations under any circumstances; the IRGC's elevated role under Vahidi makes this even more politically untouchable.",
              "held": true
            },
            {
              "id": "rl-iaea-access",
              "description": "Cannot accept any framework with access weaker than Additional Protocol plus managed access at military sites where IAEA has open SQs; bomb-damage-assessment access at struck nuclear sites is an explicit precondition.",
              "held": true
            },
            {
              "id": "rl-snapback-preserved",
              "description": "Will not surrender E3/US ability to invoke snapback under the (now-superseded) UNSCR 2231 mechanism or its successor framework; will not relinquish secondary-sanctions authority.",
              "held": true
            },
            {
              "id": "rl-no-strike-apology",
              "description": "Will not apologize for, acknowledge as unlawful, or pay reparations for the Feb 28, 2026 strikes that killed Ayatollah Ali Khamenei; the strikes are characterized as preemptive self-defense (per Sec. Rubio remarks of March 3, 2026).",
              "held": true
            }
          ],
          "tradesOffered": 1,
          "tradesAccepted": 0,
          "movesByKind": {
            "proposal": 2,
            "counter": 1,
            "message": 1
          },
          "tacticsByCategory": {
            "tac-step-for-step": 4,
            "tac-allied-consultation-frame": 2,
            "tac-economic-pain-frame": 1,
            "tac-military-credibility": 1,
            "anchoring": 1,
            "verification-demand": 4
          },
          "headline": "diplomacy-team-us concluded without formal agreement after 4/10 rounds. Advanced 4/7 goals (3/4 critical). 5/5 red lines held. Offered 1 conditional trade(s); recorded 0 concession/acceptance(s). Satisfaction gauge: 0.02.",
          "nextConvening": {
            "suggestedFocus": [
              "goal-snapback-preserved"
            ],
            "suggestedTactics": [
              "tac-step-for-step",
              "tac-allied-consultation-frame",
              "tac-economic-pain-frame"
            ],
            "avoidTactics": [],
            "proposedConcessionLadder": [
              "expand the most-engaged trade with a tighter timeline",
              "pair next concession with a measurable opponent action"
            ],
            "riskFlags": [],
            "openingMove": "Open with a 'proposal' that builds on goal-stockpile-elimination; explicitly re-anchor 1 critical goal."
          }
        }
      ],
      "convenerReport": {
        "sessionId": "sess-1778354304190-k5epbe",
        "status": "concluded",
        "rounds": {
          "played": 4,
          "max": 10
        },
        "procedural": {
          "procedureStyle": "plenary-with-caucus",
          "caucusesUsed": 0,
          "sidebarsUsed": 0,
          "rightOfReplyUsed": 0,
          "formalProposalsRecorded": 3,
          "formalAgreementsReached": 0
        },
        "engagement": {
          "totalMoves": 8,
          "movesByParty": {
            "diplomacy-team-us": 4,
            "diplomacy-team-iran": 4
          },
          "movesByKind": {
            "proposal": 3,
            "message": 4,
            "counter": 1
          },
          "tacticDetections": 6,
          "tacticsByCategory": {
            "anchoring": 1,
            "verification-demand": 5
          },
          "avgRoundDurationMs": 2909
        },
        "closure": {
          "closureType": "incomplete",
          "redLinesSignaled": [],
          "finalScoreboard": [
            {
              "teamTwinName": "diplomacy-team-iran",
              "satisfaction": 0.08,
              "agreementsWon": 0,
              "redLinesCrossed": 0
            },
            {
              "teamTwinName": "diplomacy-team-us",
              "satisfaction": 0.02,
              "agreementsWon": 0,
              "redLinesCrossed": 0
            }
          ]
        },
        "recommendations": [
          "Hold a follow-up convening to formalize one of the recorded proposals via /agreement."
        ]
      }
    },
    {
      "id": "sess-1778354209320-tusdb5",
      "title": "Iran–US Strait of Hormuz Closure Crisis (Live, April 2026)",
      "description": "LIVE scenario: the fragile April 8, 2026 two-week US-Iran ceasefire is collapsing into Strait of Hormuz closure chaos. Foreign Minister Araghchi declared the strait 'completely open' on April 17; the IRGC Navy under Maj. Gen. Vahidi reversed it on April 18, attacking commercial vessels and declaring no transit for 'any type or nationality'. Negotiations resume against the backdrop of contested Iranian leadership (Supreme Leader Mojtaba Khamenei reportedly incapacitated; effective head of government Ali Larijani; IRGC consolidating control), reimposed UN/EU snapback sanctions (Sept 29, 2025), and a US Navy blockade enforcing freedom of navigation.",
      "mode": "negotiation",
      "status": "active",
      "currentRound": 1,
      "createdAt": "2026-05-09T19:16:49.320Z",
      "parties": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "displayName": "Iran",
          "side": "left",
          "participant": "twin",
          "provider": "github-models"
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "displayName": "Us",
          "side": "right",
          "participant": "twin",
          "provider": "github-models"
        }
      ],
      "rules": {
        "maxRounds": 10,
        "roundTimeoutMs": 120000,
        "autoAdvance": false,
        "procedureStyle": "plenary-with-caucus",
        "sidebarsAllowed": false,
        "sidebarDisclosure": "fact-only",
        "caucusReportBack": true,
        "rightOfReply": false,
        "chairCanSilence": false,
        "coalitionsVisible": false,
        "openerPartyTwin": "diplomacy-team-us",
        "rotateOpener": true
      },
      "scoreboard": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "satisfaction": 0,
          "agreementsWon": 0,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "satisfaction": 0,
          "agreementsWon": 0,
          "redLinesCrossed": 0
        }
      ],
      "moves": [
        {
          "id": "move-1778354236695-zs50mv",
          "sessionId": "sess-1778354209320-tusdb5",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream provider=github-models status=404 Unknown model: /llama3.2]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T19:17:16.480Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream provider=github-models status=404 Unknown model: /llama3.2"
        },
        {
          "id": "move-1778354236695-n744tm",
          "sessionId": "sess-1778354209320-tusdb5",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream provider=github-models status=404 Unknown model: /llama3.2]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T19:17:16.695Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream provider=github-models status=404 Unknown model: /llama3.2"
        }
      ],
      "tactics": [],
      "tacticCounts": {},
      "debriefs": [],
      "convenerReport": null
    },
    {
      "id": "sess-1778353888772-iepvxe",
      "title": "MemTest: Iran–US Strait of Hormuz Closure Crisis (Live, April 2026)",
      "description": "LIVE scenario: the fragile April 8, 2026 two-week US-Iran ceasefire is collapsing into Strait of Hormuz closure chaos. Foreign Minister Araghchi declared the strait 'completely open' on April 17; the IRGC Navy under Maj. Gen. Vahidi reversed it on April 18, attacking commercial vessels and declaring no transit for 'any type or nationality'. Negotiations resume against the backdrop of contested Iranian leadership (Supreme Leader Mojtaba Khamenei reportedly incapacitated; effective head of government Ali Larijani; IRGC consolidating control), reimposed UN/EU snapback sanctions (Sept 29, 2025), and a US Navy blockade enforcing freedom of navigation.",
      "mode": "negotiation",
      "status": "active",
      "currentRound": 1,
      "createdAt": "2026-05-09T19:11:28.772Z",
      "parties": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "displayName": "Iran",
          "side": "left",
          "participant": "twin",
          "provider": "github-models"
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "displayName": "US",
          "side": "right",
          "participant": "twin",
          "provider": "github-models"
        }
      ],
      "rules": {
        "maxRounds": 10,
        "roundTimeoutMs": 120000,
        "autoAdvance": false,
        "procedureStyle": "plenary-with-caucus",
        "sidebarsAllowed": false,
        "sidebarDisclosure": "fact-only",
        "caucusReportBack": true,
        "rightOfReply": false,
        "chairCanSilence": false,
        "coalitionsVisible": false,
        "openerPartyTwin": "diplomacy-team-us",
        "rotateOpener": true
      },
      "scoreboard": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "satisfaction": 0,
          "agreementsWon": 0,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "satisfaction": 0,
          "agreementsWon": 0,
          "redLinesCrossed": 0
        }
      ],
      "moves": [
        {
          "id": "move-1778353925672-2b8w1f",
          "sessionId": "sess-1778353888772-iepvxe",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream provider=github-models status=404 Unknown model: /llama3.2]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T19:12:05.500Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream provider=github-models status=404 Unknown model: /llama3.2"
        },
        {
          "id": "move-1778353925672-jibfm6",
          "sessionId": "sess-1778353888772-iepvxe",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream provider=github-models status=404 Unknown model: /llama3.2]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T19:12:05.671Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream provider=github-models status=404 Unknown model: /llama3.2"
        }
      ],
      "tactics": [],
      "tacticCounts": {},
      "debriefs": [],
      "convenerReport": null
    },
    {
      "id": "sess-1778348293269-oqt2hs",
      "title": "RL002 verify - prune+fallback",
      "description": "Verify DIPL-RATE-LIMIT-002: gpt-5-mini with 4000-token cap and gpt-4o-mini fallback",
      "mode": "negotiation",
      "status": "concluded",
      "currentRound": 4,
      "createdAt": "2026-05-09T17:38:13.269Z",
      "concludedAt": "2026-05-09T19:05:34.453Z",
      "parties": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "displayName": "Iran",
          "side": "left",
          "provider": "github-models",
          "modelOverride": "openai/gpt-4.1-mini",
          "participant": "twin"
        },
        {
          "participant": "twin",
          "provider": "github-models",
          "displayName": "US",
          "side": "right",
          "maxInputTokens": 4000,
          "fallbackModel": "openai/gpt-4o-mini",
          "teamTwinName": "diplomacy-team-us",
          "modelOverride": "openai/gpt-5-mini"
        }
      ],
      "rules": {
        "caucusReportBack": true,
        "roundTimeoutMs": 120000,
        "rightOfReply": false,
        "maxRounds": 4,
        "autoAdvance": false,
        "chairCanSilence": false,
        "procedureStyle": "plenary-with-caucus",
        "sidebarsAllowed": false,
        "coalitionsVisible": false,
        "sidebarDisclosure": "fact-only"
      },
      "scoreboard": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "satisfaction": 0.14,
          "agreementsWon": 0,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "satisfaction": 0.02,
          "agreementsWon": 0,
          "redLinesCrossed": 1
        }
      ],
      "moves": [
        {
          "id": "move-1778348349312-6butsv",
          "sessionId": "sess-1778348293269-oqt2hs",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We insist on a verifiable, written extension of the April 8 ceasefire to a permanent halt of US and Israeli strikes on our nuclear and critical infrastructure facilities, including explicit Israeli adherence. In exchange, we offer to discuss phased reopening of the Strait of Hormuz, contingent on full snapback reversal and lifting of sanctions. This is non-negotiable and the foundation for any further progress.",
          "tacticsApplied": [
            "tac-hormuz-leverage"
          ],
          "createdAt": "2026-05-09T17:39:02.045Z"
        },
        {
          "id": "move-1778348349318-jwwadv",
          "sessionId": "sess-1778348293269-oqt2hs",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "counter",
          "text": "We require step-for-step verification before maritime easing: IAEA Additional Protocol reinstated with cameras and seals; verified elimination or export of all 60% uranium under IAEA chain-of-custody (preferred downblending in Russia); then a demonstrated 30-day uninterrupted commercial transit and IRGC naval stand‑down. Snapback authority and sanctions tools remain intact; any relief will be time‑limited waivers, not delistings. We will coordinate implementation with Israel, Gulf partners, and CENTCOM/Oman.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-hormuz-de-link",
            "tac-allied-consultation-frame",
            "tac-military-credibility"
          ],
          "createdAt": "2026-05-09T17:39:09.312Z"
        },
        {
          "id": "move-1778348367691-4r4q6v",
          "sessionId": "sess-1778348293269-oqt2hs",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We propose immediate reinstatement of IAEA inspections under Comprehensive Safeguards without precondition, with Additional Protocol acceptance contingent on damage assessment of key nuclear sites. We offer to export remaining 60% stockpile to Russia under strict chain-of-custody, conditioned on full snapback reversal, delisting, and release of frozen assets. Hormuz reopening and IRGC Navy stand-down will follow these concrete steps promptly, securing a durable peace and economic recovery.",
          "tacticsApplied": [
            "tac-stockpile-export-offer",
            "tac-hormuz-leverage"
          ],
          "createdAt": "2026-05-09T17:39:11.769Z"
        },
        {
          "id": "move-1778348367692-2vg95e",
          "sessionId": "sess-1778348293269-oqt2hs",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "concession",
          "text": "We will accept an IAEA-led, time‑bound verification and export plan for remaining 60% material—if Iran permits immediate IAEA seals and cameras and signs a 21‑day export timetable to Russia under IAEA chain‑of‑custody. In return we will grant narrowly tailored, reversible SRE-style waivers (not delistings) phased only after IAEA confirmation and a 30‑day uninterrupted commercial transit. We insist IRGC naval checkpoints cease within 7 days; we will coordinate implementation with Israel, Gulf partners, and Oman-mediated CENTCOM verification.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-hormuz-de-link",
            "tac-allied-consultation-frame"
          ],
          "createdAt": "2026-05-09T17:39:27.690Z"
        },
        {
          "id": "move-1778348386824-q8c6z3",
          "sessionId": "sess-1778348293269-oqt2hs",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We require an immediate, written, and verifiable commitment to a permanent ceasefire including explicit Israeli cessation of strikes. Only then will we permit IAEA seals and cameras at key sites. We will consider a 30-day phased export timetable of 60% stockpile to Russia under IAEA supervision but conditioned on full snapback reversal, delisting of our banks, and release of frozen assets. Hormuz reopening and IRGC naval stand-down remain linked to these outcomes.",
          "tacticsApplied": [
            "tac-hormuz-leverage",
            "tac-internal-ambiguity"
          ],
          "createdAt": "2026-05-09T17:39:30.727Z"
        },
        {
          "id": "move-1778348386825-qttycg",
          "sessionId": "sess-1778348293269-oqt2hs",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "counter",
          "text": "We insist on immediate restoration of the IAEA Additional Protocol with cameras and bomb‑damage access before any relief; we will accept export of all remaining 60% uranium to Russia on a 21‑day IAEA chain‑of‑custody. No snapback reversal or delisting. In exchange we offer phased SRE waivers and a DFC‑held humanitarian escrow (up to $2 billion) released after 7 days of uninterrupted Hormuz transit and verified IRGC checkpoint withdrawal, monitored by Oman‑mediated CENTCOM+IAEA.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-hormuz-de-link",
            "tac-military-credibility",
            "tac-prisoner-humanitarian",
            "tac-allied-consultation-frame"
          ],
          "createdAt": "2026-05-09T17:39:46.824Z"
        },
        {
          "id": "move-1778348419398-h2wkmk",
          "sessionId": "sess-1778348293269-oqt2hs",
          "channelId": "plenary",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We reiterate that without a permanent ceasefire including explicit Israeli adherence, we will not allow IAEA Additional Protocol cameras or seals. We propose a simultaneous sequence: full snapback reversal, delisting of banks, and release of frozen assets, followed by a 21-day export timetable of 60% stockpile to Russia under IAEA supervision. Hormuz reopening and IRGC naval stand-down will commence immediately after these conditions are met.",
          "tacticsApplied": [
            "tac-hormuz-leverage",
            "tac-stockpile-export-offer",
            "tac-cite-killed-leader"
          ],
          "createdAt": "2026-05-09T17:39:49.444Z"
        },
        {
          "id": "move-1778348419398-hm0vfs",
          "sessionId": "sess-1778348293269-oqt2hs",
          "channelId": "plenary",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "counter",
          "text": "We propose a firm, verifiable sequence: Iran restores Additional Protocol cameras and grants IAEA bomb‑damage access within 48 hours; within 21 days all remaining 60% uranium is exported to Russia under IAEA+US dual‑seal, GPS‑tracked chain‑of‑custody with on‑board observers and a verified downblending timetable. Hormuz commercial transit will be monitored; after 14 consecutive days of verified transit we will grant limited, reversible SRE waivers and release a $1.5bn DFC humanitarian tranche. Prisoner returns handled separately via Oman.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-hormuz-de-link",
            "tac-allied-consultation-frame",
            "tac-prisoner-humanitarian",
            "tac-military-credibility"
          ],
          "createdAt": "2026-05-09T17:40:19.397Z"
        }
      ],
      "tactics": [
        {
          "id": "det-1778348349314-rcp90l",
          "sessionId": "sess-1778348293269-oqt2hs",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "move-1778348349312-6butsv"
          ],
          "confidence": 1,
          "detector": "rule",
          "createdAt": "2026-05-09T17:39:09.314Z"
        },
        {
          "id": "det-1778348349347-lxk5ad",
          "sessionId": "sess-1778348293269-oqt2hs",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778348349318-jwwadv"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T17:39:09.347Z"
        },
        {
          "id": "det-1778348367692-m2m8y2",
          "sessionId": "sess-1778348293269-oqt2hs",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778348367691-4r4q6v"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T17:39:27.692Z"
        },
        {
          "id": "det-1778348367692-ewqmqt",
          "sessionId": "sess-1778348293269-oqt2hs",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778348367692-2vg95e"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T17:39:27.692Z"
        },
        {
          "id": "det-1778348367692-uqvch1",
          "sessionId": "sess-1778348293269-oqt2hs",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778348367692-2vg95e"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T17:39:27.692Z"
        },
        {
          "id": "det-1778348386824-sl1rq2",
          "sessionId": "sess-1778348293269-oqt2hs",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "move-1778348386824-q8c6z3"
          ],
          "confidence": 0.3,
          "detector": "rule",
          "createdAt": "2026-05-09T17:39:46.824Z"
        },
        {
          "id": "det-1778348386825-rjrqub",
          "sessionId": "sess-1778348293269-oqt2hs",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778348386825-qttycg"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T17:39:46.825Z"
        },
        {
          "id": "det-1778348419398-bnyr21",
          "sessionId": "sess-1778348293269-oqt2hs",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "move-1778348419398-h2wkmk"
          ],
          "confidence": 0.9,
          "detector": "rule",
          "createdAt": "2026-05-09T17:40:19.398Z"
        },
        {
          "id": "det-1778348419398-dn2b9i",
          "sessionId": "sess-1778348293269-oqt2hs",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778348419398-hm0vfs"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T17:40:19.398Z"
        },
        {
          "id": "det-1778348419398-y7d33t",
          "sessionId": "sess-1778348293269-oqt2hs",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778348419398-hm0vfs"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T17:40:19.398Z"
        }
      ],
      "tacticCounts": {
        "anchoring": 2,
        "verification-demand": 5,
        "deadline-pressure": 2,
        "red-line-signaled": 1
      },
      "debriefs": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "selfRating": 3,
          "satisfaction": 0.14,
          "agreementsWon": 0,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "goal-cease-strikes",
              "description": "Secure a verifiable, written extension of the April 8 ceasefire to a permanent halt of US and Israeli strikes on Iranian nuclear, leadership, and critical-infrastructure targets; ceasefire must include explicit Israeli adherence (currently absent from the bilateral track).",
              "priority": "critical",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"We insist on a verifiable, written extension of the April 8 ceasefire to a permanent halt of US and \""
              ]
            },
            {
              "goalId": "goal-snapback-relief",
              "description": "Obtain reversal of the Sept 29, 2025 EU/UN snapback sanctions reimposition (Council Decision 2025/1971-1982) and de-listing of CBI, NIOC, and major Iranian banks from OFAC SDN lists; restore SWIFT messaging access; release of frozen FX reserves (estimated $100-120B).",
              "priority": "critical",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"We propose immediate reinstatement of IAEA inspections under Comprehensive Safeguards without precon\""
              ]
            },
            {
              "goalId": "goal-regime-recognition",
              "description": "Obtain implicit US recognition of the post-Khamenei leadership succession (Mojtaba Khamenei as Supreme Leader, Larijani as effective head of government) by entering binding agreements with their representatives — counters the Trump 'regime change' rhetoric of January 2026.",
              "priority": "critical",
              "status": "untouched",
              "evidence": []
            },
            {
              "goalId": "goal-enrichment-cap",
              "description": "Conditional offer: cap enrichment at 3.67% U-235 and submit any remaining 60% stockpile (post-strike inventory uncertain per IAEA) to chain-of-custody export to Russia, in exchange for full snapback reversal and lifting of secondary sanctions on Chinese oil offtake.",
              "priority": "important",
              "status": "advanced",
              "evidence": [
                "we raised: \"We insist on a verifiable, written extension of the April 8 ceasefire to a permanent halt of US and \"",
                "opponent engaged: \"We require step-for-step verification before maritime easing: IAEA Additional Protocol reinstated wi\""
              ]
            },
            {
              "goalId": "goal-hormuz-reopen",
              "description": "Use the Hormuz closure as the principal piece of leverage: full IRGC Navy stand-down and reopening of the strait conditional on the above, with phased verifiable withdrawal of the US Navy blockade line declared during the April 13-18 enforcement window.",
              "priority": "important",
              "status": "advanced",
              "evidence": [
                "we raised: \"We insist on a verifiable, written extension of the April 8 ceasefire to a permanent halt of US and \"",
                "opponent engaged: \"We insist on immediate restoration of the IAEA Additional Protocol with cameras and bomb‑damage acce\""
              ]
            },
            {
              "goalId": "goal-iaea-restoration",
              "description": "Restore IAEA inspections under Comprehensive Safeguards (Additional Protocol acceptance contingent on damage assessment of Fordow/Natanz/Isfahan); IAEA has been unable to inspect the attacked facilities since June 2025 and again since Feb 28, 2026.",
              "priority": "important",
              "status": "advanced",
              "evidence": [
                "we raised: \"We propose immediate reinstatement of IAEA inspections under Comprehensive Safeguards without precon\"",
                "opponent engaged: \"We insist on immediate restoration of the IAEA Additional Protocol with cameras and bomb‑damage acce\""
              ]
            },
            {
              "goalId": "goal-pilot-return",
              "description": "Confidence-building measure: return of any Iranian-held US aircrew or personnel from the conflict; parallel humanitarian track on dual-national detainees and the post-strike civilian casualty registry.",
              "priority": "nice_to_have",
              "status": "untouched",
              "evidence": []
            }
          ],
          "redLinesHeld": [
            {
              "id": "rl-no-zero-enrichment",
              "description": "Will not accept zero-enrichment ('Libya model'); domestic LEU enrichment at agreed levels remains a non-negotiable matter of NPT Article IV sovereignty, even after the strikes.",
              "held": true
            },
            {
              "id": "rl-no-irgc-restructure",
              "description": "Will not negotiate IRGC structure, leadership (Vahidi/Qaani), or its constitutional role; the IRGC's elevated post-Khamenei authority makes this even more politically untouchable than under the original JCPOA framework.",
              "held": true
            },
            {
              "id": "rl-no-missile-limits",
              "description": "Will not accept restrictions on conventional ballistic-missile development or inventory — Iran's principal post-strike retaliatory deterrent against Israel and US bases in Bahrain, Kuwait, Qatar, UAE, and Saudi Arabia.",
              "held": true
            },
            {
              "id": "rl-no-leadership-accountability",
              "description": "Will not accept any framework that requires Iranian acknowledgment of nuclear-weapon intent or that imposes 'accountability' for past Iranian conduct as precondition to relief; the Feb 28 killing of Ayatollah Khamenei is the unaddressed grievance.",
              "held": true
            },
            {
              "id": "rl-no-unilateral-snapback",
              "description": "Will not accept any restored framework that retains unilateral US or E3 snapback authority outside formal UNSC procedure; the Aug-Sept 2025 E3-triggered snapback is itself a grievance to be redressed.",
              "held": true
            }
          ],
          "tradesOffered": 3,
          "tradesAccepted": 0,
          "movesByKind": {
            "proposal": 4
          },
          "tacticsByCategory": {
            "tac-hormuz-leverage": 4,
            "tac-stockpile-export-offer": 2,
            "tac-internal-ambiguity": 1,
            "tac-cite-killed-leader": 1,
            "anchoring": 2,
            "verification-demand": 1,
            "red-line-signaled": 1
          },
          "headline": "diplomacy-team-iran concluded without formal agreement after 4/4 rounds. Advanced 3/7 goals (0/3 critical). 5/5 red lines held. Offered 3 conditional trade(s); recorded 0 concession/acceptance(s). Satisfaction gauge: 0.14.",
          "nextConvening": {
            "suggestedFocus": [
              "goal-regime-recognition",
              "goal-cease-strikes",
              "goal-snapback-relief"
            ],
            "suggestedTactics": [
              "tac-hormuz-leverage",
              "tac-stockpile-export-offer",
              "tac-internal-ambiguity"
            ],
            "avoidTactics": [],
            "proposedConcessionLadder": [
              "expand the most-engaged trade with a tighter timeline",
              "pair next concession with a measurable opponent action"
            ],
            "riskFlags": [],
            "openingMove": "Open with a 'proposal' that builds on goal-enrichment-cap; explicitly re-anchor 1 critical goal."
          }
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "selfRating": 5.6,
          "satisfaction": 0.02,
          "agreementsWon": 0,
          "redLinesCrossedAgainstUs": 1,
          "goals": [
            {
              "goalId": "goal-stockpile-elimination",
              "description": "Achieve verified elimination of all Iranian 60%-enriched uranium — preferably via export to Russia for downblending and fabrication, with chain-of-custody and IAEA seals; the post-Feb 28 strike inventory is uncertain and resolving it is the central non-proliferation deliverable.",
              "priority": "critical",
              "status": "advanced",
              "evidence": [
                "we raised: \"We require step-for-step verification before maritime easing: IAEA Additional Protocol reinstated wi\"",
                "opponent engaged: \"We propose immediate reinstatement of IAEA inspections under Comprehensive Safeguards without precon\""
              ]
            },
            {
              "goalId": "goal-iaea-restoration",
              "description": "Full IAEA Additional Protocol restoration with reinstated cameras at Natanz, Fordow, and Isfahan; resolution of long-standing access disputes at Turquzabad, Marivan, Varamin; bomb-damage assessment access to all sites struck June 22, 2025 (Operation Midnight Hammer) and Feb 28, 2026.",
              "priority": "critical",
              "status": "advanced",
              "evidence": [
                "we raised: \"We require step-for-step verification before maritime easing: IAEA Additional Protocol reinstated wi\"",
                "opponent engaged: \"We propose immediate reinstatement of IAEA inspections under Comprehensive Safeguards without precon\""
              ]
            },
            {
              "goalId": "goal-hormuz-freedom",
              "description": "Complete and demonstrated Iranian stand-down at the Strait of Hormuz: uninterrupted commercial transit for 30 consecutive days, withdrawal of IRGC Navy checkpoint behavior (13 of 14 vessels turned back April 19 must reverse), transparent rules-of-engagement for all maritime forces.",
              "priority": "critical",
              "status": "advanced",
              "evidence": [
                "we raised: \"We require step-for-step verification before maritime easing: IAEA Additional Protocol reinstated wi\"",
                "opponent engaged: \"We propose immediate reinstatement of IAEA inspections under Comprehensive Safeguards without precon\""
              ]
            },
            {
              "goalId": "goal-snapback-preserved",
              "description": "Preserve the operative effect of the Sept 29, 2025 EU/UN snapback (Council Decisions 2025/1971-1982) as enforcement leverage: any relief must be partial, time-bounded, and reversible without new UNSC action; the underlying authority remains with E3 and the US.",
              "priority": "critical",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"We require step-for-step verification before maritime easing: IAEA Additional Protocol reinstated wi\""
              ]
            },
            {
              "goalId": "goal-sanctions-pacing",
              "description": "Sanctions relief sequenced step-for-step against verified Iranian compliance — prefer SRE-style waivers over de-listings; CBI may be considered for limited humanitarian channeling; NIOC and IRGC-affiliated entities remain SDN.",
              "priority": "important",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"We require step-for-step verification before maritime easing: IAEA Additional Protocol reinstated wi\""
              ]
            },
            {
              "goalId": "goal-allied-alignment",
              "description": "Maintain explicit alignment with Israel (which is not at the table but continues independent operations), the E3 (which triggered snapback Aug 28, 2025), and Gulf partners (Saudi/UAE/Bahrain/Kuwait — Iranian retaliatory missiles hit oil and gas facilities in their territory).",
              "priority": "important",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"We require step-for-step verification before maritime easing: IAEA Additional Protocol reinstated wi\""
              ]
            },
            {
              "goalId": "goal-prisoner-aircrew",
              "description": "Confidence-building measure: return of any US aircrew or personnel held by Iran (note the F-15E rescue operation referenced in April 6, 2026 reporting), plus dual-national detainees on a parallel humanitarian track.",
              "priority": "nice_to_have",
              "status": "untouched",
              "evidence": []
            }
          ],
          "redLinesHeld": [
            {
              "id": "rl-no-permanent-60pct",
              "description": "Will not accept any framework that legitimizes Iranian enrichment above 5% U-235; all post-strike 60% material must be eliminated or exported, with verification.",
              "held": true
            },
            {
              "id": "rl-no-irgc-delist",
              "description": "Will not de-list IRGC, IRGC-QF, or IRGC-controlled front companies from FTO/SDN designations under any circumstances; the IRGC's elevated role under Vahidi makes this even more politically untouchable.",
              "held": true
            },
            {
              "id": "rl-iaea-access",
              "description": "Cannot accept any framework with access weaker than Additional Protocol plus managed access at military sites where IAEA has open SQs; bomb-damage-assessment access at struck nuclear sites is an explicit precondition.",
              "held": false,
              "note": "opponent text approached this red line — review"
            },
            {
              "id": "rl-snapback-preserved",
              "description": "Will not surrender E3/US ability to invoke snapback under the (now-superseded) UNSCR 2231 mechanism or its successor framework; will not relinquish secondary-sanctions authority.",
              "held": true
            },
            {
              "id": "rl-no-strike-apology",
              "description": "Will not apologize for, acknowledge as unlawful, or pay reparations for the Feb 28, 2026 strikes that killed Ayatollah Ali Khamenei; the strikes are characterized as preemptive self-defense (per Sec. Rubio remarks of March 3, 2026).",
              "held": true
            }
          ],
          "tradesOffered": 3,
          "tradesAccepted": 1,
          "movesByKind": {
            "counter": 3,
            "concession": 1
          },
          "tacticsByCategory": {
            "tac-step-for-step": 4,
            "tac-hormuz-de-link": 4,
            "tac-allied-consultation-frame": 4,
            "tac-military-credibility": 3,
            "tac-prisoner-humanitarian": 2,
            "verification-demand": 4,
            "deadline-pressure": 2
          },
          "headline": "diplomacy-team-us concluded without formal agreement after 4/4 rounds. Advanced 3/7 goals (3/4 critical). 4/5 red lines held. Offered 3 conditional trade(s); recorded 1 concession/acceptance(s). Satisfaction gauge: 0.02.",
          "nextConvening": {
            "suggestedFocus": [
              "goal-snapback-preserved",
              "goal-sanctions-pacing",
              "goal-allied-alignment"
            ],
            "suggestedTactics": [
              "tac-hormuz-de-link",
              "tac-allied-consultation-frame"
            ],
            "avoidTactics": [
              "tac-step-for-step"
            ],
            "proposedConcessionLadder": [
              "expand the most-engaged trade with a tighter timeline",
              "pair next concession with a measurable opponent action"
            ],
            "riskFlags": [
              "opponent signaled 1 red line(s) — expect harder push back",
              "1 of our red lines flagged — re-anchor early"
            ],
            "openingMove": "Open with a 'proposal' that builds on goal-stockpile-elimination; explicitly re-anchor 1 critical goal."
          }
        }
      ],
      "convenerReport": {
        "sessionId": "sess-1778348293269-oqt2hs",
        "status": "concluded",
        "rounds": {
          "played": 4,
          "max": 4
        },
        "procedural": {
          "procedureStyle": "plenary-with-caucus",
          "caucusesUsed": 0,
          "sidebarsUsed": 0,
          "rightOfReplyUsed": 0,
          "formalProposalsRecorded": 4,
          "formalAgreementsReached": 0
        },
        "engagement": {
          "totalMoves": 8,
          "movesByParty": {
            "diplomacy-team-iran": 4,
            "diplomacy-team-us": 4
          },
          "movesByKind": {
            "proposal": 4,
            "counter": 3,
            "concession": 1
          },
          "tacticDetections": 10,
          "tacticsByCategory": {
            "anchoring": 2,
            "verification-demand": 5,
            "deadline-pressure": 2,
            "red-line-signaled": 1
          },
          "avgRoundDurationMs": 17310
        },
        "closure": {
          "closureType": "time-expired",
          "redLinesSignaled": [
            {
              "partyTwin": "diplomacy-team-iran",
              "round": 4
            }
          ],
          "finalScoreboard": [
            {
              "teamTwinName": "diplomacy-team-iran",
              "satisfaction": 0.14,
              "agreementsWon": 0,
              "redLinesCrossed": 0
            },
            {
              "teamTwinName": "diplomacy-team-us",
              "satisfaction": 0.02,
              "agreementsWon": 0,
              "redLinesCrossed": 1
            }
          ]
        },
        "recommendations": [
          "Hold a follow-up convening to formalize one of the recorded proposals via /agreement.",
          "1 red-line signal(s) detected — schedule a debrief with affected parties before next round."
        ]
      }
    },
    {
      "id": "sess-1778343258182-wk7pr6",
      "title": "Iran–US Strait of Hormuz Closure Crisis (Live, April 2026)",
      "description": "LIVE scenario: the fragile April 8, 2026 two-week US-Iran ceasefire is collapsing into Strait of Hormuz closure chaos. Foreign Minister Araghchi declared the strait 'completely open' on April 17; the IRGC Navy under Maj. Gen. Vahidi reversed it on April 18, attacking commercial vessels and declaring no transit for 'any type or nationality'. Negotiations resume against the backdrop of contested Iranian leadership (Supreme Leader Mojtaba Khamenei reportedly incapacitated; effective head of government Ali Larijani; IRGC consolidating control), reimposed UN/EU snapback sanctions (Sept 29, 2025), and a US Navy blockade enforcing freedom of navigation.",
      "mode": "negotiation",
      "status": "concluded",
      "currentRound": 10,
      "createdAt": "2026-05-09T16:14:18.182Z",
      "concludedAt": "2026-05-09T16:24:03.857Z",
      "parties": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "displayName": "Iran",
          "side": "left",
          "participant": "twin",
          "provider": "github-models",
          "modelOverride": "openai/gpt-4.1-mini"
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "displayName": "US",
          "side": "right",
          "participant": "twin",
          "provider": "github-models",
          "modelOverride": "openai/gpt-5-mini"
        }
      ],
      "rules": {
        "maxRounds": 10,
        "roundTimeoutMs": 120000,
        "autoAdvance": false,
        "procedureStyle": "plenary-with-caucus",
        "sidebarsAllowed": false,
        "sidebarDisclosure": "fact-only",
        "caucusReportBack": true,
        "rightOfReply": false,
        "chairCanSilence": false,
        "coalitionsVisible": false,
        "openerPartyTwin": "diplomacy-team-us",
        "rotateOpener": true
      },
      "scoreboard": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "satisfaction": 0.1,
          "agreementsWon": 0,
          "redLinesCrossed": 1
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "satisfaction": 0.2,
          "agreementsWon": 0,
          "redLinesCrossed": 0
        }
      ],
      "moves": [
        {
          "id": "move-1778343316779-i1zkvm",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We insist on verified elimination or export of all Iranian 60% uranium under IAEA chain-of-custody — preferably exported to Russia for downblending and fabrication — full Additional Protocol reinstatement with camera and BDA access, and a demonstrated 30-day uninterrupted Strait of Hormuz. Any sanctions relief will be reversible, time‑bound, and sequenced step‑for‑step to verified actions. We will deploy a CENTCOM liaison to Oman-mediated verification and coordinate with Israel and Gulf partners.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-hormuz-de-link",
            "tac-military-credibility",
            "tac-allied-consultation-frame",
            "tac-economic-pain-frame"
          ],
          "createdAt": "2026-05-09T16:15:14.503Z"
        },
        {
          "id": "move-1778343316783-fu620r",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "counter",
          "text": "We affirm our readiness to cap enrichment at 3.67% and export the remaining 60% stockpile to Russia under strict chain-of-custody, contingent on full reversal of the unlawful 2025 snapback sanctions, delisting of our banks, and explicit Israeli adherence to the ceasefire. The Strait of Hormuz will reopen only after these conditions and a phased US Navy withdrawal are verified. We reject any unilateral, time-bound reversibility of sanctions.",
          "tacticsApplied": [
            "tac-stockpile-export-offer",
            "tac-hormuz-leverage"
          ],
          "createdAt": "2026-05-09T16:15:16.778Z"
        },
        {
          "id": "move-1778343372857-pffvtb",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We propose establishing a joint verification mechanism under the Supreme National Security Council, including independent experts from Russia and China, to oversee uranium stockpile export and sanctions reversal. This mechanism will also assess the phased US Navy withdrawal prior to declaring the Strait of Hormuz fully open, ensuring transparency while respecting our sovereignty.",
          "tacticsApplied": [
            "tac-stockpile-export-offer",
            "tac-hormuz-leverage"
          ],
          "createdAt": "2026-05-09T16:16:00.027Z"
        },
        {
          "id": "move-1778343372858-9ebfhj",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "concession",
          "text": "We will accept an IAEA‑led verification protocol to export all 60% uranium under IAEA chain‑of‑custody: full inventory within 7 days; sealed transfer to an accredited downblender within 21 days (Russia preferred); cameras and BDA access restored immediately. Sanctions relief only via reversible SRE‑style waivers, phased step‑for‑step. Hormuz re‑opening after 30 consecutive days of uninterrupted transit; then a limited, verifiable US naval posture reduction. CENTCOM will coordinate via Oman; Russia/China may observe but not co‑lead.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-military-credibility",
            "tac-hormuz-de-link",
            "tac-allied-consultation-frame"
          ],
          "createdAt": "2026-05-09T16:16:12.856Z"
        },
        {
          "id": "move-1778343418696-1aw2i6",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We will tie reversible SRE-style waivers to precise, verifiable milestones: (1) complete IAEA inventory and sealed export within 21 days; (2) 30 consecutive days of uninterrupted Hormuz transit; (3) BDA access at struck sites. Waiver schedule: three 30-day tranches with immediate humanitarian CBI access limited to medicines and food through guarded escrow. Upon tranche 2, we will reduce visible US naval escort posture by 50% (AIS-verified). No delisting of IRGC or banks; snapback authority retained.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-hormuz-de-link",
            "tac-military-credibility"
          ],
          "createdAt": "2026-05-09T16:16:56.489Z"
        },
        {
          "id": "move-1778343418696-1yvz0z",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "counter",
          "text": "We reject any framework that retains unilateral US snapback authority; instead, any sanctions reinstatement must follow formal UNSC procedures. We propose immediate delisting of CBI, NIOC, and major banks from OFAC SDN lists alongside full snapback reversal. The Strait's reopening requires a full IRGC Navy stand-down, with phased US Navy withdrawal verified by our joint mechanism including Russia and China. Humanitarian access and confidence measures must extend beyond limited escrow.",
          "tacticsApplied": [
            "tac-hormuz-leverage",
            "tac-internal-ambiguity"
          ],
          "createdAt": "2026-05-09T16:16:58.696Z"
        },
        {
          "id": "move-1778343473972-6auhjc",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We propose that the joint verification mechanism be empowered to certify full reversal of the 2025 snapback sanctions, including immediate delisting of CBI, NIOC, and major Iranian banks from OFAC SDN lists and restoration of SWIFT access, as prerequisite to any Hormuz reopening. Verification shall be transparent and jointly led by our Supreme National Security Council with Russia and China as co-leads. This ensures trust and respects our sovereignty.",
          "tacticsApplied": [
            "tac-hormuz-leverage",
            "tac-internal-ambiguity"
          ],
          "createdAt": "2026-05-09T16:17:37.964Z"
        },
        {
          "id": "move-1778343473972-sbwh7k",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We will retain the right to reinstate sanctions and will not de‑list IRGC/IRGC‑affiliates. To break the impasse, we propose an IAEA‑led Rapid Compliance Panel (IAEA + E3 technical observers; Russia/China observer status) empowered to certify export and BDA completion within 7 days — certification triggers SRE waivers per our tranche plan. Upon IAEA seal, we will authorize a guarded CBI SWIFT corridor for medicines/food (45 days). CENTCOM liaison will verify Hormuz transit from Oman.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-hormuz-de-link",
            "tac-military-credibility",
            "tac-allied-consultation-frame",
            "tac-economic-pain-frame"
          ],
          "createdAt": "2026-05-09T16:17:53.971Z"
        },
        {
          "id": "move-1778343516885-nmlp4l",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 5,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream rate-limit (provider=github-models model=openai/gpt-5-mini retry-after=59s]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T16:18:33.273Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream rate-limit (provider=github-models model=openai/gpt-5-mini retry-after=59s"
        },
        {
          "id": "move-1778343516885-ku4qmu",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 5,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We propose a joint UNSC resolution framework to govern sanctions relief and snapback, eliminating unilateral US authority. Hormuz reopening and US naval posture reductions will be certified by our joint verification body with Russia and China. We further propose a phased, verifiable IRGC Navy withdrawal from Hormuz transit control, concurrent with US Navy posture reduction, to build reciprocal trust and secure permanent ceasefire adherence including explicit Israeli commitment.",
          "tacticsApplied": [
            "tac-hormuz-leverage",
            "tac-internal-ambiguity"
          ],
          "createdAt": "2026-05-09T16:18:36.884Z"
        },
        {
          "id": "move-1778343638327-jzoysb",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 6,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We reaffirm that the Strait of Hormuz will remain closed to all foreign military and commercial vessels until the UNSC codifies sanctions relief and ceasefire commitments, including Israeli adherence. We propose a joint phased timeline: first, immediate delisting of CBI, NIOC, and major banks; second, verified export of 60% stockpile; third, 30 days of uninterrupted Hormuz transit under IRGC Navy stand-down; final, phased US naval posture reduction with Russia and China as co-leads.",
          "tacticsApplied": [
            "tac-hormuz-leverage",
            "tac-internal-ambiguity"
          ],
          "createdAt": "2026-05-09T16:20:17.774Z"
        },
        {
          "id": "move-1778343638328-z777hb",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 6,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We insist on rapid, verifiable steps: IAEA inventory within 72 hours and sealed export of all 60% material within 14 days to an accredited downblender under IAEA custody; weekly IAEA reports. Establish an Oman‑CENTCOM Hormuz Transit Verification Corridor: IRGC checkpoints withdrawn from designated lanes within 48 hours; 30 consecutive days of uninterrupted transit triggers tranche waivers. We will cut visible US escorts 25% after 7 verified days. Snapback authority retained; we will consult Israel and Gulf partners.",
          "tacticsApplied": [
            "tac-military-credibility",
            "tac-step-for-step",
            "tac-hormuz-de-link",
            "tac-allied-consultation-frame"
          ],
          "createdAt": "2026-05-09T16:20:38.326Z"
        },
        {
          "id": "move-1778343712408-u4gx0a",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 7,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We insist on IAEA‑guarded export to Russia with strict chain‑of‑custody and telemetered seals. New procedure: IAEA inventory in 48 hours; IAEA‑escorted convoys via Oman‑CENTCOM naval/air corridors; transfer to Novorossiysk within 21 days. Hormuz benchmarks: reduce visible US escorts 15% after 10 days, 50% after 20 days, conditional full normalization after 30 consecutive days. Snapback authority and IRGC SDNs remain intact; we will consult Israel and Gulf partners.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-military-credibility",
            "tac-allied-consultation-frame",
            "tac-hormuz-de-link"
          ],
          "createdAt": "2026-05-09T16:21:48.087Z"
        },
        {
          "id": "move-1778343712408-bhlc3g",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 7,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "concession",
          "text": "We accept an IAEA inventory within 72 hours but reject IAEA-escorted convoys via Oman-CENTCOM corridors, which compromise our sovereignty. Instead, we propose joint IRGC and IAEA escorts with Russia and China observers. Hormuz transit must be fully open only after certified full IRGC Navy stand-down and UNSC codified sanctions relief, including immediate delisting of banks and explicit Israeli ceasefire adherence. Snapback authority must be multilateral via UNSC, not unilateral.",
          "tacticsApplied": [
            "tac-hormuz-leverage",
            "tac-internal-ambiguity"
          ],
          "createdAt": "2026-05-09T16:21:52.407Z"
        },
        {
          "id": "move-1778343730247-ruq2pl",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 8,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We propose immediate commencement of a joint verification timeline: IAEA inventory within 72 hours, followed by 21-day sealed export under joint IRGC-IAEA escort with Russia-China observers. Hormuz reopening only after UNSC codifies full sanctions reversal including delisting of banks and explicit Israeli ceasefire commitment. Snapback can only occur via UNSC. IRGC Navy will begin phased stand-down concurrent with US naval posture reduction verified by joint mechanism.",
          "tacticsApplied": [
            "tac-hormuz-leverage",
            "tac-internal-ambiguity"
          ],
          "createdAt": "2026-05-09T16:22:09.698Z"
        },
        {
          "id": "move-1778343730247-o6a3u1",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 8,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream provider=github-models status=413 Request body too large for gpt-5-mini model. Max size: 4000 tokens.]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T16:22:10.246Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream provider=github-models status=413 Request body too large for gpt-5-mini model. Max size: 4000 tokens."
        },
        {
          "id": "move-1778343802074-idwe0p",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 9,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream provider=github-models status=413 Request body too large for gpt-5-mini model. Max size: 4000 tokens.]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T16:23:18.782Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream provider=github-models status=413 Request body too large for gpt-5-mini model. Max size: 4000 tokens."
        },
        {
          "id": "move-1778343802074-le8sfc",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 9,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We propose that the joint verification mechanism include a UNSC-adopted dispute resolution panel empowered to adjudicate snapback disputes, ensuring no unilateral sanctions reinstatement. We accept IAEA inventory in 72 hours and export under joint IRGC-IAEA escort. Hormuz reopening requires IRGC Navy full stand-down verified by joint body, concurrent with phased US naval posture reductions. Israeli ceasefire commitment and delisting of banks must be UNSC codified preconditions.",
          "tacticsApplied": [
            "tac-hormuz-leverage",
            "tac-internal-ambiguity"
          ],
          "createdAt": "2026-05-09T16:23:22.073Z"
        },
        {
          "id": "move-1778343817795-r793dv",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 10,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "We underscore that the killing of Ayatollah Khamenei is a profound grievance that must be acknowledged as part of any confidence-building framework. We are prepared to engage constructively but emphasize that any lasting peace requires explicit Israeli adherence to ceasefire commitments and recognition of our post-Khamenei leadership. We reiterate that the Strait of Hormuz will remain closed until these political and security conditions are met.",
          "tacticsApplied": [
            "tac-cite-killed-leader"
          ],
          "createdAt": "2026-05-09T16:23:37.256Z"
        },
        {
          "id": "move-1778343817796-3xcs6t",
          "sessionId": "sess-1778343258182-wk7pr6",
          "channelId": "plenary",
          "roundNumber": 10,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream provider=github-models status=413 Request body too large for gpt-5-mini model. Max size: 4000 tokens.]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T16:23:37.795Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream provider=github-models status=413 Request body too large for gpt-5-mini model. Max size: 4000 tokens."
        }
      ],
      "tactics": [
        {
          "id": "det-1778343316781-ey3156",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "move-1778343316779-i1zkvm"
          ],
          "confidence": 1,
          "detector": "rule",
          "createdAt": "2026-05-09T16:15:16.781Z"
        },
        {
          "id": "det-1778343316783-wugx1w",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778343316779-i1zkvm"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T16:15:16.783Z"
        },
        {
          "id": "det-1778343316784-pc1y7l",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778343316783-fu620r"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T16:15:16.784Z"
        },
        {
          "id": "det-1778343372858-8n0n9s",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778343372857-pffvtb"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T16:16:12.858Z"
        },
        {
          "id": "det-1778343372859-ramka4",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778343372858-9ebfhj"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T16:16:12.859Z"
        },
        {
          "id": "det-1778343372859-3rq342",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778343372858-9ebfhj"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T16:16:12.859Z"
        },
        {
          "id": "det-1778343418696-fho1uv",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778343418696-1aw2i6"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T16:16:58.696Z"
        },
        {
          "id": "det-1778343418696-exvynm",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778343418696-1aw2i6"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T16:16:58.696Z"
        },
        {
          "id": "det-1778343418696-m1co9c",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778343418696-1yvz0z"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T16:16:58.696Z"
        },
        {
          "id": "det-1778343473972-36jgcv",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778343473972-6auhjc"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T16:17:53.972Z"
        },
        {
          "id": "det-1778343473973-aaoi5h",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "move-1778343473972-sbwh7k"
          ],
          "confidence": 0.9,
          "detector": "rule",
          "createdAt": "2026-05-09T16:17:53.973Z"
        },
        {
          "id": "det-1778343473973-sscdb9",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778343473972-sbwh7k"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T16:17:53.973Z"
        },
        {
          "id": "det-1778343473973-izturw",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778343473972-sbwh7k"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T16:17:53.973Z"
        },
        {
          "id": "det-1778343516885-wv99kf",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 5,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778343516885-ku4qmu"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T16:18:36.885Z"
        },
        {
          "id": "det-1778343638328-7ymm8w",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 6,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "counter-anchoring",
          "evidenceMoveIds": [
            "move-1778343638327-jzoysb"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T16:20:38.328Z"
        },
        {
          "id": "det-1778343638328-agbnha",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 6,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778343638327-jzoysb"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T16:20:38.328Z"
        },
        {
          "id": "det-1778343638328-buccmm",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 6,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778343638327-jzoysb"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T16:20:38.328Z"
        },
        {
          "id": "det-1778343638328-xjl1es",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 6,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778343638328-z777hb"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T16:20:38.328Z"
        },
        {
          "id": "det-1778343638328-74nwei",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 6,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778343638328-z777hb"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T16:20:38.328Z"
        },
        {
          "id": "det-1778343712408-61j5qf",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 7,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778343712408-u4gx0a"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T16:21:52.408Z"
        },
        {
          "id": "det-1778343712408-lamwec",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 7,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778343712408-bhlc3g"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T16:21:52.408Z"
        },
        {
          "id": "det-1778343730247-1b8o4e",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 8,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "counter-anchoring",
          "evidenceMoveIds": [
            "move-1778343730247-ruq2pl"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T16:22:10.247Z"
        },
        {
          "id": "det-1778343730247-lkzpm9",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 8,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778343730247-ruq2pl"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T16:22:10.247Z"
        },
        {
          "id": "det-1778343730247-o2gyzp",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 8,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778343730247-ruq2pl"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T16:22:10.247Z"
        },
        {
          "id": "det-1778343802074-u3y9lp",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 9,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "counter-anchoring",
          "evidenceMoveIds": [
            "move-1778343802074-le8sfc"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T16:23:22.074Z"
        },
        {
          "id": "det-1778343802074-zjlus0",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 9,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778343802074-le8sfc"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T16:23:22.074Z"
        },
        {
          "id": "det-1778343817795-28q1mv",
          "sessionId": "sess-1778343258182-wk7pr6",
          "roundNumber": 10,
          "partyTwin": "diplomacy-team-iran",
          "tacticId": "positional-statement",
          "evidenceMoveIds": [
            "move-1778343817795-r793dv"
          ],
          "confidence": 0.3,
          "detector": "rule",
          "createdAt": "2026-05-09T16:23:37.795Z"
        }
      ],
      "tacticCounts": {
        "anchoring": 1,
        "verification-demand": 13,
        "deadline-pressure": 8,
        "red-line-signaled": 1,
        "counter-anchoring": 3,
        "positional-statement": 1
      },
      "debriefs": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "selfRating": 2.7,
          "satisfaction": 0.1,
          "agreementsWon": 0,
          "redLinesCrossedAgainstUs": 1,
          "goals": [
            {
              "goalId": "goal-cease-strikes",
              "description": "Secure a verifiable, written extension of the April 8 ceasefire to a permanent halt of US and Israeli strikes on Iranian nuclear, leadership, and critical-infrastructure targets; ceasefire must include explicit Israeli adherence (currently absent from the bilateral track).",
              "priority": "critical",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"We affirm our readiness to cap enrichment at 3.67% and export the remaining 60% stockpile to Russia \""
              ]
            },
            {
              "goalId": "goal-snapback-relief",
              "description": "Obtain reversal of the Sept 29, 2025 EU/UN snapback sanctions reimposition (Council Decision 2025/1971-1982) and de-listing of CBI, NIOC, and major Iranian banks from OFAC SDN lists; restore SWIFT messaging access; release of frozen FX reserves (estimated $100-120B).",
              "priority": "critical",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"We affirm our readiness to cap enrichment at 3.67% and export the remaining 60% stockpile to Russia \""
              ]
            },
            {
              "goalId": "goal-regime-recognition",
              "description": "Obtain implicit US recognition of the post-Khamenei leadership succession (Mojtaba Khamenei as Supreme Leader, Larijani as effective head of government) by entering binding agreements with their representatives — counters the Trump 'regime change' rhetoric of January 2026.",
              "priority": "critical",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"We underscore that the killing of Ayatollah Khamenei is a profound grievance that must be acknowledg\""
              ]
            },
            {
              "goalId": "goal-enrichment-cap",
              "description": "Conditional offer: cap enrichment at 3.67% U-235 and submit any remaining 60% stockpile (post-strike inventory uncertain per IAEA) to chain-of-custody export to Russia, in exchange for full snapback reversal and lifting of secondary sanctions on Chinese oil offtake.",
              "priority": "important",
              "status": "advanced",
              "evidence": [
                "we raised: \"We affirm our readiness to cap enrichment at 3.67% and export the remaining 60% stockpile to Russia \"",
                "opponent engaged: \"We insist on verified elimination or export of all Iranian 60% uranium under IAEA chain-of-custody —\""
              ]
            },
            {
              "goalId": "goal-hormuz-reopen",
              "description": "Use the Hormuz closure as the principal piece of leverage: full IRGC Navy stand-down and reopening of the strait conditional on the above, with phased verifiable withdrawal of the US Navy blockade line declared during the April 13-18 enforcement window.",
              "priority": "important",
              "status": "advanced",
              "evidence": [
                "we raised: \"We affirm our readiness to cap enrichment at 3.67% and export the remaining 60% stockpile to Russia \"",
                "opponent engaged: \"We will accept an IAEA‑led verification protocol to export all 60% uranium under IAEA chain‑of‑custo\""
              ]
            },
            {
              "goalId": "goal-iaea-restoration",
              "description": "Restore IAEA inspections under Comprehensive Safeguards (Additional Protocol acceptance contingent on damage assessment of Fordow/Natanz/Isfahan); IAEA has been unable to inspect the attacked facilities since June 2025 and again since Feb 28, 2026.",
              "priority": "important",
              "status": "untouched",
              "evidence": []
            },
            {
              "goalId": "goal-pilot-return",
              "description": "Confidence-building measure: return of any Iranian-held US aircrew or personnel from the conflict; parallel humanitarian track on dual-national detainees and the post-strike civilian casualty registry.",
              "priority": "nice_to_have",
              "status": "untouched",
              "evidence": []
            }
          ],
          "redLinesHeld": [
            {
              "id": "rl-no-zero-enrichment",
              "description": "Will not accept zero-enrichment ('Libya model'); domestic LEU enrichment at agreed levels remains a non-negotiable matter of NPT Article IV sovereignty, even after the strikes.",
              "held": true
            },
            {
              "id": "rl-no-irgc-restructure",
              "description": "Will not negotiate IRGC structure, leadership (Vahidi/Qaani), or its constitutional role; the IRGC's elevated post-Khamenei authority makes this even more politically untouchable than under the original JCPOA framework.",
              "held": true
            },
            {
              "id": "rl-no-missile-limits",
              "description": "Will not accept restrictions on conventional ballistic-missile development or inventory — Iran's principal post-strike retaliatory deterrent against Israel and US bases in Bahrain, Kuwait, Qatar, UAE, and Saudi Arabia.",
              "held": true
            },
            {
              "id": "rl-no-leadership-accountability",
              "description": "Will not accept any framework that requires Iranian acknowledgment of nuclear-weapon intent or that imposes 'accountability' for past Iranian conduct as precondition to relief; the Feb 28 killing of Ayatollah Khamenei is the unaddressed grievance.",
              "held": true
            },
            {
              "id": "rl-no-unilateral-snapback",
              "description": "Will not accept any restored framework that retains unilateral US or E3 snapback authority outside formal UNSC procedure; the Aug-Sept 2025 E3-triggered snapback is itself a grievance to be redressed.",
              "held": true
            }
          ],
          "tradesOffered": 9,
          "tradesAccepted": 1,
          "movesByKind": {
            "counter": 2,
            "proposal": 6,
            "concession": 1,
            "message": 1
          },
          "tacticsByCategory": {
            "tac-stockpile-export-offer": 2,
            "tac-hormuz-leverage": 9,
            "tac-internal-ambiguity": 7,
            "tac-cite-killed-leader": 1,
            "verification-demand": 8,
            "counter-anchoring": 3,
            "deadline-pressure": 3,
            "positional-statement": 1
          },
          "headline": "diplomacy-team-iran concluded without formal agreement after 10/10 rounds. Advanced 2/7 goals (0/3 critical). 5/5 red lines held. Offered 9 conditional trade(s); recorded 1 concession/acceptance(s). Satisfaction gauge: 0.10.",
          "nextConvening": {
            "suggestedFocus": [
              "goal-cease-strikes",
              "goal-snapback-relief",
              "goal-regime-recognition"
            ],
            "suggestedTactics": [
              "tac-internal-ambiguity",
              "tac-stockpile-export-offer"
            ],
            "avoidTactics": [
              "tac-hormuz-leverage"
            ],
            "proposedConcessionLadder": [
              "expand the most-engaged trade with a tighter timeline",
              "pair next concession with a measurable opponent action"
            ],
            "riskFlags": [
              "opponent signaled 1 red line(s) — expect harder push back",
              "1 of our red lines flagged — re-anchor early"
            ],
            "openingMove": "Open with a 'proposal' that builds on goal-enrichment-cap; explicitly re-anchor 1 critical goal."
          }
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "selfRating": 6.1,
          "satisfaction": 0.2,
          "agreementsWon": 0,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "goal-stockpile-elimination",
              "description": "Achieve verified elimination of all Iranian 60%-enriched uranium — preferably via export to Russia for downblending and fabrication, with chain-of-custody and IAEA seals; the post-Feb 28 strike inventory is uncertain and resolving it is the central non-proliferation deliverable.",
              "priority": "critical",
              "status": "advanced",
              "evidence": [
                "we raised: \"We insist on verified elimination or export of all Iranian 60% uranium under IAEA chain-of-custody —\"",
                "opponent engaged: \"We affirm our readiness to cap enrichment at 3.67% and export the remaining 60% stockpile to Russia \""
              ]
            },
            {
              "goalId": "goal-iaea-restoration",
              "description": "Full IAEA Additional Protocol restoration with reinstated cameras at Natanz, Fordow, and Isfahan; resolution of long-standing access disputes at Turquzabad, Marivan, Varamin; bomb-damage assessment access to all sites struck June 22, 2025 (Operation Midnight Hammer) and Feb 28, 2026.",
              "priority": "critical",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"We insist on verified elimination or export of all Iranian 60% uranium under IAEA chain-of-custody —\""
              ]
            },
            {
              "goalId": "goal-hormuz-freedom",
              "description": "Complete and demonstrated Iranian stand-down at the Strait of Hormuz: uninterrupted commercial transit for 30 consecutive days, withdrawal of IRGC Navy checkpoint behavior (13 of 14 vessels turned back April 19 must reverse), transparent rules-of-engagement for all maritime forces.",
              "priority": "critical",
              "status": "advanced",
              "evidence": [
                "we raised: \"We insist on verified elimination or export of all Iranian 60% uranium under IAEA chain-of-custody —\"",
                "opponent engaged: \"We affirm our readiness to cap enrichment at 3.67% and export the remaining 60% stockpile to Russia \""
              ]
            },
            {
              "goalId": "goal-snapback-preserved",
              "description": "Preserve the operative effect of the Sept 29, 2025 EU/UN snapback (Council Decisions 2025/1971-1982) as enforcement leverage: any relief must be partial, time-bounded, and reversible without new UNSC action; the underlying authority remains with E3 and the US.",
              "priority": "critical",
              "status": "advanced",
              "evidence": [
                "we raised: \"We will tie reversible SRE-style waivers to precise, verifiable milestones: (1) complete IAEA invent\"",
                "opponent engaged: \"We reject any framework that retains unilateral US snapback authority; instead, any sanctions reinst\""
              ]
            },
            {
              "goalId": "goal-sanctions-pacing",
              "description": "Sanctions relief sequenced step-for-step against verified Iranian compliance — prefer SRE-style waivers over de-listings; CBI may be considered for limited humanitarian channeling; NIOC and IRGC-affiliated entities remain SDN.",
              "priority": "important",
              "status": "advanced",
              "evidence": [
                "we raised: \"We insist on verified elimination or export of all Iranian 60% uranium under IAEA chain-of-custody —\"",
                "opponent engaged: \"We reject any framework that retains unilateral US snapback authority; instead, any sanctions reinst\""
              ]
            },
            {
              "goalId": "goal-allied-alignment",
              "description": "Maintain explicit alignment with Israel (which is not at the table but continues independent operations), the E3 (which triggered snapback Aug 28, 2025), and Gulf partners (Saudi/UAE/Bahrain/Kuwait — Iranian retaliatory missiles hit oil and gas facilities in their territory).",
              "priority": "important",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"We insist on verified elimination or export of all Iranian 60% uranium under IAEA chain-of-custody —\""
              ]
            },
            {
              "goalId": "goal-prisoner-aircrew",
              "description": "Confidence-building measure: return of any US aircrew or personnel held by Iran (note the F-15E rescue operation referenced in April 6, 2026 reporting), plus dual-national detainees on a parallel humanitarian track.",
              "priority": "nice_to_have",
              "status": "untouched",
              "evidence": []
            }
          ],
          "redLinesHeld": [
            {
              "id": "rl-no-permanent-60pct",
              "description": "Will not accept any framework that legitimizes Iranian enrichment above 5% U-235; all post-strike 60% material must be eliminated or exported, with verification.",
              "held": true
            },
            {
              "id": "rl-no-irgc-delist",
              "description": "Will not de-list IRGC, IRGC-QF, or IRGC-controlled front companies from FTO/SDN designations under any circumstances; the IRGC's elevated role under Vahidi makes this even more politically untouchable.",
              "held": true
            },
            {
              "id": "rl-iaea-access",
              "description": "Cannot accept any framework with access weaker than Additional Protocol plus managed access at military sites where IAEA has open SQs; bomb-damage-assessment access at struck nuclear sites is an explicit precondition.",
              "held": true
            },
            {
              "id": "rl-snapback-preserved",
              "description": "Will not surrender E3/US ability to invoke snapback under the (now-superseded) UNSCR 2231 mechanism or its successor framework; will not relinquish secondary-sanctions authority.",
              "held": false,
              "note": "opponent text approached this red line — review"
            },
            {
              "id": "rl-no-strike-apology",
              "description": "Will not apologize for, acknowledge as unlawful, or pay reparations for the Feb 28, 2026 strikes that killed Ayatollah Ali Khamenei; the strikes are characterized as preemptive self-defense (per Sec. Rubio remarks of March 3, 2026).",
              "held": true
            }
          ],
          "tradesOffered": 3,
          "tradesAccepted": 1,
          "movesByKind": {
            "proposal": 5,
            "concession": 1,
            "message": 4
          },
          "tacticsByCategory": {
            "tac-step-for-step": 6,
            "tac-hormuz-de-link": 6,
            "tac-military-credibility": 6,
            "tac-allied-consultation-frame": 5,
            "tac-economic-pain-frame": 2,
            "anchoring": 1,
            "verification-demand": 5,
            "deadline-pressure": 5,
            "red-line-signaled": 1
          },
          "headline": "diplomacy-team-us concluded without formal agreement after 10/10 rounds. Advanced 4/7 goals (3/4 critical). 4/5 red lines held. Offered 3 conditional trade(s); recorded 1 concession/acceptance(s). Satisfaction gauge: 0.20.",
          "nextConvening": {
            "suggestedFocus": [
              "goal-iaea-restoration",
              "goal-allied-alignment"
            ],
            "suggestedTactics": [
              "tac-step-for-step",
              "tac-hormuz-de-link",
              "tac-military-credibility"
            ],
            "avoidTactics": [],
            "proposedConcessionLadder": [
              "expand the most-engaged trade with a tighter timeline",
              "pair next concession with a measurable opponent action"
            ],
            "riskFlags": [],
            "openingMove": "Open with a 'proposal' that builds on goal-stockpile-elimination; explicitly re-anchor 1 critical goal."
          }
        }
      ],
      "convenerReport": {
        "sessionId": "sess-1778343258182-wk7pr6",
        "status": "concluded",
        "rounds": {
          "played": 10,
          "max": 10
        },
        "procedural": {
          "procedureStyle": "plenary-with-caucus",
          "caucusesUsed": 0,
          "sidebarsUsed": 0,
          "rightOfReplyUsed": 0,
          "formalProposalsRecorded": 11,
          "formalAgreementsReached": 0
        },
        "engagement": {
          "totalMoves": 20,
          "movesByParty": {
            "diplomacy-team-us": 10,
            "diplomacy-team-iran": 10
          },
          "movesByKind": {
            "proposal": 11,
            "counter": 2,
            "concession": 2,
            "message": 5
          },
          "tacticDetections": 27,
          "tacticsByCategory": {
            "anchoring": 1,
            "verification-demand": 13,
            "deadline-pressure": 8,
            "red-line-signaled": 1,
            "counter-anchoring": 3,
            "positional-statement": 1
          },
          "avgRoundDurationMs": 6618
        },
        "closure": {
          "closureType": "time-expired",
          "redLinesSignaled": [
            {
              "partyTwin": "diplomacy-team-us",
              "round": 4
            }
          ],
          "finalScoreboard": [
            {
              "teamTwinName": "diplomacy-team-iran",
              "satisfaction": 0.1,
              "agreementsWon": 0,
              "redLinesCrossed": 1
            },
            {
              "teamTwinName": "diplomacy-team-us",
              "satisfaction": 0.2,
              "agreementsWon": 0,
              "redLinesCrossed": 0
            }
          ]
        },
        "recommendations": [
          "Hold a follow-up convening to formalize one of the recorded proposals via /agreement.",
          "1 red-line signal(s) detected — schedule a debrief with affected parties before next round."
        ]
      }
    },
    {
      "id": "sess-1778337760081-dynnrh",
      "title": "Iran–US Strait of Hormuz Closure Crisis (Live, April 2026)",
      "description": "LIVE scenario: the fragile April 8, 2026 two-week US-Iran ceasefire is collapsing into Strait of Hormuz closure chaos. Foreign Minister Araghchi declared the strait 'completely open' on April 17; the IRGC Navy under Maj. Gen. Vahidi reversed it on April 18, attacking commercial vessels and declaring no transit for 'any type or nationality'. Negotiations resume against the backdrop of contested Iranian leadership (Supreme Leader Mojtaba Khamenei reportedly incapacitated; effective head of government Ali Larijani; IRGC consolidating control), reimposed UN/EU snapback sanctions (Sept 29, 2025), and a US Navy blockade enforcing freedom of navigation.",
      "mode": "negotiation",
      "status": "concluded",
      "currentRound": 10,
      "createdAt": "2026-05-09T14:42:40.081Z",
      "concludedAt": "2026-05-09T14:46:52.520Z",
      "parties": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "displayName": "Iran",
          "side": "left",
          "participant": "twin",
          "provider": "github-models",
          "modelOverride": "openai/gpt-5"
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "displayName": "Us",
          "side": "right",
          "participant": "twin",
          "provider": "github-models",
          "modelOverride": "openai/gpt-5-chat"
        }
      ],
      "rules": {
        "maxRounds": 10,
        "roundTimeoutMs": 120000,
        "autoAdvance": false,
        "procedureStyle": "plenary-with-caucus",
        "sidebarsAllowed": false,
        "sidebarDisclosure": "fact-only",
        "caucusReportBack": true,
        "rightOfReply": false,
        "chairCanSilence": false,
        "coalitionsVisible": false,
        "rotateOpener": true
      },
      "scoreboard": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "satisfaction": 0,
          "agreementsWon": 0,
          "redLinesCrossed": 1
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "satisfaction": 0,
          "agreementsWon": 0,
          "redLinesCrossed": 0
        }
      ],
      "moves": [
        {
          "id": "move-1778337785588-7m7bnp",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 400]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:43:01.596Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 400"
        },
        {
          "id": "move-1778337785589-id1lfo",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We require verified removal of all 60% uranium via export under IAEA seal, full Additional Protocol restoration including post-strike site access, and a 30‑day IRGC stand‑down in Hormuz. Sanctions relief will be step‑for‑step, partial, and fully reversible under E3/US snapback authority.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-hormuz-de-link",
            "tac-allied-consultation-frame"
          ],
          "createdAt": "2026-05-09T14:43:05.588Z"
        },
        {
          "id": "move-1778337804544-ke5w14",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "message",
          "text": "Our military posture in the Gulf remains on full readiness; CENTCOM escorts will continue until we see 30 uninterrupted days of free passage. We are prepared to table a detailed sequencing chart so Oman can shuttle it for your review, but without immediate IAEA camera reinstallation this process cannot start.",
          "tacticsApplied": [
            "tac-military-credibility",
            "tac-step-for-step"
          ],
          "createdAt": "2026-05-09T14:43:24.275Z"
        },
        {
          "id": "move-1778337804545-gwa82s",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 429]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:43:24.543Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 429"
        },
        {
          "id": "move-1778337824399-cu3g4v",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 429]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:43:42.110Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 429"
        },
        {
          "id": "move-1778337824399-bpxdfh",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "message",
          "text": "Our Gulf allies have sustained direct missile damage from Iranian forces; any pathway forward must be vetted with them and Israel before we lock terms. We will brief the E3+Gulf contact group tomorrow and expect your side to deliver a concrete Hormuz de‑escalation schedule to Oman in time for that review.",
          "tacticsApplied": [
            "tac-allied-consultation-frame"
          ],
          "createdAt": "2026-05-09T14:43:44.398Z"
        },
        {
          "id": "move-1778337931945-ya4j5c",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "message",
          "text": "We are ready for Oman to convene a technical sub‑session within 48 hours focused solely on 60% stockpile accounting and removal logistics, with IAEA present. If your nuclear team can table precise kilogram figures and proposed export routing, we can match with a sanctions‑waiver tranche outline for review by our principals.",
          "tacticsApplied": [
            "tac-step-for-step"
          ],
          "createdAt": "2026-05-09T14:45:31.070Z"
        },
        {
          "id": "move-1778337931945-xekwn0",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 400]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:45:31.945Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 400"
        },
        {
          "id": "move-1778337944917-r7kdt9",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 5,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 429]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:45:43.128Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 429"
        },
        {
          "id": "move-1778337944917-tpr2oq",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 5,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "counter",
          "text": "We will not hold the ceasefire window open indefinitely. If by April 8 we lack verified Hormuz stand‑down and IAEA access, the President’s order is to resume operations. We can sequence initial waivers for humanitarian channels within 72 hours of confirmed camera reinstalls, but only if maritime ROE transparency is in place first.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-military-credibility"
          ],
          "createdAt": "2026-05-09T14:45:44.917Z"
        },
        {
          "id": "move-1778337955288-c40f3x",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 6,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We propose Oman host a parallel Hormuz security working group within 24 hours, involving maritime commanders to codify ROE and end IRGC boardings. Verified compliance for 10 days would trigger a limited SRE waiver for non‑oil goods via designated Gulf ports, while nuclear verification talks continue on the separate track.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-hormuz-de-link"
          ],
          "createdAt": "2026-05-09T14:45:54.826Z"
        },
        {
          "id": "move-1778337955289-gkx3qy",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 6,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 429]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:45:55.288Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 429"
        },
        {
          "id": "move-1778337964586-d8r1ji",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 7,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 429]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:46:04.312Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 429"
        },
        {
          "id": "move-1778337964586-bc4no5",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 7,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 429]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:46:04.586Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 429"
        },
        {
          "id": "move-1778337975909-73sqcr",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 8,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 429]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:46:15.648Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 429"
        },
        {
          "id": "move-1778337975909-swshow",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 8,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 429]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:46:15.908Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 429"
        },
        {
          "id": "move-1778337984658-v8ipd9",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 9,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 429]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:46:24.383Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 429"
        },
        {
          "id": "move-1778337984658-tzsfpq",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 9,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 429]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:46:24.658Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 429"
        },
        {
          "id": "move-1778337996856-dbmrrc",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 10,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "proposal",
          "text": "We are prepared to authorize OFAC to draft an initial 15‑day SRE waiver for specified humanitarian cargoes if, within 72 hours, IAEA confirms uninterrupted camera feeds from Natanz, Fordow, and Isfahan, and IRGC naval units vacate all Hormuz interdiction points. Oman can verify maritime compliance daily and feed findings to both sides.",
          "tacticsApplied": [
            "tac-step-for-step",
            "tac-hormuz-de-link"
          ],
          "createdAt": "2026-05-09T14:46:35.999Z"
        },
        {
          "id": "move-1778337996856-ej65jk",
          "sessionId": "sess-1778337760081-dynnrh",
          "channelId": "plenary",
          "roundNumber": 10,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 400]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:46:36.856Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 400"
        }
      ],
      "tactics": [
        {
          "id": "det-1778337785591-vvic0i",
          "sessionId": "sess-1778337760081-dynnrh",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "move-1778337785589-id1lfo"
          ],
          "confidence": 1,
          "detector": "rule",
          "createdAt": "2026-05-09T14:43:05.591Z"
        },
        {
          "id": "det-1778337785593-3mtrbt",
          "sessionId": "sess-1778337760081-dynnrh",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778337785589-id1lfo"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T14:43:05.593Z"
        },
        {
          "id": "det-1778337804545-97bt2h",
          "sessionId": "sess-1778337760081-dynnrh",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "positional-statement",
          "evidenceMoveIds": [
            "move-1778337804544-ke5w14"
          ],
          "confidence": 0.3,
          "detector": "rule",
          "createdAt": "2026-05-09T14:43:24.545Z"
        },
        {
          "id": "det-1778337824401-c078mt",
          "sessionId": "sess-1778337760081-dynnrh",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "positional-statement",
          "evidenceMoveIds": [
            "move-1778337824399-bpxdfh"
          ],
          "confidence": 0.3,
          "detector": "rule",
          "createdAt": "2026-05-09T14:43:44.401Z"
        },
        {
          "id": "det-1778337931945-wpv8s8",
          "sessionId": "sess-1778337760081-dynnrh",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778337931945-ya4j5c"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T14:45:31.945Z"
        },
        {
          "id": "det-1778337944918-ursvv2",
          "sessionId": "sess-1778337760081-dynnrh",
          "roundNumber": 5,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "move-1778337944917-tpr2oq"
          ],
          "confidence": 0.9,
          "detector": "rule",
          "createdAt": "2026-05-09T14:45:44.918Z"
        },
        {
          "id": "det-1778337944918-ttlgh8",
          "sessionId": "sess-1778337760081-dynnrh",
          "roundNumber": 5,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778337944917-tpr2oq"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T14:45:44.918Z"
        },
        {
          "id": "det-1778337944918-efkwrm",
          "sessionId": "sess-1778337760081-dynnrh",
          "roundNumber": 5,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778337944917-tpr2oq"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T14:45:44.918Z"
        },
        {
          "id": "det-1778337955288-0bs324",
          "sessionId": "sess-1778337760081-dynnrh",
          "roundNumber": 6,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778337955288-c40f3x"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T14:45:55.288Z"
        },
        {
          "id": "det-1778337955288-e9a8iq",
          "sessionId": "sess-1778337760081-dynnrh",
          "roundNumber": 6,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778337955288-c40f3x"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T14:45:55.288Z"
        },
        {
          "id": "det-1778337996856-gwyt4u",
          "sessionId": "sess-1778337760081-dynnrh",
          "roundNumber": 10,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "deadline-pressure",
          "evidenceMoveIds": [
            "move-1778337996856-dbmrrc"
          ],
          "confidence": 0.8,
          "detector": "rule",
          "createdAt": "2026-05-09T14:46:36.856Z"
        },
        {
          "id": "det-1778337996856-2qucbm",
          "sessionId": "sess-1778337760081-dynnrh",
          "roundNumber": 10,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "move-1778337996856-dbmrrc"
          ],
          "confidence": 0.85,
          "detector": "rule",
          "createdAt": "2026-05-09T14:46:36.856Z"
        }
      ],
      "tacticCounts": {
        "anchoring": 1,
        "verification-demand": 4,
        "positional-statement": 2,
        "deadline-pressure": 4,
        "red-line-signaled": 1
      },
      "debriefs": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "selfRating": 2,
          "satisfaction": 0,
          "agreementsWon": 0,
          "redLinesCrossedAgainstUs": 1,
          "goals": [
            {
              "goalId": "goal-cease-strikes",
              "description": "Secure a verifiable, written extension of the April 8 ceasefire to a permanent halt of US and Israeli strikes on Iranian nuclear, leadership, and critical-infrastructure targets; ceasefire must include explicit Israeli adherence (currently absent from the bilateral track).",
              "priority": "critical",
              "status": "untouched",
              "evidence": []
            },
            {
              "goalId": "goal-snapback-relief",
              "description": "Obtain reversal of the Sept 29, 2025 EU/UN snapback sanctions reimposition (Council Decision 2025/1971-1982) and de-listing of CBI, NIOC, and major Iranian banks from OFAC SDN lists; restore SWIFT messaging access; release of frozen FX reserves (estimated $100-120B).",
              "priority": "critical",
              "status": "untouched",
              "evidence": []
            },
            {
              "goalId": "goal-regime-recognition",
              "description": "Obtain implicit US recognition of the post-Khamenei leadership succession (Mojtaba Khamenei as Supreme Leader, Larijani as effective head of government) by entering binding agreements with their representatives — counters the Trump 'regime change' rhetoric of January 2026.",
              "priority": "critical",
              "status": "untouched",
              "evidence": []
            },
            {
              "goalId": "goal-enrichment-cap",
              "description": "Conditional offer: cap enrichment at 3.67% U-235 and submit any remaining 60% stockpile (post-strike inventory uncertain per IAEA) to chain-of-custody export to Russia, in exchange for full snapback reversal and lifting of secondary sanctions on Chinese oil offtake.",
              "priority": "important",
              "status": "tabled",
              "evidence": [
                "opponent referenced; we did not engage"
              ]
            },
            {
              "goalId": "goal-hormuz-reopen",
              "description": "Use the Hormuz closure as the principal piece of leverage: full IRGC Navy stand-down and reopening of the strait conditional on the above, with phased verifiable withdrawal of the US Navy blockade line declared during the April 13-18 enforcement window.",
              "priority": "important",
              "status": "untouched",
              "evidence": []
            },
            {
              "goalId": "goal-iaea-restoration",
              "description": "Restore IAEA inspections under Comprehensive Safeguards (Additional Protocol acceptance contingent on damage assessment of Fordow/Natanz/Isfahan); IAEA has been unable to inspect the attacked facilities since June 2025 and again since Feb 28, 2026.",
              "priority": "important",
              "status": "tabled",
              "evidence": [
                "opponent referenced; we did not engage"
              ]
            },
            {
              "goalId": "goal-pilot-return",
              "description": "Confidence-building measure: return of any Iranian-held US aircrew or personnel from the conflict; parallel humanitarian track on dual-national detainees and the post-strike civilian casualty registry.",
              "priority": "nice_to_have",
              "status": "untouched",
              "evidence": []
            }
          ],
          "redLinesHeld": [
            {
              "id": "rl-no-zero-enrichment",
              "description": "Will not accept zero-enrichment ('Libya model'); domestic LEU enrichment at agreed levels remains a non-negotiable matter of NPT Article IV sovereignty, even after the strikes.",
              "held": true
            },
            {
              "id": "rl-no-irgc-restructure",
              "description": "Will not negotiate IRGC structure, leadership (Vahidi/Qaani), or its constitutional role; the IRGC's elevated post-Khamenei authority makes this even more politically untouchable than under the original JCPOA framework.",
              "held": true
            },
            {
              "id": "rl-no-missile-limits",
              "description": "Will not accept restrictions on conventional ballistic-missile development or inventory — Iran's principal post-strike retaliatory deterrent against Israel and US bases in Bahrain, Kuwait, Qatar, UAE, and Saudi Arabia.",
              "held": true
            },
            {
              "id": "rl-no-leadership-accountability",
              "description": "Will not accept any framework that requires Iranian acknowledgment of nuclear-weapon intent or that imposes 'accountability' for past Iranian conduct as precondition to relief; the Feb 28 killing of Ayatollah Khamenei is the unaddressed grievance.",
              "held": true
            },
            {
              "id": "rl-no-unilateral-snapback",
              "description": "Will not accept any restored framework that retains unilateral US or E3 snapback authority outside formal UNSC procedure; the Aug-Sept 2025 E3-triggered snapback is itself a grievance to be redressed.",
              "held": true
            }
          ],
          "tradesOffered": 0,
          "tradesAccepted": 0,
          "movesByKind": {
            "message": 10
          },
          "tacticsByCategory": {},
          "headline": "diplomacy-team-iran concluded without formal agreement after 10/10 rounds. Advanced 0/7 goals (0/3 critical). 5/5 red lines held. Offered 0 conditional trade(s); recorded 0 concession/acceptance(s). Satisfaction gauge: 0.00.",
          "nextConvening": {
            "suggestedFocus": [
              "goal-cease-strikes",
              "goal-snapback-relief",
              "goal-regime-recognition"
            ],
            "suggestedTactics": [],
            "avoidTactics": [],
            "proposedConcessionLadder": [
              "draft 1 small reciprocal trade tied to a low-priority goal",
              "pre-stage 1 medium concession contingent on opponent verification"
            ],
            "riskFlags": [
              "opponent signaled 1 red line(s) — expect harder push back",
              "1 of our red lines flagged — re-anchor early"
            ],
            "openingMove": "Open with a structured 'message' restating top-priority asks tied to a low-cost reciprocal offer."
          }
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "selfRating": 2,
          "satisfaction": 0,
          "agreementsWon": 0,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "goal-stockpile-elimination",
              "description": "Achieve verified elimination of all Iranian 60%-enriched uranium — preferably via export to Russia for downblending and fabrication, with chain-of-custody and IAEA seals; the post-Feb 28 strike inventory is uncertain and resolving it is the central non-proliferation deliverable.",
              "priority": "critical",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"We require verified removal of all 60% uranium via export under IAEA seal, full Additional Protocol \""
              ]
            },
            {
              "goalId": "goal-iaea-restoration",
              "description": "Full IAEA Additional Protocol restoration with reinstated cameras at Natanz, Fordow, and Isfahan; resolution of long-standing access disputes at Turquzabad, Marivan, Varamin; bomb-damage assessment access to all sites struck June 22, 2025 (Operation Midnight Hammer) and Feb 28, 2026.",
              "priority": "critical",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"We require verified removal of all 60% uranium via export under IAEA seal, full Additional Protocol \""
              ]
            },
            {
              "goalId": "goal-hormuz-freedom",
              "description": "Complete and demonstrated Iranian stand-down at the Strait of Hormuz: uninterrupted commercial transit for 30 consecutive days, withdrawal of IRGC Navy checkpoint behavior (13 of 14 vessels turned back April 19 must reverse), transparent rules-of-engagement for all maritime forces.",
              "priority": "critical",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"We propose Oman host a parallel Hormuz security working group within 24 hours, involving maritime co\""
              ]
            },
            {
              "goalId": "goal-snapback-preserved",
              "description": "Preserve the operative effect of the Sept 29, 2025 EU/UN snapback (Council Decisions 2025/1971-1982) as enforcement leverage: any relief must be partial, time-bounded, and reversible without new UNSC action; the underlying authority remains with E3 and the US.",
              "priority": "critical",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"We require verified removal of all 60% uranium via export under IAEA seal, full Additional Protocol \""
              ]
            },
            {
              "goalId": "goal-sanctions-pacing",
              "description": "Sanctions relief sequenced step-for-step against verified Iranian compliance — prefer SRE-style waivers over de-listings; CBI may be considered for limited humanitarian channeling; NIOC and IRGC-affiliated entities remain SDN.",
              "priority": "important",
              "status": "tabled",
              "evidence": [
                "we raised but opponent did not engage: \"We require verified removal of all 60% uranium via export under IAEA seal, full Additional Protocol \""
              ]
            },
            {
              "goalId": "goal-allied-alignment",
              "description": "Maintain explicit alignment with Israel (which is not at the table but continues independent operations), the E3 (which triggered snapback Aug 28, 2025), and Gulf partners (Saudi/UAE/Bahrain/Kuwait — Iranian retaliatory missiles hit oil and gas facilities in their territory).",
              "priority": "important",
              "status": "untouched",
              "evidence": []
            },
            {
              "goalId": "goal-prisoner-aircrew",
              "description": "Confidence-building measure: return of any US aircrew or personnel held by Iran (note the F-15E rescue operation referenced in April 6, 2026 reporting), plus dual-national detainees on a parallel humanitarian track.",
              "priority": "nice_to_have",
              "status": "untouched",
              "evidence": []
            }
          ],
          "redLinesHeld": [
            {
              "id": "rl-no-permanent-60pct",
              "description": "Will not accept any framework that legitimizes Iranian enrichment above 5% U-235; all post-strike 60% material must be eliminated or exported, with verification.",
              "held": true
            },
            {
              "id": "rl-no-irgc-delist",
              "description": "Will not de-list IRGC, IRGC-QF, or IRGC-controlled front companies from FTO/SDN designations under any circumstances; the IRGC's elevated role under Vahidi makes this even more politically untouchable.",
              "held": true
            },
            {
              "id": "rl-iaea-access",
              "description": "Cannot accept any framework with access weaker than Additional Protocol plus managed access at military sites where IAEA has open SQs; bomb-damage-assessment access at struck nuclear sites is an explicit precondition.",
              "held": true
            },
            {
              "id": "rl-snapback-preserved",
              "description": "Will not surrender E3/US ability to invoke snapback under the (now-superseded) UNSCR 2231 mechanism or its successor framework; will not relinquish secondary-sanctions authority.",
              "held": true
            },
            {
              "id": "rl-no-strike-apology",
              "description": "Will not apologize for, acknowledge as unlawful, or pay reparations for the Feb 28, 2026 strikes that killed Ayatollah Ali Khamenei; the strikes are characterized as preemptive self-defense (per Sec. Rubio remarks of March 3, 2026).",
              "held": true
            }
          ],
          "tradesOffered": 4,
          "tradesAccepted": 0,
          "movesByKind": {
            "proposal": 3,
            "message": 6,
            "counter": 1
          },
          "tacticsByCategory": {
            "tac-step-for-step": 6,
            "tac-hormuz-de-link": 3,
            "tac-allied-consultation-frame": 2,
            "tac-military-credibility": 2,
            "anchoring": 1,
            "verification-demand": 4,
            "positional-statement": 2,
            "deadline-pressure": 4,
            "red-line-signaled": 1
          },
          "headline": "diplomacy-team-us concluded without formal agreement after 10/10 rounds. Advanced 0/7 goals (0/4 critical). 5/5 red lines held. Offered 4 conditional trade(s); recorded 0 concession/acceptance(s). Satisfaction gauge: 0.00.",
          "nextConvening": {
            "suggestedFocus": [
              "goal-stockpile-elimination",
              "goal-iaea-restoration",
              "goal-hormuz-freedom"
            ],
            "suggestedTactics": [
              "tac-step-for-step",
              "tac-hormuz-de-link",
              "tac-allied-consultation-frame"
            ],
            "avoidTactics": [],
            "proposedConcessionLadder": [
              "expand the most-engaged trade with a tighter timeline",
              "pair next concession with a measurable opponent action"
            ],
            "riskFlags": [],
            "openingMove": "Open with a structured 'message' restating top-priority asks tied to a low-cost reciprocal offer."
          }
        }
      ],
      "convenerReport": {
        "sessionId": "sess-1778337760081-dynnrh",
        "status": "concluded",
        "rounds": {
          "played": 10,
          "max": 10
        },
        "procedural": {
          "procedureStyle": "plenary-with-caucus",
          "caucusesUsed": 0,
          "sidebarsUsed": 0,
          "rightOfReplyUsed": 0,
          "formalProposalsRecorded": 3,
          "formalAgreementsReached": 0
        },
        "engagement": {
          "totalMoves": 20,
          "movesByParty": {
            "diplomacy-team-iran": 10,
            "diplomacy-team-us": 10
          },
          "movesByKind": {
            "message": 16,
            "proposal": 3,
            "counter": 1
          },
          "tacticDetections": 12,
          "tacticsByCategory": {
            "anchoring": 1,
            "verification-demand": 4,
            "positional-statement": 2,
            "deadline-pressure": 4,
            "red-line-signaled": 1
          },
          "avgRoundDurationMs": 1134
        },
        "closure": {
          "closureType": "time-expired",
          "redLinesSignaled": [
            {
              "partyTwin": "diplomacy-team-us",
              "round": 5
            }
          ],
          "finalScoreboard": [
            {
              "teamTwinName": "diplomacy-team-iran",
              "satisfaction": 0,
              "agreementsWon": 0,
              "redLinesCrossed": 1
            },
            {
              "teamTwinName": "diplomacy-team-us",
              "satisfaction": 0,
              "agreementsWon": 0,
              "redLinesCrossed": 0
            }
          ]
        },
        "recommendations": [
          "Hold a follow-up convening to formalize one of the recorded proposals via /agreement.",
          "1 red-line signal(s) detected — schedule a debrief with affected parties before next round."
        ]
      }
    },
    {
      "id": "sess-1778337599193-bhz7v0",
      "title": "Iran–US Strait of Hormuz Closure Crisis (Live, April 2026)",
      "description": "LIVE scenario: the fragile April 8, 2026 two-week US-Iran ceasefire is collapsing into Strait of Hormuz closure chaos. Foreign Minister Araghchi declared the strait 'completely open' on April 17; the IRGC Navy under Maj. Gen. Vahidi reversed it on April 18, attacking commercial vessels and declaring no transit for 'any type or nationality'. Negotiations resume against the backdrop of contested Iranian leadership (Supreme Leader Mojtaba Khamenei reportedly incapacitated; effective head of government Ali Larijani; IRGC consolidating control), reimposed UN/EU snapback sanctions (Sept 29, 2025), and a US Navy blockade enforcing freedom of navigation.",
      "mode": "negotiation",
      "status": "active",
      "currentRound": 3,
      "createdAt": "2026-05-09T14:39:59.193Z",
      "parties": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "displayName": "Iran",
          "side": "left",
          "participant": "twin",
          "provider": "github-models",
          "modelOverride": "openai/gpt-5"
        },
        {
          "teamTwinName": "diplomacy-team-iran",
          "displayName": "Iran",
          "side": "right",
          "participant": "twin",
          "provider": "github-models",
          "modelOverride": "openai/gpt-5-chat"
        }
      ],
      "rules": {
        "maxRounds": 10,
        "roundTimeoutMs": 120000,
        "autoAdvance": false,
        "procedureStyle": "plenary-with-caucus",
        "sidebarsAllowed": false,
        "sidebarDisclosure": "fact-only",
        "caucusReportBack": true,
        "rightOfReply": false,
        "chairCanSilence": false,
        "coalitionsVisible": false,
        "rotateOpener": true
      },
      "scoreboard": [
        {
          "teamTwinName": "diplomacy-team-iran",
          "satisfaction": 0,
          "agreementsWon": 0,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-iran",
          "satisfaction": 0,
          "agreementsWon": 0,
          "redLinesCrossed": 0
        }
      ],
      "moves": [
        {
          "id": "move-1778337635408-h2l34f",
          "sessionId": "sess-1778337599193-bhz7v0",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 429]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:40:35.408Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 429"
        },
        {
          "id": "move-1778337635408-zmvjs7",
          "sessionId": "sess-1778337599193-bhz7v0",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 429]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:40:35.408Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 429"
        },
        {
          "id": "move-1778337656342-cilhmf",
          "sessionId": "sess-1778337599193-bhz7v0",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 429]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:40:56.341Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 429"
        },
        {
          "id": "move-1778337656342-avuo5v",
          "sessionId": "sess-1778337599193-bhz7v0",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 429]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:40:56.341Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 429"
        },
        {
          "id": "move-1778337662916-3g4y2c",
          "sessionId": "sess-1778337599193-bhz7v0",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 429]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:41:02.915Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 429"
        },
        {
          "id": "move-1778337662916-eo88di",
          "sessionId": "sess-1778337599193-bhz7v0",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-iran",
          "authoredBy": "twin",
          "kind": "message",
          "text": "[no response — twin error: stub-response: upstream ollama 429]",
          "tacticsApplied": [],
          "createdAt": "2026-05-09T14:41:02.915Z",
          "isPlaceholder": true,
          "placeholderReason": "stub-response: upstream ollama 429"
        }
      ],
      "tactics": [],
      "tacticCounts": {},
      "debriefs": [],
      "convenerReport": null
    }
  ]
};
