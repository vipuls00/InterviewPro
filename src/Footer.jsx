import React, { useState } from "react";
import './footer.css'
let Footer = () => {
    const [data, setData] = useState([
        { name: 'Jane Smith', body: 'The staff here is really supportive, teachers are great, the school has a good structure. Thank you!' },
        { name: 'Peter McMillan', body: 'I am really enjoying my experience here. Teachers are very friendly and there is a friendly atmosphere.' },
        { name: 'Kate Wilson', body: 'I like that it has a busy atmosphere but it’s never stressful. Everyone is very nice and you can ask anything at any time.' },
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    return (
        <React.Fragment>
            <div className="hello">
                <div className="main">
                    <div className="leftii">
                        <div className="imga">
                        <a href="/"> <img src="images/job2.jpg" width="100" height="30" alt="" /></a>
                        </div>
                    </div>
                    <div className="rightii">
                        <div className="left">
                            <div class="card-group">
                                <div class="card">
                                    <div className="fir">
                                        <div className="h3">100+ Satisfied Students</div>
                                    </div>
                                    <div className="sec">
                                        <span className="h1">66</span>
                                        <div className="secc">
                                            <p className="body">{data[currentIndex].body}</p>
                                            <div className="arrow">
                                                <div className="pehlarrow">
                                                    <i onClick={handlePrevCard} className="fa fa-arrow-left" aria-hidden="true"></i>
                                                </div>
                                                <div className="pehlarrow">
                                                    <i onClick={handleNextCard} className="fa fa-arrow-right" aria-hidden="true"></i>
                                                </div>
                                                <div className="nam">{data[currentIndex].name}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <span className="up">
                                {/* <div className="heading">GET IN TOUCH</div>
                                <div className="body">
                                    <a href="#register">   <div className="h6">Send a Message</div></a>
                                    <a href="#register"> <div className="h6"> Contacts</div></a>
                                    <a href="#register"> <div className="h6">Request a Callback</div></a>

                                </div> */}
                            </span>
                            <span className="down">
                                {/* <a href="https://www.instagram.com/"> <i class="fa fa-instagram" aria-hidden="true"></i> </a>
                                <a href="#register"> <i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                                <a href="https://www.youtube.com/"><i class="fa fa-youtube-play" aria-hidden="true"></i> </a> */}
                            </span>
                        </div>
                    </div>

                </div>
                <hr />
                {/* <div className="container"> */}
                <div className="h5">©  2023 InterviewPro. All rights reserved.</div>

                {/* </div> */}
            </div>

        </React.Fragment>
    );
}
export default Footer;