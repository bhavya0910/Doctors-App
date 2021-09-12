import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import {axiosInstance} from '../../utils/axiosInterceptor';
import {Skeleton,Divider} from 'antd';
import './prescription.css';

export default class prescription extends Component {
    constructor(props){
        super(props);
        this.state={
            reports:null,
            loading:false,
        }
    }

    fetchPrescription(patient_id){
        this.setState({
            ...this.state,loading:true,
        });
        axiosInstance.get(`/prescriptions/${patient_id}`).then((res)=>{
            this.setState({
                ...this.state,reports:res.data,loading:false,
            });
        })
        .catch((err)=>{
            console.log(err);
            this.setState({
                ...this.state,loading:false,
            })
        })
    }
    componentDidMount(){
        let patient_id=localStorage.getItem('patient_id');
        this.fetchPrescription(patient_id);
    }
    renderNode(data){
        let node=[];
        for(let property in data){
            node.push(<div className="list_item">
                <div className="s_no">{property}</div>
                <div className="l_val">{data[property]}</div>
            </div>);
        }
        return node
    }
    render() {
        console.log(this.state);
        return (
            <Container>
                <Row className="header_row">
                    <h4>
                        Prescriptions
                    </h4>
                   
                </Row>
               
                <Row>
                {
                    (!this.state.loading&&this.state.reports)?(
                        this.state.reports.map((report)=>{
                     
                        return(
                            <Col md={6} sm={12} xs={12}>
                            <div className="req_card" style={{height: '200px', width: '500px', marginBottom: '20px',padding:'20px',overflowY:'auto'}}>
                                <div className="rep_date">
                                    DATE : {report.date}
                                </div>
                                <div className="rep_data">
                                    {
                                        this.renderNode(report.details)
                                    }
                                </div>
                            </div>
                        </Col> 
                        )
                      
                        })
                                   
                    ):(
                        <Skeleton active={true}></Skeleton>
                    )
                }
                </Row>
            </Container>
        )
    }
}
