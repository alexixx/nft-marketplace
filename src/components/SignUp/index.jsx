import React from 'react';
import contentImg from '../../assets/img/content/sign-up/sign-up.png';

import SignUpForm from '../../UI/Form/SignUp';

const SignUp = () => {
  return (
    <section className="sign-up">
      <div className="sign-up__column">
        <img src={contentImg} alt="" />
      </div>
      <div className="sign-up__column">
        <h2 className="sign-up__title">Create account</h2>
        <p className="sign-up__desc">
          Welcome! enter your details and start creating, collecting and selling NFTs.
        </p>
        <SignUpForm />
      </div>
    </section>
  );
};

export default SignUp;
