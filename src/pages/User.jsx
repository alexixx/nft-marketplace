import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useGetUserOne from '../hooks/useGetUserOne';

import UserInfo from '../components/Profile/UserInfo';
import Portfolio from '../components/Profile/Portfolio';

const Index = () => {
  const { name } = useParams();
  const token = useSelector((state) => state.user.token);

  const [userData, setUserData] = useGetUserOne(name, token);

  //   const [userData, setUserData] = useState(null);

  //   useEffect(() => {
  //     const getUser = async () => {
  //       const response = await fetch(`/api/user/${name}`, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           token,
  //         },
  //       }).then((res) => {
  //         return res.json();
  //       });

  //       console.log(response);
  //       if (!response.error) {
  //         setUserData(response);
  //       }
  //     };

  //     getUser();
  //   }, []);

  useEffect(() => {
    if (!token) {
      let obj = { ...userData };
      delete obj.owner;
      setUserData({ ...obj });
    }
  }, [token]);

  return (
    userData && (
      <>
        <main>
          <UserInfo {...userData} />
          <Portfolio {...userData} />
        </main>
      </>
    )
  );
};

export default Index;
