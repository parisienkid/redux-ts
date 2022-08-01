import './contacts.scss';
import telegram from '../../../assets/telegram-dark.46fa3605.svg';
import instagram from '../../../assets/instagram-dark.3b59dc0b.svg';
import twitter from '../../../assets/twitter-dark.c0926f2e.svg';
import vk from '../../../assets/vk-dark.508b599d.svg';
import facebook from '../../../assets/facebook-dark.048e8dce.svg';
import '../../../variables/white-btn.scss';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

const ContactsPage = () => {

    return (
        <div className="contacts">
            <div className="contacts__container">
                <div className="contacts__title">КОНТАКТЫ</div>
                <div className="contacts__subtitle">Следите за обновлениями и общайтесь с комьюнити Team Spirit в наших социальных сетях</div>
                <div className="contacts__links">
                   <div className="contacts__links-wrapper">
                    <a href="#" className="contacts__link">
                            <img src={telegram} alt="telegram" />                    
                        </a>
                        <a href="#" className="contacts__link">
                            <img src={instagram} alt="instagram" />
                        </a>
                        <a href="#" className="contacts__link">
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a href="#" className="contacts__link">
                            <img src={vk} alt="vk" />
                        </a>
                        <a href="#" className="contacts__link">
                            <img src={facebook} alt="facebook" />                    
                        </a>
                   </div>
                </div>
                <div className="contacts__mail-links">
                    <div className="contacts__mail-wrapper">
                        <div className="contacts__mail-name">БРЕНД/МЕДИА</div>
                        <a href='' className="contacts__mail-link">km@teamspirit.gg</a>
                    </div>
                    <div className="contacts__mail-wrapper">
                        <div className="contacts__mail-name">БИЗНЕС</div>
                        <a href='#' className="contacts__mail-link">sales@teamspirit.gg</a>
                    </div>
                </div>
                <div className="contacts__title">форма связи</div>
                <Formik
                    initialValues={{ name: '', secondmail: '', mail: '', topic: '', message: '' }}
                    validate={values => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = 'Required';
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                      ) {
                        errors.email = 'Invalid email address';
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
                    }}
                >
                    <Form className='contacts__form'>
                        <input className='contacts__input i-1' type="text" required placeholder='*Имя'/>
                        <input className='contacts__input i-2' type="text" required placeholder='*Фамилия'/>
                        <input className='contacts__input i-3' type="text" required placeholder='*E-Mail'/>
                        <input className='contacts__input i-4' type="text" required placeholder='*Тема обращения'/>
                        <textarea className='contacts__input i-5' placeholder='Сообщение' name="message"></textarea>
                        <button className='contacts__btn white-btn_active i-6' type='submit'>Отправить</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
};

export default ContactsPage;