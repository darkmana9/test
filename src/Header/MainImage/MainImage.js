import React from "react";
import c from "./MainImage.module.css"

const MainImage = () => {
    return (
        <div className={c.mainImage__wrapper}>
<img className={c.mainImage} src='https://html.crumina.net/html-olympus/img/top-header1.jpg'/>
        </div>
    );
}
export default MainImage;