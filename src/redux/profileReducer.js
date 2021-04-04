import { profileAPI } from "../api/api"
import { stopSubmit } from "redux-form";


const ADD_POST = 'profile/ADD_POST'
const SET_USER_PROFILE = 'profile/UPDATE-SET_USER_PROFILE-POST-TEXT'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const UPDATE_PROFILE_PHOTO = 'profile/UPDATE_PROFILE_PHOTO'

let initialState = {
    posts: [
        {id:1, message: 'Hi how are you', likesCount: 0},
        {id:2, message: "It's my first post", likesCount: 42},
        {id:3, message: "It's my second post", likesCount: 23},
        {id:4, message: "Hi", likesCount: 42}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id:5 ,
                message: action.newPostText,
                likesCount: 0
            };    
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }     
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile }
        }  
        case SET_STATUS: {
            return {...state, status: action.status }
        }  
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId) }
        }  
        case UPDATE_PROFILE_PHOTO: {
            return {...state, profile: {...state.profile, photos: action.photos} }
        }  
        default:
            return state;    
    }
    
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText}) 
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const updatePhotoSuccess = (photos) => ({type: UPDATE_PROFILE_PHOTO, photos})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0 ) {
        dispatch(setStatus(status))
    }
}
export const updatePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.updatePhoto(file)
    if (response.data.resultCode === 0 ) {
        dispatch(updatePhotoSuccess(response.data.data.photos))
    }
}
export const saveChangedProfileData = (profileData) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.updateProfileData(profileData)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }else {
        dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}


export default profileReducer;