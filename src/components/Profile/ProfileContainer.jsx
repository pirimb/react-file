import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateStatus } from "../../redux/profileReducer";
import { Redirect, withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId=15905
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {    
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );    
    }
  
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }),
    withRouter
    //withAuthRedirect
)(ProfileContainer)
