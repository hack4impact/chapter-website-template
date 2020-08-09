// Data for the Fa19 LAH Project (SEMESTER ONE DATA NO LONGER IN USE, refer to SP20 LAH for latest page)
const name = "Life After Hate";
const id = null;
const detail =
  "How might we build a centralized platform that allows for more efficient lookup and storage of ExitUSA™ program resources?";
const coverImagePath = "/static/images/projects/lah/cover.jpeg";
const clientDetail =
  "Founded and run by former hate group members who have led successful post-movement lives, ExitUSA™ provides support to individuals who are looking to leave racism and violence behind. The organization uses a variety of strategies, including public awareness campaigns, individualized education and job training programs, and leveraging strategic community partnerships to help individuals get their lives back on track and on their way to making positive contributions to society.";
const clientLink = "https://www.lifeafterhate.org";
const previousLink = null;
const clientFeatures = [
  {
    title: "Number of Supporters",
    detail: "30K+",
  },
  {
    title: "Men and Women helped",
    detail: "150+",
  },
  {
    title: "Formers Actively Involved",
    detail: "50+",
  },
];
const problem =
  "Often, LAH members and ExitUSA™ volunteers receive resource requests for specific services from service recipients. These requests can range from mental health support to tattoo removal to housing services. Resources are stored in individual staff emails, in LAH’s online ticketing system Supportbee, and in Smartsheets; therefore, when a referral needs to be made or a crisis occurs with an existing or new service recipient, they can lose precious time trying to track down resources. These referrals can take as long as days, and in time-sensitive scenarios LAH loses the ability to provide the logistical support that ExitUSA™ service recipients need.";
const problemImagePath = "/static/images/projects/lah/lah-problem.png";
const solution =
  "We’re trying to build a centralized platform that allows for more efficient lookup and storage of ExitUSA™ program resources. Resources include contact information, vetting documentation, location (i.e which of the 10 standard federal regions they are located, address, state, county, and city), industry, description with any prior contact, link to website as applicable, year relationship established, and Life After Hate point of contact. Staff need a centralized location with all necessary information to assure they can quickly access needed details when conducting case management and face-to-face interventions. Data needs to be secured and location-restricted with account privileges such that only staff and volunteers can access resource data relevant to their needs.";
const solutionImagePath = "/static/images/projects/lah/lah-solution.png";
const features = null;

const featureImgSize = "7";
const techStack = ["react", "nodejs", "mongodb"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = "https://github.com/hack4impact-uiuc/life-after-hate";
const team = {
  type: "pics",
  detail: [
    {
      name: "Alan Fang",
      role: "Product Manager",
    },
    {
      name: "Josh Byster",
      role: "Tech Lead",
    },
    {
      name: "Lauren Ho",
      role: "Software Developer",
    },
    {
      name: "Albert Cao",
      role: "Software Developer",
    },
    {
      name: "Alice Fang",
      role: "Software Developer",
    },
    {
      name: "Gene Wang",
      role: "Software Developer",
    },
    {
      name: "Rebecca Xun",
      role: "Software Developer",
    },
    {
      name: "Evan Eckels",
      role: "Product Designer",
    },
  ],
};

export default {
  name,
  id,
  detail,
  coverImagePath,
  clientDetail,
  clientLink,
  clientFeatures,
  problem,
  problemImagePath,
  solution,
  solutionImagePath,
  features,
  techStack,
  quote,
  quoteSource,
  quoteSourceTitle,
  githubLink,
  previousLink,
  team,
  featureImgSize,
};
