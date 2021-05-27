import React from "react";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {Messages} from "./Messages";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        messageData: state.messages.messageData,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect)(Messages)
