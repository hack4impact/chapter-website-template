import { Container, Row, Col } from "reactstrap";
import ProjectCards from "./projectCards";
import projectData from "../../data/projectData";

export default () => (
  <Container>
    {projectData.map(semester => (
      <div>
        <Row>
          <h1 className="section-title center">{semester.semester} Projects</h1>
        </Row>
        <Row>
          {semester.projects.map(project => (
            <Col md="4" sm="6" style={{ marginBottom: "25px" }}>
              <ProjectCards
                title={project.name}
                imgPath={project.coverImagePath}
                link={`/projects?name=${project.id}`}
                subTitle={project.detail}
              />
            </Col>
          ))}
        </Row>
      </div>
    ))}
  </Container>
);
