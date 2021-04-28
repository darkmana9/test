import React from "react";
import style from "./Body.module.css"
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import {MessagesContainer} from "./Messages/MessagesContainer";
import {UsersContainer} from "./Users/UsersContainer";

export const Body = (props) => {

    return (
        <div className = {style.wrapper}>
            <Route render = {() => <Profile/>} path = "/profile"/>
            <Route render = {() => <MessagesContainer/>} path = "/messages"/>
            <Route render = {() => <UsersContainer/>} path = "/users"/>
        </div>
    )
}