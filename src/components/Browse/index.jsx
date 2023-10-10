import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import { setSearch } from '../../redux/slices/mainSlice';

import Searcher from '../../UI/Searcher';
import Tabs from '../../UI/Tabs';

const Browse = ({ setDataSearch }) => {
  const dispatch = useDispatch();
  const inputSearch = useRef();
  const [searchValue, setSearchValue] = useState('');
  const [countOfResult, setCountOfResult] = useState({});

  const searchGlobal = useSelector((state) => state.main.search);
  const tabGlobal = useSelector((state) => state.main.tab);

  const onChangeInputSearch = (value) => {
    setSearchValue(value);
    updateInputSearch(value);
  };

  const updateInputSearch = useCallback(
    debounce((value) => {
      dispatch(setSearch(value));
    }, 500),
    [],
  );

  useEffect(() => {
    const getAll = async () => {
      const response = await fetch(`/api/search/?name=${searchGlobal}`).then((res) => res.json());
      if (response && response.length) {
        let nftCount = response.filter((item) => item.source == 'nft');
        let collectionsCount = response.filter((item) => item.source == 'collections');

        setCountOfResult({
          nft: nftCount.length,
          collections: collectionsCount.length,
        });
      } else {
        setCountOfResult({
          nft: 0,
          collections: 0,
        });
      }
    };
    const getNft = async () => {
      const response = await fetch(
        `/api/search/nft?name=${searchGlobal}&description=${searchGlobal}`,
      ).then((res) => res.json());
      if (response && response.length) {
        setDataSearch(response);
      } else {
        setDataSearch([]);
      }
    };
    const getCollections = async () => {
      const response = await fetch(`/api/search/collections?name=${searchGlobal}`).then((res) =>
        res.json(),
      );
      if (response && response.length) {
        let result = {};
        response.forEach((item) => {
          if (!result.hasOwnProperty(item.id)) {
            result[item.id] = {
              name: item.name,
              avatar: item.avatar,
              username: item.username,
              images: [],
            };

            result[item.id].images.push(item.image);
          } else {
            result[item.id].images.push(item.image);
          }
        });

        setDataSearch(result);
      } else {
        setDataSearch({});
      }
    };

    if (searchGlobal) {
      switch (tabGlobal) {
        case 'NFTs':
          getAll();
          getNft();
          break;
        case 'Collections':
          getAll();
          getCollections();
          break;

        default:
          break;
      }
    } else {
      setDataSearch([]);
      setCountOfResult({
        nft: 0,
        collections: 0,
      });
    }
  }, [searchGlobal, tabGlobal]);

  return (
    <>
      <section className="browse">
        <div className="container">
          <div className="browse__wrapper">
            <h2 className="browse__title">Browse Marketplace </h2>
            <p className="browse__desc">
              Browse through more than 50k NFTs on the NFT Marketplace.
            </p>
            <div className="searcher">
              <label htmlFor="searcher"> </label>
              <input
                ref={inputSearch}
                value={searchValue}
                type="text"
                name="searcher"
                id="searcher"
                placeholder="Search your favourite NFTs"
                onChange={(e) => {
                  onChangeInputSearch(e.target.value);
                }}
              />
            </div>
            {/* <Searcher /> */}
          </div>
        </div>
      </section>
      <div className="container">
        <Tabs
          values={[
            {
              id: 0,
              title: 'NFTs',
              counter: countOfResult.nft,
            },
            {
              id: 1,
              title: 'Collections',
              counter: countOfResult.collections,
            },
          ]}
          activeTabDefault={0}
        />
      </div>
    </>
  );
};

export default Browse;
