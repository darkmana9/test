import React from 'react'
import style from './NewPostInput.module.css'

const NewPostInput = (props) =>{

    let newPostElement =  React.createRef();

    let addNewPost = () =>{
        let text = newPostElement.current.value;
        props.addPost(text);

        newPostElement.current.value = null;

    }

    return(
        <div className={style.wrapper}>
            <textarea ref={newPostElement} className={style.newPostTextArea}></textarea>
            <button onClick={addNewPost} className={style.newPostButton}> new post</button>
        </div>
    )
}

export default NewPostInput