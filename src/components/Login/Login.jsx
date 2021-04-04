import { connect } from "react-redux"
import { Redirect } from "react-router"
import { Field, reduxForm } from "redux-form"
import { login } from "../../redux/authReducer"
import { required } from "../../utilities/validators/validators"
import { Input } from "../common/FormsControls/FormControls"
import s from '../common/FormsControls/FormControls.module.css'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Email" name='email' component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder="Password" name='password' component={Input} type='password'
                       validate={[required]}/>
            </div>
            <div>
                <Field component="input" name='rememberMe' type="checkBox"/>Remember me
            </div>
            { props.error
            && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            {props.captchaUrl && <img src={props.captchaUrl} alt='captcha' />}
            {props.captchaUrl && <Field placeholder='captcha' name='captcha' component={Input} validate={required} />}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) return <Redirect to='/profile' />

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login} )(Login);