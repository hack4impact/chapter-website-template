// Data for the SP19 C2TC Project - 3rd C2TC project (SafeMaps)
const name = "SafeMaps";
const id = "safemaps"; // 3rd C2TC Project
const detail = "How might we make students feel safer on campus?";
const coverImagePath = "/static/images/projects/safemaps/sm-safemaps-cover.png";
const clientDetail =
  "Navigate safely through campus and learn about the health and safety resources near you with Illini SafeMaps. Illini SafeMaps is your real-time safety companion. With Illini SafeMaps, you can navigate around the U of I campus safely by viewing the locations of past crimes, police stations, emergency phones, running buses, open businesses, and streetlights. This app also enables you to be notified and access safety and health resources near you including SafeWalks and SafeRides so you can stay informed and make safer decisions. This project is the continuation to the previous C2TC project.";
const clientLink =
  "http=//iventure.illinois.edu/index.php/portfolio/wanderweb/";
const previousLink = 
  "https://uiuc.hack4impact.org/projects/?name=c2tc-2";
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
  "Settling onto a sprawling campus of over 354 University buildings, 12,454 international students, 33,673 undergraduates can be an overwhelming experience for UIUC students. Currently, the University offers introductory programs including Freshmen and International Student Orientation programs that gives students a preview of available safety & wellness resources. However, after those introductory programs conclude, there is little guidance or follow-up on where and how to navigate these safety resources. This sense of being overwhelmed is particularly heightened when students are in transit — traveling around at night, walking in areas they have not been to before, etc";
const problemImagePath = "/static/images/projects/c2tc-2/c2tc-2-cover.jpg";
const solution =
  "This mobile application aims to provide quick & easy access information to students as they navigate around the campus through location-triggered tip notifications, empowering students to better understand their surroundings and ultimately make more informed decisions throughout the school year.";
const solutionImagePath = "/static/images/projects/safemaps/sm-solution.png";
const features = [
  {
    title: "Safety Companion For Illinois Students",
    detail:
      "Illini SafeMaps is the one stop for all things safety for U of I students. From finding the location of previous crimes to posting tips for other students to learn from, SafeMaps is dedicated to helping students stay safer on campus.",
    imgPath: "/static/images/projects/safemaps/sm-safety companion.png"
  },
  {
    title: "Stay Informed Of What's Happening",
    detail:
      "Stay up to date with location based tips on campus. Students can read and post tips relating to crimes, health, transportation, financial safety and more!",
    imgPath: "/static/images/projects/safemaps/sm-stay informed.png"
  },
  {
    title: "See What's Around You",
    detail:
      "SafeMaps has information about crimes, emergency phones, police stations, bus stops, streetlights and open businesses.",
    imgPath: "/static/images/projects/safemaps/sm-around you.png"
  },
  {
    title: "Access Verified Info From Trustworthy Sources",
    detail:
      "Click on a point of interest to learn more about the event which is maintained and updated regularly to ensure the most accurate data for all of our users.",
    imgPath: "/static/images/projects/safemaps/sm-verified info.png"
  },
  {
    title: "Share Tips To Make Community Safer",
    detail:
      "Learn and contribute to our large database of safety tips.",
    imgPath: "/static/images/projects/safemaps/sm-share tips.png"
  }
];

const featureImgSize = "4";
const techStack = ["reactnative", "flask", "mongodb", "redux"];
const quote =
  "We talked to a couple of people about developing about Cut to the Case, but a lot of them didn’t have the same passion that Hack4Impact had for the project. Hack4Impact had enthusiasm for what we were doing.";
const quoteSource = "Premika Pandian";
const quoteSourceTitle = "Cut to the Case Co-Founder and CTO";
const githubLink = "https://github.com/hack4impact-uiuc/safe-maps";
const team = {
  type: "pics",
  detail: [
    {
      name: "Shreyas Mohan",
      role: "Product Manager"
    },
    {
      name: "Megha Mallya",
      role: "Tech Lead"
    },
    {
      name: "Albert Cao",
      role: "Software Developer"
    },
    {
      name: "Neeraj Aggarwal",
      role: "Software Developer"
    },
    {
      name: "Michael Leon",
      role: "Software Developer"
    },
    {
      name: "Alice Fang",
      role: "Software Developer"
    },
    {
      name: "Rebecca Xun",
      role: "Software Developer"
    },
    {
      name: "Phillip Kuo",
      role: "Product Designer"
    },
    {
      name: "Annie Wu",
      role: "User Research/External Relations"
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
  previousLink,
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
  team,
  featureImgSize
};
