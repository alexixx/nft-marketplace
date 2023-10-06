import { useState, useEffect } from 'react';

const useGetNftAll = (limit, username) => {
  const [nftList, setNftList] = useState(null);

  useEffect(() => {
    console.log('request all nft');
    console.log(limit, username);
    const getNftAll = async () => {
      try {
        const response = await fetch(
          `/api/nft/?limit=${limit}${username ? `&username=${username}` : ''}`,
          {
            method: 'GET',
          },
        ).then((res) => {
          return res.json();
        });

        if (!response.error) {
          setNftList(response);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setNftList(null);
      }
    };

    getNftAll();
  }, [limit, username]);

  return nftList;
};

export default useGetNftAll;
