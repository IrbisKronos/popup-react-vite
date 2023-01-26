import React from 'react';
import './AnimationItem.css';

function AnimationItem() {
  return (
    <div
      className='animation_block animate__animated'
      data-animate_item_id='animate__shakeX'
    >
      <input
        type='radio'
        name='banner[animation]'
        value='animate__shakeX'
        id='animate__shakeX'
      />
      <label htmlFor='animate__shakeX' className='animate__label'>
        <span className='material-symbols-outlined'>all_inclusive</span>
        <span>ShakeX</span>
      </label>
    </div>
  );
}

export default AnimationItem;
