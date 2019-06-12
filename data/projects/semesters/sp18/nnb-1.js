const name = "Neighborhood News Bureau";
const id = "nnb-1"; // used for project navigation and representations in folders

/* Blurb Shown when describing project in /projects */
const detail =
  "How might we educate the black youth about the vibrant local history of St. Petersburg, FL?";

/* Client Details */
const coverImagePath = "/static/images/projects/nnb-1/nnb-cover.jpg"; // used in the project cards in /projects
const clientDetail =
  "The Neighborhood News Bureau (NNB) is a nonprofit organization that covers the historic African-American neighborhoods of St. Petersburg’s Midtown area in Tampa Bay, Florida. NNB student-reporters work on a multitude of projects including creating investigative news and feature stories, community communication research and practice, event-planning, and social marketing campaigns. NNB aims to build community partnerships to improve education in journalism, multimedia production and African-American history and culture.";
const clientLink = "http://www.nnbnews.com/"; // link to website
const previousLink = null;
const clientFeatures = [
  {
    title: "",
    detail: ""
  }
]; // can be null

/* Product Details and Solution */
const problem =
  "There is a constant loss of local black history as older people die and the stories are not recorded. Local schools do not teach local history and local libraries do not have any books or resources about local history. In other words, all the rich and empowering history of the Civil Rights, Jim Crow and Segregation eras are lost and the black youth is growing without a sense of the thriving black communities that existed in history. Specifically, the area of interest is the historic African-American neighborhoods of St. Petersburg’s Midtown area in Tampa Bay, Florida.";
const problemImagePath = "/static/images/projects/nnb-1/nnb-cover.jpg";
const solution =
  "We worked with Neighborhood News Bureau (NNB) to create an accessible and engaging educational tool that provides a map visualization and timeline of historical events. Students will be able to experience a guided tour of various stories automatically sorted in chronological order. Admins will be able to add more stories as more are uncovered. This tool is set to launch later this year in September/October in celebration of the 150 years since the arrival of the first black settlers to St. Petersburg in 1868.";
const solutionImagePath = "/static/images/projects/nnb-1/nnb-sol.jpg";

/* Product Features*/
const features = null;
const featureImgSize = null;

const techStack = ["react", "redux", "flask", "postgres"]; // can be null, must follow specific format (look at `projectTechStack.js`)

/* Quote */
const quote = (
  <>
    The educational tool is both very sensible and very easy. We’ll be using
    this tool to teach local kids in school and eventually teach them how to
    code and add to these stories. This tool{" "}
    <b>transforms local black history to mainstream history.</b> The more we
    empower people to add to these stories, the better.
  </>
); // can be null
const quoteSource = "Bernardo Motta"; // can be null
const quoteSourceTitle =
  "Ph. D, Faculty Coordinator of the USFSP Neighborhood News Bureau"; // can be null

/* Project Related Links */
const githubLink = "https://github.com/hack4impact-uiuc/nnb-frontend";
const projectLink = "";

const team = {
  type: "no-pic", // can be "no-pic" if no pics for developers, look at README.md for more info
  detail: {
    pm: "Alvin Wu",
    tl: "Varun Munjeti",
    swe: [
      "Aria Malkani",
      "Timothy Ko",
      "Helena Chi",
      "Karthik Shankar",
      "Jeff DeLonge",
      "Shreyas Mohan"
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
