import React, { useEffect, useState } from 'react';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import Roadmap from '../components/roadmap';
import Header from '../components/header';
import WhyChooseUs from '../components/why-zeroloss';
import ZerolossBinance from '../components/zeroloss-binance';
import InfoChart from '../components/infoChart';


function Home() {

  return (
    <>
    
      <main className="main">
       
        <NavBar />
        <Header />
        <WhyChooseUs />
        <InfoChart />
        <ZerolossBinance />
        <Roadmap />
        <Footer />
        
      </main>
    </>
  );
  }

export default Home;