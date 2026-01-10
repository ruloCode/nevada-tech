export interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  {
    id: 1,
    value: 50,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    id: 2,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    id: 3,
    value: 15,
    suffix: "+",
    label: "Team Experts",
  },
  {
    id: 4,
    value: 5,
    suffix: "+",
    label: "Years Experience",
  },
];
