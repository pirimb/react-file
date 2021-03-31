import { usersAPI } from "../api/api"

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOW_IN_PROGRESS = 'TOGGLE_FOLLOW_IN_PROGRESS'
const SET_PORTION_PAGE_NUMBER = 'SET_PORTION_PAGE_NUMBER'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:{
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })                
            }
        }
        case SET_USERS:{
            return {
                ...state,
                users: action.users 
            }
        }
        case SET_CURRENT_PAGE:{
            return { ...state, currentPage: action.currentPage }
        }
        case SET_USERS_TOTAL_COUNT:{
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING:{
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_FOLLOW_IN_PROGRESS:{
            return { 
                ...state, 
                followInProgress: action.followInProgress 
                ? [...state.followInProgress, action.userId]
                : state.followInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId }) 
export const setUsers = (users) => ({type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowInProgress = (followInProgress, userId) => ({type: TOGGLE_FOLLOW_IN_PROGRESS, followInProgress, userId })

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))

        let data = await usersAPI.getUsers(currentPage, pageSize)

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));        
    }
}

const followOrUnfollow = async (dispatch, userId, APIMethod) => {
    dispatch(toggleFollowInProgress(true, userId));

    let data = await APIMethod(userId)
    if (data.resultCode === 0) {
        dispatch(toggleFollow(userId))                                                    
    }
    dispatch(toggleFollowInProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => {
    followOrUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI))
}
export const unfollow = (userId) => {
    return (dispatch) => {
        followOrUnfollow(dispatch, userId, usersAPI.unfollow)
    }
}

export default usersReducer;