import React from 'react';
import './AlignText.css';
import deepGet from 'lodash/get';

export default function AlignText({ settings, onChange }) {
  return (
    <div className='segmentedControl' id='align_text_select'>
      <input
        type='radio'
        name='alignText'
        id='left'
        value='left'
        onChange={onChange}
        defaultChecked={settings.alignText === 'left'}
      />
      <label htmlFor='left' className='segmentedControl1'>
        <span className='material-symbols-outlined'>format_align_left</span>
      </label>
      <input
        type='radio'
        name='alignText'
        id='center'
        value='center'
        onChange={onChange}
        defaultChecked={
          settings.alignText ? console.log(settings.alignText) : ''
        }
      />
      <label htmlFor='center' className='segmentedControl2'>
        <span className='material-symbols-outlined'>format_align_center</span>
      </label>
      <input
        type='radio'
        name='alignText'
        id='right'
        value='right'
        onChange={onChange}
        defaultChecked={settings.alignText === 'right'}
      />
      <label htmlFor='right' className='segmentedControl3'>
        <span className='material-symbols-outlined'>format_align_right</span>
      </label>
      <input
        type='radio'
        name='alignText'
        id='justify'
        value='justify'
        onChange={onChange}
        defaultChecked={settings.alignText === 'justify'}
      />
      <label htmlFor='justify' className='segmentedControl4'>
        <span className='material-symbols-outlined'>format_align_justify</span>
      </label>
      <div className='segmentedControlColor'></div>
    </div>
  );
}
