import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/dialogsReducer'
import storeContext from '../../storeContext';
import Dialogs from './Dialogs';



const DialogsContainer = () => {  

    return ( <storeContext.Consumer>{
        (store) => {
        let state = store.getState();

        let onSendMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onMessageChange = (message) => {
          store.dispatch(updateMessageActionCreator(message));
        };
        return <Dialogs sendMessage={onSendMessage} updateMessage={onMessageChange}
          dialogs={state.dialogsPage.dialogs} dialogsPage={state.dialogsPage} />
        }
      }
      </storeContext.Consumer>
    );
}

export default DialogsContainer;