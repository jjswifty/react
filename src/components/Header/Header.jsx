import React from 'react'; 
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import dAvatar from './../../assets/images/defaultAvatar.jpg'


const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png" alt="Bry" />
            <div className = {s.userPhoto}>
                {props.isFetching 
                ? null 
                : props.userInfo.photos.small === null 
                ? <img src = {dAvatar} alt='avatar'/> 
                : <img src = {props.userInfo.photos.small} alt='avatar'/>} 
            </div>
            <div className={s.login}>
                {props.isAuth 
                ? props.login 
                : <NavLink to={'/login'}> Login </NavLink>}
            </div>
        </header>
    );
}

export default Header;