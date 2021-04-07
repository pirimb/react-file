import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

type initialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}
let initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state=initialState, action: any): initialStateType => {    
    switch (action.type) {        
        case SET_AUTH_USER_DATA: 
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }                      
        default :
            return state;
    }    
}

type setAuthUserDataActionPayloadType = {
    userId: number | null, 
    email: string | null, 
    login: string | null, 
    isAuth: boolean
}
type setAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA,
    payload: setAuthUserDataActionPayloadType
}
type getCaptchaUrlSuccessActionType = {
    type: typeof SET_AUTH_USER_DATA,
    payload: {captchaUrl: string}
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataActionType =>
                                                                ({type: SET_AUTH_USER_DATA,
                                                                  payload:{ userId, email, login, isAuth}})
export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType =>({type: SET_AUTH_USER_DATA, payload:{ captchaUrl}})

export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.isAuth()
    if (response.data.resultCode === 0){
        let {id, login, email} = response.data.data; 
        dispatch(setAuthUserData(id, email, login, true));
    }     
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }else {
        dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
    }      
}
export const getCaptchaUrl = () => async (dispatch: any) =>{
    let response = await securityAPI.captcha()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }    
}

export default authReducer;