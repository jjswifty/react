import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profile-reducer'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
    props.store.getState().profilePage.newPostText = '';
  }

  let updateNewPostText = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text))
  }

  return (<MyPosts addPost={addPost} 
                  posts={props.store.getState().profilePage.posts} 
                  updateNewPostText={updateNewPostText}
                  newPostText={props.store.getState().profilePage.newPostText}
                  />)
  // Всю логику взаимодействия с REDUX мы оставляем в данной обертке. Container componen
}

export default MyPostsContainer;