const stats = [
  ["95%", "Client Satisfaction"],
  ["80%", "Project Success"],
  ["75%", "Repeat Business"],
  ["90%", "Growth Impact"],
];

export default function Stats() {
  return (
    <dl className="stats-grid grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
      {stats.map(([value, label]) => (
        <div key={label} className="stat-item min-w-0">
          <dt className="text-[clamp(1.55rem,3.3vw,2.25rem)] font-bold leading-none tracking-[-0.065em] tabular-nums">{value}</dt>
          <dd className="mt-1.5 text-[8px] font-semibold tracking-[0.015em] text-black/55 sm:text-[9px] md:text-[10px]">{label}</dd>
        </div>
      ))}
    </dl>
  );
}
