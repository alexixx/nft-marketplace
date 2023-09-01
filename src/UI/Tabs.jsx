import React from 'react';

const Tabs = () => {
  return (
    <div className="tabs">
      <div className="tabs__list">
        <div className="tabs__item active">
          NFTs
          <div className="tabs__counter">302</div>
        </div>
        <div className="tabs__item">
          Collections
          <div className="tabs__counter">67</div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
