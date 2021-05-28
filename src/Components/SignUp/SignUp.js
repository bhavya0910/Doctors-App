import React, { Component } from "react";
import "./SignUp.css";
import doctorSvg from "../../assests/doctor.svg";
import patientSvg from "../../assests/patient.svg";
import { Link } from "react-router-dom";
import LoginProto from "../../assests/loginProto.svg";
import backArrow from "../../assests/backArrow.svg";
class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
              <button className="outlined">Doctor</button>
            </div>
            <div className="patient_opt">
              <div>
                <img src={patientSvg}></img>
              </div>
              <button className="outlined">Patient</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default SignUp;
