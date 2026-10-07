#!/usr/bin/env python3
"""Run after every change, before you commit:  python3 tools/build.py

1. Recomputes the sha256 hashes of the inline <script> blocks in index.html and
   writes them into the Content-Security-Policy. If you edit any inline script
   and skip this, the browser blocks the script and the app shows a blank page.
2. Gives sw.js a new VERSION based on the content of every cached file, so
   installed copies of the app pick up the new release.
"""
import base64, hashlib, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
INDEX = ROOT / "index.html"
SW = ROOT / "sw.js"

html = INDEX.read_text(encoding="utf-8")

# 1. CSP hashes for inline scripts (scripts with a src attribute are covered by 'self')
inline = re.findall(r"<script(?![^>]*\bsrc=)[^>]*>(.*?)</script>", html, flags=re.S)
hashes = ["'sha256-%s'" % base64.b64encode(hashlib.sha256(s.encode("utf-8")).digest()).decode() for s in inline]
csp_re = re.compile(r"(script-src 'self')((?: 'sha256-[A-Za-z0-9+/=]+')*)")
if not csp_re.search(html):
    sys.exit("Could not find script-src 'self' in the Content-Security-Policy meta tag.")
html = csp_re.sub(lambda m: m.group(1) + "".join(" " + h for h in hashes), html, count=1)
INDEX.write_text(html, encoding="utf-8")

# 2. Service worker version
sw = SW.read_text(encoding="utf-8")
assets = re.search(r"const ASSETS=\[(.*?)\];", sw, flags=re.S).group(1)
files = [a.strip().strip("'\"") for a in assets.split(",") if a.strip()]
h = hashlib.sha256()
for f in files:
    p = ROOT / ("index.html" if f in ("./", "") else f.lstrip("./"))
    if not p.exists():
        sys.exit(f"sw.js lists {f}, but the file is missing.")
    h.update(p.read_bytes())
app_version = re.search(r"const APP_VERSION = '([^']+)'", html).group(1).replace(".", "-")
new_version = f"wmu-v{app_version}-{h.hexdigest()[:12]}"
sw = re.sub(r"const VERSION='[^']*'", f"const VERSION='{new_version}'", sw, count=1)
SW.write_text(sw, encoding="utf-8")

print(f"{len(hashes)} inline scripts hashed; service worker version {new_version}")
