const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MSG_TEXT = 'UPDATE-NEW-MSG-TEXT';
const ADD_MSG = 'ADD-MSG'

let store = {
    _state: {
        messagesPage: {
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
        },

        profilePage: {
            posts: [{id: 1, message: 'Hello there', likeCount: 45},
                    {id: 2, message: 'This is my 1st day in the Internet.', likeCount: -24}],
            newPostText: ''
        },
        
        sidebar: {
            friends: 
                    [{id: 1, name: 'Jedy', avatar: 'https://image.flaticon.com/icons/svg/145/145843.svg'},
                    {id: 2, name: 'Alex', avatar: 'https://image.flaticon.com/icons/svg/145/145850.svg'},
                    {id: 3, name: 'Rose', avatar: 'https://image.flaticon.com/icons/svg/145/145847.svg'}]
        }
    },
    _callSubscriber () {
    },

    subscribe (observer)  {
        this._callSubscriber = observer; 
    },
    getState () {
        return this._state;
    },

    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 1,
                message: this._state.profilePage.newPostText,
                likeCount: 1   
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text; 
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MSG_TEXT) {
            this._state.messagesPage.newMsgText = action.text;
            this._callSubscriber(this._state);
        }
        else if (action.type === ADD_MSG) {
            let newMsg = {
                id: this._state.messagesPage.messages.length + 1,
                message: this._state.messagesPage.newMsgText
            }
            this._state.messagesPage.messages.push(newMsg)
            this._state.messagesPage.newMsgText = '';
            this._callSubscriber(this._state);
        }
    }
}

window.store = store;

export const addPostActionCreator = () => ({type: ADD_POST})
export const addMsgActionCreator = () => ({type: ADD_MSG})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})
export const updateNewMsgTextActionCreator = (text) => ({type: UPDATE_NEW_MSG_TEXT, text: text})


export default store;