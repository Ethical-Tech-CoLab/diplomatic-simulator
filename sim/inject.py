#!/usr/bin/env python3
"""Merge built scenario+session objects into diplomacy-demo/data.js.
Usage: python3 sim/inject.py <built1.json> [built2.json ...]
Each built file is {"scenario":{...},"session":{...}} from build_session.py.
Dedupes by id (replaces existing entries with same id). Preserves the
existing Iran demo session/scenarios already in data.js.
"""
import json, sys, os, datetime

DATA = os.path.join(os.path.dirname(__file__), "..", "diplomacy-demo", "data.js")

def load_data():
    src = open(DATA).read()
    obj = json.loads(src[src.index("{"):src.rindex("}")+1])
    return obj

def main():
    obj = load_data()
    scen = {s["id"]: s for s in obj.get("scenarios", [])}
    sess = {s["id"]: s for s in obj.get("sessions", [])}
    added = []
    for path in sys.argv[1:]:
        b = json.load(open(path))
        scen[b["scenario"]["id"]] = b["scenario"]
        sess[b["session"]["id"]] = b["session"]
        added.append(b["session"]["id"])
    obj["scenarios"] = list(scen.values())
    obj["sessions"] = list(sess.values())
    obj["generatedAt"] = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%S.000Z")
    obj["sourceSnapshot"] = "sim/ (multi-scenario diplomatic simulator build)"
    with open(DATA, "w") as f:
        f.write("window.DIPLOMACY_SNAPSHOT_DEMO = ")
        json.dump(obj, f, indent=2, ensure_ascii=False)
        f.write(";\n")
    print(f"injected: {added}")
    print(f"data.js now has {len(obj['scenarios'])} scenarios, {len(obj['sessions'])} sessions")

if __name__ == "__main__":
    main()
