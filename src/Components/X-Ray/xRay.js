import React, { Component } from "react";
import { axiosInstance } from "../../utils/axiosInterceptor";
import { Container, Row, Col } from "react-bootstrap";
import { Skeleton, Divider } from "antd";
import "./xRay.css";
import axios from "axios";

var config = {
  method: "get",
  url: "https://maivrikdoc.herokuapp.com/api/xrays/3",
  headers: {
    Authorization: "Basic S2FydGlrMTIzOjEyMw==",
  },
};

export default class XRay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xRayData: null,
      loading: false,
    };
  }
  fetchXray(patientId) {
    this.setState({
      ...this.state,
      loading: true,
    });

    axiosInstance
      .get(`/xrays/${patientId}`)
      .then((resp) => {
        console.log(resp.data);
        this.setState({
          ...this.state,
          loading: false,
          xRayData: resp.data,
        });
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          loading: false,
        });
      });
  }
  componentDidMount() {
    let patient_id = localStorage.getItem("patient_id");
    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.fetchXray(patient_id);
  }
  render() {
    return (
      <Container>
        <Row>
          <h4>X-RAY's/SCAN's</h4>
        </Row>
        <Divider></Divider>
        <Row>
          {!this.state.loading && this.state.xRayData ? (
            this.state.xRayData.map((report) => {
              return (
                <Col md={4} sm={6} xs={12}>
                  <div className="xRay_card">
                    <div className="card_left">
                      {/* <img src={report.image}></img> */}
                      <img
                        src={`https://images-na.ssl-images-amazon.com/images/I/71eq9Xhwb1L.png`}
                        style={{
                          width: "150px",
                          height: "100%",
                          marginRight: "30px",
                        }}
                      ></img>
                    </div>
                    <div className="card_right">
                      <h3>X-RAY</h3>
                      <div>X-Ray Id : {report.report.id}</div>
                      <div>Date : {report.report.date}</div>
                      <div>Category : Legs</div>
                      <button
                        className="filled"
                        style={{ width: "80px", marginTop: "15px" }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </Col>
              );
            })
          ) : (
            <Skeleton active={true}></Skeleton>
          )}
        </Row>
      </Container>
    );
  }
}
