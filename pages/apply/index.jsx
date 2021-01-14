import React from 'react';
import GradientBanner from '../../components/gradientBanner';
import Head from '../../components/head';
import { Container } from 'reactstrap';
import InvolveSection from '../../components/involveSection';
import Section from '../../components/section';

function ApplyPage() {
  return (
    <>
      <Head title="Apply" />
      <GradientBanner
        title="Apply"
        subHeadline="We're open to students and nonprofits of all backgrounds, no matter your project or technical expertise."
        arrow
      />
      <Section>
        <Container>
          <InvolveSection />
        </Container>
      </Section>
    </>
  );
}

export default ApplyPage;
