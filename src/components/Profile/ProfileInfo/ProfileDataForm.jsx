import s from "./ProfileInfo.module.css";
import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "../../common/FormsControls/FormControls";
import styles from '../../common/FormsControls/FormControls.module.css'


const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><button>Save</button></div>
            { props.error
            && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div className={s.dataForm}>
                <b>Full name: </b><Field placeholder='Full name' name='fullName' component={Input} />
            </div> 
            <div className={s.dataForm}>
                <b>Looking for a job: </b><Field name='lookingForAJob' component={Input} type='checkbox' />
            </div>  
            <div className={s.dataForm}>
                <b>My skills: </b><Field placeholder='Job description and skills' name='lookingForAJobDescription' component={Textarea} />
            </div> 
            
            <div className={s.dataForm}>
                <b>About me: </b><Field placeholder='About me' name='aboutMe' component={Textarea} />
            </div> 
            <b>Contacts: </b>{Object.keys(props.profile.contacts).map(key => {
                return (
                    <div key={key}>
                        <b>{key}:</b> <Field placeholder={key} name={'contacts.'+key} component={Input} />
                    </div>
                )
            })}
        </form>
    )
}
const ProfileDataReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataReduxForm;
