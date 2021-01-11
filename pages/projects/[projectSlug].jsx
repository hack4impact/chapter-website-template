import React from 'react';
import Head from '../../components/head';
import fetchContent from '../../utils/fetchContent';
import ProjectBanner from '../../components/projects/projectBanner';
import FeatureSlider from '../../components/featureSlider';

function ProjectPage({
  title,
  description,
  thumbnail,
  finalProductLink,
  codeRepoLink,
  technologiesUsed,
  problem,
  solution,
  featuresCollection,
  teamMembersCollection,
}) {
  return (
    <>
      <Head title={title} />
      <ProjectBanner
        title={title}
        description={description}
        codeRepoLink={codeRepoLink}
        finalProductLink={finalProductLink}
      />
      <FeatureSlider features={featuresCollection.items} />
      <pre>{title}</pre>
    </>
  );
}

export default ProjectPage;

// necessary to statically render all paths
export async function getStaticPaths() {
  const {
    websiteLayout: { projectsCollection },
  } = await fetchContent(`
  {
    websiteLayout(id:"dPAHTMUXe3gbb7hlXFIZ1") {
      projectsCollection {
        items {
          urlSlug
        }
      }
    }
  }
  `);

  const paths = projectsCollection.items.map(({ urlSlug }) => ({
    params: {
      projectSlug: urlSlug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// necessary to statically render all paths
export async function getStaticProps({ params: { projectSlug } }) {
  const { projectPageCollection } = await fetchContent(`
  {
    projectPageCollection(where: {urlSlug: "${projectSlug}"}, limit: 1) {
      items {
        title
        description {
          json
        }
        thumbnail {
          url
        }
        finalProductLink
        codeRepoLink
        technologiesUsed
        problem {
          json
        }
        solution {
          json
        }
        featuresCollection {
          items {
            header
            body {
              json
            }
            image {
              url
              description
            }
          }
        }
        teamMembersCollection {
          items {
            name
            title
            image {
              url
            }
            linkedIn
          }
        }
      }
    }
  }
  `);

  if (!projectPageCollection?.items?.length) {
    throw `The slug ${projectSlug} doesn't have an associated Contentful entry.
    Make sure your getStaticPaths method is pulling the right slugs!`;
  }
  const projectContent = projectPageCollection.items[0];

  return {
    props: {
      ...projectContent,
    },
  };
}
