import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../../UI/Button';
import MobileMenu from '../../MobileMenu.jsx';

import burgerImg from '../../../assets/img/icons/burger.svg';

const Nav = () => {
  const navigate = useNavigate();

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [mobileMenu]);

  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to={'/marketplace'}>Marketplace</Link>
          </li>
          <li className="nav__item">
            <Link to={'/rankings'}>Rankings</Link>
          </li>
          <li className="nav__item">
            <Link to={'/wallet'}>Connect a wallet</Link>
          </li>
        </ul>
        <Button
          value="Sign Up"
          color="purple"
          icon="user"
          callback={() => navigate('/user/signup')}
          customClass="nav__button-signup"
        />
        <div
          className="nav__button-mobile"
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}>
          {mobileMenu ? 'Close' : <img src={burgerImg} alt="mobile" />}
        </div>
      </nav>
      {mobileMenu && <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />}
    </>
  );
};

export default Nav;
