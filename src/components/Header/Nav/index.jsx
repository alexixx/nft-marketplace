import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../../UI/Button';

import userImg from '../../../assets/img/icons/user.svg';
import burgerImg from '../../../assets/img/icons/burger.svg';

const Nav = () => {
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate('/user/signup');
  };
  return (
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
        icon={userImg}
        callback={() => onClickButton()}
        customClass="nav__button-signup"
      />
      <div className="nav__button-mobile">
        <img src={burgerImg} alt="mobile" />
      </div>
    </nav>
  );
};

export default Nav;
