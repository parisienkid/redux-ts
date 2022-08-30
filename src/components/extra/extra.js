import './extra.scss';
import '../../variables/white-btn.scss';

import { useState, useEffect } from 'react';

import shopLink from '../../assets/shop-link.80e06c6f.svg';
import langArrow from '../../assets/lang.b470618b.svg';
import { useSelector, useDispatch  } from 'react-redux';
import { langChange } from '../../reducers/lang-slice';

const Extra = () => {

    const [piano, setPiano] = useState(false);
    let {lang} = useSelector(state => state.lang);
    const dispatch = useDispatch();
    const {burger} = useSelector(state => state.nav);


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
            <a href="" className={`white-btn_active extra__shop ${burger ? 'burger' : ''}`}>магазин <img src={shopLink} alt="shop link" /></a>
        </div>
    )
};

export default Extra;