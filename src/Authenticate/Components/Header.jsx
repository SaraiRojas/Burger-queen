/* eslint-disable react/prop-types */
import React from 'react';
import Profile from './Profile';
import style from './Header.module.css';
import ModalStaff from './ModalStaff';

const Header = ({ authenticate }) => (
  <header className={style.header}>
    <ModalStaff />
    <Profile authenticate={authenticate} />
  </header>
);

export default Header;
