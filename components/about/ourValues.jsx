import React from 'react';
import { Container, Row, Card, CardDeck, CardBody } from 'reactstrap';
import Section from '../section';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const OurValues = ({ content }) => (
  <Section darkgrey>
    <Container>
      <Row>
        <div className="text-center project-detail-title">
          <h2>Our Values</h2>
        </div>
      </Row>

      <CardDeck>
        {content.map(({ header, body, image }) => (
          <Card key={header}>
            <img className="card-img-top" src={image.url} alt={image.description} />
            <CardBody>
              <h4 className="text-title">{header}</h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(body.json),
                }}></div>
            </CardBody>
          </Card>
        ))}
      </CardDeck>
    </Container>
  </Section>
);

export default OurValues;
