"use client";

import { useRef } from "react";
import { CarVisual } from "@/components/CarVisual";
import { StatsGrid } from "@/components/StatsGrid";
import { gsap, useGSAP } from "@/lib/gsap";

export function HeroSection() {
  const section = useRef<HTMLElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .fromTo(".eyebrow", { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 0.66, duration: 0.65 })
      .fromTo(".headline-line", { y: 32, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.14 }, "-=0.3")
      .fromTo(".stat", { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.62, stagger: 0.1 }, "-=0.35");

    gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((counter) => {
      const value = { current: 0 };
      const target = Number(counter.dataset.counter);
      intro.to(value, {
        current: target,
        duration: 0.9,
        ease: "power2.out",
        onUpdate: () => { counter.textContent = `${Math.round(value.current)}%`; },
      }, "<0.1");
    });

    const smallScreen = window.matchMedia("(max-width: 700px)").matches;
    gsap.to(".car-stage", {
      x: () => window.innerWidth * (smallScreen ? 0.1 : 0.36),
      y: smallScreen ? -3 : -14,
      rotate: smallScreen ? -1 : -2,
      scale: smallScreen ? 0.94 : 0.9,
      transformOrigin: "50% 65%",
      ease: "none",
      scrollTrigger: {
        trigger: section.current,
        start: "top top",
        end: () => `+=${window.innerHeight * (smallScreen ? 0.72 : 1)}`,
        scrub: 1.1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
    gsap.to(".hero-copy", {
      y: -36,
      autoAlpha: 0.4,
      ease: "none",
      scrollTrigger: {
        trigger: section.current,
        start: "top top",
        end: () => `+=${window.innerHeight * (smallScreen ? 0.58 : 0.72)}`,
        scrub: 1,
      },
    });
  }, { scope: section, dependencies: [] });

  return (
    <section ref={section} className="hero" id="top" aria-labelledby="hero-title">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Itz Fizz home"><span className="brand-mark" aria-hidden="true">✳</span> ITZ FIZZ</a>
        <span className="nav-caption">ELECTRIC, WITH A TWIST</span>
        <a href="#story" className="nav-link">THE FEELING <span aria-hidden="true">↗</span></a>
      </nav>

      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" /> A DIFFERENT KIND OF DRIVE</p>
        <h1 id="hero-title">
          <span className="headline-line">W E L C O M E</span>
          <span className="headline-line accent">I T Z&nbsp; F I Z Z</span>
        </h1>
        <StatsGrid />
      </div>

      <div className="road" aria-hidden="true"><span className="road-origin" /><span className="road-edge road-edge-top" /><span className="road-edge road-edge-bottom" /></div>
      <div className="car-stage"><CarVisual /></div>

      <div className="hero-bottom" aria-hidden="true">
        <span>GOOD THINGS<br />ARE IN MOTION</span>
        <span className="scroll-cue"><span className="scroll-line" /> SCROLL TO FEEL IT</span>
        <span>DESIGNED TO<br />TURN HEADS</span>
      </div>
    </section>
  );
}
