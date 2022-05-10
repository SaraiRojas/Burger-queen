import React, { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import NotFound from './No-Authenticate/NotFound';
import LogIn from './No-Authenticate/Login/LogIn';
import { auth, db } from './Firebase/firebase.config';
import './App.css';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const [authenticate, setAuthenticate] = useState('skip');

  const getRol = async (uid) => {
    const ref = doc(db, `profile/${uid}`);
    const docSnap = await getDoc(ref);
    return docSnap.data().role;
  };

  const updateRol = (user) => {
    getRol(user.uid)
      .then((useRol) => {
        setAuthenticate([useRol, user]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onAuthStateChanged(auth, (user) => {
    console.log('onc');
    if (user) {
      updateRol(user);
    } else {
      setAuthenticate(null);
    }
  });

  return (
    <Router>
      { console.log(authenticate) }
      {
      // eslint-disable-next-line no-nested-ternary
      authenticate !== 'skip'
        ? (
          authenticate
          // eslint-disable-next-line indent
          ? (
            <PrivateRoute role={authenticate[0]} authenticate={authenticate[1]} />
          // eslint-disable-next-line indent
          )
          // eslint-disable-next-line indent
          : (
            <Routes>
              <Route path="/" element={<LogIn authenticate={authenticate} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            )
        )
        : (
          <Routes>
            <Route path="/" element={<LogIn authenticate={authenticate} />} />
          </Routes>
        )
      }
    </Router>
  );
};

export default App;
