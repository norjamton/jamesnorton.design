# jamesnorton.design

Source code for [jamesnorton.design](https://jamesnorton.design) — my personal portfolio site.

## Stack

- **Hosting**: Firebase Hosting (static HTML)
- **Functions**: Firebase Cloud Functions (Node.js 20) — serves a visitor counter via the GA4 Data API
- **Origin**: HTML originally built in Webflow, now maintained directly with AI tools (Claude, etc.)

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

## Original purpose

This repository was originally a version of the Webflow site located at https://jamesnorton-design-v3-0.webflow.io/ that was customised for self-hosting.

Purpose: The primary objective of this repository was to facilitate the following processes:
* Seamlessly pull the site's code into a local machine for development and inspection.
* Utilize AI tools, such as Cursor, to assist in making code changes that can be later incorporated into the Webflow project.
* Deploy the site to Firebase Hosting, which offers free hosting services.
* Maintain a backup of the site's codebase.
* Learn and understand the use of Git and GitHub for version control and collaboration.

Contents: This repository included the site's codebase and several npm scripts designed to streamline specific tasks related to pulling from Webflow, pushing to Firebase and Github and staying in sync.
* "pull-webflow" – Pulls the site from the Webflow staging domain.
* "push-github" – Shortcut for pushing to GitHub with default commit messages "Push custom code"
* "sync" – combines pull-webflow and push-webflow.

⚠️ Local Code Editing and Customization: When making changes to the code locally, exercise caution as there is no automated process to integrate these changes into Webflow. Feel free to explore the code and leverage AI tools to assist in making changes, but ensure to also apply these changes to the Webflow project. In the future, it might be beneficial to transition away from Webflow to adopt a more custom approach, enabling better version control management.
