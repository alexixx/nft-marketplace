import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import useGetNftOne from '../../hooks/useGetNftOne';

import Button from '../../UI/Button';
import heroImg from '../../assets/img/content/home/hero.png';
import authorImg from '../../assets/img/content/home/author.png';

const Hero = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.data);
  const token = useSelector((state) => state.user.token);

  const NFTData = useGetNftOne(1);

  const onClickGetStarted = () => {
    if (userData.id) {
      navigate(`/user/${userData.username}`);
    } else {
      navigate(`/user/login`);
    }
  };
  return (
    <section className="hero">
      <div className="hero__column">
        <h1 className="hero__title">Discover digital art & Collect NFTs</h1>
        <p className="hero__desc">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than
          20k NFT artists.
        </p>
        <Button
          color="purple"
          value="Get Started"
          icon="rocket"
          size="medium"
          callback={() => {
            onClickGetStarted();
          }}
        />
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
        {NFTData && (
          <div className="hero__wrapper">
            <img src={NFTData.image} alt="artist" className="hero__img" />
            <div className="hero__artist">
              <p className="title">{NFTData.name}</p>
              <div>
                <img src={NFTData.avatar} alt="author" />
                <p className="author">{NFTData.username}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
