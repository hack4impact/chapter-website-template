// Data for the Sp18 Love without Boundaries Project
const name = "Love Without Boundaries";
const id = "lwb";
const detail =
  "How might we facilitate and improve the learning of Cambodian students preparing for the English Exam?";
const coverImagePath = "/static/images/projects/lwb/lwb-cover.jpg";
const clientDetail =
  "Love Without Boundaries (LWB) is an international NPO with the mission of serving vulnerable children in underserved communities. Through their services, which include nutrition programs, summer camps, and healing homes, LWB is able to target education, nutrition, medical care, and foster care. LWB mainly serves in China, Cambodia, India, and Uganda.";
const clientLink = "https=//www.lovewithoutboundaries.com/";
const previousLink = null;
const clientFeatures = [
  {
    title: "Countries",
    detail: "4"
  },
  {
    title: "Programs",
    detail: "6"
  },
  {
    title: "Impact",
    detail: "50,000+ children"
  }
];
const problem =
  "Recently, the Cambodian Ministry of Education implemented a written English component on the college entrance exams, requiring English competency in order to be admitted to university for the following term. Currently students and tutors can only contact via DM and facebook groups and tutors/admins arent able to track the progress of their students.";
const problemImagePath = "/static/images/projects/lwb/lwb-problem.jpg";
const solution =
  "We worked with LWB to create an application that tracks the progress of students and their interactions with tutors. This platform allows students to access standardized lessons and work with teachers on individual worksheets and lesson notes in real-time through google docs. Admins can manage all the students and teachers through the platform while keeping track of the student progress.";
const solutionImagePath = "/static/images/projects/lwb/lwb-sol.jpg";
const features = [
  {
    title: "Standardized Lessons & Worksheets",
    detail:
      "Lessons are created by administrators, which consist of lessons, worksheets, and quizzes.",
    imgPath: "/static/images/projects/lwb/lwb-sol.jpg"
  },
  {
    title: "Google Drive Integration",
    detail:
      "Worksheets are copied over to the student's personal google drive and accessible by tutors and admins.",
    imgPath: "/static/images/projects/lwb/lwb-google.png"
  },
  {
    title: "Tutor and Student Matching",
    detail:
      "Tutors are matched with students by Admins so tutors are able to work on the same material with their students.",
    imgPath: "/static/images/projects/lwb/lwb-admin.png"
  },
  {
    title: "Quizzes",
    detail:
      "Quizzes are mandatory to pass lessons and are useful to gauge the progress of a student.",
    imgPath: "/static/images/projects/lwb/lwb-addlesson.png"
  }
];
const featureImgSize = "5";
const techStack = ["react", "relay", "mongodb", "nodejs", "graphql"];
const quote =
  "The software is transformative. To be able to bring English language competency and ability to pass the college entrance exams to these students in an extremely impoverished and vulnerable region literally transforms futures . These students now can have options and select a career where they can think about what they want to do in life and contribute to the economy. It opens the door to a new future.";
const quoteSource = "Kelly Wolfe";
const quoteSourceTitle =
  "Love Without Boundaries Managing Director of Strategic Partnerships";
const githubLink =
  "https=//github.com/hack4impact-uiuc/love-without-boundaries";
const projectLink = "http=//cambodia.lovewithoutboundaries.com";
const team = {
  type: "no-pic",
  detail: {
    pm: "Timothy Ko",
    tl: "Aria Malkani",
    swe: [
      "Shreyas Mohan",
      "Hana Riwani",
      "Alan Ren",
      "Michael Chen",
      "Teja Kotha"
    ]
  }
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
  projectLink,
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
