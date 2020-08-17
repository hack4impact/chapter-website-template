// Data for the Sp20 Kids Save Ocean Project
const name = "Kids Save Ocean";
const id = "kso";
const detail =
  "How might we inspire and empower youth champion sustainability in their communities?";
const coverImagePath = "/images/projects/sp20/kso/kso-cover.jpg";
const clientDetail =
  "Kids Save Ocean is an environmental nonprofit aiming to empower children to have their voices heard in the discussion about the planet's environment. Kids Save Ocean started out by creating an art exhibition to raise awareness and organizing the first United Nations Children’s Clean Ocean Summit, and is now currently piloting its first app, FateChanger, which empowers students and teachers by educating them about sustainability solutions and providing resources to enact policy change in their communities.";
const clientLink = "https://www.kidssaveocean.com/";
const previousLink = null;
const clientFeatures = null;
const problem =
  "While there’s a lot of enthusiasm and energy among the global youth to better the planet and environment, there aren’t many established ways for kids to make a long-lasting impact in their communities. Sustainability is a difficult concept to gain a holistic understanding of, especially without much prior education and experience. Effective solutions require cross-disciplinary knowledge and involve systems thinking and project management skills, and there aren’t many kid-friendly platforms that consolidate the information and skills needed to create tangible sustainability-driven change.";
const problemImagePath = "/images/projects/sp20/kso/kso-problem.jpg";
const solution =
  "In our partnership with Kids Save Ocean, we’ve built FateMaker, a platform intended to educate and inspire kids to design and execute on sustainability-driven projects and solutions. FateMaker coaches its users through the Human-Centered Design process as they create their projects, and also provides a platform where users can browse through projects and follow other users/projects to gain inspiration and insight into how they could improve their own communities.";
const solutionImagePath = "/images/projects/sp20/kso/kso-solution.jpg";
const features = [
  {
    title: "Project view",
    detail:
      "The various phases and steps comprising each project can be easily viewed using a Gantt chart, allowing users to more easily understand the temporal nature and structure of a project.",
    imgPath: "/images/projects/sp20/kso/kso-project.jpg",
  },
  {
    title: "Interactive rich editor",
    detail:
      "To support both the generation of design guidance by Kids Save Ocean and enable users to create their own content with freedom, project content is built on top of Draft.js, with an interface similar to the Medium editor.",
    imgPath: "/images/projects/sp20/kso/kso-draft.jpg",
  },
  {
    title: "Project feed",
    detail:
      "Users can follow other users and/or projects to stay updated on what others are doing, visualizing progress with a feed with the most recent changes to followed projects or by followed users.",
    imgPath: "/images/projects/sp20/kso/kso-feed.jpg",
  },
];

const featureImgSize = "7";
const techStack = [
  "react",
  "next",
  "draftjs",
  "express",
  "mongodb",
  "firebase",
  "h4i_infra_auth",
];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = "https://github.com/hack4impact-uiuc/kids-save-ocean";
const team = {
  type: "pics",
  detail: [
    {
      name: "Arpan Laha",
      role: "Product Manager",
    },
    {
      name: "Yousef Ahmed",
      role: "Tech Lead",
    },
    {
      name: "Brandon Wang",
      role: "Software Developer",
    },
    {
      name: "Alice Fang",
      role: "Software Developer",
    },
    {
      name: "Sahithi Muthyala",
      role: "Software Developer",
    },
    {
      name: "Ashwin Saxena",
      role: "Software Developer",
    },
    {
      name: "Ashank Behara",
      role: "Software Developer",
    },
    {
      name: "Zayyan Faizal",
      role: "Product Designer",
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
