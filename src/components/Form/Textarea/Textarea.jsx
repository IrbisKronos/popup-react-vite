import React from 'react';
import './Textarea.css';

function Textarea({ id, label, ...props }) {
  return (
    <div className='textarea'>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} className='textarea__item' {...props}></textarea>
    </div>
  );
}

export default Textarea;
