import React, { useState, useEffect } from 'react';

import Tabs from '../../UI/Tabs';
import style from '../../scss/_vars.scss';
const Rankings = () => {
  const [tabs, setTabs] = useState([
    {
      id: 0,
      title: 'Today',
    },
    { id: 1, title: 'This Week' },
    { id: 2, title: 'This Month' },
    { id: 3, title: 'All Time' },
  ]);

  useEffect(() => {
    if (window.innerWidth < 674) {
      setTabs([
        {
          id: 0,
          title: '1d',
        },
        { id: 1, title: '7d' },
        { id: 2, title: '30d' },
        { id: 3, title: 'All Time' },
      ]);
    }
  }, []);

  return (
    <>
      <section className="rankings">
        <h2 className="rankings__title">Top Creators</h2>
        <div className="rankings__desc">
          Check out top ranking NFT artists on the NFT Marketplace.
        </div>
      </section>
      <Tabs values={tabs} activeTabDefault={0} />
    </>
  );
};

export default Rankings;
