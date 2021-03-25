import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';



const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} src={d.src}/> );
  let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id}/>);

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessage)
  }
  
  return (
    <div className={s.dialogs}>
        <div className={s.dialogItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            <div>{messagesElements}</div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    </div>
  );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component='textarea' name='newMessage' placeholder='Enter your message' />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'messageForm'})(AddMessageForm)

export default Dialogs;
