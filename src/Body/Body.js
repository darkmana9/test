import React from "react";
import style from "./Body.module.css"
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import {MessagesContainer} from "./Messages/MessagesContainer";
import {Users} from "./Users/Users";

export const Body = (props) => {

    return (
        <div className = {style.wrapper}>
            <Route render = {() => <Profile/>} path = "/profile"/>
            <Route render = {() => <MessagesContainer/>} path = "/messages"/>
            <Route render = {() => <Users/>} path = "/users"/>
        </div>
    )
}