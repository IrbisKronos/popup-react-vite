import React from 'react';
import './AlignInput.css';

export default function AlignInput({ id, icon, className, ...rest }) {
  return (
    <>
      <input id={id} {...rest} />
      <label htmlFor={id} className={className}>
        <span className='material-symbols-outlined'>{icon}</span>
      </label>
    </>
  );
}
