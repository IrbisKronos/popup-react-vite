import './Popup.css';
import deepGet from 'lodash/get';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';

export default function Popup({ settings }) {
  const [isOpen, setIsOpen] = useState(false);
  const [animated, setAnimated] = useState(false);
  const [position, setPosition] = useState({
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  });

  const transitionRef = useRef();

  /* Positioning */

  useEffect(() => {
    if (!settings.positioning) {
      return;
    }
    const place = settings.positioning;
    if (place === 'topRight') {
      setPosition({
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
      });
    } else if (place === 'bottomRight') {
      setPosition({
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      });
    } else if (place === 'bottomLeft') {
      setPosition({
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
      });
    } else if (place === 'topLeft') {
      setPosition({
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      });
    }
  }, [settings.positioning]);

  /* Timer */
  useEffect(() => {
    if (!settings.timeout) {
      return;
    }
    /* convert seconds to milliseconds */
    const milliseconds = settings.timeout + '000';

    /* add className 'open' */
    const timer = setTimeout(() => {
      setIsOpen(true);

      /* add animationClass after general animation */
      const node = transitionRef.current;
      node.addEventListener('transitionend', () => {
        settings.animation ? setAnimated(true) : setAnimated(false);
      });
    }, milliseconds);

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

  return (
    <div className={clsx('popup', isOpen && 'open')}>
      <div className='popup__body' style={position}>
        <div
          className={clsx(
            'popup__content animate__animated',
            animated && `${settings.animation}`
          )}
          style={{
            textAlign: settings.alignText,
            backgroundColor: deepGet(settings, 'background.color', ''),
            width: `${deepGet(settings, 'size.width', '')}%`,
            height: `${deepGet(settings, 'size.height', '')}%`,
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
              backgroundColor: deepGet(settings, 'button.bgColor', ''),
            }}
          >
            {deepGet(settings, 'button.name', '')}
          </a>
        </div>
      </div>
    </div>
  );
}
