import { Component } from "react";

import ProjectList from "../components/projects/projectList";
import SpecificProjectPage from "../components/projects/specificProjectPage";
import ErrorMessage from "../components/errorMessage";
import ProjectExplore from "../components/projects/projectExplore";

import projectData from "../data/projectData";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static async getInitialProps({ query, pathname }) {
    return { query };
  }
  render() {
    const { query } = this.props;
    // return project List (regular project Page) if not query (just /projets)
    if (Object.keys(query).length === 0 && query.constructor === Object) {
      return (
        <>
          <ProjectList />
          <ProjectExplore />
        </>
      );
    }
    // else its something like this /project?name=lwb
    for (var i = 0; i < projectData.length; i++) {
      const semester = projectData[i];
      for (var y = 0; y < semester.projects.length; y++) {
        if (semester.projects[y].id === query.name) {
          return (
            <div>
              <SpecificProjectPage project={semester.projects[y]} />
            </div>
          );
        }
      }
    }

    // project DNE and not just /projects (regular project Page)
    return (
      <div>
        <ErrorMessage message="Project Doesn&#39;t exist" />
      </div>
    );
  }
}

export default Projects;
