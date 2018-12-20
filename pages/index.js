import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Banner from "../components/homepage/banner";
import OurWorkSection from "../components/homepage/ourWork";
import InvolveSection from "../components/homepage/involveSection";

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <Banner />
    <OurWorkSection />
    <InvolveSection />
    <Footer />
  </div>
);

export default Home;
