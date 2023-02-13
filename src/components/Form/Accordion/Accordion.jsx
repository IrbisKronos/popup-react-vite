import React, { useEffect, useRef, useState } from 'react';
import styles from './Accordion.module.css';
import Icon from './icon.svg';

export default function Accordion({ title, symbol, children }) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState('');

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight + 20}px`);
  }, []);

  return (
    <div className={styles.accordion}>
      <div
        className={styles.accordionVisible}
        onClick={() => setToggle(!toggle)}
      >
        <div className={styles.accordionSymbol}>
          <span className='material-symbols-outlined'>{symbol}</span>
        </div>
        <div className={styles.accordionTitle}>
          <span>{title}</span>
        </div>

        <img className={toggle ? `${styles.active}` : ''} src={Icon} />
      </div>

      <div
        className={
          toggle
            ? `${styles.accordionToggle} ${styles.animated}`
            : `${styles.accordionToggle}`
        }
        style={{ height: toggle ? `${heightEl}` : '0px' }}
        ref={refHeight}
      >
        {children}
      </div>
    </div>
  );
}
