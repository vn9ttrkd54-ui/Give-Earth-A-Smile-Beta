export type ImpactLocationType = "ambassador" | "project";

export type ImpactRegion = "United States" | "International";

export type ImpactLocation = {
  id: string;
  type: ImpactLocationType;
  name: string;
  title: string;
  city: string;
  state?: string;
  country: string;
  region: ImpactRegion;
  latitude: number;
  longitude: number;
  description: string;
  image?: string;
  category?: string;
  projectSlug?: string;
};

export const impactLocations: ImpactLocation[] = [
  /*
   * UNITED STATES AMBASSADORS
   *
   * These currently use approximate Florida coordinates.
   * Replace city, state, latitude, and longitude when you receive
   * each ambassador's exact city.
   */

  {
    id: "ambassador-karishma-parghi",
    type: "ambassador",
    name: "Karishma Parghi",
    title: "United States Ambassador",
    city: "Spring",
    state: "Texas",
    country: "United States",
    region: "United States",
    latitude: 30.0799,
    longitude: -95.4172,
    image: "/images/ambassadors/karishma-parghi.jpg",
    description:
      "Representing Give Earth a Smile through youth-led environmental outreach in the United States.",
  },
  {
    id: "ambassador-hasini-leo",
    type: "ambassador",
    name: "Hasini Leo",
    title: "United States Ambassador",
    city: "Austin",
    state: "Texas",
    country: "United States",
    region: "United States",
    latitude: 30.2672,
    longitude: -97.7431,
    image: "/images/ambassadors/hasini-leo.jpg",
    description:
      "Supporting environmental education, service, and youth involvement in the United States.",
  },
  {
    id: "ambassador-aneesh-rao",
    type: "ambassador",
    name: "Aneesh Rao",
    title: "United States Ambassador",
    city: "Murray",
    state: "Utah",
    country: "United States",
    region: "United States",
    latitude: 40.6669,
    longitude: -111.8880,
    image: "/images/ambassadors/aneesh-rao.jpg",
    description:
      "Helping expand Give Earth a Smile's environmental impact and community outreach.",
  },
  {
    id: "ambassador-anirudh-selvam",
    type: "ambassador",
    name: "Anirudh Selvam",
    title: "United States Ambassador",
    city: "Miami",
    state: "Florida",
    country: "United States",
    region: "United States",
    latitude: 25.7617,
    longitude: -80.1918,
    image: "/images/ambassadors/anirudh-selvam.jpg",
    description:
      "Representing the organization through environmental service and youth leadership.",
  },
  {
    id: "ambassador-dakshin-sachindra",
    type: "ambassador",
    name: "Dakshin Sachindra",
    title: "United States Ambassador",
    city: "Chicago",
    state: "Illinois",
    country: "United States",
    region: "United States",
    latitude: 41.8781,
    longitude: -87.6298,
    image: "/images/ambassadors/dakshin-sachindra.jpg",
    description:
      "Supporting youth-led environmental initiatives and local community service.",
  },
  {
    id: "ambassador-harrison-maser",
    type: "ambassador",
    name: "Harrison Maser",
    title: "United States Ambassador",
    city: "Scottsbluff",
    state: "Nebraska",
    country: "United States",
    region: "United States",
    latitude: 41.8666,
    longitude: -103.6672,
    image: "/images/ambassadors/harrison-maser.jpg",
    description:
      "Helping connect students with environmental education and volunteer opportunities.",
  },
  {
    id: "ambassador-jack-huang",
    type: "ambassador",
    name: "Jack Huang",
    title: "United States Ambassador",
    city: "Irvine",
    state: "California",
    country: "United States",
    region: "United States",
    latitude: 33.6846,
    longitude: -117.8265,
    image: "/images/ambassadors/jack-huang.jpg",
    description:
      "Promoting environmental awareness and action within the United States.",
  },
  {
    id: "ambassador-zihan-ye",
    type: "ambassador",
    name: "Zihan Ye",
    title: "United States Ambassador",
    city: "Queens",
    state: "New York",
    country: "United States",
    region: "United States",
    latitude: 40.7282,
    longitude: -73.7949,
    image: "/images/ambassadors/zihan-ye.jpg",
    description:
      "Supporting environmental outreach, service, and international collaboration.",
  },
  {
    id: "ambassador-aaron-kao",
    type: "ambassador",
    name: "Aaron Kao",
    title: "United States Ambassador",
    city: "Pleasanton",
    state: "California",
    country: "United States",
    region: "United States",
    latitude: 37.6624,
    longitude: -121.8747,
    image: "/images/ambassadors/aaron-kao.jpg",
    description:
      "Helping students become involved in meaningful environmental initiatives.",
  },
  {
    id: "ambassador-aiden-matthew",
    type: "ambassador",
    name: "Aiden Matthew",
    title: "United States Ambassador",
    city: "Tampa",
    state: "Florida",
    country: "United States",
    region: "United States",
    latitude: 27.9506,
    longitude: -82.4572,
    image: "/images/ambassadors/aiden-matthew.jpg",
    description:
      "Representing Give Earth a Smile through community and environmental service.",
  },
  {
    id: "ambassador-ellie-kong",
    type: "ambassador",
    name: "Ellie Kong",
    title: "United States Ambassador",
    city: "Weston",
    state: "Florida",
    country: "United States",
    region: "United States",
    latitude: 26.1004,
    longitude: -80.3998,
    image: "/images/ambassadors/ellie-kong.jpg",
    description:
      "Supporting Give Earth a Smile's mission through outreach and environmental action.",
  },
  {
    id: "ambassador-rianna-patel",
    type: "ambassador",
    name: "Rianna Patel",
    title: "United States Ambassador",
    city: "Boston",
    state: "Massachusetts",
    country: "United States",
    region: "United States",
    latitude: 42.3601,
    longitude: -71.0589,
    image: "/images/ambassadors/rianna-patel.jpg",
    description:
      "..."
  }, 

  /*
   * INTERNATIONAL AMBASSADORS
   *
   * Coordinates represent approximate city or country locations.
   * Update them whenever you receive more specific information.
   */

  {
    id: "ambassador-kejsi-papis",
    type: "ambassador",
    name: "Kejsi Papis",
    title: "International Ambassador",
    city: "Tirana",
    country: "Albania",
    region: "International",
    latitude: 41.3275,
    longitude: 19.8187,
    image: "/images/ambassadors/kejsi-papis.jpg",
    description:
      "Representing Give Earth a Smile and supporting environmental outreach in Albania.",
  },
  {
    id: "ambassador-jiatong-wu",
    type: "ambassador",
    name: "Jiatong Wu",
    title: "International Ambassador",
    city: "Guangzhou",
    country: "China",
    region: "International",
    latitude: 23.1291,
    longitude: 113.2644,
    image: "/images/ambassadors/jiatong-wu.jpg",
    description:
      "Supporting international environmental education and youth collaboration in China.",
  },
  {
    id: "ambassador-ahmad-haneef",
    type: "ambassador",
    name: "Ahmad Haneef Ezra Bin Ahmad Fadzil",
    title: "International Ambassador",
    city: "Kuala Lumpur",
    country: "Malaysia",
    region: "International",
    latitude: 3.139,
    longitude: 101.6869,
    image: "/images/ambassadors/ahmad-haneef.jpg",
    description:
      "Representing the organization through environmental leadership and outreach in Malaysia.",
  },
  {
    id: "ambassador-raul-victor",
    type: "ambassador",
    name: "Raul Victor Magalhães Souza",
    title: "International Ambassador",
    city: "Ceará",
    country: "Brazil",
    region: "International",
    latitude: -5.4984,
    longitude: -39.3206,
    image: "/images/ambassadors/raul-victor.jpg",
    description:
      "Supporting Give Earth a Smile's international environmental network in Brazil.",
  },
  {
    id: "ambassador-yi-han-lu",
    type: "ambassador",
    name: "Yi-Han Lu",
    title: "International Ambassador",
    city: "Taipei",
    country: "Taiwan",
    region: "International",
    latitude: 25.033,
    longitude: 121.5654,
    image: "/images/ambassadors/yi-han-lu.jpg",
    description:
      "Supporting environmental outreach and international youth collaboration in Taiwan.",
  },
  {
    id: "ambassador-ashwanth-shivakumar",
    type: "ambassador",
    name: "Ashwanth Shivakumar",
    title: "International Ambassador",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    region: "International",
    latitude: 13.0827,
    longitude: 80.2707,
    image: "/images/ambassadors/ashwanth-shivakumar.jpg",
    description:
      "Representing Give Earth a Smile through environmental outreach in Tamil Nadu, India.",
  },
  {
    id: "ambassador-robert-mhango",
    type: "ambassador",
    name: "Robert Mhango",
    title: "International Ambassador",
    city: "Lilongwe",
    country: "Malawi",
    region: "International",
    latitude: -13.0,
    longitude: 33.0,
    image: "/images/ambassadors/robert-mhango.jpg",
    description:
      "Supporting community-centered environmental initiatives and outreach in Malawi.",
  },
  {
    id: "ambassador-logan-lin",
    type: "ambassador",
    name: "Logan Lin",
    title: "International Ambassador",
    city: "Hsinchu",
    country: "Taiwan",
    region: "International",
    latitude: 24.8138,
    longitude: 120.9675,
    image: "/images/ambassadors/logan-lin.jpg",
    description:
      "Helping grow environmental education and youth action in Taiwan.",
  },
  {
    id: "ambassador-carolyn-gao",
    type: "ambassador",
    name: "Carolyn Gao",
    title: "International Ambassador",
    city: "Xi'an",
    country: "China",
    region: "International",
    latitude: 34.3416,
    longitude: 108.9398,
    image: "/images/ambassadors/carolyn-gao.jpg",
    description:
      "Supporting international environmental projects and student involvement in Taiwan.",
  },
  {
    id: "ambassador-jerry-lee",
    type: "ambassador",
    name: "Jerry Lee",
    title: "International Ambassador",
    city: "Seoul",
    country: "South Korea",
    region: "International",
    latitude: 37.5665,
    longitude: 126.9780,
    image: "/images/ambassadors/jerry-lee.jpg",
    description:
      "Representing Give Earth a Smile through environmental service and outreach in Taiwan.",
  },
  {
    id: "ambassador-cathy-zhang",
    type: "ambassador",
    name: "Cathy Zhang",
    title: "International Ambassador",
    city: "Sydney",
    country: "Australia",
    region: "International",
    latitude: -33.8688,
    longitude: 151.2093,
    image: "/images/ambassadors/cathy-zhang.jpg",
    description:
      "Supporting the organization's youth-led environmental mission in Taiwan.",
  },
  {
    id: "ambassador-chloe-cheng",
    type: "ambassador",
    name: "Chloe Cheng",
    title: "International Ambassador",
    city: "Taichung",
    country: "Taiwan",
    region: "International",
    latitude: 24.1477,
    longitude: 120.6736,
    image: "/images/ambassadors/chloe-cheng.jpg",
    description:
      "Helping expand environmental education and youth collaboration in Taiwan.",
  },
  {
  id: "ambassador-indira-priyadarshini",
  type: "ambassador",
  name: "Indira Priyadarshini",
  title: "International Ambassador",
  city: "Bhubaneswar",
  state: "Odisha",
  country: "India",
  region: "International",
  latitude: 20.2961,
  longitude: 85.8245,
  image: "/images/ambassadors/indira-priyadarshini.jpg",
  description:
    "..."
  },
  {
  id: "ambassador-prasant-mohanty",
  type: "ambassador",
  name: "Prasant Mohanty",
  title: "International Ambassador",
  city: "Bengaluru",
  state: "Karnataka",
  country: "India",
  region: "International",
  latitude: 12.9716,
  longitude: 77.5946,
  image: "/images/ambassadors/prasant-mohanty.jpg",
  description:
    "..."
  },

  

  /*
   * PROJECT LOCATIONS
   */

  {
    id: "project-taiwan-summer-camp",
    type: "project",
    name: "Taiwan Environmental Summer Camp",
    title: "International Education Project",
    city: "Taiwan",
    country: "Taiwan",
    region: "International",
    latitude: 23.6978,
    longitude: 120.9605,
    image: "/images/ambassadors/karishma-parghi.jpg",
    description:
      "A youth-led summer program introducing students to environmental awareness, sustainability, and international service.",
    category: "Environmental Education",
    projectSlug: "taiwan-environmental-summer-camp",
  },
  {
    id: "project-orlando-community-cleanup",
    type: "project",
    name: "Community Cleanup Initiative",
    title: "Community Service Project",
    city: "Orlando",
    state: "Florida",
    country: "United States",
    region: "United States",
    latitude: 28.5383,
    longitude: -81.3792,
    image: "/images/ambassadors/karishma-parghi.jpg",
    description:
      "A local environmental service initiative focused on improving shared community spaces.",
    category: "Community Service",
    projectSlug: "community-cleanup-initiative",
  },
  {
    id: "project-malawi-environmental-outreach",
    type: "project",
    name: "Malawi Environmental Outreach",
    title: "International Outreach Project",
    city: "Lilongwe",
    country: "Malawi",
    region: "International",
    latitude: -13.92,
    longitude: 33.81,
    image: "/images/ambassadors/karishma-parghi.jpg",
    description:
      "A developing international initiative supporting environmental education and community engagement in Malawi.",
    category: "International Outreach",
    projectSlug: "malawi-environmental-outreach",
  },
  {
  id: "project-smart-classrooms-odisha",
  type: "project",
  name: "Smart Classrooms in Odisha",
  title: "Technology-Enabled Education Project",
  city: "Jagatsinghpur",
  state: "Odisha",
  country: "India",
  region: "International",
  latitude: 20.2700,
  longitude: 86.1700,
  description:
    "A technology-enabled smart classroom established at Saraswati Sishu Vidya Mandira, serving more than 300 students across 10 classes.",
  category: "Education",
  projectSlug: "smart-classrooms-odisha",
  image:
    "/images/projects/smart-classrooms-odisha/01.jpg",
  },
];

export const impactCountries = Array.from(
  new Set(impactLocations.map((location) => location.country)),
).sort((countryA, countryB) => countryA.localeCompare(countryB));