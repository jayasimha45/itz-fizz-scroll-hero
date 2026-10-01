export type Statistic = {
  value: number;
  description: string;
};

export const statistics: Statistic[] = [
  { value: 58, description: "Increase in pick-up point use" },
  { value: 23, description: "Fewer customer phone calls" },
  { value: 27, description: "More journeys made together" },
  { value: 40, description: "Less time spent waiting" },
];
