import React from "react";
import style from "./NewMessageInput.module.css"
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/state";

export const NewMessageInput = (props) => {

    let messageText = React.createRef();

    let sendMessage = () => {
      props.dispatch(sendMessageCreator())
    }

    let textAreaChange = () => {
        let text = messageText.current.value;
        props.dispatch(updateNewMessageTextCreator(text))
    }

    return (
        <div className={style.wrapper}>
            <textarea onChange={textAreaChange} value={props.newMessageText} className={style.textArea} ref={messageText}>
            </textarea>
            <button onClick={sendMessage}>Send message</button>
        </div>
    )
}