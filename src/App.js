import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import Music from './components/Music/Music'
import Settings from "./components/Settings/Settings";
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import store from "./redux/reduxStore";
import { connect } from "react-redux";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/preloader";


class App extends React.Component {
  componentDidMount() {    
    this.props.initializeApp()            
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-container">
        <HeaderContainer />
        <Navbar store={store}/>
        <div className="app-container-content">
          <Route path="/dialogs" render={() => <DialogsContainer /> }/>
          <Route path="/profile/:userId?" render={() => <ProfileContainer /> }/>
          <Route path="/users" render={() => <UsersContainer /> }/>            
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={Music} />
          <Route path="/settings" render={Settings} />
          <Route path="/friends" render={Friends} />          
          <Route path="/login" render={() => <Login/>} />          
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);