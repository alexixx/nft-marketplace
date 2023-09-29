import { useState, useEffect } from 'react';

const useGetUserOne = (name, token) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`/api/user/${name}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            token,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setUserData(null);
      }
    };

    getUser();
  }, [name, token]);

  return userData;
};

export default useGetUserOne;
