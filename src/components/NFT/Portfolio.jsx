import React, { useEffect, useState } from 'react';
import Button from '../../UI/Button';
import CardNFT from '../../UI/CardNFT';
import useGetNftAll from '../../hooks/useGetNftAll';

import discoverImg from '../../assets/img/content/home/discover.png';
import authorImg from '../../assets/img/content/home/author.png';

const Portfolio = ({ name, username }) => {
  const nftList = useGetNftAll(6, username);
  console.log('🚀 ~ file: Portfolio.jsx:11 ~ Portfolio ~ nftList:', nftList);

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
            {nftList &&
              //   nftList.filter((item) => {
              //     if (item.name != name) {
              //       console.log(item);
              //       // return (
              //       //   <CardNFT
              //       //     key={item.name + item.created}
              //       //     title={item.name}
              //       //     author={item.username}
              //       //     price="1.63"
              //       //     highestBid="0.33"
              //       //     imgCard={item.image}
              //       //     imgAuthor={item.avatar}
              //       //     theme="light"
              //       //     link={`/nft/${item.id}`}
              //       //   />
              //       // );
              //     }
              //   })
              nftList.map((item) => {
                if (item.name != name) {
                  return (
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
                  );
                }
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
