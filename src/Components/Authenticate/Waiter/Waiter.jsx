/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Common/Sidebar';
import Header from '../Common/Header';
import styles from './Waiter.module.css';

const Waiter = ({ role, authenticate }) => {
  const [count, setCount] = useState(0);
  const [dataProduct, setDataProduct] = useState([]);

  return (
    <section className={styles.waiter}>
      <section>
        <Sidebar role={role} />
      </section>
      <main>
        <Header
          role={role}
          authenticate={authenticate}
          count={count}
          dataProduct={dataProduct}
          setDataProduct={setDataProduct}
          setCount={setCount}
        />
        <Outlet context={[count, setCount, dataProduct, setDataProduct]} />
      </main>
    </section>
  );
};
export default Waiter;
