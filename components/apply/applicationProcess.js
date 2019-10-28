import Section from "../section";
import { Container, Row, Col } from "reactstrap";
import Timeline from "./timeline";

const ApplicationProcess = ({ closed, processes, closedText, titleDetail }) => (
  <Section darkgrey>
    <Container>
      <Row>
        <div className="col-md-12">
          <h3 className="text-center project-detail-title">
            Application Process
          </h3>
        </div>
      </Row>

      <Row>
        <div className="col-md-12">
          <p className="text-center">{titleDetail}</p>
          {closed && closedText}
        </div>
      </Row>

      <Row>
        <Col md="12">
          <Timeline processes={processes} />
        </Col>
      </Row>
    </Container>
  </Section>
);
export default ApplicationProcess;
