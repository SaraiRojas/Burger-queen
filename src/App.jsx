import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './No-Authenticate/Login/LogIn';
import Staff from './Authenticate/Staff';
import { app, auth } from './Firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import './App.css'; 
import NotFound from './No-Authenticate/NotFound';

const App = () => {

  const [authenticate, setAuthenticate] = useState(null);
  const [userRol, setUserRol] = useState(null);

  const db = getFirestore(app);

  async function getRol(uid) {
    const docRef = doc(db, `roles/${uid}`);
    const docSnap = await getDoc(docRef);
    return docSnap.data().rol
  }

  const setRol = (userInfo) => {
    getRol(userInfo.uid)
      .then((rol) => {
        setUserRol(rol)
      })
  }

  onAuthStateChanged(auth, (user) => {
    if (user){
      console.log(authenticate)
      setAuthenticate(user);
      setRol(user);
    } else {
      setAuthenticate(null);
    }
  });

  console.log('rol', userRol)

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
