import React from 'react';
import c from './App.module.css';
import Header from "./Header";
import NavBar from "./NavBar";
import Profile from "./Profile";

const App = () => {
    return (
        <div className = {c.wrapper}>

            <Header/>
        <NavBar/>

</div>
    );
}

export default App;
