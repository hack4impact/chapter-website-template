import React from 'react';
import GradientBanner from '../components/gradientBanner';
import MissionSection from '../components/about/missionSection';
import OurValues from '../components/about/ourValues';
import Head from '../components/head';
import Team from '../components/about/team';
import fetchContent from '../utils/fetchContent';

function AboutPage({ members, alumni, values, directorQuotes }) {
  return (
    <div>
      <Head title="About Us" />
      <GradientBanner
        title="We believe in using tech for good."
        subHeadline="Hack4Impact believes in technology’s huge potential to empower activists and humanitarians to create lasting and impactful social change. We work to foster the wider adoption of software as a tool for social good."
        arrow
      />
      <MissionSection />
      <OurValues content={values} />
      <Team directorQuotes={directorQuotes} members={members} alumni={alumni} />
    </div>
  );
}

export default AboutPage;

export async function getStaticProps() {
  const {
    websiteLayout: {
      chapterValuesCollection,
      directorQuotesCollection,
      membersCollection,
      alumniCollection,
    },
  } = await fetchContent(`
  fragment profile on MemberProfile {
    name
    title
    image {
      url
    }
    linkedIn
  } 
  
  {
    websiteLayout(id:"${process.env.LAYOUT_ENTRY_ID}") {
      chapterValuesCollection {
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
      directorQuotesCollection {
        items {
          authorInfo {
            ...profile
          }
          quote {
            json
          }
          yearWritten
        }
      }
      membersCollection {
        items {
          ...profile
        }
      }
      alumniCollection {
        items {
          ...profile
        }
      }
    }
  }
  `);
  return {
    props: {
      values: chapterValuesCollection.items,
      directorQuotes: directorQuotesCollection.items,
      members: membersCollection.items,
      alumni: alumniCollection.items,
    },
  };
}
