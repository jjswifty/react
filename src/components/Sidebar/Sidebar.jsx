import React from 'react';
import s from './Sidebar.module.css';
import FriendItem from './FriendItem/Item';

const Sidebar = (props) => {
    
    let friends = props.friends
    .map(el => <FriendItem name={el.name} avatar={el.avatar} id={el.id} />)
    return (
        <div className={s.friends}>
            {friends}
        </div>
    )
}

export default Sidebar;