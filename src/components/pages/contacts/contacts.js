import { Formik, Field, Form} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { createAlert, updateAlert } from '../../../reducers/alert-slice';

import telegram from '../../../assets/telegram-dark.46fa3605.svg';
import instagram from '../../../assets/instagram-dark.3b59dc0b.svg';
import twitter from '../../../assets/twitter-dark.c0926f2e.svg';
import vk from '../../../assets/vk-dark.508b599d.svg';
import facebook from '../../../assets/facebook-dark.048e8dce.svg';

import '../../../variables/white-btn.scss';
import './contacts.scss';

const ContactsPage = () => {

    const dispatch = useDispatch();

    const {lang} = useSelector(state => state.lang);
    const status = useSelector(state => state.data[`${lang}StatusData`]);
    const dataContact = useSelector(state => state.data[`${lang}Contact`]);
    const dataAlert = useSelector(state => state.data[`${lang}Alert`]);

    const validSubmit = () => {
        let errors = [];
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        
        const searcher = (nameClass) => {
            return document.querySelector(nameClass);
        };

        if (searcher('.i-1').value === "" || searcher('.i-2').value === "") {
            errors.push(dataAlert.name);
        }
        if (reg.test(searcher('.i-3').value) === false) {
            errors.push(dataAlert.email);
        }
        if (searcher('.i-4').value.length < 4) {
            errors.push(dataAlert.theme);
        }   
        if (searcher('.i-5').value.length < 10) {
            errors.push(dataAlert.message);
        }   
        return errors;
    }

    const form = () => (
        <Formik
            initialValues={{ name: '', lastname: '', email: '', topic: '', message: '' }}
            onSubmit={(values) => {
                let errors = validSubmit();
                const btn = document.querySelector('.contacts__btn');
                function updateBtn(foo) {
                    if (foo === "add") {
                        btn.setAttribute("disabled", "disabled");
                    } else {
                        btn.removeAttribute("disabled");
                    }
                    btn.classList.toggle('contacts__btn_disabled');
                }
                if (errors.length > 0) {
                    dispatch(updateAlert());
                    dispatch(createAlert(errors));
                    updateBtn("add");
                    setTimeout(() => {
                        dispatch(updateAlert())
                        updateBtn();
                    }, 3000);
                } else {
                    document.querySelector('.contacts__form').reset();
                    dispatch(createAlert('success'));
                    updateBtn("add");
                    setTimeout(() => {
                        dispatch(updateAlert())
                        updateBtn();
                    }, 3000);
                }
            }}
        >
                <Form className='contacts__form'>
                    <Field name='name' className='contacts__input i-1' type="text"  placeholder={dataContact.name}/>
                    <Field name='lastname' className='contacts__input i-2' type="text"  placeholder={dataContact.lastname}/>
                    <Field name='email' className='contacts__input i-3' type="email"  placeholder='*E-Mail'/>
                    <Field name='topic' className='contacts__input i-4' type="text"  placeholder={dataContact.theme}/>
                    <Field as="textarea" className='contacts__input i-5' placeholder={dataContact.message} name="message"></Field>
                    <button className='contacts__btn white-btn_active i-6' type='submit'>{dataContact.btn}</button>
                </Form>      
        </Formik>
    )

    const renderContent = () => {
        return (
            <>
                <div className="contacts__title">{dataContact.title}</div>
                <div className="contacts__subtitle">{dataContact.subtitle}</div>
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
                        <div className="contacts__mail-name">{dataContact.media}</div>
                        <a href='' className="contacts__mail-link">km@teamspirit.gg</a>
                    </div>
                    <div className="contacts__mail-wrapper">
                        <div className="contacts__mail-name">{dataContact.business}</div>
                        <a href='#' className="contacts__mail-link">sales@teamspirit.gg</a>
                    </div>
                </div>
                <div className="contacts__title">{dataContact.formtitle}</div>
                {form()}
            </>
        )
    };

 
    return (
        <div className="contacts">
            <div className="contacts__container">
                {
                    status === "idle"
                    ?
                    renderContent()
                    :
                    null
                }
            </div>
        </div>
    )
};

export default ContactsPage;