import { Field, reduxForm } from "redux-form"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" name='login' component="input"/>
            </div>
            <div>
                <Field placeholder="Password" name='password' component="input"/>
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
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}


export default Login;