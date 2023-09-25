import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LogIn from '../components/LogIn';

const Index = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.data);
  useEffect(() => {
    // Редирект в случае пройденной авторизации
    if (Object.keys(userData).length != 0) {
      navigate('/');
    }
  }, [userData]);

  return (
    <>
      <main>
        <LogIn />
      </main>
    </>
  );
};

export default Index;
