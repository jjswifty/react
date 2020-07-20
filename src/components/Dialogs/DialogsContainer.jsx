import {addMsgActionCreator, updateNewMsgTextActionCreator} from '../redux/messages-reducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messagesPage: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMsg: () => {
            dispatch(addMsgActionCreator())
        },
        onAreaChange: (text) => {
            dispatch(updateNewMsgTextActionCreator(text))
        }
    }
}



export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
