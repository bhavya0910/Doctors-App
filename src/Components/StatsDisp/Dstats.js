import React, { Component } from "react";
import "./stats.css";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Documents from "../../assests/document.svg";
import Prescriptions from "../../assests/prescription.svg";
import appointment from "../../assests/appointment.svg";
import Profile from '../../assests/profile.svg';

class Dstats extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.activeMenuItem);
    return (
      <Container className="stats_wrapper">
        <Row>
          <Col md="3" sm={6} style={{ marginBottom: "20px" }}>
            <Link to="/">
              <div
                onClick={() => {
                  this.props.setActiveMenu(1);
                }}
                className={
                  this.props.activeMenuItem == 1
                    ? "m_card card_active"
                    : "m_card"
                }
              >
                <div className="stat_name">Patients</div>
                <div className="stat_val">
                    {''}
                   <h4>60</h4>
                </div>
              </div>
            </Link>
          </Col>
          <Col md="3" sm={6} style={{ marginBottom: "20px" }}>
            <Link to="/Dappointments">
              <div
                onClick={() => {
                  this.props.setActiveMenu(2);
                }}
                className={
                  this.props.activeMenuItem == 2
                    ? "m_card card_active"
                    : "m_card"
                }
              >
                <div className="stat_name">Appointments</div>
                <div className="stat_val">
                <h4>16</h4>
                </div>
              </div>
            </Link>
          </Col>
          <Col md="3" sm={6} style={{ marginBottom: "20px" }}>
            <Link to="/schedule">
              <div
                onClick={() => {
                  this.props.setActiveMenu(3);
                }}
                className={
                  this.props.activeMenuItem == 3
                    ? "m_card card_active"
                    : "m_card"
                }
              >
                <div className="stat_name">Schedule</div>
                <div className="stat_val">
                <h4>43</h4>
                </div>
              </div>
            </Link>
          </Col>
          <Col md="3" sm={6} style={{ marginBottom: "20px" }}>
          <Link to="/connections">
            <div
              className={
                this.props.activeMenuItem == 4 ? "m_card card_active" : "m_card"
              }
              onClick={() => {
                this.props.setActiveMenu(4);
              }}
            >
              <div className="stat_name">Connections</div>
              <div className="stat_val">
              <h4>64</h4>
              </div>
            </div>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dstats;
