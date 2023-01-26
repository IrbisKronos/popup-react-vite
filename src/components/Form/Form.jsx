import './Form.css';
import Accordion from './Accordion/Accordion';
import Input from './Input/Input';
import Select from './Select/Select';
import Textarea from './Textarea/Textarea';
import AlignText from './AlignText/AlignText';
import Button from './Button/Button';
import AnimationBlock from './AnimationBlock/AnimationBlock';

/* for Select */
const options = [
  { value: 'h2', description: 'Великий' },
  { value: 'h3', description: 'Більше середнього' },
  { value: 'h4', description: 'Середній' },
  { value: 'h5', description: 'Менше середнього' },
  { value: 'h6', description: 'Малий' },
];

function Form() {
  return (
    <div className='form'>
      <form className='banner_setting_form' id='banner_setting_form'></form>
      <div className='form__container'>
        <Accordion title='Заголовок' symbol='post_add'>
          <Input
            type='text'
            name='banner[title][content]'
            id='title-text'
            label='Заголовок:'
            placeholder='Введіть заголовок...'
          />
          <Select
            options={options}
            id='title-size'
            label='Виберіть розмір заголовка:'
            name='banner[title][size]'
          />
        </Accordion>
        <Accordion title='Зміст' symbol='description'>
          <Textarea
            id='body-text'
            label='Зміст'
            name='banner[text][content]'
            placeholder='Введіть зміст банера...'
          />
          <AlignText />
        </Accordion>
        <Accordion title='Кнопка' symbol='smart_button'>
          <Input
            type='text'
            name='banner[button][name]'
            id='button__input'
            label='Кнопка переходу:'
            placeholder='Перейти в магазин!'
          />
          <Input
            type='text'
            name='banner[button][link]'
            id='link__input'
            label='Посилання кнопки:'
            placeholder='https://www.myshop.com/'
          />
          <Input
            type='color'
            name='banner[button][bg_color]'
            id='button_bg_color'
            label='Вибрати колір:'
          />
        </Accordion>
        <Accordion title='Таймер' symbol='timer'>
          <Input
            type='text'
            name='banner[timeout]'
            id='timeout__input'
            label='Таймер появи банера:'
            placeholder='Введіть, через скільки сек.'
          />
        </Accordion>
        <Accordion title='Анімація' symbol='animation'>
          <AnimationBlock />
        </Accordion>
        <Button
          className='submit__button'
          type='submit'
          description='Зберегти'
        />
      </div>
    </div>
  );
}

export default Form;
