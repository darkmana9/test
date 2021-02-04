import React from "react";
import style from "./NewMessageInput.module.css"

export const NewMessageInput = (props) => {

    let messageText = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
       messageText.current.value = '';
    }

    let textAreaChange = () => {
        let text = messageText.current.value;
        props.textAreaChange(text);

    }

    return (
        <div className = {style.wrapper}>
            <textarea onChange = {textAreaChange} value = {props.newMessageText} className = {style.textArea}
                      ref = {messageText}>
            </textarea>
            <button onClick = {sendMessage}>Send message</button>
        </div>
    )
}