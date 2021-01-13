import React from 'react';
import ApplicationProcess from '../../components/apply/applicationProcess';
import Quote from '../../components/quote';
import Faq from '../../components/faq';
import GradientBanner from '../../components/gradientBanner';
import Head from '../../components/head';
import data from '../../data/studentApplyData';
import ActionButton from '../../components/actionButton';

function Students() {
  return (
    <>
      <Head title="H4I Apply | Students" />
      <GradientBanner title={data.title} subHeadline={data.subHeadline}>
        <ActionButton className="mr-3" link="link-to-your-applications">
          Apply Now
        </ActionButton>
        <ActionButton white link="link-to-your-Notion-page">
          View Open Positions
        </ActionButton>
      </GradientBanner>
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
