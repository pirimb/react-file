import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react';
import { Redirect } from 'react-router';



const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} src={d.src}/> );
  let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id}/>);

  let onSendMessage = () => {
    props.sendMessage();  
  }

  let onMessageChange = (e) => {
    let message = e.target.value;
    props.updateMessage(message);
  }

  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements}

        {/* <DialogItem name={dialogs[0].name} id={dialog[0].id}/>        
        <DialogItem name={dialogs[1].name} id={dialog[1].id}/> */}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              onChange={onMessageChange}
              value={state.newDialogMessage}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessage}>send</button>
          </div>
        </div>

        {/* <Message message={messages[0].message}/>
        <Message message={messages[1].message}/>*/}
      </div>
    </div>
  );
}

export default Dialogs;