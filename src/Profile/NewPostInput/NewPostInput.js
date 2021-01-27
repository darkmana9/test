import React from 'react'
import style from './NewPostInput.module.css'


const NewPostInput = (props) => {

    let newPostElement = React.createRef();

    let addNewPost = () => {

        props.dispatch({type: "ADD-NEW-POST", message: ""})


    }

    let textAreaChange = () => {
        let text = newPostElement.current.value;

        props.dispatch({type: "UPDATE-TEXT-AREA", newText: text})

    }
    return (
        <div className={style.wrapper}>
            <textarea value={props.newPostText} onChange={textAreaChange} ref={newPostElement}
                      className={style.newPostTextArea}/>
            <button onClick={addNewPost} className={style.newPostButton}> new post</button>
        </div>
    )
}

export default NewPostInput