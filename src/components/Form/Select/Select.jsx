import React from 'react';
import styles from './Select.module.css';

function Select({ options, id, label, name, onChange }) {
  return (
    <div className={styles.select}>
      <label htmlFor={id}>{label}</label>

      <select
        name={name}
        id={id}
        className={styles.selectItems}
        onChange={onChange}
      >
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
