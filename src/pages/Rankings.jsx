import React from 'react';

import Rankings from '../components/Rankings/';
import Result from '../components/Rankings/Result';

const index = () => {
  return (
    <>
      <main>
        <div className="container">
          <Rankings />
          <Result />
        </div>
      </main>
    </>
  );
};

export default index;
