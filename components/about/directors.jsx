import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";

import { ImagePathConversion } from "../../data/helper";
import Section from "../section";

export default function Directors({ directors }) {
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
              <em> Message from our Co-Directors </em>
            </h4>
          </Col>
        </div>
      </Row>
      <Row>
        {directors.map((director) => (
          <Col md="6" key={director.name}>
            <Card className="card border-0">
              <div className="text-center mb-2">
                <img
                  className="rounded-circle img-fluid director-icon"
                  src={ImagePathConversion(director.name)}
                  id="co-director"
                  alt={director.name}
                />
              </div>
              <CardBody className="card-body">
                <blockquote className="blockquote text-center mb-0">
                  <p>"{director.quote}"</p>
                  <footer className="blockquote-footer">
                    {director.name}
                    <cite title="Source Title"> {director.year} </cite>
                    {director.linkedin !== undefined && (
                      <a href={director.linkedin}>
                        {" "}
                        |{" "}
                        <img
                          width="12"
                          className="linkedin-icon pb-1"
                          src="/icons/linkedin.svg"
                          alt={`${director.name}'s LinkedIn`}
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
