import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './No-Authenticate/Login/LogIn';
import Staff from './Authenticate/Staff';
import { auth } from './Firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import './App.css'; 
import NotFound from './No-Authenticate/NotFound';

const App = () => {

  const [authenticate, setAuthenticate] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user){
      console.log(authenticate)
      setAuthenticate(user);
    } else {
      setAuthenticate(null);
    }
  });

  return (
    <Router> {
      authenticate
      ?
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/staff' element={<Staff />} />
      </Routes>
      :
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      }
    </Router>
  );
}

export default App;
