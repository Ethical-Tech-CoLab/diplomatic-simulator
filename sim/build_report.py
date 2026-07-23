#!/usr/bin/env python3
"""Generate a standalone, styled scenario REPORT page from a data.js session.
Usage: python3 sim/build_report.py <sessionId> <out.html> [scenarioSubtitle]
Reads diplomacy-demo/data.js, renders parties, convener report, tactic summary,
and the round-by-round transcript. Self-contained HTML, matches site styling.
"""
import json, sys, os, html, datetime

DATA = os.path.join(os.path.dirname(__file__), "..", "diplomacy-demo", "data.js")

BEHAVIOR_DIMS = ["temperament", "riskTolerance", "timeHorizon", "concessionPattern",
                 "proceduralPosture", "trustPosture", "communicationRegister"]
BEHAVIOR_LABELS = {"temperament": "Temperament", "riskTolerance": "Risk tolerance",
                   "timeHorizon": "Time horizon", "concessionPattern": "Concession pattern",
                   "proceduralPosture": "Procedural posture", "trustPosture": "Trust posture",
                   "communicationRegister": "Register"}

ROUND_LABEL = {1: "Opening Plenary", 2: "Positioning", 3: "Bargaining & Coalitions", 4: "Closing Plenary"}
# 3-round scenarios: opening / bargaining / closing
ROUND_LABEL_3 = {1: "Opening Plenary", 2: "Bargaining & Coalitions", 3: "Closing Plenary"}

def esc(x): return html.escape(str(x if x is not None else ""))

def main():
    sid = sys.argv[1]; out = sys.argv[2]
    subtitle = sys.argv[3] if len(sys.argv) > 3 else ""
    src = open(DATA).read()
    d = json.loads(src[src.index("{"):src.rindex("}")+1])
    s = next(x for x in d["sessions"] if x["id"] == sid)
    name = {p["teamTwinName"]: p["displayName"] for p in s["parties"]}
    side = {p["teamTwinName"]: p.get("side", "left") for p in s["parties"]}
    sat = {x["teamTwinName"]: x for x in s.get("scoreboard", [])}
    maxr = max((m["roundNumber"] for m in s["moves"]), default=0)
    rl = ROUND_LABEL if maxr >= 4 else ROUND_LABEL_3

    # parties table
    prows = ""
    for p in s["parties"]:
        sc = sat.get(p["teamTwinName"], {})
        satv = sc.get("satisfaction")
        sats = f"{satv:.2f}" if isinstance(satv, (int, float)) else "n/a"
        prows += (f'<tr><td><strong>{esc(p["displayName"])}</strong></td>'
                  f'<td>{sats}</td><td>{esc(sc.get("agreementsWon","-"))}</td>'
                  f'<td>{esc(sc.get("redLinesCrossed","-"))}</td></tr>')

    # behavioural dispositions (brief.behavior, authored per delegation)
    brows = ""
    for p in s["parties"]:
        b = (p.get("brief") or {}).get("behavior") or {}
        if not b:
            continue
        cells = "".join(
            f'<td><span class="lvl">{esc(b[dim]["level"])}</span>'
            f'<span class="note">{esc(b[dim].get("note",""))}</span></td>'
            for dim in BEHAVIOR_DIMS if dim in b)
        brows += f'<tr><td><strong>{esc(p["displayName"])}</strong></td>{cells}</tr>'
    bsection = ""
    if brows:
        bhead = "".join(f"<th>{esc(BEHAVIOR_LABELS[d])}</th>" for d in BEHAVIOR_DIMS)
        bsection = (
            '<section><h2>Delegation dispositions</h2>'
            '<p class="lead">Seven behavioural dimensions authored into each delegation&rsquo;s profile '
            'from its own role, BATNA and privileged instructions. These shape how a delegation '
            'negotiates, independently of what it is negotiating for.</p>'
            f'<div class="scroll"><table class="behavior"><thead><tr><th>Delegation</th>{bhead}</tr></thead>'
            f'<tbody>{brows}</tbody></table></div></section>')

    # tactics
    tc = sorted(s.get("tacticCounts", {}).items(), key=lambda x: -x[1])[:12]
    tchips = "".join(f'<span class="tag">{esc(k)} · {v}</span>' for k, v in tc)

    # convener
    cv = s.get("convenerReport", {}) or {}
    def ul(arr): return "".join(f"<li>{esc(x)}</li>" for x in (arr or []))
    conv = ""
    if cv:
        conv = (f'<p class="lead">{esc(cv.get("summary",""))}</p>'
                + (f'<h3>Key outcomes</h3><ul>{ul(cv.get("keyOutcomes"))}</ul>' if cv.get("keyOutcomes") else "")
                + (f'<h3>Unresolved</h3><ul>{ul(cv.get("unresolved"))}</ul>' if cv.get("unresolved") else ""))

    # transcript grouped by round
    tr = ""
    cur = None
    for m in s["moves"]:
        r = m["roundNumber"]
        if r != cur:
            cur = r
            tr += f'<h3 class="round">Round {r} — {esc(rl.get(r, "Session"))}</h3>'
        sd = side.get(m["partyTwin"], "left")
        chips = "".join(f'<span class="chip">{esc(t)}</span>' for t in m.get("tacticsApplied", []))
        tr += (f'<article class="move {sd}">'
               f'<div class="mhead"><span class="who">{esc(name.get(m["partyTwin"], m["partyTwin"]))}</span>'
               f'<span class="kind">{esc(m.get("kind","message"))}</span></div>'
               f'<div class="txt">{esc(m.get("text",""))}</div>'
               f'<div class="chips">{chips}</div></article>')

    headline = cv.get("headline", "")
    page = f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"/>
