import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData, logout } from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {   

    render() {
        return(
            <Header {...this.props} />
        )
    }
}
const mapStateToProps = (state) => {
    debugger
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.profilePage.profile
    }
    debugger
}

export default connect(mapStateToProps, { logout })(HeaderContainer);