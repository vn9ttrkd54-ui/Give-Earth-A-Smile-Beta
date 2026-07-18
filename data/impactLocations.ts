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
    city: "Florida",
    state: "Florida",
    country: "United States",
    region: "United States",
    latitude: 28.5383,
    longitude: -81.3792,
    description:
      "Representing Give Earth a Smile through youth-led environmental outreach in the United States.",
  },
  {
    id: "ambassador-hasini-leo",
    type: "ambassador",
    name: "Hasini Leo",
    title: "United States Ambassador",
    city: "Florida",
    state: "Florida",
    country: "United States",
    region: "United States",
    latitude: 28.57,
    longitude: -81.43,
    description:
      "Supporting environmental education, service, and youth involvement in the United States.",
  },
  {
    id: "ambassador-aneesh-rao",
    type: "ambassador",
    name: "Aneesh Rao",
    title: "United States Ambassador",
    city: "Florida",
    state: "Florida",
    country: "United States",
    region: "United States",
    latitude: 28.5,
    longitude: -81.32,
    description:
      "Helping expand Give Earth a Smile's environmental impact and community outreach.",
  },
  {
    id: "ambassador-anirudh-selvam",
    type: "ambassador",
    name: "Anirudh Selvam",
    title: "United States Ambassador",
    city: "Florida",
    state: "Florida",
    country: "United States",
    region: "United States",
    latitude: 28.61,
    longitude: -81.35,
    description:
      "Representing the organization through environmental service and youth leadership.",
  },
  {
    id: "ambassador-dakshin-sachindra",
    type: "ambassador",
    name: "Dakshin Sachindra",
    title: "United States Ambassador",
    city: "Florida",
    state: "Florida",
    country: "United States",
    region: "United States",
    latitude: 28.46,
    longitude: -81.42,
    description:
      "Supporting youth-led environmental initiatives and local community service.",
  },
  {
    id: "ambassador-harrison-maser",
    type: "ambassador",
    name: "Harrison Maser",
    title: "United States Ambassador",
    city: "Florida",
    state: "Florida",
    country: "United States",
    region: "United States",
    latitude: 28.55,
    longitude: -81.27,
    description:
      "Helping connect students with environmental education and volunteer opportunities.",
  },
  {
    id: "ambassador-jack-huang",
    type: "ambassador",
    name: "Jack Huang",
    title: "United States Ambassador",
    city: "Florida",
    state: "Florida",
    country: "United States",
    region: "United States",
    latitude: 28.42,
    longitude: -81.36,
    description:
      "Promoting environmental awareness and action within the United States.",
  },
  {
    id: "ambassador-zihan-ye",
    type: "ambassador",
    name: "Zihan Ye",
    title: "United States Ambassador",
    city: "Florida",
    state: "Florida",
    country: "United States",
    region: "United States",
    latitude: 28.65,
    longitude: -81.45,
    description:
      "Supporting environmental outreach, service, and international collaboration.",
  },
  {
    id: "ambassador-aaron-kao",
    type: "ambassador",
    name: "Aaron Kao",
    title: "United States Ambassador",
    city: "Florida",
    state: "Florida",
    country: "United States",
    region: "United States",
    latitude: 28.37,
    longitude: -81.29,
    description:
      "Helping students become involved in meaningful environmental initiatives.",
  },
  {
    id: "ambassador-aiden-matthew",
    type: "ambassador",
    name: "Aiden Matthew",
    title: "United States Ambassador",
    city: "Florida",
    state: "Florida",
    country: "United States",
    region: "United States",
    latitude: 28.68,
    longitude: -81.31,
    description:
      "Representing Give Earth a Smile through community and environmental service.",
  },
  {
    id: "ambassador-kevin-zhang",
    type: "ambassador",
    name: "Kevin Zhang",
    title: "United States Ambassador",
    city: "Florida",
    state: "Florida",
    country: "United States",
    region: "United States",
    latitude: 28.4,
    longitude: -81.48,
    description:
      "Advancing youth environmental leadership and community participation.",
  },
  {
    id: "ambassador-ellie-kong",
    type: "ambassador",
    name: "Ellie Kong",
    title: "United States Ambassador",
    city: "Florida",
    state: "Florida",
    country: "United States",
    region: "United States",
    latitude: 28.59,
    longitude: -81.23,
    description:
      "Supporting Give Earth a Smile's mission through outreach and environmental action.",
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
    description:
      "Representing Give Earth a Smile and supporting environmental outreach in Albania.",
  },
  {
    id: "ambassador-jiatong-wu",
    type: "ambassador",
    name: "Jiatong Wu",
    title: "International Ambassador",
    city: "China",
    country: "China",
    region: "International",
    latitude: 31.2304,
    longitude: 121.4737,
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
    description:
      "Representing the organization through environmental leadership and outreach in Malaysia.",
  },
  {
    id: "ambassador-raul-victor",
    type: "ambassador",
    name: "Raul Victor Magalhães Souza",
    title: "International Ambassador",
    city: "Brazil",
    country: "Brazil",
    region: "International",
    latitude: -15.7939,
    longitude: -47.8828,
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
    latitude: -13.9626,
    longitude: 33.7741,
    description:
      "Supporting community-centered environmental initiatives and outreach in Malawi.",
  },
  {
    id: "ambassador-logan-lin",
    type: "ambassador",
    name: "Logan Lin",
    title: "International Ambassador",
    city: "Taiwan",
    country: "Taiwan",
    region: "International",
    latitude: 24.8138,
    longitude: 120.9675,
    description:
      "Helping grow environmental education and youth action in Taiwan.",
  },
  {
    id: "ambassador-carolyn-gao",
    type: "ambassador",
    name: "Carolyn Gao",
    title: "International Ambassador",
    city: "Taiwan",
    country: "Taiwan",
    region: "International",
    latitude: 24.1477,
    longitude: 120.6736,
    description:
      "Supporting international environmental projects and student involvement in Taiwan.",
  },
  {
    id: "ambassador-jerry-lee",
    type: "ambassador",
    name: "Jerry Lee",
    title: "International Ambassador",
    city: "Taiwan",
    country: "Taiwan",
    region: "International",
    latitude: 22.6273,
    longitude: 120.3014,
    description:
      "Representing Give Earth a Smile through environmental service and outreach in Taiwan.",
  },
  {
    id: "ambassador-cathy-zhang",
    type: "ambassador",
    name: "Cathy Zhang",
    title: "International Ambassador",
    city: "Taiwan",
    country: "Taiwan",
    region: "International",
    latitude: 25.1276,
    longitude: 121.7392,
    description:
      "Supporting the organization's youth-led environmental mission in Taiwan.",
  },
  {
    id: "ambassador-chloe-cheng",
    type: "ambassador",
    name: "Chloe Cheng",
    title: "International Ambassador",
    city: "Taiwan",
    country: "Taiwan",
    region: "International",
    latitude: 23.4801,
    longitude: 120.4491,
    description:
      "Helping expand environmental education and youth collaboration in Taiwan.",
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
    description:
      "A developing international initiative supporting environmental education and community engagement in Malawi.",
    category: "International Outreach",
    projectSlug: "malawi-environmental-outreach",
  },
];

export const impactCountries = Array.from(
  new Set(impactLocations.map((location) => location.country)),
).sort((countryA, countryB) => countryA.localeCompare(countryB));