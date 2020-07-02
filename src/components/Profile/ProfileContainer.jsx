import * as axios from 'axios';
import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from './../redux/profile-reducer';
import Preloader from './../common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';

class ProfileAPI extends React.Component {
    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${!this.props.match.params.userId ? 2 : this.props.match.params.userId}`)
                .then(response => {
                    this.props.setUserProfile(response.data)
                });
    }

    render () {
        return !this.props.profile 
        ? <Preloader /> 
        :   <div>
                <Profile {...this.props}/>
            </div>    
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile
})

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(withRouter(ProfileAPI))

// ProfileContainer -> withRouter -> ProfileApi -> Profile 
// Получение данных из props.match.params.userId -> componentDidMount -> AJAX -> state -> Profile.

export default ProfileContainer;