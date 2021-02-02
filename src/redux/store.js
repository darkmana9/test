import {profileReducer} from "./profile-reducer";
import {messageReducer} from "./message-reducer";


export let store = {
    _state: {
        profilePage: {
            postData: [],
            newPostText: "",
        },
        messages: {
            messageData: [],
            newMessageText: "",
        },
    },

    getState() {
        return this._state;
    },

    callSub() {

    },
    subscribe(observer) {
        this.callSub = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messages = messageReducer(this._state.messages, action)

        this.callSub(this._state)
    }

}









