import React from 'react';

const Collection = ({ name, nft, avatar, username }) => {
  return (
    <div className="collection">
      <div className="collection__gallery">
        {nft && nft.map((item) => <img src={item} alt="" />)}

        <div>1025+</div>
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
