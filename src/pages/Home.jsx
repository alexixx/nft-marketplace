import React from 'react';

import Hero from '../components/Home/Hero';
import Trending from '../components/Home/Trending';
import TopCreators from '../components/Home/TopCreators';
import TopCategories from '../components/Home/TopCategories';
import MoreNFT from '../components/Home/MoreNFT';
import HighlightNFT from '../components/Home/HighlightNFT';
import HowItWorks from '../components/Home/HowItWorks';
import Subscribe from '../components/Home/Subscribe';

const Home = () => {
  return (
    <>
      <main>
        <div className="container">
          <Hero />
          <Trending />
          <TopCreators />
          <TopCategories />
          <MoreNFT />
        </div>
        <HighlightNFT />
        <div className="container">
          <HowItWorks />
          <Subscribe />
        </div>
      </main>
    </>
  );
};

export default Home;
