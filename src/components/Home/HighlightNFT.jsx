import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useGetNftOne from '../../hooks/useGetNftOne';

import Button from '../../UI/Button';
import Timer from '../../UI/Timer';
import authorImg from '../../assets/img/content/home/author.png';

const HighlightNFT = () => {
  const navigate = useNavigate();
  const NFTData = useGetNftOne(8);
  console.log('🚀 ~ file: HighlightNFT.jsx:12 ~ HighlightNFT ~ NFTData:', NFTData);

  if (NFTData) {
    return (
      <section className="highlight-nft" style={{ backgroundImage: `url(${NFTData.image})` }}>
        <div className="container">
          <div className="highlight-nft__wrapper">
            <div className="highlight-nft__column">
              <Link to={`/user/${NFTData.username}`} className="highlight-nft__artist">
                <img src={NFTData.avatar} alt="author" className="highlight-nft__avatar" />
                <p className="highlight-nft__author">{NFTData.username}</p>
              </Link>
              <div className="highlight-nft__title">{NFTData.name}</div>
              <Button
                color="white"
                value="See NFT"
                icon="eye"
                size="medium"
                callback={() => {
                  navigate(`/nft/${NFTData.id}`);
                }}
              />
            </div>
            <div className="highlight-nft__column">
              <Timer />
            </div>
          </div>
        </div>
        <div className="highlight-nft__gradient"></div>
      </section>
    );
  } else {
    return <>Loading...</>;
  }
};

export default HighlightNFT;
