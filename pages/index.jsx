import React from 'react';
import Banner from '../components/homepage/banner';
import OurWorkSection from '../components/homepage/ourWork';
import InvolveSection from '../components/homepage/involveSection';
import ClientSlider from '../components/homepage/clientSlider';
import PartnerSection from '../components/homepage/partnerSection';
import OtherChapters from '../components/homepage/otherChapters';
import { ToastContainer } from 'react-toastify';
import Head from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { initializeGA, logPage } from '../components/Analytics';

class Home extends React.Component {
  componentDidMount() {
    // need to open it once component is mounted bc of "document not found errors"
    // toast(<ToastText text="Student Applications are Open!" />, {
    //   className: "announcement",
    //   bodyClassName: "announcement-body"
    // });
    initializeGA();
    logPage();
  }

  render() {
    return (
      <div>
        <Head title="Hack4Impact UIUC" />
        <Nav navType="mainNav" />
        <ToastContainer />
        <Banner />
        <OurWorkSection />
        <ClientSlider />
        <InvolveSection />
        <PartnerSection />
        <OtherChapters />
        <Footer />
      </div>
    );
  }
}

export default Home;
