import React from 'react';
import Button from '../../UI/Button';
import CardNFT from '../../UI/CardNFT';

import discoverImg from '../../assets/img/content/home/discover.png';
import authorImg from '../../assets/img/content/home/author.png';

const Portfolio = () => {
  return (
    <section className="nft-portfolio">
      <div className="container">
        <div className="nft-portfolio__wrapper">
          <div class="wrapper wrapper--row">
            <div class="wrapper wrapper--column">
              <h2 class="nft-portfolio__title">More from this artist</h2>
            </div>
            <Button value="Go To Artist Page" icon="arrow" size="medium" />
          </div>
          <div className="nft-portfolio__list">
            <CardNFT
              title="Magic Mushroom 0325"
              author="Shroomie"
              price="1.63"
              highestBid="0.33"
              imgCard={discoverImg}
              imgAuthor={authorImg}
              theme="light"
            />
            <CardNFT
              title="Magic Mushroom 0325"
              author="Shroomie"
              price="1.63"
              highestBid="0.33"
              imgCard={discoverImg}
              imgAuthor={authorImg}
              theme="light"
            />
            <CardNFT
              title="Magic Mushroom 0325"
              author="Shroomie"
              price="1.63"
              highestBid="0.33"
              imgCard={discoverImg}
              imgAuthor={authorImg}
              theme="light"
            />
            <CardNFT
              title="Magic Mushroom 0325"
              author="Shroomie"
              price="1.63"
              highestBid="0.33"
              imgCard={discoverImg}
              imgAuthor={authorImg}
              theme="light"
            />
            <CardNFT
              title="Magic Mushroom 0325"
              author="Shroomie"
              price="1.63"
              highestBid="0.33"
              imgCard={discoverImg}
              imgAuthor={authorImg}
              theme="light"
            />
            <CardNFT
              title="Magic Mushroom 0325"
              author="Shroomie"
              price="1.63"
              highestBid="0.33"
              imgCard={discoverImg}
              imgAuthor={authorImg}
              theme="light"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
