import { useSelector, useDispatch } from 'react-redux';
import { burgerChange } from '../../reducers/nav-slice';

import {
    NavLink
} from "react-router-dom";

import logo from '../../assets/logo.a0adaea7.svg';

import './nav.scss';
  

const Nav = () => {

    const dispatch = useDispatch();
    const {burger} = useSelector(state => state.nav);
    const {lang} = useSelector(state => state.lang);
    const status = useSelector(state => state.data[`${lang}StatusData`]);
    const dataNav = useSelector(state => state.data[`${lang}Nav`]);

    const onChangeNav = (e) => {
        e.target.classList.add('active');
        if (document.documentElement.clientWidth < 769) {
            dispatch(burgerChange());
        }
    };

    const onChangeBurger = () => {
        dispatch(burgerChange());
    }

    const renderContent = () => {
        return (
            <>
                <li><NavLink className="link" onClick={onChangeNav} to={'/'}>{dataNav.main}</NavLink></li>
                <li><NavLink className="link" onClick={onChangeNav} to={'/about'}>{dataNav.about}</NavLink></li>
                <li><NavLink className="link" onClick={onChangeNav} to={'/teams'}>{dataNav.teams}</NavLink></li>
                <li><NavLink className="link" onClick={onChangeNav} to={'/blog'}>{dataNav.blog}</NavLink></li>
                <li><NavLink className="link" onClick={onChangeNav} to={'/partners'}>{dataNav.partners}</NavLink></li>
            </>
        )
    }

    return (
        <nav className='side-nav'>
            <div onClick={onChangeBurger} className={`burger ${burger ? 'burger_active' : ''}`}></div>
            <ul className={`${burger ? 'active' : ''}`}>
                {
                    status === 'idle'
                    ?
                    renderContent()
                    :
                    null
                }
            </ul>
            <NavLink className="link__spirit" to={'/'}><img className={`${burger ? 'active' : ''}`} src={logo} alt="logo"/></NavLink>
        </nav>
    )
};

export default Nav;