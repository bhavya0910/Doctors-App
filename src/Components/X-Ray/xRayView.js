import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import BackArrow from "../../assests/back_arrow.svg";
import "./xRay.css";
import {Link} from 'react-router-dom';

export default function XRayView(props) {
  useEffect(()=>{
    // let xRayId=props.history.location.pathname.toString.split('/');
  },[]);
  return (
    <Container>
      <Row>
        <div className="header_xrayView">
          <Link to="/xRays">
          <img src={BackArrow} style={{ width: "40px",cursor:'pointer' }}></img>
        </Link>
          <div className="name_head">X-RAY</div>
          <div></div>
        </div>
      </Row>
      <Row>
        <Col sm={12} md={5}>
          <img
            src={`https://images-na.ssl-images-amazon.com/images/I/71eq9Xhwb1L.png`}
            style={{
              width: "100%",
              height: "100%",
              marginRight: "30px",
            }}
          ></img>
        </Col>
        <Col sm={12} md={7}>
          <div>
            <div>X-RAY ID:</div>
            <div>DATE:</div>
            <div>TIME:</div>
            <div>CATEGORY:</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
