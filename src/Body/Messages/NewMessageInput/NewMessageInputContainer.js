import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/message-reducer";
import {NewMessageInput} from "./NewMessageInput";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newMessageText: state.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageCreator(newMessageText))
        },
    }
}

const NewMessageInputContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessageInput);
export default NewMessageInputContainer