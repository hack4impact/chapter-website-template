// Data for the Fa18 C2TC Project - 2nd C2TC project
const name = "Cut to the Case";
const id = "c2tc-2"; // second C2TC Project
const detail = "How might we make students feel safer on campus?";
const coverImagePath = "/static/images/projects/c2tc-2/c2tc-2-cover.jpg";
const clientDetail =
  "Cut to the Case (CTTC) is a nonprofit organization started by two UIUC Engineering students who met through a nonprofit startup aimed at increasing interest in STEM among young girls called MakerGirl. After getting accepted into iVenture Accelerator and doing summer research, Premika and Kendall decided to tackle the issue of sexual assault. CTTC’s goal is to increase reporting and eventually increase prosecution through a rape kit tracking system. Currently Premika and Kendall are working on customer research";
const clientLink =
  "http=//iventure.illinois.edu/index.php/portfolio/wanderweb/";
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
  "Cut to the Case is a UIUC based non-profit started by two UIUC Engineering students whose initial mission was to help victims of sexual assault. Now, Cut to the Case has expanded their focus into tackling public safety with the hopes of improving the safety of all students on campus";
const problemImagePath = "/static/images/projects/c2tc-2/c2tc-2-cover.jpg";
const solution = (
  <div>
    Come out to our
    <a href="https=//www.facebook.com/events/762781120723120/">
      {" "}
      Product Showcase{" "}
    </a>
    event to see our team&#39;s solution and live demo of the final product!
    <br />
    <br /> Event Details= <br /> Sunday, Dec. 9 <br /> 5PM-6PM <br />
    ECEB 2013
  </div>
);
const solutionImagePath = "/static/images/projects/question.jpg";
const features = [
  {
    title: "Map Interface",
    detail: "Users can click, drag and interact with map icons & filters"
  },
  {
    title: "Map Layers",
    detail:
      "Users can filter through layers containing different information such as emergency phones and past crimes"
  },
  {
    title: "Call Buttons",
    detail:
      "Users can access Safe Rides, Safe Walks, police, and trusted contact(s)"
  }
];
const techStack = ["reactnative", "flask", "mongodb"];
const quote =
  "We talked to a couple of people about developing about Cut to the Case, but a lot of them didn’t have the same passion that Hack4Impact had for the project. Hack4Impact had enthusiasm for what we were doing.";
const quoteSource = "Premika Pandian";
const quoteSourceTitle = "Cut to the Case Co-Founder and CTO";
const githubLink = "https=//github.com/hack4impact-uiuc/c2tc-fall-2018";
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
      name: "Josh Burke",
      role: "Software Developer"
    },
    {
      name: "Neeraj Aggarwal",
      role: "Software Developer"
    },
    {
      name: "Daniel Choi",
      role: "Software Developer"
    },
    {
      name: "Anooj Lal",
      role: "Software Developer"
    },
    {
      name: "Phillip Kuo",
      role: "UI/UX Designer"
    },
    {
      name: "Annie Wu",
      role: ""
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
