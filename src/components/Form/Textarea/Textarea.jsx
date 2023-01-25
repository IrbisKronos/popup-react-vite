import React from 'react';
import './Textarea.css';

function Textarea({ id, label, name, placeholder }) {
  return (
    <div className='textarea'>
      <label for={id}>{label}</label>
      <textarea
        id={id}
        className='textarea__item'
        name={name}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export default Textarea;
