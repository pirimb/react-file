import { connect } from "react-redux";
import { setCurrentPage, toggleFollow, toggleFollowInProgress, getUsers, follow, unfollow } from "../../redux/usersReducer";
import React from "react";
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/preloader";
import { usersAPI } from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {                
        return <>
        { this.props.isFetching ? <Preloader /> : null }
        <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize} 
                currentPage={this.props.currentPage} 
                onPageChange={this.onPageChange}
                users={this.props.users}
                followInProgress={this.props.followInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>    
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
    }
}

export default connect(mapStateToProps, {
    toggleFollow,
    setCurrentPage,
    toggleFollowInProgress,
    getUsers,
    follow, unfollow
})(UsersContainer);


// let mapDispatchToProps =  (dispatch) => {
//     return {
//         toggleFollow: (userId) => {
//             dispatch(toggleFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }
//export default UsersContainer;