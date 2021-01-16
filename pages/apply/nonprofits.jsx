import React from 'react';
import Faq from '../../components/faq';
import GradientBanner from '../../components/gradientBanner';
import ServicesDetail from '../../components/apply/nonprofit/servicesDetail';
import Quote from '../../components/quote';
import ApplicationProcess from '../../components/apply/applicationProcess';
import Head from '../../components/head';
import ActionButton from '../../components/actionButton';
import fetchContent from '../../utils/fetchContent';

function NonProfits({
  applicationLink,
  openRolesLink,
  description,
  timelineCollection,
  testimonialsCollection,
  faqsCollection,
}) {
  return (
    <>
      <Head title="H4I Apply | Nonprofits" />
      <GradientBanner
        title={'Nonprofit Organizations'}
        subHeadline={
          'As a nonprofit, you deliver tremendous social value to the community every day. What if you could leverage technology to make your work even more efficient, effective, or far-reaching?'
        }>
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
      {timelineCollection && <ApplicationProcess steps={timelineCollection.items} />}
      {faqsCollection && <Faq questions={faqsCollection.items} />}
    </>
  );
}

export default NonProfits;

export async function getStaticProps() {
  const {
    websiteLayout: { nonprofitApplication },
  } = await fetchContent(`
  {
    websiteLayout(id: "${process.env.LAYOUT_ENTRY_ID}") {
      nonprofitApplication {
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
    props: nonprofitApplication,
  };
}
