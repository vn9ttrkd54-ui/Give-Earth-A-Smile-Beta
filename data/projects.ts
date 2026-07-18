export type ProjectStatus = "Planning" | "Active" | "Completed";

export type ProjectCategory =
  | "Environmental Education"
  | "Community Service"
  | "Humanitarian Support"
  | "Tree Planting"
  | "International Outreach";

export type ProjectGalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectStatistic = {
  id: string;
  value: string;
  label: string;
};

export type ProjectTimelineItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  completed: boolean;
};

export type ProjectLeader = {
  id: string;
  name: string;
  role: string;
  image?: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string[];
  location: string;
  country: string;
  category: ProjectCategory;
  status: ProjectStatus;
  startDate: string;
  endDate?: string;
  coverImage: string;
  featured: boolean;
  gallery: ProjectGalleryImage[];
  statistics: ProjectStatistic[];
  goals: string[];
  results: string[];
  timeline: ProjectTimelineItem[];
  leaders: ProjectLeader[];
  partners: string[];
  relatedProjectSlugs: string[];
};

export const projects: Project[] = [
  {
    id: "project-taiwan-environmental-summer-camp",
    slug: "taiwan-environmental-summer-camp",
    title: "Taiwan Environmental Summer Camp",
    subtitle:
      "Connecting environmental education, youth leadership, and international service.",
    shortDescription:
      "A month-long youth-led summer camp introducing students in Taiwan to environmental awareness, sustainability, and collaborative service.",
    fullDescription: [
      "The Taiwan Environmental Summer Camp was created to give students an engaging introduction to environmental awareness, sustainability, community responsibility, and youth leadership.",
      "Through interactive lessons, team activities, discussions, and service-focused learning, participants were encouraged to examine environmental challenges and consider practical ways to create change in their own communities.",
      "The program also demonstrated the power of international collaboration. Students and organizers brought together different experiences and perspectives while working toward the shared goal of protecting the environment.",
    ],
    location: "Taiwan",
    country: "Taiwan",
    category: "Environmental Education",
    status: "Completed",
    startDate: "Summer 2026",
    endDate: "Summer 2026",
    coverImage: "/images/projects/taiwan-camp/cover.jpg",
    featured: true,
    gallery: [
      {
        id: "taiwan-gallery-1",
        src: "/images/projects/taiwan-camp/1.jpg",
        alt: "Students participating in the Taiwan environmental summer camp",
        caption:
          "Students taking part in an environmental education activity.",
      },
      {
        id: "taiwan-gallery-2",
        src: "/images/projects/taiwan-camp/2.jpg",
        alt: "Youth environmental education lesson in Taiwan",
        caption:
          "An interactive lesson focused on sustainability and environmental responsibility.",
      },
      {
        id: "taiwan-gallery-3",
        src: "/images/projects/taiwan-camp/3.jpg",
        alt: "Students collaborating during the Taiwan summer camp",
        caption:
          "Participants collaborating during a team-based activity.",
      },
      {
        id: "taiwan-gallery-4",
        src: "/images/projects/taiwan-camp/4.jpg",
        alt: "Environmental camp group activity",
        caption:
          "Students sharing ideas and developing environmental solutions.",
      },
      {
        id: "taiwan-gallery-5",
        src: "/images/projects/taiwan-camp/5.jpg",
        alt: "Taiwan environmental summer camp participants",
        caption:
          "A community of students learning and taking action together.",
      },
    ],
    statistics: [
      {
        id: "taiwan-stat-students",
        value: "30+",
        label: "Students Reached",
      },
      {
        id: "taiwan-stat-weeks",
        value: "4",
        label: "Weeks of Programming",
      },
      {
        id: "taiwan-stat-lessons",
        value: "20+",
        label: "Lessons and Activities",
      },
      {
        id: "taiwan-stat-hours",
        value: "100+",
        label: "Service Hours",
      },
    ],
    goals: [
      "Introduce students to important environmental and sustainability concepts.",
      "Encourage students to identify environmental challenges within their own communities.",
      "Develop teamwork, communication, and youth leadership skills.",
      "Create lasting international connections centered on environmental action.",
    ],
    results: [
      "Students completed environmental lessons and collaborative activities.",
      "Participants developed a stronger understanding of sustainability and community responsibility.",
      "The program created a model that can be adapted for future international camps.",
      "Students were encouraged to continue environmental service after the camp concluded.",
    ],
    timeline: [
      {
        id: "taiwan-timeline-planning",
        title: "Program Planning",
        date: "Early 2026",
        description:
          "The project team selected lesson topics, designed activities, and organized the program structure.",
        completed: true,
      },
      {
        id: "taiwan-timeline-curriculum",
        title: "Curriculum Development",
        date: "Spring 2026",
        description:
          "Environmental lessons, discussions, and interactive activities were prepared for participating students.",
        completed: true,
      },
      {
        id: "taiwan-timeline-recruitment",
        title: "Student Recruitment",
        date: "Spring 2026",
        description:
          "Students and community participants were invited to join the summer program.",
        completed: true,
      },
      {
        id: "taiwan-timeline-camp",
        title: "Summer Camp",
        date: "Summer 2026",
        description:
          "The team delivered environmental education, leadership activities, and collaborative projects.",
        completed: true,
      },
      {
        id: "taiwan-timeline-review",
        title: "Program Review",
        date: "Summer 2026",
        description:
          "The project was evaluated to identify lessons and opportunities for future programs.",
        completed: true,
      },
    ],
    leaders: [
      {
        id: "taiwan-leader-gabriel",
        name: "Gabriel Chen",
        role: "International Project Manager and Camp Instructor",
        image: "/images/team/gabriel-chen.jpg",
      },
      {
        id: "taiwan-leader-aditi",
        name: "Aditi Swain",
        role: "Executive Director",
        image: "/images/team/aditi-swain.jpg",
      },
      {
        id: "taiwan-leader-srikrithi",
        name: "Srikrithi Kodimela",
        role: "Director of Operations",
        image: "/images/team/srikrithi-kodimela.jpg",
      },
    ],
    partners: ["Local students", "Community volunteers", "GES ambassadors"],
    relatedProjectSlugs: [
      "malawi-environmental-outreach",
      "community-cleanup-initiative",
    ],
  },

  {
    id: "project-community-cleanup-initiative",
    slug: "community-cleanup-initiative",
    title: "Community Cleanup Initiative",
    subtitle:
      "Bringing students and volunteers together to improve shared community spaces.",
    shortDescription:
      "A local service initiative focused on cleaning public areas, increasing environmental awareness, and encouraging continued community involvement.",
    fullDescription: [
      "The Community Cleanup Initiative brings students, families, and volunteers together to improve parks, neighborhoods, and other shared spaces.",
      "The project combines direct environmental service with education. Participants learn how litter and improper waste disposal affect ecosystems, wildlife, public health, and community well-being.",
      "By creating accessible volunteer opportunities, the initiative helps students understand that meaningful environmental action can begin within their own neighborhoods.",
    ],
    location: "Orlando, Florida",
    country: "United States",
    category: "Community Service",
    status: "Active",
    startDate: "2026",
    coverImage: "/images/projects/community-cleanup/cover.jpg",
    featured: true,
    gallery: [
      {
        id: "cleanup-gallery-1",
        src: "/images/projects/community-cleanup/1.jpg",
        alt: "Volunteers participating in a community cleanup",
        caption:
          "Students and volunteers working together to improve a community space.",
      },
      {
        id: "cleanup-gallery-2",
        src: "/images/projects/community-cleanup/2.jpg",
        alt: "Environmental cleanup volunteers",
        caption:
          "Volunteers collecting and organizing litter during a service activity.",
      },
      {
        id: "cleanup-gallery-3",
        src: "/images/projects/community-cleanup/3.jpg",
        alt: "Students completing community environmental service",
        caption:
          "Young volunteers demonstrating environmental responsibility.",
      },
    ],
    statistics: [
      {
        id: "cleanup-stat-volunteers",
        value: "25+",
        label: "Volunteers",
      },
      {
        id: "cleanup-stat-hours",
        value: "75+",
        label: "Volunteer Hours",
      },
      {
        id: "cleanup-stat-events",
        value: "3",
        label: "Cleanup Events",
      },
      {
        id: "cleanup-stat-bags",
        value: "40+",
        label: "Bags Collected",
      },
    ],
    goals: [
      "Improve local parks and shared community spaces.",
      "Educate volunteers about litter, waste, and environmental responsibility.",
      "Create accessible environmental service opportunities for students.",
      "Build long-term partnerships with schools and community organizations.",
    ],
    results: [
      "Volunteers removed litter from community spaces.",
      "Students gained direct environmental service experience.",
      "Participants learned about waste management and pollution prevention.",
      "The initiative created a foundation for recurring cleanup events.",
    ],
    timeline: [
      {
        id: "cleanup-timeline-site",
        title: "Site Identification",
        date: "2026",
        description:
          "Potential cleanup sites were evaluated based on community needs and accessibility.",
        completed: true,
      },
      {
        id: "cleanup-timeline-volunteers",
        title: "Volunteer Recruitment",
        date: "2026",
        description:
          "Students and community members were invited to participate.",
        completed: true,
      },
      {
        id: "cleanup-timeline-first-event",
        title: "First Cleanup Event",
        date: "2026",
        description:
          "Volunteers completed the first organized community cleanup.",
        completed: true,
      },
      {
        id: "cleanup-timeline-expansion",
        title: "Program Expansion",
        date: "Ongoing",
        description:
          "Additional cleanup locations and community partnerships are being developed.",
        completed: false,
      },
    ],
    leaders: [
      {
        id: "cleanup-leader-aditi",
        name: "Aditi Swain",
        role: "Executive Director",
        image: "/images/team/aditi-swain.jpg",
      },
      {
        id: "cleanup-leader-srikrithi",
        name: "Srikrithi Kodimela",
        role: "Director of Operations",
        image: "/images/team/srikrithi-kodimela.jpg",
      },
      {
        id: "cleanup-leader-affan",
        name: "Affan Bill",
        role: "Development Director and CFO",
        image: "/images/team/affan-bill.jpg",
      },
    ],
    partners: ["Student volunteers", "Local families", "Community members"],
    relatedProjectSlugs: [
      "taiwan-environmental-summer-camp",
      "malawi-environmental-outreach",
    ],
  },

  {
    id: "project-malawi-environmental-outreach",
    slug: "malawi-environmental-outreach",
    title: "Malawi Environmental Outreach",
    subtitle:
      "Supporting community-centered environmental education and international collaboration.",
    shortDescription:
      "A developing international outreach initiative designed to support environmental education and community engagement in Malawi.",
    fullDescription: [
      "The Malawi Environmental Outreach project is being developed to support environmental education, youth participation, and community-centered action.",
      "The initiative will work with local representatives to identify environmental priorities and create programming that reflects the needs and experiences of participating communities.",
      "Rather than using a single standardized approach, the project emphasizes communication and collaboration with local leaders throughout planning and implementation.",
    ],
    location: "Lilongwe, Malawi",
    country: "Malawi",
    category: "International Outreach",
    status: "Planning",
    startDate: "Planned",
    coverImage: "/images/projects/malawi-outreach/cover.jpg",
    featured: true,
    gallery: [
      {
        id: "malawi-gallery-1",
        src: "/images/projects/malawi-outreach/1.jpg",
        alt: "Community environmental outreach in Malawi",
        caption:
          "A placeholder image for the developing Malawi outreach project.",
      },
      {
        id: "malawi-gallery-2",
        src: "/images/projects/malawi-outreach/2.jpg",
        alt: "Environmental education planning for Malawi",
        caption:
          "Planning environmental education and community collaboration.",
      },
      {
        id: "malawi-gallery-3",
        src: "/images/projects/malawi-outreach/3.jpg",
        alt: "International environmental partnership",
        caption:
          "Building an international partnership centered on community needs.",
      },
    ],
    statistics: [
      {
        id: "malawi-stat-communities",
        value: "1+",
        label: "Communities Planned",
      },
      {
        id: "malawi-stat-ambassadors",
        value: "1",
        label: "Local Ambassador",
      },
      {
        id: "malawi-stat-programs",
        value: "3+",
        label: "Programs Proposed",
      },
      {
        id: "malawi-stat-status",
        value: "2026",
        label: "Planning Year",
      },
    ],
    goals: [
      "Develop programming in collaboration with local representatives.",
      "Support accessible environmental education for young people.",
      "Identify environmental challenges important to participating communities.",
      "Build a sustainable international partnership rather than a one-time event.",
    ],
    results: [
      "A local ambassador connection has been established.",
      "Initial project concepts and educational priorities are being developed.",
      "The project has created an opportunity for long-term international collaboration.",
      "Future results will be added after implementation begins.",
    ],
    timeline: [
      {
        id: "malawi-timeline-connection",
        title: "Local Connection",
        date: "2026",
        description:
          "Communication began with a local representative in Malawi.",
        completed: true,
      },
      {
        id: "malawi-timeline-needs",
        title: "Community Needs Review",
        date: "Planning",
        description:
          "The team will identify environmental priorities and available resources.",
        completed: false,
      },
      {
        id: "malawi-timeline-program",
        title: "Program Development",
        date: "Planning",
        description:
          "Educational materials and project activities will be designed collaboratively.",
        completed: false,
      },
      {
        id: "malawi-timeline-launch",
        title: "Initial Implementation",
        date: "Future",
        description:
          "The first community outreach activities will be launched.",
        completed: false,
      },
    ],
    leaders: [
      {
        id: "malawi-leader-robert",
        name: "Robert Mhango",
        role: "Malawi Ambassador",
      },
      {
        id: "malawi-leader-gabriel",
        name: "Gabriel Chen",
        role: "International Project Manager",
        image: "/images/team/gabriel-chen.jpg",
      },
      {
        id: "malawi-leader-aditi",
        name: "Aditi Swain",
        role: "Executive Director",
        image: "/images/team/aditi-swain.jpg",
      },
    ],
    partners: ["GES international ambassadors", "Community representatives"],
    relatedProjectSlugs: [
      "taiwan-environmental-summer-camp",
      "community-cleanup-initiative",
    ],
  },
];