import React from 'react';
import { Link } from 'react-router-dom';

// images
import artImage from '../../../assets/img/content/categories/art.png';
import collectiblesImage from '../../../assets/img/content/categories/collectibles.png';
import musicImage from '../../../assets/img/content/categories/music.png';
import photographyImage from '../../../assets/img/content/categories/photography.png';
import sportImage from '../../../assets/img/content/categories/sport.png';
import utilityImage from '../../../assets/img/content/categories/utility.png';
import videoImage from '../../../assets/img/content/categories/video.png';
import virtual_worldstImage from '../../../assets/img/content/categories/virtual_worlds.png';

const categories = [
  {
    name: 'Art',
    image: artImage,
  },
  {
    name: 'Collectibles',
    image: collectiblesImage,
  },
  {
    name: 'Music',
    image: musicImage,
  },
  {
    name: 'Photography',
    image: photographyImage,
  },
  {
    name: 'Video',
    image: videoImage,
  },
  {
    name: 'Utility',
    image: utilityImage,
  },
  {
    name: 'Sport',
    image: sportImage,
  },
  {
    name: 'Virtual Worlds',
    image: virtual_worldstImage,
  },
];

const TopCategories = () => {
  return (
    <section className="top-categories">
      <h2 className="top-categories__title">Browse Categories</h2>
      <div className="top-categories__list">
        {categories.map((item) => (
          <Link to={`/browse?category=${item.name.toLowerCase()}`} className="top-categories__item">
            <div
              className="top-categories__image-wrapper"
              style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className="top-categories__label">{item.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
