import React, { Component } from "react";
import moment from "moment";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Schedule.css";
import { axiosInstance } from "../../utils/axiosInterceptor";
import {Skeleton,Divider} from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
//import Button from '@mui/material/Button';
import {Form} from "../../Form/index";

import { Modal, Button } from 'antd';
import 'react-responsive-modal/styles.css';


const localizer = momentLocalizer(moment);
var basic = require('basic-authorization-header');

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      appointmentData: null,
      isModalVisible : false,
      open : false,
    };
  }
  componentDidMount() {
    this.setState({
      ...this.state,
      loading: true,
    });
    let username=localStorage.getItem('username');
    let password=localStorage.getItem('password');
    let auth_basic= Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
    var config = {
      method: 'get',
      url: 'https://maivrikdoc.herokuapp.com/api/getappointment',
      headers: { 
        'Authorization':`Basic ${auth_basic}` 
      }
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
          let array = date.toString().split('-');
          console.log(array);
          if(array){
            appointments.push({
              title: arr[i].id,
              start: new Date(array[0], array[1], array[2], 0, 0, 0),
              end: new Date(array[0], array[1], array[2], 0, 0, 0),
            });
          }  
        }
        this.setState({
          ...this.state,
          loading: false,
          appointmentData: appointments,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          ...this.state,
          loading: false,
        });
      });
  }
  
 
   handleClickOpen = () => {
    this.setState({ ...this.state, open: true });
  };

   handleClose = () => {
    this.setState({ ...this.state, open: false });
  };
  showModal = () => {
    this.setState({ ...this.state, isModalVisible: true });
  };

   handleOk = () => {
    this.setState({ ...this.state, isModalVisible: false });
  };

  handleCancel = () => {
    this.setState({ ...this.state, isModalVisible: false });
  };

  
  render() {
   
    return (
      <div className="wrapper">
        {this.state.loading|| !this.state.appointmentData ? (
          <Skeleton active={true}></Skeleton>
        ) : (
          <>
            <div className="left_appointment_content">
           {/* <Container  className="type1" style={{color:'#DCE1F9'}} triggerText={this.triggerText} onSubmit={this.onSubmit} />*/}
           <>
      <Button className="type1"  onClick={this.showModal}>
        Ask For Appointment
      </Button>
      <Modal  visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} footer={null}>
        <Form />
      </Modal>
    </>
      
              
              <button className="type1">Add Remainder</button>
             
            </div>
            <div style={{ height: 700 }} className="right_appointment_content">
              <Calendar
                views={["month", "week"]}
                localizer={localizer}
                step={60}
              
                selectable={true}
                events={this.state.appointmentData}
              />
            </div>
          </>
        )}
      </div>
    );
  }
}
export default Appointment;

