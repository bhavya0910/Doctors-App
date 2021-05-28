import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from './Login/Login.js';
import SignUp from './SignUp/SignUp.js';

class MainComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Login></Login>
                    </Route>
                    <Route path="/signup" exact>
                        <SignUp></SignUp>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default MainComponent;
