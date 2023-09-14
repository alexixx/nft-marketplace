import React, { useRef } from 'react';

const CardNFT = ({ title, author, price, highestBid, imgCard, imgAuthor, theme }) => {
  const card = useRef();
  const onCardOver = (e) => {
    //  var w = window.innerWidth / 2;
    //  var h = window.innerHeight / 2;
    //  console.log('w ', w);
    //  console.log('h ', h);
    //  var x = (e.pageX - w) / 100;
    //  var y = (e.pageY - h) / 100;
    //  card.current.style.transform = 'rotateX(' + y + 'deg) rotateY(' + x + 'deg)';
    //  //  card.current.style.transform = 'rotateX(5deg) rotateY(5deg)';
  };
  const onCardOut = (e) => {
    card.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };
  return (
    <div
      class={`card ${theme ? `theme--${theme}` : ''}`}
      onMouseOver={(e) => {
        onCardOver(e);
      }}
      onMouseOut={() => {
        onCardOut();
      }}
      ref={card}>
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
