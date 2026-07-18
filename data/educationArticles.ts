export type EducationCategory =
  | "Climate and Sustainability"
  | "Waste and Recycling"
  | "Biodiversity"
  | "Environmental Justice"
  | "Community Action";

export type EducationDifficulty =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  keyPoints?: string[];
};

export type EducationArticle = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: EducationCategory;
  difficulty: EducationDifficulty;
  author: string;
  authorRole: string;
  publishedDate: string;
  updatedDate?: string;
  readingTime: number;
  coverImage: string;
  featured: boolean;
  tags: string[];
  sections: ArticleSection[];
  takeaways: string[];
  discussionQuestions: string[];
  relatedArticleSlugs: string[];
  downloadableResource?: {
    label: string;
    href: string;
  };
};

export const educationArticles: EducationArticle[] = [
  {
    id: "article-climate-change-basics",
    slug: "climate-change-basics",
    title: "Climate Change: Understanding the Basics",
    subtitle:
      "A clear introduction to climate change, greenhouse gases, and the actions communities can take.",
    description:
      "Learn what climate change is, why it is happening, how it affects communities, and what students can do to help.",
    category: "Climate and Sustainability",
    difficulty: "Beginner",
    author: "Give Earth a Smile Education Team",
    authorRole: "Environmental Education",
    publishedDate: "July 2026",
    readingTime: 8,
    coverImage: "/images/education/climate-change-basics.jpg",
    featured: true,
    tags: [
      "Climate Change",
      "Greenhouse Gases",
      "Sustainability",
      "Youth Action",
    ],
    sections: [
      {
        id: "what-is-climate-change",
        title: "What Is Climate Change?",
        paragraphs: [
          "Climate change refers to long-term changes in Earth’s average temperatures and weather patterns. Earth’s climate has changed naturally throughout history, but the rapid warming observed today is strongly connected to human activity.",
          "The burning of fossil fuels such as coal, oil, and natural gas releases greenhouse gases into the atmosphere. These gases trap heat and cause the planet’s average temperature to rise.",
        ],
        keyPoints: [
          "Climate describes long-term patterns, while weather describes short-term conditions.",
          "Modern climate change is occurring unusually quickly.",
          "Human activities are a major cause of current warming.",
        ],
      },
      {
        id: "greenhouse-effect",
        title: "How the Greenhouse Effect Works",
        paragraphs: [
          "The greenhouse effect is a natural process that keeps Earth warm enough for life. Sunlight reaches Earth’s surface, and some of that energy is released back toward space as heat.",
          "Greenhouse gases absorb and retain part of that heat. When additional greenhouse gases enter the atmosphere, more heat remains trapped and global temperatures increase.",
        ],
        keyPoints: [
          "The natural greenhouse effect is necessary for life.",
          "Too many greenhouse gases cause additional warming.",
          "Carbon dioxide and methane are important greenhouse gases.",
        ],
      },
      {
        id: "climate-impacts",
        title: "How Climate Change Affects Communities",
        paragraphs: [
          "Climate change can increase the frequency or intensity of heat waves, heavy rainfall, droughts, wildfires, and coastal flooding.",
          "The effects are not distributed equally. Communities with fewer resources may have greater difficulty preparing for emergencies, recovering from disasters, or adapting to environmental changes.",
        ],
        keyPoints: [
          "Climate change affects ecosystems, economies, health, and infrastructure.",
          "Different regions experience different effects.",
          "Preparedness and community resources influence resilience.",
        ],
      },
      {
        id: "student-action",
        title: "What Students Can Do",
        paragraphs: [
          "Students can contribute by reducing waste, conserving energy, learning about environmental policy, participating in local service, and sharing reliable information.",
          "Individual choices matter most when they are connected to broader community action. Working with schools, organizations, and local leaders can create changes that reach far beyond one person.",
        ],
        keyPoints: [
          "Learn before sharing environmental information.",
          "Participate in organized community projects.",
          "Encourage schools and organizations to adopt sustainable practices.",
        ],
      },
    ],
    takeaways: [
      "Climate change involves long-term changes in global and regional climate patterns.",
      "Human-produced greenhouse gases are increasing global temperatures.",
      "Climate impacts differ between communities and regions.",
      "Youth education and community action can support meaningful solutions.",
    ],
    discussionQuestions: [
      "How is climate different from weather?",
      "Which climate effects are most relevant to your community?",
      "What environmental change could your school realistically make?",
    ],
    relatedArticleSlugs: [
      "building-a-sustainable-school",
      "environmental-justice-introduction",
    ],
    downloadableResource: {
      label: "Download Classroom Discussion Guide",
      href: "#",
    },
  },

  {
    id: "article-building-sustainable-school",
    slug: "building-a-sustainable-school",
    title: "Building a More Sustainable School",
    subtitle:
      "Practical strategies students can use to reduce waste, conserve resources, and improve their school community.",
    description:
      "Explore realistic sustainability projects that students can organize at school.",
    category: "Community Action",
    difficulty: "Intermediate",
    author: "Give Earth a Smile Education Team",
    authorRole: "Youth Outreach",
    publishedDate: "July 2026",
    readingTime: 10,
    coverImage: "/images/education/sustainable-school.jpg",
    featured: true,
    tags: [
      "Schools",
      "Student Leadership",
      "Energy",
      "Waste Reduction",
    ],
    sections: [
      {
        id: "begin-with-audit",
        title: "Begin With an Environmental Audit",
        paragraphs: [
          "Before starting a project, students should understand how their school currently uses energy, water, paper, food, and other resources.",
          "An environmental audit can be simple. Students might observe how many recycling bins are available, estimate how much paper is used, or identify lights and electronics that remain on unnecessarily.",
        ],
        keyPoints: [
          "Collect information before proposing solutions.",
          "Focus on measurable and observable problems.",
          "Ask teachers and staff for input.",
        ],
      },
      {
        id: "choose-one-goal",
        title: "Choose One Achievable Goal",
        paragraphs: [
          "A focused project is often more successful than trying to fix every environmental issue at once.",
          "Students might begin by improving recycling signs, reducing disposable materials at one event, or creating a classroom energy-saving campaign.",
        ],
        keyPoints: [
          "Start with a clearly defined problem.",
          "Set a result that can be measured.",
          "Choose an idea that students can realistically maintain.",
        ],
      },
      {
        id: "build-support",
        title: "Build Support",
        paragraphs: [
          "Successful school projects usually require cooperation from students, teachers, administrators, custodial staff, and families.",
          "A project proposal should explain the problem, the proposed solution, expected benefits, costs, and the responsibilities of each group.",
        ],
        keyPoints: [
          "Include the people affected by the project.",
          "Present both environmental and practical benefits.",
          "Clearly assign responsibilities.",
        ],
      },
      {
        id: "measure-progress",
        title: "Measure and Share Progress",
        paragraphs: [
          "Tracking results allows students to determine whether their project is working.",
          "Results can be shared through posters, announcements, presentations, newsletters, or school websites. Showing progress also helps maintain participation.",
        ],
        keyPoints: [
          "Measure results before and after the project.",
          "Share both successes and challenges.",
          "Use lessons from the first project to improve future work.",
        ],
      },
    ],
    takeaways: [
      "Strong projects begin with observation and evidence.",
      "A focused, measurable goal is easier to accomplish.",
      "School sustainability requires cooperation.",
      "Sharing results helps maintain participation.",
    ],
    discussionQuestions: [
      "What is one source of unnecessary waste at your school?",
      "Who would need to support your proposed project?",
      "How could you measure whether the project worked?",
    ],
    relatedArticleSlugs: [
      "climate-change-basics",
      "understanding-recycling",
    ],
    downloadableResource: {
      label: "Download School Sustainability Checklist",
      href: "#",
    },
  },

  {
    id: "article-understanding-recycling",
    slug: "understanding-recycling",
    title: "Recycling: What Happens After the Bin?",
    subtitle:
      "Understanding contamination, sorting systems, and why reducing waste matters more than recycling alone.",
    description:
      "Follow recyclable materials from collection through sorting and processing.",
    category: "Waste and Recycling",
    difficulty: "Beginner",
    author: "Give Earth a Smile Education Team",
    authorRole: "Environmental Education",
    publishedDate: "July 2026",
    readingTime: 7,
    coverImage: "/images/education/recycling.jpg",
    featured: false,
    tags: ["Recycling", "Waste", "Plastic", "Consumption"],
    sections: [
      {
        id: "collection",
        title: "Collection and Transportation",
        paragraphs: [
          "Recyclable materials are collected from homes, schools, businesses, and public spaces. They are then transported to a facility where different materials can be sorted.",
          "Recycling rules differ by location because facilities do not all accept the same materials.",
        ],
        keyPoints: [
          "Local recycling guidelines matter.",
          "An item marked recyclable may not be accepted everywhere.",
          "Materials must reach the correct facility to be processed.",
        ],
      },
      {
        id: "sorting",
        title: "Sorting Materials",
        paragraphs: [
          "At sorting facilities, machines and workers separate paper, cardboard, metals, glass, and accepted plastics.",
          "Incorrect objects can damage equipment, create safety risks, or contaminate otherwise recyclable material.",
        ],
        keyPoints: [
          "Recycling contamination reduces the usefulness of collected material.",
          "Plastic bags often require separate collection.",
          "Food residue can contaminate paper and cardboard.",
        ],
      },
      {
        id: "processing",
        title: "Processing and Manufacturing",
        paragraphs: [
          "After sorting, materials are cleaned and processed into forms manufacturers can use. Paper may become pulp, metals may be melted, and certain plastics may be shredded into small pieces.",
          "The processed material is sold to manufacturers and used to create new products.",
        ],
      },
      {
        id: "reduce-first",
        title: "Why Reducing Comes First",
        paragraphs: [
          "Recycling requires energy, transportation, equipment, and markets for processed materials.",
          "Avoiding unnecessary consumption and reusing materials can prevent waste before recycling becomes necessary.",
        ],
        keyPoints: [
          "Reduce, reuse, and then recycle.",
          "Choose durable products when possible.",
          "Avoid unnecessary single-use materials.",
        ],
      },
    ],
    takeaways: [
      "Recycling systems vary between communities.",
      "Contamination can prevent materials from being recycled.",
      "Recycling is only one part of responsible waste management.",
      "Reducing consumption often has a greater impact.",
    ],
    discussionQuestions: [
      "Which materials does your local recycling program accept?",
      "What common items cause recycling contamination?",
      "What disposable product could you replace with a reusable option?",
    ],
    relatedArticleSlugs: [
      "building-a-sustainable-school",
      "protecting-local-biodiversity",
    ],
  },

  {
    id: "article-protecting-local-biodiversity",
    slug: "protecting-local-biodiversity",
    title: "Protecting Biodiversity in Your Community",
    subtitle:
      "How local plants, animals, and ecosystems support healthy communities.",
    description:
      "Learn why biodiversity matters and how community projects can help protect local ecosystems.",
    category: "Biodiversity",
    difficulty: "Intermediate",
    author: "Give Earth a Smile Education Team",
    authorRole: "Conservation Education",
    publishedDate: "July 2026",
    readingTime: 9,
    coverImage: "/images/education/biodiversity.jpg",
    featured: true,
    tags: ["Biodiversity", "Habitats", "Pollinators", "Conservation"],
    sections: [
      {
        id: "meaning",
        title: "What Biodiversity Means",
        paragraphs: [
          "Biodiversity describes the variety of living organisms, ecosystems, and genetic differences found in an area.",
          "A biodiverse ecosystem includes many species that interact with one another and with their physical environment.",
        ],
      },
      {
        id: "importance",
        title: "Why Biodiversity Matters",
        paragraphs: [
          "Healthy ecosystems provide services people depend on, including clean water, fertile soil, pollination, food production, and protection from flooding.",
          "When biodiversity declines, ecosystems may become less stable and less capable of responding to environmental change.",
        ],
        keyPoints: [
          "Biodiversity supports ecosystem resilience.",
          "Human communities depend on ecosystem services.",
          "Protecting habitats benefits many species at once.",
        ],
      },
      {
        id: "local-threats",
        title: "Common Local Threats",
        paragraphs: [
          "Habitat loss, pollution, invasive species, pesticide use, and climate change can reduce biodiversity.",
          "Even small areas such as school grounds, neighborhood parks, and home gardens can either support or limit local wildlife.",
        ],
      },
      {
        id: "community-action",
        title: "Community Conservation",
        paragraphs: [
          "Students can support biodiversity by planting native species, reducing pesticide use, restoring habitats, documenting wildlife, and educating others.",
          "Community projects should be planned carefully to avoid accidentally introducing harmful plants or disturbing sensitive habitat.",
        ],
        keyPoints: [
          "Use native plants suited to the local environment.",
          "Consult knowledgeable organizations before altering habitats.",
          "Observe wildlife without disturbing it.",
        ],
      },
    ],
    takeaways: [
      "Biodiversity includes species, ecosystems, and genetic variety.",
      "Healthy ecosystems provide essential services.",
      "Local habitats are affected by everyday community decisions.",
      "Students can contribute through responsible conservation projects.",
    ],
    discussionQuestions: [
      "Which native species live in your community?",
      "What local habitat is most in need of protection?",
      "How could your school support pollinators or native plants?",
    ],
    relatedArticleSlugs: [
      "climate-change-basics",
      "understanding-recycling",
    ],
  },

  {
    id: "article-environmental-justice-introduction",
    slug: "environmental-justice-introduction",
    title: "An Introduction to Environmental Justice",
    subtitle:
      "Why environmental risks and environmental benefits are not always shared equally.",
    description:
      "Explore the relationship between environmental issues, community resources, public health, and fairness.",
    category: "Environmental Justice",
    difficulty: "Advanced",
    author: "Give Earth a Smile Education Team",
    authorRole: "Community Education",
    publishedDate: "July 2026",
    readingTime: 12,
    coverImage: "/images/education/environmental-justice.jpg",
    featured: false,
    tags: [
      "Environmental Justice",
      "Communities",
      "Public Health",
      "Equity",
    ],
    sections: [
      {
        id: "definition",
        title: "Defining Environmental Justice",
        paragraphs: [
          "Environmental justice examines whether all people receive fair treatment and meaningful participation in environmental decisions.",
          "It considers both exposure to environmental harm and access to environmental benefits such as clean parks, safe water, healthy housing, and reliable transportation.",
        ],
      },
      {
        id: "unequal-risk",
        title: "Unequal Environmental Risk",
        paragraphs: [
          "Some communities may be located closer to highways, industrial facilities, flood-prone areas, or sources of air and water pollution.",
          "Communities may also differ in their access to healthcare, emergency resources, political influence, and financial support for recovery.",
        ],
        keyPoints: [
          "Environmental harm is not always distributed equally.",
          "Social and economic conditions affect environmental vulnerability.",
          "Community voices should be included in decision-making.",
        ],
      },
      {
        id: "meaningful-participation",
        title: "Meaningful Community Participation",
        paragraphs: [
          "Meaningful participation requires more than announcing a decision after it has already been made.",
          "Community members should have understandable information, opportunities to express concerns, and a genuine role in shaping decisions.",
        ],
      },
      {
        id: "responsible-service",
        title: "Responsible Community Service",
        paragraphs: [
          "Organizations should avoid assuming they understand a community’s needs without listening to local residents.",
          "Responsible projects are collaborative, respectful, transparent, and designed with the people most affected.",
        ],
        keyPoints: [
          "Listen before designing a project.",
          "Work with local organizations and leaders.",
          "Measure whether the project actually addresses community priorities.",
        ],
      },
    ],
    takeaways: [
      "Environmental justice connects environmental conditions with fairness and public participation.",
      "Communities face different levels of environmental risk.",
      "Local knowledge is essential when planning environmental projects.",
      "Service projects should be collaborative rather than imposed.",
    ],
    discussionQuestions: [
      "What environmental benefits should every community have?",
      "How can organizations make community participation meaningful?",
      "What questions should volunteers ask before beginning a project?",
    ],
    relatedArticleSlugs: [
      "climate-change-basics",
      "building-a-sustainable-school",
    ],
  },
];

export const educationCategories: EducationCategory[] = [
  "Climate and Sustainability",
  "Waste and Recycling",
  "Biodiversity",
  "Environmental Justice",
  "Community Action",
];

export const educationDifficulties: EducationDifficulty[] = [
  "Beginner",
  "Intermediate",
  "Advanced",
];