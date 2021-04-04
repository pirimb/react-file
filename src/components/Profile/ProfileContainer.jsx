import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateStatus, updatePhoto, saveChangedProfileData } from "../../redux/profileReducer";
import { Redirect, withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.PureComponent {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }
    
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {    
        return (
            <Profile {...this.props} profile={this.props.profile}
                     isOwner={!this.props.match.params.userId} />
        );    
    }
  
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus, updatePhoto, saveChangedProfileData }),
    withRouter
    //withAuthRedirect
)(ProfileContainer)
