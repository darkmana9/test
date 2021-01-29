import React from "react";
import style from "./Messages.module.css"
import {Message} from "./Message/Message";
import {Senders} from "./Senders/Senders";
import {NewMessageInput} from "./NewMessageInput/NewMessageInput";

export const Messages = (props) => {

    let preparedMessage = props.messages.messageData.map(message => {

return <Message messageText = {message.messageText} messageAuthor = {message.messageAuthor} messageDate={message.messageDate}/>
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
             <NewMessageInput/>
            </div>
        </div>
    )
}