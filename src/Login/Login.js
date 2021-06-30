import React from "react";
import {Field, reduxForm} from 'redux-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../common/FormsControls/FormControl.module.css"

const LoginForm = (props) => {
    return (
        <div>

            <form onSubmit = {props.handleSubmit}>
                <div>
                    <Field validate = {[required]} name = {'email'} placeholder = {'Login'} component = {Input}/>
                </div>
                  <div>
                    <Field validate = {[required]} name = {'password'} type = {'password'} placeholder = {'Password'}
                           component = {Input}/>
                </div>
                  <div>
                    <Field name = {'rememberMe'} component = {Input} type = {'checkbox'}/> remember me
                </div>
                {props.error && <div className={style.formSummaryError}>
                   {props.error}
                </div>}

                  <div>
                    <button>Login</button>
                </div>
            </form>
        </div>

    )
}

const LoginReduxForm = reduxForm({

    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to = {'/profile'}/>
    }
    return (
        <div>
             <h1>Login</h1>
            <LoginReduxForm onSubmit = {onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }

}
export default connect(mapStateToProps, {login})(Login)