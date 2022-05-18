/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import styles from './Home.module.css';

const Home = ({ role, authenticate }) => {
  const [count, setCount] = useState(0);
  const [dataProduct, setDataProduct] = useState([]);

  if (role === 'Mesero') {
    return (
      <section className={styles.waiter}>
        <section className={styles.sidebar}>
          <Sidebar role={role} />
        </section>
        <main className={styles.main}>
          <Header
            role={role}
            authenticate={authenticate}
            count={count}
            dataProduct={dataProduct}
            setDataProduct={setDataProduct}
            setCount={setCount}
            className={styles.profile}
          />
          <Outlet context={[count, setCount, dataProduct, setDataProduct]} />
        </main>
      </section>
    );
  }

  return (
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
};

export default Home;
