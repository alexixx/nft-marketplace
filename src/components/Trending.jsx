import React from 'react';

import trendingBigImg from '../assets/img/content/home/trending_big_1.png';
import authorImg from '../assets/img/content/home/author.png';

const Trending = () => {
  return (
    <section className="trending">
      <h2 className="trending__title">Trending Collection</h2>
      <p className="trending__desc">Checkout our weekly updated trending collection.</p>
      <div className="trending__list">
        <div className="trending__card">
          <div className="trending__gallery">
            <img src={trendingBigImg} alt="" />
            <img src={trendingBigImg} alt="" />
            <img src={trendingBigImg} alt="" />
            <div>1025+</div>
          </div>
          <div className="trending__name">DSGN Animals</div>
          <div className="trending__artist">
            <img src={authorImg} alt="author" className="avatar" />
            <p className="author">MrFox</p>
          </div>
        </div>
        <div className="trending__card">
          <div className="trending__gallery">
            <img src={trendingBigImg} alt="" />
            <img src={trendingBigImg} alt="" />
            <img src={trendingBigImg} alt="" />
            <div>1025+</div>
          </div>
          <div className="trending__name">DSGN Animals</div>
          <div className="trending__artist">
            <img src={authorImg} alt="author" className="avatar" />
            <p className="author">MrFox</p>
          </div>
        </div>
        <div className="trending__card">
          <div className="trending__gallery">
            <img src={trendingBigImg} alt="" />
            <img src={trendingBigImg} alt="" />
            <img src={trendingBigImg} alt="" />
            <div>1025+</div>
          </div>
          <div className="trending__name">DSGN Animals</div>
          <div className="trending__artist">
            <img src={authorImg} alt="author" className="avatar" />
            <p className="author">MrFox</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
