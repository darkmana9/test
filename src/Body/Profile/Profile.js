import React from 'react';
import c from './Profile.module.css'

import NewPostInputContainer from "./Posts/NewPostInput/NewPostInputContainer";
import {PostsContainer} from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Redirect} from "react-router-dom";

const Profile = (props) => {
    if(!props.isAuth){
        return <Redirect to={'/login'}/>
    }
    return (
        <div className={c.wrapper}>
            <ProfileInfo profile={props.profile}/>
            <NewPostInputContainer/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;
