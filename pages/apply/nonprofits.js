import React from "react"; // this is need to import svgs
import { Container } from "reactstrap";
import FAQ from "../../components/faq";
import GradientBanner from "../../components/gradientBanner";
import ServicesDetail from "../../components/apply/nonprofit/servicesDetail";
import Quote from "../../components/quote";
import Section from "../../components/section";
import ApplicationProcess from "../../components/apply/applicationProcess";
import Head from "../../components/head";
import Nav from "../../components/nav";

import data from "../../data/ngoApplyData";
import Footer from "../../components/footer";

// TODO: ADD `closed` prop to ApplicationProcess to add text about applications being closed!
const NonProfits = () => (
  <div>
    <Head title="Nonprofit Applications" />
    <Nav navType="otherNav" />
    <GradientBanner
      color="#64ab8a"
      title={data.title}
      subHeadline={data.subHeadline}
      buttonText="Apply Now"
      buttonLink={data.applicationLink}
    />
    <ServicesDetail />
    <Quote
      quote={data.quote.text}
      source={data.quote.source}
      sourceTitle={data.quote.sourceTitle}
    />
    <ApplicationProcess
      closedText={data.closedApplicationText}
      titleDetail={data.applicationDetail}
      processes={data.ngoProcess}
    />
    <Container>
      <FAQ questions={data.faq} />
    </Container>
    <Footer />
  </div>
);

export default NonProfits;
