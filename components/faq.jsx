import React from 'react';
import { Container } from 'reactstrap';
import Section from './section';
import FaqQuestion from './faqQuestion';

export default function Faq({ questions }) {
  return (
    <Section>
      <Container>
        <h2 className="section-title">Frequently Asked Questions</h2>
        {questions.map(({ question, answer }) => (
          <FaqQuestion question={question} answer={answer} key={question} />
        ))}
      </Container>
    </Section>
  );
}
