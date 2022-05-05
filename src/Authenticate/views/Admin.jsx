/* eslint-disable react/prop-types */
import React from 'react';
import Sidebar from '../Components/Sidebar';
import styles from './Admin.module.css';
import Header from '../Components/Header';

const Admin = ({ rol, authenticate }) => {
  console.log(rol);

  return (
    <section className={styles.admin}>
      <section>
        <Sidebar rol={rol} />
      </section>
      <Header authenticate={authenticate} />
    </section>
  );
};

export default Admin;
