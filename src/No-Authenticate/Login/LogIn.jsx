/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import styles from './Login.module.css';
import { auth } from '../../Firebase/firebase.config';

const LogIn = ({ authenticate }) => {
  console.log('auth', authenticate);
  let role;
  if (authenticate !== null) {
    role = authenticate[0];
  }
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>
          {error.message}
        </p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  const handleLogIn = async () => {
    const expEmail = /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
    const expPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    if (expEmail.test(email) && expPassword.test(password)) {
      await signInWithEmailAndPassword(email, password);
      if (role === 'Admin') {
        navigate('/admin');
      } else if (role === 'Mesero') {
        navigate('/waiter');
      } else if (role === 'Jefe de cocina') {
        navigate('/chef');
      }
    } else {
      const alertError = document.createElement('p');
      alertError.innerText = 'Error correo o contraseña invalida';
    }
  };

  return (
    <section className={styles.login}>
      <img className={styles.imgLogin} src="https://svgshare.com/i/gjb.svg" alt="imgLogin" />
      <section className={styles.sectionLogin}>
        <div className={styles.welcome}>
          <img className={styles.imgLog} src="https://svgshare.com/i/gmq.svg" alt="logoBQ" />
          <p className={styles.slogan}>
            Inicia sesión para administar el staff y menús o para tomar la orden de los clientes.
          </p>
        </div>
        <form className={styles.formLogin}>
          <input
            className={styles.inputEmail}
            type="email"
            placeholder="Ejemplo@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.inputPass}
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={styles.btnLogin}
            type="button"
            onClick={handleLogIn}
          >
            Iniciar sesión
          </button>
          <span className={styles.alertError} />
        </form>
      </section>
    </section>
  );
};

export default LogIn;
