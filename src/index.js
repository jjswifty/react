import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './components/redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostFunc} from './components/redux/state'
import {BrowserRouter} from "react-router-dom"

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App 
                    state={state} 
                    addPost={addPost}
                    updateNewPostFunc={updateNewPostFunc}
                />
            </React.StrictMode>
        </BrowserRouter>,
    document.getElementById('root')
)}

rerenderEntireTree(state);

subscribe(rerenderEntireTree)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();
