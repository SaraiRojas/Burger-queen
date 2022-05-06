/* eslint-disable react/prop-types */
import React from 'react';
import Profile from './Profile';
import style from './Header.module.css';

const Header = ({ authenticate }) => {
  console.log('En header');

  return (
    <header className={style.header}>
      <Profile authenticate={authenticate} />
    </header>
  );
};

export default Header;
