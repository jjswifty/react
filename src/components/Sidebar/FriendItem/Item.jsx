import React from 'react';
import s from './Item.module.css'

const FriendItem = (props) => {
    return (
        <div id={props.id} className={s.friendDiv}>
            <img src={props.avatar} alt="avatar"></img>
            <span>{props.name}</span>
        </div>
    );
}
export default FriendItem;
