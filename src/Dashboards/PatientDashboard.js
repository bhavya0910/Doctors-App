import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import { Toggle_Logged_In } from "../../src/actions/toggleLogged";
import LogoSvg from "../assests/logo.svg";
import Avatar from "@material-ui/core/Avatar";
import CheckUpHistory from "../Components/PatientComponents/CheckUpHistory";
import Home from "../Components/HomeComponent/Home";
import Prescription from "../Components/Prescription/prescription";
import Schedule from "../Components/Schedule/Schedule";
import XRay from "../Components/X-Ray/xRay";
import XRayView from "../Components/X-Ray/xRayView";
import Profile from ".././assests/profile.svg";
import Appointment from ".././assests/appointment.svg";
import Prescriptions from "../assests/prescription.svg";
import Documents from "../assests/document.svg";
import Settings from "../assests/settings.svg";
import Stats from "../Components/StatsDisp/stats";
import ProfileView from "../Components/ProfileView/ProfileView";

class PatientDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: "1",
      isPopOverVisible: false,
      username: null,
      patientId: null,
    };
    this.setActiveMenu = this.setActiveMenu.bind(this);
  }
  setActiveMenu(num) {
    this.setState({ ...this.state, activeMenuItem: num });
  }
  componentDidMount() {
    let patient_username = localStorage.getItem("username");
    let patient_id = localStorage.getItem("patient_id");

    this.setState({
      ...this.state,
      username: patient_username,
      patientId: patient_id,
    });
  }
  render() {
    return (
      <div
        className="layout_wrapper"
        onClick={() => {
          if (this.state.isPopOverVisible) {
            this.setState({ ...this.state, isPopOverVisible: false });
          }
        }}
      >
        <div className="left_sider">
          <div className="sider_menu">
         
            <Link to="/appointment">
              <div
                tabIndex={1}
                className={`x_ray${
                  this.state.activeMenuItem == 2 ? " active" : ""
                }`}
                onClick={() => {
                  this.setState({ ...this.state, activeMenuItem: 2 });
                }}
              >
                <span className="content_rapper">
                  <img src={Appointment}></img>
                  <span>APPOINTMENTS</span>
                </span>
              </div>
            </Link>

            <Link to="/prescription">
              <div
                tabIndex={1}
                className={`prescription${
                  this.state.activeMenuItem == 3 ? " active" : ""
                }`}
                onClick={() => {
                  this.setState({ ...this.state, activeMenuItem: 3 });
                }}
              >
                <span className="content_rapper">
                  <img src={Prescriptions}></img>
                  <span>PRESCRIPTIONS</span>
                </span>
              </div>
            </Link>
            <Link to="/xRays">
              <div
                tabIndex={1}
                className={`appointments${
                  this.state.activeMenuItem == 4 ? " active" : ""
                }`}
                onClick={() => {
                  this.setState({ ...this.state, activeMenuItem: 4 });
                }}
              >
                <span className="content_rapper">
                  <img src={Documents}></img>
                  <span>DOCUMENTS</span>
                </span>
              </div>
            </Link>

            <div
              tabIndex={1}
              className={`settings${
                this.state.activeMenuItem == 6 ? " active" : ""
              }`}
              onClick={() => {
                this.setState({ ...this.state, activeMenuItem: 6 });
              }}
            >
              <span className="content_rapper">
                <img src={Settings}></img>
                <span>SETTINGS</span>
              </span>
            </div>
          </div>
        </div>
        <div className="right_content_layout">
          <div className="right_header_layout">
            <div className="over_view_text">Overview</div>
            <div>
              <img style={{ width: "100px" }} src={LogoSvg}></img>
            </div>
            <div className="right_view_area">
              <div className="search_icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="6.5"
                    cy="6.5"
                    r="5.75"
                    stroke="#BDBDBD"
                    stroke-width="1.5"
                  />
                  <path
                    d="M11 11L15 15"
                    stroke="#BDBDBD"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="notifications">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00002 19C9.10377 19 9.99908 18.1047 9.99908 17H6.00096C6.00096 18.1047 6.89627 19 8.00002 19ZM14.731 14.3216C14.1272 13.6728 12.9975 12.6969 12.9975 9.5C12.9975 7.07188 11.295 5.12812 8.9994 4.65125V4C8.9994 3.44781 8.5519 3 8.00002 3C7.44815 3 7.00065 3.44781 7.00065 4V4.65125C4.70502 5.12812 3.00252 7.07188 3.00252 9.5C3.00252 12.6969 1.87283 13.6728 1.26908 14.3216C1.08158 14.5231 0.998459 14.7641 1.00002 15C1.00346 15.5125 1.40565 16 2.00315 16H13.9969C14.5944 16 14.9969 15.5125 15 15C15.0016 14.7641 14.9185 14.5228 14.731 14.3216Z"
                    fill="#BDBDBD"
                  />
                  <circle
                    cx="13"
                    cy="5"
                    r="3.75"
                    fill="#172578"
                    stroke="#DCE1F9"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
              <div className="stick"></div>
              <div className="profile_disp">
                <div>{this.state.username ? this.state.username : ""}</div>

                <Avatar
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      isPopOverVisible: !this.state.isPopOverVisible,
                    });
                  }}
                >
                  {this.state.username ? this.state.username[0] : ""}
                </Avatar>
              </div>
              <div
                className={
                  this.state.isPopOverVisible
                    ? "popover_profile visible"
                    : "popover_profile"
                }
              >
                <Link to="/profile">
                <div className="menu_item">
                  {this.state.username ? this.state.username : ""}
                </div>
                </Link>
               
                <div
                  className="menu_item"
                  onClick={() => {
                    this.props.Toggle_Logged_In({
                      loggedIn: false,
                      user_type: null,
                    });
                    delete localStorage.username;
                    delete localStorage.password;
                    delete localStorage.user_type;
                    this.props.history.push("/");
                  }}
                >
                  Logout
                </div>
              </div>
            </div>
          </div>
          <div className="stats_disp">
            <Stats
              setActiveMenu={this.setActiveMenu}
              activeMenuItem={this.state.activeMenuItem}
            ></Stats>
          </div>
          <div className="main_layout_content">
            <Switch>
              <Route path="/" key={1} exact component={CheckUpHistory}></Route>
              <Route
                path="/prescription"
                key={2}
                exact
                component={Prescription}
              ></Route>
              <Route
                path="/appointment"
                key={3}
                exact
                component={Schedule}
              ></Route>
              <Route path="/xRays" key={3} exact component={XRay}></Route>
              <Route
                path="/viewXRay/:xRayId"
                key={4}
                exact
                render={(props) => (
                  <XRayView history={props.history}></XRayView>
                )}
              ></Route>
              <Route path="/profile"  key={4}
                exact
                render={(props) => (
                  <ProfileView history={props.history}></ProfileView>
                )}>

                </Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn.loggedIn,
});

export default connect(mapStateToProps, { Toggle_Logged_In })(PatientDashboard);
