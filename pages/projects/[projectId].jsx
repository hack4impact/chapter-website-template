import React from 'react';
import { useRouter } from 'next/router';
import Head from '../../components/head';
import Nav from '../../components/nav';
import SpecificProjectPage from '../../components/projects/specificProjectPage';
import ErrorMessage from '../../components/errorMessage';
import projectData from '../../data/projectData';

function Projects() {
  const {
    query: { projectId },
  } = useRouter();

  // return project List (regular project Page) if not query (just /projets)

  // else its something like this /project?name=lwb
  for (let i = 0; i < projectData.length; i++) {
    const semester = projectData[i];
    for (let y = 0; y < semester.projects.length; y++) {
      if (semester.projects[y].id === projectId) {
        return (
          <div>
            <Head title={semester.projects[y].name} />
            <Nav navType="otherNav" />
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

export default Projects;

// necessary to statically render all paths
export function getStaticPaths() {
  let projectIds = [];

  projectData.forEach((semester) =>
    semester.projects.forEach((project) => projectIds.push(project.id)),
  );

  return {
    paths: projectIds.map((projectId) => ({ params: { projectId } })),
    fallback: false,
  };
}

// necessary to statically render all paths
export function getStaticProps() {
  return {
    props: {},
  };
}
