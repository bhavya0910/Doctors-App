import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import {axiosInstance} from '../../utils/axiosInterceptor';
import {Skeleton,Divider} from 'antd';
import './CheckUpHistory.css';

export default class CheckUpHistory extends Component {
    constructor(props){
        super(props);
        this.state={
            reports:null,
            loading:false,
        }
    }
    fetchReports(patient_id){
        this.setState({
            ...this.state,loading:true,
        });
        axiosInstance.get(`/reports/${patient_id}`).then((res)=>{
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
        this.fetchReports(patient_id);
    }
    render() {
        console.log(this.state);
        return (
            <Container>
                <Row>
                    <h4>
                        CheckUp History
                    </h4>
                </Row>
                <Divider></Divider>
                <Row>
                {
                    (!this.state.loading&&this.state.reports)?(
                        this.state.reports.map((report)=>{
                     
                        return(
                            <Col md={4} sm={6} xs={12}>
                            <div className="card">
                                <div className="rep_date">
                                    DATE : {report.date}
                                </div>
                                <div className="rep_data">
                                    {report.data}
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
