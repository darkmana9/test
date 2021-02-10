import React from 'react';
import c from './App.module.css';
import Header from "./Header/Header";
import {BrowserRouter} from "react-router-dom";
import {Body} from "./Body/Body";

const App = (props) => {

    return (
        <BrowserRouter>
        <div className = {c.wrapper}>
            <Header/>
        <Body dispatch = {props.dispatch} state = {props.state} store={props.store}/>

        </div>
</BrowserRouter>
    );
}

export default App;
