import React from 'react';
import subscribeImg from '../../assets/img/content/home/subscribe.png';
import FormSubscribe from '../../UI/Form/FormSubscribe';

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="subscribe__wrapper">
        <img src={subscribeImg} alt="subscription" className="subscribe__image" />
        <div className="subscribe__text">
          <h2 className="subscribe__title">Join our weekly digest</h2>
          <p className="subscribe__desc">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <FormSubscribe />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
