import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../utils/axiosInterceptor";
import "../ProfileView/ProfileView.css";
import "../X-Ray/xRay.css";
import "./CheckUpHistory.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Skeleton, Avatar, message, Divider } from "antd";
import { Spinner } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../Appointments/Appointment.css";
import "./CheckUpHistory.css";

// import FileDroper from './FileDroper';
const localizer = momentLocalizer(moment);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

export default function ProfileView() {
  const classes = useStyles();
  const [profileInfo, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [reports, setreports] = useState(null);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setgender] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [updatedPic, setPic] = useState(null);
  const [imgUrl, setUrl] = useState(null);
  const [xray, setxray] = useState(null);
  const [appointmentData, setappointment] = useState(null);
  function readURL(input) {
    if (input) {
      var reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target.result);
        setUrl(e.target.result);
      };
      reader.readAsDataURL(input);
    }
  }

  const uploadFile = (newPic) => {
    console.log(newPic);
    setPic(newPic);
    readURL(newPic);
  };

  let fetchProfile = (props) => {
    setLoading(true);
    // let patient_id= props.history.location.pathname.split('/')[2];
    let patient_id = localStorage.getItem("patient_id");
    // console.log('hi');
    axiosInstance
      .get(`/patient/${patient_id}`)
      .then((profile) => {
        console.log(profile);
        setProfile(profile);
        setgender(profile.data.user.gender);
        setName(profile.data.user.name);
        setUsername(profile.data.user.username);
        setAge(profile.data.user.age);
        setAddress(profile.data.user.address);
        setState(profile.data.user.state);
        setPhone(profile.data.user.phone_number);
        setEmail(profile.data.user.email);

        setUrl(`${profile.data.user.image}`);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  let fetchhistory = () => {
    setLoading(true);
    // let patient_id= props.history.location.pathname.split('/')[2];
    let patient_id = localStorage.getItem("patient_id");
    axiosInstance
      .get(`/reports/${patient_id}`)
      .then((reports) => {
        console.log(reports);
        setreports(reports.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  let fetchxray = () => {
    setLoading(true);
    //  let patient_id= props.history.location.pathname.split('/')[2];
    let patient_id = localStorage.getItem("patient_id");
    axiosInstance
      .get(`/xrays/${patient_id}`)
      .then((xrayy) => {
        console.log(xrayy);
        setxray(xrayy.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  let fetchappointments = () => {
    setLoading(true);

    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    let auth_basic = Buffer.from(`${username}:${password}`, "utf8").toString(
      "base64"
    );
    var config = {
      method: "get",
      url: "https://maivrikdoc.herokuapp.com/api/getappointment",
      headers: {
        Authorization: `Basic ${auth_basic}`,
      },
    };
    axios(config)
      .then((resp) => {
        let appointments = [];
        let arr = resp.data;
        console.log(arr.length);
        for (let i = 0; i < arr.length; ++i) {
          console.log(arr);
          let date = arr[i].date;
          console.log(date);
          let array = date.toString().split("-");
          console.log(array);
          if (array) {
            appointments.push({
              title: arr[i].id,
              start: new Date(array[0], array[1], array[2], 0, 0, 0),
              end: new Date(array[0], array[1], array[2], 0, 0, 0),
            });
          }
        }

        setappointment(appointments);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setBtnLoading(true);
    let patient_id = localStorage.getItem("patient_id");
    axiosInstance
      .put(`/user/${patient_id}`, {
        name: name,
        age: age,
        state: state,
        email: email,
        address: address,
        phone_number: phone,
        gender: gender,
      })
      .then((res) => {
        message.success("Successfully saved changes!");
        setBtnLoading(false);
        fetchProfile();
      })
      .catch((err) => {
        message.warn("Not able to save changes!");
        setBtnLoading(false);
      });
  };

  useEffect(() => {
    fetchProfile();
    fetchhistory();
    fetchxray();
    fetchappointments();
  }, []);

  return (
    <>
      <div className="prof_wrapper">
        {!loading && profileInfo ? (
          <Container className="profile_wrapper">
            <Row>
              <Col md={4} sm={12} className="leftProfile_wrapper">
                <h3>Profile</h3>
                {imgUrl ? (
                  <Avatar
                    style={{
                      width: "100%",
                      height: "100%",
                      maxWidth: "250px",

                      maxHeight: "250px",
                    }}
                    src={`https://dailysuperheroes.com/wp-content/uploads/2020/02/tony-stark.jpg`}
                  />
                ) : (
                  <Avatar></Avatar>
                )}
                {/* <FileDroper uploadFile={uploadFile}></FileDroper> */}
              </Col>
              <Col md={8} sm={12} className="rightProfile_wrapper">
                <form className="prof_edit_form">
                  <div className="m_form_item">
                    <h6>Username</h6>
                    <input
                      value={username}
                      className="outline_def"
                      type="username"
                      id="username"
                      style={{ width: "100%" }}
                    ></input>
                  </div>
                  <div className="m_form_item">
                    <h6>Name</h6>
                    <input
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={name}
                      className="outline_def"
                      type="name"
                      id="name"
                      style={{ width: "100%" }}
                    ></input>
                  </div>
                  <div className="m_form_item">
                    <h6>Age</h6>
                    <input
                      value={age}
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                      className="outline_def"
                      type="age"
                      id="age"
                      style={{ width: "100%" }}
                    ></input>
                  </div>
                  <div className="m_form_item">
                    <h6>State</h6>
                    <input
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      className="outline_def"
                      type="state"
                      id="state"
                      style={{ width: "100%" }}
                    ></input>
                  </div>
                  <div className="m_form_item">
                    <h6>Email</h6>
                    <input
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="outline_def"
                      type="email"
                      id="email"
                      style={{ width: "100%" }}
                    ></input>
                  </div>
                  <div className="m_form_item">
                    <h6>Address</h6>
                    <input
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      className="outline_def"
                      type="address"
                      id="address"
                      style={{ width: "100%" }}
                    ></input>
                  </div>
                  <div className="m_form_item">
                    <h6>Phone.No</h6>
                    <input
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      className="outline_def"
                      type="phone_number"
                      id="phone_number"
                      style={{ width: "100%" }}
                    ></input>
                  </div>
                  <div className="button_opts">
                    <button className="filled" onClick={handleSubmit}>
                      <span style={{ paddingRight: "5px" }}>Save Changes</span>
                      {btnLoading ? (
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
                    </button>
                    <button
                      className="filled"
                      onClick={(e) => {
                        e.preventDefault();
                        setName(profileInfo.data.user.name);
                        setUsername(profileInfo.data.user.username);
                        setAge(profileInfo.data.user.age);
                        setAddress(profileInfo.data.user.address);
                        setPhone(profileInfo.data.user.phone_number);
                        setEmail(profileInfo.data.user.email);
                      }}
                    >
                      <span>Cancel</span>
                    </button>
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
        ) : (
          <Skeleton active={true}></Skeleton>
        )}
      </div>
     <hr style={{color:"white"}}/>
      <Row className="add-space">
        <Col md={6} sm={12}>
          <Container>
            <div style={{}}>
              <Row>
                <div
                  style={{
                    backgroundColor: "#DCE1F9",
                    outline: "#DCE1F9",
                    height: "90px",
                  }}
                >
                  <h4 className="pos1">CheckUp History</h4>
                </div>
              </Row>
              <Divider></Divider>
              <Row>
                {!loading && reports ? (
                  reports.map((report) => {
                    return (
                      <Col md={6} sm={12} xs={12}>
                        <div className="carde">
                          <div className="rep_date">DATE : {report.date}</div>
                          <div className="rep_data">{report.data}</div>
                        </div>
                      </Col>
                    );
                  })
                ) : (
                  <Skeleton active={true}></Skeleton>
                )}
              </Row>
              
            </div>
          </Container>
        </Col>

        <Col md={6} sm={12}>
          <Container>
            <div
              style={{
                backgroundColor: "#DCE1F9",
                outline: "#DCE1F9",
                height: "90px",
              }}
            >
              <Row >
                <h4 className="pos1">X-RAY's/SCAN's</h4>
              </Row>
            </div>
            <Divider></Divider>
            <Row>
              {!loading && xray ? (
                xray.map((xrayy) => {
                  return (
                    <Col md={12} sm={12} xs={12}>
                      <Container className="xRay_card">
                        <Row>
                          <Col md={4}>
                            <div className="card_left">
                              {/* <img src={report.image}></img> */}
                              <img
                                src={`https://images-na.ssl-images-amazon.com/images/I/71eq9Xhwb1L.png`}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  marginRight: "30px",
                                }}
                              ></img>
                            </div>
                          </Col>
                          <Col md={8}>
                            <div className="card_right">
                              <h3>X-RAY</h3>
                              <div>
                                <span className="x_key">X-Ray Id</span> :{" "}
                                <span className="x_val">{xrayy.report.id}</span>
                              </div>
                              <div>
                                <span className="x_key">Date</span> :{" "}
                                <span className="x_val">
                                  {xrayy.report.date}
                                </span>
                              </div>
                              <div>
                                <span className="x_key">Category</span> :{" "}
                                <span className="x_val">
                                  {xrayy.report.category}
                                </span>
                              </div>
                              <div className="val_wrapper">
                                {xrayy.report.data}
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                  );
                })
              ) : (
                <Skeleton active={true}></Skeleton>
              )}
            </Row>
          </Container>
        </Col>
        <Row md={12} sm={12} xs={12} style={{ height: "700px" }}>
        <Col>
            <Container>
              <div
                style={{
                  backgroundColor: "#DCE1F9",
                  outline: "#DCE1F9",
                  height: "90px",
                  width: "500px",
                }}
              >
                <Row>
                  <h4 className="pos1">Appointments</h4>
                </Row>
              </div>
              <Divider></Divider>
              <Row>
                {!loading && appointmentData ? (
                  <>
                    <div className="wrapper">
                      <div
                        style={{ height: 400, marginLeft: "70px" }}
                        className="right_appointment_content"
                      >
                        <Calendar
                          views={["month", "week"]}
                          localizer={localizer}
                          step={60}
                          selectable={true}
                          events={appointmentData}
                        />
                        <div style={{ marginTop: "5px" }}>
                          <button
                            className="type1"
                            style={{ marginTop: "2px" }}
                          >
                            Add Appointment
                          </button>
                          <button
                            className="type1"
                            style={{ marginTop: "1px" }}
                          >
                            Add Remainder
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Skeleton active={true}></Skeleton>
                )}
              </Row>
            </Container>
            </Col>
        </Row>
      
      </Row>
    </>
  );
}
