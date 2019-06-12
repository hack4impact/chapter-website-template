import { Component } from "react";
import ProjectBanner from "./projectBanner";
import ProjectDetail from "./projectDetail";
import ProjectTeam from "./projectTeam";
import ClientFeatures from "./clientFeatures";
import ProjectTechStack from "./projectTechStack";
import { Container } from "reactstrap";

class SpecificProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { project } = this.props;
    return (
      <div>
        <ProjectBanner
          title={project.name}
          clientDetail={project.clientDetail}
          clientLink={project.clientLink}
          githubLink={project.githubLink}
          projectLink={project.projectLink}
          previousLink={project.previousLink}
        />
        <ClientFeatures features={project.clientFeatures} />
        <ProjectDetail project={project} />
        <Container>
          <ProjectTechStack techStack={project.techStack} />
        </Container>
        <ProjectTeam team={project.team} />
      </div>
    );
  }
}

export default SpecificProjectPage;
