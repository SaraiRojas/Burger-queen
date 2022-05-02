import React from 'react';
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <img className={styles.logoSidebar} src="https://svgshare.com/i/gmq.svg" alt="logo" />
      <button className={`${styles.btn} ${styles.btnStaff}`}>Empleados</button>
      <button className={`${styles.btn} ${styles.btnMenus}`}>Menus</button>
    </section>
  );
}

export default Sidebar;
