import React from 'react';
import './Select.css';

function Select({ options, id, label, name, onChange }) {
  return (
    <div className='select'>
      <label htmlFor={id}>{label}</label>

      <select name={name} id={id} className='select__items' onChange={onChange}>
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
