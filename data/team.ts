export type ExecutiveMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const executiveTeam: ExecutiveMember[] = [
  {
    id: 1,
    name: "Aditi Swain",
    role: "Co-Founder and Executive Director",
    bio: "Aditi leads the organization's vision, partnerships, strategy, and environmental initiatives.",
    image: "/images/team/aditi-swain.jpg",
  },
  {
    id: 2,
    name: "Srikrithi Kodimela",
    role: "Co-Founder and Director of Operations",
    bio: "Srikrithi manages organizational operations, internal planning, and project coordination.",
    image: "/images/team/srikrithi-kodimela.jpg",
  },
  {
    id: 3,
    name: "Affan Bill",
    role: "Development Director and Chief Financial Officer",
    bio: "Affan oversees development, fundraising, budgeting, and the organization's financial planning.",
    image: "/images/team/affan-bill.jpg",
  },
  {
    id: 4,
    name: "Gabriel Chen",
    role: "International Project Manager",
    bio: "Gabriel coordinates international projects, environmental programs, and global partnerships.",
    image: "/images/team/gabriel-chen.jpg",
  },
];