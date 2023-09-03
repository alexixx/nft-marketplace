import React from 'react';

import discoverImg from '../../assets/img/content/home/discover.png';
import authorImg from '../../assets/img/content/home/author.png';

import CardNFT from '../../UI/CardNFT';

const Result = () => {
  return (
    <section className="browse-result">
      <div className="container">
        <div className="browse-result__wrapper">
          <div className="browse-result__list">
            <CardNFT
              title="Magic Mushroom 0325"
              author="Shroomie"
              price="1.63"
              highestBid="0.33"
              imgCard={discoverImg}
              imgAuthor={authorImg}
              theme="black"
            />
            <CardNFT
              title="Magic Mushroom 0325"
              author="Shroomie"
              price="1.63"
              highestBid="0.33"
              imgCard={discoverImg}
              imgAuthor={authorImg}
              theme="black"
            />
            <CardNFT
              title="Magic Mushroom 0325"
              author="Shroomie"
              price="1.63"
              highestBid="0.33"
              imgCard={discoverImg}
              imgAuthor={authorImg}
              theme="black"
            />
            <CardNFT
              title="Magic Mushroom 0325"
              author="Shroomie"
              price="1.63"
              highestBid="0.33"
              imgCard={discoverImg}
              imgAuthor={authorImg}
              theme="black"
            />
            <CardNFT
              title="Magic Mushroom 0325"
              author="Shroomie"
              price="1.63"
              highestBid="0.33"
              imgCard={discoverImg}
              imgAuthor={authorImg}
              theme="black"
            />
            <CardNFT
              title="Magic Mushroom 0325"
              author="Shroomie"
              price="1.63"
              highestBid="0.33"
              imgCard={discoverImg}
              imgAuthor={authorImg}
              theme="black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
