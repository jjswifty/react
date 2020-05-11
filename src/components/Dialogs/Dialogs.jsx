import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/Item';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs
    .map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)

    let messagesElements = props.messagesPage.messages
    .map(m => <Message message={m.message}/>)

    let onAreaChange = (e) => {
        let text = e.target.value;
        props.onAreaChange(text)
    }

    let addMsg = () => {
        props.addMsg();
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.msgSend}>
                <textarea 
                onChange={onAreaChange} 
                value={props.messagesPage.newMsgText}/>
                <button onClick={addMsg}>
                    Отправить
                </button>
            </div>
        </div>
    )
}
export default Dialogs;