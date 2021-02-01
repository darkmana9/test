import React from "react";
import style from "./Body.module.css"
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import {Messages} from "./Messages/Messages";

export const Body = (props) => {
    return (
        <div className = {style.wrapper}>
             <Route render={()=><Profile dispatch = {props.dispatch}  profilePage = {props.state.profilePage}/>} path="/profile"/>
            <Route render={()=><Messages dispatch={props.dispatch} state = {props.state}/> }  path="/messages" />
        </div>
    )
}