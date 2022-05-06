/* eslint-disable react/prop-types */
import React from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import styles from './Waiter.module.css';

const Waiter = ({ authenticate, rol }) => {
  (
    <section className={styles.waiter}>
      <section>
        <Sidebar rol={rol} />
      </section>
      <Header authenticate={authenticate} />
    </section>
  );
};
export default Waiter;
