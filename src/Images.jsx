import React from "react";
import './images.css';
let Images = () => {
    return (
        <React.Fragment>
            <div class="card-columns">
                <div className="left">
                    <div className="head">
                        <div className="h3">OUR GALLERY</div>

                    </div>
                    <div class="card">
                        <div className="img">
                            <img src="images/img1.jpg" className="card-img-top" alt="Card image cap" />
                        </div>
                        <div className="imgbahr">
                            <div className="img">
                                <img src="images/img1.jpg" className="card-img-top" alt="Card image cap" />
                            </div>
                            <div className="img">
                                <img src="images/img1.jpg" className="card-img-top" alt="Card image cap" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="righti">
                    <div class="card-group">
                        <div class="card">
                            <div class="card-body">
                                <a href="#register">   <div className="h6">Data Structure & Algorithms</div></a>
                                <a href="#register"> <div className="h6"> Backend Role Interview</div></a>
                                <a href="#register"> <div className="h6">Frontend Role Interview</div></a>
                                <a href="#register"> <div className="h6">AWS Certified Role Interview</div></a>
                                <a href="#register"> <div className="h6">Full Stack Role Interview</div></a>
                            </div>
                        </div>
                    </div>
                    <div className="headniche">
                        <div className="h1">WHY CHOOSE US</div>
                       <div className="wrap">
                       <div className="first">
                            <span className="bich"><img src="images/first.png" alt="" /></span>
                            <span className="bich">
                                <div className="h3">Quick Results</div>
                                <div className="h6">Get quick and deatiled anaylsis for your performance.</div>
                                 </span>
                        </div>
                        <div className="first">
                        <span className="bich"><img src="images/second.jpg" alt="" /></span>
                            <span className="bich">
                                <div className="h3">Save Money</div>
                                <div className="h6">We provide best interview preparation services at cheapest rates.</div>
                                 </span>
                        </div>
                        <div className="first">
                        <span className="bich"><img src="images/third.jpg" alt="" /></span>
                            <span className="bich">
                                <div className="h3">Get Support</div>
                                <div className="h6">We provide full support to our candidates to ace their interviews.</div>
                                 </span>
                        </div>
                       </div>
                        
                    </div>
                    
                </div>
              </div>
        </React.Fragment>
    );
}
export default Images;