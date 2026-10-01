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
          <div className="ambient-orb pointer-events-none absolute -right-28 top-24 h-[min(54vw,560px)] w-[min(54vw,560px)] rounded-full border border-black/[0.045] bg-white/35" aria-hidden="true" />
          <div className="orbit-ring pointer-events-none absolute right-[11%] top-[17%] h-[min(35vw,370px)] w-[min(35vw,370px)] rounded-full border border-black/[0.045]" aria-hidden="true" />

          <div className="scene-copy relative z-10 mx-auto max-w-7xl">
            <p className="hero-eyebrow mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-black/45 sm:mb-5 sm:text-xs">
              Creative digital experiences
            </p>
            <h1 id="hero-title" className="max-w-6xl text-[clamp(2.55rem,8.4vw,8.125rem)] font-extrabold leading-[0.86] tracking-[-0.045em]">
              <span className="block overflow-hidden"><span className="hero-word inline-block" aria-label="Welcome">W E L C O M E</span></span>
              <span className="block overflow-hidden"><span className="hero-word inline-block text-black/75" aria-label="ITZFIZZ">I T Z F I Z Z</span></span>
            </h1>
            <p className="hero-description mt-5 max-w-xl text-sm leading-7 text-black/55 sm:mt-7 sm:text-base md:text-lg md:leading-8">
              We create high-performance digital experiences that turn ambitious ideas into meaningful results.
            </p>
            <div className="hero-actions mt-5 flex flex-wrap gap-3 sm:mt-7">
              <a href="#work" className="button-primary">Explore Our Work <span aria-hidden="true">↗</span></a>
              <a href="#contact" className="button-secondary">Let’s Talk <span aria-hidden="true">↗</span></a>
            </div>
            <Stats />
          </div>

          <div className="car-environment pointer-events-none absolute inset-x-0 bottom-0 h-[45%] overflow-hidden">
            <div className="road-surface absolute inset-x-0 bottom-0 h-[23%]" aria-hidden="true" />
            <div className="road-line road-edge absolute bottom-[23%] left-[-20%] h-px w-[140%]" aria-hidden="true" />
            <div className="road-line road-markings absolute bottom-[9%] left-[-20%] h-px w-[140%] border-t border-dashed border-black/[0.13]" aria-hidden="true" />
            <div ref={carRef} className="car-track absolute bottom-[5%] left-0">
              <CarVisual />
            </div>
          </div>

          <div className="scroll-cue absolute bottom-6 right-6 z-20 flex items-center text-[9px] font-bold uppercase tracking-[0.24em] text-black/45 md:bottom-auto md:right-10 md:top-[48%] md:flex-col md:items-end md:gap-2" aria-label="Scroll down to move the car">
            <span className="sr-only md:not-sr-only">Scroll to drive</span>
            <span className="scroll-arrow flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white/80 text-sm backdrop-blur-sm md:h-auto md:w-auto md:border-0 md:bg-transparent" aria-hidden="true">↓</span>
          </div>
        </div>
        <div className="progress-track pointer-events-none absolute bottom-0 left-0 h-[2px] w-full" aria-hidden="true">
          <div className="progress-bar h-full w-full origin-left scale-x-0 bg-black/75" />
        </div>
      </div>
    </section>
  );
}
