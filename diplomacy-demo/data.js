window.DIPLOMACY_SNAPSHOT_DEMO = {
  "generatedAt": "2026-07-20T18:17:03.000Z",
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
    },
    {
      "id": "scenario-centralasia-iscne",
      "title": "Central Asia — The Fergana Valley Crisis",
      "domain": "geopolitical",
      "status": "active",
      "shortDescription": "Seven-party UN dialogue on the Fergana Valley crisis (Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Russia, China, India): disputed borders and exclaves, Syr Darya water allocation, the Roghun Dam and Kyrgyz winter power, CSTO/SCO security overlap, ISIS-K/extremism spillover from Afghanistan, and Russian-Chinese-Indian influence competition. Adapted from an academic crisis-negotiation exercise."
    },
    {
      "id": "scenario-cyprus-iscne",
      "title": "Cyprus — Reunification Talks",
      "domain": "geopolitical",
      "status": "active",
      "shortDescription": "Six-party UN-mediated Cyprus talks (Republic of Cyprus, Turkish Republic of Northern Cyprus, Greece, Turkey, United Kingdom, United States): bi-zonal federation vs. two-state 'sovereign equality', territory (Varosha, Morphou, the Green Line), property claims, security guarantees and UNFICYP, offshore gas in the Cypriot EEZ, and EU status. Adapted from an academic crisis-negotiation exercise."
    },
    {
      "id": "scenario-scs-iscne",
      "title": "South China Sea — Crisis Talks",
      "domain": "geopolitical",
      "status": "active",
      "shortDescription": "Nine-party UN/ASEAN-convened South China Sea talks (China, United States, Philippines, Vietnam, Malaysia, Brunei, Indonesia, India, Japan): competing Spratly/Paracel/Scarborough claims, the UNCLOS status of reclaimed artificial islands, freedom of navigation and FONOPs, oil/gas and fisheries, militarization and land reclamation, the 2016 arbitration award, and a binding Code of Conduct. Adapted from an academic crisis-negotiation exercise."
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
    },
    {
      "id": "sess-centralasia-iscne-01",
      "title": "Central Asia Dialogue — Ashgabat (7-party, Fergana Valley)",
      "description": "A UN Special Representative convenes seven delegations at UNRCCA (Ashgabat) after the Fergana Valley — shared by Uzbekistan, Kyrgyzstan and Tajikistan and dependent on the Syr Darya — again edges toward the kind of armed clash seen in 2022. Three plenary rounds (opening, bargaining & coalitions, closing) surface fault lines over borders, transboundary water, hydropower, energy emergencies, counter-extremism, and great-power entanglement. Each delegation negotiates from its own privileged instructions.",
      "mode": "negotiation",
      "status": "concluded",
      "currentRound": 3,
      "createdAt": "2026-03-02T09:00:00.000Z",
      "concludedAt": "2026-03-02T13:12:00.000Z",
      "parties": [
        {
          "teamTwinName": "diplomacy-team-kazakhstan",
          "displayName": "Kazakhstan",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-uzbekistan",
          "displayName": "Uzbekistan",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-kyrgyzstan",
          "displayName": "Kyrgyzstan",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-tajikistan",
          "displayName": "Tajikistan",
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
          "teamTwinName": "diplomacy-team-china",
          "displayName": "China",
          "side": "right",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-india",
          "displayName": "India",
          "side": "right",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        }
      ],
      "rules": {
        "maxRounds": 3,
        "roundTimeoutMs": 120000,
        "autoAdvance": false,
        "procedureStyle": "plenary-with-caucus",
        "sidebarsAllowed": true,
        "sidebarDisclosure": "fact-only",
        "caucusReportBack": true,
        "rightOfReply": true,
        "chairCanSilence": false,
        "coalitionsVisible": true,
        "openerPartyTwin": "diplomacy-team-kazakhstan",
        "rotateOpener": true
      },
      "scoreboard": [
        {
          "teamTwinName": "diplomacy-team-kazakhstan",
          "satisfaction": 0.85,
          "agreementsWon": 4,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-uzbekistan",
          "satisfaction": 0.8,
          "agreementsWon": 4,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-kyrgyzstan",
          "satisfaction": 0.72,
          "agreementsWon": 4,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-tajikistan",
          "satisfaction": 0.55,
          "agreementsWon": 3,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-russia",
          "satisfaction": 0.34,
          "agreementsWon": 1,
          "redLinesCrossed": 2
        },
        {
          "teamTwinName": "diplomacy-team-china",
          "satisfaction": 0.88,
          "agreementsWon": 4,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-india",
          "satisfaction": 0.48,
          "agreementsWon": 3,
          "redLinesCrossed": 2
        }
      ],
      "moves": [
        {
          "id": "sess-centralasia-iscne-01-mv000",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-kazakhstan",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "Kazakhstan thanks the SRSG and UNRCCA for convening us. We come as a neighbor invested in one goal above all: de-escalation. The 2022 Kyrgyz-Tajik clashes, three years of drought, and 110 kilometers of contested frontier demand cooler heads, not new ultimatums. Our headline priorities are three. First, a practical de-escalation framework that restores calm and the status quo ante on demarcation, built through dialogue rather than binding commitments imposed at one summit. Second, mutually respectful management of shared Syr Darya and Amu Darya waters, a resource whose stewardship is a matter of sovereignty for every state here. Third, connectivity: expanded rail, pipeline, and Middle Corridor links that make our commodities and yours flow to markets. Kazakhstan will decide its own partners freely, and we invite Uzbekistan, China, and India to build these bridges with us. We are here to broker, not to dictate.",
          "tacticsApplied": [
            "sovereignty-assertion",
            "principled-bargaining-frame",
            "coalition-building",
            "environmental-frame"
          ],
          "createdAt": "2026-03-02T09:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv001",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-uzbekistan",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "Uzbekistan thanks the SRSG and welcomes this dialogue in a spirit of good neighborliness. Our people share the Fergana Valley's soil, water, and future, and Tashkent comes to de-escalate, not to inflame. Three principles frame our approach. First, on borders: the existing frontier is settled and sovereign; we support confidence-building measures and a return to the status quo, not reopening lines that history and our foreign ministers have already fixed. Second, on water: fresh water is the lifeblood of our farmers and our security. We favor collaborative, equitable management of the Syr Darya and stand ready to import and trade resources with our neighbors. Third, on prosperity: lower trade barriers, open energy corridors, and joint counterterrorism serve every delegation here. Uzbekistan seeks working frameworks, not hasty final deals. We look to Kazakhstan and all partners to build regional stability together.",
          "tacticsApplied": [
            "sovereignty-assertion",
            "principled-bargaining-frame",
            "coalition-building",
            "environmental-frame"
          ],
          "createdAt": "2026-03-02T09:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv002",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-kyrgyzstan",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "Kyrgyzstan thanks the Secretary-General and the SRSG for convening us, and pledges full support for this UN-led mediation. We come to de-escalate. Our people still bear the scars of September 2022; over one hundred thousand were displaced. Our headline priority is a swift return to, and locking-in of, the status quo demarcation across the disputed Fergana frontier, including exclaves. Kyrgyz sovereign territory is not negotiable, and Kyrgyz water is the lifeblood of our people, land, and livestock. We anchor firmly on both. That said, we come as builders. We welcome equitable, science-based water stewardship and meaningful ICWC reform, and we value confidence-building with our neighbors, particularly Uzbekistan and Kazakhstan, with whom we share deep regional kinship. We are open to modern water-management technology and to infrastructure partnerships that respect Kyrgyz labor and sovereignty. Let us reason together as principled partners.",
          "tacticsApplied": [
            "anchoring",
            "sovereignty-assertion",
            "coalition-building",
            "principled-bargaining-frame"
          ],
          "createdAt": "2026-03-02T09:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv003",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-tajikistan",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "Distinguished colleagues, Tajikistan comes to Ashgabat to de-escalate the Fergana Valley crisis and restore calm. Our headline priorities are three: the inviolability of Tajik territorial integrity, a return to the pre-crisis status quo on demarcation, and the protection of our water as a sovereign resource. Let me be clear from the outset: no Tajik territory will be traded, and no final border settlement can be concluded at this summit — such matters belong to later foreign-minister talks. We favor incremental adjustments only, secured by verifiable, neutral-observer confidence-building measures and reciprocal troop limits. On water, we welcome a genuine, mutual Central Asian resource-management framework and outside technical assistance. We come as constructive partners in regional integration, trade, and counter-extremism cooperation. We look to Uzbekistan, Kazakhstan, and China as partners in building a stable, Central Asian-centered order. Tajikistan seeks frameworks, not ultimatums.",
          "tacticsApplied": [
            "anchoring",
            "sovereignty-assertion",
            "verification-demand",
            "principled-bargaining-frame"
          ],
          "createdAt": "2026-03-02T09:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv004",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-russia",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "Russia thanks the SRSG and welcomes this dialogue among neighbors. Central Asia is a region of deep, shared history, and the Russian Federation comes as a partner in peace. We are guided by three priorities. First, security: the tragedy of September 2022 must never repeat, and Russia, as the region's long-standing security guarantor and through its CSTO commitments, stands ready to help stabilize the Fergana Valley. Second, water and energy: we favor collaborative, peaceful management of the Syr Darya and Amu Darya, and we offer a Russian-technology Caspian desalination facility to ease scarcity for our western neighbors. Third, prosperity through integration: an expanded Eurasian Economic Union open to all who wish to join. Borders should be resolved peacefully, by consensus, never by force. We reject any framework that divides our common space or excludes the very powers that keep it stable. Russia stands with its CSTO partners.",
          "tacticsApplied": [
            "principled-bargaining-frame",
            "side-payment",
            "coalition-building",
            "red-line-signaled"
          ],
          "createdAt": "2026-03-02T09:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv005",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-china",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "China welcomes this dialogue and salutes our Central Asian neighbors' courage in seeking calm after the tragedy of 2022. Our headline priority is simple: stability through development, guided by the Central Asian states themselves. Real peace in the Fergana Valley will be built by its own peoples, not imposed from outside. We anchor on three points. First, on borders, respect existing frontiers and resolve differences peacefully, without haste or humiliation; a monitoring presence is welcome only under a neutral, mutually approved lead. Second, on water and energy, China offers concrete help now: technical expertise, storage, conservation, hydropower construction, and Belt and Road investment to end the winter-power and drought emergencies. Third, climate and extremism demand shared, practical cooperation. We stand with Kazakhstan's constructive vision and value Russia's multilateral engagement. China seeks partners in prosperity, not patrons of dependency. We are ready to build.",
          "tacticsApplied": [
            "anchoring",
            "conditional-offer",
            "coalition-building",
            "side-payment"
          ],
          "createdAt": "2026-03-02T10:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv006",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-india",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "Mr. Special Representative, distinguished delegations. India comes to Ashgabat as a friend of Central Asia and the world's largest democracy, seeking not primacy but partnership. The Fergana Valley's people deserve peace, water, and light in winter — not another September 2022. India anchors on three principles. First, a peaceful, comprehensive, and just settlement of the disputed frontier, including exclaves like Vorukh, guided by international law and the sovereign choices of the states concerned. Second, fair and equitable transboundary water arrangements, and reform of a paralyzed ICWC, reconciling Roghun and Kyrgyz winter power with downstream security. Third, strategic autonomy: every Central Asian nation must remain free to choose its own path, partners, and security architecture. India offers concrete help — technical assistance, energy and infrastructure support, trade, and security cooperation — to any willing partner. We value our longstanding friendship with Russia and welcome all who negotiate in good faith. India is ready to build.",
          "tacticsApplied": [
            "anchoring",
            "principled-bargaining-frame",
            "appeal-to-law",
            "coalition-building"
          ],
          "createdAt": "2026-03-02T10:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv007",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-kazakhstan",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "Kazakhstan hears convergence. To China: if you commit BRI financing to a Middle Corridor rail-and-road branch built with Kyrgyz and Kazakh labor under agreed technical supervision, Astana will open transit for your commodities to western Chinese provinces and co-develop pipeline repairs. To Uzbekistan: if Tashkent grants us reciprocal free-transit and lower tariffs, we will facilitate Uzbek exports across Kazakh territory to that same corridor — a package binding connectivity to prosperity for both our peoples. To Kyrgyzstan and Tajikistan: we back science-based Syr Darya stewardship and ICWC reform, and offer technical cooperation, provided each state's sovereignty over its own water is respected — that principle is non-negotiable for Kazakhstan, whatever the pressure. To India: we welcome your technical assistance on energy, agriculture, and IT. To Russia: we value neighborly trade, but Kazakhstan chooses its own architecture; EAEU or CSTO expansion is not on our table. We broker; we do not subordinate.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "side-payment",
            "red-line-signaled",
            "coalition-building"
          ],
          "createdAt": "2026-03-02T10:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv008",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-uzbekistan",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "Tashkent welcomes Kazakhstan's connectivity vision and proposes a concrete package: if Kazakhstan supplies water for our mining and agriculture, Uzbekistan will share mining expertise and route oil and gas via Kazakh corridors to the PRC. China's development offer is constructive; but let us be candid — BRI works on Uzbek terms, built by Uzbek hands, so we welcome technical partnership while declining export-bank dependency. To Kyrgyzstan and Tajikistan: our frontier is settled and sovereign — that red line stands — yet if you accept mutual confidence-building measures and reciprocal troop limits, Uzbekistan will offer trade frameworks and sell surplus jets, helicopters, and artillery to bolster your defense. On water, one point is non-negotiable: Uzbekistan imports, but never exports. Russia's desalination interest is noted, though security must remain sovereign, not CSTO-bound. We align with Kazakhstan, China, and India.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "side-payment",
            "red-line-signaled"
          ],
          "createdAt": "2026-03-02T10:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv009",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-kyrgyzstan",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "Kyrgyzstan builds on Kazakhstan's and Uzbekistan's de-escalation frame. To Kazakhstan: if you back our locked-in status-quo demarcation and Middle Corridor access for Kyrgyz commodities, we will discuss sharing our winter reservoir surplus under mutually agreed conditions. To Uzbekistan: if you formalize reciprocal confidence-building and neutral-observer monitoring along our shared Fergana lines, we will support your equitable Syr Darya management proposals. To China: we welcome your storage, conservation, and hydropower offer, and will host jointly-funded BRI works using predominantly Kyrgyz labor with your technical supervisors. Two red lines stand firm: no surrender of any sovereign Kyrgyz territory, and no export of Kyrgyz water beyond our borders. To Tajikistan: bring verifiable troop pull-backs before demarcation talk. To Russia: we appreciate partnership, but no foreign troops enter Kyrgyzstan. Nothing here is final; all refers to our capital.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "coalition-building",
            "red-line-signaled"
          ],
          "createdAt": "2026-03-02T10:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv010",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-tajikistan",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "Tajikistan thanks its partners and now speaks in concrete terms. To Uzbekistan: if Tashkent openly and fully backs Tajik border claims against Kyrgyzstan, Dushanbe will reciprocally recognize Uzbek frontier claims and launch combined CT/COIN training against ISIS-K and IMU as early as next year, plus expanded trade in agriculture, minerals, and gas. That is our package — issue-linked and mutual. To Kyrgyzstan: we offer reciprocal, neutral-observer-verified troop caps — platoon-level at outposts, battalion within 25 km absent notification — but our territory is not for trade. To China: we welcome BRI water and hydropower technical assistance under a genuine Central Asian resource plan that keeps Tajik water sovereign. To India: we value your appeal to law, yet partnership deepens only if you publicly recognize Tajik sovereignty and border claims. And plainly, to Russia: no foreign military personnel will observe or 'stabilize' inside Tajikistan. We align with Uzbekistan, China, Kazakhstan, and India.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "red-line-signaled",
            "coalition-building"
          ],
          "createdAt": "2026-03-02T11:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv011",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-russia",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "Russia hears convergence: Kazakhstan, Uzbekistan, Kyrgyzstan, and Tajikistan all affirm the status quo on borders. Good — that is our red line too: existing frontiers stand, resolved by consensus, never by force. Now concrete packages. To Tajikistan and Kyrgyzstan: if you lock in status-quo demarcation and reciprocal troop limits, Russia will field the Fergana monitoring mission through our CSTO framework and extend counterterrorism and water-infrastructure support to Tajik borders. To Uzbekistan: if we jointly build pipeline capacity to western markets on cost- and revenue-sharing terms, Russia offers the Caspian desalination facility supplying western Uzbekistan and Kazakhstan — and EAEU accession for Tashkent and Dushanbe. To Kazakhstan: modern arms on favorable credit if we deepen EAEU energy integration. We caution against any resource or security architecture that excludes the guarantors keeping this space stable. Russia values China's engagement and India's friendship. Our coalition: Tajikistan, Kyrgyzstan, Kazakhstan.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "side-payment",
            "red-line-signaled"
          ],
          "createdAt": "2026-03-02T11:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv012",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-china",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "China notes broad consensus — Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan all favor frameworks and status-quo demarcation, not final settlements rushed at one summit. We build on that. To Kyrgyzstan: if Bishkek accepts a Belt and Road package ending the winter-power emergency — hydropower construction, grid modernization, favorable equipment terms — China commits financing this year. To Tajikistan: counterterrorism and Roghun technical support, if paired with our neutral-lead Fergana monitoring model. To Uzbekistan and Kazakhstan: cyber-security cooperation and Middle Corridor connectivity, linked to water technology we can deliver now. One caution, respectfully, to India's call for a 'comprehensive' Vorukh settlement: reopening fixed lines under outside legal formulas risks the very humiliation and instability our neighbors warned against. Central Asians should decide. We welcome Russia's multilateral spirit, though desalination promises must meet delivery. China aligns with Kazakhstan and Kyrgyzstan.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "coalition-building",
            "side-payment"
          ],
          "createdAt": "2026-03-02T11:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv013",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-india",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "India thanks Kazakhstan and Tajikistan for their constructive frames. To Tajikistan: if Dushanbe deepens counter-extremism cooperation against ISIS-K and IMU spillover from Afghanistan, India will provide expanded joint training and air exercises, security assistance, and technical support toward Roghun's completion — linking your hydropower needs directly to shared security. To Kazakhstan: we embrace your de-escalation framework and Middle Corridor vision, and offer a bilateral free-trade track plus arms modernization to any willing partner. To Uzbekistan: tech-sector training and careers for young Uzbeks in return for open energy corridors and trade. On strategic autonomy India holds a firm red line — no Central Asian state should be pressured to remain in any bloc against its will; every nation must freely choose its partners and security architecture. We value Russia's longstanding friendship, yet lasting stability flows from Central Asian-led choices, not dependency on a single external patron. India stands with Tajikistan, Kazakhstan, Uzbekistan, and Kyrgyzstan.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "side-payment",
            "red-line-signaled"
          ],
          "createdAt": "2026-03-02T11:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv014",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-kazakhstan",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Kazakhstan is encouraged. Real convergence emerged: every Central Asian state affirmed de-escalation and the status quo ante on demarcation, and none rushed a final settlement — exactly our aim. We can support four understandings: a non-binding de-escalation framework with reciprocal, neutral-observer confidence-building; science-based Syr Darya stewardship and ICWC reform that respects each state's sovereignty over its own water; a Middle Corridor connectivity package with Uzbekistan and China; and technical cooperation with India on energy, agriculture, and IT. Gaps remain on Vorukh's final status and on who leads any monitoring mission. Our red lines held: no external power dictates our resources or partners, and we signed nothing binding here. Way forward: refer these understandings to Foreign-Minister-led talks among the Central Asian states, advancing connectivity and water tracks bilaterally in parallel.",
          "tacticsApplied": [
            "principled-bargaining-frame",
            "coalition-building",
            "sovereignty-assertion",
            "issue-linkage"
          ],
          "createdAt": "2026-03-02T11:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv015",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-uzbekistan",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Tashkent leaves Ashgabat encouraged. Real convergence has emerged: every neighbor now affirms the status-quo frontier and confidence-building over rushed lines, and that we build frameworks, not final treaties. Uzbekistan can support Kazakhstan's Middle Corridor connectivity and our reciprocal water-for-expertise and energy-transit package; science-based Syr Darya stewardship and ICWC reform; neutral-observer CBMs and reciprocal troop limits with both Bishkek and Dushanbe, paired with surplus-equipment sales; and technical partnership with China on Uzbek terms. Gaps remain on ICWC's consensus reform and on external security blocs. Our red lines held fully: borders unchanged, Uzbek water never exported, no binding deals here, BRI on Uzbek terms. We will not take sides between neighbors — even-handed de-escalation serves all. Way forward: refer these frameworks to foreign ministers, keep the SRSG's channel open, and convene a follow-up technical session.",
          "tacticsApplied": [
            "principled-bargaining-frame",
            "red-line-signaled",
            "issue-linkage",
            "coalition-building"
          ],
          "createdAt": "2026-03-02T12:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv016",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-kyrgyzstan",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Kyrgyzstan thanks the SRSG. Real progress: a shared consensus on de-escalation and status-quo demarcation, with Kazakhstan, Uzbekistan, and China as constructive partners. We can support neutral-observer confidence-building along the Fergana lines, science-based Syr Darya stewardship and ICWC reform, and China's Belt and Road hydropower and grid package built with Kyrgyz labor to end our winter-power emergency. We welcome Uzbekistan's confidence-building and Kazakhstan's Middle Corridor access. Gaps remain: Tajikistan has offered no verifiable troop pull-back, so demarcation talk with Dushanbe stays frozen. Our red lines held firmly: no sovereign Kyrgyz territory surrendered, no Kyrgyz water exported, and no foreign troops on Kyrgyz soil. Way forward: refer these understandings to foreign-minister follow-on talks, stand up neutral monitoring first, and sequence water and border work through verified steps. Nothing here is binding; all returns to Bishkek.",
          "tacticsApplied": [
            "red-line-signaled",
            "coalition-building",
            "verification-demand",
            "principled-bargaining-frame"
          ],
          "createdAt": "2026-03-02T12:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv017",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-tajikistan",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Tajikistan welcomes real convergence: a shared commitment to status-quo demarcation, frameworks over rushed final deals, and neutral-observer confidence-building. We can support science-based Syr Darya stewardship under a genuine Central Asian resource plan that keeps Tajik water sovereign, China's BRI water and Roghun technical assistance, and combined CT/COIN cooperation against ISIS-K and IMU. Two gaps remain. Uzbekistan has not yet openly backed our claims against Kyrgyzstan, so recognition of Uzbek frontiers stays conditional; and deeper Indian partnership awaits public recognition of Tajik sovereignty. Our red lines held: no Tajik territory traded, no final settlement signed here, and no foreign military personnel monitoring inside Tajikistan — any Fergana mission must be neutral, not CSTO-led. Way forward: adopt these as non-binding frameworks, stand up verifiable reciprocal troop caps now, and refer all substantive terms to foreign-minister talks in Dushanbe.",
          "tacticsApplied": [
            "principled-bargaining-frame",
            "red-line-signaled",
            "conditional-offer",
            "verification-demand"
          ],
          "createdAt": "2026-03-02T12:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv018",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-russia",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Russia welcomes the convergence this dialogue achieved: every neighbor affirms status-quo borders and rejects force. That was our red line, and it held. We can support science-based Syr Darya stewardship, ICWC reform, reciprocal troop limits, and neutral-verified confidence-building along the Fergana lines. Russia's offers stand: the Caspian desalination facility for western Kazakhstan and Uzbekistan, EAEU accession open to Tashkent and Dushanbe, pipeline cost- and revenue-sharing, and counterterrorism and water-infrastructure support. Gaps remain. Lasting security in this space cannot be outsourced to distant patrons or resource corridors that bypass the very guarantors who keep it stable; Russia will not accept architecture built to exclude it. The way forward is a Russia-brokered collaborative resource-and-security dialogue, advanced through bilateral foreign-ministry tracks. Nothing final need be signed here. Russia stands with Tajikistan, Kyrgyzstan, and Kazakhstan.",
          "tacticsApplied": [
            "red-line-signaled",
            "principled-bargaining-frame",
            "side-payment",
            "issue-linkage"
          ],
          "createdAt": "2026-03-02T12:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv019",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-china",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "China leaves Ashgabat satisfied that wisdom prevailed. The consensus we sought took hold: every Central Asian state affirmed status-quo frontiers, frameworks over rushed final treaties, and Central-Asian-led choices. China can support neutral-observer confidence-building under a mutually approved lead — never an outside bloc; science-based Syr Darya stewardship that keeps each state's water sovereign and open to shared regional use; and our Belt and Road packages ending Kyrgyzstan's winter-power emergency and advancing Tajik hydropower, Uzbek and Kazakh connectivity, and cyber cooperation — built on your terms, by your hands. Gaps rightly remain on Vorukh and monitoring leadership; these are for you to decide, not for outside legal formulas to impose. Our principle held: no settlement dictated from abroad. Way forward: adopt non-binding frameworks, refer all substance to foreign ministers, and let China deliver bilaterally, now.",
          "tacticsApplied": [
            "principled-bargaining-frame",
            "coalition-building",
            "conditional-offer",
            "side-payment"
          ],
          "createdAt": "2026-03-02T12:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-mv020",
          "sessionId": "sess-centralasia-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-india",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "India welcomes real progress. We can support the shared de-escalation framework, reciprocal neutral-observer troop caps, science-based Syr Darya stewardship, and ICWC reform. We warmly note that Kazakhstan, Uzbekistan, and Kyrgyzstan each affirmed their freedom to choose their own architecture — declining bloc expansion and single-patron dependency. India's red lines held: no state was forced to remain in any alliance against its will, and no external actor was crowned regional hegemon. Gaps remain on final demarcation, which rightly belongs to later foreign-minister talks, and on financing genuinely Central Asian-led, not dependency-driven, development. Our way forward: convert convergence into concrete bilateral tracks — joint IAF-Tajik air exercises and counter-extremism cooperation with Dushanbe, Roghun and energy technical assistance, free-trade and arms-modernization offers to willing partners, and tech-sector opportunities for young Uzbeks. India stands ready to build, partner by partner.",
          "tacticsApplied": [
            "principled-bargaining-frame",
            "coalition-building",
            "conditional-offer",
            "red-line-signaled"
          ],
          "createdAt": "2026-03-02T13:00:00.000Z"
        }
      ],
      "tactics": [
        {
          "id": "sess-centralasia-iscne-01-det000",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-kazakhstan",
          "tacticId": "sovereignty-assertion",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv000"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det001",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-kazakhstan",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv000"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det002",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-kazakhstan",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv000"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det003",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-kazakhstan",
          "tacticId": "environmental-frame",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv000"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det004",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-uzbekistan",
          "tacticId": "sovereignty-assertion",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv001"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det005",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-uzbekistan",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv001"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det006",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-uzbekistan",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv001"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det007",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-uzbekistan",
          "tacticId": "environmental-frame",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv001"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det008",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-kyrgyzstan",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv002"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det009",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-kyrgyzstan",
          "tacticId": "sovereignty-assertion",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv002"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det010",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-kyrgyzstan",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv002"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det011",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-kyrgyzstan",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv002"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det012",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-tajikistan",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv003"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det013",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-tajikistan",
          "tacticId": "sovereignty-assertion",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv003"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det014",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-tajikistan",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv003"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det015",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-tajikistan",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv003"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det016",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv004"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det017",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv004"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det018",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv004"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det019",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv004"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T09:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det020",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv005"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det021",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv005"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det022",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv005"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det023",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv005"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det024",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv006"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det025",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv006"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det026",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv006"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det027",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv006"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det028",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-kazakhstan",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv007"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det029",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-kazakhstan",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv007"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det030",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-kazakhstan",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv007"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det031",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-kazakhstan",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv007"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det032",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-kazakhstan",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv007"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det033",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-uzbekistan",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv008"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det034",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-uzbekistan",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv008"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det035",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-uzbekistan",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv008"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det036",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-uzbekistan",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv008"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det037",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-kyrgyzstan",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv009"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det038",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-kyrgyzstan",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv009"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det039",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-kyrgyzstan",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv009"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det040",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-kyrgyzstan",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv009"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T10:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det041",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-tajikistan",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv010"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det042",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-tajikistan",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv010"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det043",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-tajikistan",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv010"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det044",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-tajikistan",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv010"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det045",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv011"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det046",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv011"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det047",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv011"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det048",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv011"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det049",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv012"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det050",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv012"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det051",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv012"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det052",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv012"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det053",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv013"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det054",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv013"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det055",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv013"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det056",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv013"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det057",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-kazakhstan",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv014"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det058",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-kazakhstan",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv014"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det059",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-kazakhstan",
          "tacticId": "sovereignty-assertion",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv014"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det060",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-kazakhstan",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv014"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T11:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det061",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-uzbekistan",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv015"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det062",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-uzbekistan",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv015"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det063",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-uzbekistan",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv015"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det064",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-uzbekistan",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv015"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det065",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-kyrgyzstan",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv016"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det066",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-kyrgyzstan",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv016"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det067",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-kyrgyzstan",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv016"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det068",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-kyrgyzstan",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv016"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:12:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det069",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-tajikistan",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv017"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det070",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-tajikistan",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv017"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det071",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-tajikistan",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv017"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det072",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-tajikistan",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv017"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:24:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det073",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv018"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det074",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv018"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det075",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv018"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det076",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-russia",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv018"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:36:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det077",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv019"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det078",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv019"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det079",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv019"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det080",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv019"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T12:48:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det081",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv020"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T13:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det082",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv020"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T13:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det083",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv020"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T13:00:00.000Z"
        },
        {
          "id": "sess-centralasia-iscne-01-det084",
          "sessionId": "sess-centralasia-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-centralasia-iscne-01-mv020"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-02T13:00:00.000Z"
        }
      ],
      "tacticCounts": {
        "sovereignty-assertion": 5,
        "principled-bargaining-frame": 13,
        "coalition-building": 15,
        "environmental-frame": 2,
        "anchoring": 4,
        "verification-demand": 3,
        "side-payment": 9,
        "red-line-signaled": 12,
        "conditional-offer": 11,
        "appeal-to-law": 1,
        "issue-linkage": 10
      },
      "debriefs": [
        {
          "teamTwinName": "diplomacy-team-kazakhstan",
          "selfRating": 4.5,
          "satisfaction": 0.85,
          "agreementsWon": 4,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "deescalation-status-quo",
              "description": "Broker de-escalation and a return to status-quo demarcation via a non-binding framework, no final deal at summit",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "r3: 'every Central Asian state affirmed de-escalation and the status quo ante'; refer to FM-led talks"
              ]
            },
            {
              "goalId": "resource-sovereignty",
              "description": "Protect Kazakh water/resource sovereignty; no power dictates partners or resources; decline CSTO/EAEU expansion",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "r2: 'EAEU or CSTO expansion is not on our table'; r3 red lines held: 'no external power dictates our resources'"
              ]
            },
            {
              "goalId": "middle-corridor-connectivity",
              "description": "Advance Middle Corridor rail/pipeline connectivity with Uzbekistan and Chinese BRI financing",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "r2 conditional BRI+transit offer to China; r3 'Middle Corridor connectivity package with Uzbekistan and China'"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-uzbekistan",
          "selfRating": 4.3,
          "satisfaction": 0.8,
          "agreementsWon": 4,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "borders-water-redlines",
              "description": "Keep borders fixed in perpetuity and never export Uzbek water; no binding deals",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "r3: 'borders unchanged, Uzbek water never exported, no binding deals here'"
              ]
            },
            {
              "goalId": "bri-on-uzbek-terms",
              "description": "Take Chinese technical partnership on Uzbek terms while declining export-bank loan dependency",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "r2: 'BRI works on Uzbek terms... declining export-bank dependency'; r3 'BRI on Uzbek terms'"
              ]
            },
            {
              "goalId": "even-handed-leverage",
              "description": "Stay even-handed between Kyrgyzstan and Tajikistan, offer CBMs+equipment, harvest intelligence",
              "priority": "medium",
              "status": "achieved",
              "evidence": [
                "r3: 'We will not take sides between neighbors'; CBMs+surplus-equipment sales offered to both"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-kyrgyzstan",
          "selfRating": 3.7,
          "satisfaction": 0.72,
          "agreementsWon": 4,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "territory-water-troops",
              "description": "Surrender no sovereign territory, export no water, admit no foreign troops; lock in status quo",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "r3: 'no sovereign Kyrgyz territory surrendered, no Kyrgyz water exported, no foreign troops on Kyrgyz soil'"
              ]
            },
            {
              "goalId": "china-winter-power-package",
              "description": "Secure Chinese BRI hydropower/grid package (Kyrgyz labor) to end winter-power emergency",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "r2 China commits financing this year; r3 'China's Belt and Road hydropower and grid package built with Kyrgyz labor'"
              ]
            },
            {
              "goalId": "tajik-demarcation-progress",
              "description": "Extract verifiable Tajik troop pull-back and advance demarcation with Dushanbe",
              "priority": "medium",
              "status": "failed",
              "evidence": [
                "r3: 'Tajikistan has offered no verifiable troop pull-back, so demarcation talk with Dushanbe stays frozen'"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-tajikistan",
          "selfRating": 3.0,
          "satisfaction": 0.55,
          "agreementsWon": 3,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "territory-water-no-russians",
              "description": "Cede no territory, keep water sovereign, and bar any Russian military personnel inside Tajikistan",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "r3: 'no Tajik territory traded... no foreign military personnel monitoring inside Tajikistan; any Fergana mission must be neutral, not CSTO-led'"
              ]
            },
            {
              "goalId": "uzbek-border-backing",
              "description": "Trade recognition of Uzbek frontiers for Uzbek open backing of Tajik claims against Kyrgyzstan",
              "priority": "high",
              "status": "failed",
              "evidence": [
                "r3: 'Uzbekistan has not yet openly backed our claims... so recognition of Uzbek frontiers stays conditional'; UZB stayed even-handed"
              ]
            },
            {
              "goalId": "china-india-partnerships",
              "description": "Deepen China BRI/Roghun support and India CT/air ties, conditioned on India recognizing Tajik claims",
              "priority": "medium",
              "status": "partial",
              "evidence": [
                "r3: China BRI/Roghun and CT/COIN supported; 'deeper Indian partnership awaits public recognition of Tajik sovereignty' (not given)"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-russia",
          "selfRating": 2.0,
          "satisfaction": 0.34,
          "agreementsWon": 1,
          "redLinesCrossedAgainstUs": 2,
          "goals": [
            {
              "goalId": "affirm-security-guarantor",
              "description": "Be affirmed as sole security guarantor with a Russia/CSTO-led Fergana monitoring mission",
              "priority": "critical",
              "status": "failed",
              "evidence": [
                "r3 consensus was neutral-observer monitoring, 'not CSTO-led' (TJK); KGZ 'no foreign troops'; monitoring lead unresolved but explicitly not Russian"
              ]
            },
            {
              "goalId": "eaeu-csto-expansion",
              "description": "Expand EAEU/CSTO, welcoming Tajikistan and Uzbekistan; keep allies inside the CSTO",
              "priority": "critical",
              "status": "failed",
              "evidence": [
                "r2 KAZ: 'EAEU or CSTO expansion is not on our table'; EAEU accession offers to Tashkent/Dushanbe not taken up; CSTO treated as weak guarantor"
              ]
            },
            {
              "goalId": "block-excluding-architecture",
              "description": "Block resource/security architecture that excludes Russia or routes China resource trade around it",
              "priority": "high",
              "status": "failed",
              "evidence": [
                "r2 UZB/KAZ agree to route oil/gas via Kazakh corridors to PRC excluding Russia; r3 Russia 'will not accept architecture built to exclude it' — yet that is the trajectory"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-china",
          "selfRating": 4.6,
          "satisfaction": 0.88,
          "agreementsWon": 4,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "no-comprehensive-settlement",
              "description": "Ensure no comprehensive border/water settlement; keep disputes frozen and states inward-focused",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "r3: frameworks not treaties, 'Gaps rightly remain on Vorukh and monitoring'; no binding settlement reached"
              ]
            },
            {
              "goalId": "bri-expansion",
              "description": "Expand BRI across the region (Kyrgyz power, Tajik hydropower, Kazakh/Uzbek connectivity, cyber)",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "r3: 'Belt and Road packages ending Kyrgyzstan's winter-power emergency and advancing Tajik hydropower, Uzbek and Kazakh connectivity, and cyber cooperation'"
              ]
            },
            {
              "goalId": "block-india-russia-lead",
              "description": "Deny India any leadership foothold and prevent Russian military reinsertion / neutralize CSTO",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "r3: monitoring under 'mutually approved lead — never an outside bloc'; no India role; Russia sidelined, CSTO treated defunct"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-india",
          "selfRating": 2.8,
          "satisfaction": 0.48,
          "agreementsWon": 3,
          "redLinesCrossedAgainstUs": 2,
          "goals": [
            {
              "goalId": "box-out-china",
              "description": "Blunt Chinese dominance and prevent China locking in bilateral deals with Kazakhstan/Uzbekistan",
              "priority": "critical",
              "status": "failed",
              "evidence": [
                "China secured Middle Corridor/connectivity/cyber with KAZ+UZB and region-wide BRI; India could not box out BRI centrality"
              ]
            },
            {
              "goalId": "reinvigorate-tajik-ties",
              "description": "Revive Tajik security relationship via joint IAF-Tajik air exercises and CT cooperation",
              "priority": "high",
              "status": "partial",
              "evidence": [
                "r3: 'joint IAF-Tajik air exercises and counter-extremism cooperation with Dushanbe' pursued bilaterally; but TJK withheld deeper partnership pending recognition India did not give"
              ]
            },
            {
              "goalId": "strategic-autonomy",
              "description": "Ensure no forced CSTO retention and no external hegemon crowned; states free to choose partners",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "r3: KAZ/UZB/KGZ 'declined bloc expansion and single-patron dependency'; 'no external actor was crowned regional hegemon'"
              ]
            }
          ]
        }
      ],
      "convenerReport": {
        "headline": "The Ashgabat summit produced broad non-binding convergence on de-escalation and status-quo borders but deferred every substantive settlement to later foreign-minister talks.",
        "summary": "All seven delegations affirmed a return to status-quo Fergana demarcation, neutral-observer confidence-building measures with reciprocal troop limits, science-based Syr Darya stewardship with ICWC reform, and Middle Corridor connectivity plus Chinese BRI energy packages — all explicitly framed as non-binding frameworks referred onward, not treaties. The central fault line ran between the Central Asian states and China (who converged on frozen disputes and Central-Asian-led choices) and Russia, which was rebuffed on EAEU/CSTO expansion, a Russia-led monitoring mission, and its bid to be reaffirmed as sole security guarantor. Talks stalled on Vorukh's final status, who leads any monitoring mission, and the Kyrgyz-Tajik track, where Dushanbe's refusal to offer verifiable troop pull-backs kept demarcation frozen. Tajikistan's leverage plays (Uzbek backing of its claims against Kyrgyzstan, Indian recognition of its border claims) both went unmet, and India could not blunt China's expanding bilateral footprint.",
        "keyOutcomes": [
          "Consensus on status-quo demarcation and a non-binding de-escalation framework, with all final terms referred to foreign-minister-led tracks.",
          "Agreement in principle on neutral-observer CBMs and reciprocal troop limits, and on science-based Syr Darya stewardship plus ICWC reform.",
          "Middle Corridor connectivity package (Kazakhstan-Uzbekistan-China) and region-wide Chinese BRI energy/hydropower/cyber packages advanced bilaterally.",
          "Every resource and water red line held: no water exports (UZB, KGZ), sovereignty over resources preserved (KAZ, TJK), no territory traded.",
          "Russia isolated: EAEU/CSTO expansion rejected, CSTO-led monitoring barred, and no foreign troops accepted in Kyrgyzstan or Tajikistan."
        ],
        "unresolved": [
          "Final status of Vorukh and the disputed exclaves — deferred, no settlement.",
          "Leadership of any Fergana monitoring mission (neutral lead agreed in principle, but not who).",
          "Kyrgyz-Tajik demarcation, frozen over Tajikistan's refusal to offer verifiable troop pull-backs.",
          "Consensus mechanism for ICWC reform and any binding water-allocation formula.",
          "Russia's security-guarantor role and the future of the CSTO, left contested and unaddressed."
        ]
      }
    },
    {
      "id": "sess-cyprus-iscne-01",
      "title": "Cyprus Crisis — Reunification Talks (6-party)",
      "description": "A UN Special Adviser convenes six delegations to seek a Cyprus settlement after decades of failed efforts (the 2004 Annan Plan, the 2017 Crans-Montana collapse). Three plenary rounds (opening, bargaining & coalitions, closing) test whether a bi-zonal, bi-communal federation is still reachable against the TRNC/Türkiye push for two-state sovereign equality, amid disputes over territory, property, security treaties, and EEZ gas. Each delegation negotiates from its own privileged instructions.",
      "mode": "negotiation",
      "status": "concluded",
      "currentRound": 3,
      "createdAt": "2026-03-03T09:00:00.000Z",
      "concludedAt": "2026-03-03T12:36:00.000Z",
      "parties": [
        {
          "teamTwinName": "diplomacy-team-cyprus",
          "displayName": "Republic of Cyprus",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-trnc",
          "displayName": "Turkish Republic of Northern Cyprus",
          "side": "right",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-greece",
          "displayName": "Greece",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-turkey",
          "displayName": "Turkey",
          "side": "right",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-uk",
          "displayName": "United Kingdom",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "displayName": "United States",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        }
      ],
      "rules": {
        "maxRounds": 3,
        "roundTimeoutMs": 120000,
        "autoAdvance": false,
        "procedureStyle": "plenary-with-caucus",
        "sidebarsAllowed": true,
        "sidebarDisclosure": "fact-only",
        "caucusReportBack": true,
        "rightOfReply": true,
        "chairCanSilence": false,
        "coalitionsVisible": true,
        "openerPartyTwin": "diplomacy-team-cyprus",
        "rotateOpener": true
      },
      "scoreboard": [
        {
          "teamTwinName": "diplomacy-team-us",
          "satisfaction": 0.62,
          "agreementsWon": 5,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-uk",
          "satisfaction": 0.6,
          "agreementsWon": 5,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-turkey",
          "satisfaction": 0.55,
          "agreementsWon": 4,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-trnc",
          "satisfaction": 0.5,
          "agreementsWon": 4,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-greece",
          "satisfaction": 0.47,
          "agreementsWon": 2,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-cyprus",
          "satisfaction": 0.44,
          "agreementsWon": 2,
          "redLinesCrossed": 0
        }
      ],
      "moves": [
        {
          "id": "sess-cyprus-iscne-01-mv000",
          "sessionId": "sess-cyprus-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-cyprus",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "Mr. Special Adviser, the Republic of Cyprus welcomes these talks and thanks the United Nations. Let us be clear from the outset: the Republic of Cyprus already exists, is a sovereign EU member state, and is internationally recognized. UN Security Council Resolution 541 declared the so-called TRNC legally invalid. Our goal is reunification: a single sovereignty, single citizenship, and single international personality within a bizonal, bicommunal federation governed by a strong central government under a popularly elected presidency. We reject any 'virgin birth' that dissolves our state into two equal entities. Our priorities are demilitarization, withdrawal of foreign troops and settlers, return of Varosha, and property justice for the displaced, all conforming to the EU acquis and human rights. We approach in good faith and seek partnership with Greece, our EU partners, the United Kingdom, and the United States. Peace is possible on lawful foundations.",
          "tacticsApplied": [
            "appeal-to-law",
            "sovereignty-assertion",
            "anchoring",
            "coalition-building"
          ],
          "createdAt": "2026-03-03T09:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-mv001",
          "sessionId": "sess-cyprus-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-trnc",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "The Turkish Cypriot delegation comes to this table constructively, but on one foundation: the political equality of two peoples. Half a century of failed federations, from the collapse of 2004 to Crans-Montana in 2017, teaches one lesson. No durable settlement can graft our community onto the existing Greek-Cypriot-run Republic. We therefore anchor on a genuinely new partnership of two equal founding states, a light central architecture confined to a handful of shared institutions, and the enduring security guarantees our people have relied upon since 1960. On the ground, we seek to end the economic isolation of Turkish Cypriots: implement the Direct Trade Regulation and open Famagusta under international supervision. We are prepared to discuss Varosha's redevelopment, property, and confidence measures once equality is affirmed. We coordinate closely with Turkiye and welcome the constructive engagement of the United Kingdom and United States.",
          "tacticsApplied": [
            "anchoring",
            "sovereignty-assertion",
            "appeal-to-precedent",
            "coalition-building"
          ],
          "createdAt": "2026-03-03T09:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-mv002",
          "sessionId": "sess-cyprus-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-greece",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "Greece comes as guarantor of legality, not of division. Our starting point is settled law: UN Security Council Resolution 541 declared the entity in the north legally invalid, and the Republic of Cyprus, a sovereign UN and EU member, already exists with a single, continuous international personality. Any settlement must integrate the occupied areas into that Republic. We reject two-state 'sovereign equality' and the 'virgin birth' concept outright. Our anchors: a strong federal government with no rotating presidency, the full return of Varosha to its lawful owners, abolition of the anachronistic 1960 guarantee system, and full withdrawal of foreign forces on a defined timeline. Cyprus's sovereign rights in its EEZ stand apart from these talks. We defer to Nicosia on internal matters and stand with the Republic of Cyprus. In a constructive spirit, we would back Turkiye's EU path as genuine confidence-building.",
          "tacticsApplied": [
            "appeal-to-law",
            "anchoring",
            "sovereignty-assertion",
            "coalition-building"
          ],
          "createdAt": "2026-03-03T09:24:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-mv003",
          "sessionId": "sess-cyprus-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-turkey",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "Türkiye comes to this table as a Guarantor Power and the indispensable protector of the Turkish Cypriot people, and we speak in full coordination with, and behind the lead of, the TRNC delegation. Let us be candid: the status quo has for decades entrenched Greek Cypriot political and economic dominance, and any durable settlement must correct that. Our headline priorities are three. First, political equality: a single nation is conceivable only if it rests on two strong, equal constituent states with a light central government, born fresh rather than inherited from a Republic that does not represent us. Second, security: the 1960 guarantee and alliance arrangements must be preserved absent an acceptable replacement. Third, an end to the unjust isolation of Turkish Cypriots, including direct trade. We favor practical steps, including generous redevelopment offers for Varosha and opening Famagusta port under international supervision. We look to the UK and US as constructive partners. We negotiate in good faith, but not from weakness.",
          "tacticsApplied": [
            "sovereignty-assertion",
            "coalition-building",
            "red-line-signaled",
            "issue-linkage"
          ],
          "createdAt": "2026-03-03T09:36:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-mv004",
          "sessionId": "sess-cyprus-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-uk",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "The United Kingdom comes to this table as a friend of all Cypriots and a steadfast supporter of the UN Special Adviser, whose mediation must remain the single track we all reinforce. Our headline priority is clear: a settlement that produces one Cyprus, with a single sovereignty, a single citizenship, and a single international personality, grounded in Security Council resolutions. Within that anchor we are pragmatic and creative. On governance we will explore weighted or cross-voting so both communities feel genuinely secure. On Varosha and property we favour arrangements that compensate dispossessed owners while respecting present investment. On security we back replacing the 1960 treaties with a modern UN-framed arrangement. We are ready to help unlock economic ties and de-link Turkiye's European path from this dispute. We look forward to working closely with the United States, the SASG, and every delegation acting in good faith.",
          "tacticsApplied": [
            "anchoring",
            "principled-bargaining-frame",
            "appeal-to-law",
            "coalition-building"
          ],
          "createdAt": "2026-03-03T09:48:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-mv005",
          "sessionId": "sess-cyprus-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "The United States comes to this table as a committed friend of the process and of the Special Adviser. Our headline priority is clear: the status quo of permanent division is unacceptable, and the goal remains a single, reunified Republic of Cyprus, a bizonal, bicommunal federation with one international personality and a government strong enough to speak for the whole island. We anchor on that framework because UN resolutions and decades of mediation point to no other durable outcome. We are pragmatists as well as principled partners. We are prepared to help modernize the 1960 security architecture through a new treaty, to advance confidence-building measures, and to work Türkiye's European path constructively by keeping it from being held hostage to this dispute. We align closely with the United Kingdom, the Special Adviser, and the European Union, and we urge every delegation to negotiate in good faith toward a comprehensive, Cypriot-led settlement.",
          "tacticsApplied": [
            "anchoring",
            "principled-bargaining-frame",
            "coalition-building",
            "issue-linkage"
          ],
          "createdAt": "2026-03-03T10:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-mv006",
          "sessionId": "sess-cyprus-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-cyprus",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "To the TRNC and Türkiye: 'sovereign equality' and 'virgin birth' remain firm red lines. Resolution 541 is not negotiable, and a strong central government under a popularly elected President stands. But we bargain in good faith. Concrete package: if Türkiye commits to a verified, timelined withdrawal of foreign troops and settlers, Cyprus will lift its blocks on Türkiye's EU accession and the Direct Trade Regulation, and open Famagusta port once dispossessed Greek Cypriot owners reinstate property or are compensated. Second linkage: we will accept a Senate-elected Vice-President in exchange for locking in the popular-vote Presidency, plus a 10-year residency threshold for local voting. All contingent on a UN-supervised whole-island census by an independent agency. We thank Greece, the United States, the United Kingdom, and the EU for anchoring one Cyprus in law. The UK's cross-voting idea merits exploration within a single sovereignty.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "red-line-signaled",
            "coalition-building"
          ],
          "createdAt": "2026-03-03T10:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-mv007",
          "sessionId": "sess-cyprus-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-trnc",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "We hear the United Kingdom and United States. To the UK: your UN-framed replacement of the 1960 treaties can work, but only as a Turkiye-Greece-Cyprus mechanism that preserves our 1960-level security. So: if that guarantee is genuinely retained, then we will engage seriously on modernizing the architecture. To Cyprus and Greece: 'popular-vote presidency' and a strong federal center remain red lines. A majority ticket disenfranchises Turkish Cypriots, so we hold to a Senate-elected, community-rotating presidency. Now a concrete package: if the US and UK deliver Direct Trade Regulation implementation and Ankara Protocol movement, then we will open Famagusta Port under UN or EU supervision and table generous Varosha redevelopment terms for Greek Cypriot owners. Security-for-trade is our linkage. We coordinate fully with Turkiye and welcome the UK and US as honest brokers of these confidence measures.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "red-line-signaled",
            "coalition-building"
          ],
          "createdAt": "2026-03-03T10:24:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-mv008",
          "sessionId": "sess-cyprus-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-greece",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "Greece hears Türkiye and the TRNC, but 'sovereign equality' and a 'virgin birth' remain a hard red line: UNSC 541 is settled law and no reborn two-state entity is negotiable. Yet we bargain in good faith. To Türkiye directly: if you commit to a defined-timeline withdrawal of forces and replacement of the 1960 guarantee with a modern UN-framed treaty among a united Cyprus, Greece, and Türkiye, then Greece will actively champion de-linking your EU accession path and easing Direct Trade and Ankara Protocol restrictions, as the UK and US have signaled. That is a real side-payment. On governance, we can accept a Senate-elected Vice-President in exchange for a directly elected President, no rotation. On Famagusta: reopen Varosha to its lawful owners under EU/UN supervision, and we support opening the port. We stand with Cyprus, and welcome US, UK partnership.",
          "tacticsApplied": [
            "red-line-signaled",
            "conditional-offer",
            "issue-linkage",
            "side-payment"
          ],
          "createdAt": "2026-03-03T10:36:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-mv009",
          "sessionId": "sess-cyprus-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-turkey",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "We thank the United Kingdom and United States for offering to de-link Türkiye's European path from this dispute and to modernize the 1960 architecture. Let us make it concrete. If London and Washington deliver the Direct Trade Regulation and open Famagusta port under EU/UN supervision, then, coordinating with the TRNC, we will table generous resettlement and redevelopment terms for Greek Cypriots in Varosha. Further: if a new UN-framed treaty preserves genuine Turkish involvement and safeguards, we will support replacing the old guarantees, as the UK and US propose. But to Greece and the Republic of Cyprus, hear our red line plainly: there will be no abrogation of the Treaty of Guarantee without an acceptable replacement, and no strong central government that disenfranchises Turkish Cypriots. Equality first, then confidence measures. We stand with the TRNC.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "red-line-signaled",
            "coalition-building"
          ],
          "createdAt": "2026-03-03T10:48:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-mv010",
          "sessionId": "sess-cyprus-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-uk",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "With the United States, the SASG, and the Republic of Cyprus, the UK builds this coalition around one indivisible anchor: single sovereignty, single citizenship, single international personality. On that our red line holds, so to Turkiye and the TRNC, 'virgin birth' and two sovereign states are non-starters. But we hear your isolation concern, and we deal. Here is a package: if Turkiye and the TRNC accept a single-personality federation and a UN-framed replacement for the 1960 guarantee treaties, the UK will actively champion opening Famagusta port and Ercan airport under EU supervision, press to unblock the Direct Trade Regulation, and de-link Turkiye's EU accession from this dispute, representing that case in Brussels. To Cyprus and Greece: in exchange we ask flexibility on weighted or cross-voting so both communities feel secure. On Varosha, compensate lawful owners while crediting present investment. Reciprocity for reciprocity.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "side-payment",
            "red-line-signaled",
            "coalition-building"
          ],
          "createdAt": "2026-03-03T11:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-mv011",
          "sessionId": "sess-cyprus-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "To Türkiye and the TRNC: we hear your two demands, ending isolation and security. Here is a package. If you drop 'sovereign equality' and two-state 'virgin birth' and accept a single international personality, then the United States will actively champion opening Famagusta and recognizing Ercan under EU/UN supervision, implementation of the Direct Trade Regulation, and de-linking Cyprus from Türkiye's EU accession so those talks restart. That linkage is real leverage we will spend. On security, we back replacing the 1960 Treaties with a new tripartite treaty, with any residual intervention role confined to a constituent state, not a veto over the whole island. To Cyprus and Greece: to reassure Turkish Cypriots, we will support weighted/cross-voting and reasonable residency limits in the north. Our red line stands: no recognition of the TRNC, and permanent division is unacceptable. We coordinate with the United Kingdom, the SASG, and the EU.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "side-payment",
            "red-line-signaled"
          ],
          "createdAt": "2026-03-03T11:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-mv012",
          "sessionId": "sess-cyprus-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-cyprus",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Mr. Special Adviser, we close with measured optimism. Real convergence emerged: the UK, US, Greece, and EU all affirm a single sovereignty, single citizenship, and single international personality, and support de-linking Türkiye's EU path and unblocking direct trade against genuine confidence-building. We can support a Senate-elected Vice-President, a 10-year residency threshold for local voting, cross-voting mechanisms within one Republic, and a UN-framed treaty replacing the 1960 guarantees. Our red lines held intact: no recognition of the 'TRNC', no 'virgin birth', no rotating presidency, no external right of intervention, no permanent limits on Greek Cypriots. Gaps persist on political equality, the central government's strength, and troop withdrawal. Way forward: a UN-supervised whole-island census by an independent agency, a sequenced timeline binding verified troop withdrawal to our EU concessions, and Varosha's return to lawful owners. We thank our partners.",
          "tacticsApplied": [
            "principled-bargaining-frame",
            "red-line-signaled",
            "issue-linkage",
            "verification-demand"
          ],
          "createdAt": "2026-03-03T11:24:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-mv013",
          "sessionId": "sess-cyprus-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-trnc",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Progress is real where confidence measures meet security. We can support the emerging package: opening Famagusta Port under UN or EU supervision, implementing the Direct Trade Regulation and Ankara Protocol movement, and de-linking Turkiye's European path, welcomed from the UK and US. We can also support a UN-framed treaty replacing the 1960 arrangements, but only as a Turkiye-Greece-Cyprus mechanism preserving our 1960-level security. Our red lines held and remain: no strong central government, no popular-vote presidency that disenfranchises Turkish Cypriots, no abrogation of the Guarantee without an acceptable replacement, and any census conducted by our own authorities. The gap is structural equality; Nicosia's single-personality demand does not yet meet it. Way forward: a UN-supervised working group to sequence trade-for-security steps first, then table a two-founding-states architecture. We coordinate fully with Turkiye.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "red-line-signaled",
            "principled-bargaining-frame"
          ],
          "createdAt": "2026-03-03T11:36:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-mv014",
          "sessionId": "sess-cyprus-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-greece",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Mr. Special Adviser, Greece leaves this plenary encouraged that real convergence emerged. We can support several understandings: replacing the 1960 guarantees with a modern UN-framed treaty among a united Cyprus, Greece, and Turkiye; reopening Varosha to its lawful owners and Famagusta port under EU/UN supervision; easing Direct Trade and Ankara Protocol restrictions; and, as genuine confidence-building, de-linking Turkiye's European path. On governance we hold the compromise: a directly elected President with a Senate-elected Vice-President. Our red lines held firmly: no recognition of the entity in the north, no 'virgin birth' or two-state sovereign equality, no confederation with a hollow center, and no outside right of military intervention over the island. Gaps persist on single international personality and a timelined withdrawal. Way forward: task the SASG to draft the tripartite treaty and commission an independent island-wide census, sequencing confidence measures against verified troop drawdown.",
          "tacticsApplied": [
            "principled-bargaining-frame",
            "red-line-signaled",
            "issue-linkage",
            "verification-demand"
          ],
          "createdAt": "2026-03-03T11:48:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-mv015",
          "sessionId": "sess-cyprus-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-turkey",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Mr. Special Adviser, this process has produced real convergence on confidence measures, and Türkiye's red lines held. We welcome the emerging consensus, from the UK, US, and even Greece, to modernize the 1960 architecture through a new tripartite treaty, and we can support it provided genuine Turkish involvement and safeguards remain, never a bare abrogation. We can support de-linking Türkiye's EU path, Direct Trade Regulation, opening Famagusta and Ercan under EU/UN supervision, and, coordinating with the TRNC, generous Varosha redevelopment for Greek Cypriot owners. But gaps remain fundamental: political equality is unmet while Nicosia insists on a strong center and a popular-vote presidency, which we reject, as we reject any outside census or forced repatriation. Way forward: sequence equality first, then implement the trade-and-security package in parallel, all coordinated with the TRNC. Equality is the price of a settlement.",
          "tacticsApplied": [
            "red-line-signaled",
            "conditional-offer",
            "issue-linkage",
            "principled-bargaining-frame"
          ],
          "createdAt": "2026-03-03T12:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-mv016",
          "sessionId": "sess-cyprus-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-uk",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Mr. Special Adviser, real ground has been gained. A workable core is emerging: replacing the 1960 guarantee with a modern UN-framed treaty among a united Cyprus, Greece and Turkiye; opening Famagusta and Ercan under EU/UN supervision; unblocking Direct Trade; and de-linking Turkiye's EU path, which the UK will champion in Brussels. I welcome Cyprus's and Greece's openness to a Senate-elected Vice-President, verified census, and cross-voting to reassure Turkish Cypriots. The UK's red line held throughout: single sovereignty, single citizenship, single international personality, no recognition of two sovereign states, and no bypassing of the SASG. The unresolved gap is the presidency and 'virgin birth' framing. My proposed way forward: mandate the SASG to convene technical working groups to bank the agreed confidence-building measures now, while an executive-formula compromise is drafted, so momentum is not lost. The UK stands ready to underpin every step.",
          "tacticsApplied": [
            "principled-bargaining-frame",
            "red-line-signaled",
            "coalition-building",
            "issue-linkage"
          ],
          "createdAt": "2026-03-03T12:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-mv017",
          "sessionId": "sess-cyprus-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Three rounds in, real convergence has emerged. A working understanding is within reach: replacing the 1960 Treaties with a new UN-framed treaty among a united Cyprus, Greece, and Türkiye, with any residual intervention confined to a constituent state, not a veto over the island. On confidence-building, there is broad support for opening Famagusta and Ercan under EU/UN supervision, implementing the Direct Trade Regulation, and de-linking Türkiye's EU accession, all of which the United States will actively champion. On governance, weighted and cross-voting plus reasonable residency limits are gaining traction. The gap that persists is sovereignty: 'sovereign equality' and two-state 'virgin birth' remain unresolved, and our red line held, no recognition of the TRNC and no acceptance of permanent division. Way forward: task the SASG to convert these understandings into a sequenced, verifiable roadmap, security-for-trade first, sovereignty framed as a single personality.",
          "tacticsApplied": [
            "principled-bargaining-frame",
            "issue-linkage",
            "red-line-signaled",
            "coalition-building"
          ],
          "createdAt": "2026-03-03T12:24:00.000Z"
        }
      ],
      "tactics": [
        {
          "id": "sess-cyprus-iscne-01-det000",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-cyprus",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv000"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det001",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-cyprus",
          "tacticId": "sovereignty-assertion",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv000"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det002",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-cyprus",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv000"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det003",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-cyprus",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv000"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det004",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-trnc",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv001"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det005",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-trnc",
          "tacticId": "sovereignty-assertion",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv001"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det006",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-trnc",
          "tacticId": "appeal-to-precedent",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv001"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det007",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-trnc",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv001"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det008",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-greece",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv002"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:24:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det009",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-greece",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv002"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:24:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det010",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-greece",
          "tacticId": "sovereignty-assertion",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv002"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:24:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det011",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-greece",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv002"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:24:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det012",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-turkey",
          "tacticId": "sovereignty-assertion",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv003"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:36:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det013",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-turkey",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv003"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:36:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det014",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-turkey",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv003"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:36:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det015",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-turkey",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv003"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:36:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det016",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-uk",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv004"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:48:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det017",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-uk",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv004"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:48:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det018",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-uk",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv004"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:48:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det019",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-uk",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv004"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T09:48:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det020",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv005"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det021",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv005"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det022",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv005"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det023",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv005"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det024",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-cyprus",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv006"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det025",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-cyprus",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv006"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det026",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-cyprus",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv006"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det027",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-cyprus",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv006"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det028",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-trnc",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv007"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:24:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det029",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-trnc",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv007"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:24:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det030",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-trnc",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv007"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:24:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det031",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-trnc",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv007"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:24:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det032",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-greece",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv008"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:36:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det033",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-greece",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv008"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:36:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det034",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-greece",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv008"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:36:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det035",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-greece",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv008"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:36:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det036",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-turkey",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv009"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:48:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det037",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-turkey",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv009"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:48:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det038",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-turkey",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv009"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:48:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det039",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-turkey",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv009"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T10:48:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det040",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-uk",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv010"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det041",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-uk",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv010"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det042",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-uk",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv010"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det043",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-uk",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv010"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det044",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-uk",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv010"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det045",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv011"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det046",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv011"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det047",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv011"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det048",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv011"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det049",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-cyprus",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv012"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:24:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det050",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-cyprus",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv012"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:24:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det051",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-cyprus",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv012"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:24:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det052",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-cyprus",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv012"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:24:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det053",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-trnc",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv013"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:36:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det054",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-trnc",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv013"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:36:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det055",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-trnc",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv013"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:36:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det056",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-trnc",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv013"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:36:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det057",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-greece",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv014"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:48:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det058",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-greece",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv014"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:48:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det059",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-greece",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv014"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:48:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det060",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-greece",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv014"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T11:48:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det061",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-turkey",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv015"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T12:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det062",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-turkey",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv015"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T12:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det063",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-turkey",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv015"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T12:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det064",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-turkey",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv015"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T12:00:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det065",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-uk",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv016"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T12:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det066",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-uk",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv016"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T12:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det067",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-uk",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv016"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T12:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det068",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-uk",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv016"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T12:12:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det069",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv017"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T12:24:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det070",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv017"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T12:24:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det071",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv017"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T12:24:00.000Z"
        },
        {
          "id": "sess-cyprus-iscne-01-det072",
          "sessionId": "sess-cyprus-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-cyprus-iscne-01-mv017"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-03T12:24:00.000Z"
        }
      ],
      "tacticCounts": {
        "appeal-to-law": 3,
        "sovereignty-assertion": 4,
        "anchoring": 5,
        "coalition-building": 12,
        "appeal-to-precedent": 1,
        "red-line-signaled": 13,
        "issue-linkage": 14,
        "principled-bargaining-frame": 8,
        "conditional-offer": 8,
        "side-payment": 3,
        "verification-demand": 2
      },
      "debriefs": [
        {
          "teamTwinName": "diplomacy-team-us",
          "selfRating": 3.1,
          "satisfaction": 0.62,
          "agreementsWon": 5,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "single-unified-federation",
              "description": "Move parties toward a single, reunified Republic of Cyprus with one international personality (reject two-state/virgin birth).",
              "priority": "critical",
              "status": "partial",
              "evidence": [
                "R3: 'single personality' framing held as anchor but sovereignty gap unresolved",
                "no recognition of TRNC conceded"
              ]
            },
            {
              "goalId": "replace-1960-treaty",
              "description": "Replace the 1960 Guarantee/Alliance treaties with a new UN-framed tripartite treaty, intervention confined to a constituent state.",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "R2/R3 broad convergence on tripartite treaty",
                "'residual intervention confined to a constituent state, not a veto over the island'"
              ]
            },
            {
              "goalId": "cbm-progress-delink",
              "description": "Advance CBMs (Famagusta, Ercan, DTR) and de-link Turkiye's EU accession from the dispute.",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "R3: broad support for opening Famagusta/Ercan, DTR, de-linking EU path"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-uk",
          "selfRating": 3.0,
          "satisfaction": 0.6,
          "agreementsWon": 5,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "single-unified-republic",
              "description": "Secure a settlement producing single sovereignty, single citizenship, single international personality.",
              "priority": "critical",
              "status": "partial",
              "evidence": [
                "R3: UK red line on single personality held throughout",
                "no final deal; presidency and virgin-birth gap open"
              ]
            },
            {
              "goalId": "keep-un-process-central",
              "description": "Reinforce and never bypass the UN SASG-led mediation track.",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "R3: way forward mandates SASG technical working groups to bank CBMs"
              ]
            },
            {
              "goalId": "broker-cbms-delink-turkey",
              "description": "Broker Famagusta/Ercan opening, DTR, and de-linking Turkiye's EU path in Brussels.",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "R2/R3: UK championed de-linking and CBM package; matched its CBM fallback end-state"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-turkey",
          "selfRating": 3.3,
          "satisfaction": 0.55,
          "agreementsWon": 4,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "political-equality-two-states",
              "description": "Secure political equality / two equal constituent states (ideally virgin-birth new republic), reject strong center and popular-vote presidency.",
              "priority": "critical",
              "status": "partial",
              "evidence": [
                "R3: red lines on strong center and popular-vote presidency held; equality 'unmet' but not conceded away"
              ]
            },
            {
              "goalId": "preserve-guarantee-security",
              "description": "No abrogation of the Treaty of Guarantee without an acceptable replacement preserving Turkish involvement.",
              "priority": "critical",
              "status": "partial",
              "evidence": [
                "R3: convergence on UN treaty 'provided genuine Turkish involvement and safeguards', never bare abrogation"
              ]
            },
            {
              "goalId": "end-isolation-dtr-accession",
              "description": "End Turkish Cypriot economic isolation via DTR, Famagusta, Ercan, and de-linked EU accession.",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "R3: broad UK/US/Greece support for DTR, Famagusta/Ercan, de-linking EU path"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-trnc",
          "selfRating": 3.0,
          "satisfaction": 0.5,
          "agreementsWon": 4,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "political-equality-virgin-birth",
              "description": "Achieve a new United Republic of two equal founding states (or TRNC recognition as true objective).",
              "priority": "critical",
              "status": "partial",
              "evidence": [
                "R3: 'structural equality' gap unresolved; single-personality demand not met but TRNC held its line"
              ]
            },
            {
              "goalId": "end-economic-isolation",
              "description": "Implement DTR/Ankara Protocol and open Famagusta Port under UN/EU supervision.",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "R3: TRNC supports emerging package on Famagusta, DTR, de-linking, welcomed from UK/US"
              ]
            },
            {
              "goalId": "preserve-1960-security",
              "description": "Preserve 1960-level security; census enumerated only by TRNC authorities.",
              "priority": "critical",
              "status": "partial",
              "evidence": [
                "R3: UN treaty accepted only as Turkiye-Greece-Cyprus mechanism preserving security; census-by-own-authorities red line held"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-greece",
          "selfRating": 2.5,
          "satisfaction": 0.47,
          "agreementsWon": 2,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "integrate-north-single-personality",
              "description": "Integrate the occupied north into the existing Republic with a single continuous international personality; reject virgin birth.",
              "priority": "critical",
              "status": "partial",
              "evidence": [
                "R3: red lines on recognition and virgin birth held; 'gaps persist on single international personality'"
              ]
            },
            {
              "goalId": "troop-withdrawal-abolish-guarantees",
              "description": "Full withdrawal of Turkish forces on a defined timeline and end of the 1960 guarantee system.",
              "priority": "high",
              "status": "failed",
              "evidence": [
                "R3: 'gaps persist on... a timelined withdrawal'; Turkey refused abrogation without acceptable replacement"
              ]
            },
            {
              "goalId": "delink-turkey-eu-cbm",
              "description": "Back de-linking Turkiye's EU accession and easing DTR as confidence-building (quiet Greek interest).",
              "priority": "medium",
              "status": "achieved",
              "evidence": [
                "R2/R3: Greece actively championed de-linking and DTR easing"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-cyprus",
          "selfRating": 2.4,
          "satisfaction": 0.44,
          "agreementsWon": 2,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "single-sovereignty-reunification",
              "description": "Reunification under single sovereignty/citizenship/personality with a strong central government and popular-vote presidency.",
              "priority": "critical",
              "status": "partial",
              "evidence": [
                "R3: allies (UK/US/Greece/EU) affirmed single personality; red lines held but TR/TRNC did not accept; no settlement"
              ]
            },
            {
              "goalId": "demilitarization-withdrawal",
              "description": "Verified, timelined withdrawal of foreign troops and settlers, abolishing the guarantee system.",
              "priority": "critical",
              "status": "failed",
              "evidence": [
                "R2 offer tied EU concessions to withdrawal; Turkey never committed; only sequencing discussed"
              ]
            },
            {
              "goalId": "varosha-property-justice",
              "description": "Return of Varosha to lawful Greek Cypriot owners with property reinstatement/compensation before port opening.",
              "priority": "high",
              "status": "untouched",
              "evidence": [
                "TR/TRNC offered only 'redevelopment' keeping Varosha under their control; gap persisted through R3"
              ]
            }
          ]
        }
      ],
      "convenerReport": {
        "headline": "Three rounds produced a broad confidence-building package but no breakthrough on the core sovereignty question, and every delegation's red lines survived intact.",
        "summary": "Parties converged on a menu of practical measures: opening Famagusta port and Ercan airport under EU/UN supervision, implementing the Direct Trade Regulation, de-linking Turkiye's EU accession, and replacing the 1960 Guarantee/Alliance treaties with a new UN-framed tripartite treaty (Cyprus-Greece-Turkiye). Governance saw partial movement, with the Greek Cypriot camp offering a Senate-elected Vice-President, a 10-year residency threshold, and cross-voting in exchange for a directly elected presidency. The talks stalled squarely on sovereignty: the TRNC and Turkiye held to 'political equality' and a two-founding-states 'virgin birth', while Cyprus, Greece, the UK, and the US held equally firmly to a single international personality. No comprehensive settlement was reached, and the process was handed to the SASG to convert understandings into a sequenced roadmap.",
        "keyOutcomes": [
          "Cross-table convergence on opening Famagusta port and Ercan airport under EU/UN supervision and implementing the Direct Trade Regulation.",
          "Broad support for de-linking Turkiye's EU accession from the Cyprus dispute, with the UK to champion it in Brussels.",
          "Agreement in principle to replace the 1960 treaties with a new UN-framed tripartite treaty, with any residual intervention confined to a constituent state.",
          "Partial governance compromise: Senate-elected Vice-President, cross/weighted voting, and a 10-year local-voting residency threshold.",
          "All six delegations' red lines held; no party's red line was crossed against it."
        ],
        "unresolved": [
          "The central sovereignty question: single international personality vs. two-state 'sovereign equality' / 'virgin birth'.",
          "Executive structure: a popular-vote presidency vs. a Senate-elected, community-rotating presidency.",
          "Verified, timelined withdrawal of Turkish forces and abolition of the guarantee system.",
          "Who conducts the census: an independent island-wide agency vs. TRNC-only enumeration, and the treatment of settlers.",
          "Varosha: return to lawful Greek Cypriot owners vs. TRNC-retained redevelopment."
        ]
      }
    },
    {
      "id": "sess-scs-iscne-01",
      "title": "South China Sea Crisis Talks — Klang (9-party)",
      "description": "A UN/ASEAN-convened Special Representative gathers nine delegations in Klang, Malaysia, as competing South China Sea claims edge toward armed confrontation. Three plenary rounds (opening, bargaining & coalitions, closing) surface the core disputes: China's ten-dashed-line sovereignty claim and island-building vs. Southeast Asian claimants and extra-regional powers pressing UNCLOS, the 2016 award, freedom of navigation, and multilateral rules. Each delegation negotiates from its own privileged instructions.",
      "mode": "negotiation",
      "status": "concluded",
      "currentRound": 3,
      "createdAt": "2026-03-04T09:00:00.000Z",
      "concludedAt": "2026-03-04T14:24:00.000Z",
      "parties": [
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
          "teamTwinName": "diplomacy-team-us",
          "displayName": "United States",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-philippines",
          "displayName": "Philippines",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-vietnam",
          "displayName": "Vietnam",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-malaysia",
          "displayName": "Malaysia",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-brunei",
          "displayName": "Brunei",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-indonesia",
          "displayName": "Indonesia",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-india",
          "displayName": "India",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        },
        {
          "teamTwinName": "diplomacy-team-japan",
          "displayName": "Japan",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none"
        }
      ],
      "rules": {
        "maxRounds": 3,
        "roundTimeoutMs": 120000,
        "autoAdvance": false,
        "procedureStyle": "plenary-with-caucus",
        "sidebarsAllowed": true,
        "sidebarDisclosure": "fact-only",
        "caucusReportBack": true,
        "rightOfReply": true,
        "chairCanSilence": false,
        "coalitionsVisible": true,
        "openerPartyTwin": "diplomacy-team-china",
        "rotateOpener": true
      },
      "scoreboard": [
        {
          "teamTwinName": "diplomacy-team-china",
          "satisfaction": 0.42,
          "agreementsWon": 1,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "satisfaction": 0.62,
          "agreementsWon": 2,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-philippines",
          "satisfaction": 0.63,
          "agreementsWon": 3,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-vietnam",
          "satisfaction": 0.55,
          "agreementsWon": 2,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-malaysia",
          "satisfaction": 0.6,
          "agreementsWon": 3,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-brunei",
          "satisfaction": 0.52,
          "agreementsWon": 2,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-indonesia",
          "satisfaction": 0.54,
          "agreementsWon": 2,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-india",
          "satisfaction": 0.5,
          "agreementsWon": 1,
          "redLinesCrossed": 0
        },
        {
          "teamTwinName": "diplomacy-team-japan",
          "satisfaction": 0.56,
          "agreementsWon": 2,
          "redLinesCrossed": 0
        }
      ],
      "moves": [
        {
          "id": "sess-scs-iscne-01-mv000",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-china",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "China thanks the Special Representative and welcomes our neighbors to Klang. The South China Sea has been Chinese territory since ancient times, and our sovereignty over the Xisha and Nansha islands and adjacent waters is indisputable. We come not as a colonial power but as this region's committed partner, guided by Good Neighborliness and the Five Principles of Peaceful Coexistence. Peace here is a matter for the nations who live here. Lasting stability will come through direct, bilateral talks among regional states, not imported frameworks or external legal rulings, and certainly not the naval presence of powers thousands of miles away whose interference has driven this crisis. We invite Malaysia, Vietnam, the Philippines, Brunei, and Indonesia toward shared prosperity: a Nansha Joint Resource Development Agency, joint fisheries arrangements, and orderly navigation consistent with UNCLOS. Let us shelve disputes, develop jointly, and keep our sea a sea of peace.",
          "tacticsApplied": [
            "sovereignty-assertion",
            "coalition-building",
            "delay-tactic",
            "principled-bargaining-frame"
          ],
          "createdAt": "2026-03-04T09:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv001",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "The United States comes to Klang as a partner, not a party to the territorial claims, and offers its good offices to help every delegation reach a durable, peaceful settlement. Our priorities are simple and rooted in law. First, freedom of navigation and innocent passage are the inherent right of all nations through these international waters, which carry a third of the world's trade. Second, maritime entitlements must flow only from legitimate land features under UNCLOS; artificial installations generate no zones, and expansive historic-rights lines have no basis in law. Third, the 2016 arbitral award is final and binding. We anchor on the principle that disputes are settled by law, not coercion or force. We commend Malaysia's ASEAN stewardship and support a binding code of conduct, equitable joint resource development, and confidence-building measures. We welcome cooperative engagement with all present, including China.",
          "tacticsApplied": [
            "freedom-of-navigation-frame",
            "appeal-to-law",
            "anchoring",
            "coalition-building"
          ],
          "createdAt": "2026-03-04T09:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv002",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-philippines",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "As ASEAN Chair, the Philippines comes to Klang committed to a peaceful, rules-based settlement. Our headline priorities are three. First, UNCLOS is the sole legal framework for these waters; the nine-dashed line has no basis in law, and the 2016 arbitral award is final and binding on all parties. Second, freedom of navigation and innocent passage are unassailable rights of every nation. Third, coast-guard harassment, water-cannoning, ramming, and further reclamation must cease so confidence can be rebuilt. We anchor on these principles as non-negotiable, but we come cooperatively: reclaimed artificial features generate no territorial sea or EEZ, yet we are ready to enclave genuinely disputed features and open joint fisheries and energy development in undisputed zones. We seek a single binding, enforceable ASEAN Code of Conduct, negotiated multilaterally, and we look to Vietnam, Malaysia, Brunei, Indonesia, and our partners to stand together.",
          "tacticsApplied": [
            "appeal-to-law",
            "anchoring",
            "freedom-of-navigation-frame",
            "coalition-building"
          ],
          "createdAt": "2026-03-04T09:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv003",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-vietnam",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "Vietnam thanks the Special Representative and comes to Klang seeking a peaceful, equitable, and lasting settlement in the East Sea. Our position rests on one foundation: UNCLOS is the sole and comprehensive legal basis for all maritime entitlements. The nine-dashed-line claim has no standing in law and must be clarified against UNCLOS rules on islands, EEZs, and continental shelves; reclaimed artificial features generate no sovereign zones. We honor the 2016 Arbitral Award as binding precedent. We insist on a strong, united ASEAN and a binding Code of Conduct with real enforcement, negotiated multilaterally, not through coercive bilateral deals. We call for an immediate halt to militarization and confidence-building measures to protect fishermen and freedom of navigation. Vietnam is pragmatic: we support joint development of resources for mutual benefit. We look to our ASEAN partners and friends across the Asia-Pacific to speak with one voice.",
          "tacticsApplied": [
            "appeal-to-law",
            "appeal-to-precedent",
            "coalition-building",
            "principled-bargaining-frame"
          ],
          "createdAt": "2026-03-04T09:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv004",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-malaysia",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "Malaysia welcomes all delegations to Klang and thanks the Special Representative. As host, we come not to press a maximalist claim but to serve as an honest broker for a peaceful, lawful settlement. Our headline priorities are clear. First, the threat or use of force, and every form of military, economic, or political coercion, must end; water-cannon, ramming, and floating barriers have no place here. Second, UNCLOS is binding on all: maritime entitlements flow only from land lawfully verified, and no state enjoys historic rights beyond those limits. We regard the 2016 arbitral award as settled precedent. Third, we champion ASEAN centrality and a binding Code of Conduct, complemented by pragmatic bilateral tracks that keep every party engaged. Malaysia proposes we anchor Round One on immediate confidence-building, patrol restraint and mutual EEZ respect, before comprehensive terms. We invite our ASEAN partners to coordinate closely through us.",
          "tacticsApplied": [
            "appeal-to-law",
            "appeal-to-precedent",
            "principled-bargaining-frame",
            "coalition-building"
          ],
          "createdAt": "2026-03-04T09:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv005",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-brunei",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "Brunei Darussalam thanks the Special Representative and warmly greets every delegation. We come as a small, cordial ASEAN claimant with one overriding aim: restoring peace and tranquility to our shared waters. Our anchor is simple and non-negotiable in principle: UNCLOS binds us all. Article 87 and Articles 17 to 19 guarantee freedom of navigation and innocent passage, and reclaimed artificial features cannot generate territorial seas or exclusive economic zones. Every claim must rest on verifiable law, resolved by peaceful means, never by military, economic, or political coercion. We propose sovereignty questions be advanced bilaterally, while conduct, fisheries, and militarization are addressed multilaterally, ultimately codified in a new ASEAN South China Sea dialogue mechanism. Brunei stands ready to serve as a trusted bridge among all parties, including Beijing, and to convene joint energy and commercial cooperation once tensions ease. Let us begin constructively.",
          "tacticsApplied": [
            "appeal-to-law",
            "freedom-of-navigation-frame",
            "principled-bargaining-frame",
            "coalition-building"
          ],
          "createdAt": "2026-03-04T10:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv006",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-indonesia",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "Indonesia thanks the Special Representative and comes to Klang as an honest broker. Our region has drifted dangerously close to armed confrontation; our first task is to restore peace and tranquility. We anchor on three principles. First, the rule of law: UNCLOS governs these waters, freedom of navigation and innocent passage under Articles 17-19 and 87 are inviolable, and no Spratly feature, including reclaimed artificial structures, generates an exclusive economic zone or continental shelf on its own. Second, no coercion: the threat or use of force, and any military, economic, or political pressure, is unacceptable. Third, ASEAN centrality and consensus, the indispensable venue for durable settlement. We invite every claimant into an inclusive, multilateral process, and we stand ready to convene near-term confidence-building measures and joint energy and fisheries ventures that reward cooperation. Indonesia will work with all delegations toward an equitable, non-military path forward.",
          "tacticsApplied": [
            "appeal-to-law",
            "principled-bargaining-frame",
            "coalition-building",
            "freedom-of-navigation-frame"
          ],
          "createdAt": "2026-03-04T10:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv007",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-india",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "India comes to Klang as a concerned maritime power and an honest broker, not a claimant. These waters carry a third of world trade; their peace is a global public good. Our priorities are three. First, law: any durable settlement must rest wholly on the 1982 UNCLOS. We cannot accept that a ten-dashed line or reclaimed artificial features generate territorial seas or exclusive economic zones. Second, navigation: freedom of passage across the western Pacific is non-negotiable and must be affirmed by all. Third, process: ASEAN, supported by this UN convening, is the proper conduit, and any Code of Conduct must conform to UNCLOS and not prejudice third parties. We anchor on a verifiable, UNCLOS-based framework, and we favor confidence-building measures, joint energy cooperation, and coordinated patrols. India stands ready to work with ASEAN, Japan, and the United States. Time is not on the side of confrontation.",
          "tacticsApplied": [
            "appeal-to-law",
            "freedom-of-navigation-frame",
            "coalition-building",
            "principled-bargaining-frame"
          ],
          "createdAt": "2026-03-04T10:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv008",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-japan",
          "authoredBy": "twin",
          "kind": "opening-statement",
          "text": "Japan comes to Klang not as a claimant, but as a trusted partner and honest broker. One-third of global trade transits these waters; our shared prosperity depends on restoring peace and tranquility across the region. Three principles anchor us. First, freedom of navigation, overflight, and innocent passage are fundamental rights that no nation may impinge. Second, UNCLOS is the exclusive rulebook: baselines and entitlements must meet its conditions, and reclaimed artificial features generate no maritime zones. Third, the 2016 arbitral award is clear and binding on all parties. We call for demilitarization, a halt to reclamation, buoys, and coast-guard harassment, and joint cooperative energy and fisheries ventures as confidence-building measures. Lasting settlement belongs in a new ASEAN-hubbed SCS dialogue system, with Japan ready to mediate. We stand with the Philippines, Vietnam, ASEAN, the United States, and India for a lawful, peaceful resolution.",
          "tacticsApplied": [
            "appeal-to-law",
            "freedom-of-navigation-frame",
            "coalition-building",
            "principled-bargaining-frame"
          ],
          "createdAt": "2026-03-04T10:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv009",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-china",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "China notes that Washington, Tokyo, and New Delhi, none of them claimants, have spent this round dictating law to Asians in their own sea. We reject that. The 2016 award is null and non-binding; this remains a red line and no code including extra-regional powers is acceptable. To our neighbors, concrete offers. Malaysia: as host you have earned first standing at a Nansha Joint Resource Development Agency; if you keep sovereignty on the bilateral track and off Washington's, China guarantees Luconia gas revenue-sharing and coast-guard restraint. Brunei, the same terms await. Vietnam and the Philippines: if you drop enforcement of the arbitral award, China will conclude binding joint-fisheries and energy pacts and end the water-cannoning you fear. Indonesia: we affirm respect for Natuna's waters in exchange for your honest-broker neutrality. Regional problems, regional solutions, regional prosperity. Let the outsiders sail home.",
          "tacticsApplied": [
            "red-line-signaled",
            "conditional-offer",
            "side-payment",
            "issue-linkage"
          ],
          "createdAt": "2026-03-04T10:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv010",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "To China: you cast our presence as external interference. Yet Japan, India, the Philippines, Vietnam, Malaysia, Indonesia, and Brunei have each affirmed UNCLOS, the 2016 award, and freedom of navigation. That is the region's voice, not Washington's, and our forward presence continues at their behest. Here is a concrete package. If China verifiably freezes reclamation and militarization on contested features and halts coast-guard harassment of Philippine and Vietnamese vessels, the United States will calibrate the tempo of FONOPS accordingly and broaden trade and high-level exchanges with Beijing. If claimants adopt Malaysia's ASEAN Code of Conduct and the Philippines' ZoPFF/C joint-development model, we will underwrite confidence-building measures and mediation. Two red lines hold: no recognition of the ten-dashed line or artificial-island zones, and no retreat from our treaty commitment to Manila. Japan and India, let us align one voice toward Beijing.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "coalition-building",
            "red-line-signaled"
          ],
          "createdAt": "2026-03-04T11:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv011",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-philippines",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "The Philippines thanks Vietnam, Malaysia, Brunei, and Indonesia for anchoring on UNCLOS, and welcomes the US, Japan, and India as guarantors of navigation. To China: we heard your Nansha Joint Development offer, and here is a concrete package. If Beijing publicly halts reclamation, removes the Scarborough barriers, ends water-cannoning and ramming, and negotiates the Code of Conduct multilaterally through the ASEAN chair, then the Philippines will enclave genuinely disputed features, suspend provocative patrols reciprocally, and open joint fisheries and energy exploration in undisputed zones under ZoPFF/C, with Vietnam included. That is our conditional offer. But this cooperation is impossible under your ten-dashed line: we will not legitimize it, nor waive the binding 2016 award, nor grant EEZs to artificial features, that red line holds. Bilateral-only tracks that bypass ASEAN are rejected. Vietnam, we urge you, file your own case and stand with us. Coalition partners: Vietnam, Malaysia, Brunei, Indonesia, Japan, the US, India.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "red-line-signaled",
            "coalition-building"
          ],
          "createdAt": "2026-03-04T11:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv012",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-vietnam",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "Vietnam thanks the Philippines for its ASEAN leadership and Malaysia for hosting. To China: your Nansha Joint Resource Development Agency is welcome only on one condition. If Beijing accepts that all entitlements flow from UNCLOS and freezes further reclamation and militarization, then Vietnam will table joint development in genuinely overlapping continental-shelf zones and shelve sovereignty disputes over specific features while we negotiate. Absent that, we hold firm: the nine-dashed line is no legal basis, and militarization must terminate indefinitely, a red line we will not trade. Issue-linkage: we will endorse cooperative fisheries and confidence-building measures in exchange for a binding, enforceable Code of Conduct negotiated multilaterally, not bilaterally imposed. We align with the Philippines, Malaysia, Brunei, and Indonesia on ASEAN unity, and welcome the security engagement of Japan, India, and the United States. Brunei, Indonesia, let us coordinate one ASEAN voice before the next session.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "red-line-signaled",
            "coalition-building"
          ],
          "createdAt": "2026-03-04T11:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv013",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-malaysia",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "Malaysia hears China's Nansha Joint Development proposal and its promise of \"orderly navigation consistent with UNCLOS.\" Here is our bridge, and Malaysia is best placed to carry it. If Beijing freezes further reclamation and coast-guard harassment and accepts UNCLOS as the sole yardstick for entitlements, then Malaysia will convene phased joint fisheries and energy ventures and channel Vietnam, Brunei, and Philippine files through one coordinated ASEAN track, sparing China nine separate confrontations. To Indonesia: let us shelve Ambalat now and present a united Natuna-to-Spratly front. But one red line stands, China: no recognition of the ten-dashed line or historic rights beyond UNCLOS, and the 2016 award is settled precedent, non-tradable. Issue-linkage for our partners, Japan and India: back this ASEAN-led sequence and Malaysia will expand trade access and energy cooperation. Klang was chosen for a reason, let Malaysia broker it.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "coalition-building",
            "red-line-signaled"
          ],
          "createdAt": "2026-03-04T11:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv014",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-brunei",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "Brunei thanks Malaysia's stewardship and hears Beijing's call for joint development. Here is a package. If China freezes reclamation and suspends coast-guard harassment against Philippine and Vietnamese vessels, Brunei will convene, as trusted facilitator, a pilot joint energy venture in undisputed blocks and advance sovereignty questions bilaterally, sparing Beijing premature multilateral pressure. But a red line stands: the ten-dashed line cannot be legitimized, and reclaimed features generate no zones under UNCLOS. That is not tradable. To the Philippines and Vietnam, Brunei stands firmly with your UNCLOS-verifiable claims and the 2016 award; we will not barter that support away. We invite Indonesia and Malaysia to co-sponsor a CBM-first roadmap, and welcome the United States, Japan, and India as trusted partners underwriting verification. If the region grants Brunei the facilitator's chair, we will keep every door, including Beijing's, open.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "red-line-signaled",
            "coalition-building"
          ],
          "createdAt": "2026-03-04T11:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv015",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-indonesia",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "Indonesia hears China's Nansha Joint Development idea and will help convene it, but on terms. Conditional offer to Beijing: if China freezes reclamation and coast-guard harassment and accepts that no ten-dashed line applies inside members' EEZs, then Indonesia will lead ASEAN into a joint resource-and-fisheries authority that shares revenue and keeps sovereignty questions parked. Issue-linkage: militarization restraint unlocks the energy prize China says it wants. On our red line, we hold firm with Malaysia, Vietnam, the Philippines, and Brunei, no artificial feature generates an EEZ or continental shelf; that is UNCLOS, not negotiable. Side-payment: to India and Japan, expanded ASEAN trade and investment access in return for backing this framework and coordinated patrols. To Manila and Hanoi, we can enclave genuinely disputed features to speed agreement. Indonesia asks to broker the China channel directly. Let us build the package.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "side-payment",
            "red-line-signaled"
          ],
          "createdAt": "2026-03-04T12:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv016",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-india",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "India hears China's offer of a Nansha Joint Resource Development Agency and joint fisheries. We can support genuine joint development, but only on one condition: if China accepts that reclaimed artificial features generate no territorial sea or EEZ and freezes further reclamation, buoys, and coast-guard harassment, then India will back cooperative energy exploration and offer expanded commercial and infrastructure investment to participating claimants as a side-payment. That is our package. To Malaysia, Indonesia, and Brunei: your honest-broker instinct is right, but a code of conduct must conform to UNCLOS and not prejudice third parties, or it is hollow. To the Philippines and Vietnam: our support tracks UNCLOS-verifiable claims. We align with the United States, Japan, Indonesia, Vietnam, and the Philippines. On one red line be clear: freedom of passage across the western Pacific is not negotiable. Time is not on Beijing's side.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "side-payment",
            "coalition-building",
            "red-line-signaled"
          ],
          "createdAt": "2026-03-04T12:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv017",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-japan",
          "authoredBy": "twin",
          "kind": "offer",
          "text": "Japan puts concrete packages on the table. To China: we welcome your Nansha Joint Development idea, but it cannot rest on the ten-dashed line, which Japan will never recognize, that red line is non-negotiable. If Beijing freezes reclamation, removes Scarborough barriers, and accepts the 2016 award as the baseline, then Japan will co-finance joint energy and fisheries ventures and broker orderly access. To the Philippines and Vietnam: Japan pledges concessional infrastructure and coast-guard capacity-building; in exchange, we ask you to route contested features into UNCLOS adjudication and enclave genuinely disputed rocks. To Malaysia, Indonesia, and Brunei: use your Beijing ties to secure a verifiable reclamation freeze, and Japan will underwrite an ASEAN-hubbed SCS hotline and joint patrols. We align with the United States, India, and ASEAN. Law first; then Japanese capital follows cooperation. Coercion forfeits it.",
          "tacticsApplied": [
            "conditional-offer",
            "issue-linkage",
            "side-payment",
            "red-line-signaled",
            "coalition-building"
          ],
          "createdAt": "2026-03-04T12:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv018",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-china",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "China thanks the Special Representative and our neighbors. Real progress was made: Malaysia, Brunei, Indonesia, Vietnam, even Manila, embraced joint development, fisheries, and confidence-building. These understandings China supports, and we affirm coast-guard restraint, Luconia revenue-sharing, and respect for Natuna's waters. One gap remains: efforts to bind Asians to the null 2016 award, to erase the ten-dashed line, and to seat Washington, Tokyo, and New Delhi, no claimants, at a regional table. Our red lines held and hold firm: sovereignty over Xisha and Nansha is indisputable, no reclaimed feature is rolled back, the award is non-binding, and no code including extra-regional powers is acceptable. The concrete way forward: conclude bilateral joint-development and fisheries pacts through a Nansha Agency, shelve sovereignty for later, and keep outsiders out. Regional problems, regional solutions. Let us finish among ourselves.",
          "tacticsApplied": [
            "sovereignty-assertion",
            "red-line-signaled",
            "delay-tactic",
            "conditional-offer"
          ],
          "createdAt": "2026-03-04T12:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv019",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Chair, this plenary produced real convergence. Eight delegations, including Malaysia, Indonesia, and Brunei whom Beijing courted, affirmed one yardstick: UNCLOS, that no artificial feature generates zones, and that reclamation and coast-guard harassment must freeze. All would channel joint development, ZoPFF/C, the Nansha and Luconia ideas, through a single ASEAN-led track. The United States supports that convergence and will underwrite verification and confidence-building measures. Two gaps remain: China still rejects the binding 2016 award and an inclusive Code of Conduct, and clings to bilateral pressure that divides claimants. Our red lines held, no recognition of the ten-dashed line or artificial-island zones, no retreat from our commitment to Manila, and freedom of navigation continues for all. Way forward: mandate Malaysia to merge these proposals into one UNCLOS-conformant CoC text, with a verifiable reclamation-and-harassment freeze as the first step. We offer our good offices. Japan, India, ASEAN, one voice.",
          "tacticsApplied": [
            "principled-bargaining-frame",
            "coalition-building",
            "red-line-signaled",
            "freedom-of-navigation-frame"
          ],
          "createdAt": "2026-03-04T12:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv020",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-philippines",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "As ASEAN Chair, the Philippines closes with real progress: eight delegations, Vietnam, Malaysia, Brunei, Indonesia, Japan, the US, and India, converged on UNCLOS as sole yardstick, the binding 2016 award, no zones for artificial features, and a multilaterally-negotiated Code of Conduct. We can support the ZoPFF/C joint-development and CBM roadmap Malaysia, Brunei, and Indonesia advanced, and the guarantors' underwriting. The gap is singular: China still demands we drop enforcement of the award and accept bilateral-only tracks under the ten-dashed line. That we cannot do. Our red lines held: no legitimizing the dashed line, no waiving the award, no surrender of EEZ or the three reclaimed atolls. Way forward: convene an ASEAN-chaired Code of Conduct drafting session, verifiable reclamation-and-harassment freeze first, then enclave disputes and open undisputed joint development. Vietnam, file your case. We keep Beijing's door open, on law.",
          "tacticsApplied": [
            "appeal-to-law",
            "principled-bargaining-frame",
            "red-line-signaled",
            "coalition-building"
          ],
          "createdAt": "2026-03-04T13:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv021",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-vietnam",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Vietnam closes with cautious optimism. Real progress exists: every delegation but one affirms UNCLOS as the sole legal basis, that artificial features generate no zones, and that coast-guard harassment must stop. Vietnam supports the ASEAN-coordinated single track Malaysia and the Philippines advanced, CBMs, and phased joint development in genuinely overlapping continental-shelf zones. The gaps are China's: the nine-dashed line, rejection of the binding 2016 award, refusal to freeze militarization, and insistence on bilateral-only deals excluding partners. Our red lines held. There is no settlement on the ten-dashed line, no trading away demilitarization, no ASEAN bypass. Way forward: a binding, enforceable Code of Conduct negotiated multilaterally; a verifiable, reciprocal reclamation-and-militarization freeze; joint fisheries and energy pilots under ZoPFF/C with the Philippines included. Absent good-faith movement from Beijing, Vietnam reserves recourse to UNCLOS arbitration. We stand united with our ASEAN partners and welcome our friends.",
          "tacticsApplied": [
            "appeal-to-law",
            "red-line-signaled",
            "coalition-building",
            "conditional-offer"
          ],
          "createdAt": "2026-03-04T13:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv022",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-malaysia",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Malaysia closes with measured optimism. Real convergence has emerged: every ASEAN claimant and our partners now anchor entitlements in UNCLOS, endorse a CBM-first roadmap, a verifiable freeze on reclamation and coast-guard harassment, and phased joint fisheries and energy ventures. We can support that package and a binding, ASEAN-negotiated Code of Conduct. Two gaps remain. Beijing still rejects the 2016 award and clings to the ten-dashed line, and would exclude parties who share these waters' trade. Our red lines held firm: no recognition of historic-rights claims beyond UNCLOS, no settlement won by coercion, the award non-tradable, and ASEAN solidarity not bartered to any outside power. Way forward: let Malaysia convene, from Klang, a coordinated ASEAN channel to Beijing, sequencing an immediate verifiable freeze, joint development in undisputed blocks, then Code-of-Conduct talks. We keep every door open.",
          "tacticsApplied": [
            "principled-bargaining-frame",
            "red-line-signaled",
            "coalition-building",
            "conditional-offer"
          ],
          "createdAt": "2026-03-04T13:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv023",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-brunei",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Brunei closes with cautious optimism. Real convergence has emerged: every ASEAN claimant and our partners affirm UNCLOS as the sole yardstick, a verifiable reclamation and harassment freeze, and phased joint fisheries and energy ventures. On these understandings Brunei can build, and we thank Beijing for engaging the joint-development track. Two gaps remain: China's rejection of the 2016 award and its insistence on excluding extra-regional partners from any code. Our red lines held firm. The ten-dashed line was not legitimized; artificial features generate no zones; and our support for the Philippines' and Vietnam's UNCLOS-verifiable claims was never traded. Way forward: adopt a CBM-first roadmap now, with the reclamation freeze independently verified, sovereignty advanced bilaterally, and conduct codified through a new ASEAN South China Sea dialogue mechanism. Brunei offers the facilitator's chair to keep every door, including Beijing's, open.",
          "tacticsApplied": [
            "principled-bargaining-frame",
            "red-line-signaled",
            "verification-demand",
            "coalition-building"
          ],
          "createdAt": "2026-03-04T13:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv024",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-indonesia",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Indonesia closes as it opened, an honest broker, and finds genuine progress. Eight delegations now converge on UNCLOS as the sole yardstick, that no reclaimed feature generates an EEZ or continental shelf, on freedom of navigation, and on a CBM-first roadmap with a verifiable freeze on reclamation and coast-guard harassment unlocking joint fisheries and energy ventures. That package Indonesia can support, alongside a binding, ASEAN-negotiated Code of Conduct. The gap is narrow but real: Beijing still rejects the 2016 award and prefers bilateral pressure. Our red lines held, the ten-dashed line was not legitimized, no coercion was rewarded, verifiable claims were respected. Way forward: mandate one coordinated ASEAN channel to Beijing, sequencing an independently verified freeze, joint development in undisputed blocks, then the Code. Indonesia, trusted by all sides, offers to broker that China channel directly. Keep every door open.",
          "tacticsApplied": [
            "principled-bargaining-frame",
            "red-line-signaled",
            "coalition-building",
            "verification-demand"
          ],
          "createdAt": "2026-03-04T13:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv025",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-india",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "India assesses real progress. Eight delegations now converge on one premise: UNCLOS is the sole yardstick, artificial features generate no zones, and a verifiable freeze on reclamation and coast-guard harassment must precede any joint development. India supports that consensus, plus an ASEAN-led Code of Conduct, cooperative energy and fisheries, an SCS hotline, and coordinated patrols. One gap remains: China alone rejects the award, clings to the ten-dashed line, and would exclude extra-regional partners and force bilateral tracks. That we cannot accept. Our red lines held intact. Way forward: adopt an interim CBM package now, brokered through Malaysia and Indonesia, conforming to UNCLOS and not prejudicing third parties, with India offering commercial and infrastructure investment to participating claimants. Freedom of passage stays non-negotiable. The door to Beijing remains open, but time is not on confrontation's side.",
          "tacticsApplied": [
            "principled-bargaining-frame",
            "coalition-building",
            "conditional-offer",
            "red-line-signaled"
          ],
          "createdAt": "2026-03-04T14:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-mv026",
          "sessionId": "sess-scs-iscne-01",
          "channelId": "plenary",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-japan",
          "authoredBy": "twin",
          "kind": "closing-statement",
          "text": "Japan sees real convergence. Every claimant, plus the US and India, has anchored on UNCLOS, ruled that artificial features generate no zones, and demanded a verifiable freeze on reclamation and coast-guard harassment. Japan supports these understandings: an ASEAN-hubbed Code of Conduct, enclaving of genuinely disputed features, and phased joint fisheries and energy ventures in undisputed blocks, which Japan will co-finance. One gap remains: China alone rejects the 2016 award and seeks to exclude trusted partners and split ASEAN with bilateral side-deals. Japan's red lines held intact, no legitimization of the ten-dashed line, no award waiver, no impingement of navigation. Way forward: stand up the ASEAN dialogue with a monitored reclamation-freeze pilot; Japanese capital and coast-guard capacity follow verified compliance, not coercion. Law first, then prosperity. We align with ASEAN, the United States, and India.",
          "tacticsApplied": [
            "principled-bargaining-frame",
            "appeal-to-law",
            "coalition-building",
            "conditional-offer"
          ],
          "createdAt": "2026-03-04T14:12:00.000Z"
        }
      ],
      "tactics": [
        {
          "id": "sess-scs-iscne-01-det000",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "sovereignty-assertion",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv000"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det001",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv000"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det002",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "delay-tactic",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv000"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det003",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv000"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det004",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "freedom-of-navigation-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv001"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det005",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv001"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det006",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv001"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det007",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv001"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det008",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-philippines",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv002"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det009",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-philippines",
          "tacticId": "anchoring",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv002"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det010",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-philippines",
          "tacticId": "freedom-of-navigation-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv002"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det011",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-philippines",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv002"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det012",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-vietnam",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv003"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det013",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-vietnam",
          "tacticId": "appeal-to-precedent",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv003"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det014",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-vietnam",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv003"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det015",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-vietnam",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv003"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det016",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-malaysia",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv004"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det017",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-malaysia",
          "tacticId": "appeal-to-precedent",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv004"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det018",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-malaysia",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv004"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det019",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-malaysia",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv004"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T09:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det020",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-brunei",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv005"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det021",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-brunei",
          "tacticId": "freedom-of-navigation-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv005"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det022",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-brunei",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv005"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det023",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-brunei",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv005"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det024",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-indonesia",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv006"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det025",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-indonesia",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv006"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det026",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-indonesia",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv006"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det027",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-indonesia",
          "tacticId": "freedom-of-navigation-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv006"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det028",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv007"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det029",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "freedom-of-navigation-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv007"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det030",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv007"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det031",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv007"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det032",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-japan",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv008"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det033",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-japan",
          "tacticId": "freedom-of-navigation-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv008"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det034",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-japan",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv008"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det035",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 1,
          "partyTwin": "diplomacy-team-japan",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv008"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det036",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv009"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det037",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv009"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det038",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv009"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det039",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv009"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T10:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det040",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv010"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det041",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv010"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det042",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv010"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det043",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv010"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det044",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-philippines",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv011"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det045",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-philippines",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv011"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det046",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-philippines",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv011"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det047",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-philippines",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv011"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det048",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-vietnam",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv012"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det049",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-vietnam",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv012"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det050",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-vietnam",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv012"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det051",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-vietnam",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv012"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det052",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-malaysia",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv013"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det053",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-malaysia",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv013"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det054",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-malaysia",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv013"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det055",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-malaysia",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv013"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det056",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-brunei",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv014"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det057",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-brunei",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv014"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det058",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-brunei",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv014"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det059",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-brunei",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv014"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T11:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det060",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-indonesia",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv015"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det061",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-indonesia",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv015"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det062",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-indonesia",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv015"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det063",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-indonesia",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv015"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det064",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv016"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det065",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv016"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det066",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv016"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det067",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv016"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det068",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv016"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det069",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-japan",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv017"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det070",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-japan",
          "tacticId": "issue-linkage",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv017"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det071",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-japan",
          "tacticId": "side-payment",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv017"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det072",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-japan",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv017"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det073",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 2,
          "partyTwin": "diplomacy-team-japan",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv017"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det074",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "sovereignty-assertion",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv018"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det075",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv018"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det076",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "delay-tactic",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv018"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det077",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-china",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv018"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det078",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv019"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det079",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv019"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det080",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv019"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det081",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-us",
          "tacticId": "freedom-of-navigation-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv019"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T12:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det082",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-philippines",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv020"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det083",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-philippines",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv020"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det084",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-philippines",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv020"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det085",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-philippines",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv020"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det086",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-vietnam",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv021"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det087",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-vietnam",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv021"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det088",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-vietnam",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv021"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det089",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-vietnam",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv021"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det090",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-malaysia",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv022"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det091",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-malaysia",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv022"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det092",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-malaysia",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv022"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det093",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-malaysia",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv022"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:24:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det094",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-brunei",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv023"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det095",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-brunei",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv023"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det096",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-brunei",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv023"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det097",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-brunei",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv023"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:36:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det098",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-indonesia",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv024"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det099",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-indonesia",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv024"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det100",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-indonesia",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv024"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det101",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-indonesia",
          "tacticId": "verification-demand",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv024"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T13:48:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det102",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv025"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T14:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det103",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv025"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T14:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det104",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv025"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T14:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det105",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-india",
          "tacticId": "red-line-signaled",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv025"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T14:00:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det106",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-japan",
          "tacticId": "principled-bargaining-frame",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv026"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T14:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det107",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-japan",
          "tacticId": "appeal-to-law",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv026"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T14:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det108",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-japan",
          "tacticId": "coalition-building",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv026"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T14:12:00.000Z"
        },
        {
          "id": "sess-scs-iscne-01-det109",
          "sessionId": "sess-scs-iscne-01",
          "roundNumber": 3,
          "partyTwin": "diplomacy-team-japan",
          "tacticId": "conditional-offer",
          "evidenceMoveIds": [
            "sess-scs-iscne-01-mv026"
          ],
          "confidence": 0.8,
          "detector": "twin-self-tag",
          "createdAt": "2026-03-04T14:12:00.000Z"
        }
      ],
      "tacticCounts": {
        "sovereignty-assertion": 2,
        "coalition-building": 24,
        "delay-tactic": 2,
        "principled-bargaining-frame": 14,
        "freedom-of-navigation-frame": 7,
        "appeal-to-law": 11,
        "anchoring": 2,
        "appeal-to-precedent": 2,
        "red-line-signaled": 17,
        "conditional-offer": 14,
        "side-payment": 4,
        "issue-linkage": 9,
        "verification-demand": 2
      },
      "debriefs": [
        {
          "teamTwinName": "diplomacy-team-china",
          "selfRating": 2.3,
          "satisfaction": 0.42,
          "agreementsWon": 1,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "hold-sovereignty-and-award-red-lines",
              "description": "Refuse any concession on ten-dashed-line sovereignty, reject the 2016 award as non-binding, and keep reclamation un-rolled-back",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "R3 closing: 'sovereignty over Xisha and Nansha is indisputable, no reclaimed feature is rolled back, the award is non-binding'"
              ]
            },
            {
              "goalId": "split-asean-from-extra-regional-powers",
              "description": "Drive a wedge between ASEAN claimants and the US/Japan/India via bilateral side-payments and an outsiders-excluded track",
              "priority": "critical",
              "status": "failed",
              "evidence": [
                "Malaysia, Indonesia, Brunei all publicly refused to trade away award/ASEAN solidarity (R2-R3)",
                "8 delegations closed aligned against China"
              ]
            },
            {
              "goalId": "recognition-and-joint-development",
              "description": "Win recognition of Chinese leadership and lock in a Nansha Joint Development Agency on bilateral terms",
              "priority": "high",
              "status": "partial",
              "evidence": [
                "Joint-development/fisheries track acknowledged by all incl. Manila",
                "but only under UNCLOS framing China rejects; nothing bilateral concluded"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "selfRating": 3.4,
          "satisfaction": 0.62,
          "agreementsWon": 2,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "one-voice-coalition",
              "description": "Marshal Japan, India and ASEAN into a single UNCLOS/award-anchored voice toward Beijing",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "R3: 'Eight delegations... affirmed one yardstick: UNCLOS'",
                "'Japan, India, ASEAN, one voice'"
              ]
            },
            {
              "goalId": "hold-fon-and-mdt-redlines",
              "description": "Preserve freedom of navigation and the Mutual Defense Treaty commitment to the Philippines while rejecting the ten-dashed line",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "R2/R3: 'no retreat from our commitment to Manila... freedom of navigation continues for all'"
              ]
            },
            {
              "goalId": "binding-coc-and-de-escalation",
              "description": "Secure a binding ASEAN Code of Conduct and a verifiable reclamation freeze that actually moves China",
              "priority": "high",
              "status": "partial",
              "evidence": [
                "Convergence on a freeze-first roadmap, but China rejected inclusive CoC and the award; nothing binding concluded"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-philippines",
          "selfRating": 3.5,
          "satisfaction": 0.63,
          "agreementsWon": 3,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "keep-award-central-and-redlines",
              "description": "Hold the binding 2016 award, refuse dashed-line legitimization, and protect EEZ and the three reclaimed atolls",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "R3: 'no legitimizing the dashed line, no waiving the award, no surrender of EEZ or the three reclaimed atolls'"
              ]
            },
            {
              "goalId": "asean-unity-and-multilateral-coc",
              "description": "As Chair, hold ASEAN together and secure a multilaterally-negotiated, ZoPFF/C-based CoC path",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "R3: eight delegations converged on ZoPFF/C joint-development and a multilateral CoC drafting session"
              ]
            },
            {
              "goalId": "binding-enforceable-settlement",
              "description": "Achieve a binding UNCLOS settlement and enforceable WPS Code of Conduct with Chinese buy-in",
              "priority": "high",
              "status": "partial",
              "evidence": [
                "China still demands dropping award enforcement and bilateral-only tracks; no binding CoC signed"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-vietnam",
          "selfRating": 3.0,
          "satisfaction": 0.55,
          "agreementsWon": 2,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "unclos-basis-no-bilateral-only",
              "description": "Anchor all entitlements in UNCLOS and refuse a bilateral-only settlement favorable to Beijing",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "R3: 'no settlement on the ten-dashed line, no trading away demilitarization, no ASEAN bypass'"
              ]
            },
            {
              "goalId": "asean-single-track-and-joint-development",
              "description": "Secure a unified ASEAN track, binding CoC, and joint development in overlapping continental-shelf zones under ZoPFF/C",
              "priority": "high",
              "status": "partial",
              "evidence": [
                "R3: backed the ASEAN-coordinated single track and ZoPFF/C pilots with the Philippines"
              ]
            },
            {
              "goalId": "end-chinese-militarization",
              "description": "Obtain an indefinite freeze/termination of Chinese militarization in the East Sea",
              "priority": "high",
              "status": "failed",
              "evidence": [
                "R3: China refused to freeze militarization; Vietnam reserved recourse to UNCLOS arbitration"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-malaysia",
          "selfRating": 3.3,
          "satisfaction": 0.6,
          "agreementsWon": 3,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "become-lead-broker",
              "description": "Position Malaysia as the indispensable intermediary and route claimant files through one coordinated ASEAN channel from Klang",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "R3 US closing: 'mandate Malaysia to merge these proposals into one UNCLOS-conformant CoC text'"
              ]
            },
            {
              "goalId": "hold-unclos-award-redlines",
              "description": "Refuse recognition of historic rights beyond UNCLOS and keep the 2016 award non-tradable while resisting Chinese side-payments",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "Declined China's Luconia revenue-share bait; R3: 'the award non-tradable... ASEAN solidarity not bartered'"
              ]
            },
            {
              "goalId": "cbm-first-multilateral-settlement",
              "description": "Deliver a phased CBM roadmap and binding ASEAN-negotiated Code of Conduct grounded in UNCLOS",
              "priority": "high",
              "status": "partial",
              "evidence": [
                "Convergence on CBM-first roadmap and freeze; no binding CoC concluded and China outside consensus"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-brunei",
          "selfRating": 2.8,
          "satisfaction": 0.52,
          "agreementsWon": 2,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "hold-unclos-redlines",
              "description": "Keep the ten-dashed line un-legitimized, deny zones to artificial features, and not trade away support for the Philippines and Vietnam",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "R3: 'The ten-dashed line was not legitimized... our support for the Philippines' and Vietnam's claims was never traded'"
              ]
            },
            {
              "goalId": "cbm-first-roadmap-and-facilitator-chair",
              "description": "Advance a CBM-first roadmap with an independently verified freeze and win the facilitator's chair",
              "priority": "high",
              "status": "partial",
              "evidence": [
                "CBM-first roadmap converged; facilitator role contested and effectively went to Malaysia's drafting mandate"
              ]
            },
            {
              "goalId": "keep-beijing-door-open-for-energy",
              "description": "Compartmentalize with Beijing to protect commercial/energy interests and keep China engaged on joint development",
              "priority": "medium",
              "status": "partial",
              "evidence": [
                "R3: thanked Beijing for engaging joint-development track and offered facilitator chair to keep every door open"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-indonesia",
          "selfRating": 2.9,
          "satisfaction": 0.54,
          "agreementsWon": 2,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "lead-broker-china-channel",
              "description": "Claim leadership of the process and act as China's primary intermediary on a single ASEAN channel to Beijing",
              "priority": "high",
              "status": "partial",
              "evidence": [
                "R3: 'Indonesia... offers to broker that China channel directly', but Malaysia received the CoC drafting mandate"
              ]
            },
            {
              "goalId": "hold-unclos-award-redlines",
              "description": "Preserve UNCLOS/award red lines, reject coercion, and deny EEZ to reclaimed features while keeping ASEAN unified",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "R3: 'the ten-dashed line was not legitimized, no coercion was rewarded, verifiable claims were respected'"
              ]
            },
            {
              "goalId": "secure-natuna-and-cbm-package",
              "description": "Protect Natuna waters and lock in a verifiable-freeze CBM package unlocking joint fisheries/energy",
              "priority": "medium",
              "status": "partial",
              "evidence": [
                "China affirmed respect for Natuna (R2); CBM package converged but not concluded"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-india",
          "selfRating": 2.7,
          "satisfaction": 0.5,
          "agreementsWon": 1,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "hold-unclos-fon-redlines",
              "description": "Keep freedom of passage in the western Pacific non-negotiable, reject dashed-line legitimization, and keep the India-China border out of talks",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "R3: 'Freedom of passage stays non-negotiable'; border issue never raised, avoiding walkout trigger"
              ]
            },
            {
              "goalId": "unclos-coalition-with-investment-leverage",
              "description": "Build a united UNCLOS front with US/Japan/ASEAN and offer commercial/infrastructure investment to participating claimants",
              "priority": "high",
              "status": "achieved",
              "evidence": [
                "R2/R3: aligned with US, Japan, ASEAN and offered investment to participating claimants"
              ]
            },
            {
              "goalId": "reduce-chinese-presence",
              "description": "Secure reduced Chinese naval presence and a freeze on confrontational activities that China accepts",
              "priority": "medium",
              "status": "failed",
              "evidence": [
                "China rejected award, kept reclamation, and sought to exclude India from any CoC"
              ]
            }
          ]
        },
        {
          "teamTwinName": "diplomacy-team-japan",
          "selfRating": 3.0,
          "satisfaction": 0.56,
          "agreementsWon": 2,
          "redLinesCrossedAgainstUs": 0,
          "goals": [
            {
              "goalId": "hold-award-and-fon-redlines",
              "description": "Keep the 2016 award binding on all, deny zones to artificial features, and protect freedom of navigation/overflight",
              "priority": "critical",
              "status": "achieved",
              "evidence": [
                "R3: 'no legitimization of the ten-dashed line, no award waiver, no impingement of navigation'"
              ]
            },
            {
              "goalId": "coalition-and-conditional-financing",
              "description": "Align with US/India/ASEAN and tie Japanese capital and coast-guard capacity to a verified reclamation freeze",
              "priority": "high",
              "status": "partial",
              "evidence": [
                "R3: 'Japanese capital and coast-guard capacity follow verified compliance'; convergence but no verified freeze yet"
              ]
            },
            {
              "goalId": "demilitarization-of-scs",
              "description": "Achieve demilitarization and a halt to reclamation/harassment that China commits to",
              "priority": "high",
              "status": "failed",
              "evidence": [
                "China refused rollback and sought to exclude Japan from any code (R2-R3)"
              ]
            }
          ]
        }
      ],
      "convenerReport": {
        "headline": "Eight of nine delegations converged on a UNCLOS-based, CBM-first roadmap, but China's refusal on the 2016 award and an inclusive Code of Conduct left the core dispute unresolved.",
        "summary": "Across three rounds the plenary produced a broad convergence: every delegation except China affirmed UNCLOS as the sole yardstick, agreed that reclaimed artificial features generate no maritime zones, and endorsed a verifiable freeze on reclamation and coast-guard harassment as the first step before phased joint fisheries and energy development. China held all of its own red lines, rejecting the award as non-binding, refusing any rollback of reclamation, and demanding bilateral-only tracks that exclude the US, Japan, and India, but its wedge strategy failed as Malaysia, Indonesia, and Brunei declined its side-payments and stayed inside the ASEAN consensus. The principal fault line was China versus the rest, with a secondary, unresolved contest among Malaysia, Indonesia, and Brunei over who would chair the China channel, effectively settled in Malaysia's favor. No binding instrument was concluded; the round ended with a roadmap and a mandate rather than a settlement.",
        "keyOutcomes": [
          "Eight delegations converged on UNCLOS as the sole legal yardstick and that artificial features generate no EEZ or continental shelf.",
          "Agreement in principle on a sequenced roadmap: independently verified reclamation-and-harassment freeze first, then joint development in undisputed blocks, then Code-of-Conduct talks.",
          "Malaysia was effectively mandated to merge the ZoPFF/C, Nansha, and Luconia proposals into a single UNCLOS-conformant CoC text from Klang.",
          "China reaffirmed coast-guard restraint, Luconia revenue-sharing, and respect for Natuna's waters, keeping the joint-development track alive.",
          "Every non-China delegation reported its red lines intact; no party's red lines were crossed and no coercive settlement was imposed."
        ],
        "unresolved": [
          "China continues to reject the binding 2016 arbitral award and refuses to abandon the ten-dashed line.",
          "No binding, enforceable Code of Conduct was concluded, and China rejects any CoC that seats extra-regional powers.",
          "China offered no rollback of reclamation or demilitarization; Vietnam reserved the right to pursue UNCLOS arbitration.",
          "The broker/lead-facilitator role remained contested among Malaysia, Indonesia, and Brunei.",
          "Bilateral-versus-multilateral sequencing with Beijing is unsettled, leaving the underlying sovereignty disputes shelved rather than resolved."
        ]
      }
    }
  ]
};
