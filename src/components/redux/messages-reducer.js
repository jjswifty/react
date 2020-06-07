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
            message: 'Bruh.bruh?'
        },
        {
            id: 3,
            message: 'bruh....'
        },
        {
            id: 4,
            message: 'BRUH MOMENT'
        }
    ],
    newMsgText: ''
}

const messagesReducer = (state = initialState, action) => {

    
    switch (action.type) {
        // same like profile-reducer, идемпотентность, детерминирование.
        case UPDATE_NEW_MSG_TEXT: 
            
            return {
                ...state,
                newMsgText: action.text
            }
        

        case ADD_MSG: 
            
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: [...state.messages].length + 1,
                        message: state.newMsgText
                    } 
                ],
                newMsgText: ''
            }
        
        default:
            return state;
    }
}

//action creators
export const addMsgActionCreator = () => ({type: ADD_MSG});
export const updateNewMsgTextActionCreator = (text) => ({type: UPDATE_NEW_MSG_TEXT, text: text});
//end of action creators
export default messagesReducer;
