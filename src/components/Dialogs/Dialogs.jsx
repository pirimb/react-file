import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import AddMessageForm from './AddMessageForm'



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
            <AddMessageForm onSubmit={addNewMessage} />
        </div>
    </div>
  );
}


export default Dialogs;
