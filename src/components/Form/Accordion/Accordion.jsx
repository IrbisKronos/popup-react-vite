import React, { useEffect, useRef, useState } from 'react';
import './Accordion.css';
import Icon from './icon.svg';

function Accordion({ title, symbol, children }) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState('');

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  return (
    <div className='accordion'>
      <div
        className='accordion__visible'
        style={{ color: toggle ? 'var(--primary)' : 'var(--dark-2)' }}
        onClick={() => setToggle(!toggle)}
      >
        <div className='accordion__icon'>
          <span className='material-symbols-outlined'>{symbol}</span>
        </div>
        <div className='accordion__title'>
          <span>{title}</span>
        </div>

        <img className={toggle ? 'active' : ''} src={Icon} />
      </div>

      <div
        className={toggle ? 'accordion-toggle animated' : 'accordion-toggle'}
        style={{ height: toggle ? `${heightEl}` : '0px' }}
        ref={refHeight}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