<meta name="robots" content="noindex,nofollow,noarchive">
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>{esc(s["title"])} — Diplomatic Simulator</title>
<style>
:root{{--crimson:#6d28d9;--navy:#241539;--ink:#1a1020;--muted:#6b6478;--paper:#f5f2f9;--line:#e4dcf3;--gold:#7b5cff}}
*{{box-sizing:border-box}}
html,body{{margin:0;padding:0;background:var(--paper);color:var(--ink);font-family:"Helvetica Neue",Arial,sans-serif;line-height:1.55;font-size:15px}}
h1,h2,h3{{font-family:Georgia,"Times New Roman",serif;color:var(--navy);margin:0 0 .4em}}
h1{{font-size:2.1rem;line-height:1.15;color:#fff}}
h2{{font-size:1.35rem;border-bottom:2px solid var(--crimson);padding-bottom:.25em;margin:1.6em 0 .6em}}
h3{{font-size:1.05rem;color:var(--crimson);margin:1.2em 0 .5em}}
h3.round{{color:var(--navy);border-bottom:1px solid var(--line);padding-bottom:.3em;margin-top:1.8em}}
a{{color:var(--crimson);text-decoration:none}}a:hover{{text-decoration:underline}}
.wrap{{max-width:940px;margin:0 auto;padding:0 24px}}
header.hero{{background:linear-gradient(135deg,var(--navy),#120c1a);color:#fff;padding:40px 0 30px;border-bottom:6px solid var(--crimson)}}
.eyebrow{{letter-spacing:.18em;text-transform:uppercase;font-size:.72rem;color:var(--gold);margin-bottom:8px}}
.subtitle{{color:#d8d8d8;margin:.4em 0 0;max-width:760px}}
.backlink{{display:inline-block;color:#cfd6e6;font-size:.85rem;margin-bottom:12px}}.backlink:hover{{color:#fff}}
.chip{{display:inline-block;background:#eee;border:1px solid var(--line);color:#444;font-size:.68rem;padding:2px 7px;border-radius:99px;margin:3px 3px 0 0}}
.tag{{display:inline-block;background:var(--paper);border:1px solid var(--line);color:var(--muted);font-size:.72rem;padding:2px 9px;border-radius:99px;margin:3px 4px 0 0}}
.lead{{font-size:1.03rem;max-width:820px}}
section{{padding:8px 0 20px}}
table{{width:100%;border-collapse:collapse;margin-top:10px;background:#fff;border:1px solid var(--line)}}
th,td{{padding:9px 12px;text-align:left;border-bottom:1px solid var(--line);font-size:.92rem}}
th{{background:var(--navy);color:#fff;font-family:Georgia,serif}}
tr:last-child td{{border-bottom:0}}tr:nth-child(even) td{{background:#fcfaf6}}
.scroll{{overflow-x:auto;-webkit-overflow-scrolling:touch}}
table.behavior{{min-width:900px}}
table.behavior td{{vertical-align:top;font-size:.8rem}}
table.behavior th{{font-size:.78rem;white-space:nowrap}}
.lvl{{display:block;font-weight:700;color:var(--navy);letter-spacing:.01em}}
.note{{display:block;color:var(--muted);font-size:.74rem;line-height:1.42;margin-top:3px;max-width:22ch}}
.move{{background:#fff;border:1px solid var(--line);border-radius:8px;padding:12px 14px;margin:10px 0;max-width:80%}}
.move.left{{border-left:4px solid var(--navy)}}
.move.right{{border-left:4px solid var(--crimson);margin-left:20%}}
.mhead{{display:flex;justify-content:space-between;gap:10px;margin-bottom:5px}}
.mhead .who{{font-weight:600;color:var(--navy)}}
.mhead .kind{{font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;color:var(--muted)}}
.txt{{font-size:.95rem}}.chips{{margin-top:6px}}
ul{{margin:.3em 0 1em;padding-left:20px}}li{{margin:.2em 0}}
footer{{border-top:1px solid var(--line);color:var(--muted);font-size:.85rem;text-align:center;padding:18px 0;margin-top:20px}}
@media(max-width:700px){{.move,.move.right{{max-width:100%;margin-left:0}}}}
</style></head><body>
<header class="hero"><div class="wrap">
  <a class="backlink" href="index.html">← Diplomatic Simulator</a>
  <div class="eyebrow">Diplomatic Simulator · Scenario Report</div>
  <h1>{esc(s["title"])}</h1>
  <p class="subtitle">{esc(subtitle)}</p>
</div></header>
<div class="wrap">
<section><h2>Overview</h2><p class="lead">{esc(s.get("description",""))}</p>
<p><a href="dashboard.html?session={esc(sid)}"><strong>▶ Open the interactive dashboard</strong></a> &nbsp;·&nbsp; <a href="live.html?session={esc(sid)}">watch it play out live</a> &nbsp;·&nbsp; <a href="diplomacy-demo/index.html?session={esc(sid)}">simple replay table</a> &nbsp;·&nbsp; <a href="methodology.html">how this was made</a></p></section>

<section><h2>Convener Report</h2>
{('<p class="lead"><strong>'+esc(headline)+'</strong></p>') if headline else ''}
{conv}
</section>

<section><h2>Delegations &amp; Scoreboard</h2>
<table><thead><tr><th>Delegation</th><th>Satisfaction</th><th>Agreements</th><th>Red lines crossed</th></tr></thead>
<tbody>{prows}</tbody></table></section>

{bsection}

<section><h2>Tactics observed</h2><div>{tchips}</div></section>

<section><h2>Transcript</h2>{tr}</section>
</div>
<footer><div class="wrap">Notional exercise material for educational purposes only · statements generated by AI agents role-playing each delegation · Ethical Tech CoLab</div></footer>
</body></html>"""
    open(out, "w").write(page)
    print(f"wrote {out}  ({len(s['moves'])} moves, {len(s['parties'])} parties)")

if __name__ == "__main__":
    main()
