#!/usr/bin/env python3
"""Aggregate Monte Carlo trial outcomes into mc-data.js (window.MC_RESULTS).
Reads <mcdir>/<scenario>/t<t>/outcome.json + conditions.json.
Usage: python3 sim/aggregate_mc.py <mcdir> <out mc-data.js>
"""
import json, sys, os, statistics as st

SCEN = [
    ("arctic", "Arctic — Sovereignty & Sea-Lanes", "sess-arctic-iscne-01"),
    ("centralasia", "Central Asia — Fergana Valley", "sess-centralasia-iscne-01"),
    ("cyprus", "Cyprus — Reunification", "sess-cyprus-iscne-01"),
    ("scs", "South China Sea", "sess-scs-iscne-01"),
    ("korea", "Korea — Six-Party Talks", "sess-korea-iscne-01"),
    ("kashmir", "Jammu & Kashmir", "sess-kashmir-iscne-01"),
    ("iran", "Iran–US — Strait of Hormuz", "sess-1778361924764-byifbp"),
]
DEAL_ORDER = ["comprehensive", "framework", "partial", "stalemate", "breakdown"]

def stats(xs):
    xs = [x for x in xs if isinstance(x, (int, float))]
    if not xs:
        return None
    xs_sorted = sorted(xs)
    return {
        "n": len(xs), "mean": round(sum(xs)/len(xs), 3),
        "sd": round(st.pstdev(xs), 3) if len(xs) > 1 else 0.0,
        "min": round(min(xs), 3), "max": round(max(xs), 3),
        "p50": round(st.median(xs), 3),
    }

def main():
    mcdir, out = sys.argv[1], sys.argv[2]
    result = {"scenarios": []}
    for key, title, sid in SCEN:
        base = os.path.join(mcdir, key)
        trials = []
        for t in range(40):
            op = os.path.join(base, f"t{t}", "outcome.json")
            cp = os.path.join(base, f"t{t}", "conditions.json")
            if not os.path.exists(op):
                continue
            try:
                o = json.load(open(op))
            except Exception:
                continue
            cond = json.load(open(cp)) if os.path.exists(cp) else {}
            trials.append({"t": t, "outcome": o, "cond": cond})
        # aggregate
        dealcount = {d: 0 for d in DEAL_ORDER}
        for tr in trials:
            parts = (tr["outcome"].get("dealType") or "").strip().lower().split()
            dt = parts[0] if parts else ""
            for d in DEAL_ORDER:
                if dt.startswith(d):
                    dealcount[d] += 1
        # per party
        pcodes = []
        for tr in trials:
            for p in tr["outcome"].get("parties", []):
                if p.get("code") and p["code"] not in pcodes:
                    pcodes.append(p["code"])
        parties = []
        for code in pcodes:
            sats, held, goals, nm = [], 0, {"achieved": 0, "partial": 0, "failed": 0}, code
            seen = 0
            rat_ok, rat_den = 0, 0  # ratification: True count, and trials where a deal existed to ratify
            for tr in trials:
                inst = (tr["outcome"].get("instrument") or "none").strip().lower()
                for p in tr["outcome"].get("parties", []):
                    if p.get("code") == code:
                        seen += 1
                        nm = p.get("name", code)
                        if isinstance(p.get("satisfaction"), (int, float)):
                            sats.append(p["satisfaction"])
                        if p.get("redLineHeld") is True:
                            held += 1
                        g = (p.get("primaryGoal") or "").lower()
                        if g in goals:
                            goals[g] += 1
                        if inst not in ("", "none"):
                            rat_den += 1
                            if p.get("ratifiable") is True:
                                rat_ok += 1
            parties.append({
                "code": code, "name": nm, "n": seen,
                "sat": stats(sats),
                "redLineHeldPct": round(100*held/seen) if seen else 0,
                "primaryGoalAchievedPct": round(100*goals["achieved"]/seen) if seen else 0,
                "goals": goals,
                "ratifiedPct": round(100*rat_ok/rat_den) if rat_den else None,
            })
        parties.sort(key=lambda p: -(p["sat"]["mean"] if p["sat"] else 0))
        # coalition frequency
        coal = {}
        for tr in trials:
            for c in tr["outcome"].get("coalitions", []) or []:
                k = str(c).strip()
                if k:
                    coal[k] = coal.get(k, 0) + 1
        coal_top = sorted(coal.items(), key=lambda x: -x[1])[:8]
        # success metrics (probability of success, split by what "success" means)
        n = len(trials)
        any_deal = dealcount["comprehensive"] + dealcount["framework"] + dealcount["partial"]
        substantive = dealcount["comprehensive"] + dealcount["framework"]
        success = {
            "anyAgreementPct": round(100*any_deal/n) if n else 0,
            "substantiveAgreementPct": round(100*substantive/n) if n else 0,
        }
        # instrument (form of any agreement)
        INSTR = ["treaty", "framework", "memorandum", "communique", "none"]
        instruments = {i: 0 for i in INSTR}
        for tr in trials:
            iv = (tr["outcome"].get("instrument") or "none").strip().lower()
            instruments[iv] = instruments.get(iv, 0) + 1
        # bloc cohesion and type across all blocs recorded
        cohesion = {"tight": 0, "loose": 0, "fractured": 0}
        bloc_types = {"standing": 0, "situational": 0}
        for tr in trials:
            for b in tr["outcome"].get("blocs", []) or []:
                c = (b.get("cohesion") or "").strip().lower()
                if c in cohesion:
                    cohesion[c] += 1
                ty = (b.get("type") or "").strip().lower()
                if ty in bloc_types:
                    bloc_types[ty] += 1
        result["scenarios"].append({
            "key": key, "title": title, "sessionId": sid,
            "nTrials": len(trials),
            "dealTypes": dealcount,
            "success": success,
            "instruments": instruments,
            "blocCohesion": cohesion,
            "blocTypes": bloc_types,
            "parties": parties,
            "coalitions": [{"label": k, "n": v} for k, v in coal_top],
            "trials": [{
                "t": tr["t"],
                "dealType": (tr["outcome"].get("dealType") or "").strip().lower(),
                "shock": tr["cond"].get("shock", ""),
                "mood": tr["cond"].get("mood", ""),
                "mediatorPressure": tr["cond"].get("mediatorPressure", ""),
                "note": tr["outcome"].get("note", ""),
            } for tr in trials],
        })
    with open(out, "w") as f:
        f.write("window.MC_RESULTS = ")
        json.dump(result, f, ensure_ascii=False, indent=1)
        f.write(";\n")
    for s in result["scenarios"]:
        print(f"{s['key']}: {s['nTrials']} trials | deals {s['dealTypes']}")

if __name__ == "__main__":
    main()
