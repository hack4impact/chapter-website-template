import React from "react";
import { Spring } from "react-spring";

const ProjectContainer = ({ title, subtitle, image, delay }) => (
  <Spring
    config={{ tension: 50, delay: delay }}
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}
  >
    {props => (
      <div
        className="project-item"
        style={{ backgroundImage: image, ...props }}
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
            opacity: 0.7;
          }
          .project-item::before {
            background-image: linear-gradient(
              to bottom right,
              #002f4b,
              #dc4225
            );
          }
          p {
            margin: 0px;
            color: #155da1;
            font-weight: 500;
          }
        `}</style>
      </div>
    )}
  </Spring>
);

export default ProjectContainer;
