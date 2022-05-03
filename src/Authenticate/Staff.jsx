/* eslint-disable react/prop-types */
import React from 'react';
import Sidebar from './Components/Sidebar';
import styles from './Staff.module.css';
import Header from './Components/Header';

const Staff = ({ rol, authenticate }) => {
  console.log(rol);

  return (
    <section className={styles.staff}>
      <section>
        <Sidebar />
      </section>
      <Header authenticate={authenticate} />
    </section>
  );
};

export default Staff;
