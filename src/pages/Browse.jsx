import React, { useState, useEffect } from 'react';

import Browse from '../components/Browse';
import Result from '../components/Browse/Result';

const Index = () => {
  const [dataSearch, setDataSearch] = useState();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, []);
  return (
    <>
      <main>
        <Browse setDataSearch={setDataSearch} />
        <Result dataSearch={dataSearch} />
      </main>
    </>
  );
};

export default Index;
