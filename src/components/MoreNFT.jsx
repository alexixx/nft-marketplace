import React from 'react';
import eyeImg from '../assets/img/icons/eye.svg';
import discoverImg from '../assets/img/content/home/discover.png';
import authorImg from '../assets/img/content/home/author.png';

import Button from '../UI/Button';

const MoreNFT = () => {
  return (
    <section className="more-nft">
      <div className="wrapper wrapper--row">
        <div className="wrapper wrapper--column">
          <h2 className="more-nft__title">Discover More NFTs</h2>
          <p className="more-nft__desc">Explore new trending NFTs</p>
        </div>
        <Button value="See All" icon={eyeImg} size="medium" />
      </div>

      <div className="more-nft__list">
        <div className="more-nft__card">
          <img src={discoverImg} alt="discover" className="more-nft__image" />
          <div className="more-nft__info">
            <p className="more-nft__name">Distant Galaxy</p>
            <div className="more-nft__artist">
              <img src={authorImg} alt="author" className="more-nft__avatar" />
              <p className="more-nft__author">MoonDancer</p>
            </div>
            <div className="more-nft__meta">
              <div>
                <p className="title">Price</p>
                <p className="value">1.63 ETH</p>
              </div>
              <div>
                <p className="title">Highest Bid</p>
                <p className="value">0.33 wETH</p>
              </div>
            </div>
          </div>
        </div>
        <div className="more-nft__card">
          <img src={discoverImg} alt="discover" className="more-nft__image" />
          <div className="more-nft__info">
            <p className="more-nft__name">Distant Galaxy</p>
            <div className="more-nft__artist">
              <img src={authorImg} alt="author" className="more-nft__avatar" />
              <p className="more-nft__author">MoonDancer</p>
            </div>
            <div className="more-nft__meta">
              <div>
                <p className="title">Price</p>
                <p className="value">1.63 ETH</p>
              </div>
              <div>
                <p className="title">Highest Bid</p>
                <p className="value">0.33 wETH</p>
              </div>
            </div>
          </div>
        </div>
        <div className="more-nft__card">
          <img src={discoverImg} alt="discover" className="more-nft__image" />
          <div className="more-nft__info">
            <p className="more-nft__name">Distant Galaxy</p>
            <div className="more-nft__artist">
              <img src={authorImg} alt="author" className="more-nft__avatar" />
              <p className="more-nft__author">MoonDancer</p>
            </div>
            <div className="more-nft__meta">
              <div>
                <p className="title">Price</p>
                <p className="value">1.63 ETH</p>
              </div>
              <div>
                <p className="title">Highest Bid</p>
                <p className="value">0.33 wETH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreNFT;
