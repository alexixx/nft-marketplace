import React from 'react';
import { useSelector } from 'react-redux';

import CardNFT from '../../UI/CardNFT';
import Collection from '../../UI/Collection';

const Result = ({ setDataSearch, dataSearch }) => {
  const tabGlobal = useSelector((state) => state.main.tab);

  const renderItems = () => {
    switch (tabGlobal) {
      case `NFTs`:
        console.log(dataSearch);
        if (!Array.isArray(dataSearch)) return; // !
        return (
          dataSearch &&
          dataSearch.map((item) => (
            <CardNFT
              key={item.created}
              title={item.name}
              author={item.username}
              price="1.63"
              highestBid="0.33"
              imgCard={item.image}
              imgAuthor={item.avatar}
              theme="dark"
              link={`/nft/${item.id}`}
            />
          ))
        );

        break;
      case `Collections`:
        if (Array.isArray(dataSearch)) return; // !
        const keys = Object.keys(dataSearch);
        console.log('🚀 ~ file: Result.jsx:33 ~ renderItems ~ dataSearch:', dataSearch);

        return keys.map((item) => (
          <Collection
            key={dataSearch[item].name + item}
            name={dataSearch[item].name}
            nft={dataSearch[item].images}
            avatar={dataSearch[item].avatar}
            username={dataSearch[item].username}
          />
        ));
        break;

      default:
        break;
    }
  };

  return (
    <section className="browse-result">
      <div className="container">
        <div className="browse-result__wrapper">
          <div className="browse-result__list">{renderItems()}</div>
        </div>
      </div>
    </section>
  );
};

export default Result;
