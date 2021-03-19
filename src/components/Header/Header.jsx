import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {
    return (
      <header className={s.header}>
        <div >
            <img src="https://logodownload.org/wp-content/uploads/2014/04/nike-logo-2.png" />
        </div>
        <div className={s.loginBlock}>
            { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }            
        </div>
      </header>
    );
}

export default Header;