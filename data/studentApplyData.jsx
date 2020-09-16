import React from "react";
import Interview from "../public/icons/interview.svg";
import ActionButton from "../components/actionButton";
//import Contract from "../public/icons/contract.svg";
//import Education from "../public/icons/education.svg";

// constants that will affect links in the student application page
const applicationLink = "https://forms.gle/4USp6UsfcJzNqfz58";
//const interestLink = "https://forms.gle/wDzKo1KiV3Qq86uN9"; //fa20

// current stuff
const currentSemester = "Fall 2020";
//const nextSemester = "Spring 2021";

// dates
// const infoSessionDate = "Thursday, August 27  6:00-7:00 PM CDT"; //Thu Aug 27, 2020 6-7PM
// const applicationReleaseDate = "Opens Monday, August 24";
// const applicationReleaseTime = "12:00 AM CDT";
// const applicationDueDate = "Due Sunday, August 30"; //Sun Aug 20, 2020
// const applicationDueTime = "6:00 PM CDT"; //12:00 PM
// const firstRoundInterviewDate =
//   "Wednesday, September 2 - Thursday, September 3"; //Wed-Thu Sept 2-3, 2020
// const secondRoundInterviewDate = "Monday, September 7 - Wednesday, September 9"; //Mon-Wed Sept 7-9, 2020
// const socialRoundDate = "Saturday, September 12"; //Sat Sept 12, 2020
// const takeHomeExerciseDate = "Due Sunday, September 13"; //Sun Sept 13, 2020

const subHeadline =
  "Students are a core part of what makes Hack4Impact. Joining Hack4Impact is the perfect way to give back while developing new skills and making long-lasting friendships.";
const quote = {
  text:
    "A lot of classwork is theoretical. You’re given a contrived problem, and then you solve it. At Hack4Impact, you get to build a product from the ground up. Being exposed to building something from scratch is a great experience as a student.",
  source: "Alex Wu",
  sourceTitle: "'16",
};

const faq = [
  {
    question: "What is the general premise of Hack4Impact?",
    answer: (
      <>
        <p>
          <i>Team:</i> Work on a team of 6-8 students led by a PM and tech lead{" "}
        </p>
        <p>
          <i>Build: </i> Develop the product throughout the semester (~12 weeks){" "}
        </p>
        <p>
          <i>Ship: </i> Deliver the final product to the nonprofit client!{" "}
        </p>
        <p>
          <i>Community: </i> Join an organization with a strong focus on
          mentorship and social community events{" "}
        </p>
      </>
    ),
  },
  {
    question:
      "Is extensive web development or data science experience required?",
    answer:
      "Nope! Mentorship is a core value of our organization so we are always looking to take less experienced developers as long as you are willing to put in the time and have the passion to learn. You will have a tight feedback loop with your project leads along with experienced members on your team to ensure your success and project’s success in-order to benefit the nonprofit your team is working with.",
  },
  {
    question: "Why don't you accept more students?",
    answer: (
      <>
        We would love to accept all of our good candidates, but from our
        perspective, this is what we see. <br />
        <br />
        <ul>
          <li>
            {" "}
            We can’t work with all the non-profits in the world, because the
            quality of work and projects is just not scalable. We need to be
            incredibly selective with our leads because any risk of wasting an
            entire six months of time would ultimately be counterproductive for
            both our clients and students.{" "}
          </li>
          <li>
            We can’t have enormous teams because productivity inherently goes
            down, and work becomes less meaningful if anyone is tasked with
            completing a miniscule part of the project. On top of that, there
            are physical limits on the number of groups we can meet in person.
          </li>
          <li>
            We can only interview a fixed number of candidates, no matter how
            many good ones apply. We can only take as many candidates as our
            projects leads can support along with the scope of the projects
            itself. We want to take everyone who is qualified and we want to
            take on more projects, but for the reasons above, we just can’t.
          </li>
        </ul>
        That being said, we are looking into ways we can accommodate for members
        in the future such as holding more external events and tech talks,
        expanding our interview process to interview more candidates, and
        increasing our training program for more Product Managers/Technical
        Leads to take on more projects but maintain the high quality work we are
        know for.
      </>
    ),
  },
  {
    question:
      "What are you looking for in Academy Members, Software Developers and/or Product Designers?",
    answer: (
      <>
        We go a lot more in-depth in our role descriptions in our{" "}
        <a href="https://www.notion.so/h4iuiuc/Join-Hack4Impact-UIUC-2e875ce396b34e6ebb23c6dda57a89aa">
          Official Notion page
        </a>
        . View{" "}
        <a href="https://www.notion.so/h4iuiuc/Academy-Member-H4I-2261147c161f4ab39167692b951e626c">
          Academy Member Role
        </a>
        . View{" "}
        <a href="https://www.notion.so/h4iuiuc/Software-Developer-H4I-11df54d29aba4399a940339e88b0e540">
          Software Developer Role
        </a>
        . View{" "}
        <a href="https://www.notion.so/h4iuiuc/Product-Designer-H4I-137480f11c884844878232c62d12db25">
          Product Designer Role
        </a>
        .
      </>
    ),
  },
];

const applicationDetail = "";

