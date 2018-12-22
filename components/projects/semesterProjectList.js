import { Container, Row, CardDeck } from "reactstrap";
import ProjectCards from "./projectCards";
import projectData from "../../data/projectData";

export default () => (
  <Container>
    {projectData.map(semester => (
      <div>
        <Row>
          <h1 className="section-title center">
            {" "}
            {semester.semester} Projects{" "}
          </h1>
        </Row>
        <CardDeck>
          {semester.projects.map(project => (
            <ProjectCards
              title={project.name}
              imgPath={project.coverImagePath}
              link={`/projects?name=${project.id}`}
              subTitle={project.detail}
            />
          ))}
        </CardDeck>
      </div>
    ))}
  </Container>
);
