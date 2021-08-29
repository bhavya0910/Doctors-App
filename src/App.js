import React, { Component } from "react";
import logo from "./logo.svg";
import Posts from "./Components/MainComponent.js";
import "./App.css";
import DoctorDashboard from "../src/Dashboards/DoctorDashboard";
import PatientDashboard from "../src/Dashboards/PatientDashboard";
import MainComponent from "../src/Components/MainComponent";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login.js";
import SignUp from "./Components/SignUp/SignUp.js";
import SignUpTwo from "./Components/SignUp/SignUpTwo";
import ProfileView from "./Components/ProfileView/ProfileView";
import SignUpThree from "./Components/SignUp/SignUpThree";
import SignUpThreePatient from "./Components/SignUp/SignUpThreePatient";
import { connect } from "react-redux";
import { Toggle_Logged_In } from "./actions/toggleLogged";
import { axiosInstance } from "./utils/axiosInterceptor";
import { ToggleLoggedIn } from "./actions/types";
var basic = require('basic-authorization-header');

class App extends Component {
  componentDidMount() {
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    let type = localStorage.getItem("user_type");
    if (username && password && type) {
      let auth_basic=btoa(username +':'+password);
      axiosInstance.interceptors.request.use(function (config) {
        config.headers.Authorization = `Basic ${auth_basic}`
        return config;
      });

      this.props.Toggle_Logged_In({
        loggedIn: true,
        user_type: type,
      });
    } else {
      this.props.Toggle_Logged_In({
        loggedIn: false,
        user_type: type,
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Router>
          {!this.props.loggedIn.loggedIn ? (
            <Switch>
              <Route path="/" exact>
                <Login></Login>
              </Route>
              <Route path="/profile" exact>
                <ProfileView></ProfileView>
              </Route>
              <Route path="/signup/1" exact>
                <SignUp></SignUp>
              </Route>
              <Route
                path="/signup/2"
                exact
                render={(props) => (
                  <SignUpTwo history={props.history}></SignUpTwo>
                )}
              ></Route>
              {this.props.signup_data&&this.props.signup_data.type == "Doctor" ? (
                <Route
                  path="/signup/3"
                  exact
                  render={(props) => (
                    <SignUpThree history={props.history}></SignUpThree>
                  )}
                ></Route>
              ) : (
                <Route
                  path="/signup/3"
                  exact
                  render={(props) => (
                    <SignUpThreePatient
                      history={props.history}
                    ></SignUpThreePatient>
                  )}
                ></Route>
              )}
            </Switch>
          ) : this.props.loggedIn.user_type == "Doctor" ? (
            <Switch>
              <Route
                path="/"
                render={(props) => (
                  <DoctorDashboard history={props.history}></DoctorDashboard>
                )}
              ></Route>
            </Switch>
          ) : (
            <Switch>
              <Route
                path="/"
                render={(props) => (
                  <PatientDashboard history={props.history}></PatientDashboard>
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
  loggedIn: state.loggedIn,
  signup_data: state.signUpData.signup_data,
});
export default connect(mapStateToProps, { Toggle_Logged_In })(App);
