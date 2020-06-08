import React from 'react';
import styles from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0 ) {
        props.setUsers([{
            id: 1, name: 'Jedy', followed: true, status: 'Just chillin', 
            location: { city: 'Moscow', country: 'Russia' }, 
            avatarUrl: 'https://image.flaticon.com/icons/svg/145/145843.svg'
        },
        {
            id: 2, name: 'Alex', followed: true, status: 'Sleep', 
            location: { city: 'Sevastopol', country: 'Russia' }, 
            avatarUrl: 'https://image.flaticon.com/icons/svg/145/145850.svg'
        },
        {
            id: 3, name: 'Rose', followed: false, status: 'Coding', 
            location: { city: 'Los-Angeles', country: 'USA' }, 
            avatarUrl: 'https://image.flaticon.com/icons/svg/145/145847.svg'
        }])
    }

    return (
    <div>
        {
            props.users.map(user => 
            
            <div key = { user.id }> 
                <div> 
                    <div>
                        <img src = { user.avatarUrl } alt = 'didnt found' className = {styles.avatar}/>
                    </div>
                    <div>
                        {
                            user.followed ? 
                            <button onClick = {() => {props.follow(user.id)}}> Unfollow </button> 
                            : <button onClick = {() => {props.follow(user.id)}}> follow </button>
                        }
                        
                    </div>
                </div>

                <div>
                    <div>
                        <div>{ user.name }</div>
                        <div>{ user.status }</div>
                    </div>

                    <div>
                        <div>{ user.location.city }</div>
                        <div>{ user.location.country }</div>
                    </div>
                </div>

            </div>

            )
        }
    </div>)
}

export default Users;