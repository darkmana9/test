import React from 'react';
import c from './App.module.css';
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";

const App = () => {
    return (
        <div className = {c.wrapper}>

            <Header/>
        <NavBar/>
        <Profile/>

</div>
    );
}

export default App;
