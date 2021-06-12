import React, { Component } from 'react'
// import './Login.css';
import { Container, Row, Col } from 'reactstrap';
import LoginProto from '../../assests/loginProto.svg';
import facebookLogo from '../../assests/facebookLogo.svg'
import googleLogo from '../../assests/googleLogo.svg';
import {Link} from 'react-router-dom';

class SignUpTwo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="login_wrapper">
                <div className="left_content">
                    <div className="header_absolute">
                        <div>
                        Already have an account?
                            </div>
                            <Link to="/"><button className="outlined">Sign In</button></Link>
                    </div>
                    <img src={LoginProto}></img>
                </div>
                <div className="right_content">
                    <div className="signuptext">Create your Account</div>
                    <div className="signin_form">
                        <form onSubmit={(e)=>{e.preventDefault();
                        console.log(e)}}>
                            <input className="outline_def" id="userName" placeholder="username"></input>
                            <input className="outline_def" id="email" placeholder="email"></input>
                            <input className="outline_def" id="contact" placeholder="contact"></input>
                            <Link to="/signup/3"><button className="filled" style={{width:"100%"}}>Next</button></Link>
                        </form>
                    </div>
                    <div className="other_opts">
                        <div>
                        - or Sign Up with -
                         </div>
                         <div className="other_opts_opts" >
                            <div className="google_opt" tabIndex={1}> 
                                <img src={googleLogo}></img>
                                <div>Google</div>
                            </div>
                            <div className="facebook_opt" tabIndex={1}>
                                <img src={facebookLogo}>
                                </img>
                                <div>
                                Facebook
                                    </div>
                            </div>
                         </div>
                    </div>
                    <div className="small_screen_signup">
                            Already have an account? <Link to="/"><u>Sign In</u></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpTwo;