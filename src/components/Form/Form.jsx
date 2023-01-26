import './Form.css';
import Accordion from './Accordion/Accordion';
import Input from './Input/Input';
import Select from './Select/Select';
import Textarea from './Textarea/Textarea';
import AlignText from './AlignText/AlignText';
import Button from './Button/Button';

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
        <Accordion />
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
