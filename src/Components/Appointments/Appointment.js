import React, { Component } from "react";
import moment from "moment";
import { Calendar, momentLocalizer,Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './Appointment.css';
import { axiosInstance } from "../../utils/axiosInterceptor";
import {Skeleton,Divider} from 'antd';
var basic = require('basic-authorization-header');

const localizer = momentLocalizer(moment);

class Appointment extends Component {
  constructor(props){
    super(props);
    this.state={
      loading:false,
      appointmentData:null
    }
  }
  componentDidMount(){
    this.setState({
      ...this.state,loading:true
    });
    axiosInstance.get('/getappointment').then((resp)=>{
      let appointments=[];
      let arr=resp.data;
      console.log(arr);
      for(let i=0;i<arr.size();++i){
        let date=arr[i].date;
        let array=date.toString().split['_'];

        appointments.push(
          {
            'title': arr[i].id,
            'start': new Date(array[0], array[1], array[2], 0, 0, 0),
            'end': new Date(array[0], array[1], array[2], 0, 0, 0)
          }
        );
      }
      this.setState({
        ...this.state,loading:false,appointmentData:appointments
      });
    })
    .catch((err)=>{
      this.setState({
        ...this.state,loading:false
      })
    })
  }
  render() {
    console.log(this.state.appointmentData);
    return (
        this.state.loading?(
          <Skeleton active={true}></Skeleton>
        ):(<div className="wrapper">
        <div className="left_appointment_content">
          <button className="type1">Add Appointments</button>
          </div>
        <div style={{ height: 700 }} className="right_appointment_content">
          
          <Calendar
            views={['month', 'week']}
            localizer={localizer}
            step={60}
            onSelectSlot={(e)=>{console.log(e)}}
            selectable={true}
            events={this.state.appointmentData}           
          />
        </div>
      </div>)
      
     
    );
  }
}
export default Appointment;
