import React from 'react';

import rocketImg from '../assets/img/icons/rocket__purple.svg';
import authorImg from '../assets/img/content/home/author.png';
import Button from '../UI/Button';

const TopCreators = () => {
  return (
    <section className="top-creators">
      <div className="wrapper wrapper--row">
        <div className="wrapper wrapper--column">
          <h2 className="top-creators__title">Top creators</h2>
          <p className="top-creators__desc">Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <Button value="View Rankings" icon={rocketImg} size="medium" />
      </div>
      <div className="top-creators__list">
        <div className="top-creators__card">
          <img src={authorImg} alt="" className="top-creators__avatar" />
          <p className="top-creators__author">Keepitreal</p>
          <div className="top-creators__info">
            <p>Total Sales:</p>
            <div className="top-creators__sales">34.53 ETH</div>
          </div>
          <div className="top-creators__number">1</div>
        </div>
        <div className="top-creators__card">
          <img src={authorImg} alt="" className="top-creators__avatar" />
          <p className="top-creators__author">Keepitreal</p>
          <div className="top-creators__info">
            <p>Total Sales:</p>
            <div className="top-creators__sales">34.53 ETH</div>
          </div>
          <div className="top-creators__number">1</div>
        </div>
        <div className="top-creators__card">
          <img src={authorImg} alt="" className="top-creators__avatar" />
          <p className="top-creators__author">Keepitreal</p>
          <div className="top-creators__info">
            <p>Total Sales:</p>
            <div className="top-creators__sales">34.53 ETH</div>
          </div>
          <div className="top-creators__number">1</div>
        </div>
        <div className="top-creators__card">
          <img src={authorImg} alt="" className="top-creators__avatar" />
          <p className="top-creators__author">Keepitreal</p>
          <div className="top-creators__info">
            <p>Total Sales:</p>
            <div className="top-creators__sales">34.53 ETH</div>
          </div>
          <div className="top-creators__number">1</div>
        </div>
        <div className="top-creators__card">
          <img src={authorImg} alt="" className="top-creators__avatar" />
          <p className="top-creators__author">Keepitreal</p>
          <div className="top-creators__info">
            <p>Total Sales:</p>
            <div className="top-creators__sales">34.53 ETH</div>
          </div>
          <div className="top-creators__number">1</div>
        </div>
        <div className="top-creators__card">
          <img src={authorImg} alt="" className="top-creators__avatar" />
          <p className="top-creators__author">Keepitreal</p>
          <div className="top-creators__info">
            <p>Total Sales:</p>
            <div className="top-creators__sales">34.53 ETH</div>
          </div>
          <div className="top-creators__number">1</div>
        </div>
        <div className="top-creators__card">
          <img src={authorImg} alt="" className="top-creators__avatar" />
          <p className="top-creators__author">Keepitreal</p>
          <div className="top-creators__info">
            <p>Total Sales:</p>
            <div className="top-creators__sales">34.53 ETH</div>
          </div>
          <div className="top-creators__number">1</div>
        </div>
        <div className="top-creators__card">
          <img src={authorImg} alt="" className="top-creators__avatar" />
          <p className="top-creators__author">Keepitreal</p>
          <div className="top-creators__info">
            <p>Total Sales:</p>
            <div className="top-creators__sales">34.53 ETH</div>
          </div>
          <div className="top-creators__number">1</div>
        </div>
        <div className="top-creators__card">
          <img src={authorImg} alt="" className="top-creators__avatar" />
          <p className="top-creators__author">Keepitreal</p>
          <div className="top-creators__info">
            <p>Total Sales:</p>
            <div className="top-creators__sales">34.53 ETH</div>
          </div>
          <div className="top-creators__number">1</div>
        </div>
        <div className="top-creators__card">
          <img src={authorImg} alt="" className="top-creators__avatar" />
          <p className="top-creators__author">Keepitreal</p>
          <div className="top-creators__info">
            <p>Total Sales:</p>
            <div className="top-creators__sales">34.53 ETH</div>
          </div>
          <div className="top-creators__number">1</div>
        </div>
        <div className="top-creators__card">
          <img src={authorImg} alt="" className="top-creators__avatar" />
          <p className="top-creators__author">Keepitreal</p>
          <div className="top-creators__info">
            <p>Total Sales:</p>
            <div className="top-creators__sales">34.53 ETH</div>
          </div>
          <div className="top-creators__number">1</div>
        </div>
        <div className="top-creators__card">
          <img src={authorImg} alt="" className="top-creators__avatar" />
          <p className="top-creators__author">Keepitreal</p>
          <div className="top-creators__info">
            <p>Total Sales:</p>
            <div className="top-creators__sales">34.53 ETH</div>
          </div>
          <div className="top-creators__number">1</div>
        </div>
      </div>
    </section>
  );
};

export default TopCreators;
