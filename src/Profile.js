import React from 'react';
import c from './Profile.module.css'

const Profile = () => {
    return (
            <div className={c.content}>
                <img className = 'main-image'
                     src = 'https://i.pinimg.com/originals/7f/ea/17/7fea175e13ba4a4b29672d15b2497367.jpg' alt={2}/>
            </div>
    );
}

export default Profile;
