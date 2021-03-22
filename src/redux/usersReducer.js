const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOW_IN_PROGRESS = 'TOGGLE_FOLLOW_IN_PROGRESS'

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
            return { ...state, totalUsersCount: action.count /150 }
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

export default usersReducer;