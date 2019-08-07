import React from "react"; // to import svgs
import Phone from "../static/icons/phone-call.svg";
import Contract from "../static/icons/contract.svg";
import ActionButton from "../components/actionButton";
import Link from "next/link";

// constants that will affect links in the nonprofit application page
const applicationLink =
  "https://docs.google.com/forms/d/e/1FAIpQLScPK_Xj27DzZqlX44qaGk-ecuTM3Zs8T7iQgcE4NtCqgjSbgg/viewform";
const interestFormLink =
  "https://docs.google.com/forms/u/1/d/e/1FAIpQLSeart7T-6sR61MXhdOfsN0n7oJ8ZThYeNjdqPnsLQLzLNKL2A/viewform";
const projectAppExample =
  "https://docs.google.com/document/d/1SGG7gxu8lgWMOhxIULMSUZQa-4p0bLwrwDl4SAZW2lE/edit";

// constants for dates
const applicationDueDate = "September 1, 2019";
const currentSemester = "Fall 2019";
const nextSemester = "Spring 2020";

/*
what's exported
*/

export default {
  subHeadline:
    "As a nonprofit, you deliver tremendous social value to the community every day. What if you could leverage technology to make your work even more efficient, effective, or far-reaching?",
  title: "Non-Profit Organizations",
  applicationLink: applicationLink,
  interestFormLink: interestFormLink,
  ngoProcess: [
    {
      title: "Nonprofit Interest Form",
      detail: (
        <>
          This is a short form to get to know your organization better and your
          potential project ideas. It’ll help us get an initial sense of your
          organization’s goals, needs, and expectations. <br />
          <br />
          This <a href={interestFormLink}> form </a>
          is open throughout the year and shoot us an
          <a href="mailto:uiuc@hack4impact.org"> email</a> after you've
          submitted it!
          <ActionButton
            style={{ display: "block", marginTop: "10px" }}
            text="Fill Out"
            link={interestFormLink}
          />
        </>
      ),
      icon: <Contract />
    },
    {
      title: "Initial Call",
      detail:
        "We will reach out shortly to schedule a call to dive deeper into your organization and project ideas, while also explaining more about what we do and our goals. Then, we will also work with you to define and clarify your project ideas.",
      icon: <Phone />
    },
    {
      title: "Additional Calls",
      detail:
        "We may schedule additional calls to further tighten your project specifications.",
      icon: <Phone />
    },
    {
      title: "Project Application Due",
      detail: (
        <>
          You will officially submit the final application, and we will confirm
          that our goals and expectations are aligned. If everything checks out,
          our project leads will contact you to begin the development process!
          <ActionButton
            style={{ display: "block", marginTop: "10px" }}
            text="Apply Now"
            link={applicationLink}
          />
        </>
      ),
      icon: <Contract />,
      date: applicationDueDate
    }
  ],
  quote: {
    text:
      "We absolutely recommend working with Hack4Impact. We needed to address English competency in Cambodia, and Hack4Impact was the actual organization who helped us get it done. Hack4Impact gives nonprofit organizations an opportunity to collaborate and support their mission in ways they even may not have considered.",
    source: "Kelly Wolfe",
    sourceTitle:
      "Love Without Boundaries Managing Director of Strategic Partnerships"
  },
  faq: [
    {
      question: "What is the development process like?",
      answer: (
        <>
          Each project has a Product Manager, who will be responsible for
          communicating with the client, leading the team, and delivering a
          successful product as well as a team of software engineers to build
          the technology. They will be leading a team of 7-8 developers with a
          possibility of a designer as well. They will start off diving even
          deeper into your idea and problems and come up with a Product
          Requirements Doc (PRD) specifying your requirements and timeline.
          Development will start shortly afterwards and they will maintain
          contact with you throughout the entire process to gather feedback.
          Notable dates will the Minimum Viable Product (MVP) demo, which will
          happen around the middle of the semester and the handoff, which will
          be around the end of the semester. For more information, look{" "}
          <a href="https://h4i-project-timeline-qonwikgcqk.now.sh">here.</a>
        </>
      )
    },
    {
      question: "How often do teams meet with their clients?",
      answer:
        "Meeting frequency is very dependent on the team and client. Generally, teams hold weekly or biweekly meetings with their clients. Other checkpoints include initial calls to scope out and define the project with our project leads, an MVP demo, and a Final Handoff presentation."
    },
    {
      question: "Is there a development fee?",
      answer:
        "We typically charge a fee of $1,000 to our clients for any work that we do. However, this fee can be reduced on a need basis."
    },
    {
      question: "How can I maximize my chances of working with Hack4Impact?",
      answer: (
        <>
          Fill out our <a href={interestFormLink}>interest form</a> and come in
          with some initial project ideas. Don’t worry about the validity of
          those ideas - we simply use them as a starting point for deeper
          conversation regarding your organization during our initial call! A
          detailed application would be extremely helpful!{" "}
          <a href={projectAppExample}>Sample Application</a>
        </>
      )
    },
    {
      question: "What are some examples of projects?",
      answer: (
        <>
          Our <Link href="/projects">Past Projects</Link> are the best examples!
          Some other examples include:
          <ul>
            <li>
              A platform that displays your organization’s resources for the
              public on a map.{" "}
            </li>
            <li>
              A system to communicate with and collect data from users via text
              message surveys.
            </li>
            <li>A tool to automate a time-consuming manual process.</li>
            <li>
              An application that allows you to keep track of the organization's
              activities and see where cost cutting can occur.
            </li>
            <li>
              An application to keep track of the people you serve and better
              assess your overall impact.
            </li>
            <li>
              Or anything else that will empower you to broaden your impact!
            </li>
          </ul>
        </>
      )
    }
  ],
  applicationDetail: (
    <>
      Our application process is designed to be as straightforward as possible.
      As long as you fill out an application before <b>{applicationDueDate}</b>,
      we will carefully consider your submission and reach out to you if our
      goals align. Some aspects of the application we pay close attention to
      include technical complexity, impact, and mission. Our application link is{" "}
      <a href={applicationLink}>{applicationLink}</a>
    </>
  ),
  closedApplicationText: (
    <b>
      Our current application period for {currentSemester} has closed! Feel free
      to reach out to us or fill in the
      <a href={interestFormLink}> non-profit interest form </a>
      and we’ll still love to talk to you and potentially work with your
      organization in {nextSemester}.
    </b>
  )
};
