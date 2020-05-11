import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from './sidebar-reducer';



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
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action); //messages
        this._state.profilePage = profileReducer(this._state.profilePage, action); //profile page
        this._state.sidebar = sidebarReducer(this._state.sidebar, action); //sidebar

        
        
        this._callSubscriber(this._state) //rerender 
    }
}
window.store = store;
// ACTION CREATORS



export default store;