import React, { Component } from "react";
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
export default Appointment;