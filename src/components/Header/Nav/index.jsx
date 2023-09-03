import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import style from '../header.module.scss';
import Button from '../../../UI/Button';

import userImg from '../../../assets/img/icons/user.svg';

const Nav = () => {
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate('/user/signup');
  };
  return (
    <nav className={style.nav}>
      <ul className={style.nav__list}>
        <li className={style.nav__item}>
          <Link to={'/marketplace'}>Marketplace</Link>
        </li>
        <li className={style.nav__item}>
          <Link to={'/rankings'}>Rankings</Link>
        </li>
        <li className={style.nav__item}>
          <Link to={'/wallet'}>Connect a wallet</Link>
        </li>
      </ul>
      <Button value="Sign Up" color="purple" icon={userImg} callback={() => onClickButton()} />
    </nav>
  );
};

export default Nav;
