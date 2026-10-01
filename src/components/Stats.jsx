const stats = [
  ["95%", "Client Satisfaction"],
  ["80%", "Project Success"],
  ["75%", "Repeat Business"],
  ["90%", "Growth Impact"],
];

export default function Stats() {
  return (
    <dl className="stats-grid mt-6 grid grid-cols-2 gap-3 sm:mt-7 sm:gap-4 md:mt-8 md:grid-cols-4">
      {stats.map(([value, label], index) => (
        <div key={label} className="stat-item min-w-0">
          <dt className="text-[clamp(2rem,4.2vw,3.4rem)] font-bold leading-none tracking-[-0.065em] tabular-nums">{value}</dt>
          <dd className="mt-2 text-[9px] font-semibold tracking-[0.02em] text-white/55 sm:text-[10px] md:text-[11px]">{label}</dd>
        </div>
      ))}
    </dl>
  );
}
