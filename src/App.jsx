import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import NotFound from './No-Authenticate/NotFound';
import LogIn from './No-Authenticate/Login/LogIn';
import { auth, db } from './Firebase/firebase.config';
import './App.css';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const [authenticate, setAuthenticate] = useState(null);
  const [role, setRol] = useState(null);

  const getRol = async (uid) => {
    const ref = doc(db, `profile/${uid}`);
    const docSnap = await getDoc(ref);
    return docSnap.data().role;
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
          <PrivateRoute role={role} authenticate={authenticate} />
        )
        : (
          <Routes>
            <Route path="/" element={<LogIn role={role} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )
      }
    </Router>
  );
};

export default App;
