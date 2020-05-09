import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../redux/state'

const MyPosts = (props) => {

  let postsElements = props.posts
  .map(post => <Post message={post.message} likeCount={post.likeCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    
    props.dispatch(updateNewPostTextActionCreator(text))
  }
  
  return (
    <div className = {s.postsBlock}>
      <h3> My posts </h3>
      <div>
      
        <div>

          <textarea 
          ref = {newPostElement} 
          onChange = {onPostChange} 
          value = {props.newPostText}
          />

        </div>
        
        <div>
          <button onClick = {addPost}> Add post </button>
        </div>

      </div>

      <div className = {s.posts}>
        { postsElements }
      </div>

    </div>
  );
}

export default MyPosts;