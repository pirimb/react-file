import React from 'react';
import { connect } from 'react-redux';
import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage:() => {
      dispatch(addMessageActionCreator())
    },
    updateMessage:(message) => {
      dispatch(updateMessageActionCreator(message))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;