import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Banner from '../components/banner'
import Section from '../components/section'
import { Container } from 'reactstrap'
import OurWorkSection from '../components/ourWork';
import Footer from '../components/footer'

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <Banner />
    <OurWorkSection />
    <Footer />
  </div>
)

export default Home
