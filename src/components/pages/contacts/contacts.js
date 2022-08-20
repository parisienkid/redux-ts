import './contacts.scss';
import telegram from '../../../assets/telegram-dark.46fa3605.svg';
import instagram from '../../../assets/instagram-dark.3b59dc0b.svg';
import twitter from '../../../assets/twitter-dark.c0926f2e.svg';
import vk from '../../../assets/vk-dark.508b599d.svg';
import facebook from '../../../assets/facebook-dark.048e8dce.svg';
import '../../../variables/white-btn.scss';
import { Formik, Field, Form, ErrorMessage, useField, FormikContext } from 'formik';
import * as Yup from 'yup';

const ContactsPage = () => {


    const submitAlert = (props) => {
        const errors = props;
        console.log(errors);
    }
 
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
                    initialValues={{ name: '', lastname: '', email: '', topic: '', message: '' }}
                    validationSchema = {Yup.object({
                        name: Yup.string()
                                .required('Имя и фамилия должны быть заполнены'),
                        lastname: Yup.string()
                                .required('Имя и фамилия должны быть заполнены'),
                        email: Yup.string()
                                .email()
                                .required('Неправильный email адрес!'),
                        topic: Yup.string()
                            .min(2, 'Минимум 2 символа для заполнения')
                            .required('Длина темы сообщения должна быть больше 3-х символов'),
                        message: Yup.string()
                                    .min(10, 'Опишите ваше обращение более подробно (от 10 символов)')
                                    .required('Опишите ваше обращение более подробно (от 10 символов)')  
                    })}
                    onSubmit={(values) => {
                        setTimeout(() => {
                          alert(JSON.stringify(values, null, 2));
                        }, 400);
                    }}
                >
                    {({errors}) => (
                        <Form className='contacts__form'>
                            <Field name='name' className='contacts__input i-1' type="text"  placeholder='*Имя'/>
                            <Field name='lastname' className='contacts__input i-2' type="text"  placeholder='*Фамилия'/>
                            <Field name='email' className='contacts__input i-3' type="email"  placeholder='*E-Mail'/>
                            <Field name='topic' className='contacts__input i-4' type="text"  placeholder='*Тема обращения'/>
                            <Field as="textarea" className='contacts__input i-5' placeholder='Сообщение' name="message"></Field>
                            <button className='contacts__btn white-btn_active i-6' type='submit'>Отправить</button>
                        </Form>
                        )}
                </Formik>
            </div>
        </div>
    )
};

export default ContactsPage;