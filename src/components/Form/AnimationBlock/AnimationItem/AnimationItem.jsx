import React from 'react';
import { useState } from 'react';
import './AnimationItem.css';

export default function AnimationItem({ animation, label, labelSimbol }) {
  const [isAnimating, setIsAnimating] = useState(false);
  function handleClick(e) {
    setIsAnimating(true);
  }
  function handleAnimationEnd() {
    setIsAnimating(false);
  }

  return (
    <div
      className={`animation_block animate__animated ${
        isAnimating ? animation : ''
      }`}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
    >
      <input type='radio' name='animation' value={animation} id={animation} />
      <label htmlFor={animation} className='animate__label'>
        <span className='material-symbols-outlined'>{labelSimbol}</span>
        <span>{label}</span>
      </label>
    </div>
  );
}
