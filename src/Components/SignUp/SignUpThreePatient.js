import React, { Component } from "react";
import { axiosInstance } from "../../utils/axiosInterceptor.js";
import LoginProto from "../../assests/loginProto.svg";
import facebookLogo from "../../assests/facebookLogo.svg";
import googleLogo from "../../assests/googleLogo.svg";
import { Link } from "react-router-dom";
import { Set_Signup_Data } from "../../actions/setSignUp";
import { connect } from "react-redux";
import { message, Select } from "antd";
import { Spinner } from "react-bootstrap";
import "./SignUp.css";

let Option = Select.Option;
class SignUpThreePatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      doctorList: null,
      doctorId: "",
      password: "",
      confirmPassword: "",
      btnLoading: false,
    };
    this.getDoctorList = this.getDoctorList.bind(this);
  }
  getDoctorList() {
    this.setState({
      ...this.state,
      loading: true,
    });
    axiosInstance
      .get(`/doctors`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          ...this.state,
          loading: false,
          doctorList: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          loading: false,
        });
      });
  }
  componentDidMount() {
    this.getDoctorList();
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
                  this.state.doctorId != "" &&
                  this.state.password == this.state.confirmPassword
                ) {
                  this.props
                    .Set_Signup_Data({
                      ...this.props.signUpData,
                      password: this.state.password,
                      doctorId: this.state.doctorId,
                    })
                    .then(() => {
                      if (this.props.signUpData) {
                        let data = this.props.signUpData;
                        let username = data.username;
                        let password = data.password;
                        let email = data.email;
                        let contact = data.contact;
                        let doctorId = data.doctorId;
                        let name=data.name
                        let obj = {
                          username: username,
                          password: password,
                          email: email,
                          contact: contact,
                          doctor: doctorId,
                          name:name
                        };
                        
                        if (
                          username &&
                          password &&
                          email &&
                          contact &&
                          doctorId&&
                          name
                        ) {
                          this.setState({
                            ...this.state,
                            btnLoading: true,
                          });
                        
                          axiosInstance
                            .post("register/patient", obj)
                            .then((resp) => {
                              message.success("Patient Registered Successfully");
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
                          message.warn("All details not provided!");
                        }
                      } else {
                        message.warn("All details not provided!");
                      }
                    });
                } else {
                  message.warn("Password didn't match or No password provided");
                }
              }}
            >
              <input
                required
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
                required
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
              <Select
                required
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    doctorId: e,
                  });
                }}
                showSearch
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  optionFilterProp="children"
                placeholder="Select Doctor"
                style={{
                  marginBottom: "20px",
                  borderRadius: "10px",
                  height: "30px",
                }}
              >
                {this.state.loading ? (
                  <Option value="">
                    {" "}
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  </Option>
                ) : this.state.doctorList ? (
                  <>
                    {this.state.doctorList.map((doctor, index) => {
                      return (
                        <Option value={doctor.user.id} key={index}>
                          {doctor.user.username}
                        </Option>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </Select>
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
export default connect(mapStateToProps, { Set_Signup_Data })(
  SignUpThreePatient
);
