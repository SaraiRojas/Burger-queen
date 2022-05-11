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
        <Link to="menu">
          <button type="button" className={`${styles.btn} ${styles.btnMenus}`}>Menu Desayuno</button>
        </Link>
        <Link to="menu-lunch">
          <button type="button" className={`${styles.btn} ${styles.btnMenus}`}>Menu Vespertino</button>
        </Link>
      </section>
    );
  }

  if (role === 'Mesero') {
    return (
      <section className={styles.sidebar}>
        <img className={styles.logoSidebar} src="https://svgshare.com/i/gmq.svg" alt="logo" />
        <Link to="menu">
          <button type="button" className={`${styles.btn} ${styles.btnMenus}`}>Menu Desayuno</button>
        </Link>
        <Link to="menuLunch">
          <button type="button" className={`${styles.btn} ${styles.btnMenus}`}>Menu Almuerzo</button>
        </Link>
        <Link to="order">
          <button type="button" className={`${styles.btn} ${styles.btnMenus}`}>Pedidos</button>
        </Link>
        <Link to="toserve">
          <button type="button" className={`${styles.btn} ${styles.btnMenus}`}>Servir</button>
        </Link>
        <Link to="list-order">
          <button type="button" className={`${styles.btn} ${styles.btnMenus}`}>Lista Pedidos</button>
        </Link>
      </section>
    );
  }

  if (role === 'Jefe de cocina') {
    return (
      <section className={styles.sidebar}>
        <img className={styles.logoSidebar} src="https://svgshare.com/i/gmq.svg" alt="logo" />
        <Link to="order">
          <button type="button" className={`${styles.btn} ${styles.btnMenus}`}>Pedidos</button>
        </Link>
        <Link to="toserve">
          <button type="button" className={`${styles.btn} ${styles.btnMenus}`}>Servir</button>
        </Link>
      </section>
    );
  }

  return null;
};

export default Sidebar;
