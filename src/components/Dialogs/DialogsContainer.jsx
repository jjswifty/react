import React from 'react';
import {addMsgActionCreator, updateNewMsgTextActionCreator} from '../redux/messages-reducer'
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let onAreaChange = (text) => {
        props.store.dispatch(updateNewMsgTextActionCreator(text))
    }

    let addMsg = () => {
        props.store.dispatch(addMsgActionCreator())
    }
    return (<Dialogs dialogs = {props.store.getState().messagesPage.dialogs}
                    messagesPage = {props.store.getState().messagesPage}  
                    addMsg = {addMsg} 
                    onAreaChange = {onAreaChange} />)
    
}
export default DialogsContainer;