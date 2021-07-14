import React, { Component } from "react";
// import './Login.css';
import { Container, Row, Col } from "reactstrap";
import LoginProto from "../../assests/loginProto.svg";
import facebookLogo from "../../assests/facebookLogo.svg";
import googleLogo from "../../assests/googleLogo.svg";
import { Link } from "react-router-dom";
import { Set_Signup_Data } from "../../actions/setSignUp";
import { connect } from "react-redux";
import { message } from "antd";
import { axiosInstance } from "../../utils/axiosInterceptor";
import { Spinner } from "react-bootstrap";

class SignUpThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specialistof: "",
      password: "",
      confirmPassword: "",
      btnLoading: false,
    };
  }
  render() {
    return (
      <div className="login_wrapper">
        <div className="left_content">
          <div className="header_absolute">
            <div>Already have an account?</div>
            <Link to="/">
              <button className="outlined">Sign In</button>
            </Link>
          </div>
          <img src={LoginProto}></img>
        </div>
        <div className="right_content">
          <div className="signuptext">Create your Account</div>
          <div className="signin_form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (
                  this.state.password != "" &&
                  this.state.password == this.state.confirmPassword
                ) {
                  this.props.Set_Signup_Data({
                    ...this.props.signUpData,
                    ...this.state,
                  });
                  if (this.props.signUpData) {
                    let data = this.props.signUpData;
                    let username = data.username;
                    let password = data.password;
                    let email = data.email;
                    let contact = data.email;
                    let type = data.type;
                    let obj={
                        username: username,
                        password: password,
                        email: email,
                        contact: contact,
                      }
                      console.log(obj)
                    if (username && password && email && contact && type) {
                      if (type == "Patient") {
                        this.setState({
                          ...this.state,
                          btnLoading: true,
                        });
                        axiosInstance
                          .post("register/patient", {
                            username: username,
                            password: password,
                            email: email,
                            contact: contact,
                          })
                          .then((resp) => {
                            message.warn("Patient Registered Successfully");
                            this.setState({
                              ...this.state,
                              btnLoading: false,
                            });
                            this.props.history.push("/");
                          })
                          .catch((err) => {
                            this.setState({
                              ...this.state,
                              btnLoading: false,
                            });
                            message.warn("Some Error Occured");
                          });
                      } else {
                        this.setState({
                          ...this.state,
                          btnLoading: true,
                        });
                        axiosInstance
                          .post("/register/doctor", {
                            username: username,
                            password: password,
                            email: email,
                            contact: contact,
                          })
                          .then((resp) => {
                            message.warn("Doctor Registered Successfully");
                            this.setState({
                              ...this.state,
                              btnLoading: false,
                            });
                            this.props.history.push("/");
                          })
                          .catch((err) => {
                            this.setState({
                              ...this.state,
                              btnLoading: false,
                            });
                            message.warn("Some Error Occured");
                          });
                      }
                    } else {
                      message.warn("All details not provided!");
                    }
                  } else {
                    message.warn("All details not provided!");
                  }
                } else {
                  message.warn("Password didn't match or No password provided");
                }
              }}
            >
              <input
                className="outline_def"
                id="specialistOf"
                placeholder="Specialist Of"
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    specialistof: e.target.value,
                  });
                }}
              ></input>
              <input
                className="outline_def"
                type="password"
                id="password"
                placeholder="Create password"
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    password: e.target.value,
                  });
                }}
              ></input>
              <input
                className="outline_def"
                type="password"
                id="password_confirm"
                placeholder="Confirm password"
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    confirmPassword: e.target.value,
                  });
                }}
              ></input>
              <button className="filled" type="submit">
                {this.state.btnLoading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  ""
                )}
                <span style={{ marginLeft: "10px" }}>Sign Up</span>
              </button>
            </form>
          </div>
          <div className="other_opts">
            <div>- or Sign Up with -</div>
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
            Already have an account?{" "}
            <Link to="/">
              <u>Sign In</u>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  signUpData: state.signUpData.signup_data,
});
export default connect(mapStateToProps, { Set_Signup_Data })(SignUpThree);
