import React from "react";
import './services.css';
let Servies = () => {
    return (
        <React.Fragment>
            <div className="main">
                <div className="container2">
                    <div className="head">
                        <div className="h3">SERVICES WE OFFER</div>
                        <button type="btn"  className="button">SEE ALL</button>
                    </div>
                    <div className="right">
                        <div class="card-group">
                            <div class="card">
                                <div class="card-body">
                                    <a href="#register" className="h2">Front End Interviews
                                    </a>
                                    <div className="h6">  $35</div>
                                    <div className="h6">Price per lesson</div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <a href="#register" className="h2">Back End Interviews
                                    </a>
                                    <div className="h6">  $35</div>
                                    <div className="h6">Price per lesson</div>
                                </div>
                            </div>
                        </div>
                        <div class="card-group">
                            <div class="card">
                                <div class="card-body">
                                    <a href="#register" className="h2">DSA Interviews
                                    </a>
                                    <div className="h6">  $17</div>
                                    <div className="h6">Price per lesson</div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <a href="#register" className="h2">Full Stack Interviews
                                    </a>
                                    <div className="h6">  $40</div>
                                    <div className="h6">Price per lesson</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="cardnichhe">
                <div className="card">
                    <div className="card-body">
                        <div className="h4">LOTS OF HAPPY CANDIDATES</div>
                    </div>
                    <div className="cardBODY">
                        <div className="h5">We have over a hundred students</div>
                    </div>
                    <div className="btn">
                        <span className="d"><button type="btn" className="button">2</button></span>
                        <span className="d"><button type="btn" className="button">5</button></span>
                        <span className="d"><button type="btn" className="button">0</button></span>

                    </div>
                </div>
                </div>
            </div>


        </React.Fragment>
    );
}
export default Servies;