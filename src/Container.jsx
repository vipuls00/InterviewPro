import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, NavDropdown } from 'react-bootstrap';
// import './userhome.css';
let Container = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedValues, setSelectedValues] = useState({
        date: '',
        type: '',
        time: '',
    });

    const changeinput = (event) => {
        const { name, value } = event.target;
        setSelectedValues({ ...selectedValues, [name]: value });
    };

    const handleSubmit = () => {
        // Handle form submission here
    };

    // Check if all options are selected
    const allOptionsSelected = selectedValues.date && selectedValues.type && selectedValues.time;

    const handleClose = () => {
        setShowModal(false);
    };

    const handleShow = () => {
        setShowModal(true);
    };
    const [showModal2, setShowModal2] = useState(false);
    const [selectedValues2, setSelectedValues2] = useState({
        date: '',
        type: '',
        time: '',
    });

    const changeinput2 = (event) => {
        const { name, value } = event.target;
        setSelectedValues2({ ...selectedValues2, [name]: value });
    };

    const handleSubmit2 = () => {
        // Handle form submission here
    };

    // Check if all options are selected
    const allOptionsSelected2 = selectedValues2.date && selectedValues2.type && selectedValues2.time;

    const handleClose2 = () => {
        setShowModal2(false);
    };

    const handleShow2 = () => {
        setShowModal2(true);
    };
    return (
        <React.Fragment>
            <div className="container">
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <div className="h2">Book New Mock Interview</div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="mb-3">
                                <div className="h5">Date</div>
                                <div className="btn btn-secondary ">
                                    <input
                                        type="date"
                                        name="date"
                                        onChange={changeinput}
                                        value={selectedValues.date}
                                        placeholder="Select Date"
                                        className="form-control bg-secondary text-white border-none"
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="h5">Agenda</div>
                                <select
                                    name="type"
                                    type="type"
                                    id=""
                                    placeholder="Select Agenda"
                                    onChange={changeinput}
                                    value={selectedValues.type}
                                    className="form-control bg-secondary text-white"
                                >
                                    <option value="Data Structures and Algorithm">Data Structures and Algorithm</option>
                                    <option value="Frontend Based">Frontend Based</option>
                                    <option value="Full Stack Based">Full Stack Based</option>
                                    <option value="Backend Based">Backend Based</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <div className="h5">Time</div>
                                <select
                                    name="time"
                                    type="Time"
                                    id=""
                                    placeholder="Time"
                                    onChange={changeinput}
                                    value={selectedValues.time}
                                    className="form-control bg-secondary text-white"
                                >
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="01:00 PM">01:00 PM</option>
                                    <option value="03:00 PM">03:00 PM</option>
                                </select>
                            </div>
                        </form>
                    </Modal.Body>
                    {/* Conditional rendering of the Submit button */}
                    {allOptionsSelected && (
                        <Modal.Footer>
                            <div className="btn btn-primary" onClick={handleSubmit}>
                                Submit
                            </div>
                        </Modal.Footer>
                    )}
                </Modal>
                <Modal show={showModal2} onHide={handleClose2}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <div className="h2">Book New Mock Test</div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="mb-3">
                                <div className="h5">Date</div>
                                <div className="btn btn-secondary ">
                                    <input
                                        type="date"
                                        name="date"
                                        onChange={changeinput2}
                                        value={selectedValues2.date}
                                        placeholder="Select Date"
                                        className="form-control bg-secondary text-white border-none"
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="h5">Agenda</div>
                                <select
                                    name="type"
                                    type="type"
                                    id=""
                                    placeholder="Select Agenda"
                                    onChange={changeinput2}
                                    value={selectedValues2.type}
                                    className="form-control bg-secondary text-white"
                                >
                                    <option value="Data Structures and Algorithm">Data Structures and Algorithm</option>
                                    <option value="Frontend Based">Frontend Based</option>
                                    <option value="Full Stack Based">Full Stack Based</option>
                                    <option value="Backend Based">Backend Based</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <div className="h5">Time</div>
                                <select
                                    name="time"
                                    type="Time"
                                    id=""
                                    placeholder="Time"
                                    onChange={changeinput2}
                                    value={selectedValues2.time}
                                    className="form-control bg-secondary text-white"
                                >
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="01:00 PM">01:00 PM</option>
                                    <option value="03:00 PM">03:00 PM</option>
                                </select>
                            </div>
                        </form>
                    </Modal.Body>
                    {/* Conditional rendering of the Submit button */}
                    {allOptionsSelected2 && (
                        <Modal.Footer>
                            <div className="btn btn-primary" onClick={handleSubmit2}>
                                Submit
                            </div>
                        </Modal.Footer>
                    )}
                </Modal>
                <div className="up">
                    <div className="dash">

                        <span className="title" href="/">Dashboard</span>
                    </div>
                    <div className="greetings">Hi, Vipul Sharma</div>
                    <div className="book">
                        <div className="interview">
                            <div className="btn btn-primary" onClick={handleShow}>New Mock Interviews</div>
                            <div className="btn btn-warning">My Bookings</div>
                        </div>
                        <div className="interview">
                            <div className="btn btn-primary" onClick={handleShow2}>New Mock Tests</div>
                            <div className="btn btn-warning">My Tests</div>
                        </div>
                    </div>
                    <div className="events">
                        <div className="card shadow-lg p-3 mb-5 bg-white ">
                            <div className="card-title">Upcoming Events For Me</div>
                            <div className="card-title2">Latest Event</div>
                            <div className="card-body">
                                Mock Interview for XYZ on ABC (Date)
                            </div>
                            <div className="btn btn-primary">Reschedule Event</div>
                            <div className="btn btn-danger">Cancel Event</div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <hr />
                    <div className="h5">©  2023 InterviewPro. All rights reserved.</div>
                </div>

            </div>
        </React.Fragment>
    )
}
export default Container;