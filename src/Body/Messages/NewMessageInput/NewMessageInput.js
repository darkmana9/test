import React from "react";
import style from "./NewMessageInput.module.css"
import {Field, reduxForm} from 'redux-form'
import {TextArea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

export const NewMessageInput = (props) => {

    const addNewMessage = (values) => {
        props.sendMessage(values.messageInput)
    }
    return (
        <div className = {style.wrapper}>
            <AddMessageFormRedux onSubmit = {addNewMessage}/>
        </div>
    )
}
const maxLength50 = maxLengthCreator(50)
const AddMesssageForm = (props) => {

    return (
        <form onSubmit = {props.handleSubmit}>
            <Field validate = {[required, maxLength50]} name = {'messageInput'} placeholder = {'Enter your message'}
                   component = {TextArea}/>

    <button>Send message</button>
            </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm',
})(AddMesssageForm)