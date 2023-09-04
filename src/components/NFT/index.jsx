import React from 'react';

import contentImg from '../../assets/img/content/NFT/content.png';
import authorImg from '../../assets/img/content/home/author.png';
import globeIcon from '../../assets/img/icons/globe.svg';

import Timer from '../../UI/Timer';

const NFT = () => {
  return (
    <section className="nft">
      <div className="nft__wallpaper" style={{ backgroundImage: `url(${contentImg})` }}></div>
      <div className="container">
        <div className="nft__wrapper">
          <div className="nft__column">
            <h2 className="nft__title">The Orbitians</h2>
            <div className="nft__date">Minted on Sep 30, 2022</div>
            <p className="nft__subtitle">Created By</p>
            <div className="nft__artist">
              <img src={authorImg} alt="author" className="avatar" />
              Orbitian
            </div>
            <p className="nft__subtitle">Description</p>
            <div className="nft__desc">
              <p>The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain,</p>
              <p>
                There are all sorts of beings in the NFT Universe. The most advanced and friendly of
                the bunch are Orbitians.
              </p>
              <p>
                They live in a metal space machines, high up in the sky and only have one foot on
                Earth. These Orbitians are a peaceful race, but they have been at war with a group
                of invaders for many generations. The invaders are called Upside-Downs, because of
                their inverted bodies that live on the ground, yet do not know any other way to be.
                Upside-Downs believe that they will be able to win this war if they could only get
                an eye into Orbitian territory, so they've taken to make human beings their target.
              </p>
            </div>
            <p className="nft__subtitle">Details</p>
            <div className="nft__links">
              <a href="">
                <img src={globeIcon} alt="" />
                View on Etherscan
              </a>
              <a href="">
                <img src={globeIcon} alt="" />
                View Original
              </a>
            </div>
            <p className="nft__subtitle">Tags</p>
            <div className="nft__tags">
              <div>Animation</div>
              <div>illustration</div>
              <div>moon</div>
              <div>moon</div>
            </div>
          </div>
          <div className="nft__column">
            <Timer theme="light" placeBid="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFT;
