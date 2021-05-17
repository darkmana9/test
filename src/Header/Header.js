import React from 'react'
import c from './Header.module.css'
import MainImage from "./MainImage/MainImage"
import Avatar from "./Avatar/Avatar"
import TabsContainer from "./Tabs/TabsContainer";

const Header = () => {
    return (
        <div className = {c.header__wrapper}>
            <MainImage/>
            <TabsContainer/>
            <Avatar/>
        </div>
    );
}

export default Header;