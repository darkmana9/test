import {profileAPI, usersAPI} from "../api/api";

const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_TEXT_AREA = "UPDATE-TEXT-AREA";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET_STATUS"

let initialState = {
    postData: [],
    newPostText: "",
    userProfile: null,
    status: '',

}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_POST: {

            return {
                ...state,
                postData: [...state.postData, {authorName: '123', postText: state.newPostText}],
                newPostText: "",
            }

        }
        case UPDATE_TEXT_AREA: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default: {
            return state;
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_NEW_POST
    }
}
export const updateTextAreaActionCreator = (text) => {
    return {
        type: UPDATE_TEXT_AREA,
        newText: text,
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile,
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status,
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(
            response => {
                dispatch(setStatus(response.data))
            }
        )
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(
            response => {

                dispatch(setStatus(status))
            })
    }
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(
            response => {

                dispatch(setUserProfile(response.data))
            })
    }
}