// Data for the sp19 kiva Project - 2nd kiva project
const name = "Kiva";
const id = "kiva-2"; // second kiva Project
const detail = "How might we expedite the reporting process with a single portal where Field Partners and Portfolio Managers can see which documents need to be uploaded and track their progress?";
const coverImagePath = "/static/images/projects/kiva-2/kiva2-thumbnail copy.png";

const clientDetail = "Kiva is a nonprofit organization founded in 2006 that is funded via individual and corporate donations. Their mission is to alleviate poverty and connect people by funding loans. So far, Kiva has reached borrowers in 82 countries, and 1.7 million Kiva lenders have lent over a billion dollars to family businesses. Their goal is to reach 2 million people soon and lend the next 1 billion dollars in a shorter amount of time.";
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
];
const problem =
"Kiva is a non-profit organization which crowdfunds loans for lower-income and underserved people all across the world. Kiva Field Partners act as intermediaries between Kiva and borrowers and are largely responsible for managing the details of loans and repayment. Currently, Field Partner financial documents are submitted through Kiva through email and must be manually checked to make sure all documents are provided and are properly filled out/formatted/etc.";
const problemImagePath = "/static/images/projects/kiva-2/kiva2-docs.jpg";
const solution =
  "Our project consolidates this process into a single portal where Field Partners and Portfolio Managers can see which documents need to be uploaded and track their progress. We integrate this with some file repository service (likely Box or GitHub) and aim to create a streamlined, secure portal that will eliminate the hassle of tracking multiple financial documents across a wide network of Field Partners.";
const solutionImagePath = "/static/images/projects/kiva-2/kiva2-fp.png";

const features = [
  {
    title: "Login page",
    detail:
      "Kiva users and partners can log in to our application and be verified using the security tool developed by our chapter's Product Infrastructure team.",
    imgPath: "/static/images/projects/kiva-2/kiva2-login.png"
  },
  {
    title: "Field partner dashboard",
    detail:
      "Required documents are organized by their status, and portfolio managers can reject or approve them based on their completions.",
    imgPath: "/static/images/projects/kiva-2/kiva2-fp.png"
  },
  {
    title: "Portfolio manager dashboard",
    detail:
      "Where portfolio managers can see the statuses of all their field partners, organized by whether each partner is currently in the reviewing process, has just been created, or has finished the review process.",
    imgPath: "/static/images/projects/kiva-2/kiva2-pm.png"
  },
  {
    title: "Document selection page",
    detail:
      "To set up the review process, a portfolio manager will assign requirements to a field partner from a user-defined list of document classes.",
    imgPath: "/static/images/projects/kiva-2/kiva2-selection.png"
  }
];

const featureImgSize = "7";
const techStack = ["react", "postgres", "flask", "redux", "box"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = "https://github.com/hack4impact-uiuc/kiva-portfolio-tool";
const team = {
  type: "pics",
  detail: [
    {
      name: "Arpan Laha",
      role: "Product Manager"
    },
    {
      name: "Roy Chiu",
      role: "Tech Lead"
    },
    {
      name: "Daniel Choi",
      role: "Software Developer"
    },
    {
      name: "Jeffy Lin",
      role: "Software Developer"
    },
    {
      name: "Kelley Chau",
      role: "Software Developer"
    },
    {
      name: "Chloe Chan",
      role: "Product Designer"
    },
    {
      name: "Utkarsh Awasthi",
      role: "Software Developer"
    },
    {
      name: "Danielle Yang",
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
