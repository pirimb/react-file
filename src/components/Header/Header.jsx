import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import userPhoto from '../../assets/images/user.jpg'


const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logoBlock}>
                <NavLink  className={s.logo} to='/profile'><h2>Demo</h2></NavLink>
                {/* <img src="https://logodownload.org/wp-content/uploads/2014/04/nike-logo-2.png" /> */}
            </div>
            <div className={s.loginBlock}>
                { props.isAuth 
                    ? <div className={s.loginPhotoBlock}>
                        {props.login}
                        {/* {props.profile.photos.large || <img src={userPhoto} alt='photo' />} */}
                        <button onClick={props.logout} >Log out</button>
                    </div> 
                    : <div className={s.loginPhotoBlock}>
                        {/* <NavLink to='/profile'><img className={s.headerUserPhoto} src={userPhoto} alt='photo'/></NavLink> */}
                        <NavLink to={'/login'}>Login</NavLink>
                    </div> } 
            </div>
        </header>
    );
}

export default Header;