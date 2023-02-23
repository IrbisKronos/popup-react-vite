import React from 'react';
import styles from './Select.module.css';

export default function Select({ id, label, name, onChange }) {
  const options = [
    { value: 'h2', description: 'Великий' },
    { value: 'h3', description: 'Більше середнього' },
    { value: 'h4', description: 'Середній' },
    { value: 'h5', description: 'Менше середнього' },
    { value: 'h6', description: 'Малий' },
  ];

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
