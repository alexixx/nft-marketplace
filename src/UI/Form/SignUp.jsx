import React, { useState } from 'react';
import Button from '../Button';

// ICONS

import mailImg from '../../assets/img/icons/grey/mail.svg';
import userImg from '../../assets/img/icons/grey/user.svg';
import lockImg from '../../assets/img/icons/grey/lock.svg';

const Subscribe = () => {
  const [formData, setFormData] = useState();

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfrim, setPasswordConfrim] = useState('');

  const onSubmit = async (e) => {
    setFormData({
      formData: {
        name,
        mail,
        password,
      },
    });

    e.preventDefault();

    // Отправьте данные на сервер с использованием Fetch API или другой библиотеки HTTP
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.formData),
    });

    if (response.ok) {
      console.log(response);
      // Обработайте успешный ответ от сервера
      console.log('Запрос отправлен');
    } else {
      // Обработайте ошибку, если запрос не удался
    }
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
    </form>
  );
};

export default Subscribe;
