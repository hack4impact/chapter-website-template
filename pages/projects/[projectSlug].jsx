import React from 'react';
import Head from '../../components/head';
import fetchContent from '../../utils/fetchContent';
import Team from '../../components/projects/Team';
import FeatureSlider from '../../components/projects/featureSlider';
import ProjectQuote from '../../components/quote';
import ContentBlock from '../../components/ContentBlock';
import ActionButton from '../../components/actionButton';
import { Row, Col } from 'reactstrap';
import GradientBanner from '../../components/gradientBanner';
import ProjectTechUsed from '../../components/projects/projectTechUsed';

function ProjectPage({
  title,
  description,
  thumbnail,
  finalProductLink,
  codeRepoLink,
  problem,
  solution,
  featuresCollection,
  testimonialsCollection,
  technologiesUsed,
  teamMembersCollection,
}) {
  return (
    <>
      <Head title={title} />
      <GradientBanner title={title} subHeadline={description}>
        <ActionButton className="mr-3" link={finalProductLink}>
          Try our final product
        </ActionButton>
        <ActionButton white link={codeRepoLink}>
          See our code
        </ActionButton>
      </GradientBanner>
      <section className="pt-0">
        <Row className="d-flex justify-content-center mb-5">
          <img className="thumbnail" src={thumbnail.url} alt={thumbnail.description} />
        </Row>
        <Row className="d-flex justify-content-center">
          <Col lg="4" md="6">
            <h2 className="mb-3">Problem</h2>
            <div className="card-body">
              <ContentBlock content={problem.json} />
            </div>
          </Col>
          <Col lg="4" md="6">
            <h2 className="mb-3">Solution</h2>
            <div className="card-body">
              <ContentBlock content={solution.json} />
            </div>
          </Col>
        </Row>
      </section>
      <FeatureSlider features={featuresCollection.items} />
      <ProjectTechUsed technologiesUsed={technologiesUsed.split(',').map((t) => t.trim())} />
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
      <Team members={teamMembersCollection.items} />
      <Row className="d-flex justify-content-center mb-5">
        <ActionButton white link="/projects">
          See more of our projects
        </ActionButton>
      </Row>
      <style jsx>{`
        :global(h2) {
          text-align: center;
          margin-bottom: 50px;
        }
        :global(section) {
          padding: 40px 0;
        }
        .thumbnail {
          @media (min-width: 600px) {
            position: relative;
            top: -30px;
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
    websiteLayout(id: "${process.env.LAYOUT_ENTRY_ID}") {
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
