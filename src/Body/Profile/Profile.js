import React from 'react';
import c from './Profile.module.css'

import Posts from "./Posts/Posts";
import NewPostInputContainer from "./Posts/NewPostInput/NewPostInputContainer";

const Profile = (props) => {
    debugger
    return (
        <div className = {c.wrapper}>

            <NewPostInputContainer store={props.store}/>
            <Posts postData = {props.state.profilePage.postData}/>
            </div>
    );
}

export default Profile;
