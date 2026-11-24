# Praful Maurya — Portfolio

A responsive, single-page portfolio built with React, Vite, Motion for React, GSAP/ScrollTrigger, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local URL (usually `http://localhost:5173`).

## Build and preview

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy to GitHub Pages

The site is configured for the project page at `https://praful-maurya.github.io/portfolio/`.

One-time setup in the repository settings:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Select the **`gh-pages`** branch and **`/ (root)`**, then save.

After that, every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to the `gh-pages` branch. You can also trigger a deployment manually from the **Actions** tab.

To deploy from your machine instead:

```bash
npm run deploy
```

`npm run deploy` builds the site first (`predeploy`) and then publishes `dist/` with `.nojekyll` included.

### Deploying somewhere else

- For a custom domain or a `username.github.io` user site, set `VITE_BASE_PATH=/` when building (e.g. `VITE_BASE_PATH=/ npm run deploy`) and update `homepage` in `package.json`.
- For a repo with a different name, change the base path in `vite.config.js` and `homepage` in `package.json` to match.

## Personalize

- Replace `linkedin` and `github` in `src/data/profile.js` with your profile URLs. Leave either value blank to keep that link hidden.
- The resume download uses the site's base path, so it resolves to `/portfolio/Praful-Maurya-Resume.pdf` on GitHub Pages.
- Scroll motion respects reduced-motion settings; the GSAP parallax is limited to wider screens.
- Project interface visuals are original CSS mockups, not screenshots of production products.
