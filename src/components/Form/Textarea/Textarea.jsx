import React from 'react';
import styles from './Textarea.module.css';

function Textarea({ id, label, ...props }) {
  return (
    <div className={styles.textarea}>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} className={styles.textareaItem} {...props}></textarea>
    </div>
  );
}

export default Textarea;
