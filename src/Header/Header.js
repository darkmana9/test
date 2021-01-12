import React from 'react';
import logo from '../logo.svg';
import c from './Header.module.css'

const Header = () => {
    return (
        <div className={c.wrapper}>
        <header className = {c.header}>
            <img src={logo} className={c.header__logo}/>
     </header>
</div>
    );
}

export default Header;
