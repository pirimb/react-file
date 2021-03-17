const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id:1, message: 'Hi how are you', likesCount: 0},
        {id:2, message: "It's my first post", likesCount: 42},
        {id:3, message: "It's my second post", likesCount: 23},
        {id:4, message: "Hi", likesCount: 42}
    ],
    newPostText:'its text from profile reducer'
}

const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText            
            }
        case ADD_POST:{
            let newPost = {
                id:5 ,
                message: state.newPostText,
                likesCount: 0
            };    
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }        
        default:
            return state;    
    }
    
}

export const addPostActionCreator = () => ({ type: ADD_POST }) 
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;