import React from 'react';
//import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPosts 
      posts = {props.profilePage.posts} 
      addPost = {props.addPost} 
      newPostText={props.profilePage.newPostText}
      updateNewPostFunc={props.updateNewPostFunc}
      />
    </div>
    
  );
}

export default Profile;