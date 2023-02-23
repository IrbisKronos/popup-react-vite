import './App.css';
import Popup from './components/Popup/Popup';
import Form from './components/Form/Form';
import { useState, useEffect } from 'react';

export default function App() {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => {
        setSettings(json.banner);
      })
      .catch((err) => {
        console.warn('Помилка при отриманні налаштувань');
      });
  }, []);

  return (
    <div className='App'>
      <Form settings={settings} setSettings={setSettings} />
      <Popup settings={settings} />
    </div>
  );
}
