import React from 'react'; 
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom'





const App = (props) => {
  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar friends={props.state.sidebar.friends}/>
        
        <div className='app-wrapper-content'>
          <Route path="/dialogs" render={ () => 
          <Dialogs 
            dialogs={props.state.messagesPage.dialogs} 
            messages={props.state.messagesPage.messages}/>
            } />

          <Route path="/profile" render={ () => 
          <Profile 
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostFunc={props.updateNewPostFunc}
            />
            }/>

          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    
    );
}

export default App;
