import React from 'react';
import Faq from '../../components/faq';
import GradientBanner from '../../components/gradientBanner';
import ServicesDetail from '../../components/apply/nonprofit/servicesDetail';
import Quote from '../../components/quote';
import ApplicationProcess from '../../components/apply/applicationProcess';
import Head from '../../components/head';
import ActionButton from '../../components/actionButton';
import data from '../../data/ngoApplyData';

function NonProfits() {
  return (
    <>
      <Head title="H4I Apply | Nonprofits" />
      <GradientBanner title={data.title} subHeadline={data.subHeadline}>
        <ActionButton link={data.applicationLink}>Apply</ActionButton>
      </GradientBanner>
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
