"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function CarIllustration() {
  return (
    <svg className="car-art" viewBox="0 0 768 432" role="img" aria-label="Red sports coupe from the supplied photo">
      <defs>
        <clipPath id="car-silhouette" clipPathUnits="userSpaceOnUse">
          <path d="M71 144 94 127 153 132 168 153 161 169C181 161 203 153 229 151L309 141C336 137 362 137 384 138 419 134 455 142 481 151L516 168 553 185C566 182 581 183 595 190L645 202C677 211 700 234 710 257L720 276 710 284 651 288C646 304 628 314 606 314 579 314 559 294 555 271H256C252 295 234 314 211 314 186 314 165 296 160 273L132 269 105 258 92 246 95 217 97 188 101 174Z" />
        </clipPath>
      </defs>
      <image href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/itz-fizz-car.png`} width="768" height="432" preserveAspectRatio="none" clipPath="url(#car-silhouette)" />
    </svg>
  );
}

const stats = [
  { value: "58%", label: "Increase in pick up\npoint use" },
  { value: "23%", label: "Decreased in customer\nphone calls" },
  { value: "27%", label: "Increase in pick up\npoint use" },
  { value: "40%", label: "Decreased in customer\nphone calls" },
];

export default function Home() {
  const root = useRef<HTMLElement>(null);
  const car = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const intro = gsap.timeline({ defaults: { ease: "power3.out", duration: reducedMotion ? 0 : undefined } });
    intro.fromTo(".eyebrow, .headline-line", { y: reducedMotion ? 0 : 28, opacity: reducedMotion ? 1 : 0 }, { y: 0, opacity: 1, duration: reducedMotion ? 0 : 1, stagger: reducedMotion ? 0 : 0.13 })
      .fromTo(".stat", { y: reducedMotion ? 0 : 18, opacity: reducedMotion ? 1 : 0 }, { y: 0, opacity: 1, duration: reducedMotion ? 0 : .7, stagger: reducedMotion ? 0 : .12 }, "-=.4")
      .fromTo(".car-stage", { y: reducedMotion ? 0 : 35, opacity: reducedMotion ? 1 : 0, scale: reducedMotion ? 1 : .96 }, { y: 0, opacity: 1, scale: 1, duration: reducedMotion ? 0 : 1.2 }, "-=.65");
    if (reducedMotion) return;
    gsap.to(car.current, { x: () => window.innerWidth * .43, rotate: 0, scale: .88, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: () => `+=${window.innerHeight}`, scrub: 1, pin: true, anticipatePin: 1 } });
    gsap.to(".hero-copy", { y: -70, opacity: .25, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: () => `+=${window.innerHeight * .7}`, scrub: 1 } });
    gsap.fromTo(".story-content", { y: 55, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".story", start: "top 70%" } });
  }, { scope: root });

  return <main ref={root}>
    <section className="hero" aria-labelledby="hero-title">
      <nav className="nav"><a className="brand" href="#top" aria-label="Itz Fizz home"><span className="brand-mark">✳</span> ITZ FIZZ</a><span className="nav-caption">ELECTRIC, WITH A TWIST</span><a href="#story" className="nav-link">THE FEELING <span>↗</span></a></nav>
      <div className="hero-copy" id="top">
        <p className="eyebrow"><span className="eyebrow-dot"/> A DIFFERENT KIND OF DRIVE</p>
        <h1 id="hero-title"><span className="headline-line">W E L C O M E</span><span className="headline-line accent">I T Z&nbsp; F I Z Z</span></h1>
        <div className="stats" aria-label="Performance highlights">{stats.map((stat) => <div className="stat" key={stat.value}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
      </div>
      <div className="road" aria-hidden="true"><span className="road-origin"/><span className="road-edge road-edge-top"/><span className="road-edge road-edge-bottom"/></div>
      <div className="car-stage" ref={car}><CarIllustration/></div>
      <div className="hero-bottom"><span>GOOD THINGS<br/>ARE IN MOTION</span><a href="#story" className="scroll-cue"><span className="scroll-line"/> SCROLL TO FEEL IT</a><span>DESIGNED TO<br/>TURN HEADS</span></div>
    </section>
    <section className="story" id="story"><div className="story-content"><p className="eyebrow"><span className="eyebrow-dot"/> THE SPARK BEHIND THE WHEEL</p><h2>Not just a way<br/>to get <em>there.</em></h2><p className="story-text">A little electricity. A lot of personality. Itz Fizz is made for the moments that happen between here and wherever you’re going.</p><a className="story-link" href="#top">MEET YOUR NEW FAVORITE ROAD <span>↗</span></a></div></section>
    <footer><a className="brand" href="#top"><span className="brand-mark">✳</span> ITZ FIZZ</a><span>MADE FOR THE FEELING.</span><a href="#top">BACK TO TOP ↑</a></footer>
  </main>;
}
