import { connect } from "react-redux";
import { toggleIsFetching, setTotalUsersCount, setCurrentPage, setUsers, toggleFollow } from "../../redux/usersReducer";
import React from "react";
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
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
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    toggleFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
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