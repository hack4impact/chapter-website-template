import React, { Component } from "react";
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

import { initializeGA, logPage } from "../../components/Analytics"

// TODO: ADD `closed` prop to ApplicationProcess to add text about applications being closed!
class NonProfits extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    initializeGA()
    logPage()
  }

  render() {
    return (
      <div>
        <Head title="H4I Apply | Nonprofits" />
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
        <FAQ questions={data.faq} />
        <Footer />
      </div>
    )
  }
}

export default NonProfits;
