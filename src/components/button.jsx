import React from 'react';

const Button = ({ name, label, onClick }) => {
  return (
    <button name={name} onClick={onClick}>{label}</button>
  );
}

export default Button;