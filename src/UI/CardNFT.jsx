import React, { useState, useRef } from 'react';

const CardNFT = ({ title, author, price, highestBid, imgCard, imgAuthor, theme }) => {
  const card = useRef();

  const [scale, setScale] = useState(1);

  //   const onMouseEnter = (e) => {
  //     let start = null;
  //     const targetScale = 1.05; // Желаемый масштаб

  //     function step(timestamp) {
  //       if (!start) start = timestamp;
  //       const progress = (timestamp - start) / 1000; // Продолжительность анимации (в миллисекундах)
  //       setScale(1 + progress * (targetScale - 1));

  //       card.current.style.transform = `scale(${scale})`;

  //       if (scale < targetScale) {
  //         requestAnimationFrame(step);
  //       }
  //     }

  //     requestAnimationFrame(step);
  //   };
  const onCardMove = (e) => {
    //  if (scale < 1.05) return;
    const cardRect = card.current.getBoundingClientRect();
    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angleX = (centerY - mouseY) / 30;
    const angleY = (centerX - mouseX) / 30;

    card.current.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;

    //  let blur = Math.abs(angleY / 2.5);
    //  if (blur < 1) {
    //    card.current.style.filter = `brightness(1)`;
    //  } else if (blur > 1.3) {
    //    card.current.style.filter = `brightness(1.3)`;
    //  } else {
    //    card.current.style.filter = `brightness(${blur})`;
    //  }

    //  console.log(`rotateX(${angleX}deg) rotateY(${angleY}deg)`);
    //  //  console.log(blur);

    //  if (Math.abs(angleX + angleY) >= 10) {
    //    card.current.style.filter = `brightness(1.2)`;
    //  } else {
    //    card.current.style.filter = `brightness(1)`;
    //  }
  };

  const onCardOut = (e) => {
    card.current.style.transition = '.3s';
    card.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    card.current.style.filter = `brightness(1)`;
    setTimeout(() => {
      card.current.style.transition = 'none';
    }, 300);
  };
  return (
    <div class={`card ${theme ? `theme--${theme}` : ''}`} ref={card}>
      <div className="card__image-wrapper">
        <img src={imgCard} alt="discover" class="card__image" />
      </div>

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
      <div
        className="card__inner"
        //   onMouseEnter={(e) => {
        //     onMouseEnter(e);
        //   }}
        onMouseMove={(e) => {
          onCardMove(e);
        }}
        onMouseOut={(e) => {
          onCardOut(e);
        }}></div>
    </div>
  );
};

export default CardNFT;
