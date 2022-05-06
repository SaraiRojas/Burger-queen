/* eslint-disable react/prop-types */
import React from 'react';
import Sidebar from '../Components/Sidebar';
import styles from './Admin.module.css';
import Header from '../Components/Header';
import Staff from './Staff';

const Admin = ({ rol, authenticate }) => {
  console.log('En admi');

  return (
    <section className={styles.admin}>
      <section>
        <Sidebar rol={rol} />
      </section>
      <main className={styles.main}>
        <Header authenticate={authenticate} />
        <Staff />
      </main>
    </section>
  );
};

export default Admin;
