import React from 'react';
import { useNavigate } from 'react-router-dom';

import useGetNftAll from '../../../hooks/useGetNftAll';

import Button from '../../../UI/Button';
import CardNFT from '../../../UI/CardNFT';

const MoreNFT = () => {
  const navigate = useNavigate();
  const nftList = useGetNftAll(3);
  console.log('🚀 ~ file: index.jsx:10 ~ MoreNFT ~ nftList:', nftList);

  return (
    <section className="more-nft">
      <div className="wrapper wrapper--row">
        <div className="wrapper wrapper--column">
          <h2 className="more-nft__title">Discover More NFTs</h2>
          <p className="more-nft__desc">Explore new trending NFTs</p>
        </div>
        <Button
          value="See All"
          icon="eye"
          size="medium"
          callback={() => {
            navigate('/browse');
          }}
        />
      </div>

      <div className="more-nft__list">
        {nftList &&
          nftList.map((item) => (
            <CardNFT
              title={item.name}
              author={item.username}
              price="1.63"
              highestBid="0.33"
              imgCard={item.image}
              imgAuthor={item.avatar}
              link={`/nft/${item.id}`}
            />
          ))}
      </div>
    </section>
  );
};

export default MoreNFT;
