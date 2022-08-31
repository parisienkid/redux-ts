import { useState, useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { langChange } from '../../reducers/lang-slice';

import shopLink from '../../assets/shop-link.80e06c6f.svg';
import langArrow from '../../assets/lang.b470618b.svg';

import './extra.scss';
import '../../variables/white-btn.scss';

const Extra = () => {

    const dispatch = useDispatch();

    const [piano, setPiano] = useState(false);
    let {lang} = useSelector(state => state.lang);
    const {burger} = useSelector(state => state.nav);
    const status = useSelector(state => state.data[`${lang}StatusData`]);
    const extraData = useSelector(state => state.data[`${lang}Extra`]);

    const allLang = [
        'ru',
        'en',
    ];

    useEffect(() => {
        const storageLang = localStorage.getItem('lang');
        if (storageLang !== undefined && storageLang !== null) {
            dispatch(langChange(storageLang));
        }
    }, []);

    const onChangePiano = (e) => {
        setPiano(!piano)
    };

    const onChangeLang = (selectedLang) => {
        if (lang !== selectedLang) {
            dispatch(langChange(selectedLang))
            localStorage.setItem('lang', `${selectedLang}`);
        } 
    }

    return (
        <div className="extra">
            <div onClick={onChangePiano} className={`extra__lang ${piano ? 'extra__lang_active' : ''} ${burger ? 'burger' : ''}`}>
                {allLang.map((l, i) => {
                    return (
                        <div onClick={() => onChangeLang(l)} className={`white-btn extra__option ${l === lang ? 'extra__option_active' : ''}`} key={i}>{l}</div>
                    )
                })}
                <img src={langArrow} className={`${piano ? 'active' : ''}`} alt="arrow"/>
            </div>
            {
                status === "idle"
                ?
                <a href="" className={`white-btn_active extra__shop ${burger ? 'burger' : ''}`}>{extraData.shop}<img src={shopLink} alt="shop link" /></a>
                :
                null
            }
        </div>
    )
};

export default Extra;