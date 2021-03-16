import React from "react";
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/profileReducer'
import storeContext from "../../../storeContext";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
 
  return (
    <storeContext.Consumer>{
      (store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        let onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        return (
          <MyPosts
            addPost={addPost}
            updateNewPostText={onPostChange}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </storeContext.Consumer>
  );
};

export default MyPostsContainer;
