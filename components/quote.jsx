import React from 'react';
import Section from './section';
import { Container, Row, Col } from 'reactstrap';
import ContentBlock from './ContentBlock';

const Quote = ({ quote, source, sourceTitle }) => (
  <Section grey>
    <Container>
      <Row>
        <Col md="12">
          <blockquote className="blockquote">
            <div className="project-body-quote">
              <ContentBlock content={quote.json} />
            </div>
            <footer className="blockquote-footer">
              {source}
              {sourceTitle && <cite title="Source Title">, {sourceTitle}</cite>}
            </footer>
          </blockquote>
        </Col>
      </Row>
    </Container>
    <style jsx>{`
      blockquote {
        font-weight: bold;
      }
      .project-body-quote::before {
        content: '“';
        font-size: 48px;
        font-weight: bold;
        line-height: 0;
      }
    `}</style>
  </Section>
);

export default Quote;
