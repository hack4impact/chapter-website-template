const name = "Kiva";
const id = "kiva-1"; // used for project navigation and representations in folders

/* Blurb Shown when describing project in /projects */
const detail =
  "How might we make Kiva's Excel tool more clear and intuitive for fellow and partnership managers?";

/* Client Details */
const coverImagePath = "/static/images/projects/kiva-1/kiva-1-cover.jpg"; // used in the project cards in /projects
const clientDetail =
  "Kiva is a nonprofit organization founded in 2006 that is funded via individual and corporate donations. Their mission is to alleviate poverty and connect people by funding loans. So far, Kiva has reached borrowers in 82 countries, and 1.7 million Kiva lenders have lent over a billion dollars to family businesses. Their goal is to reach 2 million people soon and lend the next 1 billion dollars in a shorter amount of time.";
const clientLink = "https://www.kiva.org/"; // link to website
const previousLink = null;
const clientFeatures = [
  {
    title: "Borrowers",
    detail: "3.1M"
  },
  {
    title: "Countries",
    detail: "81"
  },
  {
    title: "Loans funded",
    detail: "$1.26B"
  },
  {
    title: "Repayment rate",
    detail: "96.8%"
  }
]; // can be null

/* Product Details and Solution */
const problem =
  "Kiva extends its loan-giving ability through third parties such as microfinance institutions, schools, or social enterprises. Kiva fellows and partnership managers currently use a comprehensive excel tool to assess the financial compliance, health, and fairness of these third party organizations. However, this tool is difficult to use and understand, making it “universally hated” by Kiva employees and volunteers.";
const problemImagePath = "/static/images/projects/kiva-1/kiva-1-cover.jpg";
const solution =
  "We worked with Kiva to create an intuitive web application that consists of three main features: creating a new loan, searching for a loan, and admin tools to manage and cleanly processes the critical inputs and outputs an accurate APR rate, repayment schedule, and loan payment visualization. The interface also allows for saving loans and pulling up previously saved loans to view, duplicate, or edit. The admin tools allows the overarching lists of approved Field Partners and Loan Themes are able to be modified.";
const solutionImagePath = "/static/images/projects/kiva-1/kiva-web.jpg";

/* Product Features*/
const features = null;
const featureImgSize = null;

const techStack = ["react", "redux", "flask", "postgres"]; //[""]; // can be null

/* Quote */
const quote = null; // can be null
const quoteSource = null; // can be null
const quoteSourceTitle = null; // can be null

/* Project Related Links */
const githubLink = "https://github.com/hack4impact-uiuc/kiva-pricing-tool";
const projectLink = "";

const team = {
  type: "no-pic", // can be "no-pic" if no pics for developers, look at README.md for more info
  detail: {
    pm: "David Chang",
    tl: "Megha Mallya",
    swe: [
      "Dean Lin",
      "Roy Chiu",
      "Angad Garg",
      "Betty Shen",
      "Alan Fang",
      "Jamie Paterson"
    ]
  }
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
