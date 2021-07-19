import React, { Component } from "react";
import "./Login.css";
import { Container, Row, Col } from "reactstrap";
import LoginProto from "../../assests/loginProto.svg";
import facebookLogo from "../../assests/facebookLogo.svg";
import googleLogo from "../../assests/googleLogo.svg";
import { connect } from "react-redux";
import { Toggle_Logged_In } from "../../actions/toggleLogged";
import { Link } from "react-router-dom";
import axios from "axios";
import { axiosInstance } from "../../utils/axiosInterceptor";
import { message } from "antd";
import { Spinner } from "react-bootstrap";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false,
    };
    this.login = this.login.bind(this);
  }
  login() {
    this.setState({ ...this.state, loading: true });
    axios
      .post(`https://maivrikdoc.herokuapp.com/api/login`, {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        this.setState({ ...this.state, loading: false });
        message.success("Successfully Logged In");
        localStorage.setItem("username", this.state.username);
        localStorage.setItem("password", this.state.password);
        let type;
        if(res.data.is_doctor){
          type="Doctor";
          localStorage.setItem("user_type",'Doctor');
        }
        else if(res.data.is_patient){
          type="Paient";
          localStorage.setItem("user_type",'Patient');
        }
        axiosInstance.interceptors.request.use(function (config) {
          config.headers.auth = {
            username: this.state.username,
            password: this.state.password,
          };
          return config;
        });
        this.props.Toggle_Logged_In({
          loggedIn:!this.props.loggedIn,
          user_type:type
        });
      })
      .catch((err) => {
        this.setState({ ...this.state, loading: false });
        message.warn("Not able to login");
        console.log(err);
      });
  }
  render() {
    return (
      <div className="login_wrapper">
        <div className="left_content">
          <div className="header_absolute">
            <div>Don't have an account?</div>
            <Link to="/signup/1">
              <button className="outlined">Sign Up</button>
            </Link>
          </div>
          <img src={LoginProto}></img>
        </div>
        <div className="right_content">
          <div className="signuptext">Sign in to your Account</div>
          <div className="signin_form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.login();
              }}
            >
              <input
                className="outline_def"
                id="userName"
                required
                placeholder="username"
                onChange={(e) => {
                  this.setState({ ...this.state, username: e.target.value });
                }}
              ></input>
              <input
                className="outline_def"
                id="password"
                required
                placeholder="password"
                type="password"
                onChange={(e) => {
                  this.setState({ ...this.state, password: e.target.value });
                }}
              ></input>
              <button className="filled">
                  {this.state.loading?(
                    <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                  ):('')}
                
                <span style={{marginLeft:'10px'}}>Sign In</span>
              </button>
            </form>
          </div>
          <div className="other_opts">
            <div>- or Sign In with -</div>
            <div className="other_opts_opts">
              <div className="google_opt" tabIndex={1}>
                <img src={googleLogo}></img>
                <div>Google</div>
              </div>
              <div className="facebook_opt" tabIndex={1}>
                <img src={facebookLogo}></img>
                <div>Facebook</div>
              </div>
            </div>
          </div>
          <div className="small_screen_signup">
            Don’t have an account?{" "}
            <Link to="/signup/1">
              <u>Sign Up</u>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn.loggedIn,
});
export default connect(mapStateToProps, { Toggle_Logged_In })(Login);
