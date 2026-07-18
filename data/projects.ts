export type Project = {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  impact: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Youth Environmental Education",
    location: "International",
    description:
      "Educational initiatives that introduce young people to sustainability, conservation, and environmental responsibility.",
    image: "/images/projects/project-1.jpg",
    impact: "Students reached through environmental lessons and activities.",
  },
  {
    id: 2,
    title: "Community Tree Planting",
    location: "Malawi",
    description:
      "A community-centered initiative focused on planting trees, restoring green spaces, and involving local students.",
    image: "/images/projects/project-2.jpg",
    impact: "Trees planted with the support of students and volunteers.",
  },
  {
    id: 3,
    title: "International Youth Outreach",
    location: "10+ Countries",
    description:
      "A growing ambassador network connecting young environmental leaders from communities across the world.",
    image: "/images/projects/project-3.jpg",
    impact: "Ambassadors connected throughout the United States and abroad.",
  },
];