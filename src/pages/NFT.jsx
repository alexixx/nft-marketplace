import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGetNftOne from '../hooks/useGetNftOne';

import NFT from '../components/NFT/';
import Portfolio from '../components/NFT/Portfolio.jsx';

const Index = () => {
  const { id } = useParams();
  const NFTData = useGetNftOne(id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [id]);

  //   useEffect(() => {
  //     const getNFT = async () => {
  //       const response = await fetch(`/api/nft/${id}`, {
  //         method: 'GET',
  //       }).then((res) => {
  //         return res.json();
  //       });

  //       console.log(response);
  //       if (!response.error) {
  //         setNFTData(response);
  //       }
  //     };

  //     getNFT();
  //   }, []);

  return (
    <>
      {NFTData && (
        <main>
          <NFT {...NFTData} />
          <Portfolio {...NFTData} />
        </main>
      )}
    </>
  );
};

export default Index;
