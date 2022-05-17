/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import styles from './Waiter.module.css';

const Waiter = ({ role, authenticate }) => {
  const [count, setCount] = useState(0);

  return (
    <section className={styles.waiter}>
      <section>
        <Sidebar role={role} />
      </section>
      <main>
        <Header
          count={count}
          role={role}
          authenticate={authenticate}
        />
        <Outlet context={[count, setCount]} />
      </main>
    </section>
  );
};
export default Waiter;
