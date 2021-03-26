import s from './Dialogs.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Element } from '../common/FormsControls/FormControls';
import { maxLength, required } from '../../utilities/validators/validators';

const Textarea = Element('textarea')
const maxLength50 = maxLength(50)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={Textarea} name='newMessage' placeholder='Enter your message'
                       validate={[required, maxLength50]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'messageForm'})(AddMessageForm)

