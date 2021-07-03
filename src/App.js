import React, { Component } from "react";
import logo from "./logo.svg";
import Posts from "./Components/MainComponent.js";
import "./App.css";
import MainComponent from "./Components/MainComponent.js";
import { Provider } from "react-redux";
import store from "./app/store.js"  ;
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login.js";
import SignUp from "./Components/SignUp/SignUp.js";
import SignUpTwo from "./Components/SignUp/SignUpTwo";
import SignUpThree from "./Components/SignUp/SignUpThree";
import { connect } from "react-redux";
import { Toggle_Logged_In } from "./actions/toggleLogged";
class App extends Component {
  render() {
    return (
        <div className="App">
          <Router>
            {!this.props.loggedIn ? (
              <Switch>
                <Route path="/" exact>
                  <Login></Login>
                </Route>
                <Route path="/signup/1" exact>
                  <SignUp></SignUp>
                </Route>
                <Route path="/signup/2" exact>
                  <SignUpTwo></SignUpTwo>
                </Route>
                <Route path="/signup/3" exact>
                  <SignUpThree></SignUpThree>
                </Route>
              </Switch>
            ) : (
              <Switch>
                <Route
                  path="/"
                  render={(props) => (
                    <MainComponent history={props.history}></MainComponent>
                  )}
                ></Route>
              </Switch>
            )}
          </Router>
        </div>
   
    );
  }
}
const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn.loggedIn,
});
export default connect(mapStateToProps, { Toggle_Logged_In })(App);
