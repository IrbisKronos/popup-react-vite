import './Form.css';
import Accordion from './Accordion/Accordion';
import Input from './Input/Input';
import Select from './Select/Select';
import Textarea from './Textarea/Textarea';
import AlignText from './AlignText/AlignText';
import Button from './Button/Button';
import AnimationBlock from './AnimationBlock/AnimationBlock';
import { useState } from 'react';

/* for Select h1-h6*/
const options = [
  { value: 'h2', description: 'Великий' },
  { value: 'h3', description: 'Більше середнього' },
  { value: 'h4', description: 'Середній' },
  { value: 'h5', description: 'Менше середнього' },
  { value: 'h6', description: 'Малий' },
];

function Form() {
  const [titleContent, setTitleContent] = useState('');
  const [titleSize, setTitleSize] = useState('');
  const [description, setDescription] = useState('');
  const [alignDescription, setAlignDescription] = useState('');
  const [buttonContent, setButtonContent] = useState('');
  const [buttonLink, setButtonLink] = useState('');
  const [timeout, setTimeout] = useState('');
  const [animation, setAnimation] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const bannerSettings = {
      title: {
        content: titleContent,
        size: titleSize,
      },
    };
    console.log(bannerSettings);
  };
  return (
    <div className='form'>
      <div className='form__container'>
        <form onSubmit={onSubmit}>
          <Accordion title='Заголовок' symbol='post_add'>
            <Input
              type='text'
              name='banner[title][content]'
              id='title-text'
              label='Заголовок:'
              placeholder='Введіть заголовок...'
              onChangeValue={(e) => {
                setTitleContent(e.target.value);
              }}
              value={titleContent}
            />
            <Select
              options={options}
              id='title-size'
              label='Виберіть розмір заголовка:'
              name='banner[title][size]'
              onChangeValue={(e) => {
                setTitleSize(e.target.value);
              }}
            />
          </Accordion>
          <Accordion title='Зміст' symbol='description'>
            <Textarea
              id='body-text'
              label='Зміст'
              name='banner[text][content]'
              placeholder='Введіть зміст банера...'
              onChangeValue={(e) => {
                setDescription(e.target.value);
              }}
            />
            <AlignText
              onChangeValue={(e) => {
                setTitleContent(e.target.value);
              }}
            />
          </Accordion>
          <Accordion title='Кнопка' symbol='smart_button'>
            <Input
              type='text'
              name='banner[button][name]'
              id='button__input'
              label='Кнопка переходу:'
              placeholder='Перейти в магазин!'
              onChangeValue={(e) => {
                setTitleContent(e.target.value);
              }}
            />
            <Input
              type='text'
              name='banner[button][link]'
              id='link__input'
              label='Посилання кнопки:'
              placeholder='https://www.myshop.com/'
              onChangeValue={(e) => {
                setTitleContent(e.target.value);
              }}
            />
            <Input
              type='color'
              name='banner[button][bg_color]'
              id='button_bg_color'
              label='Вибрати колір:'
              onChangeValue={(e) => {
                setTitleContent(e.target.value);
              }}
            />
          </Accordion>
          <Accordion title='Таймер' symbol='timer'>
            <Input
              type='text'
              name='banner[timeout]'
              id='timeout__input'
              label='Таймер появи банера:'
              placeholder='Введіть, через скільки сек.'
              onChangeValue={(e) => {
                setTitleContent(e.target.value);
              }}
            />
          </Accordion>
          <Accordion title='Анімація' symbol='animation'>
            <AnimationBlock
              onChangeValue={(e) => {
                setTitleContent(e.target.value);
              }}
            />
          </Accordion>
          <Button
            className='submit__button'
            type='submit'
            description='Зберегти'
          />
        </form>
      </div>
    </div>
  );
}

export default Form;
