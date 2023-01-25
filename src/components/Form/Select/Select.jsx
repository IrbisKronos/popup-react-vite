import React from 'react';
import './Select.css';

function Select({ options, id, label, name }) {
  return (
    <div className='select'>
      <label htmlFor={id}>{label}</label>

      <select name={name} id={id} className='select__items'>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.description}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
