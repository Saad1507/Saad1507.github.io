# Muhammad Saad's portfolio

Live at [saad1507.github.io](https://saad1507.github.io/).

A software-led portfolio with dedicated software, digital hardware and combined systems CVs. Built with Next.js, React and TypeScript, exported as a static site for GitHub Pages.

## Develop and build

Use Node.js 20 or later.

```sh
npm ci
npm run dev
npm run build
```

The production build includes linting and TypeScript checks and writes the static site to `out/`. To inspect that build locally:

```sh
python -m http.server 8765 --bind 127.0.0.1 --directory out
```

## Content

- `src/lib/projects.ts`: project descriptions, contribution statements, public repository links and CV metadata.
- `src/app/`: home, software, hardware, experience, about, contact, skills and CV pages.
- `src/components/`: navigation, project search, conceptual illustrations and interactive demonstrations.
- `src/app/globals.css`: responsive design and reduced-motion support.
- `src/app/motion.css`: logo, hover/focus illustration animations and interface transitions.
- `src/components/PageMotion.tsx`: one-time scroll entrances with progressive enhancement and reduced-motion handling.
- `public/cv/`: public PDF downloads. Keep names stable when updating files.

The software and combined CVs are public editions of existing documents. Confidential internship work is described at a general technical level; employer identities, private repository links and application/user data are excluded. Original local CV files are not edited by this site.

Illustrations explain project concepts and are not product screenshots. The browser cache demonstration is a separate illustration of LRU behaviour, not the original C++ application.

The code-and-circuit logo and project illustrations animate on hover or keyboard focus. Illustration loops pause when interaction ends. Entrance effects run once as content comes into view. The operating system's reduced-motion preference disables animations, and content stays readable without JavaScript.

The version immediately before the logo and motion update is preserved as `portfolio-before-motion-2026-11-15`.

Legacy URLs such as `/resume/`, `/asic-journey/` and the original project slugs remain available. `/Resume.pdf` retains a hardware CV for existing links.

## Publication

A push to `main` runs the existing **Deploy to GitHub Pages** workflow. It installs the lockfile dependencies, builds, uploads `out/` and deploys that artifact.

Before publishing content changes, check the narrow mobile layout, navigation, project filters, direct project URLs and PDF downloads.

## Restore the previous website

The complete version before this redesign is preserved in the remote tag:

`portfolio-before-redesign-2026-11-11`

Original commit: `586ed9b3aef5dc7a68222550b6240f9ac8735e48`.

To inspect it without modifying the current site:

```sh
git fetch origin --tags
git worktree add ../portfolio-original portfolio-before-redesign-2026-11-11
```

To undo only the redesign, find the commit titled **Rebuild portfolio around software and digital hardware** and revert it on an up-to-date, clean `main` branch:

```sh
git switch main
git pull --ff-only
git log --oneline
git revert <redesign-commit>
git push origin main
```

Reverting creates a normal history-preserving commit and triggers the Pages deployment. If later changes conflict, resolve them before pushing; do not force-push or discard unrelated work.
