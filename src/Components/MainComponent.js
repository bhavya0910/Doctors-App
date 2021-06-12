import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./MainComponent.css";
import HomeSvg from '../assests/homeLogo.svg';
import scheduleSvg from '../assests/schedule.svg';
import settingSvg from '../assests/settings.svg';
import appointmentSvg from '../assests/appointment.svg';
import connectionSvg from '../assests/connections.svg';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: "4",
    };
  }
  render() {
    return (
      <div className="layout_wrapper">
        <div className="left_sider">
          <div className="sider_menu">
            
            <div
            tabIndex={1}
              className={`homePage${
                this.state.activeMenuItem == 1 ? " active" : ""
              }`}
              onClick={()=>{
                  this.setState({...this.state,activeMenuItem:1})
              }}
            >
             <img src={HomeSvg} style={{marginRight:'8px'}}></img> Home Page
            </div>
            <div
            tabIndex={1}
              className={`appointments${
                this.state.activeMenuItem == 2 ? " active" : ""
              }`}
              onClick={()=>{
                this.setState({...this.state,activeMenuItem:2})
            }}
            >
               <img src={appointmentSvg} style={{marginRight:'8px'}}></img>Appointments
            </div>
            <div
            tabIndex={1}
              className={`schedule${
                this.state.activeMenuItem == 3 ? " active" : ""
              }`}
              onClick={()=>{
                this.setState({...this.state,activeMenuItem:3})
            }}
            >
              <img src={scheduleSvg} style={{marginRight:'8px'}}></img> Schedule
            </div>
            <div
            tabIndex={1}
              className={`connections${
                this.state.activeMenuItem == 4 ? " active" : ""
              }`}
              onClick={()=>{
                this.setState({...this.state,activeMenuItem:4})
            }}
            >
               <img src={connectionSvg} style={{marginRight:'8px'}}></img>Connections
            </div>
            <div
            tabIndex={1}
              className={`settings${
                this.state.activeMenuItem == 5 ? " active" : ""
              }`}
              onClick={()=>{
                this.setState({...this.state,activeMenuItem:5})
            }}
            >
      
              <img src={settingSvg} style={{marginRight:'8px'}}></img> Settings
            </div>
          </div>
        </div>
        <div className="right_content_layout">
            <div className="right_header">
                <h2>Doctor App </h2>
            </div>
            <div className="main_layout_content">
                <h2>YMANN</h2>
                <h2>Doctor App </h2>
                <h2>Doctor App </h2>
                <h2>Doctor App </h2>
                <h2>Doctor App </h2>
                <h2>Doctor App </h2>
            </div>
        </div>
      </div>
    );
  }
}

export default MainComponent;
