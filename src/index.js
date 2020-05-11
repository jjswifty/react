import * as serviceWorker from './serviceWorker';
import store from './components/redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App 
                    
                    dispatch={store.dispatch.bind(store)}
                    store={store}
                />
            </React.StrictMode>
        </BrowserRouter>,
    document.getElementById('root')
)}

rerenderEntireTree(store.getState()); // Сразу же ререндерим все дерево.

// Подписываем rerenderEntiteTree через observer.
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();
