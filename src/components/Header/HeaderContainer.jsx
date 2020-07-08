import React from 'react'; 
import Header from './Header';
import { connect } from 'react-redux';
import { auth } from './../redux/auth-reducer';



class HeaderAPI extends React.Component {

    componentDidMount () {
        this.props.auth()
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
    {auth})
    (HeaderAPI)

export default HeaderContainer;