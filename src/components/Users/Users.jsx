import React from 'react';
import styles from './Users.module.css';

import dAvatar from './../../assets/images/defaultAvatar.jpg'
/*
const Usersaa = (props) => {
    if (props.users.length === 0 ) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=20')

            .then(response => {

                props.setUsers(response.data.items)
            })

    }

    return (
    <div>
        {
            props.users.map(user =>

            <div key = { user.id }>
                <div>
                    <div>
                        <img src = { user.photos.small != null ? user.photos.smaill : dAvatar}
                            alt = 'did not found' className = {styles.avatar}/>
                    </div>
                    <div>
                        {
                            user.followed ?
                            <button onClick = {() => {props.follow(user.id)}}> Unfollow </button>
                            :
                            <button onClick = {() => {props.follow(user.id)}}> follow </button>
                        }

                    </div>
                </div>

                <div>
                    <div>
                        <div>{ user.name }</div>
                        <div>{ user.status }</div>
                    </div>

                    <div>
                        <div>{ 'user.location.city' }</div>
                        <div>{ 'user.location.country' }</div>
                    </div>
                </div>

            </div>
            )
        }
    </div>)
}
*/

const Users = (props) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(props.totalUsersCount / props.pageSize ); i++) { // 1, 2, 3, 4...
        pages.push(i)
    }

    return (
        <div>
            <div className={styles.pageNav}>
                <div className={styles.navigation}>
                    {pages.map(p => <span className = {p === props.currentPage ? styles.selected : styles.navElem}
                            onClick = {() => {props.pageChanged(p)}} key={p}>
                            {p}
                        </span>
                    
                    )
                }
                </div>
                
            </div>
            <div className = {styles.users}>
            {props
                .users
                .map(user => <div key={user.id} className = {styles.user}>
                    <div>
                        <div>
                            <div>{user.name}</div>
                            <img src={ user.photos.small != null ? user.photos.smaill : dAvatar}
                                alt='did not found'
                                className={styles.avatar}/>
                        </div>
                        <div>
                            <div>
                                <div>{'user.location.city'}</div> 
                                <div>{'user.location.country'}</div>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <div>{user.status}</div>
                        {user.followed
                                ? <button href={{}} onClick= {() => {props.follow(user.id)}} className={styles.followBtn}>
                                        Unfollow
                                    </button>
                                : <button onClick= {() => {props.follow(user.id)}} className={styles.followBtn}>
                                    follow
                                </button>
                            }
                    </div>
                </div>)
            }
            </div>
        </div>
    )
}

window.Users = Users;

export default Users;
