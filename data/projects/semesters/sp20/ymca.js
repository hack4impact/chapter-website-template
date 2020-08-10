// Data for the Sp20 YMCA Project (Continuation of Fa19 YMCA Project)
const name = "YMCA New American Welcome Center";
const id = "ymca";
const detail =
  "How might we reduce barriers to reliable information for Champaign’s resources?";
const coverImagePath = "/images/projects/ymca/cover.png";
const clientDetail =
  "The New American Welcome Center at the University Y helps immigrants fully integrate into American society and prepares receiving communities around Champaign County to be welcoming and inclusive. By engaging local institutions and mobilizing community resources, we help make our community a place where newcomers and immigrants can thrive and flourish.";
const clientLink = "https://universityymca.org/welcome/";
const previousLink = null;
const clientFeatures = [
  {
    title: "Number of immigrants in Champaign",
    detail: "24,000",
  },
  {
    title: "Number of countries",
    detail: "80",
  },
  {
    title: "Resources available",
    detail: "100+",
  },
];
const problem =
  "Currently, valuable information about Champaign’s resources are scattered and difficult to find. This decentralization is creating an information gap preventing newcomers from reliably accessing resources that they need the most. YMCA has taken steps to centralize this information1, but it remains largely inaccessible due to language limitations and other barriers.";
const problemImagePath = "/images/projects/ymca/problem.jpg";
const solution =
  "Our team has partnered with the YMCA New American Welcome Center (NAWC) to build a centralized virtual resource hub aimed to equalize and promote information access to vital community resources. This product will allow immigrants to independently access resources according to their personal needs, and also enable NAWC and other local organizations to better serve the community through more informed recommendations. In our second semester of a year-long partnership with the YMCA New American Welcome Center (NAWC), our team endeavored to add to the existing centralized virtual resource hub platform and truly create a user-friendly experience for immigrants seeking community resources and the organizations that serve them.";
const solutionImagePath = "/images/projects/ymca/solution.jpg";
const features = [
  {
    title: "Filter Data",
    detail:
      "Tailor filters based on lifestyle needs including cost preference, languages offered, and location.",
    imgPath: "/images/projects/ymca/customize.png",
  },
  {
    title: "View Resource Details",
    detail:
      "Gain reliable access to information such as required documents and recommended contacts for service providers in the community.",
    imgPath: "/images/projects/ymca/view.png",
  },
  {
    title: "Upload New Resources",
    detail:
      "Administrator users can build on the resource base by editing existing and uploading new community resources.",
    imgPath: "/images/projects/ymca/upload.png",
  },
  {
    title: "Save Resources",
    detail: "Users can create accounts and save resources for quicker access.",
    imgPath: "/images/projects/sp20/ymca/ymca-save-resources.png",
  },
  {
    title: "Increased Admin Editing Abilities",
    detail:
      "Admins can edit the content of the home page along with that of the resources themselves.",
    imgPath: "/images/projects/sp20/ymca/ymca-edit-home.png",
  },
];

const featureImgSize = "7";
const techStack = ["react", "express", "mongodb"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = "https://github.com/hack4impact-uiuc/ymca";
const team = {
  type: "pics",
  detail: [
    {
      name: "Neeraj Aggarwal",
      role: "Sp20 Product Manager & Fa19 Tech Lead",
    },
    {
      name: "Jacqueline Osborn",
      role: "Sp20 Tech Lead & Fa19 Software Developer",
    },
    {
      name: "Kendall Hester",
      role: "Sp20 & Fa19 Software Developer",
    },
    {
      name: "Anooj Lal",
      role: "Sp20 & Fa19 Software Developer",
    },
    {
      name: "Michael Chen",
      role: "Sp20 Software Developer",
    },
    {
      name: "Danielle Yang",
      role: "Sp20 Software Developer",
    },
    {
      name: "Albert Cao",
      role: "Sp20 Software Developer",
    },
    {
      name: "Chloe Chan",
      role: "Sp20 & Fa19 Product Designer",
    },
    {
      name: "Annie Wu",
      role: "Fa19 Product Manager",
    },
    {
      name: "Skyler Shi",
      role: "Fa19 Software Developer",
    },
    {
      name: "Ashwin Saxena",
      role: "Fa19 Software Developer",
    },
    {
      name: "Tiffany Duong",
      role: "Fa19 Product Researcher",
    },
  ],
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
  featureImgSize,
};
