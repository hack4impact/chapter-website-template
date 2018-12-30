import React from "react";
import GradientBanner from "../components/gradientBanner";
import MissionSection from "../components/about/missionSection";
import OurValues from "../components/about/ourValues";

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <GradientBanner
          title="We believe in using tech for good."
          subHeadline="Hack4Impact believes in technology’s huge potential to empower activists and humanitarians to create lasting and impactful social change. We work to foster the wider adoption of software as a tool for social good."
        />
        <MissionSection />
        <OurValues />
      </div>
    );
  }
}

export default AboutPage;
