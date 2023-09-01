import React from 'react';

// images
import artImage from '../../assets/img/content/categories/art.png';
import collectiblesImage from '../../assets/img/content/categories/collectibles.png';
import musicImage from '../../assets/img/content/categories/music.png';
import photographyImage from '../../assets/img/content/categories/photography.png';
import sportImage from '../../assets/img/content/categories/sport.png';
import utilityImage from '../../assets/img/content/categories/utility.png';
import videoImage from '../../assets/img/content/categories/video.png';
import virtual_worldstImage from '../../assets/img/content/categories/virtual_worlds.png';

//icons
import basketballIcon from '../../assets/img/content/categories/icons/Basketball.svg';
import cameraIcon from '../../assets/img/content/categories/icons/Camera.svg';
import magicWandIcon from '../../assets/img/content/categories/icons/MagicWand.svg';
import musicNotesIcon from '../../assets/img/content/categories/icons/MusicNotes.svg';
import paintBrushIcon from '../../assets/img/content/categories/icons/PaintBrush.svg';
import planetIcon from '../../assets/img/content/categories/icons/Planet.svg';
import swatchesIcon from '../../assets/img/content/categories/icons/Swatches.svg';
import videoCameraIcon from '../../assets/img/content/categories/icons/VideoCamera.svg';

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
          <div className="top-categories__item">
            <div
              className="top-categories__image-wrapper"
              style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className="top-categories__label">{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
