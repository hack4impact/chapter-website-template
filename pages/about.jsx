import React from 'react';
import GradientBanner from '../components/gradientBanner';
import MissionSection from '../components/about/missionSection';
import OurValues from '../components/about/ourValues';
import Head from '../components/head';
import Nav from '../components/nav';
import Team from '../components/about/team';

function AboutPage() {
  return (
    <div>
      <Head title="About Hack4Impact" />
      <Nav navType="otherNav" />
      <GradientBanner
        title="We believe in using tech for good."
        subHeadline="Hack4Impact believes in technology’s huge potential to empower activists and humanitarians to create lasting and impactful social change. We work to foster the wider adoption of software as a tool for social good."
        arrow
      />
      <MissionSection />
      <OurValues />
      <Team />
    </div>
  );
}

export default AboutPage;
