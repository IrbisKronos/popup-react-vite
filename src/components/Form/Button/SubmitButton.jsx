import React from 'react';
import styles from './SubmitButton.module.css';

function Button({ type, description }) {
  return (
    <div className={styles.submitButton}>
      <button type={type}>
        <span>{description}</span>
      </button>
    </div>
  );
}

export default Button;
