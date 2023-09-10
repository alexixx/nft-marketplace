import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../UI/Button';
import userImg from '../assets/img/icons/user.svg';

const MobileMenu = ({ mobileMenu, setMobileMenu }) => {
  const navigate = useNavigate();

  const onClickSignUp = () => {
    navigate('/user/signup');
    setMobileMenu(false);
  };
  return (
    <div className="mobile-menu">
      <Button value="Sign Up" color="white" callback={() => onClickSignUp()} />
      <nav className="mobile-menu__list">
        <Link
          to={'/marketplace'}
          className="mobile-menu__item"
          onClick={() => {
            setMobileMenu(false);
          }}>
          Marketplace
        </Link>
        <Link
          to={'/rankings'}
          className="mobile-menu__item"
          onClick={() => {
            setMobileMenu(false);
          }}>
          Rankings
        </Link>
        <Link
          to={'/wallet'}
          className="mobile-menu__item"
          onClick={() => {
            setMobileMenu(false);
          }}>
          Connect a wallet
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
