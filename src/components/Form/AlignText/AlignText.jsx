import React from 'react';
import './AlignText.css';

function AlignText() {
  return (
    <div className='segmented-control' id='align_text_select'>
      <input
        type='radio'
        name='banner[align_text]'
        value='left'
        id='header__left'
        defaultChecked
      />
      <label htmlFor='header__left' className='segmented-control__1'>
        <span className='material-symbols-outlined'>format_align_left</span>
      </label>

      <input
        type='radio'
        name='banner[align_text]'
        value='center'
        id='header__center'
      />
      <label htmlFor='header__center' className='segmented-control__2'>
        <span className='material-symbols-outlined'>format_align_center</span>
      </label>

      <input
        type='radio'
        name='banner[align_text]'
        value='right'
        id='header__right'
      />
      <label htmlFor='header__right' className='segmented-control__3'>
        <span className='material-symbols-outlined'>format_align_right</span>
      </label>

      <input
        type='radio'
        name='banner[align_text]'
        value='justify'
        id='header__justify'
      />
      <label htmlFor='header__justify' className='segmented-control__4'>
        <span className='material-symbols-outlined'>format_align_justify</span>
      </label>

      <div className='segmented-control__color'></div>
    </div>
  );
}

export default AlignText;