const studentProcess = [
  // {
  //   title: "Interest Form",
  //   detail: (
  //     <>
  //       <p>
  //         Sign up below and we'll add you to a mailing list for Fall 2020
  //         Recruitment updates! This is non-binding and you can ask to be removed
  //         at any time.
  //       </p>
  //       {
  //         <ActionButton
  //           style={{ display: "block", marginTop: "10px" }}
  //           text="Sign Up"
  //           link={interestLink}
  //         />
  //       }
  //     </>
  //   ),
  //   icon: <Contract />,
  // },
  {
    title: "Want Updates?",
    detail: (
      <>
        <p>
          Keep in touch with us by following our social media. You can find 
          recruitment updates on these platforms in addition to our website.
        </p>
        {<ActionButton
          style={{ display: "block", marginTop: "10px" }}
          text="Facebook"
          link={"https://www.facebook.com/h4iuiuc/"}
        />}
        {<ActionButton
          style={{ display: "block", marginTop: "10px" }}
          text="Instagram"
          link={"https://www.instagram.com/hack4impactuiuc/"}
        />}
      </>
    ),
    icon: <Interview />
  },
  // {
  //   title: "Application Released",
  //   detail: (
  //     <>
  //       <p>Applications will be released at midnight on August 24th!</p>
  //       <a href={applicationLink} target="_blank" rel="noopener noreferrer">
  //         Link to application
  //       </a>
  //     </>
  //   ),
  //   icon: <Contract />,
  //   date: `${applicationReleaseDate} ${applicationReleaseTime}`,
  // },
  // {
  //   title: (
  //     <>
  //       {/* <a href="https://www.facebook.com/events/783414215343789">
  //         Info Session
  //       </a> */}
  //       Info Session
  //     </>
  //   ),
  //   detail: (
  //     <>
  //       <p>
  //         Be sure to come out to our Info Session to get an idea of who we are,
  //         what we do, and the impact Hack4Impact has. For our virtual
  //         recruitment, this will be in the form of a Facebook Livestream!
  //       </p>
  //       <p>
  //         <b className="pt-2"></b>
  //       </p>
  //       <p>
  //         Keep an eye on our{" "}
  //         <a href="https://www.facebook.com/h4iuiuc/live">Facebook page</a>
  //         {""} for when we go live!
  //       </p>
  //     </>
  //   ),
  //   icon: <Contract />,
  //   date: infoSessionDate,
  // },
  // {
  //   title: "Application Due",
  //   detail: (
  //     <>
  //       <p>Applications will be due three days after info session!</p>
  //       <a href={applicationLink} target="_blank" rel="noopener noreferrer">
  //         Link to application
  //       </a>
  //     </>
  //   ),
  //   icon: <Contract />,
  //   date: `${applicationDueDate} ${applicationDueTime}`,
  // },
  // // {
  // //   title: "Applications",
  // //   detail: (
  // //     <>
  // //       <p>
  // //         Fill out our online application!
  // //       </p>
  // //       before {applicationDueTime} on{" "}
  // //         <b>{applicationDueDate}</b>
  // //       {<ActionButton
  // //         style={{ display: "block", marginTop: "10px" }}
  // //         text="Apply Now"
  // //         link={applicationLink}
  // //       />}
  // //     </>
  // //   ),
  // //   icon: <Contract />,
  // //   date: `${applicationDueDate} ${applicationDueTime}`
  // // },
  // {
  //   title: "First Round Interviews",
  //   detail:
  //     "Hack4Impact looks for students who are hungry to learn, excellent teammates, and are passionate for tech and social impact. Our first round interviews will give you an opportunity to answer some questions about yourself while also meeting some of our members.",
  //   icon: <Interview />,
  //   date: firstRoundInterviewDate,
  // },
  // {
  //   title: "Second Round Interviews",
  //   detail:
  //     "This will be a short role-specific interview that is relevant to the position you are applying for. We encourage discussion throughout the interview and you’ll have an opportunity to ask questions to learn more about us.",
  //   icon: <Interview />,
  //   date: secondRoundInterviewDate,
  // },
  // {
  //   title: "Social Round",
  //   detail:
  //     "Our Social Night will be a fun opportunity for us to get to know each other with a more casual atmosphere. Be your authentic self!",
  //   icon: <Interview />,
  //   date: socialRoundDate,
  // },
  // {
  //   title: "Take Home Exercise",
  //   detail:
  //     "A small, take home project designed to expose you to the tasks and technologies you will encounter while working with your project teams. More instructions will be provided then.",
  //   icon: <Contract />,
  //   date: takeHomeExerciseDate,
  // },
  // // {
  // //   title: "Interviews",
  // //   detail:
  // //     "Hack4Impact looks for students who are hungry to learn, excellent teammates, and are passionate for tech and social impact. Our interviews will be 1 hour long and you will get meet a couple of our members.",
  // //   icon: <Interview />,
  // //   date: firstRoundInterviewDate
  // // }
];

const closedText = (
  <p>
    Our recruitment process has historically consisted of an Info Session and 
    applications due in the first week of the semester and a behavioral interview, 
    role-specific interview, and social round in the weeks to follow. Certain 
    roles will also require a take home exercise to be completed. More information 
    on roles and recruitment can be found on our 
    {" "}<a href="https://www.notion.so/h4iuiuc/Join-Hack4Impact-UIUC-2e875ce396b34e6ebb23c6dda57a89aa">
    official Notion page</a>.
    <p></p>
    Our application period for {currentSemester}{" "} <b> is now closed. </b>
  </p>
);
export default {
  title: "Students",
  subHeadline,
  applicationLink,
  quote,
  faq,
  studentProcess,
  closedText,
  applicationDetail,
};
