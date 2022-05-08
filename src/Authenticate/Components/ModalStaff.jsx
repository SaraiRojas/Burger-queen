/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import MenuItem from '@mui/material/MenuItem';
import { setDoc, doc } from 'firebase/firestore';
import { updateCurrentUser } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../Firebase/firebase.config';
import styles from './ModalStaff.module.css';

const roles = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Mesero',
    label: 'Mesero',
  },
  {
    value: 'Jefe de cocina',
    label: 'Jefe de cocina',
  },
];

const btnStyle = {
  bgcolor: 'black',
  color: '#F3B240',
  fontWeight: 600,
  marginTop: '1em',
  marginRight: '50em',
};

const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

const styleT = {
  marginBottom: 1,
};

const ModalStaff = () => {
  const [data, setData] = useState({}); // No importa que no tenga info, mientras que sea un objecto
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPass, setConfPass] = useState('');

  // const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>
          Error:
          {error.message}
        </p>
      </div>
    );
  }

  if (loading) {
    return console.log('Loading...');
  }
  // const [textError, setTextError] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const saveDataFirebase = async (localData, id) => {
    await setDoc(doc(db, 'profile', id), localData);
  };

  const saveDataApi = (localData) => {
    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(localData),
    };

    fetch('http://localhost:3001/empleados', requestOption)
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const expEmail = /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
    const expPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    const alertEmailR = document.getElementById('alertEmailR');

    if (expEmail.test(email) && expPassword.test(password) && expPassword.test(confPass)) {
      if (password === confPass) {
        const originalUser = auth.currentUser; // keeps info of original user to be used later

        await createUserWithEmailAndPassword(email, password); // creates new user
        const newUser = auth.currentUser;
        const { uid } = newUser; // gets new user uid

        await updateCurrentUser(auth, originalUser); // returns user to original loged in user

        await saveDataFirebase(data, uid); // saves info of created user
        saveDataApi(data);

        handleClose();
        // navigate('/admin');
      } else {
        alertEmailR.innerHTML = '<span className="red"> Contraseñas Invalida </span>';
      }
    } else {
      alertEmailR.innerHTML = '<span className="red"> Error correo o contraseña invalida</span>';
    }
  };

  return (
    <section className={styles.modalStaff}>
      <Button sx={btnStyle} onClick={handleOpen}>
        <AddIcon />
        Empleado
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Registrar empleado
            </Typography>
            <TextField
              id="date"
              name="date"
              label="Fecha de inicio"
              type="date"
              sx={{ width: 220 }}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="standard-select-currency"
              select
              name="role"
              label="Roles"
              value={data.rol}
              onChange={handleChange}
              variant="standard"
            >
              {roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="standard-required"
              name="name"
              label="Nombre"
              variant="standard"
              onChange={handleChange}
              // helperText={textError}
            />
            <TextField
              required
              id="standard-required"
              name="lastname"
              label="Apellido"
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              id="standard-email-input"
              label="Email"
              name="email"
              type="email"
              autoComplete="current-email"
              variant="standard"
              onChange={(e) => {
                setEmail(e.target.value);
                handleChange(e);
              }}
            />
            <TextField
              id="standard-password-input"
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              id="standard-password-input"
              label="Confirmar contraseña"
              type="password"
              autoComplete="current-password"
              variant="standard"
              sx={styleT}
              onChange={(e) => setConfPass(e.target.value)}
            />
            <Button onClick={handleClick} type="submit">Guardar</Button>
            <span
              id="alertEmailR"
              className={style.red}
            />
          </Box>
        </form>
      </Modal>
    </section>
  );
};

export default ModalStaff;
