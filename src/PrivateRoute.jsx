/* eslint-disable react/prop-types */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from './No-Authenticate/Login/LogIn';
import Admin from './Authenticate/views/Admin';
import Staff from './Authenticate/views/Staff';
import MenuDesayuno from './Authenticate/Subviews/MenuDesayuno';
// import MenuAlmuerzo from './Authenticate/Subviews/MenuAlmuerzo';
import Waiter from './Authenticate/views/Waiter';
import Chef from './Authenticate/views/Chef';

const PrivateRoute = ({ role, authenticate }) => {
  console.log(role);
  if (role === 'Admin') {
    console.log('estoy en admin');
    return (
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/admin/*" element={<Admin role={role} authenticate={authenticate} />}>
          <Route path="staff" element={<Staff />} />
          <Route path="menu-desayuno" element={<MenuDesayuno />} />
          {/* <Route path="menu-almuerzo-cena" element={<MenuAlmuerzo />} /> */}
        </Route>
      </Routes>
    );
  }

  if (role === 'Mesero') {
    console.log('estoy en mesero');
    return (
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/waiter" element={<Waiter role={role} authenticate={authenticate} />} />
      </Routes>
    );
  }

  if (role === 'Jefe de cocina') {
    console.log('estoy en jefe de cocina');
    return (
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/chef" element={<Chef role={role} authenticate={authenticate} />} />
      </Routes>
    );
  }

  return null;
};

export default PrivateRoute;
