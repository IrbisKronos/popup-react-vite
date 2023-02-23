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

    setSettings((prevState) => {
      if (checked) {
        return deepSet(prevState, name, value);
      }
      return prevState;
    });

    console.log('Settings: ', settings);
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
