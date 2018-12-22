import { Button, Row, Col, Container } from "reactstrap";
import ActionButton from "../actionButton";
import Link from "next/link";
export default ({ title, clientDetail, clientLink }) => (
  <>
    <section className="project-page-banner">
      <Container className="margin-sm-all">
        <Row>
          <Col md="12">
            <h1 className="section-title">{title}</h1>
          </Col>
        </Row>

        <Row>
          <div className="col-md-8 offset-md-2">
            <p>{clientDetail}</p>
          </div>
        </Row>

        <Row className="text-center">
          <Col md="12">
            <ActionButton white text="Learn More" link={clientLink} />
          </Col>
        </Row>
      </Container>
    </section>
    <style jsx>{`
      .project-page-banner {
        padding: 7% 0;
        background: radial-gradient(white, #64ab8a);
        background-size: cover;
        background-attachment: fixed;
        text-align: center;
      }
    `}</style>
  </>
);
