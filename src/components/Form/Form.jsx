import deepGet from 'lodash/get';
import deepSet from 'lodash/set';

import styles from './Form.module.css';
import Accordion from './Accordion/Accordion';
import Input from './Input/Input';
import Select from './Select/Select';
import Textarea from './Textarea/Textarea';
import AlignText from './AlignText/AlignText';
import Button from './Button/SubmitButton';
import AnimationBlock from './AnimationBlock/AnimationBlock';
import { useState, useEffect, useCallback } from 'react';

/* for Select h1-h6*/
const options = [
  { value: 'h2', description: 'Великий' },
  { value: 'h3', description: 'Більше середнього' },
  { value: 'h4', description: 'Середній' },
  { value: 'h5', description: 'Менше середнього' },
  { value: 'h6', description: 'Малий' },
];

function DataBound(ComponentClass) {
  function DataBoundComponent({ debug, name, context, ...props }) {
    const contextValue = deepGet(context, name, '');
    const [value, setValue] = useState(contextValue);
    useEffect(() => {
      setValue(contextValue);
    }, [contextValue]);

    const onChange = useCallback(
      (e) => {
        const newValue = e.target.value;
        deepSet(context, name, newValue);
        setValue(newValue);
        if (debug) {
          console.log(context);
        }
      },
      [context, name]
    );

    return (
      <ComponentClass
        {...props}
        name={name}
        value={value}
        onChange={onChange}
      />
    );
  }

  DataBoundComponent.displayName = `DataBound(${ComponentClass.displayName})`;

  return DataBoundComponent;
}

const DataBoundInput = DataBound(Input);
const DataBoundSelect = DataBound(Select);
const DataBoundTextarea = DataBound(Textarea);

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

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.form}>
      <div className={styles.formContainer}>
        <form onSubmit={onSubmit}>
          <Accordion title='Заголовок' symbol='post_add'>
            <DataBoundInput
              debug
              name='title.content'
              type='text'
              id='title-content'
              label='Заголовок:'
              placeholder='Введіть заголовок...'
              context={settings}
            />
            <DataBoundSelect
              debug
              name='title.size'
              id='title-size'
              label='Виберіть розмір заголовка:'
              options={options}
              context={settings}
            />
          </Accordion>
          <Accordion title='Зміст' symbol='description'>
            <DataBoundTextarea
              debug
              name='text.content'
              id='body-text'
              label='Зміст'
              placeholder='Введіть зміст банера...'
              context={settings}
            />
            <AlignText context={settings} DataBound={DataBound} />
          </Accordion>
          <Accordion title='Кнопка' symbol='smart_button'>
            <DataBoundInput
              debug
              name='button.name'
              type='text'
              id='button__input'
              label='Кнопка переходу:'
              placeholder='Перейти в магазин!'
              context={settings}
            />
            <DataBoundInput
              debug
              name='button.link'
              type='text'
              id='link__input'
              label='Посилання кнопки:'
              placeholder='https://www.myShop.com/'
              context={settings}
            />
            <DataBoundInput
              debug
              name='button.bg-color'
              type='color'
              id='button_bg_color'
              label='Вибрати колір:'
              context={settings}
            />
          </Accordion>
          <Accordion title='Таймер' symbol='timer'>
            <DataBoundInput
              debug
              name='timeout'
              type='number'
              id='timeout__input'
              label='Таймер появи банера:'
              placeholder='Введіть, через скільки сек.'
              context={settings}
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
