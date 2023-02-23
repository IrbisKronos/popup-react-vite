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

export default function Form({ settings, setSettings }) {
  const onChange = (e) => {
    const { value, name, checked } = e.target;

    setSettings(deepSet(settings, name, value));

    /* setSettings((prevState) => {
      if (type === "checkbox") {
        return deepSet(prevState, name, checked);
      }
      return deepSet(prevState, name, value);
    }); */

    console.log('Settings: ', settings);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch('/data.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ banner: settings }),
    })
      .then((res) => res.json())
      .then((settings) => console.log('POST', settings))
      .catch((err) => console.warn('Помилка при отриманні налаштувань:', err));
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
              defaultValue={deepGet(settings, 'button.name', '')}
            />
            <Input
              name='button.link'
              type='text'
              id='link__input'
              label='Посилання кнопки:'
              placeholder='https://www.myShop.com/'
              onChange={onChange}
              defaultValue={deepGet(settings, 'button.link', '')}
            />
            <Input
              name='button.bgColor'
              type='color'
              id='button_bg_color'
              label='Вибрати колір:'
              onChange={onChange}
              defaultValue={deepGet(settings, 'button.bg-color', '')}
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
              defaultValue={settings.timeout}
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
