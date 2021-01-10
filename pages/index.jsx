import React from 'react';
import Banner from '../components/homepage/banner';
import OurWorkSection from '../components/homepage/ourWork';
import InvolveSection from '../components/homepage/involveSection';
import ClientSlider from '../components/homepage/clientSlider';
import PartnerSection from '../components/homepage/partnerSection';
import OtherChapters from '../components/homepage/otherChapters';
import { ToastContainer } from 'react-toastify';
import Head from '../components/head';

function Home() {
  return (
    <>
      <Head title="Hack4Impact" />
      <ToastContainer />
      <Banner />
      <OurWorkSection />
      <ClientSlider />
      <InvolveSection />
      <PartnerSection />
      <OtherChapters />
    </>
  );
}

export default Home;
