import React from "react";
import Link from "next/link";
// Used in Homescreen

const ProjectContainer = ({ title, subtitle, image, link }) => (
  <Link href={link}>
    <a>
      <div
        className="project-item"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), ${image}`
        }}
      >
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .project-item {
            margin: 60px 0;
          }
          p {
            padding-top: 20px;
          }
        }
        .project-item {
          box-shadow: 3px 3px 20px rgba(44, 62, 80, 0.1);
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 5px;
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
        .project-item:hover {
          box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        p {
          margin: 0px;
          color: #f9fafc;
          font-weight: 650;
        }
      `}</style>
    </a>
  </Link>
);

export default ProjectContainer;
