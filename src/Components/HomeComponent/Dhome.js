/*import React, { Component } from 'react'
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
}*/
/*import React , { Component } from 'react';
import "antd/dist/antd.css";
import { useEffect } from 'react';
import { useState } from 'react';
import { axiosInstance } from "../../utils/axiosInterceptor";
import TableComponent from '../TableComponent/TableComponent.js';
import './Dhome.css';
import { Table } from 'antd';
import { Fullscreen, Height, SettingsSystemDaydreamTwoTone } from '@material-ui/icons';
  
export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);*/
  
  /*let getdata = () => {
    setLoading(true);
   
    axiosInstance
      .get(`/patients`)
      .then((patientlist) => {
        console.log(patientlist);
        //console.log(patientlist.data.result[1]);
        setdata(patientlist.data);
       
      })
      .catch((err) => {
        setLoading(false);
      });
  };*/
 /*let getdata = () => {
    setLoading(true);
   
    axiosInstance
      .get(`/patients`).then(
        res => {
          
          setdata(
            res.data.result.map(row => ({
              Name: row.name,
             
              
            }))
          );
        }
      )
      .catch((err) => {
        setLoading(false);
      });
  };*/
 /* const getdata =  () =>{
    axiosInstance
      .get(`/patients`)
    .then(
     
       res=>{
         console.log(res);
     setdata(  res.data.result.map(row =>({ticket:row.name,last_appointment:row.name ,new_appointment:row.name,priority:row.name,opts:row.name})) )})
    .catch((err) => {
      setLoading(false);
    });
            
}
*/
 
 /* const getdata = () => {
    axiosInstance
    .get(`/patients`).then(
      res => {
        setLoading(false);
        setdata(
          res.data.map(row => ({
            Name: row.name,
           
            
          }))
        );
      }
    );
  };*/
 /* useEffect(() => {
    getdata();
  }, []);*/
    // Sample Data for the table
  /*const  dataSource= [
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
    ];*/
    // Sample Columns data
  /*  const columns = [
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
  
    return (
      <div className="connections_wrapper">
      <div className="header_c">Patients</div>
      <Table dataSource={data} columns={columns} />
  </div>
    );
}*/
import React, { Component } from 'react';




import { axiosInstance } from "../../utils/axiosInterceptor";
import TableComponent from '../TableComponent/TableComponent.js';
import './Dhome.css';




class Dhome extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      villageData: [],
      loading: false,
    };
  }
 columns = [
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
  
  fetchVillageList = () => {
    this.setState({ ...this.state, loading: true });
    axiosInstance
      .get(`/patients`)
      .then((res) => {
        console.log(res.data.results);
        this.setState({
          ...this.state,
          villageData: res.data.results,
        
          loading: false,
       
        });
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          loading: false,
        });
        if (err.response) {
          console.log(err.response);
        } else {
          console.log(err.message);
        }
      });
  };

  componentDidMount() {
    this.setState({ ...this.state, loading: true });
    this.fetchVillageList();
  }

  render() {
   
       return (
        
            <div className="connections_wrapper">
                <div className="header_c">Patients</div>
                  <TableComponent dataSource={this.state.villageData} columns={this.columns} loading={this.state.loading} ></TableComponent>
                  
            </div>
          
        )
       
 
  }
  
}

export default Dhome;
