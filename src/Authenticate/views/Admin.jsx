/* eslint-disable react/prop-types */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import styles from './Admin.module.css';
import Header from '../Components/Header';

const Admin = ({ role, authenticate }) => (
  <section className={styles.admin}>
    <section>
      <Sidebar role={role} />
    </section>
    <main className={styles.main}>
      <Header authenticate={authenticate} />
      <div className={styles.adminOutlet}>
        <Outlet />
      </div>
    </main>
  </section>
);

export default Admin;
