import { Component } from "react";
import projectData from "../../data/projectData";
import ProjectBanner from "./projectBanner";
import ProjectDetail from "./projectDetail";
import ProjectQuote from "./projectQuote";
import ProjectTeam from "./projectTeam";
import ClientFeatures from "./clientFeatures";

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
        />
        <ClientFeatures features={project.clientFeatures} />
        <ProjectDetail project={project} />
        <ProjectQuote
          quote={project.quote}
          source={project.quoteSource}
          sourceTitle={project.quoteSourceTitle}
        />
        <ProjectTeam team={project.team} />
      </div>
    );
  }
}

export default SpecificProjectPage;
