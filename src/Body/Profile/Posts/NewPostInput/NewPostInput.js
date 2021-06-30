import React from 'react'
import style from './NewPostInput.module.css'
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {TextArea} from "../../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const NewPostInput = (props) => {

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className = {style.wrapper}>
            <NewPostInputFormRedux onSubmit = {addNewPost}/>
           </div>
    )
}

const NewPostInputForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
        <Field validate = {[required, maxLength10]} name = {'newPostText'} placeholder = {'Enter new post'}
               component = {TextArea}
               className = {style.newPostTextArea}/>
    <button className = {style.newPostButton}> new post</button>
</form>
    )
}
const NewPostInputFormRedux = reduxForm({
    form: 'NewPostInputFormRedux'
})(NewPostInputForm)
export default NewPostInput