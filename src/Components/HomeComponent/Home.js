import { Tab } from '@material-ui/core';
import React, { Component } from 'react'
import TableComponent from '../TableComponent/TableComponent.js';

class Home extends Component {
    dataSource= [
        {
         key: '1',
         ticket:'Yuvraj Mann',
         last_appointment:'12/11/2013 6:30',
         new_appointment:'13/11/2015 5:30',
         priority:"High"
        },
        {
            key: '2',
            ticket:'Yuvraj Mann',
            last_appointment:'12/11/2013 6:30',
            new_appointment:'13/11/2015 5:30',
            priority:"High"
           },
           {
            key: '3',
            ticket:'Yuvraj Mann',
            last_appointment:'12/11/2013 6:30',
            new_appointment:'13/11/2015 5:30',
            priority:"Normal"
           },
           {
            key: '4',
            ticket:'Yuvraj Mann',
            last_appointment:'12/11/2013 6:30',
            new_appointment:'13/11/2015 5:30',
            priority:"High"
           },
           {
            key: '5',
            ticket:'Yuvraj Mann',
            last_appointment:'12/11/2013 6:30',
            new_appointment:'13/11/2015 5:30',
            priority:"Low"
           },
           {
            key: '1',
            ticket:'Yuvraj Mann',
            last_appointment:'12/11/2013 6:30',
            new_appointment:'13/11/2015 5:30',
            priority:"High"
           },
           {
               key: '2',
               ticket:'Yuvraj Mann',
               last_appointment:'12/11/2013 6:30',
               new_appointment:'13/11/2015 5:30',
               priority:"High"
              },
              {
               key: '3',
               ticket:'Yuvraj Mann',
               last_appointment:'12/11/2013 6:30',
               new_appointment:'13/11/2015 5:30',
               priority:"Normal"
              },
              {
               key: '4',
               ticket:'Yuvraj Mann',
               last_appointment:'12/11/2013 6:30',
               new_appointment:'13/11/2015 5:30',
               priority:"High"
              },
              {
               key: '5',
               ticket:'Yuvraj Mann',
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
            <TableComponent dataSource={this.dataSource} columns={this.columns}></TableComponent>
        )
    }
}

export default Home;