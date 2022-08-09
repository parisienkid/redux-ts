import { useSelector, useDispatch } from 'react-redux';
import './nav.scss';
import logo from '../../assets/logo.a0adaea7.svg';
import { navChange } from '../../reducers/nav-slice';
import { burgerChange } from '../../reducers/nav-slice';

import {
    NavLink
  } from "react-router-dom";
  

const Nav = () => {

    const {burger, clear} = useSelector(state => state.nav);
    const dispatch = useDispatch();

 
    const onChangeNav = (e) => {
        // dispatch(navChange(e.target.innerText.toLowerCase()));
        e.target.classList.add('active');
    };

    const onChangeBurger = () => {
        dispatch(burgerChange());
    }

    return (
        <nav className='side-nav'>
            <div onClick={onChangeBurger} className={`burger ${burger ? 'burger_active' : ''}`}></div>
            <ul className={`${burger ? 'active' : ''}`}>
                <li><NavLink className="link" onClick={onChangeNav} to={'/'}>главная</NavLink></li>
                <li><NavLink className="link" onClick={onChangeNav} to={'/about'}>о клубе</NavLink></li>
                <li><NavLink className="link" onClick={onChangeNav} to={'/teams'}>команда</NavLink></li>
                <li><NavLink className="link" onClick={onChangeNav} to={'/blog'}>блог</NavLink></li>
                <li><NavLink className="link" onClick={onChangeNav} to={'/partners'}>партнёры</NavLink></li>
            </ul>
            <NavLink className="link__spirit" to={'/'}><img className={`${burger ? 'active' : ''}`} src={logo} alt="logo"/></NavLink>
        </nav>
    )
};

export default Nav;