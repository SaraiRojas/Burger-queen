/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import styles from './Admin.module.css';
import Header from '../Components/Header';
import Staff from './Staff';
import StaffBtn from '../Components/StaffBtn';

const Admin = ({ rol, authenticate }) => {
  const [open, setOpen] = useState(false); // 1.
  const handleOpen = () => setOpen(true); // 3.

  return (
    <section className={styles.admin}>
      <section>
        <Sidebar rol={rol} />
      </section>
      <main className={styles.main}>
        <Header authenticate={authenticate} />
        <StaffBtn onClick={handleOpen} />
        <Staff open={open} setOpen={setOpen} />
        {/* // 2. */}
      </main>
    </section>
  );
};

export default Admin;
