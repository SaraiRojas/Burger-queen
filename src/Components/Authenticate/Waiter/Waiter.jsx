/* eslint-disable react/prop-types */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import styles from './Waiter.module.css';

const Waiter = ({ role, authenticate }) => (
  <section className={styles.waiter}>
    <section>
      <Sidebar role={role} />
    </section>
    <main>
      <Header role={role} authenticate={authenticate} />
      <Outlet />
    </main>
  </section>
);
export default Waiter;
