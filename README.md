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

## Deploy to Vercel

Import this folder as a Vercel project, or install and use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

Vite is auto-detected. The build command is `npm run build` and the output directory is `dist`. For a production deployment, run `vercel --prod`.

## Personalize

- Replace `linkedin` and `github` in `src/data/profile.js` with your profile URLs. Leave either value blank to keep that link hidden.
- The resume download is set to `/Praful-Maurya-Resume.pdf`.
- Scroll motion respects reduced-motion settings; the GSAP parallax is limited to wider screens.
- Project interface visuals are original CSS mockups, not screenshots of production products.
