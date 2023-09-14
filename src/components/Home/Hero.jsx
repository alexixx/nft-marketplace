import React from 'react';

import Button from '../../UI/Button';
import heroImg from '../../assets/img/content/home/hero.png';
import authorImg from '../../assets/img/content/home/author.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__column">
        <h1 className="hero__title">Discover digital art & Collect NFTs</h1>
        <p className="hero__desc">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than
          20k NFT artists.
        </p>
        <Button color="purple" value="Get Started" icon="rocket" size="medium" />
        <div className="hero__info">
          <div>
            <p className="hero__info-title">240k+</p>
            <p className="hero__info-subtitle">Total Sale</p>
          </div>
          <div>
            <p className="hero__info-title">100k+</p>
            <p className="hero__info-subtitle">Auctions</p>
          </div>
          <div>
            <p className="hero__info-title">240k+</p>
            <p className="hero__info-subtitle">Artists</p>
          </div>
        </div>
      </div>
      <div className="hero__column">
        <div className="hero__wrapper">
          <img src={heroImg} alt="artist" className="hero__img" />
          <div className="hero__artist">
            <p className="title">Space Walking</p>
            <div>
              <img src={authorImg} alt="author" />
              <p className="author">Animakid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
