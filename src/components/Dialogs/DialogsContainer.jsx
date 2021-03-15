import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {
  let state = props.store.getState();

  let onSendMessage = () => {
    props.store.dispatch(addMessageActionCreator());  
  }

  let onMessageChange = (message) => {
    props.store.dispatch(updateMessageActionCreator(message));
  }

    return (
      <Dialogs sendMessage={onSendMessage} updateMessage={onMessageChange} dialogs={state.dialogsPage.dialogs} 
               dialogsPage={state.dialogsPage} />
    );
}

export default DialogsContainer;