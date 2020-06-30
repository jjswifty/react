import * as axios from 'axios';
import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from './../redux/profile-reducer';
import Preloader from './../common/Preloader/Preloader';

class ProfileAPI extends React.Component {
    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPI)

export default ProfileContainer;