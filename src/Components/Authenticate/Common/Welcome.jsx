/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Welcome.module.css';

const Welcome = () => (
  <section className={styles.welcome}>
    <div className={styles.txt}>
      <p className={styles.hello}>Hola!</p>
      <p className={styles.message}>
        Selecciona cualquier sección del menú
        lateral para empezar a tomar ordenes,
        servir ordenes, administrar al personal y
        menú según tu rol asignado.
      </p>
    </div>
    <div className={styles.images}>
      <img src="/yellowspot.jpg" alt="spot" className={styles.spot} />
      <img src="/waiter.jpg" alt="spot" className={styles.waiter} />
    </div>
  </section>
);

export default Welcome;
