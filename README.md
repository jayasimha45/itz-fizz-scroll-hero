# Itz Fizz — Scroll-Driven Car Hero

A polished, responsive automotive landing page built around a red sports car and a scroll-pinned hero. The introductory typography and impact metrics animate on entry; GSAP ScrollTrigger ties the car's transform to scroll progress.

## Live project

- Live site: [https://jayasimha45.github.io/itz-fizz-scroll-hero/](https://jayasimha45.github.io/itz-fizz-scroll-hero/)
- Repository: [https://github.com/jayasimha45/itz-fizz-scroll-hero](https://github.com/jayasimha45/itz-fizz-scroll-hero)

## Features

- Full-viewport hero with responsive headline and four impact statistics.
- GSAP intro reveal with sequential count-up metrics.
- ScrollTrigger pin and scrub for the car's horizontal movement, rotation, vertical drift, and scale.
- Reduced-motion support that skips motion and leaves the complete content visible.
- Responsive layout for phones, tablets, laptops, and wide displays.
- Static Next.js export with a GitHub Actions deployment workflow for GitHub Pages.
- Car photo stored locally in `public/`; no runtime image-host dependency.

## Tech stack

- Next.js 15 and React 19
- TypeScript and JavaScript
- Tailwind CSS 4
- GSAP 3, `@gsap/react`, and ScrollTrigger

## Requirements

- Node.js 20 or newer
- npm

## Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The development server uses `.next-dev` so a production export can be built without replacing the development server's files.

Run the TypeScript check with:

```bash
npm run typecheck
```

## Build

```bash
npm run build
```

Next.js writes the static site to `out/`. Preview the generated static site with any local static-file server that serves `out/` as its document root.

## Deploy to GitHub Pages

The included [Pages workflow](.github/workflows/deploy.yml) installs dependencies, creates the static export, uploads `out/`, and deploys it. GitHub Pages is configured to use **GitHub Actions** for this repository.

Push to `main` (or `master`) or manually start **Deploy to GitHub Pages** from the repository's Actions tab. For a repository named `owner.github.io`, the configuration automatically omits the repository base path; other repository names use their matching path. The image source follows the same base path.

## Project structure

```text
app/
  globals.css       Responsive design system and page styles
  layout.tsx        Root layout and metadata
  page.tsx          Page composition
components/
  CarVisual.tsx     Accessible SVG-clipped local car photo
  HeroSection.tsx   Intro and scroll-linked GSAP animation
  SiteFooter.tsx    Shared page footer
  StatsGrid.tsx     Reusable impact metrics
  StorySection.tsx  Supporting brand story section
lib/
  content.ts        Statistics and content data
  gsap.ts           GSAP plugin registration
public/images/
  itz-fizz-car.png  Supplied red car image
.github/workflows/
  deploy.yml        GitHub Pages build and deployment
```

## Motion and cleanup

The hero uses `@gsap/react`'s `useGSAP` hook scoped to its section. It automatically reverts the intro timeline and ScrollTriggers when the component is removed, avoiding duplicate triggers during React development remounts. Scroll animation uses GSAP transforms with `scrub`; no scroll handler or React state update runs per frame. When `prefers-reduced-motion: reduce` is enabled, the hook exits before creating animations or pinning the hero.
