import React from 'react';
import c from './Profile.module.css'
import Comments from "./Comments/Comments";

const Profile = () => {
    return (
            <div className={c.content}>
                <div className = {c.content__image}>

                </div>
            <Comments/>
            </div>
    );
}

export default Profile;
