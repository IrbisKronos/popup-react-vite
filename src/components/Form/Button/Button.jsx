import React from 'react';
import './Button.css';

function Button({ className, type, description }) {
  return (
    <div className={className}>
      <button type={type}>
        <span>{description}</span>
      </button>
    </div>
  );
}

export default Button;
