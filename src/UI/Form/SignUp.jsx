import React from 'react';
import Button from '../Button';

// ICONS

import mailImg from '../../assets/img/icons/grey/mail.svg';
import userImg from '../../assets/img/icons/grey/user.svg';
import lockImg from '../../assets/img/icons/grey/lock.svg';

const Subscribe = () => {
  return (
    <form action="" className="form form--signup">
      <label htmlFor="">
        <img src={userImg} alt="" className="icon" />
        <input type="text" placeholder="Username" name="username" id="username" />
      </label>
      <label htmlFor="">
        <img src={mailImg} alt="" className="icon" />
        <input type="text" placeholder="Email Address" name="email" id="email" />
      </label>
      <label htmlFor="">
        <img src={lockImg} alt="" className="icon" />
        <input type="password" placeholder="Password" name="password" id="password" />
      </label>
      <label htmlFor="">
        <img src={lockImg} alt="" className="icon" />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confrimPassword"
          id="confrimPassword"
        />
      </label>
      <Button value="Create account" color="purple" size="small" />
    </form>
  );
};

export default Subscribe;
