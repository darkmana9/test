import React from "react";
import c from "./Tabs.module.css"

const Tabs = () => {
    return (
        <div className={c.tabs__wrapper}>
            <a href="#" className={c.tabLink}>Timeline
            </a>
            <a href="#" className={c.tabLink}>
                About
            </a>
            <a href="#" className={c.tabLink}>
                Friends
            </a>
            <a href="#" className={c.tabLink}>
                Photos
            </a>
            <a href="#" className={c.tabLink}>
                Videos
            </a>
            <a href="#" className={c.tabLink}>
                ...
            </a>

        </div>
    );
}
export default Tabs;