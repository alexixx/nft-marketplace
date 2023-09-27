import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearUserData, clearToken } from '../redux/slices/userSlice';
import Button from '../UI/Button';

const MobileMenu = ({ mobileMenu, setMobileMenu }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.data);

  useEffect(() => {
    console.log(userData);
  }, []);

  const onClickLogin = () => {
    navigate('/user/login');
    setMobileMenu(false);
  };

  const LogOut = () => {
    dispatch(clearUserData());
    dispatch(clearToken());
    localStorage.clear();
    setMobileMenu(false);
  };
  return (
    <div className="mobile-menu">
      {userData.id ? (
        <Button value="Log Out" color="white" callback={() => LogOut()} />
      ) : (
        <Button value="Log In" color="white" callback={() => onClickLogin()} />
      )}

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
