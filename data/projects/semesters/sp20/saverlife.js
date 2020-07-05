// Data for the Sp20 SaverLife Project
const name = "SaverLife";
const id = "saverlife";
const detail = "How might we broaden SaverLife’s reach to incentivize a larger audience to make a habit of saving money?";
const coverImagePath = "/static/images/projects/sp20/saverlife/saverlife-cover.png";
const clientDetail =
  "SaverLife aims to educate and reward Americans who need help saving money and investing in their futures. The goal of the nonprofit is to lead a systematic change with rewards, expert resources and support to encourage new saving habits.";
const clientLink =
  "https://www.saverlife.org/";
const previousLink = null;
const clientFeatures = null;
const problem =
  "About 40% of Americans have less than $400 in their savings account and millions of Americans live paycheck to paycheck. SaverLife aims to help educate people on financial literacy and give support to those who are saving. However, habit forming can be difficult. Saving, in particular, is a harder habit to form because it requires detailed planning and is more volatile due to real life circumstances.";
const problemImagePath = "/static/images/projects/sp20/saverlife/saverlife-problem.png";
const solution =
  "Our organization has worked with SaverLife to create a mobile application that displays a look at Saverlife’s resources. By designing and implementing a neat and convenient interface, the application is crafted to encourage users to utilize all that SaverLife has to offer to aid in the process of saving while simultaneously aiming to expand SaverLife’s reach.";
const solutionImagePath = "/static/images/projects/sp20/saverlife/saverlife-solution.png";
const features = [
  {
    title: "Savings",
    detail:
      "Track savings and user progress towards their goal.",
    imgPath: "/static/images/projects/sp20/saverlife/saverlife-savings.png"
  },
  {
    title: "Articles",
    detail:
      "Read articles to learn more about financial literacy and related topics that SaverLife has to offer.",
    imgPath: "/static/images/projects/sp20/saverlife/saverlife-articles.png"
  },
  {
    title: "Calendar",
    detail:
      "Add important events in the calendar for efficient planning.",
    imgPath: "/static/images/projects/sp20/saverlife/saverlife-calendar.png"
  }
];

const featureImgSize = "4";
const techStack = ["reactnative", "redux", "reduxsaga"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = null;
const team = {
  type: "pics",
  detail: [
    {
      name: "Alan Fang",
      role: "Product Manager"
    },
    {
      name: "Josh Byster",
      role: "Tech Lead"
    },
    {
      name: "Aryn Harmon",
      role: "Software Developer"
    },
    {
      name: "Eugenia Chen",
      role: "Software Developer"
    },
    {
      name: "Angad Garg",
      role: "Software Developer"
    },
    {
      name: "Josh Burke",
      role: "Software Developer"
    },
    {
      name: "Evan Eckels",
      role: "Product Designer"
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
