import React from 'react';

import Button from '../UI/Button';
import eyeImg from '../assets/img/icons/eye.svg';
import authorImg from '../assets/img/content/home/author.png';

const HighlightNFT = () => {
  return (
    <section className="highlight-nft">
      <div className="container">
        <div className="highlight-nft__wrapper">
          <div className="highlight-nft__column">
            <div className="highlight-nft__artist">
              <img src={authorImg} alt="author" className="highlight-nft__avatar" />
              <p className="highlight-nft__author">Shroomie</p>
            </div>
            <div className="highlight-nft__title">Magic Mashrooms</div>
            <Button color="white" value="See NFT" icon={eyeImg} />
          </div>
          <div className="highlight-nft__column">
            <div className="highlight-nft__timer">
              <p>Auction ends in:</p>
              <div className="highlight-nft__grid">
                <div className="highlight-nft__figures">59</div>
                <div className="highlight-nft__figures">:</div>
                <div className="highlight-nft__figures">59</div>
                <div className="highlight-nft__figures">:</div>
                <div className="highlight-nft__figures">59</div>
                <div>Hours</div>
                <div></div>
                <div>Minutes</div>
                <div></div>
                <div>Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="highlight-nft__gradient"></div>
    </section>
  );
};

export default HighlightNFT;
