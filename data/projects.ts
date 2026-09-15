export type ProjectStatus =
  | "Planning"
  | "Active"
  | "Ongoing"
  | "Completed";

export type ProjectCategory =
  | "Education"
  | "Environment"
  | "Humanitarian"
  | "Community"
  | "International";

export type ProjectStatistic = {
  value: string;
  secondaryValue?: string;
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
      "https://res.cloudinary.com/otmypjmz/image/upload/v1785049566/cover_l8tbni.jpg",

    featured: true,

    gallery: [
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785048825/01_bfemad.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785048847/02_zjz9at.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785048875/03_dvnmzp.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785048884/04_p13x7j.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785048900/05_szhm5g.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785048908/06_ihjvbm.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785048915/07_n9ffk9.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785048921/08_mu2jhf.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785049497/09_hwucxw.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785049505/10_omatwo.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785049512/11_n4itz4.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785049522/12_mv2fpp.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785049540/13_mclien.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785049549/14_mvanzw.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785049558/15_pnsql1.jpg",
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
      "https://res.cloudinary.com/otmypjmz/image/upload/v1785090858/cover_mc0xsr.png",

    featured: true,

    gallery: [
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785090570/01_u5ktg8.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785090616/02_d24oq6.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785090642/03_zqo443.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785090673/04_ifqcsq.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785090711/05_lofkxy.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785090742/06_lcbweb.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785090755/07_t1bmz3.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785090768/08_ndysdc.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785090781/09_optd8u.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785090796/10_vfflir.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785090808/11_kbigxo.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785090822/12_yokfc9.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785090841/13_dggmvg.png",
    ],

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
  In Spring 2026, Give Earth a Smile launched Seeds for Change, a three-day environmental education initiative at Bwiba Full Primary School in the rural Karonga District of Malawi. With approximately 461,000 Malawian Kwacha ($266 USD) raised, the project brought together students and educators to explore the importance of water conservation and environmental responsibility.

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
      "https://res.cloudinary.com/otmypjmz/image/upload/v1785132602/cover_uohmxu.jpg",

    featured: true,

    gallery: [
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097657/01_lz5yc4.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097673/02_x6rid7.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097684/03_ngeiww.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097697/04_atqunb.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097709/05_rmkg8t.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097721/06_b3q8q5.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097732/07_mkavhf.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097743/08_dqpl0e.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097756/09_kotk1x.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097769/10_ufl65i.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097805/11_eoeg8r.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097816/12_vvtyk3.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097832/13_my2thf.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097853/14_bnqnvb.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097864/15_zfmmyv.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097877/16_zr9qt1.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097889/17_jzriei.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097900/18_r1mn6q.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097914/19_jr9hx5.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097926/20_cfhlal.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097938/21_m4ovjq.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097951/22_h4fgoe.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097964/23_nwraa9.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097976/24_bxigbz.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785097989/25_ltvjrq.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098000/26_dyllrc.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098010/27_gk8glh.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098021/28_jaekcn.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098037/29_b9cruj.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098051/30_aopgo4.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098065/31_winlqs.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098079/32_mybwwk.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098094/33_ej9abw.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098108/34_uxlwew.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098120/35_zcog30.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098132/36_dgkxrj.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098145/37_kvt3x5.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098157/38_wvl00y.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098170/39_bc9nra.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098182/40_dpex6w.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098197/41_let26a.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098210/42_alkba0.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098222/43_l7pjqm.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098238/44_ckw6pc.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098251/45_qtwpaf.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098273/46_rnqmek.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098288/47_vm4syd.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098302/48_s3suac.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098315/49_cllrtm.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785098329/50_hpgrs5.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785132325/51_wmdk0y.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785132367/52_fd7qpj.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785132390/53_jd0vsr.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785132414/54_gh7pkp.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785132428/55_a0jnvy.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785132443/56_w8ynfz.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785132461/57_klkrwy.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785132472/58_rkx1nr.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785132489/59_u6eutx.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785132500/60_tpoofi.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785132519/61_lcg6ok.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785132542/62_tkftsq.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785132564/63_jcxecz.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785132585/64_gtklky.jpg",
    ],

    statistics: [
      {
        value: "461,000 MWK",
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
      "Approximately 461,000 Malawian Kwacha ($266 USD) was raised to support the initiative.",
      "A three-day environmental education program was completed at Bwiba Full Primary School.",
      "30 students participated in interactive environmental education lessons and activities.",
      "Students explored water conservation through storytime, discussion, worksheets, and hands-on learning.",
      "Give Earth a Smile developed interactive worksheets specifically for the program.",
      "Students created their own water conservation action plans.",
      "Students were encouraged to apply environmental lessons within their homes and communities.",
    ],
  },
  {
    id: "seeds-for-change-taiwan",
    slug: "seeds-for-change-taiwan",

    title: "Seeds for Change in Taiwan",

    subtitle:
      "Empowering students through environmental restoration, sustainable agriculture, and hands-on action.",

    shortDescription:
      "A hands-on environmental restoration initiative in Gaoshu Township, Pingtung County, where students planted more than 80 banana trees while learning about sustainable agriculture and regenerative farming.",

    description: `
  As part of Give Earth a Smile's Seeds for Change initiative, students in Gaoshu Township, Pingtung County, Taiwan came together for a hands-on environmental restoration project at a rural farm. The project provided students with the opportunity to move beyond learning about environmental sustainability and actively contribute to creating a greener future.

  Working alongside local students, participants planted 80+ banana trees while learning about sustainable agriculture and regenerative farming practices. Through this hands-on experience, students were able to see firsthand how responsible agricultural practices can support environmental health and contribute to the long-term sustainability of local communities.

  The project aimed to connect environmental education with meaningful action. By participating directly in the planting process, students gained practical experience while developing a deeper understanding of their relationship with the environment and the role they can play in protecting it.

  Seeds for Change in Taiwan reflects Give Earth a Smile's belief that young people should not only learn about environmental challenges but also be empowered to become part of the solution. By creating opportunities for students to engage directly with their communities and the natural environment, we hope to inspire a generation of environmentally conscious leaders who are ready to take action for a more sustainable future.
    `.trim(),
  
    location: "Gaoshu Township, Pingtung County",
    country: "Taiwan",

    category: "Environment",
    status: "Completed",

    startDate: "Spring 2024",
    endDate: "Spring 2024",

    coverImage:
      "https://res.cloudinary.com/otmypjmz/image/upload/v1785095932/cover_gemlxv.jpg",

    featured: false,

    gallery: [
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095471/01_udum87.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095500/02_hotwkn.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095506/03_pymfbc.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095516/04_e1wzkg.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095526/05_ttt9pz.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095535/06_owncnp.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095547/07_dqx8oq.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095559/08_kxqmhf.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095572/09_xffpbf.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095583/10_rprupq.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095594/11_cfxys8.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095619/12_razipu.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095635/13_uvzbb3.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095647/14_ojm1rd.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095660/15_d3ec8t.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095678/16_hztos1.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095689/17_t8bqaq.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095706/18_hegkru.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095718/19_fknv1x.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095730/20_yu62yi.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095744/21_rrmtfv.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095759/22_hyt0pg.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095771/23_wevshn.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095785/24_jyebgp.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095798/25_myco0n.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095812/26_ypq60w.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095832/27_a3shaj.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095848/28_xcokfu.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095869/29_zmdloo.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095883/30_bjjujn.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095896/31_rw5yrn.jpg",
      "https://res.cloudinary.com/otmypjmz/image/upload/f_auto,q_auto/v1785095916/32_xt7bps.jpg",
    ],

    statistics: [
      {
        value: "36,000+ NTD",
        secondaryValue: "Approximately $1,200 USD",
        label: "Resources invested",
      },
      {
        value: "80+",
        label: "Banana trees planted",
      },
      {
        value: "Hands-On",
        label: "Environmental restoration",
      },
      {
        value: "Sustainable Agriculture",
        label: "Education and regenerative farming awareness",
      },
    ],

    goals: [
      "Provide students with hands-on opportunities to learn about sustainable agriculture and regenerative farming.",
      "Enable students to actively participate in environmental restoration.",
      "Increase awareness of regenerative farming practices and their role in creating healthier ecosystems.",
      "Help students understand the relationship between agriculture, environmental stewardship, and ecosystem health.",
      "Encourage students to take ownership of environmental action within their communities.",
      "Create opportunities for students to contribute directly to a greener and more sustainable future.",
    ],

    results: [
      "More than 80 banana trees were planted alongside local students.",
      "Students participated directly in hands-on environmental restoration.",
      "Students learned about sustainable agriculture.",
      "Students were introduced to regenerative farming practices.",
      "The project connected environmental education with practical restoration work.",
      "Students gained greater awareness of environmental stewardship and ecosystem health.",
      "More than $1,200 in plants, fertilizer, and other resources supported the project.",
    ],
  },
  {
    id: "project-santa-cruz-beach-cleanup",
    slug: "santa-cruz-beach-cleanup",

    title: "Santa Cruz Beach Cleanup",

    subtitle:
      "Combining environmental education with hands-on action to protect California's coast.",

    shortDescription:
      "Eighteen volunteers began with an educational session before cleaning Main Beach in Santa Cruz, collecting four bags of trash and raising awareness about beach pollution.",

    description: `
Give Earth a Smile organized an education-led cleanup at Main Beach in Santa Cruz, California. The project brought volunteers together to learn about marine litter and take direct action to protect a shared coastal environment.

The event began with an educational session about beach cleanups, including how trash reaches the shoreline, how litter can affect wildlife and ocean health, and how volunteers can collect debris safely and responsibly.

Following the session, 18 volunteers worked together across Main Beach to remove visible litter from the shoreline and surrounding public areas. By the end of the cleanup, the group had collected four bags of trash.

The project extended beyond removing waste. Volunteers also helped spread awareness about trash on beaches, its effects on coastal ecosystems, and the everyday choices that can prevent litter from reaching the ocean.

By connecting education, community service, and public outreach, the Santa Cruz Beach Cleanup demonstrated how informed volunteer action can create an immediate local benefit while encouraging longer-term environmental responsibility.
    `.trim(),

    location: "Main Beach, Santa Cruz, California",
    country: "United States",

    category: "Environment",
    status: "Completed",

    startDate: "2026",
    endDate: "2026",

    coverImage:
      "https://res.cloudinary.com/otmypjmz/image/upload/v1788921197/Screenshot_2026-09-08_at_10.33.11_PM_rruoh2.png",

    featured: false,

    gallery: [
      "https://res.cloudinary.com/otmypjmz/image/upload/v1788921197/Screenshot_2026-09-08_at_10.33.11_PM_rruoh2.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/v1788921335/Screenshot_2026-09-08_at_10.35.26_PM_c1yhsg.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/v1788921325/Screenshot_2026-09-08_at_10.35.16_PM_fqbone.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/v1788921315/Screenshot_2026-09-08_at_10.35.07_PM_mdyhrc.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/v1788921305/Screenshot_2026-09-08_at_10.34.57_PM_ale3cb.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/v1788921296/Screenshot_2026-09-08_at_10.34.48_PM_dnkpgk.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/v1788921287/Screenshot_2026-09-08_at_10.34.37_PM_qoy8zd.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/v1788921276/Screenshot_2026-09-08_at_10.34.28_PM_n2ydnv.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/v1788921265/Screenshot_2026-09-08_at_10.34.18_PM_apy82z.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/v1788921250/Screenshot_2026-09-08_at_10.34.03_PM_mxevww.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/v1788921241/Screenshot_2026-09-08_at_10.33.53_PM_a2kcte.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/v1788921226/Screenshot_2026-09-08_at_10.33.39_PM_dare6s.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/v1788921215/Screenshot_2026-09-08_at_10.33.28_PM_ctcmpb.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/v1788921205/Screenshot_2026-09-08_at_10.33.19_PM_wz91yq.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/v1788921183/Screenshot_2026-09-08_at_10.32.57_PM_iblpej.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/v1788921175/Screenshot_2026-09-08_at_10.32.50_PM_lb0kjo.png",
    ],

    statistics: [
      {
        value: "18",
        label: "Volunteers engaged",
      },
      {
        value: "4 Bags",
        label: "Trash collected",
      },
      {
        value: "1",
        label: "Environmental education session",
      },
      {
        value: "Main Beach",
        label: "Santa Cruz coastline cleaned",
      },
    ],

    goals: [
      "Teach volunteers how beach litter affects wildlife, water quality, and coastal ecosystems.",
      "Prepare volunteers to participate in a safe and organized beach cleanup.",
      "Remove litter from Main Beach before it could remain on the shoreline or enter the ocean.",
      "Raise public awareness about beach pollution and responsible waste disposal.",
      "Connect environmental education with direct, community-based action.",
    ],

    results: [
      "18 volunteers participated in the educational session and cleanup.",
      "Four bags of trash were removed from Main Beach.",
      "Volunteers learned about marine litter and safe cleanup practices.",
      "The project raised awareness about the effects of trash on beaches and coastal ecosystems.",
      "A heavily used public beach benefited from coordinated environmental service.",
    ],
  },
  {
    id: "project-the-re-leaf-project",
    slug: "the-re-leaf-project",

    title: "The Re-Leaf Project",

    subtitle:
      "Making sustainable recycling practices clear, practical, and visible.",

    shortDescription:
      "An ongoing recycling awareness campaign using weekly social media education and 100% recycled campaign cards to help the public understand what to recycle and what not to recycle.",

    description: `
The Re-Leaf Project is an ongoing recycling awareness campaign created to help the public make more informed and sustainable recycling decisions.

Each week, the campaign publishes educational social media content about recycling practices, common sorting mistakes, and the environmental importance of responsible material use.

The project also brings this information into community spaces through recycling facts campaign cards. The cards explain what should and should not be recycled in a clear, accessible format.

Every card is made from 100% recycled paper derived from waste leftover sawmill wood chips. No new trees are harvested during the campaign card-making process, allowing the project materials to demonstrate the same responsible practices promoted by the campaign.

More than 100 cards have been created and distributed. By combining recurring online education with tangible recycled-material resources, The Re-Leaf Project turns recycling awareness into an ongoing public learning effort.
    `.trim(),

    location: "Online and Community Outreach",
    country: "Global",

    category: "Environment",
    status: "Ongoing",

    startDate: "2026",

    coverImage:
      "https://res.cloudinary.com/otmypjmz/image/upload/v1789443699/Screenshot_2026-09-14_at_11.41.32_PM_mds3zj.png",

    featured: false,

    gallery: [
      "https://res.cloudinary.com/otmypjmz/image/upload/v1789443600/Screenshot_2026-09-14_at_11.39.54_PM_ptzm23.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/v1789443592/Screenshot_2026-09-14_at_11.39.45_PM_kquokh.png",
      "https://res.cloudinary.com/otmypjmz/image/upload/v1789443699/Screenshot_2026-09-14_at_11.41.32_PM_mds3zj.png",
    ],

    statistics: [
      {
        value: "100+",
        label: "Recycling facts cards made and distributed",
      },
      {
        value: "100%",
        label: "Recycled paper used for campaign cards",
      },
      {
        value: "No Trees",
        label: "Harvested for campaign cards",
      },
      {
        value: "Weekly",
        label: "Educational social media posts",
      },
    ],

    goals: [
      "Raise public awareness of sustainable recycling practices.",
      "Explain clearly what belongs in recycling and what should be kept out.",
      "Reduce confusion and contamination caused by incorrect recycling decisions.",
      "Provide consistent recycling education through weekly social media content.",
      "Model responsible material use through campaign cards made entirely from recycled paper.",
      "Avoid harvesting new trees for the campaign card-making process.",
    ],

    results: [
      "More than 100 recycling facts cards have been made and distributed.",
      "All campaign cards are made from 100% recycled paper.",
      "The recycled paper is derived from waste leftover sawmill wood chips.",
      "No new trees are harvested to produce the campaign cards.",
      "Weekly social media posts provide ongoing public recycling education.",
      "The campaign explains both what to recycle and what not to recycle.",
      "Give Earth a Smile collaborated with Terracare on the campaign.",
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
