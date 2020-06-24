import React from 'react';

const Button = ({
  name,
  label,
  onClick,
  disabled,
  css
}) => {
  return (
    <button
      name={name}
      style={css}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

{/* 
Quick copy-paste
<Button
  name=
  label=
  onClick=
  disabled=
  css=
/> 
*/}

export default Button;