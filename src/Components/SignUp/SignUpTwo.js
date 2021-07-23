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
import * as EmailValidator from "email-validator";

class SignUpTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      contact: "",
      name:""
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
              }}
            >
              <input
                className="outline_def"
                id="userName"
                required
                placeholder="username"
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    username: e.target.value,
                  });
                }}
              ></input>
              <input
                className="outline_def"
                id="name"
                required
                placeholder="Name"
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    name: e.target.value,
                  });
                }}
              ></input>
              <input
                className="outline_def"
                id="email"
                required
                placeholder="email"
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    email: e.target.value,
                  });
                }}
              ></input>
              <input
                className="outline_def"
                id="contact"
                type="tel"
                required
                placeholder="contact"
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    contact: e.target.value,
                  });
                }}
              ></input>

              <button
                className="filled"
                type="submit"
                onClick={() => {
                  if (
                    this.state.username!="" &&
                    this.state.contact!="" &&
                    this.state.email!="" && 
                    this.state.name!=""
                  ) {
                    let isEmailValid = EmailValidator.validate(
                      this.state.email
                    );
                    if (isEmailValid) {
                     
                      let len=this.state.contact.length;
                      var phoneno = /^\d{10}$/;
                      let isPhoneValid=this.state.contact.match(phoneno);
                      if(isPhoneValid&&len==10){
                        this.props.Set_Signup_Data({
                          ...this.props.signUpData,
                          ...this.state,
                        });
                        this.props.history.push("/signup/3");
                      }
                      else{
                        message.warn('Phone Number entered is invalid');
                      }
                     
                    } else {
                      message.warn("Email entered is Invalid");
                    }
                  }
                }}
                style={{ width: "100%" }}
              >
                Next
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
export default connect(mapStateToProps, { Set_Signup_Data })(SignUpTwo);
