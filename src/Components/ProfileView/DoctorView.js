import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../utils/axiosInterceptor";
import "./ProfileView.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Skeleton, Avatar, message } from "antd";
import { Spinner } from "react-bootstrap";
// import FileDroper from './FileDroper';

export default function ProfileView() {
  const [profileInfo, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
const [image,setimage] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [updatedPic, setPic] = useState(null);
  const [imgUrl, setUrl] = useState(null);

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

  let fetchProfile = () => {
    setLoading(true);
    let Doctor_id = localStorage.getItem("Doctor_id");
    axiosInstance
      .get(`/doctor/${Doctor_id}`)
      .then((profile) => {
        console.log(profile);
        setProfile(profile);
        setName(profile.data.user.name);
        setUsername(profile.data.user.username);
        setAge(profile.data.user.age);
        setAddress(profile.data.user.address);
        setState(profile.data.user.state);
        setPhone(profile.data.user.phone_number);
        setEmail(profile.data.user.email);
setimage(profile.data.user.image);
        setUrl(`${profile.data.user.image}`);
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
      .put(`/user/${patient_id}`,{
          name:name,
          age:age,
          state:state,
          email:email,
          address:address,
          phone_number:phone,
          image:image,
         
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
                    style={{ width: "250px", height: "250px" }}
                    src={`https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop`}
                  />
                ) : (
                  <Avatar></Avatar>
                )}

                {/* <FileDroper uploadFile={uploadFile}></FileDroper> */}
              </Col>
              <Col md={8} sm={12} className="rightProfile_wrapper">
                <form className="prof_edit_form" >
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
                  <div className="m_form_item">
                    <h6>Specialist of</h6>
                    <input
                      value={name}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      
                      className="outline_def"
                      type="phone_number"
                      id="phone_number"
                      style={{ width: "100%" }}
                    ></input>
                  </div>
                  <div className="m_form_item">
                    <br ></br>
                    <input
                      value= "Add Label"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      className="outline_def"
                      
                      style={{ width: "100%" }}
                    ></input>
                  </div>

                  <div className="button_opts">
                    <button className="filled" onClick={handleSubmit}>
                     
                      <span style={{paddingRight:'5px'}}>Save Changes</span>
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
                    <button className="filled" onClick={(e)=>{
                        e.preventDefault();
                          setName(profileInfo.data.user.name);
                          setUsername(profileInfo.data.user.username);
                          setAge(profileInfo.data.user.age);
                          setAddress(profileInfo.data.user.address);
                          setPhone(profileInfo.data.user.phone_number);
                          setEmail(profileInfo.data.user.email);
                    }}>
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
    </>
  );
        }