import React from 'react';
import Section from '../section';
import { Container, Row, Col } from 'reactstrap';
import Timeline from './timeline';

const ApplicationProcess = ({ steps }) => (
  <Section darkgrey>
    <Container>
      <Row>
        <div className="col-md-12">
          <h2 className="text-center">Application Process</h2>
        </div>
      </Row>
      <Row>
        <Col md="12">
          <Timeline steps={steps} />
        </Col>
      </Row>
    </Container>
  </Section>
);
export default ApplicationProcess;
