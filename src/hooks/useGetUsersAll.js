import { useState, useEffect } from 'react';

const useGetUsersAll = (limit, username) => {
  const [usersList, setUsersList] = useState(null);

  username = username || '';

  useEffect(() => {
    const getUsersAll = async () => {
      try {
        const response = await fetch(`/api/users/?limit=${limit}&username=${username}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        setUsersList(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setUsersList(null);
      }
    };

    getUsersAll();
  }, [limit]);

  return usersList;
};

export default useGetUsersAll;
