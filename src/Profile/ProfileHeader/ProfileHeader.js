import React from 'react'
import c from './ProfileHeader.module.css'
import MainImage from "./MainImage/MainImage"
import Avatar from "./Avatar/Avatar"
import Tabs from "./Tabs/Tabs"

const ProfileHeader = () => {
    return (
        <div className={c.profileHeader__wrapper}>
            <MainImage/>
            <Tabs/>
            <Avatar/>
        </div>
    );
}

export default ProfileHeader;