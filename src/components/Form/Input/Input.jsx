import React from 'react';
import './Input.css';

function Input({ type, name, id, label, onChangeValue, ...rest }) {
  return (
    <div className='input'>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChangeValue}
        {...rest}
      />
    </div>
  );
}

export default Input;
