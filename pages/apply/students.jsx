import React from 'react';
import Faq from '../../components/faq';
import GradientBanner from '../../components/gradientBanner';
import ServicesDetail from '../../components/apply/nonprofit/servicesDetail';
import Quote from '../../components/quote';
import ApplicationProcess from '../../components/apply/applicationProcess';
import Head from '../../components/head';
import ActionButton from '../../components/actionButton';
import data from '../../data/studentApplyData';
import fetchContent from '../../utils/fetchContent';

function Students({
  applicationLink,
  openRolesLink,
  description,
  timelineCollection,
  testimonialsCollection,
  faqsCollection,
}) {
  return (
    <>
      <Head title="H4I Apply | Students" />
      <GradientBanner title={data.title} subHeadline={data.subHeadline}>
        {applicationLink && <ActionButton link={applicationLink}>Apply Now</ActionButton>}
        {openRolesLink && (
          <ActionButton white link={openRolesLink}>
            View Open Positions
          </ActionButton>
        )}
      </GradientBanner>
      <ServicesDetail content={description} />
      {testimonialsCollection.items.map(({ author, quote }) => (
        <Quote key={author} quote={quote} source={author} />
      ))}
      {timelineCollection?.items?.length > 0 && (
        <ApplicationProcess steps={timelineCollection.items} />
      )}
      {faqsCollection?.items?.length > 0 && <Faq questions={faqsCollection.items} />}
    </>
  );
}

export default Students;

export async function getStaticProps() {
  const {
    websiteLayout: { studentApplication },
  } = await fetchContent(`
  {
    websiteLayout(id:"dPAHTMUXe3gbb7hlXFIZ1") {
      studentApplication {
        applicationLink
        openRolesLink
        description {
          json
        }
        timelineCollection {
          items {
            header
            body {
              json
            }
            image {
              url
              description
            }
          }
        }
        testimonialsCollection {
          items {
            author
            quote {
              json
            }
          }
        }
        faqsCollection {
          items {
            question
            answer {
              json
            }
          }
        }
      }
    }
  }
  `);

  return {
    props: studentApplication,
  };
}
