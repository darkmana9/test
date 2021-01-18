import React from 'react';
import c from './Profile.module.css'
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
            <div className={c.wrapper}>
            <ProfileHeader/>
            <Posts />
            </div>
    );
}

export default Profile;
