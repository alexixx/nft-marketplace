import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Trending from '../components/Trending';
import TopCreators from '../components/TopCreators';
import Categories from '../components/Categories';
import MoreNFT from '../components/MoreNFT';
import HighlightNFT from '../components/HighlightNFT';
import HowItWorks from '../components/HowItWorks';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Hero />
          <Trending />
          <TopCreators />
        </div>
      </main>
    </>
  );
};

export default Home;
