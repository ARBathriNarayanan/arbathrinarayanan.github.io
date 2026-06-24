# Quantum Nuclear Level Scheme — GitHub Pages Deployment

## Files
- `index.html` — Landing page with animated DAG hero
- `demo.html`  — Full interactive demo (classical + QAOA simulation)
- `proposal.pdf` — Compiled LaTeX proposal

## Deploy to GitHub Pages in 3 steps

### Step 1 — Create / use your repo
If your site is at `username.github.io`, add these files to that repo's root.
If you want a project page at `username.github.io/nuclear`, add them to a `nuclear/` folder or a separate repo called `nuclear`.

### Step 2 — Push the files
```bash
# From inside your github.io repo folder:
cp /path/to/this/folder/* .
git add index.html demo.html proposal.pdf README.md
git commit -m "Add quantum nuclear level scheme demo"
git push
```

### Step 3 — Enable GitHub Pages (if not already)
Settings → Pages → Source: Deploy from branch → main → / (root) → Save

Your site will be live at:
- `https://username.github.io/`  (if root repo)
- `https://username.github.io/nuclear/`  (if subfolder/project repo)

## Local preview
```bash
python3 -m http.server 8080
# Open http://localhost:8080
```
