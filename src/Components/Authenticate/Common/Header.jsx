/* eslint-disable react/prop-types */
import React from 'react';
import Profile from './Profile';
import ShoppingCar from './ShoppingCar';
import style from './Header.module.css';

const Header = ({ count, role, authenticate }) => {
  if (role === 'Mesero') {
    return (
      <header className={style.header}>
        <ShoppingCar count={count} />
        <div className={style.Profile}>
          <Profile authenticate={authenticate} />
        </div>
      </header>
    );
  }

  return (
    <header className={style.header}>
      <div className={style.Profile}>
        <Profile authenticate={authenticate} />
      </div>
    </header>
  );
};

export default Header;
