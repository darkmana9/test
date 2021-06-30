import React from "react";
import NewPostInput from "./NewPostInput";
import {addPostActionCreator, updateTextAreaActionCreator} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";


/*const NewPostInputContainer = (props) => {

    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onTextAreaChange = (text) => {
        props.store.dispatch(updateTextAreaActionCreator(text))
    }
    return (
        <NewPostInput newPostText={props.store.newPostText} addPost={onAddPost} updateTextArea={onTextAreaChange}/>
    )
}*/

let mapStateToProps = (state) => {
    return {
        newPostText: state.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        },

    }
}

const NewPostInputContainer = connect(mapStateToProps, mapDispatchToProps)(NewPostInput);

export default NewPostInputContainer