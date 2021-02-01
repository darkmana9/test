import React from 'react'
import style from './NewPostInput.module.css'
import {addPostActionCreator, updateTextAreaActionCreator} from "../../../redux/state";

const NewPostInput = (props) => {

    let newPostElement = React.createRef();

    let addNewPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let textAreaChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateTextAreaActionCreator(text))
    }
    return (
        <div className = {style.wrapper}>
            <textarea value = {props.newPostText} onChange = {textAreaChange} ref = {newPostElement}
                      className = {style.newPostTextArea}/>
            <button onClick = {addNewPost} className = {style.newPostButton}> new post</button>
        </div>
    )
}

export default NewPostInput