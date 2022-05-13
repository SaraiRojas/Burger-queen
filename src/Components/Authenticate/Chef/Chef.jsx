/* eslint-disable react/prop-types */
import React from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import styles from '../Waiter/Waiter.module.css';

const Chef = ({ authenticate, role }) => {
  console.log('hola');
  return (
    <section className={styles.chef}>
      <section>
        <Sidebar rol={role} />
      </section>
      <Header authenticate={authenticate} />
    </section>
  );
};
export default Chef;
