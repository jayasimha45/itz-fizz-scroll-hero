import { statistics } from "@/lib/content";

export function StatsGrid() {
  return (
    <div className="stats" aria-label="Itz Fizz impact highlights">
      {statistics.map((stat, index) => (
        <div className="stat" key={stat.description}>
          <strong data-counter={stat.value} aria-label={`${stat.value} percent`}>
            {stat.value}%
          </strong>
          <span>{stat.description}</span>
          <span className="sr-only">Statistic {index + 1} of {statistics.length}</span>
        </div>
      ))}
    </div>
  );
}
