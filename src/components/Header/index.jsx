import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import Nav from './Nav/';

import style from './header.module.scss';

import Button from '../../UI/Button';

const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/" className={style.header__link}>
        <Logo />
      </Link>

      <Nav />
    </header>
  );
};

export default Header;
