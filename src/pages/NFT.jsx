import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import NFT from '../components/NFT/';
import Portfolio from '../components/NFT/Portfolio.jsx';

const Index = () => {
  const { id } = useParams();

  const [NFTData, setNFTData] = useState(null);

  useEffect(() => {
    const getNFT = async () => {
      const response = await fetch(`/api/nft/${id}`, {
        method: 'GET',
      }).then((res) => {
        return res.json();
      });

      console.log(response);
      if (!response.error) {
        setNFTData(response);
      }
    };

    getNFT();
  }, []);

  return (
    <>
      <main>
        <NFT {...NFTData} />
        <Portfolio {...NFTData} />
      </main>
    </>
  );
};

export default Index;
