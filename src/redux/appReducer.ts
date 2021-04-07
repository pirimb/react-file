import { getAuthUserData } from "./authReducer";

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS'

type initialStateType = {
    initialized: boolean
}
let initialState: initialStateType = {
    initialized: false
}

const appReducer = (state=initialState, action: any): initialStateType => {    
    switch (action.type) {        
        case INITIALIZE_SUCCESS: 
            return {
                ...state,
                initialized: true
            }                      
        default :
            return state;
    }    
}

type initializeSuccessActionType = {
    type: typeof INITIALIZE_SUCCESS
}
export const initializeSuccess = ():initializeSuccessActionType =>({type: INITIALIZE_SUCCESS})

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initializeSuccess())
    })
}

export default appReducer;