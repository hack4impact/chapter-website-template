import Section from "../section";
import { Container, Row, Col } from "reactstrap";
import Timeline from "./timeline";
import ActionButton from "../actionButton";

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
        {/* <div className="center">
          <ActionButton
            text="Apply Now"
            link="https://docs.google.com/forms/d/e/1FAIpQLSeart7T-6sR61MXhdOfsN0n7oJ8ZThYeNjdqPnsLQLzLNKL2A/viewform"
          />
        </div> */}
      </Row>
    </Container>
  </Section>
);
export default ApplicationProcess;
