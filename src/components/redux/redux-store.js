import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import ReduxThunk from 'redux-thunk';

// По сути, это наш state.
let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
    // очень важно называть это так же, как и в вызове (index, app!!) -> else undefined -_- (по сути это же state)
})

let store = createStore(reducers, applyMiddleware(ReduxThunk));

window.store = store;

export default store;