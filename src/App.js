import './scss/app.scss';

import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData, setToken } from './redux/slices/userSlice';

import Header from './components/Header';
import Footer from './components/Footer.jsx';

import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Rankings from './pages/Rankings';
import Wallet from './pages/Wallet';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import User from './pages/User';
import NFT from './pages/NFT';
import NotFound from './pages/NotFound';

function App() {
  const dispatch = useDispatch();
  const [checkUser, setCheckUser] = useState(false);

  const token = useSelector((state) => state.user.token);
  const userData = useSelector((state) => state.user.data);

  useEffect(() => {
    // Проверка на наличие данных пользователя в localStorage
    const localStorageUserData = localStorage.getItem('user');
    if (localStorageUserData) {
      const userData = JSON.parse(localStorageUserData);
      dispatch(setUserData(userData.data));
      dispatch(setToken(userData.token));
    }
    setCheckUser(true);
  }, []);

  const tokenRefresh = async () => {
    await fetch('/api/token-refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((res) => {
        // Обновляем токен в redux
        dispatch(setToken(res.token));

        // Обновляем токен в localStorage
        localStorage.setItem(
          'user',
          JSON.stringify({
            data: userData,
            token: res.token,
          }),
        );
      });
  };

  useEffect(() => {
    // Обновление токена
    if (token) {
      const tokenParts = token.split('.');
      const payload = JSON.parse(atob(tokenParts[1]));

      // Поулчаем дату и время окончания действия токена
      const exp = payload.exp * 1000;

      console.log('Срок действия токена: ', new Date(exp));

      setTimeout(() => {
        console.log('Обновление токена');
        // Запускаем таймер и выполняем обновление токена авторизованного пользователя по окончанию действия текущего токена
        tokenRefresh();
      }, exp - new Date().getTime());
    }
  }, [checkUser]);

  return (
    checkUser && (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/user/signup" element={<SignUp />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/nft/:id" element={<NFT />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    )
  );
}

export default App;
