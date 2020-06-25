import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
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

class Users extends React.Component {
    
    componentDidMount() {
        if (this.props.users.length === 0 ) {
            //debugger;
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(Math.ceil(response.data.totalCount / 100))
                })
        }
    }

    pageChanged (p) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
                .then(response => {
                    this.props.setCurrentPage(p);
                    this.props.setUsers(response.data.items);
                })
    }

    render() {

        let pages = [];

        for (let i = 1; i <= this.props.totalUsersCount; i++) { // 1, 2, 3, 4...
            pages.push(i)
        }

        return (
            <div>
                <div className={styles.pageNav}>
                    {
                        pages.map(p => {
                            return (
                                    <span className = {p === this.props.currentPage ? styles.selected : ''}
                                        onClick = {() => {this.pageChanged(p)}}
                                        key = {p}> 
                                        
                                        {p} 
                                        
                                    </span>
                            )
                        })
                    }
                </div>
                {
                    this.props.users.map(user => 
                    <div key = { user.id }> 
                        <div> 
                            <div>
                                <img src = { user.photos.small != null ? user.photos.smaill : dAvatar} 
                                    alt = 'did not found' className = {styles.avatar}/>
                            </div>
                            <div>
                                {
                                    user.followed ? 
                                    <button href={{}} onClick = {() => {this.props.follow(user.id)}}> Unfollow </button> 
                                    : 
                                    <button onClick = {() => {this.props.follow(user.id)}}> follow </button>
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
}

window.Users = Users;

export default Users;