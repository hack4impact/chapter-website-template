import React from 'react';
import { Container } from 'reactstrap';
import Section from './section';
import FaqQuestion from './faqQuestion';

export default function Faq({ questions }) {
  return (
    <Section>
      <Container>
        <h1 className="section-title">Frequently Asked Questions</h1>
        {questions.map((question) => (
          <FaqQuestion
            question={question.question}
            answer={question.answer}
            key={question.question}
          />
        ))}
      </Container>
    </Section>
  );
}
