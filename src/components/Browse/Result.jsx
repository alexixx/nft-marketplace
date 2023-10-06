import React from 'react';
import { useSelector } from 'react-redux';

import CardNFT from '../../UI/CardNFT';
import Collection from '../../UI/Collection';

const Result = ({ dataSearch }) => {
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
        let collections = [];
        for (let key in dataSearch) {
          collections.push(
            <Collection
              name={dataSearch[key].name}
              nft={dataSearch[key].images}
              avatar={dataSearch[key].avatar}
              username={dataSearch[key].username}
            />,
          );
        }

        return collections;
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
