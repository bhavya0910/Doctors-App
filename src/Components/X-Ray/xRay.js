import React, { Component } from "react";
import { axiosInstance } from "../../utils/axiosInterceptor";
import { Container, Row, Col } from "react-bootstrap";
import { Skeleton, Divider } from "antd";
import { Link } from "react-router-dom";
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
                <Col md={12} sm={12} xs={12}>
                  <Container className="xRay_card">
                    <Row>
                      <Col md={4}>
                        <div className="card_left">
                          {/* <img src={report.image}></img> */}
                          <img
                            src={`https://images-na.ssl-images-amazon.com/images/I/71eq9Xhwb1L.png`}
                            style={{
                              width: "100%",
                             maxHeight: "200px",
                             maxWidth:"200px",
                              marginRight: "30px",
                            }}
                          ></img>
                        </div>
                      </Col>
                      <Col md={8}>
                        <div className="card_right">
                          <h3>X-RAY</h3>
                          <div><span className="x_key">X-Ray Id</span> : <span className="x_val">{report.report.id}</span></div>
                          <div><span className="x_key">Date</span> : <span className="x_val">{report.report.date}</span></div>
                          <div><span className="x_key">Category</span> : <span className="x_val">{report.report.category}</span></div>
                          <div className="val_wrapper">
                            {report.report.data}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
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
