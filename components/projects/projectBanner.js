import { Row, Col, Container } from "reactstrap";
import ActionButton from "../actionButton";
import Link from "next/link";

export default ({
  title,
  clientDetail,
  clientLink,
  githubLink,
  projectLink,
  previousLink
}) => (
  <>
    <section className="project-page-banner">
      <Container className="margin-sm-all">
        <Row>
          <Col md="12">
            <h1 className="project-title mb-4">
              <Link href={clientLink}>
                <a className="section-title-link">{title}</a>
              </Link>
            </h1>
          </Col>
        </Row>

        <Row>
          <div className="col-md-8 offset-md-2">
            <p className="project-subtitle">{clientDetail}</p>
          </div>
        </Row>

        <Row className="text-center">
          <Col md="12">
            {projectLink !== undefined && projectLink != null ? (
              <ActionButton
                text="Final Product"
                link={projectLink}
                white
                style={{ marginRight: "10px" }}
              />
            ) : null}
            {githubLink !== undefined && githubLink !== null ? (
              <ActionButton text="View Code" link={githubLink} white />
            ) : null}
            {previousLink !== undefined && previousLink !== null ? (
              <div className="previous-button">
                <ActionButton text="View Previous Project" link={previousLink} white />
              </div>
            ) : null }
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
        font-family: "Chivo", sans-serif;
        text-align: center;
      }
      .section-title-link {
        color: black;
      }
      .section-title-link:hover {
        color: #155da1;
      }
      .project-title {
        font-size: 40px;
        font-weight: 600;
      }
      .project-subtitle {
        font-size: 18px;
        font-weight: 500;
      }
      .previous-button {
        margin: 1vh;
        margin-bottom: 0vh;
      }
    `}</style>
  </>
);
