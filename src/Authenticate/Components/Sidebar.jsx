/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = ({ role }) => {
  if (role === 'Admin') {
    return (
      <section className={styles.sidebar}>
        <img className={styles.logoSidebar} src="https://svgshare.com/i/gmq.svg" alt="logo" />
        <Link to="staff">
          <button type="button" className={`${styles.btn} ${styles.btnStaff}`}>Empleados</button>
        </Link>
        <Link to="menu-desayuno">
          <button type="button" className={`${styles.btn} ${styles.btnMenus}`}>Menus</button>
        </Link>
      </section>
    );
  }

  if (role === 'Mesero') {
    return (
      <section className={styles.sidebar}>
        <img className={styles.logoSidebar} src="https://svgshare.com/i/gmq.svg" alt="logo" />
        <button type="button" className={`${styles.btn} ${styles.btnStaff}`}>Menus</button>
        <button type="button" className={`${styles.btn} ${styles.btnMenus}`}>Pedidos</button>
        <button type="button" className={`${styles.btn} ${styles.btnMenus}`}>Servir</button>
      </section>
    );
  }

  if (role === 'Jefe de cocina') {
    return (
      <section className={styles.sidebar}>
        <img className={styles.logoSidebar} src="https://svgshare.com/i/gmq.svg" alt="logo" />
        <button type="button" className={`${styles.btn} ${styles.btnStaff}`}>Pedidos</button>
        <button type="button" className={`${styles.btn} ${styles.btnMenus}`}>Servir</button>
      </section>
    );
  }

  return null;
};

export default Sidebar;
