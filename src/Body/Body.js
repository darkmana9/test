import React from "react";
import style from "./Body.module.css"
import {Route} from "react-router-dom";
import {MessagesContainer} from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import {Login} from "../Login/Login";

export const Body = (props) => {

    return (
        <div className = {style.wrapper}>
            <Route render = {() => <ProfileContainer/>} path = "/profile/:userId?"/>
            <Route render = {() => <MessagesContainer/>} path = "/messages"/>
            <Route render = {() => <UsersContainer/>} path = "/users"/>
            <Route render = {() => <Login/>} path = "/login"/>
        </div>
    )
}