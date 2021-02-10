import React from "react";
import c from "./Tabs.module.css"
import {NavLink} from "react-router-dom";

const Tabs = () => {
    return (
        <div className={c.tabs__wrapper}>
            <NavLink to="/profile" className={c.tabLink}>Profile
            </NavLink>
            <NavLink to="/messages" className={c.tabLink}>
                Messages
            </NavLink>
            <NavLink to="/users" className={c.tabLink}>
                Users
            </NavLink>
            <NavLink to="#" className={c.tabLink}>
                Photos
            </NavLink>
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