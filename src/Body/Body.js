import React from "react";
import style from "./Body.module.css"
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import {Messages} from "./Messages/Messages";
import {MessagesContainer} from "./Messages/MessagesContainer";

export const Body = (props) => {
    debugger
    return (
        <div className={style.wrapper}>
            <Route render={() => <Profile/>} path="/profile"/>
            <Route render={() => <MessagesContainer/>} path="/messages"/>
        </div>
    )
}