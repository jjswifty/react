import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import Preloader from './../common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';
import { getUserProfile } from './../redux/profile-reducer';
//import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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
    profile: state.profilePage.profile,
    profileStatus: state.profilePage.profileStatus
})

// 1 - Создается презентационный компонент. 
// 2 - этому компоненту даем роутер. 
// 3 - обертываем еще раз, наделяем mstp && mdtp
// 4 - Даем редирект.

// Вариант 1 - export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(withRouter(ProfileAPI)));

// Вариант 2 (с удобной функцией compose)

export default compose(
    //withAuthRedirect,
    connect(mapStateToProps, {getUserProfile}),
    withRouter
)(ProfileAPI)