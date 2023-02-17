import styles from './Form.module.css';
import deepGet from 'lodash/get';
import deepSet from 'lodash/set';
import Accordion from './Accordion/Accordion';
import Input from './Input/Input';
import Select from './Select/Select';
import Textarea from './Textarea/Textarea';
import AlignText from './AlignText/AlignText';
import Button from './Button/SubmitButton';
import AnimationBlock from './AnimationBlock/AnimationBlock';
import { useState, useEffect } from 'react';

/* for Select h1-h6*/
const options = [
  { value: 'h2', description: 'Великий' },
  { value: 'h3', description: 'Більше середнього' },
  { value: 'h4', description: 'Середній' },
  { value: 'h5', description: 'Менше середнього' },
  { value: 'h6', description: 'Малий' },
];

export default function Form() {
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

  const onChange = (e) => {
    const { value, name } = e.target;
    setSettings(deepSet(settings, name, value));

    console.log('Settings: ', settings);
  };

  const getDefaultValue = () => {
    deepGet(settings, name);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.form}>
      <div className={styles.formContainer}>
        <form onSubmit={onSubmit}>
          <Accordion title='Заголовок' symbol='post_add'>
            <Input
              name='title.content'
              type='text'
              id='title-content'
              label='Заголовок:'
              placeholder='Введіть заголовок...'
              defaultValue={deepGet(settings, 'title.content', '')}
              onChange={onChange}
            />
            <Select
              name='title.size'
              id='title-size'
              label='Виберіть розмір заголовка:'
              options={options}
              onChange={onChange}
              defaultValue={deepGet(settings, 'title.size', '')}
            />
          </Accordion>
          <Accordion title='Зміст' symbol='description'>
            <Textarea
              name='text.content'
              id='body-text'
              label='Зміст'
              placeholder='Введіть зміст банера...'
              onChange={onChange}
              defaultValue={deepGet(settings, 'text.content', '')}
            />
            <AlignText onChange={onChange} settings={settings} />
          </Accordion>
          <Accordion title='Кнопка' symbol='smart_button'>
            <Input
              name='button.name'
              type='text'
              id='button__input'
              label='Кнопка переходу:'
              placeholder='Перейти в магазин!'
              onChange={onChange}
            />
            <Input
              name='button.link'
              type='text'
              id='link__input'
              label='Посилання кнопки:'
              placeholder='https://www.myShop.com/'
              onChange={onChange}
            />
            <Input
              name='button.bgColor'
              type='color'
              id='button_bg_color'
              label='Вибрати колір:'
              onChange={onChange}
            />
          </Accordion>
          <Accordion title='Таймер' symbol='timer'>
            <Input
              name='timeout'
              type='number'
              id='timeout__input'
              label='Таймер появи банера:'
              placeholder='Введіть, через скільки сек.'
              onChange={onChange}
            />
          </Accordion>
          <Accordion title='Анімація' symbol='animation'>
            <AnimationBlock />
          </Accordion>
          <Button type='submit' description='Зберегти' />
        </form>
      </div>
    </div>
  );
}
