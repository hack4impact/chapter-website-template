import { Container, Row, Col, Card } from "reactstrap";
import ProjectFeature from "./projectFeature";
import ProjectQuote from "../quote";

const ProjectDetail = ({ project }) => (
  <section>
    <Container>
      <Row>
        <Col md="6">
          <Card className="border-0">
            <h5 className="card-title text-center project-detail-title">
              Problem
            </h5>
            <div className="text-center mt-3 img-holder">
              <img
                src={project.problemImagePath}
                className="card-img-top light-shadow"
                id="project-photo"
              />
            </div>
          </Card>
        </Col>

        <Col md="6">
          <Card className="border-0">
            <h5 className="card-title text-center project-detail-title">
              Solution
            </h5>
            <div className="text-center mt-3 img-holder">
              <img
                src={project.solutionImagePath}
                className="card-img-top light-shadow"
                id="project-photo"
              />
            </div>
          </Card>
        </Col>
        <Row>
          <Col md="6">
            <div className="card-body">
              <p className="card-text text-center">{project.problem}</p>
            </div>
          </Col>
          <Col md="6">
            <div className="card-body">
              <p className="card-text text-center">{project.solution}</p>
            </div>
          </Col>
        </Row>
      </Row>
      <ProjectFeature
        featureImgSize={project.featureImgSize}
        features={project.features}
      />
    </Container>
    <ProjectQuote
      quote={project.quote}
      source={project.quoteSource}
      sourceTitle={project.quoteSourceTitle}
    />
    <style jsx>{`
      #project-photo {
        height: 80%;
        width: 80%;
      }

      .tech-stack div {
        padding: 5px;
        display: flex;
        justify-content: center;
      }
      .img-holder {
        min-height: 250px;
      }
    `}</style>
  </section>
);

export default ProjectDetail;
