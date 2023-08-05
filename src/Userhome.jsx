import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from 'react-bootstrap';
import './userhome.css';
import { Navigate, useNavigate } from "react-router-dom";
import Container from "./Container";
import Profile from "./Profile";
let Userhome = () => {
  
    let navigate = useNavigate();
    return (
        <React.Fragment>
            <div className="wrapp">
                <div className="topnav">
                    <nav className='navbar navbar-expand-lg ' >
                        <div className="container-fluid">
                            <div className="logo">
                                <a href="/"> <img src="images/job2.jpg" width="100" height="30" alt="" /></a>
                            </div>
                            {/* <div className="h3">InterView pro</div> */}
                            <div className="navitem">
                                <span>

                                    <span> <i class="fa fa-user-circle-o" aria-hidden="true"></i></span>

                                </span>
                                <span>
                                    <span>
                                        <div className="andr">

                                            <NavDropdown title="Vipul Sharma" id="navbarDropdown">
                                                <NavDropdown.Item className="dd" href="#">My Profile</NavDropdown.Item>
                                                <NavDropdown.Item className="dd" href="#">Account Settings</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item className="dd" href="#">Sign Out</NavDropdown.Item>
                                            </NavDropdown>
                                        </div>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </nav>
                    {/* <hr className="navkiline" /> */}
                </div>
               
                <div className="con">
                    {/* <Profile/> */}
                <Container/>
                </div>
               <div className="sidebar">
                    <div className="dashboard">
                        <span className="icon"><i class="fa fa-tachometer" aria-hidden="true"></i></span>
                        <span className="title active" href="/">Dashboard</span>
                    </div>
                    <hr />
                    <span>
                        <ul>
                            <li><a href="/userhome/profile">
                                <span className="icon"><i class="fa fa-user" aria-hidden="true"></i></span>
                              <a>  <span className="title" >Profile</span></a>
                            </a></li>
                            <li><a href="/userhome">
                                <span className="icon"><i class="fa fa-code" aria-hidden="true"></i></span>
                              <a href="/userhome">  <span className="title" >code</span></a>
                            </a></li>
                            <li><a href="/userhome">
                                <span className="icon"><i class="fa fa-align-left" aria-hidden="true"></i></span>
                             <a href="/userhome">   <span className="title" >Mock Test</span></a>
                            </a></li>
                            <li><a href="/userhome">
                                <span className="icon"><i class="fa fa-credit-card" aria-hidden="true"></i></span>
                                <span className="title" >Transactions</span>
                            </a></li>
                            <li><a href="/userhome">
                                <span className="icon"><i class="fa fa-sign-out" aria-hidden="true"></i></span>
                               <a href="/"> <span className="title" >Log Out</span></a>
                            </a></li>
                        </ul>
                    </span>
                </div>
            
              
               
            </div>
        </React.Fragment>
    )
}
export default Userhome;