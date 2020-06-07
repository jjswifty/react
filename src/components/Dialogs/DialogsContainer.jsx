import {addMsgActionCreator, updateNewMsgTextActionCreator} from '../redux/messages-reducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
