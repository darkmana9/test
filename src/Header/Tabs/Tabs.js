import React from "react";
import c from "./Tabs.module.css"
import {NavLink} from "react-router-dom";

const Tabs = (props) => {
    return (
        <div className={c.tabs__wrapper}>
            <NavLink to="/profile" className={c.tabLink}>Profile
            </NavLink>
            <NavLink to="/messages" className={c.tabLink}>
                Messages
            </NavLink>
            <NavLink to="/users/" className={c.tabLink}>
                Users
            </NavLink>
            <div >
                {props.isAuth ?
                    <div>{props.login} - <button onClick={props.logout}>Log out</button>  </div>  :
                    <NavLink to="/login" className={c.tabLink}>
                Login
            </NavLink>}

            </div>
            <NavLink to="#" className={c.tabLink}>
                Videos
            </NavLink>
            <NavLink to="#" className={c.tabLink}>
                ...
            </NavLink>

        </div>
    );
}
export default Tabs;