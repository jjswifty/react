import React from 'react'; 
import Header from './Header';
import { connect } from 'react-redux';
import { setUserData, toggleFetching, setUserInfo } from './../redux/auth-reducer';
import * as axios from 'axios';


class HeaderAPI extends React.Component {

    componentDidMount () {
        //debugger;
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true // cookie
        })
        .then(response => {
            let {email, id, login} = response.data.data;

            if (response.data.resultCode === 0 ) {
                this.props.setUserData(email, id, login);
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
                .then(response => {
                    this.props.setUserInfo(response.data);
                    this.props.toggleFetching();
                })
            }
        });
        
    }

    render () {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userInfo: state.auth.userInfo,
        isFetching: state.auth.isFetching
    }
)

const HeaderContainer = connect(mapStateToProps, 
    {setUserData, setUserInfo, toggleFetching})
    (HeaderAPI)

export default HeaderContainer;