import React from 'react'; 
import s from './Post.module.css';

const Post = (props) => {
  return (

    <div className={s.item}>
      <img src="https://www.meme-arsenal.com/memes/5bfbedc0087795a2a923507cac462270.jpg" alt="BRUH"></img>
      {props.message}
      <div>LIKES {props.likeCount}</div>
    </div>

  );
}

export default Post;