import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Section from '../section';

function DirectorQuotes({ content }) {
  return (
    <Section>
      <Row>
        <div className="text-center section-title">
          <h2>Our Team</h2>
        </div>
      </Row>

      <Row>
        <div className="mb-3 text-center">
          <Col md="12">
            <h4 className="text-title">
              <em> Message from our Directors </em>
            </h4>
          </Col>
        </div>
      </Row>
      <Row>
        {content.map(({ authorInfo, quote, yearWritten }) => (
          <Col md="6" key={authorInfo.name}>
            <Card className="card border-0">
              <div className="text-center mb-2">
                <img
                  className="rounded-circle img-fluid director-icon"
                  src={authorInfo.image.url}
                  id="co-director"
                  alt={authorInfo}
                />
              </div>
              <CardBody className="card-body">
                <blockquote className="blockquote text-center mb-0">
                  <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(quote.json) }}></div>
                  <footer className="blockquote-footer">
                    {authorInfo.name}
                    <cite title="Source Title"> {yearWritten} </cite>
                    {authorInfo.linkedIn !== undefined && (
                      <a href={authorInfo.linkedIn}>
                        {' '}
                        |{' '}
                        <img
                          width="12"
                          className="linkedin-icon pb-1"
                          src="/icons/linkedin.svg"
                          alt={`${authorInfo.name}'s LinkedIn`}
                        />
                      </a>
                    )}
                  </footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
        ))}
        <style jsx>{`
          .director-icon {
            max-height: 240px;
          }
        `}</style>
      </Row>
    </Section>
  );
}

export default DirectorQuotes;
