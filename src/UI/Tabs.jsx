import React, { useState, useEffect } from 'react';

const Tabs = ({ values, activeTabDefault }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    console.log(values);
    setActiveTab(activeTabDefault);
  }, []);

  const onClickTab = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="tabs">
      <div className="tabs__list">
        {values.map((item) => (
          <div
            className={`tabs__item ${activeTab == item.id ? 'active' : ''}`}
            onClick={() => onClickTab(item.id)}>
            {item.title}
            {item.counter ? <div className="tabs__counter">{item.counter}</div> : ''}
          </div>
        ))}
        {/* <div className="tabs__item active">
          NFTs
          <div className="tabs__counter">302</div>
        </div>
        <div className="tabs__item">
          Collections
          <div className="tabs__counter">67</div>
        </div> */}
      </div>
    </div>
  );
};

export default Tabs;
