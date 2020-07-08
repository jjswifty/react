import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import Preloader from './../common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';
import { getUserProfile } from './../redux/profile-reducer';


class ProfileAPI extends React.Component {
    componentDidMount () {
        
        this.props.getUserProfile(this.props.match.params.userId);
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

const ProfileContainer = connect(mapStateToProps, {getUserProfile})(withRouter(ProfileAPI))

// ProfileContainer -> withRouter -> ProfileApi -> Profile 
// Получение данных из props.match.params.userId -> componentDidMount -> AJAX -> state -> Profile.

export default ProfileContainer;