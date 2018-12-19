import React from 'react'

const ProjectContainer = ({ title, subtitle, image }) => (
  <div className="project-item" style={{ backgroundImage: image }}>

    <h4>{title}</h4>
    <p>{subtitle}</p>
    <style jsx>{`
      .project-item {
        box-shadow: 3px 3px 20px rgba(44,62,80,0.1);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 3px;
        color: #F9FAFC;
        display: flex;
        justify-content: flex-end;
        overflow: hidden;
        padding: 20px;
        flex-flow: column;
        height: 95%;
        width: auto;
        min-height: 200px;
        opacity: .7;
      }
      .project-item::before {
        background-image: linear-gradient(to bottom right,#002f4b,#dc4225);
      }
      p {
        margin: 0px;
        color: #155DA1;
        font-weight: 500;
      }
  `}</style>
  </div>
)

export default ProjectContainer