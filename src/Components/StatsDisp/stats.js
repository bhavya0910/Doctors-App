import React, { Component } from 'react'
import './stats.css';
import {Container,Col,Row} from 'reactstrap';
class Stats extends Component {
    render() {
        return (
            <Container className="stats_wrapper">
                <Row>
                <Col md="3" sm={6} style={{marginBottom:'20px'}}><div className="m_card"><div className="stat_name">Patients</div><div className="stat_val">60</div></div></Col>
                <Col md="3" sm={6} style={{marginBottom:'20px'}}><div className="m_card"><div className="stat_name">Appointments</div><div className="stat_val">16</div></div></Col>
                <Col md="3" sm={6} style={{marginBottom:'20px'}}><div className="m_card"><div className="stat_name">Schedule</div><div className="stat_val">43</div></div></Col>
                <Col md="3" sm={6} style={{marginBottom:'20px'}}><div className="m_card"><div className="stat_name">Connections</div><div className="stat_val">64</div></div></Col>
                </Row>
              
            </Container>
        )
    }
}

export default Stats;