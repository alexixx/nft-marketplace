import React from 'react';
import Logo from './Logo';
import logoMinIcon from '../assets/img/icons/logo_min.svg';
import FormSubscribe from '../UI/Form/FormSubscribe';

// SOCIAL ICONS
import discordIcon from '../assets/img/icons/discord.svg';
import youtubeIcon from '../assets/img/icons/youtube.svg';
import twitterIcon from '../assets/img/icons/twitter.svg';
import instagramIcon from '../assets/img/icons/instagram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div>
            <div className="footer__title">
              <img src={logoMinIcon} alt="" />
              NFT Marketplace
            </div>
            <p>NFT marketplace UI created with Anima for Figma.</p>
            <p>Join our community</p>
            <div className="footer__social">
              <a href="#!">
                <img src={discordIcon} alt="discord" />
              </a>
              <a href="#!">
                <img src={youtubeIcon} alt="youtube" />
              </a>
              <a href="#!">
                <img src={twitterIcon} alt="twitter" />
              </a>
              <a href="#!">
                <img src={instagramIcon} alt="instagram" />
              </a>
            </div>
          </div>
          <div>
            <div className="footer__title">Explore</div>
            <a href="#!" className="footer__link">
              Marketplace
            </a>
            <a href="#!" className="footer__link">
              Rankings
            </a>
            <a href="#!" className="footer__link">
              Connect a wallet
            </a>
          </div>
          <div>
            <div className="footer__title">Join our weekly digest</div>
            <p>Get exclusive promotions & updates straight to your inbox.</p>
            <FormSubscribe />
          </div>
          <div className="footer__copyright">Ⓒ NFT Market. Use this template freely.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
