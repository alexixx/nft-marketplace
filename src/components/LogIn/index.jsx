import React from 'react';
import contentImg from '../../assets/img/content/sign-up/sign-up.png';

import LogInForm from '../../UI/Form/LogIn';

const LogIn = () => {
  return (
    <section className="log-in">
      <div className="log-in__column">
        <img src={contentImg} alt="" />
      </div>
      <div className="log-in__column">
        <h2 className="log-in__title">Log In</h2>
        <p className="log-in__desc">
          Welcome! enter your details and start creating, collecting and selling NFTs.
        </p>
        <LogInForm />
      </div>
    </section>
  );
};

export default LogIn;
