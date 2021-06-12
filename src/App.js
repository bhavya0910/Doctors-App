import React,{Component} from "react";
import logo from "./logo.svg";
import Posts from "./Components/MainComponent.js";
import "./App.css";
import MainComponent from "./Components/MainComponent.js";
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login.js";
import SignUp from "./Components/SignUp/SignUp.js";
import SignUpTwo from "./Components/SignUp/SignUpTwo";
import SignUpThree from "./Components/SignUp/SignUpThree";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
    };
  }
  render() {
    return (
      <div className="App">
        <Router>
            {!this.state.loggedIn ? (
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
              <Route path="/" exact>
                <MainComponent></MainComponent>
              </Route>
              </Switch>
            )}
        </Router>
      </div>
    );
  }
}

export default App;
