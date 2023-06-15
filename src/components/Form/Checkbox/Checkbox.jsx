import React from 'react';
import './Checkbox.css';

export default function Checkbox() {
  return (
    <div className='checkbox'>
      <label className='label'>Курсив</label>
      <input id='checkbox-1' type='checkbox' />
      <label for='checkbox-1'>
        <span class='material-symbols-outlined'>done</span>
      </label>
    </div>
  );
}
