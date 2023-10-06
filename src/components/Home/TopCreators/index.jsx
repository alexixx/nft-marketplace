import React from 'react';
import { useNavigate } from 'react-router-dom';
import useGetUsersAll from '../../../hooks/useGetUsersAll';

import Button from '../../../UI/Button';

import Card from './Card';

const TopCreators = () => {
  const navigate = useNavigate();
  const usersList = useGetUsersAll(12);

  return (
    <section className="top-creators">
      <div className="wrapper wrapper--row">
        <div className="wrapper wrapper--column">
          <h2 className="top-creators__title">Top creators</h2>
          <p className="top-creators__desc">Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <Button
          value="View Rankings"
          icon="rocket"
          size="medium"
          callback={() => {
            navigate('/rankings');
          }}
        />
      </div>
      <div className="top-creators__list">
        {usersList && usersList.map((item, index) => <Card index={index} {...item} />)}
      </div>
    </section>
  );
};

export default TopCreators;
