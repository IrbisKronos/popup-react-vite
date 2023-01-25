import React from 'react';
import './Input.css';

function Input({ type, name, id, label, ...rest }) {
  return (
    <div className='input'>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} {...rest} />
    </div>
  );
}

export default Input;
