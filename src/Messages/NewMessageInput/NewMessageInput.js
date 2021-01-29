import React from "react";
import style from "./NewMessageInput.module.css"

export const NewMessageInput = () => {
    return (
        <div className={style.wrapper}>
            <textarea className={style.textArea}>

            </textarea>
        </div>
    )
}