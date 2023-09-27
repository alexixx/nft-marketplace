import React, { useState, useEffect } from 'react';
import CardNFT from '../../UI/CardNFT';

import authorImg from '../../assets/img/content/home/author.png';
import discoverImg from '../../assets/img/content/home/discover.png';

const Portfolio = ({ username }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const getNFTList = async () => {
      const response = await fetch(`/api/nft/list/${username}`, {
        method: 'GET',
      }).then((res) => {
        return res.json();
      });

      if (!response.error) {
        setCards(response);
      }
    };

    getNFTList();
  }, []);

  return (
    <section className="user-portfolio">
      <div className="container">
        <div className="user-portfolio__list">
          {cards.map((item) => (
            <CardNFT
              key={item.name + item.created}
              title={item.name}
              author={item.username}
              price="1.63"
              highestBid="0.33"
              imgCard={item.image}
              imgAuthor={item.avatar}
              theme="dark"
              link={`/nft/${item.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
