import React from 'react';

const Card = ({ index, avatar, username }) => {
  return (
    <div className="top-creators__card">
      <img src={avatar} alt="" className="top-creators__avatar" />
      <div className="top-creators__wrapper">
        <p className="top-creators__author">{username}</p>
        <div className="top-creators__info">
          <p>Total Sales:</p>
          <div className="top-creators__sales">34.53 ETH</div>
        </div>
        <div className="top-creators__number">{index + 1}</div>
      </div>
    </div>
  );
};

export default Card;
