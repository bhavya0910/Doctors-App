import React, { Component } from "react";
import { axiosInstance } from "../../utils/axiosInterceptor";
import TableComponent from "../TableComponent/TableComponent.js";
import {Skeleton} from "antd";
import {Link} from 'react-router-dom';
import "./Dhome.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
  Redirect,
} from "react-router-dom";

import CheckUpHistory from "../PatientComponents/CheckUpHistory";

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
     
      title: '',
      width: '1%',
      dataIndex: 'data:image/png;base64,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',
      render:  () => <img src={`data:image/png;base64,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`} style ={{width:"50px", height:"50px"}} />
},
    {
      title: "Ticket Details",
      dataIndex: "ticket",
      key: "ticket",
    },
    {
      title: "Last Appointment",
      dataIndex: "last_appointment",
      key: "last_appointment",
    },
    {
      title: "New Appointment",
      dataIndex: "new_appointment",
      key: "new_appointment",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
    },
    {
      title: "",
      dataIndex: "opts",
      key: "opts",
      render:(patientId)=>{
        return (
          <Link to={`/patientProfile/${patientId}`}>Profile</Link>
        );  
      }
    },
  ];

  fetchVillageList = () => {
    this.setState({ ...this.state, loading: true });
    axiosInstance
      .get(`/patients`)
      .then((res) => {
        console.log(res.data.results);
        let response=res.data.results;
        let vilData=[];
        let n=response.length;
        for(let i=0;i<n;++i){
          vilData.push(
            {
              key: i+1,
              ticket: response[i].user.name,
              last_appointment: 'Parso',
              new_appointment: 'Kal',
              priority:response[i].problem,
              opts:response[i].user.id
            }
          );
        }
        this.setState({
          ...this.state,
          villageData: vilData,
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
        {this.state.loading ? (
          <Skeleton active={true}></Skeleton>
        ) : (
          <>
            <div className="header_c">Patients</div>
            <TableComponent
              dataSource={this.state.villageData}
              columns={this.columns}
            ></TableComponent>
            
          </>
        )}
      </div>
    );
  }
}

export default Dhome;