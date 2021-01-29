import React from "react";
import c from "./Tabs.module.css"

const Tabs = () => {
    return (
        <div className={c.tabs__wrapper}>
            <navLink to="/profile" className={c.tabLink}>profile
            </navLink>
            <navLink to="/messages" className={c.tabLink}>
                messages
            </navLink>
            <navLink to="#" className={c.tabLink}>
                Friends
            </navLink>
            <navLink to="#" className={c.tabLink}>
                Photos
            </navLink>
            <navLink to="#" className={c.tabLink}>
                Videos
            </navLink>
            <navLink to="#" className={c.tabLink}>
                ...
            </navLink>

        </div>
    );
}
export default Tabs;