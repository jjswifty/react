import React from 'react'; 
import './App.css';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar friends={props.store.getState().sidebar.friends}/>
        <div className='app-wrapper-content'>
          <Route path="/dialogs" render={ () => <DialogsContainer store={props.store}/>} />
          <Route path="/profile" render={ () => <Profile store={props.store}/>}/>
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    );
}

export default App;
