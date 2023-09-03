import React from 'react';
import Searcher from '../../UI/Searcher';
import Tabs from '../../UI/Tabs';

const Browse = () => {
  return (
    <>
      <section className="browse">
        <div className="container">
          <div className="browse__wrapper">
            <h2 className="browse__title">Browse Marketplace</h2>
            <p className="browse__desc">
              Browse through more than 50k NFTs on the NFT Marketplace.
            </p>
            <Searcher />
          </div>
        </div>
      </section>
      <div className="container">
        <Tabs
          values={[
            {
              id: 0,
              title: 'NFTs',
              counter: 302,
            },
            {
              id: 1,
              title: 'Collections',
              counter: 67,
            },
          ]}
          activeTabDefault={0}
        />
      </div>
    </>
  );
};

export default Browse;
