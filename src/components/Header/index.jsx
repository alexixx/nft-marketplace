import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import Nav from './Nav/';

import Button from '../../UI/Button';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <Logo />
      </Link>

      <Nav />
    </header>
  );
};

export default Header;
