import React, { Component } from 'react'
import TableComponent from '../TableComponent/TableComponent.js';
import './Dhome.css';
export default class connections extends Component {
    dataSource= [
        {
         key: '1',
         ticket:'Patient 1',
         last_appointment:'12/11/2013 6:30',
         new_appointment:'13/11/2015 5:30',
         priority:"High"
        },
        {
            key: '2',
            ticket:'Patient 2',
            last_appointment:'12/11/2013 6:30',
            new_appointment:'13/11/2015 5:30',
            priority:"High"
           },
           {
            key: '3',
            ticket:'Patient 3',
            last_appointment:'12/11/2013 6:30',
            new_appointment:'13/11/2015 5:30',
            priority:"Normal"
           },
           {
            key: '4',
            ticket:'Patient 4',
            last_appointment:'12/11/2013 6:30',
            new_appointment:'13/11/2015 5:30',
            priority:"High"
           },
           {
            key: '5',
            ticket:'Patient 5',
            last_appointment:'12/11/2013 6:30',
            new_appointment:'13/11/2015 5:30',
            priority:"Low"
           },
           {
            key: '6',
            ticket:'Patient 6',
            last_appointment:'12/11/2013 6:30',
            new_appointment:'13/11/2015 5:30',
            priority:"High"
           },
           {
               key: '7',
               ticket:'Patient 7',
               last_appointment:'12/11/2013 6:30',
               new_appointment:'13/11/2015 5:30',
               priority:"High"
              },
              {
               key: '8',
               ticket:'Patient 8',
               last_appointment:'12/11/2013 6:30',
               new_appointment:'13/11/2015 5:30',
               priority:"Normal"
              },
              {
               key: '9',
               ticket:'Patient 9',
               last_appointment:'12/11/2013 6:30',
               new_appointment:'13/11/2015 5:30',
               priority:"High"
              },
              {
               key: '10',
               ticket:'Patient 10',
               last_appointment:'12/11/2013 6:30',
               new_appointment:'13/11/2015 5:30',
               priority:"Low"
              },
      ];

    columns=[
        {
          title: 'Ticket Details',
          dataIndex: 'ticket',
          key: 'ticket',
        },
        {
          title: 'Last Appointment',
          dataIndex: 'last_appointment',
          key: 'last_appointment',
        },
        {
          title: 'New Appointment',
          dataIndex: 'new_appointment',
          key: 'new_appointment',
        },
        {
            title: 'Priority',
            dataIndex: 'priority',
            key: 'priority',
          },
          {
            title: '',
            dataIndex: 'opts',
            key: 'opts',
          },
      ];
    render() {
        return (
            <div className="connections_wrapper">
                <div className="header_c">Patients</div>
                  <TableComponent dataSource={this.dataSource} columns={this.columns}></TableComponent>
            </div>
        )
    }
}