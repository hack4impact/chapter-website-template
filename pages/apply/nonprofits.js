import { Container } from "reactstrap";
import FAQ from "../../components/faq";
import GradientBanner from "../../components/gradientBanner";
import ServicesDetail from "../../components/apply/nonprofit/servicesDetail";
import Quote from "../../components/quote";
import Section from "../../components/section";
import ApplicationProcess from "../../components/apply/applicationProcess";

// constants
const quote = {
  text:
    "We absolutely recommend working with Hack4Impact. We needed to address English competency in Cambodia, and Hack4Impact was the actual organization who helped us get it done. Hack4Impact gives nonprofit organizations an opportunity to collaborate and support their mission in ways they even may not have considered.",
  source: "Kelly Wolfe",
  sourceTitle:
    "Love Without Boundaries Managing Director of Strategic Partnerships"
};
const questions = [
  {
    question: "How often do teams meet with their clients?",
    answer:
      "Meeting frequency is very dependent on the team and client. Generally, teams hold weekly or biweekly meetings with their clients. Other checkpoints include initial calls to scope out and define the project with our project leads, an MVP demo, and a Final Handoff presentation."
  },
  {
    question: "Is there a development fee?",
    answer:
      "We typically charge a fee of $2,000 to our clients for any work that we do. However, this fee can be reduced on a need basis."
  },
  {
    question: "How can I maximize my chances of working with Hack4Impact?",
    answer:
      "Fill out our interest form and come in with some initial project ideas. Don’t worry about the validity of those ideas - we simply use them as a starting point for deeper conversation regarding your organization during our initial call!"
  }
];
const subHeadline =
  "As a nonprofit, you deliver tremendous social value to the community every day. What if you could leverage technology to make your work even more efficient, effective, or far-reaching?";
const title = "Non Profit Organizations";
const applicationLink =
  "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdnDbHQdqMH4Vzd6jU9PBmnX9NPMh2J5tPh9VdEvC8m7SDnCQ/viewform";

// page component itself
const NonProfits = () => (
  <div>
    <GradientBanner
      color="#64ab8a"
      title={title}
      subHeadline={subHeadline}
      buttonText="Apply Now"
      buttonLink={applicationLink}
    />
    <ServicesDetail />
    <Quote
      quote={quote.text}
      source={quote.source}
      sourceTitle={quote.sourceTitle}
    />
    <ApplicationProcess />
    <Container>
      <FAQ questions={questions} />
    </Container>
  </div>
);

export default NonProfits;
