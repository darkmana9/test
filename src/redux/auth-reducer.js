import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,

            };
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => {
    return ({
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth}
    })
}

export const getUserData = () => {
    return (dispatch) => {
        return authAPI.me().then(response => {

            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setUserData(id, email, login, true))
            }

        })
    }
}
export const login = (email, password, rememberMe) => {

    return (dispatch) => {

        authAPI.login(email, password, rememberMe).then(response => {

            if (response.data.resultCode === 0) {
                dispatch(getUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }

        })
    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {

            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }

        })
    }
}