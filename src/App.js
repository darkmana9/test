import React from 'react';
import c from './App.module.css';
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";
import ProfileHeader from "./Profile/ProfileHeader/ProfileHeader";

const App = () => {
    return (
        <div className = {c.wrapper}>

        <ProfileHeader/>

</div>
    );
}

export default App;
