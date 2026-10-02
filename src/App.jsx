import { useLayoutEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TransitionSection from "./components/TransitionSection";
import { gsap } from "./lib/gsap";

function App() {
  const appRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useLayoutEffect(() => {
    const app = appRef.current;
    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".hero-eyebrow", { autoAlpha: 0, y: 20, duration: 0.7 })
        .from(".hero-word", { autoAlpha: 0, yPercent: 100, duration: 0.85, stagger: 0.12 }, "-=0.28")
        .from(".hero-description", { autoAlpha: 0, y: 24, duration: 0.62 }, "-=0.3")
        .from(".hero-actions > *", { autoAlpha: 0, y: 18, duration: 0.5, stagger: 0.1 }, "-=0.25")
        .from(".stat-item", { autoAlpha: 0, y: 30, scale: 0.95, duration: 0.55, stagger: 0.12 }, "-=0.18")
        .from(".scroll-cue", { autoAlpha: 0, y: 10, duration: 0.4 }, "-=0.15");

      gsap.fromTo(".scroll-cue", { autoAlpha: 1, y: 0 }, {
        autoAlpha: 0,
        y: -12,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-scroll-zone",
          start: "top top",
          end: "18% top",
          scrub: true,
        },
      });

      gsap.to(".progress-bar", {
        scaleX: 1,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-scroll-zone",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.35,
        },
      });

      gsap.to(".ambient-orb", {
        y: -75,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-scroll-zone",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });
    }, app);

    return () => context.revert();
  }, []);

  return (
    <div ref={appRef} className="min-h-screen overflow-x-clip bg-[#f8f8f6] text-[#111315]">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} onNavigate={() => setMenuOpen(false)} />
      <main>
        <Hero />
        <TransitionSection />
      </main>
      <footer id="contact" className="border-t border-black/10 px-6 py-9 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">Have a project in mind?</p>
            <p className="mt-2 text-xl font-semibold tracking-tight">Let’s make something meaningful.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[0.14em] text-black/55">
            <a className="footer-link" href="https://github.com/jayasimha45/itz-fizz-scroll-hero" target="_blank" rel="noreferrer">View project source ↗</a>
            <a className="footer-link" href="#top">Back to top ↑</a>
          </div>
          <p className="text-[10px] uppercase tracking-[0.16em] text-black/35 sm:text-right">ITZFIZZ / Scroll Experience</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
