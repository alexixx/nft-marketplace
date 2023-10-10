import React, { useState, useEffect } from 'react';

import useGetUsersAll from '../hooks/useGetUsersAll';

import Rankings from '../components/Rankings/';
import Result from '../components/Rankings/Result';

const Index = () => {
  const usersData = useGetUsersAll(100);
  console.log('🚀 ~ file: Rankings.jsx:10 ~ index ~ usersData:', usersData);

  return (
    <>
      <main>
        <div className="container">
          <Rankings />
          <Result usersData={usersData} />
        </div>
      </main>
    </>
  );
};

export default Index;
