import { useState, useEffect } from 'react';

const useGetNftOne = (id, token) => {
  const [NFTData, setNFTData] = useState(null);
  useEffect(() => {
    const getNft = async () => {
      try {
        const response = await fetch(`/api/nft/${id}`, {
          method: 'GET',
        }).then((res) => {
          return res.json();
        });

        if (!response.error) {
          setNFTData(response);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setNFTData(null);
      }
    };

    getNft();
  }, [id, token]);

  return NFTData;
};

export default useGetNftOne;
