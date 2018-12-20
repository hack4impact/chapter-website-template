import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";
import { Spring } from "react-spring";
import Section from "../section";
import ProjectContainer from "../projectContainer";
import ActionButton from "../actionButton";
import OutlineButton from "../outlineButton";

const OurWorkSection = () => (
  <Section>
    <Container>
      <Spring
        config={{ delay: 300, tension: 100, fraction: 100 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => (
          <div style={props} id="our-work-title-box">
            <h2 className="title text-center">
              We believe in using tech for good.
            </h2>
            <p className="subtitle text-center">
              Each semester, we work with three to five non-profits with the
              opportunity to build a great product that solves a core need. We
              work in small groups led by a project manager and technical lead
              to scope and develop the application, taking into account our
              clients’ requirements and suggestions
            </p>
          </div>
        )}
      </Spring>

      <div className="project-showcase-box">
        <Row>
          <Col sm="4">
            <ProjectContainer
              delay={800}
              title="Cut 2 the Case"
              subtitle="How might we make students feel safer on campus?"
              image="url('/static/c2tc-cover.jpg')"
            />
          </Col>
          <Col sm="4">
            <ProjectContainer
              delay={900}
              title="Child's Play"
              subtitle="How might we streamline the process of connecting children with effective games to order to alleviate their ailments?"
              image="url('/static/cp-cover.jpg')"
            />
          </Col>
          <Col sm="4">
            <ProjectContainer
              delay={1000}
              title="Global Giving"
              subtitle="How might we streamline the process of connecting children with effective games to order to alleviate their ailments?"
              image="url('/static/gg-cover.jpg')"
            />
          </Col>
        </Row>
      </div>
      <Row style={{ paddingTop: "5px" }}>
        <Link href="/projects">
          <a className="link" style={{ color: "#155da1" }}>
            View our other projects
          </a>
        </Link>
      </Row>
    </Container>
    <style jsx>{`
      .subtitle {
        padding-top: 10px;
        color: #5b5e6d;
        letter-spacing: 1px;
      }
      #our-work-title-box {
        text-align: center;
        margin: 0 20px 40px 20px;
      }
      .project-showcase-box {
        padding: 10px 10px 5px 10px;
      }
      .link {
        font-weight: 400;
        line-height: 1.2;
        letter-spacing: normal;
        font-size: 15px;
        margin: auto;
        border-bottom: 1px solid #3f46ad;
        margin-top: 40px;
      }
      .title {
      }
    `}</style>
  </Section>
);

export default OurWorkSection;
