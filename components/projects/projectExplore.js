import Section from "../section";
import { Container, Row, Col } from "reactstrap";
import ActionButton from "../actionButton";
import { Action } from "rxjs/internal/scheduler/Action";

const ProjectExplore = () => (
  <Section darkgrey>
    <Container>
      <Row>
        <div className=" text-center" id="main-headline">
          <h5 className="section-title"> Explore </h5>
        </div>
      </Row>

      <Row>
        <div className="text-center" id="sub-headline">
          <p>
            For more information on making a lasting impact through a project
            team or working with us to solve a core need for your organization,
            click below!
          </p>
        </div>
      </Row>

      <Row>
        <div className="text-center">
          <ActionButton
            style={{ marginRight: "10px" }}
            text="Students"
            link="/apply/students"
          />
          <ActionButton text="Non-profits" link="/apply/nonprofits" />
        </div>
      </Row>
    </Container>
  </Section>
);
export default ProjectExplore;
