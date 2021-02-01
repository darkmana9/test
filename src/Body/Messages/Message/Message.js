import React from "react";
import style from "./Message.module.css"

export const Message = (props) => {



    return (
        <div className = {style.wrapper}>

            <div>{props.messageText}</div>



        </div>
    )
}