import React from 'react';

import UserInfo from '../components/Profile/UserInfo';
import Portfolio from '../components/Profile/Portfolio';

const index = () => {
  return (
    <>
      <main>
        <UserInfo />
        <Portfolio />
      </main>
    </>
  );
};

export default index;
