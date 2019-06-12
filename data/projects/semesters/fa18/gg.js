// Fa18 Global Giving Project
const name = "GlobalGiving";
const id = "gg";
const detail =
  "How might we expand Global Giving’s impact and reach on domestic and international nonprofits?";
const coverImagePath = "/static/images/projects/gg/gg-map.png";
const clientDetail =
  "Global Giving seeks to identify nonprofits around the world, creating a central directory of nonprofits. They also aim to connect each nonprofit with the necessary resources, such as connecting them with donors or setting up crowdfunding options to help the nonprofit succeed.";
const clientLink = "https=//www.globalgiving.org/";
const previousLink = null;
const clientFeatures = [
  {
    title: "In Donations",
    detail: "$324 Million"
  },
  {
    title: "Funded",
    detail: "20,000 Projects"
  },
  {
    title: "Reach",
    detail: "170 Countries"
  }
];
const problem =
  "Currently, GlobalGiving connects with organizations based in the US along with some nonprofits in other countries. However, the process of finding and applying to GlobalGiving remains significantly easier within the United States. In certain countries, factors including lack of internet connectivity and lack of access to documents required by GlobalGiving has led to slower onboarding and discovery of the organization.";
const problemImagePath = "/static/images/projects/gg/gg-cover.jpg";
const solution =
  "We worked with GlobalGiving to build a scalable, easy-to-use command line interface that crawls for promising nonprofit websites to scrape and manages numerous web scrapers for these sites.";
const solutionImagePath = "/static/images/projects/gg/gg-crawl.png";
const features = [
  {
    title: "Data collection through scraping",
    detail:
      "Choose ten websites with directories of nonprofits and scrape each individual one and add them to the database. Data includes the organization’s name, country of registration, registration numbers, website url, and email.",
    imgPath: "/static/images/projects/gg/gg-scraper.png"
  },
  {
    title: "Command Line Tool",
    detail:
      "Allows user to see all the available scripts, run them, and submit the entries to the global giving database using the organization parser",
    imgPath: "/static/images/projects/gg/gg-run.png"
  },
  {
    title: "Web Crawler",
    detail:
      "Crawls the web and google searches and ranks potential NGO directories",
    imgPath: "/static/images/projects/gg/gg-crawl.png"
  }
];
const featureImgSize = "7";
const techStack = ["python", "flask", "mongodb"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = "https://github.com/hack4impact-uiuc/globalgiving-tool";
const team = {
  type: "pic",
  detail: [
    {
      name: "Aria Malkani",
      role: "Tech Lead"
    },
    {
      name: "Roy Chiu",
      role: "Tech Lead"
    },
    {
      name: "Skyler Shi",
      role: "Software Developer"
    },
    {
      name: "Alan Fang",
      role: "Software Developer"
    },
    {
      name: "Pavani Malli",
      role: "Software Developer"
    },
    {
      name: "Aryn Harmon",
      role: "Software Developer"
    },
    {
      name: "Alan Ren",
      role: "Software Developer"
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
