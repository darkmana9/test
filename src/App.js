import React from 'react';

import c from './App.module.css';
import Profile from "./Profile/Profile";
import {Messages} from "./Messages/Messages";

import Header from "./Header/Header";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
<BrowserRouter>
        <div className = {c.wrapper}>
            <Header/>
            <Route render={()=><Profile dispatch = {props.dispatch} profilePage = {props.state.profilePage}/>} path="/messages"/>
            <Route render={<Messages messages = {props.state.messages}/>} render path="/profile" />
<Profile dispatch = {props.dispatch} profilePage = {props.state.profilePage}/>
<Messages messages = {props.state.messages}/>
        </div>
</BrowserRouter>
    );
}

export default App;
