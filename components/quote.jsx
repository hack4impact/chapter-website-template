import React from 'react';
import Section from './section';
import { Container, Row, Col } from 'reactstrap';

const Quote = ({ quote, source, sourceTitle }) =>
  quote === undefined || quote === null ? (
    <></>
  ) : (
    <Section grey>
      <Container>
        <Row>
          <Col md="12">
            <blockquote className="blockquote">
              <b>
                <h1> “ </h1>
              </b>
              <p className="project-body-quote">
                <b>{quote}</b>
              </p>
              <footer className="blockquote-footer">
                {source}
                <cite title="Source Title">, {sourceTitle}</cite>
              </footer>
            </blockquote>
          </Col>
        </Row>
      </Container>
    </Section>
  );

export default Quote;
