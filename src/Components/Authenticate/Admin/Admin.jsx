/* eslint-disable react/prop-types */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Common/Sidebar';
import styles from './Admin.module.css';
import Header from '../Common/Header';

const Admin = ({ role, authenticate }) => (
  <section className={styles.admin}>
    <section className={styles.sidebar}>
      <Sidebar role={role} />
    </section>
    <main className={styles.main}>
      <Header authenticate={authenticate} className={styles.profile} />
      <div className={styles.adminOutlet}>
        <Outlet />
      </div>
    </main>
  </section>
);

export default Admin;
