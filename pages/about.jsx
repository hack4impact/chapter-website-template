import React from 'react';
import GradientBanner from '../components/gradientBanner';
import MissionSection from '../components/about/missionSection';
import OurValues from '../components/about/ourValues';
import Head from '../components/head';
import Team from '../components/about/team';
import fetchContent from '../utils/fetchContent';

function AboutPage({ members, alumni }) {
  return (
    <div>
      <Head title="About Us" />
      <GradientBanner
        title="We believe in using tech for good."
        subHeadline="Hack4Impact believes in technology’s huge potential to empower activists and humanitarians to create lasting and impactful social change. We work to foster the wider adoption of software as a tool for social good."
        arrow
      />
      <MissionSection />
      <OurValues />
      <Team members={members} alumni={alumni} />
    </div>
  );
}

export default AboutPage;

export async function getStaticProps() {
  const memberProperties = `
    items {
      name
      title
      image {
        url
      }
      linkedIn
    }
  `;
  const { websiteLayout } = await fetchContent(`
  {
    websiteLayout(id:"dPAHTMUXe3gbb7hlXFIZ1") {
      membersCollection {
        ${memberProperties}
      }
      alumniCollection {
        ${memberProperties}
      }
    }
  }
  `);
  return {
    props: {
      members: websiteLayout.membersCollection.items,
      alumni: websiteLayout.alumniCollection.items,
    },
  };
}
