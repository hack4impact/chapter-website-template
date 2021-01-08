import React from 'react';
import Faq from '../../components/faq';
import GradientBanner from '../../components/gradientBanner';
import ServicesDetail from '../../components/apply/nonprofit/servicesDetail';
import Quote from '../../components/quote';
import ApplicationProcess from '../../components/apply/applicationProcess';
import Head from '../../components/head';
import Nav from '../../components/nav';

import data from '../../data/ngoApplyData';
import Footer from '../../components/footer';

// TODO: ADD `closed` prop to ApplicationProcess to add text about applications being closed!

function NonProfits() {
  return (
    <>
      <Head title="H4I Apply | Nonprofits" />
      <Nav navType="otherNav" />
      <GradientBanner
        color="#64ab8a"
        title={data.title}
        subHeadline={data.subHeadline}
        buttonText="Learn More"
        buttonLink={data.pitchbookLink}
        minorButtonText="Apply"
        minorButtonLink={data.applicationLink}
        isLeftButtonDisplayed
        isRightButtonDisplayed={false}
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
      <Faq questions={data.faq} />
    </>
  );
}

export default NonProfits;
