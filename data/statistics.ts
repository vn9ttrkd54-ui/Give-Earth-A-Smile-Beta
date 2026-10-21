import { ambassadorCount } from "@/data/impactLocations";
import { projects } from "@/data/projects";

export type Statistic = {
  id: number;
  value: string;
  label: string;
};

export const statistics: Statistic[] = [
  {
    id: 1,
    value: "10",
    label: "Countries Reached",
  },
  {
    id: 2,
    value: String(ambassadorCount),
    label: "Global Ambassadors",
  },
  {
    id: 3,
    value: "$6,200+",
    label: "Dollars Raised",
  },
  {
    id: 4,
    value: "80",
    label: "Trees Planted",
  },
  {
    id: 5,
    value: String(projects.length),
    label: "Projects and Initiatives",
  },
  {
    id: 6,
    value: "500+",
    label: "People Reached",
  },
];
