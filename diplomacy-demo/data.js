window.DIPLOMACY_SNAPSHOT_DEMO = {
  "generatedAt": "2026-07-20T14:49:11.000Z",
  "sourceSnapshot": "sim/ (multi-scenario diplomatic simulator build)",
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
    },
    {
      "id": "scenario-arctic-iscne",
      "title": "Arctic — Sovereignty, Sea-Lanes & Governance (ISCNE)",
      "domain": "geopolitical",
      "status": "active",
      "shortDescription": "Seven-party UN-convened crisis negotiation over the Arctic (Canada, China, Denmark/Greenland, Finland, Norway, Russia, United States): overlapping continental-shelf claims on the Lomonosov Ridge, the legal status of the Northwest Passage and Northern Sea Route, Svalbard, militarization, resources, Arctic Council governance, and Indigenous inclusion. Adapted from the U.S. Army War College ISCNE Arctic scenario."
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
    },
    {
      "id": "sess-arctic-iscne-01",
      "title": "Arctic Dialogue Conference — Trondheim (7-party, ISCNE)",
      "description": "A UN Special Representative (SRSG) convenes seven delegations in Trondheim to defuse rising Arctic tensions. Four plenary rounds — opening statements, positioning, bargaining & coalitions, and closing — surface the core fault lines: the NATO-aligned Arctic states vs. a Sino-Russian partnership, US freedom-of-navigation claims vs. Canadian (NWP) and Russian (NSR) sovereignty over sea-lanes, the Svalbard EEZ dispute, and Lomonosov Ridge shelf overlaps. Each delegation negotiates from its own privileged instructions. Adapted from the U.S. Army War College International Strategic Crisis Negotiation Exercise (Arctic).",
      "mode": "negotiation",
      "status": "concluded",
      "currentRound": 4,
      "createdAt": "2026-02-20T09:00:00.000Z",
      "concludedAt": "2026-02-20T14:36:00.000Z",
      "parties": [
        {
          "teamTwinName": "diplomacy-team-us",
          "displayName": "United States",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-russia",
          "displayName": "Russia",
          "side": "right",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-canada",
          "displayName": "Canada",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-china",
          "displayName": "China",
          "side": "right",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-norway",
          "displayName": "Norway",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-denmark",
          "displayName": "Denmark",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-finland",
          "displayName": "Finland",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        }
      ],
      "rules": {
        "maxRounds": 4,
        "roundTimeoutMs": 120000,
        "autoAdvance": false,
        "procedureStyle": "plenary-with-caucus",
        "sidebarsAllowed": true,
        "sidebarDisclosure": "fact-only",
        "caucusReportBack": true,
        "rightOfReply": true,
        "chairCanSilence": false,
        "coalitionsVisible": true,
        "openerPartyTwin": "diplomacy-team-us",
        "rotateOpener": true
      },
      "scoreboard": [
        {
          "teamTwinName": "diplomacy-team-denmark",
          "satisfaction": 0.75,
          "agreementsWon": 5,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-finland",
          "satisfaction": 0.72,
          "agreementsWon": 5,
          "redLinesCrossed": 1
        },
        {
          "teamTwinName": "diplomacy-team-norway",
          "satisfaction": 0.68,
          "agreementsWon": 5,
          "redLinesCrossed": 1
        },
        {
          "teamTwinName": "diplomacy-team-canada",
          "satisfaction": 0.66,
          "agreementsWon": 6,
          "redLinesCrossed": 1
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "satisfaction": 0.6,
          "agreementsWon": 4,
          "redLinesCrossed": 1
        },
        {
          "teamTwinName": "diplomacy-team-china",
          "satisfaction": 0.44,
          "agreementsWon": 2,
          "redLinesCrossed": 1
        },
        {
          "teamTwinName": "diplomacy-team-russia",
          "satisfaction": 0.38,
          "agreementsWon": 3,
          "redLinesCrossed": 3
        }
      ],
      "moves": [
        {
          "id": "sess-arctic-iscne-01-mv000",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "The United States comes to Trondheim committed to a stable, rules-based, and secure Arctic. Let me be direct. The Northwest Passage and the Northern Sea Route are international straits. Freedom of navigation and transit passage through them are guaranteed under customary international law, and no state may condition, notify, or gatekeep the lawful passage of vessels. Although the United States is not yet party to UNCLOS, we honor its navigational and maritime-zone provisions and expect the same of others. We are equally clear-eyed about security. Growing militarization and the deepening Sino-Russian partnership in this region concern us, and we will defend our homeland, our Alaskan sovereignty, and our allies accordingly. We stand shoulder to shoulder with our NATO and NORAD partners, Canada, Denmark and Greenland, Norway, Finland, and Iceland. The Arctic remains a region for Arctic states. On environment, science, fisheries, and search-and-rescue, America is ready to lead cooperatively.",
          "tacticsApplied": [
            "freedom-of-navigation-frame",
            "anchoring",
            "coalition-building",
            "appeal-to-law"
          ],
          "createdAt": "2026-02-20T09:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv001",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-russia",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "The Russian Federation welcomes this dialogue in the spirit of an Arctic that must remain a zone of peace. More than half of the Arctic coastline is Russian, and with that geography comes responsibility. The Northern Sea Route lies within our territorial waters; under UNCLOS Article 234 Russia regulates transit lawfully, and our decades of icebreaker investment justify orderly, cost-based passage. We reject any recharacterization of the NSR as an 'international strait.' Our Arctic 2035 program will expand hydrocarbon, mineral, and shipping development within Russian jurisdiction. Our military presence is defensive and no different in kind from NATO or NORAD activity; foreign buildup, not ours, raises the risk of conflict. We note with concern the selective invocation of UNCLOS by a non-party, and the use of sanctions that harm cooperation and the environment alike. Russia honors its treaties, values environmental partnership with our neighbors, and is prepared to deepen cooperation with China and to deal directly with European Arctic states.",
          "tacticsApplied": [
            "sovereignty-assertion",
            "anchoring",
            "appeal-to-law",
            "coalition-building"
          ],
          "createdAt": "2026-02-20T09:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv002",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-canada",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "Canada comes to Trondheim to restore what this region has lost: a functioning, rules-based Arctic order anchored in UNCLOS and the Arctic Council. Let me be plain on three points. First, sovereignty: the waters of our Archipelago, including the Northwest Passage, are Canadian internal waters. That status does not change if the ice retreats, and Canada will continue to regulate all transit responsibly and safely. Second, stewardship: our North is warming three to four times faster than the planet. We will lead on environmental protection zones, the high-seas fisheries moratorium, and search-and-rescue capacity. Third, people: no Arctic decision is legitimate without meaningful Inuit and Sami inclusion. On militarization, escalation serves no one; we favour transparency, notification, and dialogue. Canada does not seek a new legal architecture, we already have one, we seek to strengthen it. We extend our hand to Arctic Council partners and stand ready to help bridge divides where others will not talk.",
          "tacticsApplied": [
            "sovereignty-assertion",
            "appeal-to-law",
            "environmental-frame",
            "indigenous-inclusion-frame"
          ],
          "createdAt": "2026-02-20T09:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv003",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-china",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "Distinguished Special Representative, esteemed colleagues. China comes to Trondheim as a near-Arctic state and a responsible stakeholder in a region whose fate now shapes the shared future of all mankind. The Arctic's transformation is no longer a purely regional matter; its warming reaches our coasts and its sea lanes touch the global economy. We anchor our position in three principles. First, the rule of law: UNCLOS, the Svalbard Treaty, and the freedom of navigation, overflight, scientific research, and lawful use of Arctic high seas that belong to the international community. Second, sustainable development through cooperation, including our Polar Silk Road, open to all willing partners. Third, robust environmental stewardship, underpinned by China's strengthened 2030 peaking and 2060 neutrality commitments. We seek a governance architecture that welcomes constructive non-Arctic contributors as full participants, not spectators. China stands ready to build coalitions with Russia, the Nordic states, and the European Union toward common, win-win outcomes.",
          "tacticsApplied": [
            "freedom-of-navigation-frame",
            "appeal-to-law",
            "coalition-building",
            "environmental-frame"
          ],
          "createdAt": "2026-02-20T09:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv004",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-norway",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "Norway welcomes you to Trondheim. As a founding NATO member on the Alliance's northern flank, and as Europe's largest gas supplier keeping the continent's lights on, we speak for a High North that must remain low-tension. Our compass is simple: UNCLOS governs every maritime dispute here, and the law of the sea is not negotiable. Let me be plain on Svalbard. Norwegian sovereignty over the archipelago is absolute and the 1920 Treaty is settled law requiring no reform; treaty access rights apply within our territorial waters, while the surrounding maritime zones are Norway's to manage. We will continue responsible, science-based fisheries stewardship and uphold the central Arctic Ocean high-seas fishing moratorium. Norway's Sami people sit in our Parliament, and Indigenous voices belong at this table. We look to our Nordic and NATO partners to build a common Arctic framework rooted in law, cooperation, and restraint. Norway stands ready to lead.",
          "tacticsApplied": [
            "sovereignty-assertion",
            "anchoring",
            "appeal-to-law",
            "coalition-building"
          ],
          "createdAt": "2026-02-20T09:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv005",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-denmark",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "The Kingdom of Denmark speaks as an Arctic coastal state through Greenland, and we speak with one voice. Let us be clear: nothing about the Arctic, and nothing about Greenland, without the peoples of the Arctic. Greenland's Self-Rule is a global model of indigenous autonomy, and it will lead on every question touching its lands, waters, and future. Denmark approaches these talks in good faith and under law. Our scientific CLCS submission establishes the geologic linkage of the Lomonosov Ridge to Greenland; overlaps with our neighbors will be resolved peacefully, bilaterally, in the spirit of the Hans Island settlement, never by unilateral assertion. We reaffirm our commitment to a revitalized Arctic Council, to the Arctic Five format for coastal-state matters, and to our NATO and European partners. We welcome the EU as observer. Freedom and security in this region rest on the rule of law, transit protocols honored, and the Paris Agreement upheld. Denmark stands ready to build that consensus with willing partners.",
          "tacticsApplied": [
            "anchoring",
            "appeal-to-law",
            "indigenous-inclusion-frame",
            "coalition-building"
          ],
          "createdAt": "2026-02-20T10:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv006",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-finland",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "Finland welcomes you to this dialogue and speaks plainly: we share the longest border with Russia of any NATO ally, and stability in the High North is not an abstraction for us but a daily security reality. Our accession to NATO changed the map; it did not change our commitment to keeping the Arctic a region of low tension. We come as a non-coastal state with no shelf claim to press, and we offer that neutrality in service of resolving disputes among coastal nations. Finland champions sustainable development: our mining and mine-water expertise can supply Europe's critical minerals responsibly, strengthening the EU's strategic autonomy. Any durable outcome must fully include the Sámi, the European Union's only Indigenous people, whose rights are constitutionally guaranteed. We look to our Nordic and EU partners to anchor an inclusive Arctic Council. Militarization serves no one; let us build transparency, respect the law of the sea, and keep the North peaceful.",
          "tacticsApplied": [
            "anchoring",
            "coalition-building",
            "indigenous-inclusion-frame",
            "appeal-to-law"
          ],
          "createdAt": "2026-02-20T10:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv007",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "positioning",
          "text": "The United States heard two claims yesterday that cannot stand. To Russia: the NSR is not your territorial water, and no Article 234 gloss converts an international strait into a tollbooth requiring 45-day warship notice. We reject NSR sovereignty and any Russian military oversight of passage. To China: there is no such thing as a 'near-Arctic state' in law. Warming coasts do not confer a seat; the Arctic remains for Arctic states, and a Polar Silk Road tethered to Moscow is a strategic partnership, not stewardship. To our friend Canada: we share your defense of the rules-based order and your Inuit-inclusion leadership, but candidly, we cannot accept the Passage as internal waters or transit notification for any vessel. Let us settle this among allies, not hand adversaries a precedent. Denmark, Norway, Finland: let us anchor one Western framework in law.",
          "tacticsApplied": [
            "freedom-of-navigation-frame",
            "coalition-building",
            "appeal-to-law",
            "red-line-signaled"
          ],
          "createdAt": "2026-02-20T10:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv008",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-russia",
          "authoredBy": "twin",
          "kind": "positioning",
          "text": "To the United States: you cannot invoke UNCLOS as a non-party and then rewrite it. The Northern Sea Route is not an 'international strait' — it lies in Russian waters, and Article 234 grants the coastal state ice-covered regulation. This is a red line, not a bargaining chip. To Canada and Denmark: the CLCS has already partially validated Russia's submission, and the science ties the Lomonosov Ridge to our shelf — competing Greenland and Archipelago geologies do not displace ours. We welcome Denmark's stated preference for peaceful, bilateral resolution, and we hold Russia to the same. To China: we value the Polar Silk Road and support your full participation, while Russia alone regulates its route. To Norway: treaty access does not create a Norwegian EEZ around Svalbard. And let us be honest — sanctions harm environmental cooperation and search-and-rescue we all depend on.",
          "tacticsApplied": [
            "sovereignty-assertion",
            "red-line-signaled",
            "appeal-to-law",
            "coalition-building"
          ],
          "createdAt": "2026-02-20T10:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv009",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-canada",
          "authoredBy": "twin",
          "kind": "positioning",
          "text": "To Washington: we hear you on security and stand with you in NATO and NORAD, but Canada firmly rejects the claim that the Northwest Passage is an international strait. These are historic internal waters of our Archipelago, and their status does not turn on ice cover. Our 1988 Arctic Cooperation Agreement already gives U.S. vessels smooth passage by consent, and that cooperation is the model, not a legal recharacterization we will never accept. Resolve Beaufort with us on the 141st meridian and we can move quickly. To Russia: we differ on the NSR, yet we note Article 234 cuts both ways, and Canada is willing to talk risk-reduction and notification frameworks. To Denmark and Norway: on Lomonosov and Svalbard, UNCLOS and the CLCS decide, not unilateral acts. To China: welcome as a stakeholder, but Arctic Council membership belongs to Arctic states.",
          "tacticsApplied": [
            "sovereignty-assertion",
            "red-line-signaled",
            "issue-linkage",
            "appeal-to-law"
          ],
          "createdAt": "2026-02-20T10:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv010",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-china",
          "authoredBy": "twin",
          "kind": "positioning",
          "text": "We thank the Special Representative. To the United States: China's presence here is scientific and commercial, not a threat to anyone's homeland; treating a near-Arctic partner as a rival only isolates those who need Arctic investment most. We stand with Russia on orderly, cost-based NSR passage and welcome deeper Polar Silk Road cooperation. To Norway and Finland: we heard your call for a low-tension High North, and China is precisely the partner for that, offering research funding, infrastructure, and a stable market for your gas and critical minerals. Finland, your mine-water expertise and our capital are natural complements. To Denmark and Greenland: China respects your self-rule and stands ready to invest in Greenlandic mining and science on terms you set. On environment, our 2030 and 2060 commitments are real. We ask only what the law grants: to participate, not spectate.",
          "tacticsApplied": [
            "coalition-building",
            "side-payment",
            "environmental-frame",
            "appeal-to-law"
          ],
          "createdAt": "2026-02-20T11:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv011",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-norway",
          "authoredBy": "twin",
          "kind": "positioning",
          "text": "Norway thanks the Chair. To Russia and China: we heard your invocations of the Svalbard Treaty. Let us be exact. Treaty equal-access lives inside the 12-nautical-mile territorial sea; the surrounding maritime zone is a Norwegian EEZ, managed by Norway under UNCLOS. That is not a bargaining chip; it is settled law, and no foreign fleet will patrol or license resources in those waters. Full stop. That said, Norway does not seek walls. To Russia: our joint fisheries commission has worked for fifty years across worse winters than this, and we are ready to keep that channel and coastal cooperation open. To Europe and our partners, Denmark, Finland, and the United States: as your largest gas supplier we will keep the lights on, and we align with the Nordic and NATO framework Canada and Finland described, rooted in law, restraint, and Sami inclusion.",
          "tacticsApplied": [
            "red-line-signaled",
            "appeal-to-law",
            "conditional-offer",
            "coalition-building"
          ],
          "createdAt": "2026-02-20T11:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv012",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-denmark",
          "authoredBy": "twin",
          "kind": "positioning",
          "text": "Denmark thanks the Special Representative. To Norway and Canada: we hear you, and the law is our common ground. On the Lomonosov Ridge, our CLCS submission demonstrates geologic linkage to Greenland; Canada's and Russia's overlaps are real but resolvable, and no CLCS validation is final while claims overlap. Let us settle these bilaterally, in the Hans Island spirit, never by unilateral assertion. To Russia: transit through Greenland's waters requires notification and honored protocols; that is UNCLOS, not obstruction. To China: legitimate, transparent investment welcome by Greenland's own choice, but let us be unambiguous, there is no place for military presence on or around Greenland, and near-Arctic status is not membership. To the United States, Norway, Finland: we stand with our NATO partners for a low-tension North. And above all, Greenland speaks for Greenland here.",
          "tacticsApplied": [
            "appeal-to-law",
            "red-line-signaled",
            "appeal-to-precedent",
            "coalition-building"
          ],
          "createdAt": "2026-02-20T11:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv013",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-finland",
          "authoredBy": "twin",
          "kind": "positioning",
          "text": "Finland thanks Norway and Denmark for grounding us in UNCLOS and the Arctic Council; that is the architecture we strengthen, not replace. To Denmark: we warmly echo 'nothing about the Arctic without its peoples' and extend that principle to the Sámi, the EU's only Indigenous people. We back EU observer status alongside you. To China: we respect your environmental commitments and welcome constructive contributors, but let us be candid, the Council's member states are Arctic states. Observers, yes; membership, no. That line will hold. To the United States and Russia both: escalatory framing helps no one on the border we actually live on. Finland offers a bridge, transparency, notification, cold-climate expertise, and responsible mining for Europe's critical minerals. And to Norway and Denmark, the Council must seat all eight, not an exclusive Arctic Five that sidelines Finland, Sweden, and Iceland.",
          "tacticsApplied": [
            "coalition-building",
            "red-line-signaled",
            "indigenous-inclusion-frame",
            "principled-bargaining-frame"
          ],
          "createdAt": "2026-02-20T11:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv014",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "The United States now tables concrete moves. To our allies — Canada, Norway, Denmark and Greenland, Finland: we offer a Western Arctic Security and SAR Package. Read together as one deal: pooled search-and-rescue and spill-response assets, shared icebreaker access and cold-weather logistics, joint domain-awareness, and NORAD/NATO coverage for the northern flank — linked to a common navigation framework rooted in law. To Canada specifically: we propose a bilateral cooperative-transit arrangement, building on our 1988 Arctic Cooperation Agreement — advance operational coordination for U.S. and allied vessels, ice-pilotage and safety cooperation, and Beaufort risk-reduction talks — with neither side conceding its legal position on the Passage's status. You keep your face; we keep the principle. That security-plus-navigation linkage is the price of the package. What it cannot bridge: freedom of navigation and free flow of trade remain non-negotiable for the United States — that is a red line. And it will not extend to the Sino-Russian NSR model, where a 45-day warship-notice tollbooth and 'near-Arctic' entitlements have no basis in law. Nordic partners: let us seal one framework and isolate that outlier position together.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "coalition-building",
            "red-line-signaled"
          ],
          "createdAt": "2026-02-20T11:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv015",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-russia",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "Russia comes to bargain concretely. To all users of the NSR: recognize Russian NSR governance under Article 234 and in return we will publish streamlined, transparent transit and pilotage tariffs, guaranteed icebreaker escort, and binding SAR and spill-response coverage across our entire coast. That is a genuine side-payment; NSR sovereignty itself remains a red line. As a good-faith gesture on militarization, we will ease warship notice from 45 to 30 days on the NSR and pre-notify major exercises, conditional on reciprocal Western transparency. To Canada and Denmark: let us open a trilateral Lomonosov Ridge delimitation track, bilateral and CLCS-based in the Hans Island spirit, insulated from the wider dispute. To China: we deepen the Polar Silk Road, joint energy and infrastructure investment, and back your full Council participation. To Norway: keep the fisheries commission running. Partners at this table: China, Canada and Denmark on delimitation, and European Arctic states directly.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "side-payment",
            "coalition-building"
          ],
          "createdAt": "2026-02-20T12:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv016",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-canada",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "Canada moves from principle to packages. To Washington: here is a face-saving formula. If the United States accepts a bilateral 'Arctic Cooperation Agreement 2.0' under which all U.S.-flagged vessels transit the Northwest Passage by standing consent, and jointly resolves Beaufort on the 141st meridian, then Canada will co-lead one Western legal framework and expand NORAD Arctic surveillance sharing. Neither side surrenders its legal characterization; we simply operationalize passage. That protects your navigation and our internal-waters status. Side-payment: I offer to broker the messages you will not deliver directly to Moscow and Beijing. To Denmark and Norway: I propose a Nordic-Canadian caucus to settle Lomonosov and Svalbard strictly via CLCS and UNCLOS, and to hold Arctic Council membership to Arctic states, observers only for others. To Russia: I will table a reciprocal NSR/NWP risk-reduction and warship-notification protocol. Environmental frame binds all: high-seas fisheries moratorium and shared SAR capacity.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "coalition-building",
            "side-payment"
          ],
          "createdAt": "2026-02-20T12:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv017",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-china",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "China moves from principle to concrete terms. To Russia: we will co-finance NSR icebreaker capacity, port dredging, and search-and-rescue stations along your coast, and accept orderly, cost-based passage protocols, in exchange for guaranteed, non-discriminatory transit for Chinese-flagged commercial vessels. Our Polar Silk Road partnership deepens. To Norway, a direct offer: a Chinese-funded joint High-North research and marine-science center at a Norwegian port, plus a long-term LNG and critical-minerals purchase commitment, in return for your support for enhanced observer roles and continued Svalbard-area fisheries science cooperation. To Finland: capital for your mine-water and critical-mineral projects, tied to a joint Arctic climate-monitoring program. Symbolic concession: China will formally reaffirm that Arctic Council membership rests with Arctic states, seeking instead enhanced observer standing with guaranteed working-group access, science berths, and SAR participation. We ask only that access, once granted, be guaranteed in writing. Investment follows cooperation.",
          "tacticsApplied": [
            "conditional-offer",
            "side-payment",
            "issue-linkage",
            "coalition-building"
          ],
          "createdAt": "2026-02-20T12:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv018",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-norway",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "Norway comes to bargain concretely. We table a package. First, we will formalize the Svalbard Fisheries Protection Zone into a transparent, science-based management arrangement: published quotas, non-discriminatory access for historic-fishing signatories, and joint stock assessments open to Russia through our fifty-year Joint Fisheries Commission, which we commit to continue uninterrupted. That grants everyone practical harvesting certainty. Second, as Europe's largest gas supplier, Norway offers multi-year supply assurances underpinning European and allied energy security. In exchange, one thing: no party challenges, patrols, licenses, or seeks to regulate the Svalbard maritime zone as anything but a Norwegian EEZ. Management we share; sovereignty we do not. That is our line, and it is firm. We build this with Denmark, Finland, Iceland, Sweden, and our NATO partners, and we keep the door open to Russia on fisheries and coastal cooperation. Practical quotas for legal recognition, colleagues, is a fair trade.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "red-line-signaled",
            "coalition-building"
          ],
          "createdAt": "2026-02-20T12:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv019",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-denmark",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "Denmark tables a concrete package. First, we propose a trilateral Lomonosov Ridge process with Canada and Russia, conducted strictly through the CLCS and settled bilaterally in the Hans Island spirit, in exchange for mutual recognition that Greenland's shelf rights remain live and no overlapping claim is final until we three resolve them. Second, Greenland offers to lead a circumpolar SAR and science framework, sharing survey data and rescue coordination across our waters, open to all seven delegations. To sweeten this: we will move flexibly on strengthening Arctic Council dispute mechanisms and EU observer status, and we support risk-reduction notification frameworks Canada raised. But one line does not move: no Chinese military presence on or around Greenland, and near-Arctic status is never membership. We build this with Canada, Norway, the United States, and our NATO and EU partners. Recognize Greenland's shelf, and Denmark delivers cooperation.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "coalition-building",
            "red-line-signaled"
          ],
          "createdAt": "2026-02-20T12:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv020",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-finland",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "Finland tables a concrete package to move us from statements to structure. First: revive the Arctic Eight, all eight members seated, no Arctic Five side-table, restarting with the two files where trust is cheapest and stakes are shared, a standing SAR and spill-response mechanism and a de-conflicted joint science program on ice, methane, and fisheries. Finland will convene and host it. Second, a binding Sami-and-Inuit inclusion protocol giving Permanent Participants a formal seat on any decision touching their lands and waters, a line Denmark, Canada, and Norway already share. On the hardest gap: Finland will quietly broker between this table and Moscow on these low-politics tracks, SAR and science save lives regardless of sanctions, while Russia alone regulates its route. Our red line stands, observers welcome, Chinese Arctic Council membership no. Partners: Sweden, Iceland, Denmark, Norway, and the EU. Who joins the SAR working group?",
          "tacticsApplied": [
            "coalition-building",
            "issue-linkage",
            "indigenous-inclusion-frame",
            "red-line-signaled"
          ],
          "createdAt": "2026-02-20T13:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv021",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "The United States closes with clarity and confidence. We leave Trondheim with a Western Arctic Security and SAR Package on the table: pooled search-and-rescue and spill-response, shared icebreaker access and cold-weather logistics, joint domain awareness, and NORAD/NATO coverage for the northern flank, all linked to one navigation framework rooted in law. With Canada, we have a workable path: a cooperative-transit formula operationalizing passage for U.S. and allied vessels, building on our 1988 Agreement, with neither side conceding its legal position. Canada keeps its face; we keep the principle that the Passage is an international strait. Let us be unambiguous on our red line: freedom of navigation and the free flow of trade are non-negotiable, held firm against both Russia's NSR tollbooth and any transit-notification claim. The Sino-Russian NSR model remains the decisive gap. The way forward is an allied framework now, and the outlier isolated. America stands ready.",
          "tacticsApplied": [
            "anchoring",
            "issue-linkage",
            "coalition-building",
            "red-line-signaled"
          ],
          "createdAt": "2026-02-20T13:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv022",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-russia",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Russia leaves Trondheim having bargained in good faith. Our offer stands: recognize Russian NSR governance under Article 234, and in return we deliver transparent published tariffs, guaranteed icebreaker escort, and binding SAR and spill-response across our entire coast. As a genuine concession we ease warship notice from forty-five to thirty days and pre-notify major exercises, conditional on reciprocal Western transparency. With Canada and Denmark we keep the Lomonosov delimitation track alive, CLCS-based and bilateral in the Hans Island spirit. With China we deepen the Polar Silk Road. Yet let no one mistake us: NSR sovereignty is a red line, and it holds. Washington cannot rewrite a treaty it never joined, nor convert our waters into an 'international strait.' The way forward is practical cooperation over confrontation, sanctions lifted, the Arctic Council restored, and each state respecting the law where it actually runs.",
          "tacticsApplied": [
            "anchoring",
            "issue-linkage",
            "red-line-signaled",
            "conditional-offer"
          ],
          "createdAt": "2026-02-20T13:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv023",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-canada",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Canada leaves Trondheim encouraged. We came to strengthen a rules-based Arctic, and this table moved from statements to structure. Canada can support the U.S. cooperative-transit formula: an Arctic Cooperation Agreement 2.0 operationalizing passage by standing consent, paired with Beaufort risk-reduction, with neither side conceding its legal characterization. We embrace the Nordic-Canadian CLCS caucus with Denmark and Norway to settle Lomonosov and Svalbard strictly through UNCLOS, and Finland's Arctic Eight SAR and Sami-Inuit inclusion mechanisms. Our red lines held: the Northwest Passage remains Canadian internal waters, membership stays with Arctic states, and no unresolved Beaufort leases. Gaps persist on the NSR's status and observer terms; Canada will keep brokering messages others will not carry. Way forward: convene the caucus within ninety days, table a reciprocal NWP-NSR notification protocol, and bind all in the high-seas fisheries moratorium and shared SAR capacity.",
          "tacticsApplied": [
            "issue-linkage",
            "principled-bargaining-frame",
            "coalition-building",
            "issue-linkage"
          ],
          "createdAt": "2026-02-20T13:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv024",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-china",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "China leaves Trondheim clear-eyed. We advanced real cooperation: co-financing NSR icebreakers, ports, and search-and-rescue with Russia, whose partnership on non-discriminatory transit held firm and deepened. Our red lines held. Freedom of navigation for Chinese vessels stands, and the Arctic high seas remain open under UNCLOS and the Svalbard Treaty to all lawful research, shipping, and use. Yet we note with disappointment a persistent bloc reflex. Finland and Denmark drew a line at membership; we conceded that gracefully, seeking only written, guaranteed observer access to working groups, science berths, and SAR. That access was not yet granted, and treating a near-Arctic investor as a rival serves no one. Our Norwegian research center and Finnish critical-mineral offers remain on the table. The Arctic is a shared future for mankind. China plays the long game, and our hand stays open.",
          "tacticsApplied": [
            "anchoring",
            "issue-linkage",
            "coalition-building",
            "red-line-signaled"
          ],
          "createdAt": "2026-02-20T13:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv025",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-norway",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Norway closes Trondheim encouraged. We leave with a working understanding on the Svalbard Fisheries Protection Zone: transparent, science-based management, published quotas, and non-discriminatory access for historic signatories, with our fifty-year Joint Fisheries Commission with Russia continuing uninterrupted. Our gas-supply assurances to Europe and allies stand as a pillar of Arctic energy security. And our red line held: the maritime zone surrounding Svalbard is a Norwegian EEZ, unchallenged, unpatrolled, unlicensed by any foreign fleet. We acknowledge the legal disagreements that persist over the zone's characterization; those we did not resolve, and we did not paper over them. The way forward is practical: management we share, sovereignty we keep. Let the Nordic-NATO framework, the Arctic Council, and UNCLOS carry this work onward. Norway will keep the door open to Russia on fisheries, and lead a High North that stays low-tension.",
          "tacticsApplied": [
            "anchoring",
            "issue-linkage",
            "red-line-signaled",
            "coalition-building"
          ],
          "createdAt": "2026-02-20T14:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv026",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-denmark",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "The Kingdom of Denmark closes Trondheim encouraged. The trilateral Lomonosov track with Canada and Russia is real progress: CLCS-based, bilateral in the Hans Island spirit, with Greenland's shelf rights recognized as live until we three resolve them. We thank both partners and will move to convene it. Greenland's offer to lead a circumpolar SAR and science framework stands open to all seven delegations, and we welcome Finland's and Washington's SAR initiatives as complementary. Let me be plain on two enduring truths. Nothing about the Arctic, and nothing about Greenland, without the peoples of the Arctic. And our one red line held throughout: no Chinese military presence on or around Greenland, and near-Arctic status is never membership. The way forward is law, notification honored, and Greenland speaking for Greenland. Denmark stands ready to build it with willing partners.",
          "tacticsApplied": [
            "anchoring",
            "coalition-building",
            "red-line-signaled",
            "issue-linkage"
          ],
          "createdAt": "2026-02-20T14:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-mv027",
          "sessionId": "sess-arctic-iscne-01",
          "channelId": "plenary",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-finland",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Finland closes as we opened: a bridge, not a wall. We leave Trondheim with real gains. Where trust was cheapest, we built: a standing all-eight SAR and spill-response mechanism and a de-conflicted joint science program on ice, methane, and fisheries now command broad support, and a Sami-and-Inuit inclusion protocol is taking shape with Denmark, Canada, and Norway. On the hardest question, the line held: observers welcome, Chinese Arctic Council membership no, and no return to an exclusive Arctic Five that sidelines Finland, Sweden, and Iceland. Gaps remain, on the NSR and Northwest Passage, on Svalbard and Lomonosov, on militarization. So Finland proposes a concrete next step: reconvene an Arctic-Eight track within six months, hosted in Rovaniemi, chaired to keep low-politics cooperation moving whatever the wider climate. SAR and science save lives regardless of sanctions. The North stays peaceful only if we keep talking.",
          "tacticsApplied": [
            "coalition-building",
            "principled-bargaining-frame",
            "red-line-signaled",
            "conditional-offer"
          ],
          "createdAt": "2026-02-20T14:24:00.000Z"
        }
      ],
      "tactics": [
        {
          "id": "sess-arctic-iscne-01-det000",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "freedom-of-navigation-frame",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv000"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det001",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv000"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det002",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv000"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det003",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv000"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det004",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "sovereignty-assertion",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv001"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det005",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv001"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det006",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv001"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det007",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv001"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det008",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-canada",
          "tacticId": "sovereignty-assertion",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv002"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det009",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-canada",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv002"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det010",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-canada",
          "tacticId": "environmental-frame",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv002"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det011",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-canada",
          "tacticId": "indigenous-inclusion-frame",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv002"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det012",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "freedom-of-navigation-frame",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv003"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det013",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv003"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det014",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv003"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det015",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "environmental-frame",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv003"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det016",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-norway",
          "tacticId": "sovereignty-assertion",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv004"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det017",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-norway",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv004"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det018",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-norway",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv004"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det019",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-norway",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv004"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T09:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det020",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-denmark",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv005"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det021",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-denmark",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv005"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det022",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-denmark",
          "tacticId": "indigenous-inclusion-frame",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv005"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det023",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-denmark",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv005"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det024",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-finland",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv006"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det025",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-finland",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv006"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det026",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-finland",
          "tacticId": "indigenous-inclusion-frame",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv006"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det027",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-finland",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv006"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det028",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "freedom-of-navigation-frame",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv007"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det029",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv007"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det030",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv007"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det031",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv007"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det032",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "sovereignty-assertion",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv008"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det033",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv008"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det034",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv008"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det035",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv008"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det036",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-canada",
          "tacticId": "sovereignty-assertion",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv009"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det037",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-canada",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv009"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det038",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-canada",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv009"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det039",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-canada",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv009"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T10:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det040",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv010"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det041",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv010"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det042",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "environmental-frame",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv010"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det043",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv010"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det044",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-norway",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv011"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det045",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-norway",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv011"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det046",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-norway",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv011"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det047",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-norway",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv011"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det048",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-denmark",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv012"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det049",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-denmark",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv012"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det050",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-denmark",
          "tacticId": "appeal-to-precedent",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv012"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det051",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-denmark",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv012"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det052",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-finland",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv013"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det053",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-finland",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv013"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det054",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-finland",
          "tacticId": "indigenous-inclusion-frame",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv013"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det055",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-finland",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv013"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det056",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv014"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det057",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv014"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det058",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv014"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det059",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv014"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T11:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det060",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv015"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det061",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv015"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det062",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv015"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det063",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv015"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det064",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-canada",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv016"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det065",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-canada",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv016"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det066",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-canada",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv016"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det067",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-canada",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv016"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det068",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv017"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det069",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv017"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det070",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv017"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det071",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv017"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det072",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-norway",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv018"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det073",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-norway",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv018"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det074",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-norway",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv018"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det075",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-norway",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv018"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det076",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-denmark",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv019"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det077",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-denmark",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv019"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det078",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-denmark",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv019"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det079",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-denmark",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv019"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T12:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det080",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-finland",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv020"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det081",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-finland",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv020"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det082",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-finland",
          "tacticId": "indigenous-inclusion-frame",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv020"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det083",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-finland",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv020"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det084",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv021"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det085",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv021"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det086",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv021"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det087",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv021"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det088",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv022"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det089",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv022"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det090",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv022"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det091",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv022"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det092",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-canada",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv023"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det093",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-canada",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv023"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det094",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-canada",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv023"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det095",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-canada",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv023"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:36:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det096",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv024"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det097",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv024"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det098",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv024"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det099",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv024"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T13:48:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det100",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-norway",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv025"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T14:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det101",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-norway",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv025"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T14:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det102",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-norway",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv025"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T14:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det103",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-norway",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv025"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T14:00:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det104",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-denmark",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv026"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T14:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det105",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-denmark",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv026"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T14:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det106",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-denmark",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv026"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T14:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det107",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-denmark",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv026"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T14:12:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det108",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-finland",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv027"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T14:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det109",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-finland",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv027"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T14:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det110",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-finland",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv027"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T14:24:00.000Z"
        },
        {
          "id": "sess-arctic-iscne-01-det111",
          "sessionId": "sess-arctic-iscne-01",
          "roundNumber": 4,
          "partyTwin": "diplomacy-team-finland",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-arctic-iscne-01-mv027"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-02-20T14:24:00.000Z"
        }
      ],
      "tacticCounts": {
        "freedom-of-navigation-frame": 3,
        "anchoring": 10,
        "coalition-building": 25,
        "appeal-to-law": 13,
        "sovereignty-assertion": 5,
        "environmental-frame": 3,
        "indigenous-inclusion-frame": 5,
        "red-line-signaled": 16,
        "issue-linkage": 15,
        "side-payment": 4,
        "conditional-offer": 9,
        "appeal-to-precedent": 1,
        "principled-bargaining-frame": 3
      },
      "debriefs": [
        {
          "teamTwinName": "diplomacy-team-us",
          "selfRating": 3.3,
          "satisfaction": 0.6,
          "agreementsWon": 4,
          "redLinesCrossedAgainstUs": 1,
          "goals": [
            {
              "goalId": "block-china-council-membership",
              "description": "Prevent any move making China a principal/member state of the Arctic Council.",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "R2 US: no such thing as a near-Arctic state in law",
                "R3-R4 China conceded membership; Finland/Denmark/Canada held the line with US"
              ]
            },
            {
              "goalId": "freedom-of-navigation-nsr-nwp",
              "description": "Ensure freedom of navigation and free flow of trade through the NWP and NSR; reject Russian NSR oversight and Canadian transit-notification.",
              "priority": "critical",
              "status": "partial",
              "evidence": [
                "R3-R4 Canada cooperative-transit formula operationalizes NWP by standing consent, no notification, US keeps international-strait principle",
                "R2/R4 Russia held NSR sovereignty; FoN through NSR left unresolved"
              ]
            },
            {
              "goalId": "western-security-sar-bloc",
              "description": "Anchor a united Western/NATO Arctic security framework to counter Sino-Russian influence.",
              "priority": "high",
              "status": "partial",
              "evidence": [
                "R3 US tables Western Arctic Security & SAR Package (pooled SAR, icebreaker access, NORAD/NATO coverage)",
                "R4 package remained on the table, not a binding deal; Sino-Russian bloc deepened rather than fractured"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-russia",
          "selfRating": 2.2,
          "satisfaction": 0.38,
          "agreementsWon": 3,
          "redLinesCrossedAgainstUs": 3,
          "goals": [
            {
              "goalId": "nsr-sovereignty-control",
              "description": "Maintain full control of the NSR as a Russian trade route under Article 234; reject international-strait characterization.",
              "priority": "critical",
              "status": "partial",
              "evidence": [
                "R3-R4 Russia tabled tariff/icebreaker/SAR side-payment and eased warship notice 45 to 30 days",
                "R2/R4 US and Canada rejected NSR sovereignty; recognition denied and Russia framed as the isolated outlier"
              ]
            },
            {
              "goalId": "lomonosov-shelf-claim",
              "description": "Secure Lomonosov Ridge as tied to the Russian shelf; treat Canadian/Danish claims as invalid.",
              "priority": "high",
              "status": "partial",
              "evidence": [
                "R3-R4 trilateral Lomonosov delimitation track with Canada and Denmark kept alive, CLCS-based, Hans Island spirit",
                "No validation of Russian primacy; Denmark's shelf recognized as live"
              ]
            },
            {
              "goalId": "china-full-council-member",
              "description": "Push China as a full Arctic Council member state.",
              "priority": "medium",
              "status": "failed",
              "evidence": [
                "R2-R4 entire Western/Nordic bloc denied China membership; China itself conceded the point"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-canada",
          "selfRating": 3.6,
          "satisfaction": 0.66,
          "agreementsWon": 6,
          "redLinesCrossedAgainstUs": 1,
          "goals": [
            {
              "goalId": "nwp-internal-waters",
              "description": "Preserve the Northwest Passage as Canadian internal waters, retaining regulatory control even if ice-free.",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "R3 Canada ACA 2.0 face-saving formula: transit by standing consent, neither side concedes legal characterization",
                "R4 Canada closing: NWP remains Canadian internal waters, red line held"
              ]
            },
            {
              "goalId": "restore-arctic-leadership",
              "description": "Restore Canada's place as an international Arctic leader and broker.",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "R3-R4 Canada positioned as message-broker to Moscow/Beijing and co-lead of the Nordic-Canadian CLCS caucus",
                "R4 moved the table from statements to structure"
              ]
            },
            {
              "goalId": "beaufort-141-meridian",
              "description": "Resolve the Beaufort Sea boundary on the 141st meridian, blocking US equidistance and pre-resolution leases.",
              "priority": "medium",
              "status": "partial",
              "evidence": [
                "R3-R4 agreement on Beaufort risk-reduction talks; no final line drawn, no US leases issued"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-china",
          "selfRating": 2.5,
          "satisfaction": 0.44,
          "agreementsWon": 2,
          "redLinesCrossedAgainstUs": 1,
          "goals": [
            {
              "goalId": "council-membership-or-enhanced-observer",
              "description": "Elevate from observer to full Arctic Council member, or secure guaranteed enhanced observer access as fallback.",
              "priority": "critical",
              "status": "failed",
              "evidence": [
                "R2-R4 membership denied by US, Finland, Denmark, Canada, Norway",
                "R4 China conceded membership and sought written observer access to working groups; that access was not granted"
              ]
            },
            {
              "goalId": "fon-chinese-vessels-nsr",
              "description": "Guarantee freedom of navigation and non-discriminatory passage for Chinese vessels along the NSR.",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "R3 China co-finances NSR icebreakers/ports for guaranteed non-discriminatory transit",
                "R4 Russia partnership on non-discriminatory transit held firm and deepened"
              ]
            },
            {
              "goalId": "polar-silk-road-investment-access",
              "description": "Advance the Polar Silk Road and secure investment/resource access in Nordic economies and Greenland.",
              "priority": "high",
              "status": "partial",
              "evidence": [
                "R3 Norwegian research center, LNG/minerals, Finnish mine-water offers tabled",
                "R4 offers remained on the table, none accepted; Silk Road firm only with Russia"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-norway",
          "selfRating": 3.7,
          "satisfaction": 0.68,
          "agreementsWon": 5,
          "redLinesCrossedAgainstUs": 1,
          "goals": [
            {
              "goalId": "svalbard-eez-recognition",
              "description": "Secure recognition that the maritime zone around Svalbard is a Norwegian EEZ; block any foreign patrol, license, or regulation of it.",
              "priority": "critical",
              "status": "partial",
              "evidence": [
                "R2-R4 Norway held the EEZ firm, unpatrolled and unlicensed by any foreign fleet",
                "R4 Norway acknowledged the legal characterization dispute persisted and was not resolved; Russia/China contested it"
              ]
            },
            {
              "goalId": "svalbard-fisheries-management",
              "description": "Formalize science-based Svalbard fisheries management with published quotas while keeping the Joint Fisheries Commission with Russia running.",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "R3 Norway tables Svalbard Fisheries Protection Zone management arrangement",
                "R4 working understanding reached; 50-year Joint Fisheries Commission continues uninterrupted"
              ]
            },
            {
              "goalId": "low-tension-nato-framework",
              "description": "Keep the High North low-tension via a Nordic-NATO framework and de-escalate US-Russia-China friction.",
              "priority": "medium",
              "status": "partial",
              "evidence": [
                "R2-R4 Norway aligned Nordic/NATO bloc and kept a Russia fisheries channel open",
                "Great-power NSR and militarization gaps remained"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-denmark",
          "selfRating": 4.0,
          "satisfaction": 0.75,
          "agreementsWon": 5,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "lomonosov-shelf-resolution",
              "description": "Advance Greenland's Lomonosov Ridge continental-shelf claim toward peaceful, CLCS-based resolution.",
              "priority": "critical",
              "status": "partial",
              "evidence": [
                "R3-R4 trilateral Lomonosov track with Canada and Russia launched, CLCS-based, Hans Island spirit",
                "Greenland's shelf rights recognized as live until the three resolve them; not yet delimited"
              ]
            },
            {
              "goalId": "no-chinese-military-greenland",
              "description": "Bar any Chinese military presence on or around Greenland; keep near-Arctic status distinct from membership.",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "R2-R4 Denmark reaffirmed the line each round; China sought only civilian investment and conceded membership; red line held throughout"
              ]
            },
            {
              "goalId": "unified-voice-indigenous-inclusion",
              "description": "Present a unified Kingdom-Greenland voice and secure meaningful indigenous inclusion in Arctic decisions.",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "R3-R4 Sami-and-Inuit inclusion protocol takes shape with Canada, Norway, Finland",
                "R4 'Greenland speaks for Greenland' echoed across the table"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-finland",
          "selfRating": 3.9,
          "satisfaction": 0.72,
          "agreementsWon": 5,
          "redLinesCrossedAgainstUs": 1,
          "goals": [
            {
              "goalId": "inclusive-council-block-china",
              "description": "Anchor an inclusive all-eight Arctic Council, block Chinese membership, and reject an exclusive Arctic Five.",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "R3 Finland revives the Arctic Eight with a standing SAR/spill and joint science track",
                "R4 observers welcome but Chinese membership blocked; no Arctic Five that sidelines Finland/Sweden/Iceland"
              ]
            },
            {
              "goalId": "sami-indigenous-inclusion",
              "description": "Protect Sami rights and secure a binding indigenous-inclusion protocol.",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "R3-R4 Sami-and-Inuit inclusion protocol advanced with Denmark, Canada, Norway"
              ]
            },
            {
              "goalId": "russia-bridge-broker",
              "description": "Use Finland's channel to bridge Russia into low-politics Arctic dialogue while holding the security line.",
              "priority": "medium",
              "status": "partial",
              "evidence": [
                "R3-R4 Finland offers to broker SAR/science with Moscow and proposes reconvening the Arctic Eight in Rovaniemi within six months",
                "Bridge limited to low-politics; wider NSR/militarization gaps unresolved"
              ]
            }
          ]
        }
      ],
      "convenerReport": {
        "headline": "Trondheim produced a scaffolding of Western and pan-Arctic cooperation tracks but no binding settlement, leaving the Sino-Russian bloc isolated and the core sovereignty disputes unresolved.",
        "summary": "The conference converted opening positions into concrete near-agreements on search-and-rescue, science, fisheries management, indigenous inclusion, and delimitation processes, but sealed none of them as binding text. A cohesive NATO/Nordic bloc formed around law, restraint, and blocking Chinese Council membership, while Russia and China held firm on the NSR and Polar Silk Road and left as the self-described outliers. The sharpest fault lines held to the end: the US-Canada Northwest Passage status (finessed by a face-saving cooperative-transit formula rather than resolved), Russia's NSR sovereignty versus Western freedom of navigation, the Svalbard EEZ characterization, the Lomonosov Ridge overlaps, and China's demand for guaranteed Arctic access. What broke through was the low-politics agenda, where trust was cheapest; what stalled was every question touching sovereignty, jurisdiction, and membership.",
        "keyOutcomes": [
          "US-Canada cooperative-transit formula (Arctic Cooperation Agreement 2.0): NWP passage by standing consent plus Beaufort risk-reduction talks, with neither side conceding its legal characterization.",
          "Finland's all-eight Arctic Council revival with a standing SAR and spill-response mechanism and a de-conflicted joint science program, to reconvene in Rovaniemi within six months.",
          "Trilateral Lomonosov Ridge delimitation track (Denmark-Canada-Russia), CLCS-based and bilateral in the Hans Island spirit, with Greenland's shelf rights recognized as live.",
          "Norway's Svalbard Fisheries Protection Zone management arrangement with published quotas, alongside continuity of the 50-year Joint Fisheries Commission with Russia.",
          "A Sami-and-Inuit indigenous-inclusion protocol taking shape among Denmark, Canada, Norway, and Finland, plus a Greenland-led circumpolar SAR/science framework open to all delegations."
        ],
        "unresolved": [
          "Legal status of the Northern Sea Route: Russia's Article 234 sovereignty claim versus the US/Western international-strait and freedom-of-navigation position.",
          "Legal status of the Northwest Passage as Canadian internal waters versus an international strait (operationalized but not resolved).",
          "Characterization of the maritime zone around Svalbard as a Norwegian EEZ, contested by Russia and China.",
          "Final Lomonosov Ridge delimitation among Russia, Canada, and Denmark/Greenland, and the Beaufort Sea boundary line.",
          "China's demand for guaranteed, written enhanced-observer access (membership blocked), and the broader Arctic militarization and sanctions questions."
        ]
      }
    }
  ]
};
