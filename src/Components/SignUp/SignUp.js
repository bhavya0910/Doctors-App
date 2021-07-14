import React, { Component } from "react";
import "./SignUp.css";
import doctorSvg from "../../assests/doctor.svg";
import patientSvg from "../../assests/patient.svg";
import { Link } from "react-router-dom";
import LoginProto from "../../assests/loginProto.svg";
import backArrow from "../../assests/backArrow.svg";
import { connect } from "react-redux";
import {Set_Signup_Data} from "../../actions/setSignUp";

class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.signup_data);
    return (
      <>
        <div className="signUp_wrapper">
          <div className="left_content">
            <div className="header_absolute">
              <div>Already have an account ?</div>
              <Link to="/">
                <button className="outlined">Sign In</button>
              </Link>
            </div>
            <img src={LoginProto}></img>
          </div>
          <div className="right_content_signUp">
            <div className="right_header">
              <span>
                <Link to="/">
                  <div className="abs_arrow" tabIndex={1}>
                    <img src={backArrow}></img>
                  </div>
                </Link>
              </span>
              <span>Create Account as</span>
              <span></span>
            </div>
            <div className="doctor_opt">
              <div>
                <img src={doctorSvg}></img>
              </div>
              <Link to="/signup/2">
              <button className="outlined" onClick={()=>{
                  this.props.Set_Signup_Data({type:'Doctor'});
                }}>Doctor</button>
              </Link>
             
            </div>
            <div className="patient_opt">
              <div>
                <img src={patientSvg}></img>
              </div>
              <Link to="/signup/2">
                <button onClick={()=>{
                  console.log('e');
                  this.props.Set_Signup_Data({type:'Patient'});
                }} className="outlined">Patient</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  signUpData: state.signUpData.signup_data,
});
export default connect(mapStateToProps, { Set_Signup_Data })(SignUp);
