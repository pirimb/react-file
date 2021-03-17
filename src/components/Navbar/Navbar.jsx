import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = (props) => {
  
  let imgElements = props.store.getState().navbar.map( i =><NavLink to='/dialogs'>
  <img className={s.ava} src={i.src} alt='foto'/>
  <p className={s.avaName}>{i.name}</p>
  </NavLink>)
  
    return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/profile">
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/users">
          Find Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/news">
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/music">
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/settings">
          Settings
        </NavLink>
      </div>

      <div className={s.friends}>
        <NavLink
          className={s.friendsLink}
          activeClassName={s.activeLink}
          to="/friends"
        >
          Friends
        </NavLink>
        <div className={s.friensdAva}>
          {imgElements}
        </div>
      </div>
    </nav>
    );
};

export default Navbar;