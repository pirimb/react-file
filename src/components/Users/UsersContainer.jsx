import { connect } from "react-redux";
import { toggleIsFetching, setTotalUsersCount, setCurrentPage, setUsers, toggleFollow, toggleFollowInProgress } from "../../redux/usersReducer";
import React from "react";
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/preloader";
import { usersAPI } from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
        
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
            });
    }

    render() {                
        return <>
        { this.props.isFetching ? <Preloader /> : null }
        <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize} 
                currentPage={this.props.currentPage} 
                onPageChange={this.onPageChange}
                users={this.props.users}
                toggleFollow={this.props.toggleFollow}
                toggleFollowInProgress={this.props.toggleFollowInProgress}
                followInProgress={this.props.followInProgress}
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
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowInProgress,
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