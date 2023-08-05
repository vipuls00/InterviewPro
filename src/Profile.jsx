import React from "react";
import './Profile.css';
let Profile = () => {
    return (
        <React.Fragment>
            <div className="wraper">
                {/* <div className="h3">Profile</div> */}
                <div className="dusra">
                    <div class="row">
                              <div className="h3">Profile</div>
                        <div class="col-sm-4 ">
                            <div class="card shadow-lg">
                                
                                <div class="card-body">
                                   <div className="h1">
                                   <div className="prof"> <i class="fa fa-user-circle-o" aria-hidden="true"></i></div>
                                        <div className="h3">Vipul Sharma</div>
                                        <div className="links">
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                                        <i class="fa fa-github" aria-hidden="true"></i>
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card">
                                <div class="card-body">
                                    <div className="headi">
                                            <div className="heads">
                                          <a href="">  <div className="h5">Overview</div></a>
                                           
                                           <a href=""> <div className="h5">Edit Profile</div></a>
                                            </div>
                                           
                                    </div>
                                     <hr />
                                      {/* overview */}
                                      <div className="h4">About</div>
                                      <div className="about">
                                      <div className="h5">Profile Details</div>
                                       <div className="ab">
                                       
                                            <div className="que">
                                                    <div className="h7">Full Name</div>
                                                    <div className="h7">Phone</div>
                                                    <div className="h7">Email</div>
                                                    <div className="h7">Country</div>
                                                    <div className="h7">Qualification</div>
                                            </div>
                                            <div className="ans">
                                                     <div className="h6">Vipul Sharma</div>
                                                    <div className="h6">8269575176</div>
                                                    <div className="h6">vipulsharma75592gmail.com</div>
                                                    <div className="h6">India</div>
                                                    <div className="h6">B-tech</div>
                                            </div>
                                        </div>
                                      </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}
export default Profile;