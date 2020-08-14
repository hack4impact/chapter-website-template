import React, { useEffect } from "react";
import Head from "../../components/head";
import Nav from "../../components/nav";
import GradientBanner from "../../components/gradientBanner";
import ProjectList from "../../components/projects/projectList";
import ProjectExplore from "../../components/projects/projectExplore";
import Footer from "../../components/footer";
import { initializeGA, logPage } from "../../components/Analytics";

export default function Projects() {
  useEffect(() => {
    initializeGA();
    logPage();
  }, []);

  // return project List (regular project Page) if not query (just /projets)
  return (
    <div>
      <Head title="Hack4Impact Projects" />
      <Nav navType="otherNav" />
      <GradientBanner
        arrow
        title="Our Work"
        subHeadline="In today&#39;s world, we are capable of changing the lives of those
                halfway across the country. While tech has enabled us to have a
                larger reach, we also understand that we have a responsibility
                to build tools that are more than just pet projects. We strive
                to deliver incredible value to the nonprofits we are fortunate
                enough to work with and look forward to seeing our products
                continue to be used for years to come."
        buttonText="Our Github"
        buttonLink="https://github.com/hack4impact-uiuc"
        isLeftButtonDisplayed
        isRightButtonDisplayed
      />
      <ProjectList />
      <ProjectExplore />
      <Footer />
    </div>
  );
}
