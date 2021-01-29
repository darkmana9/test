import React from 'react'
import c from './Header.module.css'
import MainImage from "./MainImage/MainImage"
import Avatar from "./Avatar/Avatar"
import Tabs from "./Tabs/Tabs"

const Header = () => {
    return (
        <div className={c.header__wrapper}>
            <MainImage/>
            <Tabs/>
            <Avatar/>
        </div>
    );
}

export default Header;