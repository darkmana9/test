import React from 'react';

import c from './App.module.css';
import Profile from "./Profile/Profile";

const App = (props) => {
    return (
        <div className={c.wrapper}>
<Profile dispatch={props.dispatch} profilePage={props.state.profilePage} />

        </div>
    );
}

export default App;
