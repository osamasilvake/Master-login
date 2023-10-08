## React + Vite Tooling

Setup

## Releasing

A summary of development workflow involving multiple git branches.

-   Fetch latest changes to you local master branch: `git fetch origin`
-   Stage modified files: `git add .`
-   Push master to remote: `git push`
-   Release command: `yarn release:[major|minor|patch]`
-   Create Tag: `git push --follow-tags origin master`
-   Create a `merge request` in Gitlab: `master -> development|pre-production|production`
