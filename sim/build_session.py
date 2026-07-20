#!/usr/bin/env python3
"""Assemble a diplomacy-table SESSION + SCENARIO (data.js schema) from a
simulation run: per-party profiles + a moves transcript + an analysis file.

Reusable across scenarios. Driven by a manifest JSON:
{
  "scenarioId": "scenario-arctic-iscne",
  "sessionId": "sess-arctic-01",
  "title": "...", "domain": "geopolitical",
  "shortDescription": "...", "description": "...",
  "openerTwin": "diplomacy-team-us",
  "baseTime": "2026-02-20T09:00:00",
  "partyOrder": ["USA","RUS","CAN","CHN","NOR","DNK","FIN"],
  "leftBloc": ["USA","CAN","NOR","DNK","FIN"],
  "simDir": ".../arctic-sim", "profilesDir": ".../arctic-profiles"
}
Usage: python3 sim/build_session.py <manifest.json> <out.json>
Emits {"scenario":{...}, "session":{...}}.
"""
import json, sys, os, datetime

CANON = {
 "logrolling":"issue-linkage","package-linkage":"issue-linkage","linkage":"issue-linkage",
 "red-lining":"red-line-signaled","red-line signaling":"red-line-signaled",
 "red-line-reaffirmation":"red-line-signaled","red-line-signaling":"red-line-signaled",
 "batna-signaling":"red-line-signaled","conditional concession":"conditional-offer",
 "conditional-concession":"conditional-offer","forward-commitment":"conditional-offer",
 "face-saving-formula":"principled-bargaining-frame","consensus-appeal":"principled-bargaining-frame",
 "coalition-signaling":"coalition-building","bridge-building":"coalition-building",
 "principled-anchoring":"anchoring","counter-anchoring":"counter-anchoring",
}
def canon(t):
    t=t.strip()
    return CANON.get(t, CANON.get(t.lower(), t.lower().replace(" ","-")))

def main():
    man=json.load(open(sys.argv[1])); out_path=sys.argv[2]
    simDir=man["simDir"]; profDir=man["profilesDir"]
    order=man["partyOrder"]; left=set(man.get("leftBloc",[]))
    base=datetime.datetime.fromisoformat(man["baseTime"])

    # parties from profiles
    parties=[]
    twin_by_code={}
    for code in order:
        p=json.load(open(os.path.join(profDir, code+".json")))
        twin_by_code[code]=p["teamTwinName"]
        parties.append({
            "teamTwinName":p["teamTwinName"],"displayName":p["displayName"],
            "side":"left" if code in left else "right","participant":"twin",
            "provider":"anthropic","modelOverride":"claude-opus-4-8","fallbackModel":"none"
        })

    # moves
    moves=[]; tactics=[]; tcount={}
    mi=0
    for r in range(1,9):
        for code in order:
            fp=os.path.join(simDir,"moves",f"r{r}_{code}.json")
            if not os.path.exists(fp): continue
            m=json.load(open(fp))
            ts=(base+datetime.timedelta(minutes=12*mi)).strftime("%Y-%m-%dT%H:%M:%S.000Z")
            mid=f"{man['sessionId']}-mv{mi:03d}"
            applied=[canon(t) for t in m.get("tacticsApplied",[])]
            moves.append({
                "id":mid,"sessionId":man["sessionId"],"channelId":"plenary",
                "roundNumber":m["roundNumber"],"partyTwin":m["partyTwin"],
                "authoredBy":"twin","kind":m.get("kind","message"),"text":m["text"],
                "tacticsApplied":applied,"createdAt":ts
            })
            for t in applied:
                tcount[t]=tcount.get(t,0)+1
                tactics.append({
                    "id":f"{man['sessionId']}-det{len(tactics):03d}","sessionId":man["sessionId"],
                    "roundNumber":m["roundNumber"],"partyTwin":m["partyTwin"],"tacticId":t,
                    "evidenceMoveIds":[mid],"confidence":0.8,"detector":"twin-self-tag","createdAt":ts
                })
            mi+=1

    an=json.load(open(os.path.join(simDir,"analysis.json")))
    maxr=max(m["roundNumber"] for m in moves)
    session={
        "id":man["sessionId"],"title":man["title"],"description":man["description"],
        "mode":"negotiation","status":"concluded","currentRound":maxr,
        "createdAt":base.strftime("%Y-%m-%dT%H:%M:%S.000Z"),
        "concludedAt":(base+datetime.timedelta(minutes=12*mi)).strftime("%Y-%m-%dT%H:%M:%S.000Z"),
        "parties":parties,
        "rules":{"maxRounds":maxr,"roundTimeoutMs":120000,"autoAdvance":False,
                 "procedureStyle":"plenary-with-caucus","sidebarsAllowed":True,
                 "sidebarDisclosure":"fact-only","caucusReportBack":True,"rightOfReply":True,
                 "chairCanSilence":False,"coalitionsVisible":True,
                 "openerPartyTwin":man["openerTwin"],"rotateOpener":True},
        "scoreboard":an["scoreboard"],"moves":moves,"tactics":tactics,
        "tacticCounts":tcount,"debriefs":an["debriefs"],
        "convenerReport":an["convenerReport"]
    }
    scenario={"id":man["scenarioId"],"title":man["scenarioTitle"],"domain":man["domain"],
              "status":"active","shortDescription":man["shortDescription"]}
    json.dump({"scenario":scenario,"session":session},open(out_path,"w"),indent=1)
    print(f"built {man['sessionId']}: {len(moves)} moves, {len(parties)} parties, "
          f"{len(tcount)} tactic types; scenario={man['scenarioId']}")

if __name__=="__main__":
    main()
