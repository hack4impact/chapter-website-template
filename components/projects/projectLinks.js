import Section from "../section";
import { Row, Col } from "reactstrap";
import Link from "next/link";

const ProjectLinks = () => (
  <Section darkgrey>
    <Col sm="6">
      <h2>Other Links</h2>
    </Col>
    <Col sm="6">
      <Link>
        <a>Final Presentation</a>
      </Link>
    </Col>
  </Section>
);

export default ProjectLinks;
