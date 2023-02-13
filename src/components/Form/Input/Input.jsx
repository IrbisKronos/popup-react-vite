import React from 'react';
import styles from './Input.module.css';

export default function Input({ id, label, ...rest }) {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </div>
  );
}
