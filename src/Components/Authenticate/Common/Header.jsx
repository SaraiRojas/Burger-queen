/* eslint-disable react/prop-types */
import React from 'react';
import Profile from './Profile';
import ShoppingCar from '../Waiter/ShoppingCar';
import style from './Header.module.css';

const Header = ({
  role, authenticate, count, dataProduct, setDataProduct, setCount,
}) => {
  if (role === 'Mesero') {
    return (
      <header className={style.header}>
        <ShoppingCar
          count={count}
          dataProduct={dataProduct}
          setDataProduct={setDataProduct}
          setCount={setCount}
        />
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
