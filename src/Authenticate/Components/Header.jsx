/* eslint-disable react/prop-types */
import React from 'react';
import Profile from './Profile';
import style from './Header.module.css';

const Header = ({ authenticate }) => (
  <header className={style.header}>
    <Profile authenticate={authenticate} />
  </header>
);

export default Header;
