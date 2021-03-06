import React from 'react';
import s from './Sidebar.module.css';
import FriendItem from './FriendItem/Item';

const Sidebar = (props) => {
    
    let friends = props.friends
    .map(el => <FriendItem name={el.name} avatar={el.avatar} id={el.id} key={el.id}/>)
    return (
        <div className={s.friends}>
            
            <div>{friends}</div>
        </div>
    )
}

export default Sidebar;