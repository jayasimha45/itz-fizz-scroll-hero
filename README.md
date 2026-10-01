# ITZFIZZ — Scroll-Driven Hero Animation

A premium, responsive creative-agency landing page built around a custom vector car and a scroll-controlled driving scene. The visual interaction is inspired by the idea of a car moving as the visitor scrolls; the design, illustration, copy, and implementation are original to this project.

## Live demo and source

- Live demo: [https://jayasimha45.github.io/itz-fizz-scroll-hero/](https://jayasimha45.github.io/itz-fizz-scroll-hero/)
- GitHub repository: [https://github.com/jayasimha45/itz-fizz-scroll-hero](https://github.com/jayasimha45/itz-fizz-scroll-hero)

## Features

- Full-viewport hero with an animated, letter-spaced headline, description, calls to action, and four impact metrics.
- Original inline SVG red performance SUV with sculpted body panels, glass, illuminated headlamps, and scroll-rotating detailed wheels.
- Cinematic storm scene with rain, a wet reflective road, atmospheric lighting, and a CSS perspective stage for a dimensional presentation.
- ScrollTrigger scrub maps scroll progress to the car's horizontal movement, vertical drift, rotation, scale, and wheel rotation. Scrolling upward reverses the animation.
- Three-dimensional viewport-height scroll scene, fixed navigation, subtle progress line, and a transition section.
- Responsive desktop navigation and an accessible mobile menu that closes on navigation or Escape.
- A practical services section covering digital strategy, product and web, and continuous growth.
- Reduced-motion support: the long pinned scene and complex motion are disabled while content and a static car remain visible.
- Transform-based animation, scoped GSAP contexts, cleanup on unmount, and no per-frame React state updates.
- GitHub Pages deployment with a repository-aware production base path.

## Tech stack

- React 19 and JavaScript (JSX)
- Vite 8
- Tailwind CSS 3
- GSAP 3 and ScrollTrigger
- HTML5 and CSS3

## Requirements

- Node.js 20.19 or newer (or Node.js 22.12 or newer)
- npm

## Install and develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`. Production builds use `/itz-fizz-scroll-hero/` as their asset base for GitHub Pages; Vite's development server serves from `/`.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` installs the lockfile dependencies, builds the static site, uploads `dist/`, and publishes it to GitHub Pages.

1. Push changes to `main` or run **Deploy to GitHub Pages** from the repository's Actions tab.
2. Ensure the repository's Pages source is set to **GitHub Actions**.
3. Open the Live demo link above after the workflow completes.

## Project structure

```text
src/
  components/
    CarVisual.jsx           Original accessible SVG car illustration
    Hero.jsx                Hero scene and ScrollTrigger car animation
    Navbar.jsx              Responsive navigation and mobile menu
    Stats.jsx               Reusable impact metrics
    TransitionSection.jsx   Follow-on brand section
  lib/
    gsap.js                 Central GSAP and ScrollTrigger registration
  styles/
    index.css               Tailwind layers, responsive details, and motion rules
  App.jsx                   Page composition and intro/progress animations
  main.jsx                  React entry point
index.html                  Vite document and metadata
vite.config.js              Vite and GitHub Pages path configuration
tailwind.config.js          Tailwind scan paths and theme
.github/workflows/
  deploy.yml                Build and GitHub Pages deployment
```

## Animation and accessibility notes

Intro and scroll animations are created in React layout effects inside `gsap.context()` scopes. Each context is reverted during cleanup, including React Strict Mode remounts. ScrollTrigger controls the car and progress indicator with scrubbed transforms; there is no timer-driven car animation or scroll-event state loop. When `prefers-reduced-motion: reduce` is active, the animation hooks return before creating timelines or ScrollTriggers, and CSS makes the scene a regular viewport-height section with a stationary car.
