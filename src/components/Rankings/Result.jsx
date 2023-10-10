import React from 'react';
import { Link } from 'react-router-dom';

import authorImg from '../../assets/img/content/home/author.png';

const Result = ({ usersData }) => {
  return (
    <section className="rankings-result">
      <div className="rankings-result__list">
        <div className="rankings-result__item rankings-result__item--title">
          <div className="number">#</div>
          <div className="artist">Artist</div>
          <div className="change">Change</div>
          <div className="sold">NFTs Sold</div>
          <div className="volume">Volume</div>
        </div>

        {usersData &&
          usersData.map((item, index) => (
            <Link
              key={item.username + item.surname}
              to={`/user/${item.username}`}
              className="rankings-result__item">
              <div className="number">
                <span>{index + 1}</span>
              </div>
              <div className="artist">
                <img src={item.avatar} alt="author" className="authorImg" />
                <span>{`${item.username} ${item.surname}`}</span>
              </div>
              <div className="change">+1.41%</div>
              <div className="sold">602</div>
              <div className="volume">12.4 ETH</div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Result;
