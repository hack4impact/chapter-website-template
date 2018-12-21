import React from "react";

const ProjectContainer = ({ title, subtitle, image, delay }) => (
  <div
    className="project-item"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), ${image}`
    }}
  >
    <h4>{title}</h4>
    <p>{subtitle}</p>
    <style jsx>{`
      .project-item {
        box-shadow: 3px 3px 20px rgba(44, 62, 80, 0.1);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 3px;
        color: #f9fafc;
        display: flex;
        justify-content: flex-end;
        overflow: hidden;
        padding: 20px;
        flex-flow: column;
        height: 95%;
        width: auto;
        min-height: 200px;
      }
      p {
        margin: 0px;
        color: #f9fafc;
        font-weight: 650;
      }
    `}</style>
  </div>
);

export default ProjectContainer;
