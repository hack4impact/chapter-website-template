import { Component } from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import GradientBanner from "../components/gradientBanner";
import ProjectList from "../components/projects/projectList";
import SpecificProjectPage from "../components/projects/specificProjectPage";
import ErrorMessage from "../components/errorMessage";
import ProjectExplore from "../components/projects/projectExplore";
import Footer from "../components/footer";
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
        <div>
          <Head title="Hack4Impact Projects" />
          <Nav navType="otherNav" />
          <GradientBanner
            arrow
            title="Our Work"
            subHeadline="In today&#39;s world, we are capable of changing the lives of those
                halfway across the country. While tech has enabled us to have a
                larger reach, we also understand that we have a responsibility
                to build tools that are more than just pet projects. We strive
                to deliver incredible value to the nonprofits we are fortunate
                enough to work with and look forward to seeing our products
                continue to be used for years to come."
            buttonText="Our Github"
            buttonLink="https://github.com/hack4impact-uiuc"
          />
          <ProjectList />
          <ProjectExplore />
          <Footer />
        </div>
      );
    }
    // else its something like this /project?name=lwb
    for (var i = 0; i < projectData.length; i++) {
      const semester = projectData[i];
      for (var y = 0; y < semester.projects.length; y++) {
        if (semester.projects[y].id === query.name) {
          return (
            <div>
              <Head title={semester.projects[y].name} />
              <Nav navType="otherNav" />
              <SpecificProjectPage project={semester.projects[y]} />
              <Footer />
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
