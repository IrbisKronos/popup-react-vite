import React from 'react';
import './Positioning.css';

export default function Positioning({ settings, onChange }) {
  return (
    <>
      <label className='positioningLabel'>Позиціонування банера</label>
      <div className='segmentedControlP'>
        <input
          type='radio'
          name='positioning'
          id='topRight'
          value='topRight'
          defaultChecked={settings.positioning === 'topRight'}
          onChange={onChange}
        />
        <label htmlFor='topRight' className='segmentedControlP1'>
          <span className='material-symbols-outlined'>north_east</span>
        </label>
        <input
          type='radio'
          name='positioning'
          id='bottomRight'
          value='bottomRight'
          defaultChecked={settings.positioning === 'bottomRight'}
          onChange={onChange}
        />
        <label htmlFor='bottomRight' className='segmentedControlP2'>
          <span className='material-symbols-outlined'>south_east</span>
        </label>
        <input
          type='radio'
          name='positioning'
          id='bottomLeft'
          value='bottomLeft'
          defaultChecked={settings.positioning === 'bottomLeft'}
          onChange={onChange}
        />
        <label htmlFor='bottomLeft' className='segmentedControlP3'>
          <span className='material-symbols-outlined'>south_west</span>
        </label>
        <input
          type='radio'
          name='positioning'
          id='topLeft'
          value='topLeft'
          defaultChecked={settings.positioning === 'topLeft'}
          onChange={onChange}
        />
        <label htmlFor='topLeft' className='segmentedControlP4'>
          <span className='material-symbols-outlined'>north_west</span>
        </label>
        <div className='segmentedControlPColor'></div>
      </div>
    </>
  );
}
