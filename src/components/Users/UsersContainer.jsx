import Users from './Users';
import React from 'react';
import {connect} from 'react-redux';
import { unfollow ,  follow , getUsers } from '../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage, null)
    }

    pageChanged = (p) => {
        this.props.getUsers(this.props.pageSize, p, p)
    }

    render() {
        return this.props.isFetching 
                ? <Preloader /> 
                : <Users totalUsersCount = {this.props.totalUsersCount}
                currentPage = {this.props.currentPage}
                pageChanged = {this.pageChanged}
                users = {this.props.users}
                pageSize = {this.props.pageSize}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
                isFollowRequesting = {this.props.isFollowRequesting}
                />
    }
}

const mapStateToProps = (state) => (
    {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowRequesting: state.usersPage.isFollowRequesting
    }
)



export default withAuthRedirect(connect(mapStateToProps,
    { getUsers, follow, unfollow })
    (UsersAPI));