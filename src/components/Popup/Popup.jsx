import './Popup.css';
import deepGet from 'lodash/get';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';

export default function Popup({ settings }) {
  const [isOpen, setIsOpen] = useState(false);
  const [animated, setAnimated] = useState(false);
  const [animationClass, setAnimationClass] = useState(settings.animation);

  /* Timer */
  useEffect(() => {
    if (!settings.timeout) {
      return;
    }
    const milliseconds = settings.timeout + '000';

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, milliseconds);
    console.log('settings in popup-component:', settings);
    return () => clearTimeout(timer);
  }, [settings]);

  const handlePopupClose = () => setIsOpen(false);

  /* Set title size (h2-h6) with title content */
  const titleContent = deepGet(settings, 'title.content', '');
  const titleSize = deepGet(settings, 'title.size', '');
  const titleSizes = {
    h2: <h2>{titleContent}</h2>,
    h3: <h3>{titleContent}</h3>,
    h4: <h4>{titleContent}</h4>,
    h5: <h5>{titleContent}</h5>,
    h6: <h6>{titleContent}</h6>,
  };
  const titleElement = titleSizes[titleSize];

  const transitionRef = useRef(null);
  /* useEffect(() => {
    const node = transitionRef.current;
    node.addEventListener('transitionend', () => {
      settings.animation ? setAnimationClass(settings.animation) : '';
    });
  }); */

  return (
    <div className={clsx('popup', isOpen && 'open')}>
      <div className='popup__body'>
        <div
          onTransitionEnd={(e) => setAnimated(true)}
          className={clsx(
            'popup__content animate__animated',
            animated && `${settings.animation}`
          )}
          style={{
            textAlign: settings.alignText,
            backgroundColor: deepGet(settings, 'background.color'),
          }}
          ref={transitionRef}
        >
          <button className='popup__close' onClick={handlePopupClose}>
            &times;
          </button>
          <div className='popup__title'>{titleElement}</div>
          <div className='popup__text'>
            {deepGet(settings, 'text.content', '')}
          </div>
          <a
            href={deepGet(settings, 'button.link', '')}
            className='popup__link'
            style={{
              backgroundСolor: deepGet(settings, 'button.bg-color', '#fff'),
            }}
          >
            {deepGet(settings, 'button.name', '')}
          </a>
        </div>
      </div>
    </div>
  );
}
