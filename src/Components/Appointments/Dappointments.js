/*import React, { Component } from "react";
import moment from "moment";
import { Calendar, momentLocalizer,Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './Appointment.css';

const localizer = momentLocalizer(moment);

class Appointment extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="left_appointment_content">
          <button className="type1">Add Appointmentss</button>
          
          </div>
        <div style={{ height: 700 }} className="right_appointment_content">
          
          <Calendar
           views={['month', 'week']}
            localizer={localizer}
            step={60}
            onSelectSlot={(e)=>{console.log(e)}}
            selectable={true}
            events={[
              {
                'title': 'Birthday Party',
                'start': new Date(2021, 6, 3, 7, 0, 0),
                'end': new Date(2021, 6, 3, 10, 30, 0)
              },
              {
                'title': 'Birthday Party 2',
                'start': new Date(2021, 6, 3, 13, 0, 0),
                'end': new Date(2021, 6, 3, 15, 30, 0)
              },
              
            ]}
           
          />
        </div>
      </div>
     
    );
  }
}
export default Appointment;*/
import React, { Component } from "react";
import moment from "moment";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'react-responsive-modal/styles.css';
import { Container } from '../../Container/Dindex';
import { axiosInstance } from "../../utils/axiosInterceptor";
import {Skeleton,Divider} from 'antd';
import axios from 'axios';
const localizer = momentLocalizer(moment);
var basic = require('basic-authorization-header');

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      appointmentData: null,
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
  triggerText = 'Add Appointment';
  onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.date.value);
    console.log(event.target.time.value);
  };
  
  render() {
   
    return (
      <div className="wrapper">
        {this.state.loading|| !this.state.appointmentData ? (
          <Skeleton active={true}></Skeleton>
        ) : (
          <>
            <div className="left_appointment_content">
            <Container  className="type1" style={{color:'#DCE1F9'}} triggerText={this.triggerText} onSubmit={this.onSubmit} />
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
