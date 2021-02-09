import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/message-reducer";
import {NewMessageInput} from "./NewMessageInput";
import {connect} from "react-redux";

/*const NewMessageInputContainer = (props) => {
    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let textAreaChange = (text) => {
        props.store.dispatch(updateNewMessageTextCreator(text))
    }
    return (
        <NewMessageInput sendMessage={sendMessage} textAreaChange={textAreaChange}
                         newMessageText={props.store.newPostText}/>
    )

}*/

let mapStateToProps = (state) => {
    return {
        newMessageText: state.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        textAreaChange: (text) => {
            dispatch(updateNewMessageTextCreator(text))
        },
    }
}

const NewMessageInputContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessageInput);
export default NewMessageInputContainer