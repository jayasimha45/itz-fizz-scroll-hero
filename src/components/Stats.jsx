const stats = [
  ["95%", "Client Satisfaction"],
  ["80%", "Project Success"],
  ["75%", "Repeat Business"],
  ["90%", "Growth Impact"],
];

export default function Stats() {
  return (
    <dl className="stats-grid mt-6 grid grid-cols-2 gap-y-5 border-y border-black/10 py-5 sm:mt-7 sm:gap-y-7 sm:py-6 md:mt-8 md:grid-cols-4 md:gap-y-0 md:py-5">
      {stats.map(([value, label], index) => (
        <div key={label} className={`stat-item min-w-0 pr-3 sm:pr-5 ${index > 0 ? "md:border-l md:border-black/10 md:pl-6 lg:pl-8" : ""}`}>
          <dt className="text-[clamp(2rem,4.2vw,3.4rem)] font-bold leading-none tracking-[-0.065em] tabular-nums">{value}</dt>
          <dd className="mt-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-black/45 sm:text-[10px] sm:tracking-[0.15em] md:text-[11px]">{label}</dd>
        </div>
      ))}
    </dl>
  );
}
