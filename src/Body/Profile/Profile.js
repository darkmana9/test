import React from 'react';
import c from './Profile.module.css'

import NewPostInputContainer from "./Posts/NewPostInput/NewPostInputContainer";
import {PostsContainer} from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className = {c.wrapper}>
            <ProfileInfo profile = {props.profile} status={props.status}  updateStatus={props.updateStatus}/>
            <NewPostInputContainer/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;
