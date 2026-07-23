export type ProjectStatus =
  | "Planning"
  | "Active"
  | "Completed";

export type ProjectCategory =
  | "Education"
  | "Environment"
  | "Humanitarian"
  | "Community"
  | "International";

export type ProjectStatistic = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  slug: string;

  title: string;
  subtitle: string;

  shortDescription: string;
  description: string;

  location: string;
  country: string;

  category: ProjectCategory;
  status: ProjectStatus;

  startDate: string;
  endDate?: string;

  coverImage: string;
  featured: boolean;

  gallery: string[];

  statistics: ProjectStatistic[];

  goals: string[];
  results: string[];
};

export const projects: Project[] = [
  {
    id: "project-smart-classrooms-odisha",
    slug: "smart-classrooms-odisha",

    title: "Smart Classrooms in Odisha",

    subtitle:
      "Expanding access to technology-enabled education in rural India.",

    shortDescription:
      "Give Earth a Smile partnered with Pudhiya Shakti to establish a technology-enabled smart classroom serving more than 300 students at Saraswati Sishu Vidya Mandira in Jagatsinghpur, Odisha.",

    description: `
In Fall 2025, Give Earth a Smile partnered with Pudhiya Shakti to establish a smart classroom at Saraswati Sishu Vidya Mandira in Jagatsinghpur, Odisha.

Located in a rural and underserved community, the school serves students with limited access to modern educational technology and digital learning resources. Through this initiative, Give Earth a Smile aims to help bridge the educational and digital divide by creating a more engaging learning environment and expanding opportunities for students to access knowledge beyond their local community.

Give Earth a Smile independently raised and invested more than ₹333,000 toward the project. This supported the construction and development of the classroom and provided essential educational infrastructure.

The completed classroom includes a 75-inch digital smart board, a convertible whiteboard and smart board system, cubby storage spaces, 26 pairs of student desks and benches, and a teacher's desk.

The project has impacted more than 300 students across 10 classes. Students now have greater access to technology that can support interactive, engaging, and visually enriched learning.

Beyond the classroom itself, the smart board creates the foundation for future digital learning opportunities. Students may be able to connect with teachers, educators, speakers, and experts from other parts of India and around the world.

Give Earth a Smile is working toward bringing these educational voices into the classroom, helping students explore new ideas, gain diverse perspectives, and discover possibilities beyond their immediate surroundings.
    `.trim(),

    location: "Jagatsinghpur, Odisha",
    country: "India",

    category: "Education",
    status: "Completed",

    startDate: "Fall 2025",
    endDate: "Fall 2025",

    coverImage:
      "/images/projects/smart-classrooms-odisha/cover.jpg",

    featured: true,

    gallery: [
      "/images/projects/smart-classrooms-odisha/01.jpg",
      "/images/projects/smart-classrooms-odisha/02.jpg",
      "/images/projects/smart-classrooms-odisha/03.jpg",
      "/images/projects/smart-classrooms-odisha/04.jpg",
      "/images/projects/smart-classrooms-odisha/05.jpg",
      "/images/projects/smart-classrooms-odisha/06.jpg",
      "/images/projects/smart-classrooms-odisha/07.jpg",
      "/images/projects/smart-classrooms-odisha/08.jpg",
      "/images/projects/smart-classrooms-odisha/09.jpg",
      "/images/projects/smart-classrooms-odisha/10.jpg",
      "/images/projects/smart-classrooms-odisha/11.jpg",
      "/images/projects/smart-classrooms-odisha/12.jpg",
      "/images/projects/smart-classrooms-odisha/13.jpg",
      "/images/projects/smart-classrooms-odisha/14.jpg",
      "/images/projects/smart-classrooms-odisha/15.jpg",
    ],

    statistics: [
      {
        value: "₹333,000+",
        label:
          "Raised and invested by Give Earth a Smile",
      },
      {
        value: "300+",
        label: "Students impacted",
      },
      {
        value: "10",
        label: "Classes benefiting",
      },
      {
        value: "26",
        label:
          "Pairs of desks and benches provided",
      },
    ],

    goals: [
      "Expand access to modern educational technology in a rural and underserved community.",
      "Improve the classroom learning environment through digital tools and modern infrastructure.",
      "Support interactive, engaging, and visually enriched lessons.",
      "Create opportunities for students to connect with educators beyond their local community.",
      "Build a foundation for future virtual classes and educational speaker sessions.",
    ],

    results: [
      "More than ₹333,000 was independently raised and invested by Give Earth a Smile.",
      "A completed technology-enabled smart classroom was established.",
      "More than 300 students across 10 classes gained access to the classroom.",
      "A 75-inch digital smart board was installed.",
      "A convertible whiteboard and smart board system was provided.",
      "Twenty-six pairs of student desks and benches were provided.",
      "A teacher's desk and classroom storage spaces were installed.",
      "The classroom now supports future digital lessons and virtual educational connections.",
    ],
  },
  {
    id: "smart-classrooms-tamil-nadu",
    slug: "smart-classrooms-tamil-nadu",

    title: "Smart Classrooms in Tamil Nadu",

    subtitle:
      "Expanding access to educational technology, classroom resources, and sports opportunities",

    shortDescription:
      "Supporting students in Nagapattinam, Tamil Nadu through educational technology, improved classroom resources, and sports equipment.",

    description:
      "Give Earth a Smile partnered with Pudhiya Shakti to support a primary school in Nagapattinam, Tamil Nadu by expanding access to technology-enabled education, classroom resources, and sports opportunities.",

    location: "Nagapattinam, Tamil Nadu",
    country: "India",

    category: "Education",
    status: "Completed",

    startDate: "Fall 2025",

    coverImage:
      "/images/projects/smart-classrooms-tamil-nadu/cover.jpg",

    featured: true,

    gallery: Array.from({ length: 13 }, (_, index) =>
      `/images/projects/smart-classrooms-tamil-nadu/${String(
        index + 1,
      ).padStart(2, "0")}.jpg`
    ),

    statistics: [
      {
        value: "₹90,000+",
        label: "Raised for the project",
      },
      {
        value: "150+",
        label: "Students impacted",
      },
      {
        value: "4",
        label: "Classes benefiting",
      },
      {
        value: "87",
        label: "Sports and activity equipment pieces and sets donated",
      },
    ],

    goals: [
      "Expand access to modern educational technology.",
      "Improve classroom learning resources.",
      "Increase access to sports and activity equipment.",
      "Support athletic development and competitive sports opportunities.",
    ],

    results: [
      "150+ students impacted.",
      "4 classes benefiting.",
      "More than ₹90,000 raised.",
      "87 sports and activity equipment pieces and sets donated.",
    ],
  },
  {
    id: "seeds-for-change-malawi",
    slug: "seeds-for-change-malawi",

    title: "Seeds for Change in Malawi",

    subtitle:
      "Empowering students through environmental education, water conservation, and student-led action.",

    shortDescription:
      "A three-day environmental education initiative at Bwiba Full Primary School in Malawi focused on water conservation, environmental responsibility, and student-led action.",

    description: `
  In Spring 2026, Give Earth a Smile launched Seeds for Change, a three-day environmental education initiative at Bwiba Full Primary School in the rural Karonga District of Malawi. With more than 831,783 Malawian Kwacha raised, the project brought together students and educators to explore the importance of water conservation and environmental responsibility.

  Over the course of three days, 30 students participated in interactive lessons and activities designed to connect environmental concepts to their everyday lives. The program featured a storytime session centered around Why Should I Save Water? by Jen Green, helping students explore the importance of protecting and conserving one of our most essential resources.

  The Give Earth a Smile team also developed interactive worksheets specifically for the program, encouraging students to think critically about water conservation and identify ways they could make a difference in their own homes and communities. Rather than simply learning about environmental challenges, students were encouraged to become part of the solution.

  The program culminated in students designing their own student-led water conservation action plans, transforming what they learned into ideas for meaningful environmental action. These projects were designed to inspire students to take ownership of environmental issues and recognize that even small actions can contribute to lasting change.

  Seeds for Change represents Give Earth a Smile's belief that environmental education is most powerful when young people are given the knowledge, creativity, and confidence to take action. By introducing environmental awareness at a young age and empowering students to develop solutions of their own, the initiative aims to nurture a generation of young environmental leaders who can create positive change within their families, schools, and communities.
    `.trim(),

    location: "Karonga District",
    country: "Malawi",

    category: "Environment",
    status: "Completed",

    startDate: "Spring 2026",
    endDate: "Spring 2026",

    coverImage:
      "/images/projects/seeds-for-change-malawi/cover.jpg",

    featured: true,

    gallery: Array.from({ length: 64 }, (_, index) =>
      `/images/projects/seeds-for-change-malawi/${String(
        index + 1,
      ).padStart(2, "0")}.jpg`
    ),

    statistics: [
      {
        value: "831,783+ MWK",
        label: "Raised to support the initiative",
      },
      {
        value: "3 Days",
        label: "Of environmental education",
      },
      {
        value: "30+ Students",
        label: "Engaged in the program",
      },
      {
        value: "Student Action Plans",
        label:
          "Designed to inspire lasting environmental action",
      },
    ],

    goals: [
      "Teach students about water conservation and environmental responsibility.",
      "Connect environmental concepts to students' everyday lives through interactive education.",
      "Encourage students to think critically about environmental challenges in their homes and communities.",
      "Empower students to develop their own water conservation action plans.",
      "Build environmental awareness, creativity, leadership, and confidence among young students.",
      "Encourage lasting environmental action within families, schools, and communities.",
    ],

    results: [
      "More than 831,783 Malawian Kwacha was raised to support the initiative.",
      "A three-day environmental education program was completed at Bwiba Full Primary School.",
      "30 students participated in interactive environmental education lessons and activities.",
      "Students explored water conservation through storytime, discussion, worksheets, and hands-on learning.",
      "Give Earth a Smile developed interactive worksheets specifically for the program.",
      "Students created their own water conservation action plans.",
      "Students were encouraged to apply environmental lessons within their homes and communities.",
    ],
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(
  limit = 3,
): Project[] {
  return projects
    .filter((project) => project.featured)
    .slice(0, limit);
}

export function getProjectBySlug(
  slug: string,
): Project | null {
  const normalizedSlug = slug
    .trim()
    .toLowerCase();

  return (
    projects.find(
      (project) =>
        project.slug.toLowerCase() ===
        normalizedSlug,
    ) ?? null
  );
}

export function getProjectsByCategory(
  category: ProjectCategory,
): Project[] {
  return projects.filter(
    (project) => project.category === category,
  );
}

export function searchProjects(
  search: string,
): Project[] {
  const normalizedSearch = search
    .trim()
    .toLowerCase();

  if (!normalizedSearch) {
    return projects;
  }

  return projects.filter((project) => {
    const searchableText = [
      project.title,
      project.subtitle,
      project.shortDescription,
      project.description,
      project.location,
      project.country,
      project.category,
      project.status,
      ...project.goals,
      ...project.results,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(
      normalizedSearch,
    );
  });
}