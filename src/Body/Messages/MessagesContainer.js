import React from "react";
import {connect} from "react-redux";
import {Messages} from "./Messages";

let mapStateToProps = (state) => {
    return {
        messageData: state.messages.messageData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}
export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)