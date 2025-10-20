# jamesnorton.design
Public portfolio. Webflow to Firebase setup hosting set up. 

Background: This repository is a version of the Webflow site located at https://jamesnorton-design-v3-0.webflow.io/ that's been customised for self-hosting. 

Purpose: The primary objective of this repository is to facilitate the following processes:
* Seamlessly pull the site's code into a local machine for development and inspection.
* Utilize AI tools, such as Cursor, to assist in making code changes that can be later incorporated into the Webflow project.
* Deploy the site to Firebase Hosting, which offers free hosting services.
* Maintain a backup of the site's codebase.
* Learn and understand the use of Git and GitHub for version control and collaboration.

Contents: This repository includes the site's codebase and several npm scripts designed to streamline specific tasks related to pulling from Webflow, pushing to Firebase and Github and staying in sync.
* "pull-webflow" – Pulls the site from the Webflow staging domain.
* "push-github" – Shortcut for pushing to GitHub with default commit messages "Push custom code"
* "sync" – combines pull, push-webflow, and firebase deploy.

⚠️ Local Code Editing and Customization: When making changes to the code locally, exercise caution as there is no automated process to integrate these changes into Webflow. Feel free to explore the code and leverage AI tools to assist in making changes, but ensure to also apply these changes to the Webflow project. In the future, it might be beneficial to transition away from Webflow to adopt a more custom approach, enabling better version control management. 

One possible approach is to maintain all custom code within the Webflow project in a dedicated repository or folder, then serve that content using a CDN and import it into the Webflow project. By making all custom changes within those repositories, it becomes possible to commit and push to GitHub, allowing the changes to be automatically reflected in Webflow.
