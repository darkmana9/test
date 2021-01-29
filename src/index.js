import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./redux/state";

let rerenderTree = (props) => {

    ReactDOM.render(
        <App state = {props} dispatch = {store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
rerenderTree(store.getState());
store.subscribe(rerenderTree);


