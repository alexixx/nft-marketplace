import React from 'react';

import Tabs from '../../UI/Tabs';

const Rankings = () => {
  return (
    <>
      <section className="rankings">
        <h2 className="rankings__title">Top Creators</h2>
        <div className="rankings__desc">
          Check out top ranking NFT artists on the NFT Marketplace.
        </div>
      </section>
      <Tabs
        values={[
          {
            id: 0,
            title: 'Today',
          },
          { id: 1, title: 'This Week' },
          { id: 2, title: 'This Month' },
          { id: 3, title: 'All Time' },
        ]}
        activeTabDefault={0}
      />
    </>
  );
};

export default Rankings;
