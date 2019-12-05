// Data for the Fa19 CCL Project
const name = "CommunityConnect Labs";
const id = "ccl";
const detail = "How might we help parse the census data to provide the nonprofit with much more reliable response data to showcase to their clients?";
const coverImagePath = "/static/images/projects/ccl/cover.jpg";
const clientDetail =
  "CommunityConnect Labs is a nonprofit that seeks to help nonprofits and local governments and municipalities communicate with hard-to-reach populations of their audiences. In particular, they take advantage of the fact that 90% of people have a mobile phone, where 95% of texts are read within 3 minutes of sending. This not only increases the likelihood of someone responding to a survey, but also utilizes a much more approachable format for gathering user data.";
const clientLink =
  "https://www.communityconnectlabs.com";
const previousLink = null;
const clientFeatures = null;
const problem =
  "The main pain point is that although the Census provides tons of data about response rates, not many conclusions can be drawn from it due to the lack of resources CCL has. They are limited to a small subset of responses (17.5k) out of the 300+ million people living in the United States today. CCL would be able to provide their clients much more reliable response data if they can parse this multitude of data into a readable and understandable display. In addition, even if the data is parsed correctly, there is no easy way for CCL or their clients to compare the data they are getting for each tract. When a census or survey planner is determining which resources to allocate where, they need to be able to have a “summary view” of all of the places they are concerned with.";
const problemImagePath = "/static/images/projects/ccl/problem.jpeg";
const solution =
  "We are creating a publicly available tool with an easily understandable geospatial visualization interface that provides analysis of the large census dataset to increase CCL’s response rate. CCL’s clients should be able to use this tool to make calculated judgments about a tract’s response rate when putting demographics, historical data, and location. They should also be able to make conclusions about a tract’s response rate in the future based on trends in historical data.";
const solutionImagePath = "/static/images/projects/ccl/solution.jpg";
const features = null;

const featureImgSize = "4";
const techStack = ["react", "flask", "mongodb", "mapbox"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = "https://github.com/hack4impact-uiuc/communityconnect-labs";
const team = {
  type: "pics",
  detail: [
    {
      name: "Betty Shen",
      role: "Product Manager"
    },
    {
      name: "Kelley Chau",
      role: "Tech Lead"
    },
    {
      name: "Brandon Wang",
      role: "Software Developer"
    },
    {
      name: "Megha Mallya",
      role: "Software Developer"
    },
    {
      name: "Danielle Yang",
      role: "Software Developer"
    },
    {
      name: "Alan Ren",
      role: "Software Developer"
    },
    {
        name: "Yousef Ahmed",
        role: "Software Developer"
      },
    {
      name: "Phillip Kuo",
      role: "UI/UX Designer"
    }
  ]
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
  featureImgSize
};
