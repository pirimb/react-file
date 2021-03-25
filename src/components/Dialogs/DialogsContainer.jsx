import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {addMessageActionCreator} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage:(newMessage) => {
      dispatch(addMessageActionCreator(newMessage))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)