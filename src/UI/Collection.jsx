import React, { useState, useEffect } from 'react';

const Collection = ({ name, nft, avatar, username }) => {
  const [imagesNft, setImagesNft] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const checkNft = () => {
      let arr = [];
      let countOfEmpty = 0;
      for (let i = 0; i < nft.length; i++) {
        if (i < 3) {
          arr.push(nft[i]);
        }
      }

      if (nft.length > 3) {
        setCount(nft.length - 3);
      } else {
        setCount(0);
      }

      countOfEmpty = 3 - arr.length;

      if (arr.length < 3) {
        for (let i = 0; i < countOfEmpty; i++) {
          arr.push(null);
        }
      }

      setImagesNft(arr);
    };

    checkNft();
  }, []);

  return (
    <div className="collection">
      <div className="collection__gallery">
        {imagesNft &&
          imagesNft.map((item) =>
            item ? <img src={item} alt="" /> : <div className="empty"></div>,
          )}
        {count ? <div>{count}+</div> : <div className="empty"></div>}
      </div>
      <div className="collection__name">{name}</div>
      <div className="collection__artist">
        <img src={avatar} alt="author" className="avatar" />
        <p className="author">{username}</p>
      </div>
    </div>
  );
};

export default Collection;
