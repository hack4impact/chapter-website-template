import React from 'react';
import Banner from '../components/homepage/banner';
import OurWorkSection from '../components/homepage/ourWork';
import InvolveSection from '../components/involveSection';
import PartnerSection from '../components/homepage/partnerSection';
import OtherChapters from '../components/homepage/otherChapters';
import { ToastContainer } from 'react-toastify';
import Head from '../components/head';
import fetchContent from '../utils/fetchContent';
import Section from '../components/section';
import { Container } from 'reactstrap';

function Home({ chapterLogos, previewProjects }) {
  return (
    <>
      <Head title="Hack4Impact" />
      <ToastContainer />
      <Banner />
      <OurWorkSection projects={previewProjects} />
      <Section grey>
        <Container>
          <h2 className="text-center">Get Involved</h2>
          <InvolveSection />
        </Container>
      </Section>
      <PartnerSection />
      <OtherChapters chapterLogos={chapterLogos} />
    </>
  );
}

export default Home;

export async function getStaticProps() {
  const {
    chapterCollection,
    websiteLayout: { projectsCollection },
  } = await fetchContent(`
  {
    chapterCollection {
      items {
        name
        websiteLink
        socialMediaLink
        codeRepoLink
        universityLogo {
          url
        }
      }
    }
    websiteLayout(id: "${process.env.LAYOUT_ENTRY_ID}") {
      projectsCollection(limit: 3) {
        items {
          title
          description {
            json
          }
          thumbnail {
            url
            description
          }
          urlSlug
        }
      }
    }
  }
  `);
  return {
    props: {
      chapterLogos: chapterCollection.items.map(
        ({ websiteLink, socialMediaLink, codeRepoLink, ...chapter }) => ({
          ...chapter,
          // not all chapters have a website,
          // so we need to have some solid fallbacks
          link: websiteLink ?? socialMediaLink ?? codeRepoLink ?? 'https://hack4impact.org',
        }),
      ),
      previewProjects: projectsCollection.items,
    },
  };
}
