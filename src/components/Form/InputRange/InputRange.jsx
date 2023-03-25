import React from 'react';
import styles from './InputRange.module.css';

export default function InputRange({ id, label, ...rest }) {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input type='range' id={id} {...rest} />
    </div>
  );
}
