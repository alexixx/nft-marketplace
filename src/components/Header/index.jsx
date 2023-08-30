import React from 'react';

import Logo from '../../components/Logo';
import Nav from './Nav/';

import style from './header.module.scss';

import Button from '../../UI/Button';

const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
