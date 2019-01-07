import React from "react";
import Interview from "../static/icons/interview.svg";
import Calendar from "../static/icons/calendar.svg";
import ActionButton from "../components/actionButton";
import Contract from "../static/icons/contract.svg";
import Education from "../static/icons/education.svg";
import Link from "next/link";
// constants that will affect links in the student application page
const applicationLink = "";

// current stuff
const currentSemester = "Fall 2018";
const nextSemester = "Spring 2019";

// dates
const infoSessionDate = "Jan 16, 2019 7-8PM";
const technicalWorkshopDate = "Jan 17, 2019 7-8PM";
const applicationDueDate = "";
const firstRoundInterviewDate = "";
const secondRoundInterviewDate = "";
const takeHomeExerciseDate = "";

const quote = {
  text:
    "A lot of classwork is theoretical. You’re given a contrived problem, and then you solve it. At Hack4Impact, you get to build a product from the ground up. Being exposed to building something from scratch is a great experience as a student.",
  source: "Alex Wu",
  sourceTitle: "'16"
};

const faq = [
  {
    question: "What is the general premise of Hack4Impact?",
    answer: (
      <>
        <p>
          <i>Team:</i> Work on a team of 4-7 students led by a PM and tech lead{" "}
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
    )
  },
  {
    question:
      "Is extensive web development or data science experience required?",
    answer:
      "Nope! Mentorship is a core value of our organization so we are always looking to take less experienced developers as long as you are willing to put in the time and have the passion to learn. You will have a tight feedback loop with your project leads along with experienced members on your team to ensure your success and project’s success in-order to benefit the nonprofit your team is working with."
  }
];

const studentProcess = [
  {
    title: (
      <>
        <a href="https://www.facebook.com/events/450762432077881/">
          Info Session
        </a>
      </>
    ),
    detail: (
      <>
        <p>
          Be sure to come out to our Info Session to get an idea of who we are,
          what we do, and the impact Hack4Impact has. We hope to see you there
          and get to know each other!
        </p>
        {/* <b className="pt-1"> Details: 7PM - 8PM @ Siebel 1404 </b> */}
        {/* <p>
          More details at our{" "}
          <a href="https://www.facebook.com/events/450762432077881/">
            Facebook Event!
          </a>{" "}
        </p> */}
      </>
    ),
    icon: <Calendar />,
    date: infoSessionDate
  },
  {
    title: "Technical Workshop",
    detail:
      "Come by to learn more about the technologies we use at Hack4Impact including React, Redux, and Flask. We'll be going through why we use these libraries and then diving into code.",
    icon: <Education />,
    date: technicalWorkshopDate
  },
  {
    title: "Applications",
    detail: (
      <>
        <p>
          Fill out our online application before 11:59 p.m. on Friday, September
          7! To give yourself the best shot, be sure to start early and fill
          this out as soon as possible.
        </p>
        <ActionButton
          style={{ display: "block", marginTop: "10px" }}
          text="Apply Now"
          link={applicationLink}
        />
      </>
    ),
    icon: <Contract />,
    date: applicationDueDate
  },
  {
    title: "First Round Interviews",
    detail:
      "Hack4Impact looks for students who are hungry to learn, excellent teammates, and are passionate for tech and social impact. Our first round behavioral interviews will be 20 minutes long and you will get meet a couple of our members.",
    icon: <Interview />,
    date: firstRoundInterviewDate
  },
  {
    title: "Second Round Interviews",
    detail:
      "This will be a 30 minute interview with two of our members and answer technical questions. We encourage disccussion throughout the interview and you’ll have an opportunity to ask questions to learn more about us.",
    icon: <Interview />,
    date: secondRoundInterviewDate
  },
  {
    title: "Take Home Exercise",
    detail:
      "A small, take home project that requires no prior experience to complete, and is designed to expose you to the technologies that we use.",
    icon: <Contract />,
    date: takeHomeExerciseDate
  }
];

const closedText = (
  <b>
    Our current application period for {currentSemester} has closed! Our next
    application period will begin next semester, {nextSemester}. Stop by then
    for more information!
  </b>
);
export default {
  title: "Students",
  applicationLink,
  quote,
  faq,
  studentProcess,
  closedText
};
