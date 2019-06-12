// Data for the Sp19 Global Giving Project - 2nd gg project
const name = "Global Giving";
const id = "gg-2"; // second GG Project
const detail = "How might we expand Global Giving’s impact and reach on domestic and international nonprofits?";
const coverImagePath = "/static/images/projects/gg-2/gg2-thumbnail.png";

const clientDetail =
"Global Giving seeks to identify nonprofits around the world, creating a central directory of nonprofits. They also aim to connect each nonprofit with the necessary resources, such as connecting them with donors or setting up crowdfunding options to help the nonprofit succeed.";
const clientLink =
"https=//www.globalgiving.org/";
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
  "We are uncovering ways of characterizing the work that nonprofit organizations do all over the world. We've built tools which analyze the websites and missions statements of nonprofits, group them together according to what they do, and give suggestions as to what each organization’s work may be. Ultimately, we hope to give GlobalGiving as much knowledge and foresight as possible when they reach out to new nonprofits to join their global network.";
  const solutionImagePath = "/static/images/projects/gg/gg-crawl.png";
  const features = [
    {
      title: "Revised Categorization Schema",
      detail:
        "This categorization considers the patterns we found through experimentation and investigation, suggesting whom the nonprofit serves and what they do.",
      imgPath: "/static/images/projects/gg-2/gg2-schema.png"
    },
    {
      title: "Stochastic Gradient Descent",
      detail:
        "We used scikit-learn's Stochastic Gradient Descent classifier, a OneVsRest classifier, and a multiclass classification on an NGO.",
      imgPath: "/static/images/projects/gg-2/gg2-gradient.png"
    },
    {
      title: "Document Vectors",
      detail:
        "Using Doc2Vec, we created a document vector model for each one using Kmeans to find similarities between projects.",
      imgPath: "/static/images/projects/gg-2/gg2-document.png"
    },
    {
      title: "Unguided LDA",
      detail:
        "Unguided LDA class creates a model representing the “topics” present in a dataset of non-profit projects.",
      imgPath: "/static/images/projects/gg-2/gg2-unguided.png"
    },
  ];
  const featureImgSize = "7";
  const techStack = ["sklearn", "gensim", "nltk", "beautifulsoup", "dynamodb", "spacy"];
  const quote = null;
  const quoteSource = null;
  const quoteSourceTitle = null;
  const githubLink = "https://github.com/hack4impact-uiuc/globalgiving-depth";
  const team = {
    type: "pic",
    detail: [
      {
        name: "Josh Burke",
        role: "Product Manager"
      },
      {
        name: "Aryn Harmon",
        role: "Tech Lead"
      },
      {
        name: "Prashant Pokhriyal",
        role: "Software Developer"
      },
      {
        name: "Lam Tran",
        role: "Software Developer"
      },
      {
        name: "Eugenia Chen",
        role: "Software Developer"
      },
      {
        name: "Jacqueline Osborn",
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
  