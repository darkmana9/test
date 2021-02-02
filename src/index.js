import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/redux-store";

let rerenderTree = (props) => {
    debugger
    ReactDOM.render(
        <App state = {props} dispatch = {store.dispatch.bind(store)} store={store}/>,
        document.getElementById('root')
    );
}
rerenderTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderTree(state);
});


