import React from 'react';

import authorImg from '../../assets/img/content/home/author.png';

const Result = () => {
  return (
    <section className="rankings-result">
      <div className="rankings-result__list">
        <div className="rankings-result__item rankings-result__item--title">
          <div>#</div>
          <div>Artist</div>
          <div>Change</div>
          <div>NFTs Sold</div>
          <div>Volume</div>
        </div>
        <div className="rankings-result__item">
          <div className="number">
            <span>1</span>
          </div>
          <div className="artist">
            <img src={authorImg} alt="author" className="authorImg" />
            <span>Jaydon Ekstrom Bothman</span>
          </div>
          <div className="change">+1.41%</div>
          <div className="sold">602</div>
          <div className="volume">12.4 ETH</div>
        </div>
        <div className="rankings-result__item">
          <div className="number">
            <span>2</span>
          </div>
          <div className="artist">
            <img src={authorImg} alt="author" className="authorImg" />
            <span>Jaydon Ekstrom Bothman</span>
          </div>
          <div className="change">+1.41%</div>
          <div className="sold">602</div>
          <div className="volume">12.4 ETH</div>
        </div>
        <div className="rankings-result__item">
          <div className="number">
            <span>3</span>
          </div>
          <div className="artist">
            <img src={authorImg} alt="author" className="authorImg" />
            <span>Jaydon Ekstrom Bothman</span>
          </div>
          <div className="change">+1.41%</div>
          <div className="sold">602</div>
          <div className="volume">12.4 ETH</div>
        </div>
      </div>
    </section>
  );
};

export default Result;
