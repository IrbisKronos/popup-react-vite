import React from 'react';
import './Input.css';

function Input({ id, label, ...rest }) {
  return (
    <div className='input'>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </div>
  );
}

export default Input;
