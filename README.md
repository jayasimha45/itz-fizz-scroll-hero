# Itz Fizz — Scroll Hero

A responsive, scroll-driven electric grand tourer landing page built with Next.js, React, Tailwind CSS, and GSAP.

## Run locally

```bash
npm install
npm run dev
```

## GitHub Pages

This project is configured for a static Next.js export. Push the `main` branch to GitHub, then enable **Settings → Pages → GitHub Actions**. The included workflow builds and deploys the `out/` directory.

The car illustration is an inline SVG so the hero works without a third-party image host. GSAP animates the introduction and ties vehicle movement to scroll progress with ScrollTrigger.
