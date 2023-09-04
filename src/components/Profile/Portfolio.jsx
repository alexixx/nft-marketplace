import React from 'react';
import CardNFT from '../../UI/CardNFT';

import authorImg from '../../assets/img/content/home/author.png';
import discoverImg from '../../assets/img/content/home/discover.png';

const Portfolio = () => {
  return (
    <section className="user-portfolio">
      <div className="container">
        <div className="user-portfolio__wrapper">
          {' '}
          <CardNFT
            title="Magic Mushroom 0325"
            author="Shroomie"
            price="1.63"
            highestBid="0.33"
            imgCard={discoverImg}
            imgAuthor={authorImg}
            theme="dark"
          />
          <CardNFT
            title="Magic Mushroom 0325"
            author="Shroomie"
            price="1.63"
            highestBid="0.33"
            imgCard={discoverImg}
            imgAuthor={authorImg}
            theme="dark"
          />
          <CardNFT
            title="Magic Mushroom 0325"
            author="Shroomie"
            price="1.63"
            highestBid="0.33"
            imgCard={discoverImg}
            imgAuthor={authorImg}
            theme="dark"
          />
          <CardNFT
            title="Magic Mushroom 0325"
            author="Shroomie"
            price="1.63"
            highestBid="0.33"
            imgCard={discoverImg}
            imgAuthor={authorImg}
            theme="dark"
          />
          <CardNFT
            title="Magic Mushroom 0325"
            author="Shroomie"
            price="1.63"
            highestBid="0.33"
            imgCard={discoverImg}
            imgAuthor={authorImg}
            theme="dark"
          />
          <CardNFT
            title="Magic Mushroom 0325"
            author="Shroomie"
            price="1.63"
            highestBid="0.33"
            imgCard={discoverImg}
            imgAuthor={authorImg}
            theme="dark"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
