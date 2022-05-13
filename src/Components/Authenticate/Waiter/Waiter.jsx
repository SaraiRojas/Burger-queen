/* eslint-disable react/prop-types */
import React from 'react';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
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
