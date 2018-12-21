import GradientSection from "../components/gradientSection";
import ProjectList from "../components/projects/projectList";

const Projects = () => (
  <div>
    <GradientSection />
    <div className="arrow" />
    <ProjectList />
    <style jsx>{`
      .arrow {
        margin: auto;
        width: 0;
        height: 0;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
        border-top: 60px solid #c3d5fd;
      }
    `}</style>
  </div>
);

export default Projects;
