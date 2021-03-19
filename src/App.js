import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import Music from './components/Music/Music'
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import store from "./redux/reduxStore";
import { Provider } from "react-redux";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <div className="app-container">
          <Header />
          <Navbar store={store}/>
          <div className="app-container-content">
            <Route path="/dialogs" render={() => <DialogsContainer /> }/>
            <Route path="/profile" render={() => <ProfileContainer /> }/>
            <Route path="/users" render={() => <UsersContainer /> }/>            
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={Music} />
            <Route path="/settings" render={Settings} />
            <Route path="/friends" render={Friends} />          
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;

