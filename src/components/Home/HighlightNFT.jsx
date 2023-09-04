import React from 'react';

import Button from '../../UI/Button';
import Timer from '../../UI/Timer';
import eyeImg from '../../assets/img/icons/eye.svg';
import authorImg from '../../assets/img/content/home/author.png';

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
            <Button color="white" value="See NFT" icon={eyeImg} size="medium" />
          </div>
          <div className="highlight-nft__column">
            <Timer />
          </div>
        </div>
      </div>
      <div className="highlight-nft__gradient"></div>
    </section>
  );
};

export default HighlightNFT;
