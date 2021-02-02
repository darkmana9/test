import React from "react";
import NewPostInput from "./NewPostInput";
import {addPostActionCreator, updateTextAreaActionCreator} from "../../../../redux/profile-reducer";

const NewPostInputContainer = (props) => {

    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onTextAreaChange = (text) => {
        props.store.dispatch(updateTextAreaActionCreator(text))
    }

    return (
        <NewPostInput props={props.store.newPostText} addPost={onAddPost} updateTextArea={onTextAreaChange}/>
    )
}

export default NewPostInputContainer