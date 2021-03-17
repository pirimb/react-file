import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator,updateNewPostTextActionCreator} from './../../../redux/profileReducer'



const MyPosts = (props) => {
  let postsElement = props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

  
  let OnAddPost = () => {
    props.addPost();  
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div className={s.textBlock}>
        <div>
          <textarea onChange= {onPostChange} value={props.newPostText} />
        </div>
        <button onClick={ OnAddPost }>Add post</button>
      </div>
      <div className={s.posts}>
        { postsElement }

        {/* <Post message={posts[0].message} likesCount={posts[0].likesCount} />
        <Post message={posts[1].message} likesCount={posts[1].likesCount} /> */}
      </div>
    </div>
  );
};

export default MyPosts;
