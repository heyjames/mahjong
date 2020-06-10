import React from 'react';

const Button = ({ name, label, onClick, disableDrawTileBtn }) => {
  return (
    <button name={name} onClick={onClick} disabled={disableDrawTileBtn}>{label}</button>
  );
}

export default Button;