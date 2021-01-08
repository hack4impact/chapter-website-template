import React from 'react';
import ApplicationProcess from '../../components/apply/applicationProcess';
import Quote from '../../components/quote';
import Faq from '../../components/faq';
import GradientBanner from '../../components/gradientBanner';
import Head from '../../components/head';
import Nav from '../../components/nav';
import data from '../../data/studentApplyData';

function Students() {
  return (
    <>
      <Head title="H4I Apply | Students" />
      <Nav navType="otherNav" />
      <GradientBanner
        color="#64ab8a"
        title={data.title}
        subHeadline={data.subHeadline}
        buttonText="Apply Now"
        buttonLink={data.applicationLink}
        minorButtonLink="https://www.notion.so/h4iuiuc/Join-Hack4Impact-UIUC-2e875ce396b34e6ebb23c6dda57a89aa"
        minorButtonText="View Positions"
        isLeftButtonDisplayed={false}
        isRightButtonDisplayed
      />
      <ApplicationProcess
        closed
        closedText={data.closedText}
        processes={data.studentProcess}
        titleDetail={data.applicationDetail}
      />
      <Quote
        quote={data.quote.text}
        source={data.quote.source}
        sourceTitle={data.quote.sourceTitle}
      />
      <Faq questions={data.faq} />
    </>
  );
}

export default Students;
