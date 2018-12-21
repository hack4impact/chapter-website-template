/*
  Mission Section holding the photo and our mission in the /about page
*/
import { Container, Row, Col } from "reactstrap";

const MissionSection = () => (
  <section className="mission-section">
    <Container>
      <Row>
        <Col md="12" className="text-center section-title">
          <h2>Our Mission</h2>
        </Col>
      </Row>

      <Row>
        <Col md="12" className="text-center">
          <p className="body-text">
            Hack4Impact exists for both nonprofits and students. We connect
            student software developers with nonprofits and other socially
            responsible businesses to develop powerful new tools for social
            change. This enables nonprofits to further their mission and better
            engage their clients. We are committed to increasing awareness of
            technology&#39;s potential for good.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="12" className="text-center">
          <img
            src="/static/images/fa18-team.jpg"
            className="img-fluid"
            id="mission-team"
          />
        </Col>
      </Row>
    </Container>
    <style jsx>{`
      #mission-team {
        max-width: 700px;
      }
    `}</style>
  </section>
);

export default MissionSection;
