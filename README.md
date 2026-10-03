# jamesnorton.design

Source code for [jamesnorton.design](https://jamesnorton.design) — my personal portfolio site.

## Stack

- **Hosting**: Firebase Hosting (static HTML)
- **Functions**: Firebase Cloud Functions (Node.js 20) — serves a visitor counter via the GA4 Data API
- **Origin**: HTML originally built in Webflow and pulled into this repo for self-hosting; now designed with the Lumos UI framework and built/maintained directly in code with Claude Code

## Structure

- `public/` — static site files served by Firebase Hosting
- `functions/` — Cloud Functions source (visitor counter)
- `firebase.json` — hosting + functions config

## Deploying

```
firebase deploy --project jamesnorton-design
```

Private content (case studies, backups) is stored in a separate private repo.

---

## History

This repository started as a pulled copy of a Webflow site (https://jamesnorton-design-v3-0.webflow.io/), customised for self-hosting on Firebase. The `pull-webflow`/`push-github`/`sync` npm scripts were built for that workflow — pulling the latest HTML from the Webflow staging domain and pushing it to GitHub.

That workflow is no longer how the site is maintained. The site is now designed with the Lumos UI framework and changes are made directly in `public/index.html` with Claude Code, rather than round-tripping through Webflow.
