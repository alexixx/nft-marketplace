import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

// ICONS

import mailImg from '../../assets/img/icons/grey/mail.svg';
import userImg from '../../assets/img/icons/grey/user.svg';
import lockImg from '../../assets/img/icons/grey/lock.svg';

const SignUp = () => {
  const [formData, setFormData] = useState(null);

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfrim, setPasswordConfrim] = useState('');

  useEffect(() => {
    const Registration = async () => {
      const response = await fetch('/api/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json());

      console.log(response);
    };
    if (formData) Registration();
  }, [formData]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      name,
      mail,
      password,
    });
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeMail = (e) => {
    setMail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordConfrim = (e) => {
    setPasswordConfrim(e.target.value);
  };

  return (
    <form
      action=""
      className="form form--signup"
      onSubmit={(e) => {
        onSubmit(e);
      }}>
      <label htmlFor="">
        <img src={userImg} alt="" className="icon" />
        <input
          type="text"
          placeholder="Username"
          name="username"
          id="username"
          value={name}
          onChange={(e) => {
            onChangeName(e);
          }}
        />
      </label>
      <label htmlFor="">
        <img src={mailImg} alt="" className="icon" />
        <input
          type="text"
          placeholder="Email Address"
          name="email"
          id="email"
          value={mail}
          onChange={(e) => {
            onChangeMail(e);
          }}
        />
      </label>
      <label htmlFor="">
        <img src={lockImg} alt="" className="icon" />
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            onChangePassword(e);
          }}
        />
      </label>
      <label htmlFor="">
        <img src={lockImg} alt="" className="icon" />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confrimPassword"
          id="confrimPassword"
          onChange={(e) => {
            onChangePasswordConfrim(e);
          }}
        />
      </label>
      <Button
        value="Create account"
        color="purple"
        size="small"
        attrs={{
          type: 'submit',
        }}
      />
      <Link to={'/user/login'} className="link">
        Already have an account?
      </Link>
    </form>
  );
};

export default SignUp;
