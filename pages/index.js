import React from "react";
import Banner from "../components/homepage/banner";
import OurWorkSection from "../components/homepage/ourWork";
import InvolveSection from "../components/homepage/involveSection";
import ClientSlider from "../components/homepage/clientSlider";
import PartnerSection from "../components/homepage/partnerSection";
import { ToastContainer, toast } from "react-toastify";
import ToastText from "../components/toastText";
import Head from "../components/head";
import Nav from "../components/nav";

class Home extends React.Component {
  componentDidMount() {
    // need to open it once component is mounted bc of "document not found errors"
    // toast(<ToastText text="Student Applications are Open!" />, {
    //   className: "announcement",
    //   bodyClassName: "announcement-body"
    // });
  }

  render() {
    return (
      <div>
        <Head title="Hack4Impact UIUC" />
        <Nav navType="mainNav" />
        <Banner />
        <OurWorkSection />
        <ClientSlider />
        <InvolveSection />
        <PartnerSection />
      </div>
    );
  }
}

export default Home;
