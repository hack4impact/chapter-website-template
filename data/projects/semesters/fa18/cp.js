// Fa18 Childs Play Project

const name = "Child's Play";
const id = "cp";
const detail =
  "How might we streamline the process of connecting children with effective games to order to alleviate their ailments?";
const coverImagePath = "/static/images/projects/cp/cp-cover.jpg";
const clientDetail =
  "Child’s Play seeks to improve the lives of children in pediatric hospitals and other child welfare facilities through the kindness and generosity of the video game community and the power of play. They reach 169 hospitals and shelters internationally.";
const clientLink = "https=//childsplaycharity.org/";
const previousLink = null;
const clientFeatures = [
  {
    title: "Raised",
    detail: "$44,484,565"
  },
  {
    title: "Hospitals",
    detail: "Gift wish lists for kids"
  },
  {
    title: "International Reach",
    detail: "169 hospitals and shelters"
  }
];
const problem =
  "Child’s Play currently has an online pdf guide that categorizes recommended games by ailment, age, and device. This guide is updated around once a year with the newest EEDAR reports that they receive. The current PDF is static which requires manual searching, making it hard to update. Hospitals’ wifi usage can be limited or slow.";
const problemImagePath = "/static/images/projects/cp/cp-cover.jpg";
const solution =
  "We worked with Child's Play to build a mobile-friendly progressive web app that allows a user to search for a game for a child to play based on their characteristics/gaming system. The site stores its data offline if it is added to a phone or tablet's homescreen and thus works with little to no wifi. Child's Play would also easily update games and matches to reflect the latest research.";
const solutionImagePath = "/static/images/projects/cp/cp-feat1.png";
const features = [
  {
    title: "View Helpful Games for Specific Symptoms",
    detail:
      "Users can quickly see which games for each console that are helpful for children with a certain symptom.",
    imgPath: "/static/images/projects/cp/cp-feat1.png"
  },
  {
    title: "View Specific Game Information",
    detail:
      "Provides externally sourced information, including tags pertaining to which symptoms and types of children the game would aid.",
    imgPath: "/static/images/projects/cp/cp-feat2.png"
  },
  {
    title: "Import New Information",
    detail:
      "Allows administrators to quickly upload more recent information to display.",
    imgPath: "/static/images/projects/cp/cp-feat3.png"
  },
  {
    title: "Update Easily",
    detail:
      "Administrators can easily see and update any games with incomplete information.",
    imgPath: "/static/images/projects/cp/cp-feat4.png"
  }
];
const techStack = ["react", "redux", "flask", "postgres"];

const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;

const githubLink = "https://github.com/hack4impact-uiuc/childs-play-tool";
const team = {
  type: "pic",
  detail: [
    {
      name: "Hana Rimawi",
      role: "Product Manager"
    },
    {
      name: "Angad Garg",
      role: "Tech Lead"
    },
    {
      name: "Jeffy Lin",
      role: "Software Developer"
    },
    {
      name: "Betty Shen",
      role: "Software Developer"
    },
    {
      name: "Michael Chen",
      role: "Software Developer"
    },
    {
      name: "Arpan Laha",
      role: "Software Developer"
    },
    {
      name: "Albert Cao",
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
  team
};
