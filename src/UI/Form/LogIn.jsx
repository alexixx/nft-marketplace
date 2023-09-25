import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserData, setToken } from '../../redux/slices/userSlice';
import Button from '../Button';

// ICONS

import mailImg from '../../assets/img/icons/grey/mail.svg';
import userImg from '../../assets/img/icons/grey/user.svg';
import lockImg from '../../assets/img/icons/grey/lock.svg';

const LogIn = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(null);

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const Authentication = async () => {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then((res) => {
        return res.json();
      });

      if (!response.error) {
        dispatch(setUserData(response.data));
        dispatch(setToken(response.token));

        localStorage.setItem(
          'user',
          JSON.stringify({
            data: response.data,
            token: response.token,
          }),
        );
      } else {
        console.error('Ошибка ввода данных');
      }
    };

    if (formData) Authentication();
  }, [formData]);

  const onSubmit = (e) => {
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

  return (
    <form
      action=""
      className="form form--login"
      onSubmit={(e) => {
        onSubmit(e);
      }}>
      <label htmlFor="">
        <img src={userImg} alt="" className="icon" />
        <input
          type="text"
          placeholder="Username"
          name="name"
          id="username"
          value={name}
          onChange={(e) => {
            onChangeName(e);
          }}
        />
      </label>
      <p align="center">Or</p>
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
      <Button
        value="Log In"
        color="purple"
        size="small"
        attrs={{
          type: 'submit',
        }}
      />
      <Link to={'/user/signup'} className="link">
        No account?
      </Link>
    </form>
  );
};

export default LogIn;
