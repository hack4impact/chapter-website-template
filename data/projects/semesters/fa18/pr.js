const name = "Philadelphia Reads";
const id = "pr"; // used for project navigation and representations in folders

/* Blurb Shown when describing project in /projects */
const detail =
  "How might we let Philadelphia READS extend its reach into students’ homes?";

/* Client Details */
const coverImagePath = "/static/images/projects/pr/philly-cover.jpg"; // used in the project cards in /projects
const clientDetail =
  "Philadelphia READS aims to provide access to books and community programs to foster a love of reading and increase literacy in Philadelphia. They do this through four core literacy programs: Power Partners, Reading Olympics, the Jacoby Book Bank and Summer READS. Through these programs, they serve approximately 27,800 children and 600 educators annually.";
const clientLink = "https://www.philareads.org/"; // link to website
const clientFeatures = [
  {
    title: "Core Literacy Programs",
    detail: "4"
  },
  {
    title: "Philadelphia Schools Impacted",
    detail: "12,000"
  },
  {
    title: "Volunteer one-on-one hours",
    detail: "450,000"
  }
];

/* Product Details and Solution */
const problem =
  "Philadelphia READS provides out-of-school programs to increase literacy rates among grade-school students. One of these programs is the yearly Reading Olympics. Teams of students read books from a specified book list and prepare to answer questions about the books. One drawback is that these programs are all tied to in-person interactions and Philadelphia READS does not have resources for students while they are at home or on the go.";
const problemImagePath = "/static/images/projects/pr/philly-cover.jpg";
const solution = (
  <div>
    Come out to our{" "}
    <a href="https=//www.facebook.com/events/762781120723120/">
      Product Showcase
    </a>{" "}
    event to see our team&#39;s solution and live demo of the final product!
    <br />
    <br /> Event Details: <br /> Sunday, Dec. 9 <br /> 5PM-6PM <br />
    ECEB 2013
  </div>
);
const solutionImagePath = "/static/images/projects/question.jpg";

/* Product Features*/

const features = [
  {
    title: "Quiz System",
    detail:
      "Users can test themselves on past and presents Reading Olympics book list"
  },
  {
    title: "Search Feature",
    detail: "Users can access past and present book quizzes"
  },
  {
    title: "User Accounts",
    detail: "User can tracks their own quiz history"
  },
  {
    title: "Badges",
    detail: "Provide incentivization for students to continually use the page"
  },
  {
    title: "Display Advice",
    detail:
      "Provide tips for parents on how to be involved in their children’s learning"
  }
]; // can be null

const techStack = ["react", "flask", "postgres"]; //watch me mistype one of these

/* Quote */
const quote = null; // can be null
const quoteSource = null; // can be null
const quoteSourceTitle = null; // can be null

/* Project Related Links */
const githubLink = "https://github.com/hack4impact-uiuc/philareads";
const projectLink = null;

const team = {
  type: "pic", // can be "no-pic" if no pics for developers, look at README.md for more info
  detail: [
    {
      name: "Xuan Li",
      role: "Product Manager"
    },
    {
      name: "David Wang",
      role: "Technical Lead"
    },
    {
      name: "Helena Chi",
      role: "Software Developer"
    },
    {
      name: "Melody Felix",
      role: "Software Developer"
    },
    {
      name: "Michael Leon",
      role: "Software Developer"
    },
    {
      name: "Josh Byster",
      role: "Software Developer"
    },
    {
      name: "Alice Fang",
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
  team
};
