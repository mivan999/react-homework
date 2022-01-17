import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Routes';
import s from './Header.module.css';

function Header() {
    return (
        <div className={s.block}>

        <div className={s.navLink}>
            <div className={s.nav}>
         <div>   <NavLink to={PATH.PRE_JUNIOR} className={s.link} >PreJunior</NavLink></div>
         <div>   <NavLink to={PATH.JUNIOR} className={s.link} >Junior</NavLink></div>
         <div>   <NavLink to={PATH.JUNIOR_PLUS} className={s.link} >JuniorPlus</NavLink></div>
            </div>
            </div>
           </div>

    )
}

export default Header
