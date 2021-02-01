import React from 'react';

import c from './App.module.css';


import Header from "./Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import {Body} from "./Body/Body";

const App = (props) => {
    return (
<BrowserRouter>
        <div className = {c.wrapper}>
            <Header/>
        <Body dispatch={props.dispatch} state={props.state} />
{/*<Profile dispatch = {props.dispatch} profilePage = {props.state.profilePage}/>
<Messages messages = {props.state.messages}/>*/}
        </div>
</BrowserRouter>
    );
}

export default App;
