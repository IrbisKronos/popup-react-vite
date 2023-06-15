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
import Positioning from './Positioning/Positioning';
import Checkbox from './Checkbox/Checkbox';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Form({ settings, setSettings }) {
  const onChange = (e) => {
    const { value, name, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setSettings((settings) => {
      return { ...deepSet(settings, name, newValue) };
    });

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
            <Checkbox />
            <Input
              name='text.bold'
              type='checkbox'
              label='Жирний'
              onChange={onChange}
              value={deepGet(settings, 'text.bold', '')}
            />
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
              label='Вибрати колір:'
              onChange={onChange}
              value={deepGet(settings, 'button.bgColor', '')}
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

          <Accordion title='Позиціонування' symbol='top_panel_open'>
            <Positioning onChange={onChange} settings={settings} />
          </Accordion>

          <Accordion title='Розміри банера' symbol='top_panel_open'>
            <Input
              name='size.width'
              type='range'
              label='Ширина банера:'
              min='10'
              max='100'
              step='1'
              onChange={onChange}
              defaultValue={settings.size}
            />
            <Input
              name='size.height'
              type='range'
              label='Висота банера:'
              min='10'
              max='100'
              step='1'
              onChange={onChange}
              defaultValue={settings.size}
            />
          </Accordion>

          <Accordion title='Header' symbol='top_panel_close'>
            <Header>
              <Input
                name='header.title.content'
                type='text'
                label='Заголовок шапки:'
                placeholder='Введіть заголовок шапки...'
                defaultValue={deepGet(settings, 'header.title.content', '')}
                onChange={onChange}
              />
              <Select
                name='header.title.size'
                label='Виберіть розмір заголовка шапки:'
                onChange={onChange}
                defaultValue={deepGet(settings, 'header.title.size', '')}
              />
              <Textarea
                name='header.text'
                label='Зміст'
                placeholder='Введіть зміст шапки банера...'
                onChange={onChange}
                defaultValue={deepGet(settings, 'text.content', '')}
              />
              <Input
                name='header.bg-color'
                type='color'
                label='Вибрати фон шапки:'
                onChange={onChange}
                defaultValue={deepGet(settings, 'header.bg-color', '')}
              />
            </Header>
          </Accordion>

          <Accordion title='Footer' symbol='top_panel_open'>
            <Footer>
              <Textarea
                name='text.content'
                id='body-text'
                label='Зміст'
                placeholder='Введіть зміст підвалу банера...'
                onChange={onChange}
                defaultValue={deepGet(settings, 'text.content', '')}
              />
            </Footer>
            <Input
              name='footer.bg-color'
              type='color'
              label='Вибрати фон підвалу:'
              onChange={onChange}
              defaultValue={deepGet(settings, 'footer.bg-color', '')}
            />
          </Accordion>

          <Button type='submit' description='Зберегти' />
        </form>
      </div>
    </div>
  );
}
