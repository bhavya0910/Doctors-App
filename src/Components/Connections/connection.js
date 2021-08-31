import React, { Component } from "react";
import { axiosInstance } from "../../utils/axiosInterceptor";
import TableComponent from "../TableComponent/TableComponent.js";
import {Skeleton} from "antd";
import "./connections.css";

class Connections extends Component {
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
      width: '2%',
      dataIndex: 'https://st2.depositphotos.com/4226061/9064/v/950/depositphotos_90647784-stock-illustration-male-doctor-avatar-icon.jpg',
      render:  () => <img src={`https://st2.depositphotos.com/4226061/9064/v/950/depositphotos_90647784-stock-illustration-male-doctor-avatar-icon.jpg`} style ={{width:"50px", height:"50px"}} />
},
    {
      title: "Ticket Details",
      dataIndex: "ticket",
      key: "ticket",
    },
    {
      title: "Specialist",
      dataIndex: "Specialist",
      key: "Specialist",
    },
    
  ];

  fetchVillageList = () => {
    this.setState({ ...this.state, loading: true });
    axiosInstance
      .get(`/doctors`)
      .then((res) => {
        console.log(res.data);
        let response=res.data;
        let vilData=[];
        let n=response.length;
        for(let i=0;i<n;++i){
          vilData.push(
            {
              key: i+1,
              ticket: response[i].user.name,
              Specialist: 'orthologist'
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

export default Connections;
