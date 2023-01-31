import React from 'react';
import './AlignInput.css';

function AlignInput({ id, icon, className, ...rest }) {
  return (
    <>
      <input id={id} {...rest} />
      <label htmlFor={id} className={className}>
        <span className='material-symbols-outlined'>{icon}</span>
      </label>
    </>
  );
}

export default AlignInput;
