import './Form.css';
import Accordion from '../Accordion/Accordion';

function Form() {
  return (
    <div className="form">
      <form className="banner_setting_form" id="banner_setting_form"></form>
      <div className="form__container">
        <div className="components_1 accordion_1">
          <Accordion>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              dolorem magni autem quas commodi dignissimos harum voluptas
              laborum neque, eum soluta doloribus impedit necessitatibus ducimus
              unde sint. Sunt, sed vitae.
            </p>
          </Accordion>
          <Accordion>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              dolorem magni autem quas commodi dignissimos harum voluptas
              laborum neque, eum soluta doloribus impedit necessitatibus ducimus
              unde sint. Sunt, sed vitae.
            </p>
          </Accordion>
          <Accordion />
          <div className="submit__block">
            <button type="submit" className="submit__button">
              <p>Зберегти</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
