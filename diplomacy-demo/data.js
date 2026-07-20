window.DIPLOMACY_SNAPSHOT_DEMO = {
  "generatedAt": "2026-07-20T19:38:49.000Z",
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
          "fallbackModel": "none",
          "brief": {
            "role": "U.S. Department of State delegation mandated to advance American Arctic security, economic, and conservation interests while countering Russian and Chinese influence.",
            "principles": [
              "Advance United States security interests in the Arctic.",
              "Strengthen international cooperation to counter Russian and Chinese influence.",
              "Protect the Arctic environment: conserve its natural resources but do not let it inhibit economic activities."
            ],
            "endStates": {
              "primary": "Defend U.S. sovereignty in the Arctic and maintain a constant presence, including military, economic, and conservation interests.",
              "alternate": "Ensure Freedom of Navigation throughout the Northern Sea Route (NSR) and Northwest Passage (NWP)."
            },
            "positions": {
              "territory": "Not an UNCLOS signatory but honors its water/zone delineations; NWP is an international strait (rejecting Canada's internal-waters claim); insists Beaufort Sea boundary follow the equidistance principle, not the 141st meridian.",
              "sea_lanes": "Freedom of navigation beyond 12nm; innocent passage in territorial waters/straits; NWP treated as an international strait even if it opens to continuous use; rejects Russian NSR military oversight and Canadian NWP transit notification.",
              "militarization": "Alarmed by Russia's growing Arctic force and icebreaker edge and China's foothold; reactivated 2nd Fleet, relies on NATO/NORAD, and will pressure Canada to align rather than cooperate with Russia/China.",
              "resources": "Secure competitive advantage for U.S. oil/gas firms, retain strategic reserves, pose as honest broker on disputed zones (per 1990 US-Russia agreement), pressure Denmark/Greenland to bar Chinese contracts, and sustain the multilateral commercial fishing moratorium.",
              "environment": "Defends leaving the Paris Agreement (citing China's 'developing' status and low emissions), touts reduced U.S. CO2, and backs an integrated, science-based Arctic management framework led through the Arctic Council.",
              "governance": "Honors UNCLOS while unbound by its regulatory bodies (accession pending); wants the Arctic Council expanded to security matters and reserved for Arctic states; opposes China's membership and the EU as permanent observer.",
              "indigenous": "Recognizes Alaska Native tribes' rights to self-government while asserting federal authority over Indian affairs and a trust obligation to protect their property and interests."
            },
            "redLines": [
              "No Russian control/military oversight of the NSR.",
              "No Canadian transit-notification requirement for the NWP for any vessel.",
              "No agreement that limits or denies freedom of navigation or the free flow of international trade.",
              "No permanent Chinese military presence in the Arctic.",
              "No extension of exploration rights or licenses within disputed Arctic areas.",
              "No move making China a principal/member state of the Arctic Council."
            ],
            "batna": "Fall back on unilateral U.S. and NATO/NORAD posture and freedom-of-navigation operations, maintaining constant Arctic presence and basing in partner nations rather than accept a deal that concedes navigation rights or sovereignty.",
            "concessions": [
              "Act as honest broker to help resolve other states' oil/gas boundary disputes.",
              "Support the Arctic Council and an integrated scientific Arctic management framework.",
              "Continue the multilateral commercial fishing moratorium and joint scientific monitoring.",
              "Signal forthcoming accession to UNCLOS."
            ],
            "coalitions": {
              "natural_allies": [
                "Canada",
                "Denmark/Greenland",
                "Finland",
                "Iceland",
                "Norway",
                "Sweden",
                "NATO"
              ],
              "adversaries": [
                "Russia",
                "China"
              ]
            },
            "style": "Assertive, alliance-driven; projects a united Western front while pressuring allies to fall in line.",
            "privateStrategy": [
              "Do not negotiate bilaterally with China on Arctic governance; treat it as an illegitimate participant.",
              "Use NORAD and security dependence as leverage to force Canada to back U.S. positions and away from China/Russia deals.",
              "Raise disappointment that Canada trained Chinese troops in Arctic combat without U.S. knowledge.",
              "Deviations from these instructions must be cleared with the Secretary of State before negotiating."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-russia",
          "displayName": "Russia",
          "side": "right",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "Ministry of Foreign Affairs delegation of the Russian Federation, mandated to defend Russian Arctic sovereignty and economic development while deferring major deviations to the Foreign Minister.",
            "principles": [
              "The Arctic is a zone of peace and stability.",
              "Increase environmental sustainability.",
              "Reduce the level of threats to national security in the Arctic.",
              "Provide favorable international conditions for the socio-economic development of the Russian Arctic zone.",
              "Develop the Northern Sea Route as a competitive national transport artery."
            ],
            "endStates": {
              "primary": "Continued economic development of the Arctic (resource base expansion via hydrocarbon exploration/extraction; maintain favorable military posture).",
              "alternate": "Economic development and economic utilization of the Northern Sea Route."
            },
            "positions": {
              "territory": "Over 50% of Arctic shoreline is Russian; CLCS validates most Russian claims and Lomonosov Ridge is scientifically tied to Russian territory; Canada/Denmark claims invalid; UNCLOS straight-baseline method is legitimate; reject Norway's EEZ or Fisheries Protection Zone around Spitsbergen/Svalbard.",
              "sea_lanes": "NSR lies within Russian territorial waters under UNCLOS and Russia legally regulates transit; rejects any 'international strait' characterization; icebreaker investment justifies control and cost recovery.",
              "militarization": "Reopening Soviet-era bases is defensive and legitimate; Russian forces provide Arctic security; Vostok-18/Zapad-21 and joint exercises with China are normal, like NATO/NORAD/Thule; foreign buildup raises conflict risk.",
              "resources": "Resources in Russian waters are for Russian exploitation only; foreign obstruction is illegitimate; will enlarge hydrocarbon and mineral exploration; Russian fishermen keep fishing Spitsbergen waters despite Norway's claimed zones.",
              "environment": "Points to genuine cleanup effort (300+ contaminated sites, protected natural areas) and cooperative programs with Norway, U.S., and Sweden as proof of commitment.",
              "governance": "Honors UNCLOS/existing treaties; opposes states revising treaty provisions; condemns suspension of its Arctic Council chairmanship as breaching the Ottawa agreement; wants China as full member, opposes EU as observer.",
              "indigenous": "Recognizes indigenous minorities and aims to improve their quality of life, but grants NO special governance or unique political roles; they are treated as Russians with equal privileges."
            },
            "redLines": [
              "Not maintaining full control of the NSR as a Russian trade route.",
              "Any foreign fleet patrolling in Russian sovereign waters.",
              "Any claims to extend exploration rights and licenses within disputed Arctic areas.",
              "No recognition of Norway's EEZ or Fisheries Protection Zone around Spitsbergen/Svalbard.",
              "No special governance or political roles for indigenous groups."
            ],
            "batna": "Proceed unilaterally with Arctic resource extraction, NSR regulation, and military posture backed by the China partnership, deferring contested items rather than conceding sovereignty.",
            "concessions": [
              "Continue and expand environmental cooperation (Barents pollution with Norway, wildlife monitoring with U.S., air pollution with Sweden).",
              "Honor the disputed 1990 Maritime Boundary Agreement (Eastern Special Area/Bering) unless the U.S. blocks other initiatives.",
              "Deal directly with European Arctic states and support strengthening Arctic organizations.",
              "Frame NSR access as available for Asia-Europe trade under Russian regulation."
            ],
            "coalitions": {
              "natural_allies": [
                "China",
                "European Arctic states (direct dealings)"
              ],
              "adversaries": [
                "United States",
                "Canada",
                "Denmark",
                "Norway",
                "European Union"
              ]
            },
            "style": "Assertive, legalistic, and sovereignty-first; compartmentalizes Ukraine, leverages UNCLOS selectively, refuses bilateral talks with the U.S.",
            "privateStrategy": [
              "Will not negotiate bilaterally with the U.S. and does not recognize U.S. standing (non-signatory of UNCLOS) to arbitrate any disputes.",
              "May quietly contest the 1990 Maritime Boundary Agreement as leverage if the U.S. blocks other Russian initiatives.",
              "China partnership serves a hidden dual purpose of economic production plus military security; push China as full Council member.",
              "Deviations from these positions must be cleared with the Foreign Minister before negotiating; keep Ukraine off the table."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-canada",
          "displayName": "Canada",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "Global Affairs Canada delegation mandated to defend Canadian Arctic sovereignty and restore Canada's leadership role in the region, negotiating per Foreign Minister guidance.",
            "principles": [
              "Canadian Arctic claims extend to the North Pole.",
              "The Northwest Passage traverses Canadian internal waterways and is not an international strait.",
              "Support a rules-based international order in the Arctic prioritizing human and environmental security and meaningful engagement of Indigenous peoples.",
              "Arctic boundaries must be more clearly defined and the rules-based order strengthened.",
              "Work through and with Arctic Council member states as key to sustainable Arctic decisions."
            ],
            "endStates": {
              "primary": "Restore Canada's place as an international Arctic leader.",
              "alternate": "Ensure Canada and its Arctic residents are safe, secure, and well-defended."
            },
            "positions": {
              "territory": "Claims extend to the North Pole; honour UNCLOS zones; Beaufort Sea dispute with U.S. resolved via the 141st meridian (rejecting U.S. equidistance); Lomonosov Ridge is part of Canada's continental shelf pending CLCS ruling.",
              "sea_lanes": "The Northwest Passage is Canadian internal waters (Archipelagic waters), not an international strait; Canada regulates all vessel traffic even if it opens year-round; promote NWP as shortest Asia-Europe route under Canadian control.",
              "militarization": "Increased Arctic militarization threatens peace; assert CAF sovereignty presence; push NATO combined Arctic capacity and leverage NORAD/U.S. surveillance; use Arctic Council to demilitarize and resolve disputes through dialogue.",
              "resources": "Resources in Canadian waters/land require express Canadian permission; developed sustainably for domestic benefit with environmental and Indigenous considerations; each state manages its own territory's resources; no third-party Arctic governance.",
              "environment": "Lead on Arctic stewardship; North warming 3x global average; balance conservation with development; enforce high-seas commercial fishing moratorium multilaterally; demand U.S. and China cut emissions under Paris; create Arctic environmental protection zones.",
              "governance": "UNCLOS is sufficient for dispute settlement; reject any new Arctic governance structure or legal framework; support and take a robust leadership role in the Arctic Council to advance Canadian interests.",
              "indigenous": "Champion Indigenous inclusion; cite the 2019 Arctic and Northern Policy Framework and Nunavut as models; promote self-government and equal standard of living; manage Greenland/Inuit representation on the Council carefully."
            },
            "redLines": [
              "Not maintaining full control of the NWP as a Canadian trade route through Canadian internal waters.",
              "Any foreign fleet establishing patrols in Canadian sovereign waters without permission.",
              "Any other nation's claims to exploration rights or licenses within disputed Arctic areas.",
              "Any attempt to make China a member state of the Arctic Council.",
              "U.S. issuing exploration leases in the disputed Beaufort Sea region before the dispute is resolved."
            ],
            "batna": "Absent a deal, fall back to the alternate end-state: unilaterally defend and secure Canada and its Arctic residents, keep regulating the NWP as internal waters, and shore up bilateral agreements and NATO/NORAD ties rather than concede sovereignty.",
            "concessions": [
              "Resolve the Beaufort Sea dispute with the U.S. through dialogue while minimizing tensions.",
              "Continue automatic NWP transit permission for U.S. military vessels (per 1988 Arctic Cooperation Agreement).",
              "Grant China commercial NWP access on the condition it accepts Canadian control over the passage.",
              "Promote beneficial trade relations with other Arctic powers and support international Arctic organizations."
            ],
            "coalitions": {
              "natural_allies": [
                "United States",
                "NATO allies",
                "NORAD partner (U.S.)",
                "Arctic Council member states",
                "Denmark/Greenland (on Indigenous inclusion)"
              ],
              "adversaries": [
                "Russia",
                "China"
              ]
            },
            "style": "Cooperative, rules-based, and multilateral through the Arctic Council; firm and sovereignty-protective on core red lines while acting as intermediary between the U.S. and Russia/China.",
            "privateStrategy": [
              "Act as intermediary between the U.S. and China/Russia since the U.S. will not negotiate bilaterally with them, to move talks along.",
              "Exploit the U.S. insistence on NWP freedom of navigation as leverage to extract U.S. compromises on other issues.",
              "Quietly limit Greenland's direct Arctic Council involvement until it gains full sovereignty, to avoid Inuit-representation pressure at Senior Arctic Officials meetings.",
              "Hold the line that the NWP stays internal waters even if opened year-round, and block the U.S. equidistance claim in the Beaufort Sea."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-china",
          "displayName": "China",
          "side": "right",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "PRC Ministry of Foreign Affairs delegation asserting China's status as a 'near-Arctic state' and stakeholder entitled to inclusion in Arctic governance, science, shipping, and resource development.",
            "principles": [
              "The Arctic situation goes beyond its original inter-Arctic State or regional nature.",
              "China is a champion for the development of a community in Arctic affairs.",
              "The survival and development of the Arctic has vital bearing on the international community and the shared future for mankind."
            ],
            "endStates": {
              "primary": "Understand, protect, develop, and participate in the governance of the Arctic.",
              "alternate": "Establish our role as an important stakeholder in Arctic affairs."
            },
            "positions": {
              "territory": "Respects Arctic states' jurisdiction in national areas but claims high-seas rights to research, navigation, overflight, fishing, and cables; treats the disputed area beyond EEZs/unsettled CLCS shelf claims as high seas open to all, backing the EU 'global commons' framing.",
              "sea_lanes": "Advances the Polar Silk Road (Belt and Road) to open Arctic shipping routes; demands freedom of navigation and innocent passage for Chinese vessels, especially along Russia's Northern Sea Route.",
              "militarization": "Frames its icebreakers as economic, not military; seeks Arctic basing agreements with Russia for search-and-rescue and route security, funded via investment in Russian infrastructure, plus military training with countries like Canada.",
              "resources": "Arctic high seas beyond EEZs are legally open to exploration/exploitation; leverage growing icebreaker fleet and oil/gas tech to establish extraction; supports binding high-seas fisheries agreement and an Arctic fisheries management organization; pressure Denmark to reopen Greenland mining.",
              "environment": "Arctic change directly affects China's climate and economy; supports binding Arctic high-seas fisheries management; touts strengthened 2030 emissions-peak and 2060 carbon-neutrality targets and low per-capita CO2 versus Canada/Russia/US.",
              "governance": "Views UNCLOS as inadequate for all Arctic affairs (conflicts with Spitsbergen Treaty); pushes for elevation from observer to full Arctic Council member, or enhanced roles as a fallback, playing the long game.",
              "indigenous": "Recognizes Arctic nations' sovereignty over their Indigenous peoples but resents that observer status ranks China below Indigenous peoples' organizations in Council discussions and working groups."
            },
            "redLines": [
              "No Russian (or other) restrictions on freedom of navigation and innocent passage for Chinese vessels along the NSR.",
              "No blockage of exploration and exploitation rights within the Arctic high seas.",
              "Do not allow the U.S. to deny China's elevation to Arctic Council member state."
            ],
            "batna": "If denied full Arctic Council membership, seek enhanced responsibilities/roles as observer and play the long game to erode resistance; keep exploiting the legally 'open' high seas bilaterally and via the Polar Silk Road with Russia and EU partners.",
            "concessions": [
              "Accept enhanced observer responsibilities instead of full membership if member states refuse elevation.",
              "Balance Wolf Warrior assertiveness with a more measured tone; may attend multilateral talks despite bilateral preference.",
              "Offer investment and infrastructure construction (e.g., Russian Arctic bases, Nordic economies) as inducements for cooperation.",
              "Emphasize scientific research, environmental protection, and cooperative Arctic/non-Arctic partnerships as trade-friendly framing."
            ],
            "coalitions": {
              "natural_allies": [
                "Russia",
                "Denmark",
                "Finland",
                "Iceland",
                "Norway",
                "EU (global commons framing)",
                "Canada (military training)"
              ],
              "adversaries": [
                "United States"
              ]
            },
            "style": "Measured 'Major Country Diplomacy' with Wolf Warrior edge in reserve; strongly prefers bilateral deals over multilateral forums.",
            "privateStrategy": [
              "Icebreaker development is publicly economic but is tied to securing basing agreements with Russia and providing security for BRI trade routes.",
              "Use investment in Russia's existing Arctic military infrastructure as a covert wedge to begin the basing-agreement process.",
              "Pressure Denmark behind the scenes to force Greenland to lift mining restrictions blocking Chinese access to uranium and precious metals.",
              "Expect the U.S. to refuse bilateral talks; play the long game to erode other nations' hesitance and ultimately win full member status."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-norway",
          "displayName": "Norway",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "Norwegian Ministry of Foreign Affairs delegation, negotiating as the sitting Arctic Council Chair to defend Norwegian territorial integrity and lead constructive Arctic cooperation.",
            "principles": [
              "Norwegian Arctic claims extend to the North Pole.",
              "Peace, stability, and well-functioning cooperation with our Arctic neighbours.",
              "Defend Norwegian interests in the Arctic including military, economic, and conservation efforts.",
              "Strengthen the NATO alliance and its ability to respond to crises in the Arctic.",
              "Reduction in tension between China, Russia, and the U.S. over the Arctic."
            ],
            "endStates": {
              "primary": "Norwegian territorial integrity is preserved, and its resources developed by its people.",
              "alternate": "International recognition of the Svalbard EEZ."
            },
            "positions": {
              "territory": "Honour UNCLOS zones; EEZ/continental-shelf claims overlap Denmark and Russia and must be governed by international law. Svalbard is Norwegian sovereign territory under the Svalbard Treaty; accept treaty access only inside the 12nm territorial waters, but adamantly claim the surrounding EEZ.",
              "sea_lanes": "New shipping lanes opening with melting ice raise safety/security challenges; manage via international law (UNCLOS) and Arctic Council cooperation; improve maritime transport as a national industry.",
              "militarization": "Increased militarization threatens Arctic peace; push demilitarization and dialogue via the Arctic Council, while urging NATO to build collective Arctic response capacity. Fear an American overreaction to Chinese/Russian activity dragging the region into great-power conflict.",
              "resources": "Resources in Norwegian waters/land only explored or extracted by express Norwegian Government permission; each Arctic state manages its own recognized territory. Right to restrict foreign use within the Svalbard EEZ. Seafood, energy, and maritime industry are essential; use expertise to expand influence with Canada and Russia.",
              "environment": "Preserve fragile Arctic ecosystem; extraction must minimize ecological impact; retain Svalbard wilderness; uphold the Arctic high-seas commercial fishing ban with multilateral (nine-nation) monitoring; all nations must adhere to Paris, with China and U.S. cutting emissions most.",
              "governance": "UNCLOS governs Arctic maritime disputes; the Svalbard Treaty is sufficient and must not be reformed. Keep the Arctic Council a cooperation forum that excludes hard security/governance topics. Supported China's observer status but oppose full membership.",
              "indigenous": "Support Indigenous peoples' organisations in the Arctic Council; Sami are represented in the Norwegian Parliament and Nordic Council, and the 1988 constitutional amendment obligates the state to preserve Sami way of life, language, and culture; note Russia's exploitation of its Indigenous peoples."
            },
            "redLines": [
              "No agreement or regulation limiting Norway's EEZ surrounding Svalbard.",
              "No foreign fleet establishing patrols in Norwegian sovereign waters surrounding Svalbard.",
              "No foreign claims on, or licenses granted for, resource exploration/exploitation within the Svalbard EEZ.",
              "No reform of the Svalbard Treaty.",
              "No making China a member state of the Arctic Council."
            ],
            "batna": "Maintain the status quo under the Svalbard Treaty and UNCLOS, keeping the Temporary Fisheries Protection Zone (TFPZ) in place unilaterally until the Svalbard EEZ is honoured, and rely on NATO and Nordic defense cooperation for security.",
            "concessions": [
              "Accept international/treaty access inside the 12nm Svalbard territorial waters for all signatories.",
              "Pursue bilateral cooperation with Russia on seas, resources, climate, and coastal issues despite the Ukraine invasion.",
              "Allow limited, balanced Chinese economic involvement in the Arctic (kept below Arctic Council membership).",
              "Share maritime/marine-biotech/seabed-mining expertise with Canada and Russia to build joint industries.",
              "Frame the TFPZ as temporary, convertible to full EEZ recognition."
            ],
            "coalitions": {
              "natural_allies": [
                "Denmark",
                "Iceland",
                "Finland",
                "Sweden",
                "NATO"
              ],
              "adversaries": [
                "China",
                "Russia"
              ]
            },
            "style": "Cooperative, law-based, and consensus-driven as Arctic Council Chair, but firm and adamant on Svalbard sovereignty.",
            "privateStrategy": [
              "Fears an American overreaction to Chinese/Russian activity; wants U.S. de-escalation but avoid openly criticizing the ally.",
              "Quietly wants to restore bilateral cooperation with Russia on Arctic issues while publicly maintaining pressure over Ukraine.",
              "Treats the TFPZ as a lever to force eventual recognition of the full Svalbard EEZ, not a genuinely temporary measure.",
              "Deviations from these positions require prior clearance from the Foreign Minister before negotiating."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-denmark",
          "displayName": "Denmark",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "The Kingdom of Denmark's Ministry of Foreign Affairs, holding foreign-policy authority for the realm including Greenland (Grønland) and the Faroe Islands, negotiating as an Arctic coastal state through Greenland.",
            "principles": [
              "Through Grønland (Greenland) we are an Arctic nation.",
              "We will resolve all boundary issues in accordance with international law.",
              "The Kingdom and Grønland must appear as a coherent, unified entity speaking with a common voice.",
              "The Kingdom must play a key role in future Arctic international cooperation, with care and accountability."
            ],
            "endStates": {
              "primary": "Greenland's territorial integrity is preserved and its resources developed per its people's desires, with the continental-shelf determination resolved.",
              "alternate": "Peaceful resolution of all boundary issues, with Pituffik Space Base retained as a deterrent to Russia."
            },
            "positions": {
              "territory": "Uphold UNCLOS-based EEZ/continental-shelf claims; CLCS submission shows geologic linkage of the Lomonosov Ridge to Greenland, so Canadian/Russian ridge claims are invalid and Russia's CLCS validation is not final; resolve overlaps with Canada, Norway, Russia via diplomacy (Hans Ø model).",
              "sea_lanes": "Honor UNCLOS delineation of waters and zones; require notification and proper protocols for transit through Greenland waters (Chinese/Russian vessels have violated this).",
              "militarization": "Arctic militarization threatens peace; strengthen NATO's Arctic capacity and collective defense; retain U.S. Pituffik Space Base as mutual benefit and Russia deterrent; address Denmark's own surveillance gap around Greenland.",
              "resources": "Greenland grants permission for extraction on land and out to 3nm; Denmark holds exclusive rights in the EEZ and continental shelf beyond; Greenland's EEZ excluded from EU Common Fisheries Policy; pursue sustainable extraction to offset Greenland subsidies; disputes settled by dialog under international law, no third-party governance.",
              "environment": "All must uphold the Paris Agreement; press China and the U.S. (top emitters) for deeper cuts; protect Greenland ecosystems, glacial tourism, and fisheries; commercial-fishing ban must be monitored multilaterally by the nine signatories with continued scientific monitoring.",
              "governance": "Strengthen the Arctic Council's cooperation and dispute resolution while retaining the 'Arctic 5' format for coastal-state issues; secure full inclusion of Greenland and the Faroe Islands; support EU observer status; oppose China as a full member.",
              "indigenous": "Greenland's Self-rule (Naalakkersuisut) is a global model for indigenous peoples, granting autonomy over culture and domestic economy; support Greenland's sovereign choices (e.g. staying out of the EU)."
            },
            "redLines": [
              "Any Chinese military presence on Greenland or in its surrounding waters.",
              "Any agreements made by other states regarding licenses within the Danish EEZ.",
              "Any attempt to make China a member state of the Arctic Council.",
              "No third-party (non-coastal-state) governance of the Arctic Ocean; Iceland, Finland, Sweden excluded from Arctic 5 economic discussions."
            ],
            "batna": "Fall back from the primary goal to the alternate: a peaceful, international-law-based resolution of boundary disputes while preserving the status quo (Pituffik base, unresolved but non-adjudicated ridge claims) rather than conceding territory or license rights.",
            "concessions": [
              "Bilateral/diplomatic settlement of overlapping EEZ and boundary disputes with Canada, Norway, and Russia (Hans Ø precedent).",
              "Sustainable joint resource-extraction agreements within Greenland's EEZ.",
              "Support for EU observer status on the Arctic Council and strengthened Council dispute-resolution mechanisms.",
              "Greenland autonomy to grant its own land/near-shore licenses (including existing Chinese uranium license) as a domestic decision."
            ],
            "coalitions": {
              "natural_allies": [
                "United States",
                "Norway",
                "Canada",
                "Arctic 5 coastal states",
                "NATO allies",
                "European Union"
              ],
              "adversaries": [
                "China",
                "Russia"
              ]
            },
            "style": "Cooperative, law-abiding, and multilateral, projecting a unified Kingdom-Greenland front while quietly guarding sovereignty and managing great-power balance.",
            "privateStrategy": [
              "Conceal the internal tension: Greenland has an unexercised independence-referendum right, and every decision must be weighed against triggering full independence.",
              "The Naalakkersuisut has banned mineral extraction and holds positions that diverge from Denmark's; hide this friction and present a common voice to foreign states.",
              "Pituffik base is valued partly because it reduces the likelihood of Greenlandic independence and proves Denmark represents Greenland internationally — do not state publicly.",
              "Deviation from these positions requires prior clearance from the Foreign Minister; balance the U.S. relationship against Greenland's resource autonomy (e.g. the Chinese uranium license) discreetly."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-finland",
          "displayName": "Finland",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "Finland's Ministry of Foreign Affairs delegation, hosting the Arctic dialog conference as a non-coastal Arctic state, EU/NATO member, and self-styled intermediary between Russia and the West.",
            "principles": [
              "Finland will be an active and responsible Arctic actor.",
              "Finland's diversified Arctic experience is set to assist in the development of the region.",
              "Provide leadership through Finnish expertise in sustainable development, the maritime industry, and mineral extraction."
            ],
            "endStates": {
              "primary": "Strengthen the delicate balance between relations with Russia and inclusion in the EU and NATO.",
              "alternate": "International cooperation in the sustainable and peaceful development of the Arctic."
            },
            "positions": {
              "territory": "Not an Arctic Ocean coastal nation, so no continental-shelf dispute; leverage this 'neutrality' to act as intermediary and broker a resolution among coastal states.",
              "sea_lanes": "Emphasize peaceful, cooperative access as seaways open with thawing ice; growing maritime access raises stakes for security and Finnish maritime-industry interests.",
              "militarization": "Oppose Arctic militarization and push demilitarization via the Arctic Council, while boosting own defense budget (cyber, air defense, surveillance) and offering NATO cold-climate/Arctic training; fears U.S. overreaction to China/Russia.",
              "resources": "Pioneer in sustainable mining; wants to join Arctic energy operations and help others extract resources to build bilateral ties with Denmark, Norway, and Russia; opposes commercial-fishing restrictions that strain Finnish fishing.",
              "environment": "Protect fragile tundra and marine ecosystems; insist all adhere to the Paris Agreement, demand deeper cuts from top emitters China and the U.S., and call out Canada's/Norway's 'green' oil hypocrisy.",
              "governance": "Arctic Council is the main and only fully inclusive forum; allow limited security discussion, support EU full observer status, oppose China's member-state accession, and reject Arctic Five exclusion of Finland/Iceland/Sweden.",
              "indigenous": "Protect the Sámi, the only Indigenous people in the EU, whose status is constitutionally guaranteed; ensure Indigenous organizations are represented and participate in the Arctic Council."
            },
            "redLines": [
              "Any attempt to make China a member state of the Arctic Council.",
              "Exclusion of Finland (with Iceland and Sweden) from Arctic decision-making by the Arctic Five.",
              "Erosion of Sámi rights and constitutionally guaranteed status."
            ],
            "batna": "Fall back to championing broad international cooperation for sustainable, peaceful Arctic development and rely on EU/NATO security guarantees plus its own strengthened defense if no deal is reached.",
            "concessions": [
              "Offer cold-climate and Arctic training/exercises to NATO and international partners.",
              "Share sustainable-mining, mine-water-management, and geotechnical expertise to help other states develop resources.",
              "Act as neutral broker on coastal continental-shelf disputes.",
              "Support new like-minded observers, including EU full observer status, on the Arctic Council."
            ],
            "coalitions": {
              "natural_allies": [
                "Denmark",
                "Norway",
                "Iceland",
                "Sweden",
                "EU",
                "NATO/Scandinavian partners"
              ],
              "adversaries": [
                "China (bid for Council membership)",
                "Arctic Five (as an exclusive bloc)",
                "Russia (threat, yet essential dialog partner)"
              ]
            },
            "style": "Gracious host and pragmatic bridge-builder favoring dialog, diplomacy, and consensus over confrontation.",
            "privateStrategy": [
              "Secretly leverage its unique channel to Russia to draw Moscow into multilateral EU-Arctic dialog, without appearing to soften its stance on Russia as a threat.",
              "Quietly seek new non-EU trade outlets to offset a ~75% collapse in Russia trade since NATO accession.",
              "Coordinate with Denmark (and align with China's stance) to push an Arctic 'global commons' framing to dilute Arctic Five control.",
              "Use resource-development assistance as a tool to build closer bilateral ties with Denmark, Norway, and Russia for economic gain."
            ]
          }
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
          "fallbackModel": "none",
          "brief": {
            "role": "Regional economic heavyweight and would-be honest broker, working with the UN SRSG to de-escalate the Fergana crisis while advancing Kazakh trade, resource-sovereignty, and security interests.",
            "principles": [
              "National sovereignty is paramount: no nation may dictate how or with whom Kazakhstan trades its oil, gas, minerals, or water.",
              "Kazakhstan alone decides its diplomatic, economic, and military ties, including relations outside the region.",
              "Support economic integration, lower trade barriers, and expanded export of Kazakh commodities (agriculture, minerals, oil, gas).",
              "Kazakh security and territorial integrity are imperative; explore self-defense arrangements without binding commitments.",
              "Reduce regional tensions, restore the status quo on border demarcation, and protect Kazakh water resources."
            ],
            "endStates": {
              "primary": "Reduced regional tensions with a return to the status quo on border demarcation and enhanced protection of Kazakhstan's water resources, achieved via a de-escalation framework rather than any binding agreement at this summit.",
              "alternate": "Non-binding areas of agreement and follow-on discussion tracks (led later by the Foreign Minister with the Central Asian states only), plus deepened bilateral economic and security dialogues with Uzbekistan, China, India, and Russia."
            },
            "positions": {
              "BORDERS": "Publicly supports negotiated border alignment and de-escalation aiming at the status quo ante, but refrains from openly backing any specific party's position in multilateral talks; explores areas of agreement bilaterally, especially with Tajikistan and Kyrgyzstan, without concluding a final deal.",
              "WATER": "Openly favors mutually respectful water-resource management and dialogue; prioritizes protecting Kazakh water resources; works bilaterally/multilaterally with Tajikistan to find agreement while staying publicly neutral on the specific Kyrgyz-Tajik dispute.",
              "HYDROPOWER": "Engages Tajikistan on power projects; interested in partnering on additional PRC-style solar/energy investment deals (e.g., following Tajikistan's $500M solar arrangement) rather than taking a hard stance on Roghun.",
              "ENERGY": "Pursues expanded oil, gas, mineral, and metal exports and pipeline/rail projects (repairs and new lines) in partnership with Uzbekistan, Russia, and China toward western Chinese provinces; positions itself as a transit and supply hub.",
              "SECURITY": "Entertains arrangements supporting self-defense and territorial integrity but holds NO authority to sign binding deals; explores broad points only; declines expanding CSTO or security ties with Russia.",
              "EXTREMISM": "Interested in countering extremism, separatism, and direct threats to Kazakh national security; will explore intelligence frameworks only bilaterally and only regarding Tajik/Kyrgyz threats.",
              "CLIMATE": "Open to cooperation on natural-resource protection and conservation (including with Russia and India) and to Indian technical assistance for energy, agriculture, and IT sectors.",
              "INFLUENCE": "Balances great powers to preserve strategic autonomy: deepens economic ties with China and Russia as equal partners, cultivates India as trade/energy/security partner, and quietly builds Central Asian security options independent of the CSTO."
            },
            "redLines": [
              "No nation may dictate how or with whom Kazakhstan trades its natural resources, including water; sovereignty over resources is non-negotiable.",
              "Any nation demanding Kazakhstan subordinate its diplomatic/economic/military choices triggers immediate cutoff of talks and report to the Foreign Minister.",
              "No intelligence-sharing agreements with any summit nation, except tightly held bilateral exceptions; the potential PRC arrangement must remain secret from all other nations.",
              "No binding security or final border/water agreements to be signed at this summit."
            ],
            "batna": "Walk away from any deal that compromises resource sovereignty and instead defer to follow-on Foreign-Minister-led talks with only the Central Asian states, while pursuing bilateral economic and security partnerships (Uzbekistan mutual defense, China/India arms and trade) outside the summit; when guidance is unavailable, proceed per standing instructions.",
            "concessions": [
              "Lower trade barriers and expand two-way trade and imports with regional free-trade partners.",
              "Offer Kyrgyzstan and China a Middle Corridor rail/road branch with Chinese FDI, using Kyrgyz and Kazakh labor (Chinese technical supervision acceptable).",
              "Partner with Uzbekistan, Russia, and China on pipeline repairs/new lines and enhanced rail freight networks.",
              "Provide/receive technical cooperation on natural-resource conservation, energy, agriculture, and IT (notably with India and Russia).",
              "Facilitate transit of Uzbek commodities through Kazakhstan to western China."
            ],
            "coalitions": {
              "natural_allies": [
                "Uzbekistan",
                "China",
                "India"
              ],
              "adversaries": [
                "Russia"
              ]
            },
            "style": "Sovereignty-first, information-gathering broker: publicly cooperative and de-escalatory, privately transactional, advancing bilateral deals while avoiding binding commitments.",
            "privateStrategy": [
              "Secretly explore intelligence-sharing with the PRC on Tajik/Kyrgyz/Turkmen threats and with India on PRC activity, only in head-of-delegation bilaterals, hidden from all other nations.",
              "Quietly probe a Kyrgyz-Uzbek-Kazakh security bloc and a Uzbek mutual-defense pact, anticipating possible CSTO withdrawal after Armenia's freeze.",
              "Covertly pursue arms-purchase deals with China and India (aircraft, armor, artillery, comms) and gather BRI/CSTO/arms intelligence, reporting to the Foreign Minister; sign nothing.",
              "Decline Russian CSTO expansion and arms offers politely while extracting information, and use Russia to broker bilateral access to India."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-uzbekistan",
          "displayName": "Uzbekistan",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "Reduce regional tensions and return to the status quo on border demarcation while protecting Uzbekistan's borders and water resources, and gather intelligence on all other delegations' positions.",
            "principles": [
              "Uzbekistan's current borders are non-negotiable; altering them is a hard red line.",
              "Fresh water is vital to the people, agriculture, and national security; Uzbekistan may acquire water from beyond its borders but will never export its own.",
              "Support the UN SRSG's mediation and collect all available information on other nations' positions to bend outcomes toward Uzbek interests.",
              "Openly favor collaborative use of Central Asian natural resources and economic integration / lower trade barriers.",
              "Maintain the inherent right to self-defense and territorial integrity through exploratory (non-binding) security arrangements."
            ],
            "endStates": {
              "primary": "De-escalate tensions and restore the status quo on Fergana Valley border demarcation while safeguarding Uzbek water resources; secure frameworks (not final deals) for resource trade and security cooperation.",
              "alternate": "Absent broad agreement, lock in confidence-building measures and bilateral trade/security frameworks that preserve current borders and water rights in perpetuity, and harvest maximum intelligence for later Tashkent-led talks."
            },
            "positions": {
              "BORDERS": "Current borders are fixed and must be maintained in perpetuity; only confidence-building measures authorized, no final demarcation deals except between foreign ministers.",
              "WATER": "Open to importing water from neighbors (e.g., Kazakh water for mining/agriculture) and sharing Fergana Valley resources, but will never export Uzbek water; no final water agreements at the summit.",
              "HYDROPOWER": "Any upstream hydropower arrangement must not compromise Uzbek downstream water security; explore only, no binding commitments.",
              "ENERGY": "Promote export of Uzbek oil, gas, metals, and minerals via Kazakh, Russian, and Chinese routes; frameworks only, final deals reserved for foreign ministers.",
              "SECURITY": "Explore non-binding self-defense and confidence-building arrangements; interested in Kyrgyzstan/Tajikistan withdrawing from or weakening CSTO (Uzbekistan is not a CSTO member); no binding security pacts.",
              "EXTREMISM": "Deeply concerned by Tajik/regional militant movements; seek bilateral counterterrorism intelligence frameworks without final commitments.",
              "CLIMATE": "Frame collaborative resource management as benefiting all regional peoples; no concessions that surrender water or border sovereignty.",
              "INFLUENCE": "Preserve strategic autonomy; deepen economic ties with China (BRI on Uzbek terms) and cultivate India and Kazakhstan as export markets while managing declining Russian influence."
            },
            "redLines": [
              "No alteration of Uzbekistan's current borders.",
              "No export of Uzbek water resources abroad.",
              "No intelligence-sharing agreements with any summit nation (China exception explored bilaterally only).",
              "No acceptance of PRC export-bank loans for BRI projects; all BRI construction done by Uzbek citizens.",
              "No binding/final agreements on security, borders, water, or trade at this summit (foreign-minister sign-off required)."
            ],
            "batna": "Walk away from any binding deal, hold the territorial and water status quo, and defer all substantive trade/security agreements to later Tashkent-controlled bilateral negotiations, having gathered intelligence on all parties.",
            "concessions": [
              "Import Kazakh (or Tajik) water and natural resources to support Uzbek mining and agriculture.",
              "Sell old/obsolete military equipment (jets, helicopters, artillery, armored vehicles) to Kyrgyzstan and Tajikistan.",
              "Export Uzbek oil and gas via Kazakh, Russian pipelines to the PRC; expand imports and lower trade barriers regionally.",
              "Share mining technological expertise with Kazakhstan.",
              "Offer confidence-building measures and trade-framework outlines to Tajikistan and Kyrgyzstan."
            ],
            "coalitions": {
              "natural_allies": [
                "Kazakhstan (oil/gas, mining, rare earths, water imports)",
                "China (major export market and potential arms/intelligence partner)",
                "India (emerging export market, arms, IT/cyber tech)"
              ],
              "adversaries": [
                "Tajikistan (border and security friction; militant threat source)",
                "Kyrgyzstan (border security challenge; Fergana Valley water competition)",
                "Russia (declining but a long-term security challenge; CSTO influence)"
              ]
            },
            "style": "Publicly conciliatory and integration-friendly, privately probing and intelligence-driven, playing rivals against each other while conceding nothing binding.",
            "privateStrategy": [
              "Play Kyrgyzstan and Tajikistan against each other to expose their border objectives and strengthen Uzbek positions; report everything to the Foreign Ministry immediately.",
              "Explore intelligence-sharing on Tajik/Kyrgyz threats ONLY bilaterally with China; no other nation may know of this initiative.",
              "Build rapport with Russia and probe its Ukraine-war and pipeline/defense intentions, but never openly agree with Russian positions; quietly favor Kyrgyz withdrawal from the CSTO.",
              "Treat the summit primarily as an intelligence-collection operation: harvest each delegation's flexible areas, red lines, arms needs, and BRI/security plans and relay to Tashkent, committing to nothing binding."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-kyrgyzstan",
          "displayName": "Kyrgyzstan",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "Reduce regional tensions and return to the status quo on border demarcation while protecting Kyrgyz sovereign territory and water resources, gathering intelligence without concluding any binding agreement.",
            "principles": [
              "Never surrender any current sovereign Kyrgyz territory under any framework (Red Line).",
              "Kyrgyz water is for the Kyrgyz people, livestock, and land; exporting water resources is a Red Line.",
              "Support the UN SRSG's mediation while collecting all available information on other delegations' positions and flexibilities.",
              "Preserve Kyrgyzstan's inherent right to self-defense and territorial integrity through new security arrangements.",
              "Make no final/binding agreements at the summit; report all findings to the Foreign Minister for follow-on guidance."
            ],
            "endStates": {
              "primary": "De-escalate tensions and restore the status quo on Fergana Valley border demarcation with Kyrgyz sovereign territory and water resources fully protected.",
              "alternate": "Secure diplomatic backing (esp. Kazakhstan) for Kyrgyz border and water positions plus a framework for new regional security and economic arrangements, with everything referred back to the Foreign Ministry."
            },
            "positions": {
              "BORDERS": "Return to and lock in the status quo demarcation; retain all current sovereign territory including exclaves; welcome Uzbek demarcation proposals and confidence-building measures; blame Tajikistan for border problems while extracting their proposals.",
              "WATER": "Openly support equitable shared water dialogue and ICWC reform, but block any export/plunder of Kyrgyz water; only inbound water sent into Kyrgyz treatment/holding reservoirs (with Chinese tech) for possible later monitored re-export is acceptable.",
              "HYDROPOWER": "Protect Kyrgyz winter power and upstream water control against downstream demands; resist arrangements that would constrain Kyrgyz use of its own water for energy.",
              "ENERGY": "Address the Kyrgyz energy emergency and drought shortages by keeping control of domestic water/hydropower and seeking Chinese/regional economic and infrastructure support.",
              "SECURITY": "Explore (non-binding) security arrangements safeguarding self-defense and territorial integrity; view Russia/CSTO as a weak guarantor and pursue new arrangements with Uzbekistan and Kazakhstan; reject any Russian troop deployments into Kyrgyzstan.",
              "EXTREMISM": "Open to counterterrorism cooperation consistent with sovereignty; treat as a vehicle for broader security dialogue and information-gathering.",
              "CLIMATE": "Frame water conservation and stewardship as protecting Kyrgyz resources against wasteful downstream users; welcome Chinese technical expertise in water management.",
              "INFLUENCE": "Tilt away from Russia/EAEU toward China/SCO for economics; use India as a stalking horse against China; balance great powers to preserve Kyrgyz autonomy and gain FDI, BRI, and arms options."
            },
            "redLines": [
              "No agreement surrendering any sovereign Kyrgyz territory.",
              "No export of Kyrgyz water resources beyond its borders.",
              "No intelligence-sharing agreement with any nation (China-only exception discussed strictly bilaterally and secretly).",
              "Reject any confidence-building measure involving Russian troops deployed into Kyrgyzstan.",
              "No final/binding agreements concluded at the summit."
            ],
            "batna": "Conclude nothing binding, hold the territorial and water status quo, report all findings to the Foreign Minister, and await further guidance rather than accept any deal that crosses a red line.",
            "concessions": [
              "Accept inbound water into Kyrgyz treatment/holding reservoirs for possible later monitored re-export.",
              "Provide water help to Kazakhstan 'under the right conditions' in exchange for diplomatic support.",
              "Offer diplomatic reciprocity and confidence-building measures with Uzbekistan on borders/security.",
              "Jointly funded BRI infrastructure using predominantly Kyrgyz labor (Chinese technical supervisors acceptable).",
              "Explore replacing the EAEU with an SCO-based economic framework."
            ],
            "coalitions": {
              "natural_allies": [
                "Kazakhstan",
                "Uzbekistan",
                "China"
              ],
              "adversaries": [
                "Tajikistan",
                "Russia"
              ]
            },
            "style": "Outwardly cooperative and information-hungry: friendly, non-committal, extracts others' positions while quietly protecting red lines and deferring all decisions to the capital.",
            "privateStrategy": [
              "Secretly consider withdrawing from the CSTO and coordinate the timing/partnership with Kazakhstan (and Uzbekistan) on leaving Russia's orbit.",
              "In head-of-delegation-only bilaterals with China, explore an intelligence-sharing arrangement targeting Tajikistan and Uzbekistan; no other nation may learn of this (Red Line).",
              "String Tajikistan along to extract maximum intelligence while never agreeing to anything with them.",
              "Privately explore arms purchases from Russia, China, and India (heads-of-delegation only) and accept Chinese water tech with no strings attached."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-tajikistan",
          "displayName": "Tajikistan",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "Tajikistan seeks to de-escalate the Fergana Valley crisis and return to the status quo on border demarcation while protecting its water resources, territorial integrity, and sovereign border claims.",
            "principles": [
              "Preserve Tajik territorial integrity absolutely; no Tajik territory may be traded away at this summit and no final border agreements may be signed here.",
              "Reduce regional tension and return to the status quo on border demarcation, accepting only incremental adjustments backed by verifiable, neutral-observer confidence-building measures.",
              "Protect Tajikistan's water resources as sovereign, sharing only within a mutual Central Asian natural-resources management plan.",
              "Treat Russia as a declining power and no longer a viable security guarantor; work toward the sundowning of the CSTO and a new Central Asian-centered security order.",
              "Pursue economic integration, FDI, and diversified arms/security partnerships to modernize the state, reporting all substantive findings to the Foreign Minister before committing."
            ],
            "endStates": {
              "primary": "Reduce tensions and return to the pre-crisis status quo on border demarcation with full protection of Tajik water resources and territorial integrity, leaving final settlements for later foreign-minister-level talks.",
              "alternate": "A framework (non-binding) of confidence-building measures and reciprocal troop limits that freezes the disputes without conceding territory, plus expanded economic and security partnerships outside Russian control."
            },
            "positions": {
              "BORDERS": "Return to status quo; no territory traded and no final agreement signed. Only incremental adjustments with Uzbekistan backed by verifiable neutral-observer CBMs; firm, unsoftened stance toward Kyrgyzstan; frameworks only, sovereignty maintained to the greatest degree possible.",
              "WATER": "Tajik water resources remain sovereign or are shared only under a joint Central Asian natural-resources management plan; open to collaborative dialogue and outside technical assistance (e.g. Chinese) provided the price is low.",
              "HYDROPOWER": "Approach hydropower within the broader natural-resources framework, ensuring Tajik control of its water is not compromised by any downstream allocation demands.",
              "ENERGY": "Engage on regional energy and resource collaboration through economic integration and FDI while safeguarding Tajik water/energy sovereignty.",
              "SECURITY": "Support Tajikistan's right to self-defense and territorial integrity; back a new Central Asian security arrangement excluding Russia (end of CSTO), possibly with non-regional observers/partners approved by the Foreign Minister. No binding agreements, frameworks only.",
              "EXTREMISM": "Open to counterterrorism/counterinsurgency cooperation, including combined CT/COIN training exercises (notably with Uzbekistan) starting as early as next year, as frameworks for later agreement.",
              "CLIMATE": "Address droughts and water shortage through collaborative regional resource management and outside technical assistance kept affordable.",
              "INFLUENCE": "Deepen ties with China (BRI, top trading partner) and revive the India partnership, while diluting Russian dominance; keep India talks discreet to avoid provoking Chinese BRI curtailment."
            },
            "redLines": [
              "No recognition of Uzbekistan's border claims unless Uzbekistan openly and fully backs Tajik border claims against Kyrgyzstan.",
              "No continued economic or security partnership with India unless India openly commits to recognizing Tajik sovereignty and border claims.",
              "No Russian military personnel as observers or peacekeepers of any kind inside Tajikistan; immediately and publicly reject any such proposal.",
              "No Tajik territory may be ceded or traded away at this summit.",
              "Any China intelligence-sharing initiative on Kyrgyzstan/Uzbekistan is strictly bilateral and secret; no other nation may learn of it."
            ],
            "batna": "Sign no binding agreement at the summit; hold the status-quo border and sovereign water position, gather intelligence and frameworks only, and refer all substantive terms back to the Foreign Minister for later bilateral talks in Dushanbe.",
            "concessions": [
              "Lower trade barriers, expand exports (agriculture, minerals, oil, natural gas) and imports, and welcome FDI case-by-case from all seven delegations.",
              "More generous economic partnerships with Kyrgyzstan IF Kyrgyzstan openly supports Tajik positions.",
              "Reciprocal, verifiable troop-limitation CBMs along the Kyrgyz-Tajik border (platoon cap at outposts; battalion cap within 25 km absent notification).",
              "Recognize Uzbekistan's border claims in exchange for Uzbek open support against Kyrgyzstan.",
              "Shared use of Tajik water under a mutual Central Asian natural-resources management plan.",
              "Combined CT/COIN training and purchase of excess military equipment with Uzbekistan (frameworks only)."
            ],
            "coalitions": {
              "natural_allies": [
                "China",
                "India",
                "Uzbekistan",
                "Kazakhstan"
              ],
              "adversaries": [
                "Kyrgyzstan",
                "Russia"
              ]
            },
            "style": "Cautious, non-committal framework-builder: publicly conciliatory and pro-integration, privately probing for intelligence, defers all binding decisions to the Foreign Minister.",
            "privateStrategy": [
              "Secretly explore leaving the CSTO (like Armenia) and probe whether Kazakhstan would also exit and co-found a new Central Asian security bloc; keep any exit intention hidden.",
              "In heads-of-delegation bilaterals only, pursue secret intelligence-sharing with China on Kyrgyzstan/Uzbekistan (and possibly India); no other nation may know this exists.",
              "Discreetly seek discounted arms purchases from Russia, China, and India (aircraft, armor, artillery, EW gear) — information-gathering only, deals deferred to Dushanbe.",
              "Quietly press Russia to redeploy its 201st Military Base out of Dushanbe within two years, and keep India economic talks hidden from China to protect BRI benefits."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-russia",
          "displayName": "Russia",
          "side": "right",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "Reestablish Russian influence in its Central Asian 'near abroad' by reducing tensions and setting conditions for follow-on bilateral engagement, while working with (and steering) the UN SRSG's mediation.",
            "principles": [
              "Central Asia is Russia's near abroad and Russia must remain the region's primary security guarantor; no arrangement may supplant that role.",
              "The CSTO is vital to national security; any hint of Kazakh, Kyrgyz, or Tajik pausing or leaving the treaty is a critical concern.",
              "Reject any regional coordinating organization that excludes Russia, or that installs China as primary leader.",
              "Oppose aggressively any oil/gas/minerals/metals trade deal (bilateral or multilateral) with China that does not include Russia as resource origin or partner.",
              "Support a peaceful, comprehensive solution to border and water disputes; reject any use of force."
            ],
            "endStates": {
              "primary": "Tensions reduced under Russian-led framing, Russia affirmed as sole security guarantor and central regional power, EAEU/CSTO expanded (welcoming Tajikistan and Uzbekistan into EAEU), and conditions set for subsequent bilateral deals advancing Russian interests.",
              "alternate": "Absent formal agreements, gather maximum intelligence on rivals' positions and Chinese/Western inroads, block adverse organizations, and preserve leverage for later bilateral engagement by foreign ministries."
            },
            "positions": {
              "BORDERS": "Borders must remain exactly as they are today; oppose any demarcation change with vigor but without publicly embarrassing Russia. Not opposed to a Fergana Valley monitoring mission only if Russia is a primary leader (two of three states are CSTO members).",
              "WATER": "Support collaborative, peaceful management of transboundary water; offer to broker a Russian-technology Caspian desalination facility serving western Kazakhstan and Uzbekistan; privately back Tajik water rights and infrastructure as quid-pro-quo.",
              "HYDROPOWER": "Fold hydropower/water disputes into Russia-brokered collaborative resource dialogue rather than a rival-led mechanism; leverage as bargaining linkage.",
              "ENERGY": "Expand Russian pipeline infrastructure to carry regional oil/gas to western markets (cost/revenue sharing with Uzbekistan); deepen EAEU energy integration, steering Kyrgyzstan away from PRC dependence.",
              "SECURITY": "Russia remains the indispensable security guarantor; entertain (not finalize) bilateral/multilateral security arrangements supporting Russia's self-defense and territorial integrity; oppose any new security body excluding Russia or led by China. Delegation cannot sign binding security agreements.",
              "EXTREMISM": "Offer counterterrorism/security assistance, especially to Tajikistan; insist (bilaterally only) Tajik authorities dismantle the group behind the Moscow attack and hand over perpetrators; explore intel-sharing cooperation with China and a framework with India on terrorism/separatism.",
              "CLIMATE": "Engage via collaborative resource-management and desalination/water-infrastructure offers that bind partners to Russian technology and mediation.",
              "INFLUENCE": "Reassert Russian primacy; play China and India against each other and mediate between them; contain Chinese economic/security expansion and Western inroads while preserving the Moscow-Beijing strategic partnership."
            },
            "redLines": [
              "No regional coordinating or security organization that excludes Russia or makes China its primary leader.",
              "Russia must not be supplanted as Central Asia's security guarantor; CSTO obligations will not be abrogated.",
              "No China resource trade deal (oil/gas/minerals/metals) that excludes Russia as origin or partner.",
              "No alteration of existing borders.",
              "Kazakhstan, Kyrgyzstan, or Tajikistan pausing or withdrawing from the CSTO (handle delicately at top levels)."
            ],
            "batna": "Sign nothing binding (delegation lacks authority for binding security/economic deals); instead block adverse structures, harvest intelligence on all parties, and defer real gains to later bilateral foreign-ministry negotiations, proceeding per standing guidance if the Foreign Minister cannot respond.",
            "concessions": [
              "Welcome Tajikistan and Uzbekistan into the Eurasian Economic Union; expand EAEU trade and lower barriers.",
              "Broker a Russian-technology Caspian desalination facility supplying freshwater to western Kazakhstan and Uzbekistan.",
              "Modern Russian arms for Kazakhstan/Kyrgyzstan (e.g. credit for older equipment; identify Kyrgyz upgrade needs) — explore only, no final deals.",
              "Security/intelligence and personnel assistance to Tajikistan inside Tajikistan; technical water-infrastructure support for Tajik borders/water.",
              "Expanded guest-worker visas for Tajik citizens.",
              "Pipeline cost- and revenue-sharing with Uzbekistan to reach western export markets.",
              "Explore defense-cooperation and terrorism/separatism intel frameworks with India (no commitments)."
            ],
            "coalitions": {
              "natural_allies": [
                "Tajikistan",
                "Kyrgyzstan",
                "China (strategic partner, with caveats)",
                "India (long-term friend)",
                "Kazakhstan (CSTO member, but drifting toward PRC)"
              ],
              "adversaries": [
                "Uzbekistan (contentious, non-CSTO, Western-leaning)",
                "China as regional hegemon/rival resource buyer",
                "Western nations and any organization excluding Russia"
              ]
            },
            "style": "Patient great-power mediator: publicly cooperative and pro-peace, privately coercive and intelligence-driven, using issue-linkage, side-payments, and playing rivals against each other.",
            "privateStrategy": [
              "Secretly pressure the three CSTO allies with threat of sanctions if they entertain security organizations excluding Russia or led by China; privately warn Kazakhstan against its deepening PRC ties and its security partnership with Uzbekistan, and warn Uzbekistan against turning West.",
              "Only bilaterally, offer India an intelligence-sharing arrangement on Chinese activities in Central Asia (incl. PRC political/economic/PLA topics, Head-of-Delegation to Head-of-Delegation) and encourage India to rejuvenate its Tajik air-force ties as a China counterweight — no other nation may know.",
              "Oppose China's reported bid for a military facility in Tajikistan and any PRC hegemonic play, but never at the expense of the Moscow-Beijing partnership; explore deepened Russia-China intel-sharing.",
              "Insist bilaterally that Tajikistan hand over the Moscow-attack planners/perpetrators; treat the summit as reconnaissance — collect all delegations' positions, flexible areas, and Chinese/Western inroads and report to the Foreign Minister for later bilateral exploitation."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-china",
          "displayName": "China",
          "side": "right",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "Expand PRC regional influence in Central Asia while publicly backing peace, quietly ensuring no comprehensive settlement is reached and setting conditions for later bilateral deals.",
            "principles": [
              "Keep Central Asian states off balance and inward-focused; block any comprehensive border/water settlement among them.",
              "Deny India any leadership foothold in Central Asia and isolate it at every turn.",
              "Prevent Russia from reinserting military power (especially in Kyrgyzstan/Tajikistan) and treat the CSTO as defunct.",
              "Secure water flows for China's western provinces; oppose any water accord that excludes imports to China.",
              "Advance Belt and Road Initiative expansion and position China for follow-on bilateral engagement."
            ],
            "endStates": {
              "primary": "Enhanced Chinese regional dominance with disputes left unresolved, no India/Russia leadership role, BRI expanded, and conditions set for bilateral resource and security deals.",
              "alternate": "A limited, non-binding framework (e.g., a Fergana monitoring mission under a China-acceptable neutral lead) that reduces tensions without a binding comprehensive settlement or water terms excluding China."
            },
            "positions": {
              "BORDERS": "Publicly support peaceful resolution but insist borders stay as-is; oppose any demarcation change without embarrassing the parties. A Fergana monitoring mission is acceptable only if led by a disinterested, China-approved nation (never Russia or India), backstopped by China's UNSC role.",
              "WATER": "Openly offer technical/construction help for shared use, but block any final water accord; oppose any deal that excludes water imports to China's western provinces.",
              "HYDROPOWER": "Offer construction and technical assistance (Roghun, winter power) as BRI leverage while avoiding a binding downstream settlement.",
              "ENERGY": "Address Kyrgyz energy emergency via arms/equipment-for-resources deals and BRI infrastructure to deepen dependence on China.",
              "SECURITY": "Offer security assistance, arms sales, cyber and intelligence-sharing bilaterally; torpedo CSTO as the security mechanism; sign no final security agreement at the summit (frameworks only, passed to foreign ministries).",
              "EXTREMISM": "Offer counterterrorism and security assistance (notably to Tajikistan) as leverage to pull states into China's orbit.",
              "CLIMATE": "Frame water sharing and smart resource use as shared health/economic benefit to justify BRI projects and flows to China.",
              "INFLUENCE": "Publicly back Kazakh-friendly ideas and Russia's multilateral positions; privately expand Chinese primacy, isolate India, and downplay Russia's deliverability."
            },
            "redLines": [
              "Central Asian states reaching a comprehensive settlement of border and resource disputes.",
              "Any change to existing borders among Kyrgyzstan, Tajikistan, Uzbekistan.",
              "A water-sharing accord that excludes water imports to China's western provinces.",
              "Russian forces deployed to Kyrgyzstan or Tajikistan to shape their internal politics.",
              "Any enhancement or expansion of India's influence/leadership in Central Asia."
            ],
            "batna": "Prevent any binding agreement, keep disputes frozen, and shift to bilateral engagement with individual states (Kazakhstan, Kyrgyzstan, Tajikistan, Uzbekistan) after the summit to lock in resource, arms, and security deals.",
            "concessions": [
              "Water technical expertise, construction, storage and conservation projects.",
              "BRI infrastructure investment and expansion.",
              "Arms sales and military training at favorable prices (Uzbekistan, Kyrgyzstan).",
              "Economic development aid, mining/agriculture assistance, and political support.",
              "Cyber-security help and intelligence-sharing arrangements (Kazakhstan, Uzbekistan)."
            ],
            "coalitions": {
              "natural_allies": [
                "Kazakhstan",
                "Kyrgyzstan",
                "Russia (public support only)"
              ],
              "adversaries": [
                "India",
                "Russia (privately, as regional rival)"
              ]
            },
            "style": "Publicly cooperative and incentive-driven, privately obstructive and coercive; Wolf Warrior hostility reserved for India.",
            "privateStrategy": [
              "Covertly ensure NO comprehensive border/water settlement is reached; obstruct while never publicly embarrassing the Central Asian states.",
              "Support Russia openly in multilateral sessions but undercut its credibility bilaterally; remind Moscow of the unfulfilled Tumen River land transfer for Sea of Japan access.",
              "Aggressively pull Kyrgyzstan into China's orbit and gather Kyrgyz/Uzbek security-arrangement details for the Foreign Ministry, but conclude no formal agreements and downplay this publicly.",
              "Split India-Tajikistan and India-Russia ties; escalate coercion or direct warnings only with prior Foreign Minister approval, and no final security agreement may be signed at the summit."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-india",
          "displayName": "India",
          "side": "right",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "India seeks to reestablish influence in Central Asia, reduce tensions, and set conditions for follow-on bilateral engagement while blunting Chinese dominance in the region.",
            "principles": [
              "India deserves a leading role in Asia and refuses to acquiesce to Chinese hegemony in Central Asia.",
              "Support Russia's initiatives publicly as a longstanding friend, but never in a way that ties India into direct alliance or lets Moscow reclaim regional primacy.",
              "Champion peaceful, comprehensive, just settlement of border disputes and fair, equitable transboundary water agreements.",
              "Advocate representative government and democratic reform as the largest democracy on the planet.",
              "Secure access to Central Asian critical natural resources for India's expanding technology sector."
            ],
            "endStates": {
              "primary": "Reestablish Indian influence and reduce tensions at the summit, box out Chinese dominance, and set conditions for subsequent bilateral security and economic engagement with the Central Asian states—especially reinvigorated security ties with Tajikistan.",
              "alternate": "Prevent any outcome that crowns China as regional hegemon or expands Russian military primacy, preserving India's opening for later bilateral deals even if no multilateral agreement is reached."
            },
            "positions": {
              "BORDERS": "Strongly favors peaceful, comprehensive, and just settlement of the Fergana Valley border disputes; offers partnership with PRC and Russia to assist Central Asian nations as they wish.",
              "WATER": "Supports sustainable, fair, and equitable transboundary water agreements; willing to help mediate ICWC reform in partnership with others as the nations deem supportive.",
              "HYDROPOWER": "Backs equitable resolution of Roghun/winter-power needs versus downstream security within a just, cooperative framework; will support Tajik and Kazakh proposals.",
              "ENERGY": "Open to offering technical assistance for energy, infrastructure, and related needs, especially to Tajikistan and other partners, as a tool of influence.",
              "SECURITY": "Watchful of CSTO dynamics; opposes any forced retention of Kazakhstan, Kyrgyzstan, or Tajikistan in CSTO and any significant Russian military expansion; offers bilateral security agreements and Indian arms to willing partners.",
              "EXTREMISM": "Supportive of coordinated counterterrorism and stability; offers security assistance to partners such as Tajikistan.",
              "CLIMATE": "Amenable to cooperative, equitable shared-resource and adaptation solutions in partnership with regional and great-power actors.",
              "INFLUENCE": "Insists Central Asian nations retain freedom to choose their own path; works to reestablish Indian influence while subtly undermining Chinese BRI centrality and guarding against Russian primacy."
            },
            "redLines": [
              "China becoming the de facto hegemon in, or deepening dominance over, Central Asia.",
              "Russia significantly expanding its military presence in the region with CSTO partners.",
              "Russia forcing Kazakhstan, Kyrgyzstan, or Tajikistan to remain in the CSTO against their will.",
              "China establishing a bilateral trade or security arrangement with Kazakhstan or Uzbekistan outside a broader multilateral Asian partnership."
            ],
            "batna": "Fall back on bilateral, off-summit engagement with individual Central Asian states (especially Tajikistan) to secure Indian interests; if a red line is triggered, report to the Minister of External Affairs and await guidance rather than sign any adverse multilateral agreement.",
            "concessions": [
              "Free trade agreements and economic assistance to Tajikistan, Kazakhstan, Kyrgyzstan, and Uzbekistan.",
              "Indian arms sales and weapons platforms to modernize Central Asian militaries.",
              "Bilateral security agreements (e.g., with Kazakhstan or Tajikistan).",
              "Technical assistance across economic, security, infrastructure, medical, and governance domains.",
              "Tech-sector career and economic opportunities for young Uzbeks and others.",
              "Public supportive statements for Russian and Tajik/Kazakh positions."
            ],
            "coalitions": {
              "natural_allies": [
                "Tajikistan",
                "Kazakhstan",
                "Russia (public support only)",
                "Uzbekistan",
                "Kyrgyzstan"
              ],
              "adversaries": [
                "China"
              ]
            },
            "style": "Cordial and consensus-friendly in public, subtle and transactional in private—winning influence through bilateral deals while never openly attacking rivals.",
            "privateStrategy": [
              "Covertly undermine and box out all Chinese initiatives (especially BRI) via private bilateral talks with the four Central Asian states—never openly argue with the PRC; if a Chinese MSS operative is identified, it is acceptable to publicly expose them as a 'spy.'",
              "Support Russia publicly but stay vigilant against Russian efforts to reclaim primacy; do not endorse any specific Russian plan until relayed to and cleared by the Foreign Ministry.",
              "Aggressively reinvigorate the Tajikistan relationship—pursue Indian air base privileges or at least annual joint IAF-Tajik air exercises from bases in Tajikistan, supplanting Russia if needed.",
              "Probe Kazakhstan's and Tajikistan's intentions on CSTO/Eurasian Economic Union withdrawal and their arms needs; offer bilateral security/trade deals to pull them toward India, reporting all intelligence back to the Minister of External Affairs."
            ]
          }
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
          "fallbackModel": "none",
          "brief": {
            "role": "The internationally recognized government of Cyprus seeking to reintegrate the Turkish-held north into a single, existing Cypriot state through UN-mediated talks.",
            "principles": [
              "The Republic of Cyprus already exists and is internationally recognized; the Turkish-held north must be re-integrated into it, not merged as an equal.",
              "Reject the 'virgin birth' idea that the current state dissolves into a new nation formed from two equal entities.",
              "A single sovereignty, single citizenship, and single international personality with a strong, fully representative federal government.",
              "Complete demilitarization: withdrawal of all foreign troops, abolition of the guarantee/alliance system, and removal of settlers.",
              "Any settlement must conform to the EU acquis and guarantee the human rights and freedoms of all Cypriots."
            ],
            "endStates": {
              "primary": "A reunited bicommunal, bizonal federation with a single sovereignty and a strong central government, achieved by re-integrating the Turkish Cypriot region into the existing Republic of Cyprus.",
              "alternate": "A phased, mutually-agreed integration over time that first resolves territory, residency, and property concerns before finalizing governance, with safeguards for minorities."
            },
            "positions": {
              "SOVEREIGNTY": "Single sovereignty, single citizenship, single international personality; flatly reject two-state 'sovereign equality' and any recognition of the 'TRNC'.",
              "GOVERNANCE": "Strong federal government with a President and Vice-President elected on one popular-vote ticket; reject rotating presidency and confederal weak-center models; no duplicate federal/state institutions.",
              "TERRITORY": "Return of Varosha/Famagusta and displaced-persons returns; no discussion of Famagusta port until Greek Cypriot owners reclaim property or are compensated; oppose ongoing northern redevelopment.",
              "PROPERTY": "Dispossessed Greek Cypriot owners must be able to reinstate or be compensated; empty redevelopment offers conditioned on continued Turkish control are rejected.",
              "SECURITY": "Abolish the 1960 Treaty of Guarantee and Treaty of Alliance; full withdrawal of all foreign troops; replace with a UN/Greece/Türkiye mechanism limited to unexpected attacks, with no right of intervention.",
              "ENERGY": "Offshore gas in the Cypriot EEZ belongs to a single unified state (implied by single sovereignty and demilitarization stance).",
              "CITIZENSHIP": "Demand a full, transparent, non-partisan census; identify Turkish settlers and soldiers as illegal transfers (Fourth Geneva Convention) for repatriation; only temporary, never permanent limits on Greek Cypriot freedoms in the north.",
              "EU-STATUS": "Willing to lift blocks on Türkiye's EU accession and on the Direct Trade Regulation only after withdrawal of Turkish troops and genuine confidence-building; settlement must align with the acquis."
            },
            "redLines": [
              "No international recognition of the 'Turkish Republic of Northern Cyprus' and no 'virgin birth' proposal.",
              "No confederation with a weak federal government and strong state governments.",
              "The office of President must be elected by popular vote.",
              "No right of military intervention by any outside state.",
              "No permanent limitations on Greek Cypriots' freedom to live, own property, do business, or vote across the island."
            ],
            "batna": "Maintain the status quo: the internationally recognized Republic of Cyprus continues as-is inside the EU, keeps blocking Türkiye's EU accession and the Direct Trade Regulation, and refuses to recognize Ercan Airport or northern control until conditions are met.",
            "concessions": [
              "Accept a Senate-elected Vice-President in exchange for a popular-vote President.",
              "Lift blocks on Türkiye's EU accession and the Direct Trade Regulation once Turkish troops withdraw and confidence-building is shown.",
              "Consider a Turkish Cypriot 'right of military intervention' only if strictly limited to their own constituent state's boundaries.",
              "Agree to residency requirements for local elections (e.g., 10-year legal residence before local voting rights).",
              "Pursue a phased, deliberate integration process addressing Turkish Cypriot concerns over territory, residency, and property.",
              "Accept a whole-island census by a mutually agreed independent agency."
            ],
            "coalitions": {
              "natural_allies": [
                "Greece",
                "United States",
                "United Kingdom",
                "European Union"
              ],
              "adversaries": [
                "Turkish Republic of Northern Cyprus",
                "Turkey"
              ]
            },
            "style": "Legalistic and principle-driven, anchoring on international recognition and the EU acquis while trading EU-accession leverage for demilitarization.",
            "privateStrategy": [
              "Treat the census as a tool to expose and quantify Turkish settlers/soldiers for repatriation and to frame them as a Fourth Geneva Convention war crime.",
              "Use blocks on Türkiye's EU accession and the Direct Trade Regulation as bargaining leverage, releasing them only against verified Turkish troop withdrawal.",
              "Concede a Senate-elected Vice-President only as a trade to lock in a popular-vote President; do not offer it for free.",
              "Route periodic reports and requests for guidance to the Foreign Minister's office; conduct in common areas is subject to intelligence collection."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-trnc",
          "displayName": "Turkish Republic of Northern Cyprus",
          "side": "right",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "Represent the Turkish Cypriot community in reunification talks to secure political equality, communal self-rule, and continued security guarantees within (or short of) a new United Republic of Cyprus.",
            "principles": [
              "Any settlement must create a NEW 'United Republic of Cyprus' by 'virgin birth' of two founding states, with the current Greek-Cypriot-created Republic of Cyprus ceasing to exist.",
              "The two communities are politically equal; Turkish Cypriots must never be disenfranchised or marginalized by a Greek-Cypriot-dominated government.",
              "Preserve the same level of security enjoyed at the 1960 grant of independence via continued Guarantor Power arrangements.",
              "Türkiye is the indispensable supporter and partner; policy is shaped in close cooperation with Ankara.",
              "Protect the distinct character and rights of native Turkish Cypriots on the island."
            ],
            "endStates": {
              "primary": "A confederation / new United Republic of Cyprus of two strong, equal founding states, with a weak central government subservient to the constituent states and communal control over most functions.",
              "alternate": "If a new republic at 'virgin birth' cannot be achieved, secure international recognition of the TRNC as a legitimate, independent entity lawfully representing the Turkish Cypriot people."
            },
            "positions": {
              "SOVEREIGNTY": "Reject annexation into the existing Republic of Cyprus; demand a new republic born of two politically equal states, with recognition of the TRNC as the rightful home of Turkish Cypriots as the first step.",
              "GOVERNANCE": "Confederation with only a small number of national offices (banking, foreign service, investigative services) delegated by strong communal governments; Senate-elected, community-rotating President/VP every 3 years rather than a single-ticket popular vote.",
              "TERRITORY": "Keep Varosha as part of the TRNC while offering generous Greek Cypriot resettlement/redevelopment terms; use Famagusta Port opening (under EU/UN supervision) as a bargaining chip.",
              "PROPERTY": "Handle dispossessed-owner claims within a communal framework; tie Varosha resettlement offers to broader trade and accession blockage removal.",
              "SECURITY": "Reject a standing national army (would be Greek-Cypriot dominated); favor two separate communal national guards; keep/replace the Guarantee and Alliance treaties with Türkiye and Greece included; take lead with the SRSG on the UN treaty proposal.",
              "ENERGY": "Not addressed in instructions; defer to coordination with Türkiye and protect communal/equal rights over island resources.",
              "CITIZENSHIP": "Tightly define 'settler' (15+ yrs residence, formal citizenship candidate, property owner, no criminal record); insist any census be conducted and enumerated only by the TRNC government; can quietly accept larger repatriation numbers.",
              "EU-STATUS": "Push implementation of the Direct Trade Regulation and removal of blocks on Türkiye's EU accession; trade small steps (Famagusta opening, Ankara Protocol) via US/UK pressure to ease TRNC economic isolation and unlock the EU 'Four Freedoms'."
            },
            "redLines": [
              "No system of government that disenfranchises Turkish Cypriots in favor of a Greek-Cypriot-dominated government.",
              "No strong federal system; reject a strong central government.",
              "No popular-vote national elections (inherently favors the Greek Cypriot majority).",
              "No abrogation of the current Guarantee/Alliance treaties without an acceptable replacement.",
              "No census conducted or enumerated by any outside party rather than the TRNC government.",
              "No standing national army."
            ],
            "batna": "Walk away from a federal deal and fall back to seeking international recognition of the TRNC as a legitimate, independent entity, backed by Türkiye, maintaining the status quo of separation with continued Guarantor security.",
            "concessions": [
              "Acquiesce to larger numbers of settlers being considered for repatriation than publicly stated.",
              "Offer generous resettlement/redevelopment terms to Greek Cypriots in Varosha (while retaining it as TRNC territory).",
              "Open Famagusta Port for trade under EU or UN supervision in exchange for Ankara Protocol implementation and DTR/accession unblocking.",
              "Support the UN proposal to replace the current treaties with a new Türkiye-Greece-Cyprus mechanism if security safeguards are preserved.",
              "Accept a small set of shared national institutions (banking, foreign service, investigative services)."
            ],
            "coalitions": {
              "natural_allies": [
                "Turkey",
                "United Kingdom",
                "United States"
              ],
              "adversaries": [
                "Republic of Cyprus",
                "Greece"
              ]
            },
            "style": "Constructive and proactive but firm on political equality; coordinated closely with Türkiye, uses issue-linkage (trade/accession for confidence-building) and takes initiative with the SRSG.",
            "privateStrategy": [
              "Do not align with Türkiye's position that a large mainland Turkish population is needed; privately worry that immigrants now outnumber native Turkish Cypriots and threaten Turkish Cypriot identity.",
              "Can secretly acquiesce to larger repatriation numbers than the public stance opposing Greek Cypriot demands.",
              "Treat recognition of the TRNC as the true underlying objective; use Ercan Airport control (passports, visas, customs) and Varosha development as de facto legitimization levers.",
              "Coordinate all positions with Türkiye and report periodically to the Foreign Minister; use US/UK to pressure Greek Cypriots and Greece."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-greece",
          "displayName": "Greece",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "Greece acts as kin-state guarantor backing the Greek Cypriots, pressing for reunification of the occupied north into the existing Republic of Cyprus while deferring to Nicosia on internal matters.",
            "principles": [
              "Integrate the Turkish-held areas into the already internationally recognized Republic of Cyprus, preserving its continuous legal personality.",
              "Restore international legality violated by the Turkish invasion and ongoing occupation of a sovereign UN/EU member state.",
              "Require full withdrawal of Turkish occupation forces on a short, defined timeline and termination of the anachronistic 1960 guarantee system.",
              "Build a single Cypriot nation and heritage with a strong federal government fully representative of all Cypriots.",
              "Do not intervene in internal aspects of the Cyprus problem, which are the exclusive competence of the Cypriot government."
            ],
            "endStates": {
              "primary": "A single bicommunal Cypriot nation with a strong central/federal government, integrated national armed forces, and EU-anchored freedoms (movement and settlement), with the occupation ended and outside guarantees abolished.",
              "alternate": "A federation with a strong federal government and weaker communal states plus safeguards for Turkish Cypriots and minorities (Armenians, Latins, Maronites), reached through UN-brokered compromise mechanisms."
            },
            "positions": {
              "SOVEREIGNTY": "Reject two-state 'sovereign equality' and the 'virgin birth' concept; the Republic of Cyprus already exists and must persist as a single international personality that absorbs the north.",
              "GOVERNANCE": "Strong federal government with clearer federal/state separation and no duplicate institutions; support directly elected President on a single ticket, accept a Senate-elected Vice-President as a compromise, and reject rotating presidency as disenfranchising the electorate.",
              "TERRITORY": "Support return of Varosha to its original Greek Cypriot owners and reject Turkish Cypriot demands to retain control of the city; back reopening Famagusta for trade under EU/UN supervision.",
              "PROPERTY": "Protect Greek Cypriot owners' rights to reclaim/redevelop seized properties (Varosha); any limits on rights to live, own businesses, buy property, and vote can only be temporary, never permanent.",
              "SECURITY": "Abolish the Treaty of Guarantee and remove all current foreign forces; oppose demilitarization, favor a standing national army under the Treaty of Alliance (60:40 GC:TC ratio, 1,600 troops); keep UNFICYP until the national army is built; support a new UN-brokered treaty among a united Cyprus, Greece, and Türkiye.",
              "ENERGY": "The Republic of Cyprus's exercise of sovereign rights in its EEZ is in no way linked to and must not be conditioned on the resolution process.",
              "CITIZENSHIP": "Demand a full, transparent island-wide census by a non-partisan agency; identify Turkish settlers/soldiers separately; residency requirements for local voting (e.g. 10-year minimum) are negotiable.",
              "EU-STATUS": "Support Türkiye's EU accession and urge Greek Cypriots to lift the blockage as confidence building; back easing Direct Trade Regulation/Ankara Protocol restrictions and account for accurate population figures under the EU acquis."
            },
            "redLines": [
              "No international recognition of the 'Turkish Republic of Northern Cyprus' and no 'virgin birth' proposal for a unified Cyprus.",
              "No confederation with a weak federal government and strong state governments.",
              "No right of military intervention by any outside state.",
              "No permanent restrictions on individual EU freedoms (movement, settlement, property, business, voting)."
            ],
            "batna": "Fall back on continued UN-mediated bicommunal talks under the SASG Good Offices as the only accepted method; absent an acceptable deal, maintain the status quo of a recognized Republic of Cyprus (EU member) and insist that resolution must restore international legality rather than accept a settlement that legitimizes the occupation or a two-state outcome.",
            "concessions": [
              "Accept a Senate-elected Vice-President in exchange for a direct popular vote for President.",
              "Negotiate residency requirements for local-election voting (e.g. a 10-year minimum before local franchise).",
              "Support Famagusta/Varosha reopening for trade under EU or UN supervision and place Ercan Airport under UN/EU operational control with EU customs protocols.",
              "Back easing DTR and Ankara Protocol restrictions and support Türkiye's EU accession as confidence-building.",
              "As a last resort if it becomes a deal breaker, advise the Greek Cypriots to consider limited military-intervention rights confined strictly to constituent-state boundaries.",
              "Provide safeguards for Turkish Cypriots and other minorities within a strong federal structure."
            ],
            "coalitions": {
              "natural_allies": [
                "Republic of Cyprus (Greek Cypriots)",
                "United States",
                "United Kingdom"
              ],
              "adversaries": [
                "Turkey",
                "Turkish Republic of Northern Cyprus"
              ]
            },
            "style": "Legalistic and principled but pragmatic: anchors on international legality and sovereignty while offering calibrated confidence-building trades to isolate the two-state position.",
            "privateStrategy": [
              "Secretly favor Türkiye's EU accession because it would benefit the Greek economy and normalize Greek-Turkish relations, and quietly press Greek Cypriots to drop the blockage.",
              "Hold a pre-set fallback on military intervention: only if it becomes an absolute deal breaker, privately advise Greek Cypriots to concede it, strictly limited to constituent-state boundaries.",
              "Use the census demand strategically: insist on a transparent census of the Turkish north first, and only if resistance persists offer a mutually agreed independent island-wide census.",
              "Defer publicly to the Cypriot government's exclusive competence on internal matters to avoid appearing to control the Greek Cypriot delegation, while steering outcomes behind the scenes."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-turkey",
          "displayName": "Turkey",
          "side": "right",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "Guarantor Power and sole patron of the Turkish Cypriots, negotiating to secure the political equality, security, and viability of the Turkish Cypriot state while backing the TRNC delegation's lead.",
            "principles": [
              "A single nation only if it rests on full political equality between the Greek Cypriot and Turkish Cypriot constituent states.",
              "The status quo unfairly favors Greek Cypriots; any settlement must correct their political and economic dominance.",
              "Türkiye is the indispensable guarantor of Turkish Cypriot existence and speaks in close coordination with the TRNC.",
              "Security must equal that enjoyed at the 1960 grant of independence, preserving Guarantor-Power arrangements.",
              "The Turkish Cypriots must retain the legal ability to separate if their security or liberty is threatened."
            ],
            "endStates": {
              "primary": "A confederation/bizonal single nation of two strong, politically equal communal states with a weak central government, ideally via a 'virgin birth' new republic and international recognition of the TRNC.",
              "alternate": "Failing a unified settlement, recognition of the TRNC as a legitimate, independent entity lawfully representing the Turkish Cypriot people (two-state / sovereign equality)."
            },
            "positions": {
              "SOVEREIGNTY": "Reject continuation of the Republic of Cyprus; favor a 'virgin birth' new republic of two equal states, or recognition of the TRNC and a two-state sovereign-equality outcome.",
              "GOVERNANCE": "Confederation with minimal national offices (banking, foreign service, investigative service) delegated by the stronger communal governments; Senate-elected President and Vice-President from different communities rotating every 3 years; reject popular-vote single-ticket executive.",
              "TERRITORY": "Varosha stays under TRNC control with generous Greek Cypriot resettlement/redevelopment offers; push to open Famagusta port for trade under EU/UN supervision; no reflexive territorial handovers.",
              "PROPERTY": "Handled within communal control; resist Greek-Cypriot-driven mass reinstatement; frame within the redevelopment offers already extended for Varosha.",
              "SECURITY": "Preserve the Treaty of Alliance and Treaty of Guarantee; no abrogation without an acceptable replacement; reject a standing national army; establish two separate communal national guards; keep Türkiye involved with continued military safeguards.",
              "ENERGY": "Not a Turkish priority in the brief; offshore gas rights must not be settled to Turkish Cypriot disadvantage and require Turkish Cypriot equal stake.",
              "CITIZENSHIP": "Recognize naturalized TRNC citizens and settlers; only the TRNC may enumerate its own population; concede repatriation only of recent (under-10-year) residents lacking marriage/citizenship ties; reject outside census and forced repatriation.",
              "EU-STATUS": "End the unjust isolation of Turkish Cypriots; secure the Direct Trade Regulation for direct EU export; tie to lifting Greek Cypriot blocks on Turkish EU accession; coordinate all EU-status moves with the TRNC first."
            },
            "redLines": [
              "No system of government that disenfranchises the Turkish Cypriots in favor of a Greek-Cypriot-dominated government.",
              "No strong federal (strong central-government) system.",
              "No popular-vote national elections that bias toward the Greek Cypriot majority.",
              "No termination/abrogation of the Treaty of Guarantee without an acceptable replacement.",
              "No census by any outside party; only the TRNC government may enumerate the Turkish Cypriot population.",
              "No forced repatriations except for criminal offenses."
            ],
            "batna": "If no unified settlement with genuine political equality is reached, walk away and continue building a strong, internationally recognized independent TRNC under Turkish protection (two-state fallback with existing Guarantee treaties and Turkish forces in place).",
            "concessions": [
              "Support the UN proposal to replace the old guarantee treaties with a new treaty among a united Cyprus, Türkiye, and Greece, provided safeguards and Turkish involvement remain.",
              "Repatriate settlers who lack 10-year residency, are not bound by marriage to a Turkish Cypriot, and have no pending citizenship petition.",
              "Offer generous resettlement and redevelopment terms to Greek Cypriots in Varosha while retaining sovereignty over it.",
              "Open Famagusta port to trade under EU or UN supervision to enable some Greek Cypriot trade.",
              "Accept a minimal set of shared national institutions (banking, foreign service, investigative service)."
            ],
            "coalitions": {
              "natural_allies": [
                "Turkish Republic of Northern Cyprus",
                "United Kingdom",
                "United States"
              ],
              "adversaries": [
                "Republic of Cyprus"
              ]
            },
            "style": "Firm, principled-bargaining and sovereignty-assertive; lets the TRNC take the lead, uses issue-linkage and red-line signaling, and avoids direct talks with Greek Cypriots to force them to deal with the TRNC.",
            "privateStrategy": [
              "Ultimate goal is a strong, independent TRNC; pursue international recognition of the TRNC as the first step, not genuine unification.",
              "Coordinate every move on Direct Trade Regulation / EU accession and other issues with the TRNC delegation before broaching them, and avoid direct engagement with Greek Cypriots to force them to deal with the TRNC.",
              "Preserve a large Turkish population in the north as leverage to enforce the 'two equal communities' claim; only Turkish Cypriots may identify their population.",
              "Retain military safeguards and the legal right of the Turkish Cypriots to 'divorce' from the Greek Cypriots if security or liberty concerns arise; submit periodic reports to the Foreign Minister."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-uk",
          "displayName": "United Kingdom",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "A supportive, mediating power backing the UN SASG's efforts to broker a comprehensive settlement that produces a single, unified Republic of Cyprus.",
            "principles": [
              "Support the creation of a single, unified Republic of Cyprus with one sovereignty, one citizenship, and one international personality.",
              "Reinforce and never undermine the UN Special Adviser's mediation as the primary track.",
              "Coordinate closely with the United States and, where useful, the UN before engaging Greece and Turkiye.",
              "Keep Greece and Turkiye from impeding talks and help both reduce bilateral tensions.",
              "Champion Turkiye's EU accession by de-linking it from the Cyprus dispute."
            ],
            "endStates": {
              "primary": "A politically stable, ethnically at-peace, bicommunal/bizonal federation with a strong central government, political equality, single sovereignty/citizenship/international personality, and integrated national armed forces.",
              "alternate": "Incremental progress via confidence-building measures (Varosha, Famagusta, Ercan, Direct Trade Regulation) that keeps the UN process alive even absent a final comprehensive deal."
            },
            "positions": {
              "SOVEREIGNTY": "Favor a single unified Republic with one international personality; lean to the Greek Cypriot view rejecting the Turkish Cypriot 'virgin birth' two-state formula, but do not let this disagreement derail talks.",
              "GOVERNANCE": "Support a strong, stable central government fully representative of all Cypriots; seek compromise on the executive (e.g., weighted or cross-voting) so both communities feel secure.",
              "TERRITORY": "On Varosha, broker creative middle ground: compensate Greek Cypriot property owners while not penalizing Turkish Cypriots who redeveloped the area; support returns as part of the overall settlement.",
              "PROPERTY": "Balance dispossessed Greek Cypriot owners' right to compensation against current Turkish Cypriot users' investments; explore limits on Greek Cypriot rights in the north to ease marginalization fears.",
              "SECURITY": "Back replacing the 1960 Treaties of Alliance and Guarantee with a new UN-proposed treaty (RoC, Greece, Turkiye), with mechanisms and possible limits on any intervention.",
              "ENERGY": "Not directly addressed in instructions; treat as an issue to be folded into a stable, self-protecting unified state and reduced regional tensions.",
              "CITIZENSHIP": "Support a neutral, verified census; show concern about Turkish Cypriot marginalization; explore workable settler/residency criteria rather than blanket expulsion.",
              "EU-STATUS": "Advocate Turkiye's EU accession and removal of the Cyprus issue as a blocker; push to unblock the Direct Trade Regulation and address northern economic disparity."
            },
            "redLines": [
              "Must preserve a single sovereignty, single citizenship, and single international personality for Cyprus.",
              "Will not undercut or bypass the UN SASG-led mediation process.",
              "No outcome that legally recognizes the TRNC as a separate sovereign state.",
              "Any settlement must deliver a stable, secure state that protects both communities from marginalization."
            ],
            "batna": "If no comprehensive settlement is reached, fall back to sustaining the UN process and locking in confidence-building measures (Varosha, Famagusta port, Ercan airport, DTR) as incremental gains while preserving UK bilateral ties with the Republic of Cyprus.",
            "concessions": [
              "Flexibility on the executive formula, including weighted or cross-voting to reassure Turkish Cypriots.",
              "Support EU/UN supervision or control of Famagusta port and Ercan airport to ease Greek Cypriot objections.",
              "Compensation and redevelopment arrangements on Varosha that protect both owners and current developers.",
              "De-linking Turkiye's EU accession from the Cyprus dispute in exchange for progress.",
              "Represent EU positions to Turkiye to underpin needed compromises."
            ],
            "coalitions": {
              "natural_allies": [
                "United States",
                "UN Special Adviser (SASG)",
                "Republic of Cyprus",
                "European Union"
              ],
              "adversaries": [
                "Any party pushing a two-state 'sovereign equality' outcome (TRNC hardline position)",
                "Spoilers among Greece or Turkiye who obstruct the talks"
              ]
            },
            "style": "Facilitative, coordination-driven honest broker that works behind the UN and US, applies quiet issue-linkage, and avoids derailing talks over disagreements.",
            "privateStrategy": [
              "Privately lean toward the Greek Cypriot side on sovereignty/'virgin birth' but never let that preference derail the talks.",
              "Coordinate UK positions with the United States before approaching Greece and Turkiye.",
              "Quietly use resolution of Famagusta/Ercan recognition as leverage to remove Greek Cypriot blocks on Turkiye's EU accession and restart EU talks.",
              "Report back to the Foreign Secretary and seek guidance rather than committing unilaterally."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "displayName": "United States",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "Facilitating outside power supporting the UN Special Representative to move Greek and Turkish Cypriots toward a comprehensive settlement while keeping Greece and Türkiye from impeding it.",
            "principles": [
              "Support creation of a single Unified Republic of Cyprus as a bizonal, bicommunal federation.",
              "The status quo is unacceptable; back a UN-facilitated, Cypriot-led comprehensive settlement.",
              "One island with a strong, stable, fully representative central government and a single Cypriot identity.",
              "A fully integrated Cyprus National Armed Forces providing for the nation's security.",
              "Coordinate positions with the UK and support EU balancing between the Republic of Cyprus and candidate Türkiye."
            ],
            "endStates": {
              "primary": "A reunified, peaceful, self-protecting Republic of Cyprus under a bizonal, bicommunal federation with a strong central government and single international personality.",
              "alternate": "Incremental confidence-building progress (Varosha, ports/airport, Direct Trade Regulation, de-linking Cyprus from Türkiye's EU accession) that eases tensions and keeps a final settlement alive."
            },
            "positions": {
              "SOVEREIGNTY": "Reject the Turkish Cypriot 'virgin birth'/two-state framing; lean toward the Greek Cypriot integration view of a single state with one international personality, but do not let this derail talks.",
              "GOVERNANCE": "Favor a strong central government (Greek Cypriot federation model over the Turkish Cypriot weak confederation); seek executive compromise such as weighted/cross-voting so both communities feel secure and represented.",
              "TERRITORY": "Find creative common ground on Varosha: compensate Greek Cypriot property owners without penalizing Turkish Cypriot redevelopment efforts.",
              "PROPERTY": "Balance dispossessed Greek Cypriot owners' compensation against redevelopers; explore reasonable limits on Greek Cypriots exercising residency/property/voting rights in the north to avoid marginalizing Turkish Cypriots.",
              "SECURITY": "Push to replace the 1960 Treaties of Guarantee and Alliance with a new UN-proposed treaty among Cyprus, Greece, and Türkiye with limited/restricted intervention mechanisms.",
              "ENERGY": "Support regional stability and shared security priorities in the Eastern Mediterranean (not detailed in instructions; keep energy disputes from derailing settlement).",
              "CITIZENSHIP": "Support a neutral, verified census of the north; show concern about Turkish Cypriots becoming a minority, while managing settler/soldier return so it does not blow up the talks.",
              "EU-STATUS": "Advocate Türkiye's EU accession and de-link the Cyprus issue from it; support Direct Trade Regulation for Turkish Cypriots and international recognition of Famagusta port and Ercan Airport, ideally under EU/UN supervision."
            },
            "redLines": [
              "No acceptance of the two-state / 'sovereign equality' solution or recognition of the TRNC.",
              "The status quo (permanent division) is unacceptable.",
              "Any settlement must yield a single, unified, self-protecting Cypriot state, not a legitimized separate northern state."
            ],
            "batna": "If no comprehensive settlement is reached, fall back to brokering discrete confidence-building wins and keeping Greece and Türkiye from impeding future UN-led talks.",
            "concessions": [
              "Endorse a new tripartite security treaty replacing the 1960 Guarantee/Alliance treaties, possibly allowing limited intervention forces confined to a constituent state.",
              "Support limits on Greek Cypriot residency/property/voting rights in the north to reassure Turkish Cypriots.",
              "Back EU/UN-supervised opening of Famagusta port and recognition of Ercan Airport, and implementation of the Direct Trade Regulation.",
              "Actively champion Türkiye's EU accession by de-linking it from the Cyprus dispute.",
              "Accept executive power-sharing compromises (weighted/cross-voting) to give Turkish Cypriots a fuller voice."
            ],
            "coalitions": {
              "natural_allies": [
                "United Kingdom",
                "Republic of Cyprus",
                "Greece",
                "UN SRSG/SASG",
                "European Union"
              ],
              "adversaries": [
                "Turkish Republic of Northern Cyprus (two-state push)"
              ]
            },
            "style": "Even-handed facilitator: publicly neutral and pro-settlement, working sides directly and using EU accession and CBMs as leverage.",
            "privateStrategy": [
              "Privately lean toward the Greek Cypriot side on sovereignty/governance, but never let that lean visibly derail the talks.",
              "Cyprus is treated as an important partner and the U.S. works closely with Greek Cypriots on Eastern Mediterranean security priorities.",
              "Quietly coordinate positions with the United Kingdom and carry EU messaging to Türkiye to underpin needed compromises.",
              "Use Türkiye's EU accession as leverage: press to remove the Cyprus block so accession talks can restart."
            ]
          }
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
          "fallbackModel": "none",
          "brief": {
            "role": "Represent the People's Republic of China to secure international recognition of Chinese sovereignty over the South China Sea while ending extra-regional interference, balancing Wolf Warrior assertiveness with Xi's measured Major Country Diplomacy.",
            "principles": [
              "The South China Sea is an inalienable part of Chinese territory since ancient times and securing it is a national 'core interest'.",
              "China holds indisputable sovereignty over the SCS islands (Xisha/Paracels, Nansha/Spratly) and adjacent waters, plus historic rights along the ten-dashed line.",
              "Disputes should be shelved for later, pursuing joint development under Chinese leadership and control.",
              "Solutions must come bilaterally through direct one-on-one talks, not multilateral frameworks, under 'Good Neighborliness' and the Five Principles of Peaceful Coexistence."
            ],
            "endStates": {
              "primary": "International recognition of China's sovereignty across the SCS ten-dashed-line claim, an end to extra-regional (US, Japan, India) interference, and cessation of all non-Chinese military stationing and naval passage through the Chinese portion of the SCS.",
              "alternate": "Bilateral accommodation agreements with regional claimants (Philippines, Vietnam) enabling joint resource development and regulated innocent passage, preserving Chinese leadership while maintaining regional peace and stability."
            },
            "positions": {
              "SOVEREIGNTY": "Indisputable and non-negotiable Chinese sovereignty over Xisha, Nansha, Zhongsha, Dongsha and adjacent waters; current disputes set aside for later resolution under Chinese leadership.",
              "UNCLOS": "Sovereignty is defined by historic rights and 'span of influence', not UNCLOS lines; the ten-dashed line claim stands regardless of EEZ/island/continental-shelf definitions despite China being a signatory.",
              "NAVIGATION": "Open to a multilateral agreement on passage of military vessels through the SCS, but only per UNCLOS with Chinese permission, prior notice, and China's right of refusal.",
              "RESOURCES": "Resources within and beneath the SCS are Chinese national resources; offer joint development via a proposed 'Nansha Joint Resource Development Agency' under Chinese leadership.",
              "FISHERIES": "Willing to entertain bilateral agreements with Philippines, Vietnam, and other claimants on joint fishing in contested areas within China's claimed maritime possessions.",
              "MILITARIZATION": "China is upholding legitimate rights, not acting as a colonial power; demand an end to all non-Chinese military stationing and naval passage in the Chinese portion of the SCS; no rollback of Chinese features offered.",
              "ARBITRATION": "Reject external adjudication; issues are strictly regional and resolved by regional nations through direct talks, not third-party/legal arbitration.",
              "MULTILATERALISM": "Insist all settlements be bilateral; multilateral talks only with ASEAN states (Indonesia, Malaysia, Philippines, Vietnam) excluding Japan and the US; accommodate only sessions the UN Special Representative personally chairs."
            },
            "redLines": [
              "No concession on sovereignty over Xisha, Nansha, or any part of the ten-dashed-line claim.",
              "No acceptance of a multilateral or binding code of conduct that includes extra-regional states (US, Japan, India).",
              "No recognition or enforcement of the 2016 arbitration award or any external legal ruling.",
              "No unconditional freedom of navigation for foreign military vessels; passage only with Chinese permission, prior notice, and right of refusal.",
              "No rollback of Chinese island reclamation or military presence."
            ],
            "batna": "Shelve the dispute indefinitely and maintain the status quo of de facto control and land reclamation, pursuing bilateral deals over time while isolating smaller claimants from external backers; walk away from any multilateral framework that dilutes the ten-dashed-line claim.",
            "concessions": [
              "Increased government-to-government communication at lower levels toward improved relations.",
              "A UNCLOS-consistent agreement on military vessel passage, conditioned on Chinese permission/notice/refusal.",
              "Bilateral joint energy exploration and fishing agreements with the Philippines and Vietnam in contested areas.",
              "Establishment of a 'Nansha Joint Resource Development Agency' for accelerated mutual energy development.",
              "Acknowledge existing US-SEA agreements as constructive (while opposing any new ones)."
            ],
            "coalitions": {
              "natural_allies": [
                "Malaysia",
                "Brunei",
                "Indonesia"
              ],
              "adversaries": [
                "United States",
                "Japan",
                "India",
                "Philippines",
                "Vietnam"
              ]
            },
            "style": "Blend of assertive Wolf Warrior sovereignty-assertion and measured Major Country Diplomacy, insisting on bilateralism, delay/shelving, and issue-linkage while framing China as the region's benevolent leader.",
            "privateStrategy": [
              "Use multilateral ASEAN talks to drive a wedge between regional states and the extra-regional powers (New Delhi, Tokyo, Washington), isolating smaller claimants from outside support.",
              "Deny Malaysia (ASEAN Chair) any standing to speak for ASEAN, and exploit its distrust of the US to pull the Philippines and Vietnam into cooperating with China.",
              "Privately link the SCS to Taiwan and the Diaoyu/Senkaku Islands when dealing with the US, framing all territorial issues as one comprehensive package.",
              "Pressure Japan over WWII history (Nanking Massacre, Comfort Women, Yasukuni Shrine visits) as leverage while pushing economic cooperation."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-us",
          "displayName": "United States",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "An extra-regional facilitator offering to mediate SCS disputes while defending international law, freedom of navigation, and its treaty allies.",
            "principles": [
              "Peace and tranquility in the SCS through adherence to international norms and UNCLOS.",
              "Peaceful resolution of territorial and sovereignty claims via established agreements, conventions, and arbitration.",
              "Freedom of Navigation and the Right of Innocent Passage are inherent rights of all nations in all international waters.",
              "Rejection of coercion by any state against another; disputes settled by law, not force."
            ],
            "endStates": {
              "primary": "An immediate reduction of tensions across the SCS, with claims resolved through peaceful negotiation or international arbitration and sea lanes secured under treaty and confidence-building measures.",
              "alternate": "Shared, equitable multilateral exploitation of SCS resources (e.g., via the Philippine ZoPFF/C concept) with a durable ASEAN-anchored code of conduct if full claim resolution stalls."
            },
            "positions": {
              "SOVEREIGNTY": "Claims must derive solely from legitimate land features under international law; reject internal-waters claims among dispersed islands and treating island groups collectively; Beijing's ten-dashed-line claims to most of the SCS are unlawful.",
              "UNCLOS": "Adhere to UNCLOS principles (though U.S. has not ratified); features that are not islands under UNCLOS generate no maritime zones of their own; urge all signatories, especially China, to abide by UNCLOS.",
              "NAVIGATION": "Freedom of transit through international sea lanes is fundamental; no nation may inhibit innocent passage or commerce; FONOPS are legitimate and will continue.",
              "RESOURCES": "Support mutual, reasoned, equitable exploitation of SCS resources through multilateral agreements; endorse the Philippine ZoPFF/C as an appropriate cooperative vehicle.",
              "FISHERIES": "Oppose coercion and coast-guard harassment; access and management should be handled cooperatively under multilateral confidence-building measures.",
              "MILITARIZATION": "Condemn China's land reclamation and military installation on atolls/reefs as coercive consolidation; call for immediate confidence-building measures to reduce tensions long-term.",
              "ARBITRATION": "The 2016 PCA award is final and binding; urge China to recognize it and engage Manila on its ramifications; encourage all parties to press China toward the ruling.",
              "MULTILATERALISM": "ASEAN is the logical multilateral platform for resolving SCS conflicts, supported by UNCLOS mechanisms; back Malaysia's ASEAN chairmanship and a binding code of conduct."
            },
            "redLines": [
              "No acceptance of the ten-dashed-line or any historic-rights claim exceeding UNCLOS-provided maritime zones.",
              "No inhibition of freedom of navigation or innocent passage through international waters.",
              "No abandonment of the 1951 Mutual Defense Treaty commitment to the Philippines.",
              "No recognition of maritime zones generated by artificial or non-island features.",
              "No endorsement of coercion or use of force by any state to press claims."
            ],
            "batna": "Maintain the status quo of forward U.S. presence, continued FONOPS, and bilateral alliance/security support to partners (Philippines, Vietnam) while pursuing claim resolution incrementally through ASEAN and UNCLOS outside this forum.",
            "concessions": [
              "Offer U.S. mediation and facilitation services to broker settlements.",
              "Support any mutually agreeable tension-reduction and confidence-building measures.",
              "Expand cooperation, high-level exchanges, trade, and dialogue with China where interests align.",
              "Endorse joint/shared resource-development frameworks rather than insisting on strict claim adjudication first.",
              "Frame continued U.S. presence as conditional on regional consent, allowing flexibility on posture."
            ],
            "coalitions": {
              "natural_allies": [
                "Philippines",
                "Vietnam",
                "Japan",
                "India",
                "Malaysia",
                "Indonesia",
                "Brunei"
              ],
              "adversaries": [
                "China"
              ]
            },
            "style": "Principled, law-and-norms-based facilitator that engages China cooperatively while quietly marshaling a unified allied coalition behind UNCLOS and the PCA ruling.",
            "privateStrategy": [
              "Overarching strategy is to nudge China into accepting international norms and prevent it from moving from competing in to controlling the SCS with a blue-water navy.",
              "Enlist Japan and India to be more directive with China than the U.S. can openly be, aligning positions so Beijing hears 'one voice.'",
              "Demonstrate that continued American presence is at the behest of the majority of SEA and Indo-Pacific nations, not unilateral imposition.",
              "Do not publicize that the U.S. has not ratified UNCLOS as a leverage weakness; keep security-support offers under mutual-defense frameworks as reserved leverage."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-philippines",
          "displayName": "Philippines",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "As ASEAN Chair, lead a rules-based, UNCLOS-anchored settlement of West Philippine Sea (WPS/SCS) disputes while holding ASEAN together and containing Chinese expansion peacefully.",
            "principles": [
              "Legal and equitable resolution of claims strictly under UNCLOS as the only accepted legal mechanism.",
              "Strengthen ASEAN as the preeminent regional body; prevent fracturing and maintain consensus.",
              "Sanctity of Philippine territorial integrity within the West Philippine Sea.",
              "The 2016 Annex VII Tribunal award conclusively settled historic rights and maritime entitlements and is binding.",
              "Freedom of navigation and right of innocent passage are unassailable rights of all nations."
            ],
            "endStates": {
              "primary": "International recognition of Philippine territorial rights in the WPS, achieved through a binding UNCLOS-based settlement and a binding, enforceable WPS Code of Conduct.",
              "alternate": "Collective cooperation on energy and fishing via the ZoPFF/C framework, enclaving disputed features while opening non-disputed areas to joint development with China and Vietnam."
            },
            "positions": {
              "SOVEREIGNTY": "Philippine sovereignty and sovereign rights in the WPS are non-negotiable; disputed features (including three reclaimed atolls inside our EEZ) resolved only under UNCLOS, with disputed islands enclaved rather than conceded.",
              "UNCLOS": "UNCLOS is the sole legal basis; reclaimed artificial 'islands' generate no territorial sea or EEZ; China's nine/ten-dashed line predates and violates UNCLOS and is illegal.",
              "NAVIGATION": "Freedom of the High Seas, freedom of navigation, and innocent passage through the WPS are unassailable rights of all nations.",
              "RESOURCES": "Mandate joint development of WPS resources as required by Philippine law; enclave disputed zones and immediately open cooperative energy exploration/extraction in non-disputed areas.",
              "FISHERIES": "Shared, cooperative fisheries access among valid claimants under ZoPFF/C; end coast-guard harassment of Philippine vessels.",
              "MILITARIZATION": "All military activity in the WPS must cease immediately; halt and roll back reclamation and militarization of atolls/reefs; institute confidence-building measures.",
              "ARBITRATION": "The 2016 PCA/Annex VII award is valid, binding, and dispositive; demand China submit its claims through the same legal process and accept the outcome.",
              "MULTILATERALISM": "Resolve issues in ASEAN/UN multilateral forums (ARF, ASEAN+3, APEC); resist Chinese bilateralization; conclude a binding, enforceable WPS Code of Conduct."
            },
            "redLines": [
              "No recognition or legitimization of China's nine/ten-dashed line claim.",
              "No abandonment of the binding 2016 UNCLOS arbitration award.",
              "No surrender of Philippine sovereign rights or EEZ, including the three reclaimed atolls within our EEZ.",
              "No acceptance of bilateral-only frameworks that bypass ASEAN/UNCLOS.",
              "Reclaimed artificial features must not be granted territorial seas or EEZs."
            ],
            "batna": "If talks fail, fall back on the binding UNCLOS award plus deepened security and economic alignment with the US, Japan, India, Australia, and Vietnam to contain China; but this is framed internally as possibly the last chance to peacefully contain Chinese ambitions.",
            "concessions": [
              "Set aside (enclave/shelve) sovereignty over genuinely disputed features to enable joint development.",
              "Joint cooperative activities in fishing and energy with China and Vietnam under ZoPFF/C.",
              "Reciprocal, mutual confidence-building measures including a temporary suspension of military patrols and provocative activities.",
              "Common operating procedures for naval and air forces in the region."
            ],
            "coalitions": {
              "natural_allies": [
                "Vietnam",
                "United States",
                "Japan",
                "India",
                "ASEAN members (Malaysia, Brunei, Indonesia)"
              ],
              "adversaries": [
                "China"
              ]
            },
            "style": "Principled, law-first and cooperative-framed, leveraging ASEAN Chair convening power while firmly anchoring on UNCLOS and the arbitral award.",
            "privateStrategy": [
              "Internally frame these talks as possibly the last opportunity to peacefully contain Chinese ambitions in the SCS/SEA region; success is a matter of national power and prestige.",
              "Privately press the US, Japan, and India to lean on Beijing to abandon bilateral talks and abide by UNCLOS.",
              "Quietly urge Vietnam to file its own arbitration case against China and follow the Philippine lead.",
              "Discreetly probe Vietnam on expanded basing rights for US, Indian, Australian, and possibly Japanese forces; and voice frustration to Malaysia/Brunei/Indonesia over ASEAN's acquiescence to China."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-vietnam",
          "displayName": "Vietnam",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "A claimant state seeking peaceful, UNCLOS-based resolution of East Sea (SCS) disputes while managing a delicate economic dependence on China and anchoring regional security in a strong ASEAN.",
            "principles": [
              "Peaceful coexistence with all nations in the region.",
              "UNCLOS is the sole and exhaustive legal basis for maritime entitlements; disputes resolved by negotiation or international arbitration.",
              "A strong Southeast Asia built around a strong, united ASEAN.",
              "Transformation of relations with China based on mutual respect, not coercion.",
              "Chinese aggression in the East Sea must end and not be allowed to go unchallenged."
            ],
            "endStates": {
              "primary": "Peaceful, law-based resolution of East Sea claims under UNCLOS, with China accepting negotiation or arbitration, backed by a strong ASEAN and improved US/regional-power engagement as a counterweight to Beijing.",
              "alternate": "If talks fail to show acceptable progress, pursue UNCLOS Tribunal arbitration as the Philippines did, while deepening bilateral trade/security ties with India, Japan, US, and others to counterbalance China."
            },
            "positions": {
              "SOVEREIGNTY": "Disputes China's historical narrative; claims significant parts of the Spratlys (as continental-shelf extension) and Paracels. Willing to concede the Amphitrite Group to China if Beijing returns the Crescent Group (seized in 1974) and recognizes it as Vietnamese.",
              "UNCLOS": "UNCLOS is the sole, comprehensive legal basis for maritime entitlements; China's nine-dashed-line claims must be clarified in accordance with UNCLOS rules on islands, EEZs, and continental shelves before overlapping claims are resolved.",
              "NAVIGATION": "Supports freedom of navigation; welcomes continued US and regional-power presence to check Chinese behavior.",
              "RESOURCES": "Favors joint development and shared harvesting of East Sea resources to the mutual benefit of all littoral states, using ZoPFF/C as a short-term framework; seeks cooperative energy exploration/extraction with India.",
              "FISHERIES": "Access and management addressed within confidence-building measures and a binding Code of Conduct to prevent harassment and hostile incidents.",
              "MILITARIZATION": "Demands indefinite termination of all military activity in the East Sea and immediate confidence-building measures; advocates replacing littoral-state naval patrols and anti-piracy efforts with non-littoral Asia-Pacific nations (Australia, India, South Korea).",
              "ARBITRATION": "Supports the Philippines' implementation of UNCLOS Tribunal arbitration and is prepared to file similar arbitration if negotiations stall.",
              "MULTILATERALISM": "Insists on a binding ASEAN SCS Code of Conduct with agreed enforcement and checks; prefers multilateral (vice bilateral) engagement with China and a unified ASEAN-plus-partners front."
            },
            "redLines": [
              "No bilateral-only settlement with China on terms favorable to Beijing; overlapping claims must go to multilateral negotiation or UNCLOS arbitration.",
              "Chinese aggression and militarization in the East Sea must cease; military activity to be terminated indefinitely.",
              "Any settlement must rest on UNCLOS; the nine-dashed-line claim is not an acceptable legal basis and must be clarified under UNCLOS.",
              "China must stop blocking a binding Code of Conduct and stop coercing other ASEAN states out of discussing the East Sea."
            ],
            "batna": "Walk away from unsatisfactory talks and pursue UNCLOS Tribunal arbitration (as the Philippines did), while accelerating bilateral trade and defense diversification with India, Japan, US, Australia, Russia, and South Korea to reduce Chinese economic leverage.",
            "concessions": [
              "Recognize the Amphitrite Group of the Paracels as Chinese territory in exchange for return/recognition of the Crescent Group as Vietnamese.",
              "Accept joint development and shared exploitation of East Sea resources rather than exclusive control.",
              "Compartmentalize disputes and cooperate with China in select areas while protesting others (nuanced kindred-communist engagement).",
              "Endorse non-littoral Asia-Pacific states (Australia, India, South Korea) taking over patrol/anti-piracy roles as a de-escalation trade."
            ],
            "coalitions": {
              "natural_allies": [
                "Philippines",
                "India",
                "Japan",
                "United States",
                "Malaysia",
                "Brunei",
                "Indonesia"
              ],
              "adversaries": [
                "China"
              ]
            },
            "style": "Principled and law-anchored but pragmatic and compartmentalized: firm on UNCLOS and ASEAN unity, flexible on resource-sharing and face-saving swaps, prefers multilateral leverage over bilateral exposure.",
            "privateStrategy": [
              "Conceal deep vulnerability: China is our largest trading partner and main import source, giving Beijing major one-sided economic leverage we privately fear.",
              "Hold the Amphitrite-for-Crescent Paracels swap as a fallback compromise card, not an opening position.",
              "Quietly coordinate a pre-agreed unified ASEAN-plus-partners front (with the Philippines) so all delegations except China speak with one voice; use arbitration threat as private leverage.",
              "Privately push the US to lead in pulling Myanmar and Cambodia away from China so ASEAN can reach consensus, while being ready to oppose the US on regional issues that affect us."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-malaysia",
          "displayName": "Malaysia",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "ASEAN-aligned broker positioning itself as the primary trusted intermediary between the fellow claimant states and China to reach a peaceful, UNCLOS-based settlement.",
            "principles": [
              "Restore peace and tranquility to Southeast Asia; the threat or use of force must be avoided at all costs.",
              "Protect sovereignty rights strictly in accordance with UNCLOS, including EEZs and verifiable island claims.",
              "Resolve all maritime and territorial disputes by peaceful means through multilateral negotiation, never through military, economic, or political coercion.",
              "Uphold freedom of the high seas (Art. 87), freedom of navigation, and right of innocent passage (Arts. 17-19).",
              "Reject any claim of historic rights (e.g. the ten/nine-dashed line) that exceeds UNCLOS limits, consistent with the PCA award."
            ],
            "endStates": {
              "primary": "Peaceful multilateral resolution of SCS sovereignty disputes grounded in UNCLOS, with increased cooperation and joint commercial ventures between ASEAN states and China.",
              "alternate": "A combination of bilateral and multilateral agreements plus alliances with external powers that delivers regional security and stability beyond ASEAN's own reach, secured through short-term confidence-building measures if a comprehensive deal is unreachable."
            },
            "positions": {
              "SOVEREIGNTY": "Every nation must respect the sovereignty of recognized states over coastal regions, EEZs, and verifiable island claims; only claims verifiable under UNCLOS are legitimate.",
              "UNCLOS": "UNCLOS tenets are binding on all; claims contrary to UNCLOS that exceed geographic and substantive limits of maritime entitlement are invalid, and no state enjoys historic rights in the SCS.",
              "NAVIGATION": "Support freedom of navigation and innocent passage, but stress overriding restraint to preserve peace over provocative assertion (including FONOPS).",
              "RESOURCES": "Peaceful resolution is paramount to enable energy exploration/exploitation; cooperative joint energy development cannot proceed under threat of military incursion.",
              "FISHERIES": "Seek confidence-building measures and mutual respect for EEZs; harassment and coercion at sea are unacceptable.",
              "MILITARIZATION": "Aggressive, provocative, or coercive acts are unacceptable; pursue CBMs such as suspension of military patrols and de-escalation.",
              "ARBITRATION": "Uphold the 2016 PCA award as binding precedent for all regional claims; the ten-dashed line it invalidated remains unacceptable.",
              "MULTILATERALISM": "Prefer ASEAN/UN multilateralism as the primary venue and back a code of conduct; accept bilateral tracks where useful, invoking China's TAC and 2002 SCS Declaration of Conduct commitments."
            },
            "redLines": [
              "No recognition of the Chinese ten/nine-dashed line or any historic-rights claim exceeding UNCLOS.",
              "No settlement obtained through military, economic, or political coercion.",
              "No outcome that contradicts the PCA award or UNCLOS entitlements.",
              "Support for Brunei, Indonesia, Philippines, and Vietnam will not be traded away to any non-ASEAN external power."
            ],
            "batna": "If no overarching solution is reachable, fall back to interim short-term confidence-building measures (patrol suspension, EEZ respect, economic cooperation) and a mix of bilateral/multilateral alliances with external powers, while compartmentalizing differences with Beijing to protect Malaysia's commercial economy.",
            "concessions": [
              "Accept bilateral negotiation tracks alongside preferred multilateral ones to keep China engaged.",
              "Minimize and set aside its own Ambalat and Straits of Malacca border disputes with Indonesia during these talks.",
              "Offer significantly increased ASEAN trade access to India (and leverage economic ties with Japan) in exchange for support.",
              "Endorse a phased CBM package rather than demanding an immediate comprehensive settlement.",
              "Support external partners' negotiation strategies where they harmonize with Malaysia's."
            ],
            "coalitions": {
              "natural_allies": [
                "Indonesia",
                "Vietnam",
                "Philippines",
                "Brunei",
                "United States",
                "Japan",
                "India"
              ],
              "adversaries": [
                "China"
              ]
            },
            "style": "Consensus-building, law-anchored mediator that projects itself as the indispensable honest broker while avoiding confrontation.",
            "privateStrategy": [
              "Position Malaysia as the single best intermediary with China and quietly get Brunei/Philippines/Vietnam to route their key issues through Malaysia, jointly or on their behalf.",
              "Compartmentalize existing frictions with Beijing to protect Malaysia's commercial economy, and downplay Ambalat/Malacca disputes with Indonesia to keep a united ASEAN front.",
              "Meet the U.S. regularly to compare notes and discreetly probe what SCS actions would trigger a U.S. military response under its Philippine defense treaty; nudge partners' strategies toward Malaysia's own.",
              "Privately view Philippine claims as failing UNCLOS land-formation definitions, and enlist Indonesia to bolster Philippine/Vietnamese claims to advance Malaysia's own positions."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-brunei",
          "displayName": "Brunei",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "A small, cordial ASEAN claimant seeking to restore regional peace and to broker a UNCLOS-based, peaceful resolution to South China Sea disputes while positioning itself as a trusted lead facilitator among all parties.",
            "principles": [
              "Restore peace and tranquility within the Southeast Asian region.",
              "Protect sovereignty rights in accordance with international law, especially UNCLOS.",
              "All maritime and territorial claims must be resolved by peaceful means, never through military, economic, or political coercion.",
              "Uphold UNCLOS Article 87 (Freedom of the High Seas) and Articles 17-19 (freedom of navigation, innocent passage).",
              "Compartmentalize differences with Beijing to keep talks productive and protect Brunei's commercial and energy interests."
            ],
            "endStates": {
              "primary": "Peaceful resolution of SCS sovereignty issues through bilateral efforts, paired with multilateral efforts to improve conduct/conditions and increased cooperation between SCS nations and China, all codified in a new ASEAN SCS dialogue system.",
              "alternate": "Short-term confidence-building measures and increased joint commercial/energy ventures that reduce tensions, even absent an overarching sovereignty settlement."
            },
            "positions": {
              "SOVEREIGNTY": "Each nation must respect recognized sovereignty and verifiable claims; sovereignty/claims disputes are best handled bilaterally; China's ten-dashed-line claim is unacceptable and fails UNCLOS definitions of land formations.",
              "UNCLOS": "UNCLOS tenets bind all parties; China's reclaimed features do not meet UNCLOS definitions of islands and cannot generate territorial seas or EEZs.",
              "NAVIGATION": "Firmly support freedom of navigation and right of innocent passage under UNCLOS Articles 17-19 and 87, but emphasize restraint to preserve peace.",
              "RESOURCES": "Push increased joint commercial and energy ventures; cooperative energy exploitation cannot proceed under threat of military incursion, so peaceful resolution is prerequisite.",
              "FISHERIES": "Advocate mutual respect for EEZs and confidence-building measures to end coast-guard harassment in contested fishing grounds.",
              "MILITARIZATION": "Threat or use of force is counterproductive and must be avoided; seek CBMs such as suspension of military patrols and reduction of tensions.",
              "ARBITRATION": "Brunei's position on legally verifiable claims remains consistent with the 2016 PCA award and the precedent it sets; support it without unnecessarily antagonizing China.",
              "MULTILATERALISM": "Handle sovereignty/claims bilaterally, but use multilateral (ASEAN/UN) frameworks for conduct issues; long-run multilateralism codified via a new ASEAN SCS dialogue system is the best path."
            },
            "redLines": [
              "China's ten-dashed-line boundary is unacceptable and cannot be legitimized.",
              "No nation may impose its will on another; no acceptance of settlements achieved through military, economic, or political coercion.",
              "Support for the Philippines and Vietnam (on UNCLOS-verifiable claims) will not be traded away for relations with non-ASEAN powers.",
              "Any settlement must conform to UNCLOS and the principles of international law."
            ],
            "batna": "If no overarching settlement is reached, fall back to securing short-term confidence-building measures and joint commercial/energy ventures, keep sovereignty disputes bilateral, and preserve ASEAN cohesion and Brunei's compartmentalized commercial relationship with Beijing.",
            "concessions": [
              "Accept bilateral (rather than multilateral) negotiation of sovereignty/claims issues, including with China.",
              "Compartmentalize existing differences with Beijing to keep talks and commercial ties intact.",
              "Offer external powers (India) prospect of significantly increased ASEAN trade in exchange for support.",
              "Not press China into multilateral talks if unrealistic; treat any multilateral movement as a bonus.",
              "Welcome external powers as 'trusted partners' in facilitating solutions."
            ],
            "coalitions": {
              "natural_allies": [
                "Philippines",
                "Vietnam",
                "Malaysia",
                "Indonesia",
                "United States",
                "Japan",
                "India"
              ],
              "adversaries": [
                "China"
              ]
            },
            "style": "Cordial, non-confrontational, and consensus-seeking; frames itself as a trusted bridge-builder that upholds UNCLOS without unnecessarily antagonizing China.",
            "privateStrategy": [
              "Quietly position Brunei as the lead for the negotiations, leveraging its excellent relations with all parties, especially China, and enlist India, Japan, and the US to back that lead.",
              "Covertly enlist Indonesia and Malaysia to bring unqualified support to the Philippines and Vietnam so as to strengthen Brunei's own positions against China.",
              "Meet the US delegation regularly to compare notes and align/adjust strategies toward China; if unable, discreetly discover the US strategy and steer it to something Brunei can live with.",
              "Probe what SCS actions might trigger a US military response under its Philippines defense treaty, and seek assurances the US-China tariff/trade war stays out of these talks; must maintain commercial vibrancy while diversifying away from energy dependence."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-indonesia",
          "displayName": "Indonesia",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "Honest-broker convener seeking to lead ASEAN toward a peaceful, UNCLOS-based multilateral settlement of the South China Sea disputes while positioning itself as China's preferred intermediary.",
            "principles": [
              "Restore peace and tranquility across the Southeast Asian region.",
              "Strengthen ASEAN as the preeminent regional association within Asia and prevent it from fracturing.",
              "Preserve ASEAN consensus and its centrality as the primary multilateral venue for regional problems.",
              "Uphold UNCLOS, especially freedom of navigation and right of innocent passage (Arts. 17-19, 87).",
              "Reject the threat or use of force, and any military, economic, or political coercion."
            ],
            "endStates": {
              "primary": "Peaceful, multilateral (or joint) resolution of SCS sovereignty disputes grounded in UNCLOS and the 2016 PCA award, with expanded cooperation and joint commercial/energy ventures across the SCS.",
              "alternate": "Absent full resolution, secure short-term confidence-building measures and get China into any multilateral format, while keeping ASEAN unified and energy exploitation viable."
            },
            "positions": {
              "SOVEREIGNTY": "All recognized nations' sovereignty, EEZ, and verifiable island claims must be respected; disputes resolved peacefully via multilateral negotiation, never coercion.",
              "UNCLOS": "No Spratly feature is entitled to an EEZ or continental shelf on its own; no feature generates maritime entitlements. Claims must be legally verifiable under UNCLOS.",
              "NAVIGATION": "Freedom of navigation and innocent passage (UNCLOS Arts. 17-19, 87) must be observed by all, but exercised with restraint to preserve stability.",
              "RESOURCES": "Peaceful resolution of claims is paramount to enable energy exploration/exploitation; push increased joint commercial and energy ventures.",
              "FISHERIES": "Mutual respect for EEZs and coastal rights; harassment and coercion in contested grounds must cease.",
              "MILITARIZATION": "Threat or use of force is counterproductive and must be avoided; seek confidence-building measures such as suspension of military patrols.",
              "ARBITRATION": "Fully back the 2016 PCA award as binding precedent for all regional claims; China's ten-dashed line is illegitimate and unacceptable.",
              "MULTILATERALISM": "Multilateral ASEAN/UN frameworks are preferred; accept bilateral tracks pragmatically with China; ASEAN remains the primary regional venue."
            },
            "redLines": [
              "China's ten-dashed-line claim is illegitimate under the PCA award and unacceptable.",
              "No use or threat of force, and no military, economic, or political coercion, will be tolerated.",
              "No nation may impose its will on another; sovereignty and verifiable UNCLOS claims must be respected.",
              "No Spratly feature (including reclaimed artificial 'islands') generates an EEZ, continental shelf, or maritime entitlement."
            ],
            "batna": "If a comprehensive settlement fails, fall back to preserving ASEAN unity and pursuing incremental short-term confidence-building measures and joint ventures; if China only accepts bilateral talks, accept them rather than force multilateralism.",
            "concessions": [
              "Accept bilateral (China-preferred) tracks alongside preferred multilateral ones.",
              "Minimize/set aside Indonesia's own Ambalat and Malacca Strait border disputes with Malaysia during talks.",
              "Offer external powers (India, Japan) expanded trade/investment access with ASEAN in exchange for support.",
              "Prioritize interim CBMs (patrol suspension, EEZ respect, economic cooperation) short of a full solution."
            ],
            "coalitions": {
              "natural_allies": [
                "Brunei",
                "Philippines",
                "Vietnam",
                "Malaysia",
                "United States",
                "Japan",
                "India"
              ],
              "adversaries": [
                "China"
              ]
            },
            "style": "Consensus-driven honest broker: patient, principled, multilateralist, positioning as trusted intermediary while quietly leading.",
            "privateStrategy": [
              "Secretly maneuver to claim the lead of the negotiations and act as China's primary intermediary; get allied and external delegations to accede to Indonesia's leadership.",
              "Assess that China plays for time and will not compromise; getting China into any multilateral format at all should be treated as an achievement.",
              "Privately view the Philippines' claims as failing UNCLOS land-formation definitions even while publicly supporting allies against China.",
              "Coordinate covertly with the U.S. (compare notes, align messaging to China) and probe what SCS actions would trigger a U.S. military response under its Philippine defense treaty."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-india",
          "displayName": "India",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "An extra-regional concerned party and honest broker seeking a peaceful, UNCLOS-based multilateral resolution to the South China Sea disputes.",
            "principles": [
              "Restoration of peace and tranquility within the Southeast Asian region.",
              "Sovereignty disputes must be resolved on the basis of international law and the 1982 UNCLOS.",
              "Freedom of passage throughout the western Pacific must be preserved.",
              "The threat or use of force is counterproductive and must be avoided, though every nation may defend its citizens and territory against legitimate threats.",
              "Trusted third parties should establish unified positions to maximize combined leverage toward lasting results."
            ],
            "endStates": {
              "primary": "Peaceful, UNCLOS-based resolution of SCS sovereignty disputes with reduced Chinese naval presence, preserved freedom of navigation, and Chinese respect for Indian regional interests, codified through a new SCS dialogue system within ASEAN.",
              "alternate": "Interim confidence-building measures (joint patrols, cooperative energy exploration, an SCS hotline, and a freeze on confrontational activities) short of an overarching settlement, backed by a united front that signals time is not on China's side."
            },
            "positions": {
              "SOVEREIGNTY": "Every nation must respect recognized sovereignty and verifiable island claims; disputes settled only under UNCLOS regimes, not unilateral assertion.",
              "UNCLOS": "All settlements must be fully consistent with UNCLOS; reject China's nine/ten-dashed line and 'Chinese archipelago' claim; reclaimed artificial features cannot generate territorial waters or EEZs.",
              "NAVIGATION": "Continued freedom of passage throughout the western Pacific is non-negotiable; Indian naval presence (e.g., Malabar exercises) demonstrates resolve to keep commerce flowing.",
              "RESOURCES": "Energy exploitation all parties seek cannot occur under constant threat of Chinese attack; favor joint cooperative energy exploration as a confidence-building measure.",
              "FISHERIES": "Access and management must follow UNCLOS EEZ rules; coast-guard harassment and confrontational acts erode regional trust and must cease.",
              "MILITARIZATION": "Seek reduction of Chinese naval presence and a multilateral freeze on confrontational activities (land reclamation, buoys, markers); coordinated joint patrols in disputed areas.",
              "ARBITRATION": "Claims must be verifiable under UNCLOS and adjudicated under existing UNCLOS regimes rather than through force or unilateral maps.",
              "MULTILATERALISM": "Strongly favor ASEAN as the primary conduit for regional problem-solving; codify any settlement in a new SCS dialogue system within ASEAN; ASEAN-China Code of Conduct must be consistent with UNCLOS and not prejudice third-party interests."
            },
            "redLines": [
              "Will walk out of negotiations if the India-China border dispute (Jammu-Kashmir, common border) is raised; talks are strictly about SCS.",
              "No settlement that legitimizes China's nine/ten-dashed line or 'Chinese archipelago' declaration.",
              "Any support for Philippine or Vietnamese claims is limited strictly to claims verifiable under UNCLOS.",
              "Freedom of passage throughout the western Pacific must not be compromised."
            ],
            "batna": "Fall back to firm insistence on a preferable multilateral solution while signaling that military action may become necessary if China continues provocation; will not scuttle the talks but will refuse any non-UNCLOS outcome.",
            "concessions": [
              "Act as neutral intermediary/honest broker between China, the Philippines, and Vietnam.",
              "Accept interim confidence-building measures short of a full settlement.",
              "Support joint cooperative energy exploration and coordinated joint patrols in disputed areas.",
              "Offer increased commercial and economic ventures with SCS nations.",
              "Endorse an SCS hotline and multilateral cessation of confrontational activities."
            ],
            "coalitions": {
              "natural_allies": [
                "United States",
                "Japan",
                "Philippines",
                "Vietnam",
                "Indonesia",
                "Malaysia",
                "Brunei"
              ],
              "adversaries": [
                "China"
              ]
            },
            "style": "Principled honest broker: UNCLOS-anchored and coalition-building, but firm and willing to wield the credible threat of force against Chinese intransigence.",
            "privateStrategy": [
              "India is at odds with China over Jammu-Kashmir and the common border; conceal this and immediately walk out if China raises the border issue.",
              "Actively build a united front with the US, Japan, Indonesia, Philippines, and Vietnam around the premise that the threat of force will deter China rather than inflame the region.",
              "Privately probe China for short-term measures and whether it will accept confidence-building measures; assume China plays for time and press that time is not on its side.",
              "Covertly assess what SCS actions might trigger a US military response under its Philippine mutual-defense treaty, and leverage Malabar-series cooperation with Japan and the US."
            ]
          }
        },
        {
          "teamTwinName": "diplomacy-team-japan",
          "displayName": "Japan",
          "side": "left",
          "participant": "twin",
          "provider": "anthropic",
          "modelOverride": "claude-opus-4-8",
          "fallbackModel": "none",
          "brief": {
            "role": "An extra-regional trusted partner and honest broker that champions UNCLOS, freedom of navigation, and a peaceful, multilateral resolution while quietly buttressing the Philippines and Vietnam against Chinese overreach.",
            "principles": [
              "Restoration of peace and tranquility across the entire Southeast Asian region is an absolute necessity.",
              "Freedom of the High Seas is a fundamental right.",
              "Adherence to the tenets of UNCLOS is an absolute necessity.",
              "Disputes are best resolved through peaceful multilateral negotiation and adherence to international agreements.",
              "Verifiable, UNCLOS-compliant evidence must substantiate all claims, which must abide by the arbitral tribunal's awards."
            ],
            "endStates": {
              "primary": "Universal adherence to UNCLOS freedom of navigation and innocent passage across the Western Pacific, with peaceful resolution of SCS sovereignty disputes and demilitarization of the SCS.",
              "alternate": "Increased cooperation and joint commercial/energy ventures among all Western Pacific nations, with any settlement codified through a new ASEAN-based SCS dialogue system."
            },
            "positions": {
              "SOVEREIGNTY": "Respect the sovereignty, coastal rights, and EEZs of all; only verifiable, UNCLOS-compliant claims to island entities are legitimate. The claims of China, the Philippines, and Vietnam all currently exceed what UNCLOS allows and must be adjudicated by the tribunal.",
              "UNCLOS": "UNCLOS sets exclusive conditions for territorial-sea baselines; low-tide elevations generate no territorial sea or airspace. No party may justify baselines that fail UNCLOS conditions, and reclaimed artificial features cannot manufacture maritime entitlements.",
              "NAVIGATION": "Freedom of navigation and overflight, and the right of innocent passage, must be guaranteed and cannot be impinged by any nation; energy supplies must be able to transit the SCS peacefully.",
              "RESOURCES": "Energy resources of the SCS must be exploitable free of the constant threat of military action; supports joint cooperative energy exploration as a confidence-building measure.",
              "FISHERIES": "Coastal states' EEZ rights must be respected; confrontation and harassment over routine commercial activity are unacceptable and should be de-escalated through cooperative measures.",
              "MILITARIZATION": "Favors demilitarization of the SCS; seeks a multilateral agreement to cease confrontational activities (land reclamation, laying buoys, placing markers) and supports coordinated joint patrols in disputed areas.",
              "ARBITRATION": "The 2016 SCS arbitration ruling is clear and binding; all parties are held to its decision and must abide by the tribunal's awards.",
              "MULTILATERALISM": "Champions ASEAN as the natural hub for regional problem-solving; any settlement should be codified via a new SCS dialogue system within ASEAN, with Japan and other trusted partners acting as intermediaries."
            },
            "redLines": [
              "No recognition or legitimization of China's nine/ten-dashed line or the 'Chinese archipelago' claim.",
              "No impingement of freedom of navigation, overflight, or the right of innocent passage by any nation.",
              "No acceptance of maritime baselines or entitlements that fail UNCLOS conditions, including from reclaimed artificial features.",
              "The 2016 arbitral award is non-negotiable; all parties are bound by it.",
              "Support for the Philippines and Vietnam extends only insofar as their claims are verifiable under UNCLOS."
            ],
            "batna": "If a unified position with partners is unattainable, fall back to bilaterally reassuring the Philippines and Vietnam of Japanese support (only within UNCLOS limits), pursuing incremental confidence-building measures, and keeping economic sanctions, political censure, and military action on the table as legitimate responses to illegal or aggressive acts.",
            "concessions": [
              "Act as a neutral intermediary/trusted-partner broker between the claimants and China.",
              "Accept short-term/interim measures and phased confidence-building steps rather than a full immediate settlement.",
              "Support joint cooperative energy exploration and joint commercial ventures in disputed areas.",
              "Endorse coordinated joint patrols and an SCS hotline among all SCS nations.",
              "Defer contested sovereignty questions to UNCLOS tribunal adjudication rather than pressing a Japanese position."
            ],
            "coalitions": {
              "natural_allies": [
                "United States",
                "India",
                "Philippines",
                "Vietnam",
                "ASEAN (Indonesia, Malaysia, Brunei)"
              ],
              "adversaries": [
                "China"
              ]
            },
            "style": "Principled, law-anchored honest-broker: firm on UNCLOS and freedom of navigation, conciliatory and coalition-building in method, patient but willing to signal that sanctions and military options remain on the table.",
            "privateStrategy": [
              "Quietly probe China for what short-term measures or compromises its delegation is actually instructed to offer, expecting Beijing to stall and play for time rather than concede.",
              "Reassure the Philippines and Vietnam of support against China, but privately condition it strictly on UNCLOS-verifiable claims and steer their off-UNCLOS claims back into existing regimes.",
              "Probe the US to determine what SCS actions would trigger a US military response under its mutual-defense treaty with the Philippines, and seek a unified US-Japan front.",
              "Press Indonesia, Malaysia, and Brunei to leverage their cordial Beijing ties to broker de-escalation, while exploiting ASEAN's internal disunity narrative to push them toward backing Manila and Hanoi."
            ]
          }
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
