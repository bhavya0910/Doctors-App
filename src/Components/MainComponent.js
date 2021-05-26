import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from './Login/Login.js';

class MainComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/">
                        <Login></Login>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default MainComponent;
