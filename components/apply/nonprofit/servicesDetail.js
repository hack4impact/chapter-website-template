import Section from "../../section";
import { Container, Row, Col } from "reactstrap";
import ActionLink from "../../actionLink";

export default () => (
  <Section>
    <Container>
      <Row>
        <h3 className="text-center project-detail-title">Our Services</h3>
      </Row>

      <Row>
        <div className="col-md-12">
          <p>
            We currently support Web based and data science projects but we are
            open to other different types of projects. Historically, we’ve found
            that the impact we can make, the amount we can learn, and the time
            and effort needed to build these kinds of projects fit well with our
            constraints and goals.
          </p>
          <p>
            Please keep in mind that because one of our core focuses is on
            software engineering and developer education, our offerings
            currently do <i> not </i> include:
          </p>
          <ol>
            <li>
              <strong>Basic website design and development.</strong> We do not
              build websites that are purely content-based, such as Wordpress
              blogs or landing pages.
            </li>
            <li>
              <strong>Technology integration or consulting.</strong> We do not
              set up or integrate existing solutions such as Salesforce or
              Drupal.
            </li>
          </ol>
          <p>
            That said, if you’re looking for help with that sort of thing, we
            might be able to recommend some other tools or services that fit
            your needs. So feel free to reach out anyway!
          </p>
        </div>
      </Row>

      <Row>
        <ActionLink text="Our Previous Work" link="/projects" />
      </Row>
    </Container>
  </Section>
);
