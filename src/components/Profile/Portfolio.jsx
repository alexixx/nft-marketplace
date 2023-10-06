import React, { useState, useEffect } from 'react';
import CardNFT from '../../UI/CardNFT';
import useGetNftAll from '../../hooks/useGetNftAll';

import authorImg from '../../assets/img/content/home/author.png';
import discoverImg from '../../assets/img/content/home/discover.png';

const Portfolio = ({ username }) => {
  console.log(username);
  const nftList = useGetNftAll(6, username);

  return (
    nftList && (
      <section className="user-portfolio">
        <div className="container">
          <div className="user-portfolio__list">
            {nftList.map((item) => (
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
    )
  );
};

export default Portfolio;
