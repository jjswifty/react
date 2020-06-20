import React from 'react';
import s from './Navbar.module.css';
import Sidebar from './../Sidebar/Sidebar'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
  return (
  <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/news" activeClassName={s.active}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
    </div>
      <Sidebar friends={props.friends} />
  </nav>

  );
}

export default Navbar;