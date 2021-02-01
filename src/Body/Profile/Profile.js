import React from 'react';
import c from './Profile.module.css'

import Posts from "./Posts/Posts";
import NewPostInput from "./NewPostInput/NewPostInput";

const Profile = (props) => {

    return (
            <div className={c.wrapper}>
            <NewPostInput dispatch={props.dispatch} newPostText={props.profilePage.newPostText}/>
            <Posts postData={props.profilePage.postData} />
            </div>
    );
}

export default Profile;
