import React from 'react';

const CardNFT = ({ title, author, price, highestBid, imgCard, imgAuthor, theme }) => {
  return (
    <div class={`card ${theme ? `theme--${theme}` : ''}`}>
      <img src={imgCard} alt="discover" class="card__image" />
      <div class={`card__info`}>
        <p class="card__name">{title}</p>
        <div class="card__artist">
          <img src={imgAuthor} alt="author" class="card__avatar" />
          <p class="card__author">{author}</p>
        </div>
        <div class="card__meta">
          <div>
            <p class="title">Price</p>
            <p class="value">{price} ETH</p>
          </div>
          <div>
            <p class="title">Highest Bid</p>
            <p class="value">{highestBid} wETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNFT;
