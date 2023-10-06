import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearUserData, clearToken } from '../../../redux/slices/userSlice';
import Button from '../../../UI/Button';
import MobileMenu from '../../MobileMenu.jsx';

import burgerImg from '../../../assets/img/icons/burger.svg';

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.data);

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [mobileMenu]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const LogOut = () => {
    dispatch(clearUserData());
    dispatch(clearToken());
    localStorage.clear();
  };

  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to={'/browse'}>Marketplace</Link>
          </li>
          <li className="nav__item">
            <Link to={'/rankings'}>Rankings</Link>
          </li>
          <li className="nav__item">
            <Link to={'/wallet'}>Connect a wallet</Link>
          </li>
        </ul>
        {userData.id ? (
          <>
            <Button
              value="Log Out"
              color="white"
              callback={() => LogOut()}
              customClass="nav__button-logout"
            />
            <Link
              to={'/user/alexey'}
              className="nav__avatar"
              style={{ backgroundImage: `url(${userData.avatar})` }}></Link>
          </>
        ) : (
          <>
            <Button
              value="Log In"
              color="purple"
              icon="user"
              callback={() => navigate('/user/login')}
              customClass="nav__button-signup"
            />
          </>
        )}

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
