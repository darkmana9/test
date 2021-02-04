import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/message-reducer";
import {NewMessageInput} from "./NewMessageInput";

 const NewMessageInputContainer = (props) => {
     let sendMessage = () => {
         props.store.dispatch(sendMessageCreator())
     }

     let textAreaChange = (text) => {
         props.store.dispatch(updateNewMessageTextCreator(text))
     }
    return (
        <NewMessageInput sendMessage={sendMessage} textAreaChange={textAreaChange} newMessageText={props.store.newPostText}/>
    )

}

export default NewMessageInputContainer