import React from 'react';
import './AlignInput.css';

export default function AlignInput({ value, id, icon, className, ...rest }) {
  return (
    <>
      <input type='radio' name='alignText' value={value} id={id} {...rest} />
      <label htmlFor={id} className={className}>
        <span className='material-symbols-outlined'>{icon}</span>
      </label>
    </>
  );
}
