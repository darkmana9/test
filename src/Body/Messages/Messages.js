import React from "react";
import style from "./Messages.module.css"
import {Message} from "./Message/Message";
import {Senders} from "./Senders/Senders";
import {NewMessageInput} from "./NewMessageInput/NewMessageInput";
import NewMessageInputContainer from "./NewMessageInput/NewMessageInputContainer";

export const Messages = (props) => {

    let preparedMessage = props.state.messages.messageData.map(message => {
            return <Message messageText = {message.messageText}/>
        }
    )

    return (
        <div className = {style.wrapper}>
     <div className = {style.message__wrapper}>
         {preparedMessage}
     </div>
        <div className = {style.senders__wrapper}>
            <Senders/>
        </div>
            <div className = {style.newMessageInput__wrapper}>
                <NewMessageInputContainer store = {props.store}/>

            </div>
        </div>
    )
}