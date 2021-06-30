import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {messageReducer} from "./message-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer"
import {authReducer} from "./auth-reducer";
import devToolsEnhancer from 'remote-redux-devtools';
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messages: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(reducers, compose(applyMiddleware(thunkMiddleware),
    devToolsEnhancer({
        hostname: "localhost",
        port: 8000,
        realtime: true
    }))
);

export default store

