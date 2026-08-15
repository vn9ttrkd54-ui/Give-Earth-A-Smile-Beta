export type ExecutiveMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

export const executiveTeam: ExecutiveMember[] = [
  {
    id: 1,
    name: "Aditi Swain",
    role: "Co-Founder and Executive Director",
    image: "/images/team/aditi-swain.jpg",
  },
  {
    id: 2,
    name: "Srikrithi Kodimela",
    role: "Co-Founder and Director of Operations",
    image: "/images/team/srikrithi-kodimela-new.jpg",
  },
  {
    id: 3,
    name: "Affan Bilal",
    role: "Development Director and Chief Financial Officer",
    image: "/images/team/affan-bilal.jpg",
  },
  {
    id: 4,
    name: "Gabriel Chen",
    role: "Chief Human Resources Officer and Project Manager",
    image: "/images/team/gabriel-chen.jpg",
  },
];
