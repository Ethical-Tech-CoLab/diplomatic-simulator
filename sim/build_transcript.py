#!/usr/bin/env python3
"""Emit transcript.json and transcript.md for a scenario from its moves/ files.
Usage: python3 sim/build_transcript.py <manifest.json>
Writes <simDir>/transcript.json ({"moves":[...]}) and <simDir>/transcript.md.
Reads the same moves/r<R>_<CODE>.json files build_session.py consumes, so the
two stay in step.
"""
import json, sys, os

def main():
    man = json.load(open(sys.argv[1]))
    simDir = man["simDir"]
    order = man["partyOrder"]
    moves = []
    for r in range(1, 9):
        for code in order:
            fp = os.path.join(simDir, "moves", f"r{r}_{code}.json")
            if not os.path.exists(fp):
                continue
            moves.append(json.load(open(fp)))

    with open(os.path.join(simDir, "transcript.json"), "w") as f:
        json.dump({"moves": moves}, f, indent=1, ensure_ascii=False)
        f.write("\n")

    md, cur = [], None
    for m in moves:
        if m["roundNumber"] != cur:
            cur = m["roundNumber"]
            md.append(f"## ROUND {cur}\n")
        md.append(f"**{m['displayName']}**: {m['text']}\n")
    with open(os.path.join(simDir, "transcript.md"), "w") as f:
        f.write("\n".join(md))

    print(f"wrote {simDir}/transcript.json and transcript.md ({len(moves)} moves)")

if __name__ == "__main__":
    main()
