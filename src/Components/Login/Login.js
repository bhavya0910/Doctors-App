import React, { Component } from 'react'
import './Login.css';
import { Container, Row, Col } from 'reactstrap';
import LoginProto from '../../assests/loginProto.svg';
import facebookLogo from '../../assests/facebookLogo.svg'
import googleLogo from '../../assests/googleLogo.svg';
class Login extends Component {
    render() {
        return (
            <div className="login_wrapper">
                <div className="left_content">
                    <div className="header_absolute">
                        <div>
                        Don't have an account?
                            </div>
                        <button className="outlined">Sign Up</button>
                    </div>
                    <img src={LoginProto}></img>
                </div>
                <div className="right_content">
                    <div className="signuptext">Sign in to your Account</div>
                    <div className="signin_form">
                        <form>
                            <input className="outline_def" placeholder="username"></input>
                            <input className="outline_def" placeholder="password" type="password"></input>
                            <button className="filled">Sign In</button>
                        </form>
                    </div>
                    <div className="other_opts">
                        <div>
                        - or Sign In with -
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
                </div>
            </div>
        )
    }
}

export default Login;