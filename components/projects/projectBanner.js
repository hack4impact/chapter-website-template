import { Button, Row, Col, Container } from "reactstrap";
import ActionButton from "../actionButton";
import Link from "next/link";
export default ({ title, clientDetail, clientLink }) => (
  <section class="project-page-banner">
    <Container class="margin-sm-all">
      <Row>
        <Col md="12">
          <h1 class="section-title">{title}</h1>
        </Col>
      </Row>

      <Row>
        <div class="col-md-8 offset-md-2">
          <p>{clientDetail}</p>
        </div>
      </Row>

      <Row class="text-center">
        <Col md="12">
          <ActionButton white text="Learn More" link={clientLink} />
        </Col>
      </Row>
    </Container>
  </section>
);
