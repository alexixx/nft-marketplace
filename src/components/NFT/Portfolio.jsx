import React, { useEffect, useState } from 'react';
import Button from '../../UI/Button';
import CardNFT from '../../UI/CardNFT';

import discoverImg from '../../assets/img/content/home/discover.png';
import authorImg from '../../assets/img/content/home/author.png';

const Portfolio = ({ name, username }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const getNFTList = async () => {
      const response = await fetch(`/api/nft/list/${username}`, {
        method: 'GET',
      }).then((res) => {
        return res.json();
      });

      if (!response.error) {
        // Исключаем объект, который просматриваем
        setCards(response.filter((item) => item.name != name));
      }
    };

    getNFTList();
  }, []);
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
            {cards.filter((item) => (
              <CardNFT
                key={item.name + item.created}
                title={item.name}
                author={item.username}
                price="1.63"
                highestBid="0.33"
                imgCard={item.image}
                imgAuthor={item.avatar}
                theme="light"
                link={`/nft/${item.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
