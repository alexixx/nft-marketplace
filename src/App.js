import './scss/app.scss';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer.jsx';

import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Rankings from './pages/Rankings';
import Wallet from './pages/Wallet';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
