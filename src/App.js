
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Fixed import statement
import Navbar from './Navbar';
import Userhome from './Userhome';
import Compiler from './Compiler';
import Container from './Container';
import Profile from './Profile';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/userhome' element={<Userhome/>} />
          {/* <Route path='/userhome/container' element={<Container/>} /> */}
          <Route path='/userhome/profile' element={<Profile/>} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;

