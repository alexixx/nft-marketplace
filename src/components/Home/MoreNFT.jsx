import React from 'react';
import discoverImg from '../../assets/img/content/home/discover.png';
import authorImg from '../../assets/img/content/home/author.png';

import Button from '../../UI/Button';
import CardNFT from '../../UI/CardNFT';

const MoreNFT = () => {
  return (
    <section className="more-nft">
      <div className="wrapper wrapper--row">
        <div className="wrapper wrapper--column">
          <h2 className="more-nft__title">Discover More NFTs</h2>
          <p className="more-nft__desc">Explore new trending NFTs</p>
        </div>
        <Button value="See All" icon="eye" size="medium" />
      </div>

      <div className="more-nft__list">
        <CardNFT
          title="Distant Galaxy"
          author="MoonDancer"
          price="1.63"
          highestBid="0.33"
          imgCard={discoverImg}
          imgAuthor={authorImg}
        />
        <CardNFT
          title="Distant Galaxy"
          author="MoonDancer"
          price="1.63"
          highestBid="0.33"
          imgCard={discoverImg}
          imgAuthor={authorImg}
        />
        <CardNFT
          title="Distant Galaxy"
          author="MoonDancer"
          price="1.63"
          highestBid="0.33"
          imgCard={discoverImg}
          imgAuthor={authorImg}
        />
      </div>
    </section>
  );
};

export default MoreNFT;
