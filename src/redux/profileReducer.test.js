import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";


let state = {
    posts: [
        {id:1, message: 'Hi how are you', likesCount: 0},
        {id:2, message: "It's my first post", likesCount: 42},
        {id:3, message: "It's my second post", likesCount: 23},
        {id:4, message: "Hi", likesCount: 42}
    ]
}

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('ReactJS')
    
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
});

it('message of post should be added', () => {
    let action = addPostActionCreator('ReactJS')
    
    let newState = profileReducer(state, action)

    expect(newState.posts[4].message).toBe('ReactJS')
});

it('selected post should be deleted', () => {
    let action = deletePost(1)
    
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
});
