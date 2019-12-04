// Data for the Fa19 YMCA Project
const name = "YMCA New American Welcome Center";
const id = "academy";
const detail = "How might we familiarize new members with technology and our development phases throughout the semester?";
const coverImagePath = "/static/images/projects/c2tc-2/c2tc-2-cover.jpg";
const clientDetail =
  "The New American Welcome Center at the University Y helps immigrants fully integrate into American society and prepares receiving communities around Champaign County to be welcoming and inclusive. By engaging local institutions and mobilizing community resources, we help make our community a place where newcomers and immigrants can thrive and flourish.";
const clientLink =
  "https://universityymca.org/welcome/";
const previousLink = null;
const clientFeatures = [
  {
    title: "Students that don't feel safe",
    detail: "93.9%"
  },
  {
    title: "Never used Safewalks/Saferides",
    detail: "77.6%"
  },
  {
    title: "Ranks UIUC's safety below 3",
    detail: "45%"
  }
];
const problem =
  "Currently, valuable information about Champaign’s resources are scattered and difficult to find. This decentralization is creating an information gap preventing newcomers from reliably accessing resources that they need the most. YMCA has taken steps to centralize this information1, but it remains largely inaccessible due to language limitations and other barriers.";
const problemImagePath = "/static/images/projects/c2tc-2/c2tc-2-cover.jpg";
const solution =
  "We want to educate students about what’s around them. If we give them the information they need about what’s around campus, they will be better prepared to make decisions on how they should get home. From our research, we discovered that many students value knowing about where emergency phones, open businesses, lighting, past crimes, and other people are. For the app, we focused on giving students information about open businesses, emergency phones, police stations, street lights, bus stops, and past crimes are. ";
const solutionImagePath = "/static/images/projects/question.jpg";
const features = [
  {
    title: "Filter Data",
    detail:
      "Tailor filters based on lifestyle needs including cost preference, languages offered, and location.",
    imgPath: "/static/images/projects/ymca/customize.png"
  },
  {
    title: "View resource details",
    detail:
      "Gain reliable access to information such as required documents and recommended contacts for service providers in the community.",
    imgPath: "/static/images/projects/ymca/view.png"
  },
  {
    title: "Upload New Resources",
    detail:
      "Administrator users can build on the resource base by editing existing and uploading new community resources.",
    imgPath: "/static/images/projects/ymca/upload.png"
  }
];

const featureImgSize = "7";
const techStack = ["reactnative", "flask", "mongodb"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = "https://github.com/hack4impact-uiuc/c2tc-fall-2018";
const team = {
  type: "pics",
  detail: [
    {
      name: "Annie Wu",
      role: "Product Manager"
    },
    {
      name: "Neeraj Aggarwal",
      role: "Tech Lead"
    },
    {
      name: "Skyler Shi",
      role: "Software Developer"
    },
    {
      name: "Jacqueline Osborn",
      role: "Software Developer"
    },
    {
      name: "Kendall Hester",
      role: "Software Developer"
    },
    {
      name: "Anooj Lal",
      role: "Software Developer"
    },
    {
        name: "Ashwin Saxena",
        role: "Software Developer"
    },
    {
      name: "Chloe Chan",
      role: "Product Designer"
    },
    {
        name: "Tiffany Duong",
        role: "Product Researcher"
    },
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
