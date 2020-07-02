import Users from './Users';
import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';
import { toggleFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleFetching } from '../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';

class UsersAPI extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0 ) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(Math.ceil(response.data.totalCount - 4950))
                });
        }
    }

    pageChanged = (p) => {
        this.props.toggleFetching();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
                .then(response => {
                    this.props.setCurrentPage(p);
                    this.props.setUsers(response.data.items);
                    this.props.toggleFetching();
                });
    }

    render() {
        return this.props.isFetching 
                ? <Preloader /> 
                : <Users totalUsersCount = {this.props.totalUsersCount}
                currentPage = {this.props.currentPage}
                pageChanged = {this.pageChanged}
                users = {this.props.users}
                follow = {this.props.toggleFollow}
                pageSize = {this.props.pageSize}
                />
    }
}

const mapStateToProps = (state) => (
    {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
)

const UsersContainer = connect(mapStateToProps, 
    {toggleFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleFetching})
    (UsersAPI);

export default UsersContainer;