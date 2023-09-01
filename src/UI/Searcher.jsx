import React from 'react';

const Searcher = () => {
  return (
    <div className="searcher">
      <label htmlFor="searcher"> </label>
      <input type="text" name="searcher" id="searcher" placeholder="Search your favourite NFTs" />
    </div>
  );
};

export default Searcher;
