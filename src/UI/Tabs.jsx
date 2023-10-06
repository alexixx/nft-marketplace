import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTab } from '../redux/slices/mainSlice';

const Tabs = ({ values, activeTabDefault }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setActiveTab(activeTabDefault);
    dispatch(setTab(values[activeTabDefault].title));
  }, []);

  const onClickTab = (id, title) => {
    setActiveTab(id);
    // Записываем выбранное значение глобального таба
    dispatch(setTab(title));
  };

  return (
    <div className="tabs">
      <div className="tabs__list">
        {values.map((item) => (
          <div
            className={`tabs__item ${activeTab == item.id ? 'active' : ''}`}
            onClick={() => onClickTab(item.id, item.title)}>
            {item.title}
            {item.counter ? <div className="tabs__counter">{item.counter}</div> : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
