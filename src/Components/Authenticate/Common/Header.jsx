/* eslint-disable react/prop-types */
import React from 'react';
import Profile from './Profile';
import style from './Header.module.css';

const Header = ({ authenticate }) => (
  <header className={style.header}>
    <div className={style.Profile}>
      <Profile authenticate={authenticate} />
    </div>
  </header>
);

export default Header;
