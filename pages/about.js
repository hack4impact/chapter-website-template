import React from "react";
import GradientSection from "../components/gradientSection";
import MissionSection from "../components/about/missionSection";

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <GradientSection
          title="We believe in using tech for good."
          subHeadline="Hack4Impact believes in technology’s huge potential to empower activists and humanitarians to create lasting and impactful social change. We work to foster the wider adoption of software as a tool for social good."
        />
        <MissionSection />
      </div>
    );
  }
}

export default AboutPage;
