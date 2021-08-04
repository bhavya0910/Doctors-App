import React, { Component } from "react";
import "./stats.css";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Documents from "../../assests/document.svg";
import Prescriptions from "../../assests/prescription.svg";
import Appointment from "../../assests/appointment.svg";
import Profile from '../../assests/profile.svg';

class Stats extends Component {
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
                <div className="stat_name">Profile</div>
                <div className="stat_val">
                    <img src={Profile}></img>
                </div>
              </div>
            </Link>
          </Col>
          <Col md="3" sm={6} style={{ marginBottom: "20px" }}>
            <Link to="/appointment">
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
                  <img src={Appointment} style={{width:'18px'}}></img>
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
                <div className="stat_name">Prescriptions</div>
                <div className="stat_val">
                  <img src={Prescriptions}></img>
                </div>
              </div>
            </Link>
          </Col>
          <Col md="3" sm={6} style={{ marginBottom: "20px" }}>
            <div
              className={
                this.props.activeMenuItem == 4 ? "m_card card_active" : "m_card"
              }
            >
              <div className="stat_name">Documents</div>
              <div className="stat_val">
                <img src={Documents}></img>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Stats;
