import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './No-Authenticate/LogIn';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LogIn />}/>
      </Routes>
    </Router>
  );
}

export default App;
