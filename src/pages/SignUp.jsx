import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SignUp from '../components/SignUp';

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
        <SignUp />
      </main>
    </>
  );
};

export default Index;
