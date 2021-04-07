import { photosType } from '../types/types';
import { usersAPI } from "../api/api"

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOW_IN_PROGRESS = 'TOGGLE_FOLLOW_IN_PROGRESS'
const SET_PORTION_PAGE_NUMBER = 'SET_PORTION_PAGE_NUMBER'

type usersType = {
    id: number,
    name: string,
    status: string,
    photos: photosType,
    followed: boolean
}

let initialState = {
    users: [] as Array<usersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: [] as Array<number> // Array of users id
}
type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): initialStateType => {
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
                followInProgress: action.isFetching 
                ? [...state.followInProgress, action.userId]
                : state.followInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

type toggleFollowActionType = {
    type: typeof TOGGLE_FOLLOW,
    userId: number
}
type setUsersActionType = {
    type: typeof SET_USERS,
    users: Array<usersType>
}
type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
type setTotalUsersCountActionType = {
    type: typeof SET_USERS_TOTAL_COUNT,
    count: number
}
type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
type toggleFollowInProgressActionType = {
    type: typeof TOGGLE_FOLLOW_IN_PROGRESS,
    isFetching: boolean, 
    userId: number
}

export const toggleFollow = (userId: number): toggleFollowActionType => ({ type: TOGGLE_FOLLOW, userId }) 
export const setUsers = (users: Array<usersType>): setUsersActionType => ({type: SET_USERS, users })
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountActionType => ({type: SET_USERS_TOTAL_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowInProgress = (isFetching: boolean, userId: number): toggleFollowInProgressActionType => ({type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, userId })

export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))

        let data = await usersAPI.getUsers(currentPage, pageSize)

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));        
    }
}

const followOrUnfollow = async (dispatch: any, userId: number, APIMethod: any) => {
    dispatch(toggleFollowInProgress(true, userId));

    let data = await APIMethod(userId)
    if (data.resultCode === 0) {
        dispatch(toggleFollow(userId))                                                    
    }
    dispatch(toggleFollowInProgress(false, userId));
}

export const follow = (userId: number) => async (dispatch: any) => {
    followOrUnfollow(dispatch, userId, usersAPI.follow)
}
export const unfollow = (userId: number) => {
    return (dispatch: any) => {
        followOrUnfollow(dispatch, userId, usersAPI.unfollow)
    }
}

export default usersReducer;