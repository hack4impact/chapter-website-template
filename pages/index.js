import React from "react";
import Link from "next/link";
import { Container, Row } from "reactstrap";
import Head from "../components/head";
import Nav from "../components/nav";
import Banner from "../components/banner";
import Section from "../components/section";
import OurWorkSection from "../components/ourWork";
import Footer from "../components/footer";
import InvolveSection from "../components/involveSection";

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
