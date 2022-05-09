/* eslint-disable react/prop-types */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import styles from './Admin.module.css';
import Header from '../Components/Header';

const Admin = ({ role, authenticate }) => {
  console.log('En admi');

  return (
    <section className={styles.admin}>
      <section>
        <Sidebar role={role} />
      </section>
      <main className={styles.main}>
        <Header authenticate={authenticate} />
        <Outlet />
      </main>
    </section>
  );
};

export default Admin;
