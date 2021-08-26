import React, { Component } from "react";
import { axiosInstance } from "../../utils/axiosInterceptor";
import TableComponent from "../TableComponent/TableComponent.js";
import {Skeleton} from "antd";
import "./Dhome.css";

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
              opts:'Click Me'
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
