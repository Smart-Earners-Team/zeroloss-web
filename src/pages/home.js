import React, { useEffect, useState } from 'react';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import Roadmap from '../components/roadmap';
import Header from '../components/header';
import WhyChooseUs from '../components/why-zeroloss';
import ZerolossBinance from '../components/zeroloss-binance';


function Home() {

  return <>
  <main className="main">
      <NavBar />
      <Header />
      <WhyChooseUs />
      <ZerolossBinance />
      <Roadmap />
      <Footer />

    </main>
    </>
  }

export default Home;