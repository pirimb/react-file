import { connect } from "react-redux"
import { Redirect } from "react-router"
import { Field, reduxForm } from "redux-form"
import { login } from "../../redux/authReducer"
import { required } from "../../utilities/validators/validators"
import { Element } from "../common/FormsControls/FormControls"

const Input = Element('input')

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
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) return <Redirect to='/profile' />

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} )(Login);