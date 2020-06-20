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
            
            axios.get('https://social-network.samuraijs.com/api/1.0/users?count=2')
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }

    render() {
        return (
            <div>
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
                                    <button onClick = {() => {this.props.follow(user.id)}}> Unfollow </button> 
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