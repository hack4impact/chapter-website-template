import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Section from './section'
import ProjectContainer from './projectContainer';
import ActionButton from './actionButton';
import Link from 'next/link'

const OurWorkSection = () => (
  <Section>
    <Container>
      <div id="our-work-title-box">
        <h1 className="title text-center">We believe in using tech for good.</h1>
        <p className="subtitle text-center">
          Each semester, we work with three to five non-profits with the opportunity to build a great product that solves a core need.
          We work in small groups led by a project manager and technical lead to scope and develop the application, taking into account our clients’ requirements and suggestions
        </p>
      </div>

      <Row className="project-showcase-box">
        <Col sm="4">
          <ProjectContainer title="Cut 2 the Case" subtitle="How might we make students feel safer on campus?" image="url('/static/c2tc-cover.jpg')" />
        </Col>
        <Col sm="4">
          <ProjectContainer
            title="Child's Play"
            subtitle="How might we streamline the process of connecting children with effective games to order to alleviate their ailments?"
            image="url('/static/cp-cover.jpg')"
          />
        </Col>
        <Col sm="4">
          <ProjectContainer
            title="Global Giving"
            subtitle="How might we streamline the process of connecting children with effective games to order to alleviate their ailments?"
            image="url('/static/gg-cover.jpg')"
          />
        </Col>
      </Row>

      <Row style={{ marginTop: "40px" }}>
        <Button outline style={{ margin: "auto" }}>
          <Link>
            <a>View Other Projects</a>
          </Link>
        </Button>
      </Row>
    </Container>
    <style jsx>{`
      .subtitle {
        padding-top: 10px;
        color: #5b5e6d;
        letter-spacing: 1px;
      }
      #our-work-title-box{
        text-align: center;
        margin: 0 20px 40px 20px;
        padding-bottom: 20px;
      }
      .title {

      }
      .project-showcase-box {
        padding-top: 20px;
      }
    `}</style>
  </Section >

)

export default OurWorkSection