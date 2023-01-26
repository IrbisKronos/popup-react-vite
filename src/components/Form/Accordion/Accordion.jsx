import React, { useEffect, useRef, useState } from 'react';
import './Accordion.css';
import Icon from './icon.svg';

function Accordion({ title, symbol, children }) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState('');

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight + 20}px`);
  }, []);

  return (
    <div className='accordion'>
      <div className='accordion__visible' onClick={() => setToggle(!toggle)}>
        <div className='accordion__symbol'>
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
