import React from 'react';

import wallpaperImg from '../../assets/img/content/profile/wallpaper.png';
import authorImg from '../../assets/img/content/home/author.png';
// ICONS
import discordIcon from '../../assets/img/icons/discord.svg';
import youtubeIcon from '../../assets/img/icons/youtube.svg';
import twitterIcon from '../../assets/img/icons/twitter.svg';
import instagramIcon from '../../assets/img/icons/instagram.svg';

import copyIcon from '../../assets/img/icons/copy.svg';
import plusIcon from '../../assets/img/icons/plus.svg';

import Button from '../../UI/Button';
import Tabs from '../../UI/Tabs';

const UserInfo = () => {
  //   return (
  //     <>
  //       <section className="user">
  //         <div className="user__wallpaper" style={{ backgroundImage: `url(${wallpaperImg})` }}></div>
  //         <div className="container">
  //           <div className="user__wrapper">
  //             <div className="user__column">
  //               <div className="user__title">Animakid</div>
  //               <div className="user__info">
  //                 <div>
  //                   <span>250k+</span>
  //                   Volume
  //                 </div>
  //                 <div>
  //                   <span>50+</span>
  //                   NFTs Sold
  //                 </div>
  //                 <div>
  //                   <span>3000+</span>
  //                   Followers
  //                 </div>
  //               </div>
  //               <p className="user__subtitle">Bio</p>
  //               <p className="user__desc">The internet's friendliest designer kid.</p>
  //               <p className="user__subtitle">Links</p>
  //               <div className="user__social">
  //                 <a href="#!">
  //                   <img src={discordIcon} alt="" />
  //                 </a>
  //                 <a href="#!">
  //                   <img src={youtubeIcon} alt="" />
  //                 </a>
  //                 <a href="#!">
  //                   <img src={twitterIcon} alt="" />
  //                 </a>
  //                 <a href="#!">
  //                   <img src={instagramIcon} alt="" />
  //                 </a>
  //               </div>
  //             </div>
  //             <div className="user__column">
  //               <Button value="0xc0E3...B79C" color="purple" icon={copyIcon} />
  //               <Button value="Follow" icon={plusIcon} />
  //             </div>
  //             <img src={authorImg} alt="author" className="user__avatar" />
  //           </div>
  //         </div>
  //       </section>
  //       <div className="container">
  //         <Tabs
  //           values={[
  //             {
  //               id: 0,
  //               title: 'Created',
  //               counter: 302,
  //             },
  //             {
  //               id: 1,
  //               title: 'Owned',
  //               counter: 67,
  //             },
  //             {
  //               id: 2,
  //               title: 'Collection',
  //               counter: 4,
  //             },
  //           ]}
  //         />
  //       </div>
  //     </>
  //   );
  return (
    <>
      <section className="user">
        <div className="user__wallpaper" style={{ backgroundImage: `url(${wallpaperImg})` }}></div>
        <div className="container">
          <div className="user__wrapper">
            <div className="user__row">
              <div className="user__title">Animakid</div>
              <div className="user__button-wrapper">
                <Button value="0xc0E3...B79C" color="purple" icon={copyIcon} />
                <Button value="Follow" icon={plusIcon} />
              </div>
            </div>
            <div className="user__row">
              <div className="user__info">
                <div>
                  <span>250k+</span>
                  Volume
                </div>
                <div>
                  <span>50+</span>
                  NFTs Sold
                </div>
                <div>
                  <span>3000+</span>
                  Followers
                </div>
              </div>
              <p className="user__subtitle">Bio</p>
              <p className="user__desc">The internet's friendliest designer kid.</p>
              <p className="user__subtitle">Links</p>
              <div className="user__social">
                <a href="#!">
                  <img src={discordIcon} alt="" />
                </a>
                <a href="#!">
                  <img src={youtubeIcon} alt="" />
                </a>
                <a href="#!">
                  <img src={twitterIcon} alt="" />
                </a>
                <a href="#!">
                  <img src={instagramIcon} alt="" />
                </a>
              </div>
            </div>
            <img src={authorImg} alt="author" className="user__avatar" />
          </div>
        </div>
      </section>
      <div className="container">
        <Tabs
          values={[
            {
              id: 0,
              title: 'Created',
              counter: 302,
            },
            {
              id: 1,
              title: 'Owned',
              counter: 67,
            },
            {
              id: 2,
              title: 'Collection',
              counter: 4,
            },
          ]}
          activeTabDefault="0"
        />
      </div>
    </>
  );
};

export default UserInfo;
