import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import CarVisual from "./CarVisual";
import Stats from "./Stats";

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
        { x: 24, y: 10, rotation: -0.4, scale: 0.98 },
        {
          x: () => window.innerWidth - (carRef.current?.getBoundingClientRect().width ?? carWidth) * 0.72,
          y: -2,
          rotation: 0.4,
          scale: 1,
          ease: "none",
          scrollTrigger: drive,
        },
      );

      gsap.fromTo(".battery-fill", { scaleX: 0.18 }, {
        scaleX: 1,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: { ...drive },
      });

      const chargeValue = zone.querySelector(".charge-value");
      gsap.to({ value: 18 }, { value: 100, ease: "none", onUpdate() {
        if (chargeValue) chargeValue.textContent = `${Math.round(this.targets()[0].value)}%`;
      }, scrollTrigger: { ...drive } });

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
          <div className="landscape pointer-events-none absolute inset-0" aria-hidden="true"><div className="ridge ridge-far" /><div className="ridge ridge-near" /></div>
          <div className="rain-layer rain-far pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="rain-layer rain-near pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="ambient-orb pointer-events-none absolute -right-28 top-24 h-[min(54vw,560px)] w-[min(54vw,560px)] rounded-full border border-black/[0.045]" aria-hidden="true" />
          <div className="orbit-ring pointer-events-none absolute right-[11%] top-[17%] h-[min(35vw,370px)] w-[min(35vw,370px)] rounded-full border border-black/[0.035]" aria-hidden="true" />

          <div className="scene-copy relative z-10 mx-auto max-w-7xl">
            <p className="hero-eyebrow mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-black/45 sm:mb-5 sm:text-xs">
              Creative digital experiences · built to move
            </p>
            <h1 id="hero-title" className="max-w-6xl text-[clamp(2.55rem,8.4vw,8.125rem)] font-extrabold leading-[0.86] tracking-[-0.045em]">
              <span className="block overflow-hidden"><span className="hero-word inline-block" aria-label="Welcome">W E L C O M E</span></span>
              <span className="block overflow-hidden"><span className="hero-word inline-block text-black/75" aria-label="ITZFIZZ">I T Z F I Z Z</span></span>
            </h1>
            <p className="hero-description mt-5 max-w-xl text-sm leading-7 text-black/55 sm:mt-7 sm:text-base md:text-lg md:leading-8">
              We create high-performance digital experiences that turn ambitious ideas into meaningful results.
            </p>
            <div className="hero-stats mt-5 max-w-5xl sm:mt-6" aria-label="Agency impact statistics">
              <Stats />
            </div>
          </div>

          <div className="car-environment pointer-events-none absolute inset-x-0 bottom-0 h-[52%] overflow-hidden">
            <div className="road-surface absolute inset-x-0 bottom-0 h-[30%]" aria-hidden="true">
              <div className="road-line road-stripes absolute inset-0" />
              <div className="road-line road-edge absolute inset-x-0 top-0 h-px" />
              <div className="road-line road-markings absolute inset-x-0 bottom-[15%] h-px" />
              <div className="wet-reflection absolute inset-x-0 bottom-0 h-[40%]" />
            </div>
            <div className="vehicle-shadow absolute bottom-[13%] left-[8%] h-[8%] w-[64%] rounded-[50%]" aria-hidden="true" />
            <div ref={carRef} className="car-track absolute bottom-[13%] left-0">
              <div className="vehicle-depth"><CarVisual /></div>
            </div>
          </div>
          <div className="charge-pill absolute bottom-5 left-6 z-20 flex items-center gap-3 sm:bottom-8 sm:left-10" aria-label="Battery charge increases as you scroll">
            <span className="energy-icon" aria-hidden="true"><span /></span>
            <span className="charge-label">Charge</span>
            <span className="energy-meter" aria-hidden="true"><i className="battery-fill" /></span>
            <span className="charge-value">18%</span>
          </div>

          <div className="charging-station pointer-events-none absolute bottom-[7%] right-5 z-20 flex flex-col items-center" aria-hidden="true">
            <span className="station-badge">↯</span><span className="station-post" /><span className="station-foot" />
          </div>

          <div className="scroll-cue absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-[9px] font-bold uppercase tracking-[0.24em] text-black/40" aria-label="Scroll down to move the car">
            <span className="md:not-sr-only">Scroll to explore</span>
            <span className="scroll-arrow" aria-hidden="true">⌄</span>
          </div>
        </div>
        <div className="progress-track pointer-events-none absolute bottom-0 left-0 h-[2px] w-full" aria-hidden="true">
          <div className="progress-bar h-full w-full origin-left scale-x-0 bg-black/70" />
        </div>
      </div>
    </section>
  );
}
