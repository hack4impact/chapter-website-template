// Fa18 Childs Play Project

const name = "Child's Play";
const id = "cp";
const detail =
  "How might we streamline the process of connecting children with effective games to order to alleviate their ailments?";
const coverImagePath = "/static/images/projects/cp/cp-cover.jpg";
const clientDetail =
  "Child’s Play seeks to improve the lives of children in pediatric hospitals and other child welfare facilities through the kindness and generosity of the video game community and the power of play. They reach 169 hospitals and shelters internationally.";
const clientLink = "https=//childsplaycharity.org/";
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
  "Child’s Play currently has an online pdf guide that categorizes recommended games by ailment, age, and device. This guide is updated around once a year with the newest EEDAR reports that they receive. The current PDF is static which requires manual searching, making it hard to update. Hospitals’ usage can be limited or slow.";
const problemImagePath = "/static/images/projects/cp/cp-cover.jpg";
const solution = (
  <div>
    Come out to our{" "}
    <a href="https=//www.facebook.com/events/762781120723120/">
      Product Showcase
    </a>{" "}
    event to see our team&#39;s solution and live demo of the final product!
    <br />
    <br /> Event Details= <br /> Sunday, Dec. 9 <br /> 5PM-6PM <br />
    ECEB 2013
  </div>
);
const solutionImagePath = "/static/images/projects/question.jpg";
const features = [
  {
    title: "Search Filters",
    detail:
      "Users can choose from Age, Ailment, Game Title, Gender of Protagonist, and System"
  },
  {
    title: "Upload Field",
    detail: "Users can easy update new data"
  },
  {
    title: "Game Descriptions",
    detail:
      "Provide users information including Protagonist, Tags, Picture, Description, and Title"
  }
];
const techStack = ["react", "redux", "flask", "postgres"];

const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;

const githubLink = "https=//github.com/hack4impact-uiuc/childs-play-tool";
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
  team
};
