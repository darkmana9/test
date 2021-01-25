import React from 'react';

import c from './App.module.css';
import Profile from "./Profile/Profile";

const App = (props) => {
    return (
        <div className={c.wrapper}>
<Profile profilePage={props.state.profilePage} addPost={props.addPost}/>

        </div>
    );
}

export default App;
