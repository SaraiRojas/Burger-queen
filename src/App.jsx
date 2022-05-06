import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import NotFound from './No-Authenticate/NotFound';
import LogIn from './No-Authenticate/Login/LogIn';
import Admin from './Authenticate/views/Admin';
import { auth, db } from './Firebase/firebase.config';
import Waiter from './Authenticate/views/Waiter';
import './App.css';
import Chef from './Authenticate/views/Chef';

const App = () => {
  const [authenticate, setAuthenticate] = useState(null);
  const [rol, setRol] = useState(null);

  const getRol = async (uid) => {
    const ref = doc(db, `profile/${uid}`);
    const docSnap = await getDoc(ref);
    return docSnap.data().rol;
  };

  const updateRol = (user) => {
    getRol(user.uid)
      .then((useRol) => {
        setRol(useRol);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAuthenticate(user);
      updateRol(user);
    } else {
      setAuthenticate(null);
    }
  });

  return (
    <Router>
      {
      authenticate
        ? (
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/admin" element={<Admin rol={rol} authenticate={authenticate} />} />
            <Route path="/waiter" element={<Waiter rol={rol} authenticate={authenticate} />} />
            <Route path="/chef" element={<Chef rol={rol} authenticate={authenticate} />} />
          </Routes>
        )
        : (
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )
      }
    </Router>
  );
};

export default App;
