export default function TransitionSection() {
  return (
    <section id="work" className="transition-section relative overflow-hidden bg-[#111315] px-6 py-24 text-white sm:py-32 md:px-10 md:py-40" aria-labelledby="transition-title">
      <div className="pointer-events-none absolute -right-28 -top-48 h-[34rem] w-[34rem] rounded-full border border-white/[0.06]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-12 -top-32 h-[26rem] w-[26rem] rounded-full border border-white/[0.06]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.85fr] md:items-end md:gap-20">
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">Built for digital growth</p>
          <h2 id="transition-title" className="max-w-3xl text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.92] tracking-[-0.075em]">Ideas in motion.<br /><span className="text-white/45">Results that last.</span></h2>
        </div>
        <div>
          <p id="services" className="max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            We pair thoughtful design with high-performance technology to make every interaction feel considered, clear, and memorable.
          </p>
          <a href="#about" className="transition-link mt-7 inline-flex items-center gap-3 border-b border-white/25 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
            Discover our approach <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <div id="about" className="relative mx-auto mt-20 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.2em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <span>Independent thinking / Intentional design</span>
        <a href="#contact" className="transition-link">Let’s make the next move <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
