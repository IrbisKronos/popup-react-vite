import React from 'react';
import styles from './Input.module.css';

function Input({ id, label, ...rest }) {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </div>
  );
}

export default Input;
