import React from "react";
import {connect} from "react-redux";
import Posts from "./Posts";

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
export const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts)