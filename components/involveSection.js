import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";
import Section from "./section";
import BlockQuote from "./blockQuote";
import Spring from "react-spring";
const InvolveSection = () => (
  <Section grey>
    <Container>
      <Row>
        <Col md="12">
          <h1 className="section-title text-center">Get Involved</h1>
        </Col>
        <Row className="involved-body">
          <Col md="5" className="nvolved-students">
            <h3 className="text-title text-center">Students</h3>
            <img src="/static/h4i-funny.jpg" class="img-fluid" />

            <p
              style={{
                margin: "30px 0 35px 0"
              }}
            >
              Are you passionate about software and Social Impact? Are you
              looking to join a unique and close- knit community?Join Us! Our
              mission provides a distinct experience to develop technical skills
              and interact with nonprofit clients all while applying your skills
              to impact real lives.
            </p>

            <div className="text-center">
              <Button outline color="primary" id="cta-button">
                <Link href="/students/apply">
                  <a>Learn More</a>
                </Link>
              </Button>
            </div>
          </Col>
          <Col md="5" className=" offset-md-2 involved-nonprofits">
            <h3 className="text-title text-center">Nonprofits</h3>
            <img src="/static/team-cheer.jpg" class="img-fluid" />

            <BlockQuote
              text="Working with Hack4Impact was easy, efficient and incredibly
              productive. They were quick to understand what we were looking to
              achieve and made the app even better and simpler to use than what
              I had imagined."
              author="- Bernardo H. Motta, Ph.D."
              position="Faculty Coordinator of the USFSP Neighborhood News Bureau"
            />
            <div class="text-center">
              <Button outline color="primary" id="cta-button">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdnDbHQdqMH4Vzd6jU9PBmnX9NPMh2J5tPh9VdEvC8m7SDnCQ/viewform">
                  <a>Learn More</a>
                </Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
    <style jsx>{`
      img {
        display: block;
        margin: 7% auto;
        border-radius: 5px;
        box-shadow: 2px 2px 2px grey;
        max-height: 260px; /* Temporary to preserve image heights */
      }
    `}</style>
  </Section>
);

export default InvolveSection;
