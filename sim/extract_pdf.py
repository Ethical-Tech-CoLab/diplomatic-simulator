#!/usr/bin/env python3
"""Extract text from a scenario's PDFs into per-file .txt for profile-building.
Usage: python3 sim/extract_pdf.py "Arctic Scenario Docs" <out_dir>
Reusable across scenarios (Arctic, Central Asia, Cyprus, South China Sea)."""
import sys, os, glob, fitz

src_dir = sys.argv[1]
out_dir = sys.argv[2]
os.makedirs(out_dir, exist_ok=True)
for pdf in sorted(glob.glob(os.path.join(src_dir, "*.pdf"))):
    doc = fitz.open(pdf)
    text = "\n".join(pg.get_text() for pg in doc)
    base = os.path.splitext(os.path.basename(pdf))[0]
    with open(os.path.join(out_dir, base + ".txt"), "w") as f:
        f.write(text)
    print(f"{base:55s} pages={doc.page_count:3d} chars={len(text)}")
