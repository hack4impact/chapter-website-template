// Data for the Fa19 YMCA Project
const name = "UIUC Academy";
const id = "academy";
const detail =
  "How might we familiarize new members with technology and our development phases throughout the semester?";
const coverImagePath = "/static/images/projects/academy/cover.png";
const clientDetail =
  "Academy aims to provide the organization with members who have an adequate grasp on the full tech stack of all our current technologies. Academy aims to provide the members of the class with the knowledge, mentorship, and community to be able to excel and succeed throughout their H4I career and beyond.";
const clientLink = null;
const previousLink = null;
const clientFeatures = null;
const problem =
  "Every semester, freshman who we believe are great fits for the H4I community are rejected from the organization due to a lack of experience. As a result, we lose the opportunity to expand our community when these freshman choose not to interview with us again in following semesters. We also do not want to seem as a super-selective organization that selectively looks for only upperclassmen. This is simply false. A huge part of H4I lies in our mentorship initiatives and providing a great community. By denying freshman entry, we both lose the ability to utilize our mentorship initiatives to the fullest as well as discourage like minded from entering our organization.";
const problemImagePath = "/static/images/projects/c2tc-2/c2tc-2-cover.jpg";
const solution =
  "This semester is a pilot semester for UIUC Academy, figuring out how we can provide as much resources as possible to new members who we believe will be great fits for the H4I community. We spent the first half of the semester teaching the basics of many technologies used in H4I and across industries to both Academy members and H4I members. We spent the second half of the semester utilizing what we learned to create a UIUC Carpool web application.";
const solutionImagePath = "/static/images/projects/question.jpg";
const features = [
  {
    title: "Home Page",
    detail:
      "Home page where users can look at currently available trips and more information about the trip.",
    imgPath: "/static/images/projects/academy/home.png",
  },
  {
    title: "New Trip Form",
    detail:
      "This is the add new trip form where students can add new trips to the platform.",
    imgPath: "/static/images/projects/academy/trip.png",
  },
];

const featureImgSize = "7";
const techStack = ["react", "flask", "mongodb"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = "https://github.com/hack4impact-uiuc/Academy-Carpool-App";
const team = {
  type: "pics",
  detail: [
    {
      name: "Utkarsh Awasthi",
      role: "Academy Lead",
    },
    {
      name: "Shreyas Mohan",
      role: "Academy Lead",
    },
    {
      name: "Angela Luo",
      role: "Software Developer",
    },
    {
      name: "Matthew Walowski",
      role: "Software Developer",
    },
    {
      name: "Ashank Behara",
      role: "Software Developer",
    },
    {
      name: "Sahithi Muthyala",
      role: "Software Developer",
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
