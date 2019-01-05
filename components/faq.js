import React from "react";
import { Row, Col } from "reactstrap";
import Section from "./section";
import FaqQuestion from "./faqQuestion";

class FAQ extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section>
        <h1 className="section-title">Frequently Asked Questions</h1>
        {this.props.questions.map(question => (
          <FaqQuestion question={question.question} answer={question.answer} />
        ))}
      </Section>
    );
  }
}

export default FAQ;
