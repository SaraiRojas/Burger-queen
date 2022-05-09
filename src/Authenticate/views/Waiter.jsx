/* eslint-disable react/prop-types */
import React from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import styles from './Waiter.module.css';

const Waiter = ({ authenticate, role }) => {
  (
    <section className={styles.waiter}>
      <section>
        <Sidebar role={role} />
      </section>
      <Header authenticate={authenticate} />
    </section>
  );
};
export default Waiter;
