import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import Stats from "./Stats";
import CarVisual from "./CarVisual";

export default function Hero() {
  const zoneRef = useRef(null);
  const carRef = useRef(null);

  useLayoutEffect(() => {
    const zone = zoneRef.current;
    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const carWidth = carRef.current?.getBoundingClientRect().width ?? 720;
      const drive = {
        trigger: zone,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      };

      gsap.fromTo(".car-wrap",
        { x: () => window.innerWidth - (carRef.current?.getBoundingClientRect().width ?? carWidth) * 0.82, y: 20, rotation: -1.2, scale: 0.97 },
        {
          x: () => -(carRef.current?.getBoundingClientRect().width ?? carWidth) * 0.18,
          y: -8,
          rotation: 1.4,
          scale: 1.03,
          ease: "none",
          scrollTrigger: drive,
        },
      );

      gsap.to(".wheel", {
        rotation: 420,
        transformOrigin: "center center",
        ease: "none",
        scrollTrigger: { ...drive },
      });

      gsap.fromTo(".battery-fill", { scaleX: 0.18 }, {
        scaleX: 1,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: { ...drive },
      });

      gsap.to(".road-line", {
        xPercent: 16,
        ease: "none",
        scrollTrigger: { ...drive },
      });

      gsap.to(".scene-copy", {
        y: -66,
        ease: "none",
        scrollTrigger: {
          trigger: zone,
          start: "top top",
          end: "42% top",
          scrub: 1.1,
        },
      });

      gsap.to(".scene-overlay", {
        opacity: 0.22,
        ease: "none",
        scrollTrigger: {
          trigger: zone,
          start: "top top",
          end: "35% top",
          scrub: true,
        },
      });
    }, zone);

    return () => context.revert();
  }, []);

  return (
    <section id="top" ref={zoneRef} className="hero-scroll-zone relative h-[280vh]" aria-labelledby="hero-title">
      <div className="hero-scene sticky top-0 h-screen overflow-hidden">
        <div className="relative mx-auto h-full max-w-[1600px] px-6 pt-28 sm:px-8 md:px-10 md:pt-28">
          <div className="scene-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="scene-overlay pointer-events-none absolute inset-0 opacity-0" aria-hidden="true" />
          <div className="storm-light pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="rain-layer rain-far pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="rain-layer rain-near pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="ambient-orb pointer-events-none absolute -right-28 top-24 h-[min(54vw,560px)] w-[min(54vw,560px)] rounded-full border border-white/[0.04] bg-slate-300/[0.025]" aria-hidden="true" />
          <div className="orbit-ring pointer-events-none absolute right-[11%] top-[17%] h-[min(35vw,370px)] w-[min(35vw,370px)] rounded-full border border-white/[0.035]" aria-hidden="true" />

          <div className="scene-copy relative z-10 mx-auto max-w-7xl">
            <p className="hero-eyebrow mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-white/45 sm:mb-5 sm:text-xs">
              Creative digital experiences · built to move
            </p>
            <h1 id="hero-title" className="max-w-6xl text-[clamp(2.55rem,8.4vw,8.125rem)] font-extrabold leading-[0.86] tracking-[-0.045em]">
              <span className="block overflow-hidden"><span className="hero-word inline-block" aria-label="Welcome">W E L C O M E</span></span>
              <span className="block overflow-hidden"><span className="hero-word inline-block text-white/75" aria-label="ITZFIZZ">I T Z F I Z Z</span></span>
            </h1>
            <p className="hero-description mt-5 max-w-xl text-sm leading-7 text-white/55 sm:mt-7 sm:text-base md:text-lg md:leading-8">
              We create high-performance digital experiences that turn ambitious ideas into meaningful results.
            </p>
            <div className="hero-actions mt-5 flex flex-wrap gap-3 sm:mt-7">
              <a href="#work" className="button-primary">Explore Our Work <span aria-hidden="true">↗</span></a>
              <a href="#contact" className="button-secondary">Let’s Talk <span aria-hidden="true">↗</span></a>
            </div>
            <Stats />
          </div>

          <div className="car-environment pointer-events-none absolute inset-x-0 bottom-0 h-[68%] overflow-hidden">
            <div className="road-surface absolute inset-x-0 bottom-0 h-[70%]" aria-hidden="true">
              <div className="road-line road-stripes absolute inset-0" />
              <div className="road-line road-edge absolute inset-x-0 top-0 h-px" />
              <div className="road-line road-markings absolute inset-x-0 bottom-[15%] h-px" />
              <div className="wet-reflection absolute inset-x-0 bottom-0 h-[40%]" />
            </div>
            <div className="vehicle-shadow absolute bottom-[10%] left-[18%] h-[13%] w-[68%] rounded-[50%]" aria-hidden="true" />
            <div ref={carRef} className="car-track absolute bottom-[7%] left-0">
              <div className="vehicle-depth"><CarVisual /></div>
            </div>
            <div className="energy-hud absolute bottom-5 left-6 flex items-center gap-3 sm:bottom-8 sm:left-10" aria-label="Scroll to charge the car">
              <span className="energy-icon" aria-hidden="true"><span /></span>
              <span><strong>KINETIC RECOVERY</strong><small>CHARGES AS YOU DRIVE</small></span>
              <span className="energy-meter" aria-hidden="true"><i className="battery-fill" /></span>
            </div>
          </div>

          <div className="scroll-cue absolute bottom-6 right-6 z-20 flex items-center text-[9px] font-bold uppercase tracking-[0.24em] text-white/45 md:bottom-auto md:right-10 md:top-[48%] md:flex-col md:items-end md:gap-2" aria-label="Scroll down to move the car">
            <span className="sr-only md:not-sr-only">Scroll to drive</span>
            <span className="scroll-arrow flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#11191d]/80 text-sm backdrop-blur-sm md:h-auto md:w-auto md:border-0 md:bg-transparent" aria-hidden="true">↓</span>
          </div>
        </div>
        <div className="progress-track pointer-events-none absolute bottom-0 left-0 h-[2px] w-full" aria-hidden="true">
          <div className="progress-bar h-full w-full origin-left scale-x-0 bg-[#ed3e45]" />
        </div>
      </div>
    </section>
  );
}
