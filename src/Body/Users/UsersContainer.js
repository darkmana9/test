import React from "react";
import {connect} from "react-redux";

import {followUserActionCreator, setUsersActionCreator, unFollowUserActionCreator} from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
     }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followUserActionCreator(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowUserActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)