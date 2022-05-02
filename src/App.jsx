import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './No-Authenticate/Login/LogIn';
import Staff from './Authenticate/Staff';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LogIn />}/>
        <Route path='/staff' element={<Staff />} /> 
      </Routes>
    </Router>
  );
}

export default App;
