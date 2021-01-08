import React from 'react';
import GradientBanner from '../../components/gradientBanner';
import ActionButton from '../../components/actionButton';
import Head from '../../components/head';
import Nav from '../../components/nav';
import { Container, Row, Col } from 'reactstrap';

function ApplyPage() {
  return (
    <>
      <Head title="Apply" />
      <Nav navType="otherNav" />
      <GradientBanner title="Apply" arrow />
      <section className="timeline-split-apply">
        <Container>
          <Row>
            <Col md="6" className="text-center">
              <a href="https://h4i-project-timeline.now.sh/">
                <img
                  src="/images/timeline.jpg"
                  className="img-fluid"
                  alt="Project timeline - weeks 1-4: project scoping, weeks 5-12: development, week 13: MVP, weeks 14-18: development, week 19: handoff"
                />
              </a>
            </Col>

            <Col md="6">
              <Row className="margin-lg-top">
                <div className="col-md-8 offset-md-3">
                  <h4 className="text-title">Students</h4>
                  <p>
                    Want to apply your skills to benefit the community? Learn how you can build
                    software products that has potential to impact lives alongside a team of
                    motivated and talented peers.
                  </p>
                  <ActionButton text="Apply" link="/apply/students" />
                </div>
              </Row>

              <Row className="margin-lg-top">
                <div className="col-md-8 offset-md-3">
                  <h4 clas="text-title">Nonprofits</h4>
                  <p>
                    Have a core need that your nonprofit wants solved? Learn more about our services
                    and how your organization can partner with us to support your organization's
                    goals and mission.
                  </p>
                  <ActionButton text="Apply" link="/apply/nonprofits" />
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ApplyPage;
