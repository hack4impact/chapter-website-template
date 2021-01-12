import React from 'react';
import Head from '../../components/head';
import fetchContent from '../../utils/fetchContent';
import ProjectBanner from '../../components/projects/projectBanner';
import FeatureSlider from '../../components/featureSlider';
import ProjectQuote from '../../components/quote';
import ContentBlock from '../../components/ContentBlock';
import { Row, Col } from 'reactstrap';

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
  testimonialsCollection,
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
      <section className="pt-0">
        <Row className="d-flex justify-content-center mb-5">
          <img className="thumbnail" src={thumbnail.url} alt={thumbnail.description} />
        </Row>
        <Row className="d-flex justify-content-center">
          <Col lg="4" md="6">
            <h2>Problem</h2>
            <div className="card-body">
              <ContentBlock content={problem.json} />
            </div>
          </Col>
          <Col lg="4" md="6">
            <h2>Solution</h2>
            <div className="card-body">
              <ContentBlock content={solution.json} />
            </div>
          </Col>
        </Row>
      </section>
      <FeatureSlider features={featuresCollection.items} />
      {testimonialsCollection.items.map(({ author, quote }) => {
        const [authorName, authorTitle] = author.split(',');
        return (
          <ProjectQuote
            key={authorName}
            quote={quote}
            source={authorName}
            sourceTitle={authorTitle}
          />
        );
      })}
      <style jsx>{`
        :global(h2) {
          font-family: var(--accent-font);
          text-align: center;
        }
        :global(section) {
          padding: 40px 0;
        }
        .thumbnail {
          @media (min-width: 600px) {
            position: relative;
            top: -50px;
            max-width: 500px;
          }
          width: 100%;
          object-fit: cover;
          box-shadow: 0 10px 20px var(--primary-dark-2);
        }
      `}</style>
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
        testimonialsCollection {
          items {
            author
            quote {
              json
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
