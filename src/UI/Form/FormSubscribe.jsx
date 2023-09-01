import React from 'react';
import Button from '../Button';
import mailImg from '../../assets/img/icons/mail.svg';

const Subscribe = () => {
  return (
    <form action="" className="form form--subscribe">
      <label htmlFor="">
        <input type="text" placeholder="Enter your email here" name="email" id="email" />
      </label>
      <Button value="Subscribe" icon={mailImg} color="purple" size="medium" />
    </form>
  );
};

export default Subscribe;
