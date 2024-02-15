import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home.jsx'; // Import your Home component
import Explore from './components/Explore.jsx'; // Import your Explore component
import Login from './components/Login.jsx'; // Import your Login component
import SignUp from './components/SignUp.jsx'; // Import your SignUp component

const App = () => {
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
    </Router>
  );
};

export default App;
