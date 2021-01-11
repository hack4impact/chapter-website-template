import React from 'react';
import Banner from '../components/homepage/banner';
import OurWorkSection from '../components/homepage/ourWork';
import InvolveSection from '../components/homepage/involveSection';
import ClientSlider from '../components/homepage/clientSlider';
import PartnerSection from '../components/homepage/partnerSection';
import OtherChapters from '../components/homepage/otherChapters';
import { ToastContainer } from 'react-toastify';
import Head from '../components/head';
import fetchContent from '../utils/fetchContent';

function Home({ chapterLogos }) {
  return (
    <>
      <Head title="Hack4Impact" />
      <ToastContainer />
      <Banner />
      <OurWorkSection />
      <ClientSlider />
      <InvolveSection />
      <PartnerSection />
      <OtherChapters chapterLogos={chapterLogos} />
    </>
  );
}

export default Home;

export async function getStaticProps() {
  const { chapterCollection } = await fetchContent(`
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
    },
  };
}
