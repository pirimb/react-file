import { connect } from "react-redux";
import { setCurrentPage, toggleFollow, toggleFollowInProgress, getUsers, follow, unfollow } from "../../redux/usersReducer";
import React from "react";
import Users from './Users';
import Preloader from "../common/Preloader/preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowInProgress, getIsFetching, getPageSize, getPortionSize, getTotalUsersCount, getUsersSelector } from "../../redux/usersSelectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)        
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {                
        return <>
        {/* { this.props.isFetching && <Preloader /> } */}
         <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize} 
                currentPage={this.props.currentPage} 
                onPageChange={this.onPageChange}
                users={this.props.users}
                followInProgress={this.props.followInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
            />
        
        </>    
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowInProgress(state)
    }
}

export default compose(
    //withAuthRedirect,
    connect(mapStateToProps, {
        toggleFollow,
        setCurrentPage,
        toggleFollowInProgress,
        getUsers,
        follow, unfollow,
    })
)(UsersContainer)

// export default connect(mapStateToProps, {
//     toggleFollow,
//     setCurrentPage,
//     toggleFollowInProgress,
//     getUsers,
//     follow, unfollow
// })(UsersContainer);


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