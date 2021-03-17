import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import Music from './components/Music/Music'
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import store from "./redux/reduxStore";
import { Provider } from "react-redux";


const App = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <div className="app-container">
          <Header />
          <Navbar store={store}/>
          <div className="app-container-content">
            <Route path="/dialogs" render={() => <DialogsContainer /> }/>
            <Route path="/profile" render={() => <Profile /> }/>
            <Route path="/news" render={() => <News />} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
            <Route path="/friends" component={Friends} />          
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;

