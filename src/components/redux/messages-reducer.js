const UPDATE_NEW_MSG_TEXT = 'UPDATE-NEW-MSG-TEXT';
const ADD_MSG = 'ADD-MSG'

let initialState = {
    dialogs: [{
            id: 1,
            name: 'Идиот'
        },
        {
            id: 2,
            name: 'Программист'
        },
        {
            id: 3,
            name: 'Рандом'
        },
        {
            id: 4,
            name: 'Админ'
        }
    ],
    messages: [{
            id: 1,
            message: 'Hello there'
        },
        {
            id: 2,
            message: 'Bruh.'
        },
        {
            id: 3,
            message: 'LOL'
        },
        {
            id: 4,
            message: 'Hello. You are banned.'
        }
    ],
    newMsgText: ''
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MSG_TEXT:
            state.newMsgText = action.text;
            return state;

        case ADD_MSG:
            let newMsg = {
                id: state.messages.length + 1,
                message: state.newMsgText
            }
            state
                .messages
                .push(newMsg);
            state.newMsgText = '';
            return state;

        default:
            return state;
    }
}

//action creators
export const addMsgActionCreator = () => ({type: ADD_MSG});
export const updateNewMsgTextActionCreator = (text) => ({type: UPDATE_NEW_MSG_TEXT, text: text});
//end of action creators
export default messagesReducer;
