import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../utilities/validators/validators";
import { Element } from "../../common/FormsControls/FormControls";


const MyPosts = (props) => {
    let postsElement = props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

  
    const onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

  return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                { postsElement }       
            </div>
        </div>
    );
};

const maxLength10 = maxLength(10)
const Textarea = Element('textarea')

const AddPostFrom = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={Textarea} name='newPostText' placeholder='Enter your post'
                       validate={[required, maxLength10]} />                
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'ProfilePostForm'})(AddPostFrom)

export default MyPosts;
