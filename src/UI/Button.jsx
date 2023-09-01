import React from 'react';

const Button = ({ value, color, size, icon, callback }) => {
  return (
    <button className={`button button--color--${color} button--size--${size} `} onClick={callback}>
      <img src={icon} alt={`icon-${icon}`} className="icon" />
      {value}
    </button>
  );
};

export default Button;
