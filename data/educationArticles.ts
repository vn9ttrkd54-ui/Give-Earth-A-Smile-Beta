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
    id: "article-renewable-energy-basics",
    slug: "renewable-energy-basics",
    title: "Renewable Energy: Powering a Sustainable Future",
    subtitle:
      "An introduction to clean energy sources, how they work, and why communities are making the transition.",
    description:
      "Explore solar, wind, hydropower, and other renewable energy sources—and learn how students can support a cleaner energy future.",
    category: "Climate and Sustainability",
    difficulty: "Beginner",
    author: "Give Earth a Smile Education Team",
    authorRole: "Environmental Education",
    publishedDate: "August 2026",
    readingTime: 8,
    coverImage: "/images/education/climate-change-basics.jpg",
    featured: false,
    tags: [
      "Renewable Energy",
      "Solar Power",
      "Wind Power",
      "Climate Action",
    ],
    sections: [
      {
        id: "what-is-renewable-energy",
        title: "What Is Renewable Energy?",
        paragraphs: [
          "Renewable energy comes from sources that are naturally replenished, such as sunlight, wind, flowing water, and heat from within Earth. Unlike fossil fuels, these resources can be used repeatedly without being permanently depleted.",
          "Renewable energy technologies convert these natural resources into electricity, heat, or fuel. Expanding their use can reduce greenhouse gas emissions and improve air quality while helping communities build more sustainable energy systems.",
        ],
        keyPoints: [
          "Renewable resources are naturally replenished.",
          "Clean energy can reduce dependence on fossil fuels.",
          "Different locations are suited to different renewable resources.",
        ],
      },
      {
        id: "major-renewable-sources",
        title: "The Major Renewable Energy Sources",
        paragraphs: [
          "Solar panels convert sunlight into electricity, while wind turbines use moving air to turn a generator. Hydropower uses flowing water, geothermal systems draw on heat beneath Earth’s surface, and some forms of biomass use organic material for energy.",
          "Each source has advantages and limitations. Solar and wind power depend on weather conditions, hydropower projects can affect rivers and habitats, and biomass must be managed carefully to avoid pollution or deforestation.",
        ],
        keyPoints: [
          "Solar and wind are among the fastest-growing renewable technologies.",
          "Hydropower and geothermal energy can provide steady electricity in suitable locations.",
          "Every energy project should consider local people and ecosystems.",
        ],
      },
      {
        id: "building-reliable-clean-energy",
        title: "Building a Reliable Clean Energy System",
        paragraphs: [
          "A reliable energy system must provide power when people need it. Because sunlight and wind vary, communities may combine several energy sources with batteries, improved power grids, and energy conservation.",
          "Energy efficiency is an important part of the transition. Buildings, appliances, transportation systems, and everyday habits that use less energy make it easier for renewable sources to meet community needs.",
        ],
        keyPoints: [
          "Energy storage can save electricity for later use.",
          "Modern grids can balance energy from several sources.",
          "Using energy efficiently reduces both costs and environmental impact.",
        ],
      },
      {
        id: "how-students-can-help",
        title: "How Students Can Help",
        paragraphs: [
          "Students can begin by learning where their school’s electricity comes from and identifying practical ways to conserve energy. An energy audit can reveal unnecessary lighting, inefficient equipment, or heating and cooling practices that waste power.",
          "Students can also share reliable information, organize an energy-awareness campaign, or work with school leaders to explore renewable energy options. Meaningful progress often begins with a well-researched question and a realistic local goal.",
        ],
        keyPoints: [
          "Investigate how energy is used in your school or community.",
          "Connect conservation efforts to measurable results.",
          "Support solutions that are practical, inclusive, and environmentally responsible.",
        ],
      },
    ],
    takeaways: [
      "Renewable energy comes from sources that naturally replenish.",
      "Solar, wind, hydropower, geothermal energy, and biomass have different benefits and limitations.",
      "Storage, efficient grids, and energy conservation help create reliable clean energy systems.",
      "Students can support the transition through research, conservation, and community action.",
    ],
    discussionQuestions: [
      "Which renewable energy sources are best suited to your community?",
      "How could your school reduce its energy use?",
      "What should leaders consider before building a renewable energy project?",
    ],
    relatedArticleSlugs: [
      "climate-change-basics",
      "building-a-sustainable-school",
    ],
  },

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
    featured: false,
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
    publishedDate: "June 2026",
    readingTime: 10,
    coverImage: "/images/education/sustainable-school.jpg",
    featured: false,
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
    publishedDate: "May 2026",
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
    publishedDate: "April 2026",
    readingTime: 9,
    coverImage: "/images/education/sustainable-school.jpg",
    featured: false,
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
    publishedDate: "March 2026",
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
  {
    id: "article-water-conservation",
    slug: "water-conservation-every-drop-matters",
    title: "Water Conservation: Why Every Drop Matters",
    subtitle:
      "Understanding freshwater scarcity and the practical steps communities can take to protect water resources.",
    description:
      "Learn where our freshwater comes from, why water conservation matters, and how students can reduce unnecessary water use.",
    category: "Climate and Sustainability",
    difficulty: "Beginner",
    author: "Give Earth a Smile Education Team",
    authorRole: "Environmental Education",
    publishedDate: "February 2026",
    readingTime: 8,
    coverImage: "/images/education/biodiversity.jpg",
    featured: false,
    tags: [
      "Water Conservation",
      "Freshwater",
      "Sustainability",
      "Youth Action",
    ],
    sections: [
      {
        id: "freshwater",
        title: "Understanding Our Freshwater Supply",
        paragraphs: [
          "Water covers most of Earth’s surface, but only a small portion is freshwater available for human use. Communities depend on rivers, lakes, reservoirs, and groundwater for drinking water, agriculture, sanitation, and industry.",
          "Because usable freshwater is limited, protecting existing supplies and avoiding unnecessary waste are important parts of building sustainable communities.",
        ],
        keyPoints: [
          "Most of Earth’s water is saltwater.",
          "Communities rely on limited freshwater resources.",
          "Water conservation helps protect supplies for future use.",
        ],
      },
      {
        id: "water-use",
        title: "Where Does Our Water Go?",
        paragraphs: [
          "Water is used for much more than drinking. Agriculture requires water to grow crops, industries use water during manufacturing, and households use water for cleaning, cooking, landscaping, and sanitation.",
          "Understanding where water is being used makes it easier to identify opportunities for conservation.",
        ],
        keyPoints: [
          "Agriculture is an important source of water demand.",
          "Homes, schools, and businesses all use freshwater.",
          "Measuring water use can reveal opportunities to conserve it.",
        ],
      },
      {
        id: "protecting-water",
        title: "Protecting Water Resources",
        paragraphs: [
        "Conservation includes both using less water and protecting water from pollution. Litter, chemicals, fertilizers, and other pollutants can enter waterways through runoff.",
        "Communities can help by maintaining healthy landscapes, disposing of waste responsibly, preventing leaks, and protecting local rivers and wetlands.",
        ],
        keyPoints: [
          "Water quality and water conservation are connected.",
          "Preventing pollution protects available freshwater.",
          "Small improvements across a community can add up.",
        ],
      },
      {
        id: "student-water-action",
        title: "What Students Can Do",
        paragraphs: [
          "Students can begin by observing how water is used at home and school. Leaking faucets, unnecessary irrigation, and inefficient habits can all create avoidable water waste.",
          "Students can also organize awareness campaigns, conduct simple water-use audits, and encourage their communities to adopt more responsible habits.",
        ],
        keyPoints: [
          "Look for unnecessary water use.",
          "Report leaks instead of ignoring them.",
          "Combine personal conservation with community education.",
        ],
      },
    ],
    takeaways: [
      "Usable freshwater is a limited natural resource.",
      "Water is essential to households, agriculture, ecosystems, and industry.",
      "Conservation includes reducing waste and preventing pollution.",
      "Students can promote responsible water use in their communities.",
    ],
    discussionQuestions: [
      "Where does your community get its drinking water?",
      "Where might your school be wasting water?",
      "What water conservation campaign could students realistically organize?",
    ],
    relatedArticleSlugs: [
      "climate-change-basics",
      "building-a-sustainable-school",
    ],
  },

  {
    id: "article-food-waste",
    slug: "food-waste-hidden-environmental-cost",
    title: "Food Waste: The Hidden Environmental Cost",
    subtitle:
      "Why throwing away food also wastes water, energy, land, transportation, and other resources.",
    description:
      "Explore the environmental impact of food waste and learn how households, schools, and communities can prevent it.",
    category: "Waste and Recycling",
    difficulty: "Intermediate",
    author: "Give Earth a Smile Education Team",
    authorRole: "Environmental Education",
    publishedDate: "January 2026",
    readingTime: 9,
    coverImage: "/images/education/biodiversity.jpg",
    featured: false,
    tags: [
      "Food Waste",
      "Waste Reduction",
      "Consumption",
      "Sustainability",
    ],
    sections: [
      {
        id: "more-than-food",
        title: "Food Waste Is More Than Wasted Food",
        paragraphs: [
          "Producing food requires land, water, energy, labor, transportation, storage, and packaging. When edible food is discarded, many of the resources used to produce it are wasted as well.",
          "Thinking about the entire journey from farm to table helps explain why preventing food waste can have environmental benefits beyond reducing the amount of material in a trash bin.",
        ],
        keyPoints: [
          "Food production requires many different resources.",
          "Discarded food represents wasted resources as well as wasted food.",
          "Preventing waste can reduce unnecessary environmental impacts.",
        ],
      },
      {
        id: "why-food-wasted",
        title: "Why Food Gets Wasted",
        paragraphs: [
          "Food can be lost or wasted during production, transportation, retail, restaurants, schools, and inside homes.",
          "People may purchase too much food, misunderstand date labels, prepare portions that are too large, or forget about food before it can be eaten.",
        ],
        keyPoints: [
          "Food waste occurs at multiple stages.",
          "Planning and storage can prevent some household waste.",
          "Schools can examine cafeteria waste to identify patterns.",
        ],
      },
      {
        id: "prevent-first",
        title: "Prevention Comes First",
        paragraphs: [
          "The best way to address food waste is to prevent edible food from becoming waste in the first place.",
          "Planning meals, taking reasonable portions, storing food correctly, and finding appropriate ways to redistribute usable surplus food can all help.",
        ],
      },
      {
        id: "school-action",
        title: "Reducing Food Waste at School",
        paragraphs: [
          "Students can study cafeteria waste, identify commonly discarded foods, and work with school staff to investigate possible improvements.",
          "Any food redistribution or composting project should follow school rules and appropriate health and safety requirements.",
        ],
        keyPoints: [
          "Measure the problem before proposing changes.",
          "Work with cafeteria and school staff.",
          "Focus first on preventing edible food from being wasted.",
        ],
      },
    ],
    takeaways: [
      "Food waste also wastes the resources used to produce food.",
      "Waste can occur throughout the food system.",
      "Preventing waste is preferable to managing it after disposal.",
      "Schools can use data to identify practical improvements.",
    ],
    discussionQuestions: [
      "What foods are most commonly wasted at your school?",
      "Why might people take more food than they eat?",
      "How could a school measure food waste?",
    ],
    relatedArticleSlugs: [
      "understanding-recycling",
      "building-a-sustainable-school",
    ],
  },
  {
    id: "article-native-plants",
    slug: "native-plants-stronger-ecosystems",
    title: "Native Plants and Stronger Local Ecosystems",
    subtitle:
      "How plants adapted to local environments can support wildlife, habitats, and resilient communities.",
    description:
      "Discover what native plants are, why they matter, and how thoughtful planting projects can support local biodiversity.",
    category: "Biodiversity",
    difficulty: "Intermediate",
    author: "Give Earth a Smile Education Team",
    authorRole: "Conservation Education",
    publishedDate: "December 2025",
    readingTime: 8,
    coverImage: "/images/education/biodiversity.jpg",
    featured: false,
    tags: [
      "Native Plants",
      "Biodiversity",
      "Habitats",
      "Pollinators",
    ],
    sections: [
      {
        id: "what-native-means",
        title: "What Makes a Plant Native?",
        paragraphs: [
          "Native plants are species that occur naturally in a particular region and have developed relationships with the surrounding environment over long periods of time.",
          "The definition depends on location. A plant native to one region may not be native to another, which is why local information is important when planning a habitat project.",
        ],
        keyPoints: [
          "Native status depends on geographic location.",
          "Local plants interact with local ecosystems.",
          "Plant selection should be based on reliable regional information.",
        ],
      },
      {
        id: "wildlife-connections",
        title: "Plants and Wildlife Are Connected",
        paragraphs: [
          "Plants can provide food, shelter, nesting areas, and other resources for insects, birds, and additional wildlife.",
          "Because species interact in complex ways, protecting plant diversity can contribute to healthier habitat for many organisms.",
        ],
        keyPoints: [
          "Plants form important parts of food webs.",
          "Different species depend on different habitat resources.",
          "Plant diversity can support wildlife diversity.",
        ],
      },
      {
        id: "right-plant",
        title: "The Right Plant in the Right Place",
        paragraphs: [
          "A successful planting project requires more than choosing a species because it is native. Soil, sunlight, rainfall, available space, and maintenance requirements also matter.",
          "Students should consult local conservation organizations, extension resources, or knowledgeable community partners before making major habitat changes.",
        ],
      },
      {
        id: "school-habitat",
        title: "Creating Habitat at School",
        paragraphs: [
          "School grounds can provide opportunities for native gardens, pollinator areas, and environmental education.",
          "A small, carefully maintained project can often be more useful than a large planting area that the school cannot maintain.",
      ],
        keyPoints: [
          "Start with a manageable project.",
          "Create a long-term maintenance plan.",
          "Use the project as an educational resource.",
        ],
      },
    ],
    takeaways: [
      "Native plants are connected to specific regions.",
      "Plants provide important resources for wildlife.",
      "Site conditions matter when selecting plants.",
      "Habitat projects require planning and continued care.",
    ],
    discussionQuestions: [
      "Which plants are native to your region?",
      "What wildlife could a native garden support?",
      "Where could your school create a small habitat area?",
    ],
    relatedArticleSlugs: [
      "protecting-local-biodiversity",
      "building-a-sustainable-school",
    ],
  },
  {
  id: "article-fast-fashion",
  slug: "fast-fashion-environmental-impact",
  title: "Fast Fashion and the Environment",
  subtitle:
    "Looking beyond the price tag to understand clothing, consumption, waste, and natural resources.",
  description:
    "Explore the environmental life cycle of clothing and how more thoughtful consumption can reduce waste.",
  category: "Waste and Recycling",
  difficulty: "Advanced",
  author: "Give Earth a Smile Education Team",
  authorRole: "Sustainability Education",
  publishedDate: "November 2025",
  readingTime: 11,
  coverImage: "/images/education/biodiversity.jpg",
  featured: false,
  tags: [
    "Fast Fashion",
    "Clothing",
    "Consumption",
    "Waste Reduction",
  ],
  sections: [
    {
      id: "clothing-life-cycle",
      title: "The Life Cycle of Clothing",
      paragraphs: [
        "A piece of clothing has an environmental story that begins before it reaches a store. Raw materials must be produced, processed into fibers and fabrics, manufactured into clothing, transported, sold, used, and eventually discarded or reused.",
        "Examining this entire life cycle helps reveal environmental impacts that are not visible when we only consider the finished product.",
      ],
      keyPoints: [
        "Products have environmental impacts before and after purchase.",
        "Manufacturing requires materials and energy.",
        "Transportation and disposal are also parts of a product’s life cycle.",
      ],
    },
    {
      id: "rapid-consumption",
      title: "The Problem With Rapid Consumption",
      paragraphs: [
        "When clothing is treated as disposable, more products must continually be manufactured to replace items that are quickly discarded.",
        "Buying more clothing than necessary can increase demand for materials, manufacturing, transportation, packaging, and waste management.",
      ],
    },
    {
      id: "longer-use",
      title: "Using Clothing for Longer",
      paragraphs: [
        "Extending the useful life of clothing can reduce the need for constant replacement. Caring for garments, repairing minor damage, exchanging clothing, and purchasing secondhand items are possible strategies.",
        "The goal is not to make every purchase perfect, but to think more carefully about whether an item is needed and how long it can realistically be used.",
      ],
      keyPoints: [
        "Durability can reduce replacement.",
        "Repair and reuse can extend product life.",
        "Reducing unnecessary purchases prevents waste before it begins.",
      ],
    },
    {
      id: "student-response",
      title: "What Can Students Do?",
      paragraphs: [
        "Students can organize clothing swaps, learn basic repair skills, donate usable clothing responsibly, and encourage thoughtful purchasing.",
        "Educational campaigns can also help people understand that sustainability includes considering how products are made, used, and discarded.",
      ],
    },
  ],
  takeaways: [
    "Clothing has environmental impacts throughout its life cycle.",
    "Rapid consumption can increase resource use and waste.",
    "Keeping products in use longer can reduce unnecessary replacement.",
    "Students can promote reuse and responsible consumption.",
  ],
  discussionQuestions: [
    "How long do you typically keep clothing?",
    "What makes people replace usable clothes?",
    "Could your school organize a clothing reuse project?",
  ],
  relatedArticleSlugs: [
    "understanding-recycling",
    "building-a-sustainable-school",
  ],
},
{
  id: "article-urban-trees",
  slug: "urban-trees-healthier-communities",
  title: "Urban Trees and Healthier Communities",
  subtitle:
    "How trees can support shade, habitat, stormwater management, and more livable communities.",
  description:
    "Learn about the environmental benefits of urban trees and why responsible tree planting requires long-term planning.",
  category: "Community Action",
  difficulty: "Beginner",
  author: "Give Earth a Smile Education Team",
  authorRole: "Community Education",
  publishedDate: "October 2025",
  readingTime: 8,
  coverImage: "/images/education/biodiversity.jpg",
  featured: false,
  tags: [
    "Trees",
    "Urban Environment",
    "Community",
    "Habitat",
  ],
  sections: [
    {
      id: "trees-in-cities",
      title: "Why Trees Matter in Cities",
      paragraphs: [
        "Trees are important parts of urban environments. Their leaves provide shade, their roots interact with soil and water, and their branches can create habitat for wildlife.",
        "Well-planned tree cover can make outdoor spaces more comfortable while contributing to healthier local ecosystems.",
      ],
      keyPoints: [
        "Trees provide multiple environmental benefits.",
        "Urban nature can support both people and wildlife.",
        "Tree location and species selection matter.",
      ],
    },
    {
      id: "heat-and-shade",
      title: "Shade and Urban Heat",
      paragraphs: [
        "Buildings, roads, and paved surfaces can absorb and retain heat. Trees can shade some of these surfaces and create more comfortable spaces for people.",
        "The benefits depend on factors including tree size, location, climate, and long-term survival.",
      ],
    },
    {
      id: "water-habitat",
      title: "Water and Habitat",
      paragraphs: [
        "Trees can interact with rainfall by intercepting water and supporting soil that absorbs moisture. They can also provide food and habitat for local organisms.",
        "These benefits are strongest when trees are appropriate for the local environment and receive the care needed to survive.",
      ],
      keyPoints: [
        "Trees are part of urban water systems.",
        "Trees can create habitat.",
        "Planting is only the beginning of a successful tree project.",
      ],
    },
    {
      id: "responsible-planting",
      title: "Planting the Right Way",
      paragraphs: [
        "Tree projects should consider native or locally appropriate species, available space, underground and overhead infrastructure, water needs, and future maintenance.",
        "Students should work with property managers, local experts, and community organizations rather than planting trees without permission or a care plan.",
      ],
      keyPoints: [
        "Choose appropriate species and locations.",
        "Get permission before planting.",
        "Create a long-term maintenance plan.",
      ],
    },
  ],
  takeaways: [
    "Urban trees can provide shade and habitat.",
    "Trees interact with local soil and water systems.",
    "Successful planting requires careful species and site selection.",
    "Long-term maintenance is essential.",
  ],
  discussionQuestions: [
    "Where does your community lack shade?",
    "Which trees are appropriate for your local environment?",
    "Who would maintain trees after a planting project?",
  ],
  relatedArticleSlugs: [
    "protecting-local-biodiversity",
    "building-a-sustainable-school",
  ],
},
{
  id: "article-plastic-pollution",
  slug: "plastic-pollution-beyond-the-bottle",
  title: "Plastic Pollution: Beyond the Bottle",
  subtitle:
    "Understanding single-use plastics, microplastics, waste systems, and the importance of reducing unnecessary consumption.",
  description:
    "Explore how plastic moves through our communities and why reducing disposable products matters.",
  category: "Waste and Recycling",
  difficulty: "Intermediate",
  author: "Give Earth a Smile Education Team",
  authorRole: "Environmental Education",
  publishedDate: "September 2025",
  readingTime: 9,
  coverImage: "/images/education/biodiversity.jpg",
  featured: false,
  tags: [
    "Plastic",
    "Pollution",
    "Waste",
    "Microplastics",
  ],
  sections: [
    {
      id: "why-plastic",
      title: "Why We Use So Much Plastic",
      paragraphs: [
        "Plastic can be lightweight, durable, inexpensive, and useful for many applications. Those properties have helped make plastic common in packaging, transportation, healthcare, construction, and everyday products.",
        "However, durability becomes a challenge when products designed for very short periods of use remain in the environment much longer.",
      ],
      keyPoints: [
        "Plastic has many useful properties.",
        "Short-lived products can create long-lived waste.",
        "Not all plastic products serve the same purpose.",
      ],
    },
    {
      id: "where-it-goes",
      title: "Where Plastic Waste Goes",
      paragraphs: [
        "After use, plastic may be reused, recycled where appropriate systems exist, disposed of in landfills, burned under regulated waste systems, or escape into the environment as litter.",
        "Waste management differs significantly between communities, so the environmental outcome of a plastic item depends partly on local infrastructure.",
      ],
    },
    {
      id: "microplastics",
      title: "Understanding Microplastics",
      paragraphs: [
        "Plastic can break into increasingly small pieces rather than simply disappearing. Very small plastic particles are often described as microplastics.",
        "Researchers continue to study how these particles move through water, soil, air, ecosystems, and food systems.",
      ],
      keyPoints: [
        "Plastic can fragment into smaller pieces.",
        "Plastic pollution can move between environments.",
        "Preventing pollution is easier than recovering tiny fragments later.",
      ],
    },
    {
      id: "reduce-disposables",
      title: "Reducing Unnecessary Plastic",
      paragraphs: [
        "Students can identify disposable products that have practical reusable alternatives, encourage responsible waste disposal, and participate in organized cleanups.",
        "Reducing unnecessary consumption addresses waste before it is created and should accompany, rather than be replaced by, recycling efforts.",
      ],
      keyPoints: [
        "Avoid unnecessary single-use products when practical.",
        "Use local recycling rules correctly.",
        "Prevent litter before it reaches natural environments.",
      ],
    },
  ],
  takeaways: [
    "Plastic is useful but can create persistent waste.",
    "Plastic waste has different outcomes depending on local systems.",
    "Plastic can break into very small particles.",
    "Waste prevention is an important part of addressing plastic pollution.",
  ],
  discussionQuestions: [
    "Which disposable plastics do you use most often?",
    "Which could realistically be replaced?",
    "Where does litter in your community tend to accumulate?",
  ],
  relatedArticleSlugs: [
    "understanding-recycling",
    "protecting-local-biodiversity",
  ],
},
{
  id: "article-community-cleanup",
  slug: "planning-effective-community-cleanup",
  title: "How to Plan an Effective Community Cleanup",
  subtitle:
    "Turning a one-day cleanup into a thoughtful project that identifies waste problems and supports lasting community action.",
  description:
    "Learn how community cleanups can combine service, data collection, education, and long-term waste prevention.",
  category: "Community Action",
  difficulty: "Beginner",
  author: "Give Earth a Smile Education Team",
  authorRole: "Youth Outreach",
  publishedDate: "August 2025",
  readingTime: 8,
  coverImage: "/images/education/biodiversity.jpg",
  featured: false,
  tags: [
    "Community Cleanup",
    "Litter",
    "Service",
    "Youth Action",
  ],
  sections: [
    {
      id: "purpose",
      title: "More Than Picking Up Litter",
      paragraphs: [
        "A cleanup can immediately improve a shared space, but it can also help students understand why waste accumulates in particular locations.",
        "Instead of treating every cleanup as an isolated event, organizers can observe what they collect and use that information to think about longer-term prevention.",
      ],
      keyPoints: [
        "Cleanups can combine service and environmental education.",
        "Observations can reveal patterns in local waste.",
        "Prevention should be part of the long-term goal.",
      ],
    },
    {
      id: "choose-location",
      title: "Choose a Location Responsibly",
      paragraphs: [
        "Organizers should receive permission from the appropriate property owner, school, park authority, or community organization before conducting a cleanup.",
        "The site should also be evaluated for hazards. Volunteers should not handle dangerous, sharp, chemical, medical, or otherwise unsafe waste and should follow the supervising organization's safety procedures.",
      ],
      keyPoints: [
        "Get permission before organizing a cleanup.",
        "Work with responsible adults or organizations on safety planning.",
        "Do not handle hazardous materials.",
      ],
    },
    {
      id: "collect-information",
      title: "Learn From What You Find",
      paragraphs: [
        "Participants can record broad categories of ordinary litter without handling unsafe materials. For example, they might compare the amount of food packaging, bottles, paper, or other common waste.",
        "Patterns can help communities think about whether additional bins, better signs, public education, or waste-reduction efforts could address the source of the problem.",
      ],
    },
    {
      id: "after-cleanup",
      title: "What Happens After the Cleanup?",
      paragraphs: [
        "A strong project does not necessarily end when the cleanup is finished. Students can share what they learned and work with local partners to explore ways to prevent litter from returning.",
        "Photographs, general waste observations, volunteer participation, and follow-up observations can help document the project's impact.",
      ],
      keyPoints: [
        "Share results with the community.",
        "Look for causes rather than only symptoms.",
        "Follow up to see whether conditions improve.",
      ],
    },
  ],
  takeaways: [
    "Community cleanups can combine service with environmental learning.",
    "Permission and safety planning are essential.",
    "Observing ordinary waste patterns can help identify possible causes.",
    "Long-term prevention can make cleanup projects more meaningful.",
  ],
  discussionQuestions: [
    "Where does litter accumulate in your community?",
    "What might be causing it?",
    "How could students prevent some of that waste from appearing again?",
  ],
  relatedArticleSlugs: [
    "understanding-recycling",
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
export function getPublishedEducationArticles(): EducationArticle[] {
  return educationArticles;
}

export function getFeaturedEducationArticles(
  limit = 3,
): EducationArticle[] {
  return educationArticles
    .filter((article) => article.featured)
    .slice(0, limit);
}

export function getEducationArticleBySlug(
  slug: string,
): EducationArticle | null {
  return (
    educationArticles.find(
      (article) => article.slug === slug,
    ) ?? null
  );
}

export function getRelatedEducationArticles(
  article: EducationArticle,
  limit = 3,
): EducationArticle[] {
  return educationArticles
    .filter(
      (candidateArticle) =>
        candidateArticle.slug !== article.slug &&
        (candidateArticle.category === article.category ||
          candidateArticle.relatedArticleSlugs.includes(article.slug)),
    )
    .slice(0, limit);
}

export function searchEducationArticles(
  search: string,
  category?: EducationCategory | "all",
): EducationArticle[] {
  const normalizedSearch = search
    .trim()
    .toLowerCase();

  return educationArticles.filter((article) => {
    const matchesCategory =
      !category ||
      category === "all" ||
      article.category === category;

    const searchableText = [
      article.title,
      article.subtitle,
      article.description,
      article.author,
      article.authorRole,
      ...article.tags,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      normalizedSearch.length === 0 ||
      searchableText.includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });
}
