import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import Music from './components/Music/Music'
import Settings from "./components/Settings/Settings";
import { BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter } from "react-router-dom";
import store from "./redux/reduxStore";
import { connect, Provider } from "react-redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/preloader";
import { withSuspense } from "./hoc/withSuspense";
import Login from "./components/Login/Login";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
//const Login = React.lazy(() => import("./components/Login/Login"));


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
                    <Switch >
                        <Route exact path='/' render={() => <Redirect to='/profile' />} />
                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer) }/>
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                        <Route path="/users" render={withSuspense(UsersContainer)}/>          
                        <Route path="/login" render={() => <Login/> } />            
                        <Route path="/news" render={() => <News />} />
                        <Route path="/music" render={Music} />
                        <Route path="/settings" render={Settings} />
                        <Route path="/friends" render={Friends} />                  
                        <Route exact path="/*" render={() => <div>404 NOT FOUND</div>} />
                    </Switch>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const MainApp = (props) => {
    return (
        <BrowserRouter >
            <Provider store={store} > 
                <AppContainer />
            </Provider>
        </BrowserRouter> 
    )
}

export default MainApp;