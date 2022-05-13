/* eslint-disable react/prop-types */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from './Components/No-Authenticate/Login/LogIn';
import Admin from './Components/Authenticate/Admin/Admin';
import Staff from './Components/Authenticate/Admin/Staff/Staff';
import Menu from './Components/Authenticate/Admin/Menu/Menu';
import MenuLunch from './Components/Authenticate/Admin/LunchMenu/MenuLunch';
import Waiter from './Components/Authenticate/Waiter/Waiter';
import Chef from './Components/Authenticate/Chef/Chef';

const PrivateRoute = ({ role, authenticate }) => {
  if (role === 'Admin') {
    return (
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/admin/*" element={<Admin role={role} authenticate={authenticate} />}>
          <Route path="staff" element={<Staff />} />
          <Route path="menu" element={<Menu />} />
          <Route path="menu-lunch" element={<MenuLunch />} />
        </Route>
      </Routes>
    );
  }

  if (role === 'Mesero') {
    return (
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/waiter/*" element={<Waiter role={role} authenticate={authenticate} />}>
          <Route path="menu" element={<Menu role={role} authenticate={authenticate} />} />
          <Route path="menuLunch" element={<MenuLunch role={role} authenticate={authenticate} />} />
          <Route path="order" element={<Waiter role={role} authenticate={authenticate} />} />
          <Route path="toserve" element={<Waiter role={role} authenticate={authenticate} />} />
        </Route>
      </Routes>
    );
  }

  if (role === 'Jefe de cocina') {
    return (
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/chef" element={<Chef role={role} authenticate={authenticate} />}>
          <Route path="order" element={<Chef role={role} authenticate={authenticate} />} />
          <Route path="toserve" element={<Chef role={role} authenticate={authenticate} />} />
        </Route>
      </Routes>
    );
  }

  return null;
};

export default PrivateRoute;
