/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import ModalStaff from '../Components/ModalStaff';
import StaffBtn from '../Components/StaffBtn';
import styles from './Staff.module.css';
// import { flexbox } from '@mui/system';

const modal = {
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

const Staff = () => {
  const [dataStaff, setDataStaff] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [open, setOpen] = useState(false);
  const [userEdit, setUserEdit] = useState(null);
  const [dataEdited, setDataEdited] = useState(null);

  const openCLoseModalEdit = () => {
    // setUserEdit('En staff');
    // console.log(userEdit);
    setModalEdit(!modalEdit);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataEdited((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const openCLoseModalDelete = () => {
    setModalDelete(!modalDelete);
  };

  const getStaff = (empleado, action) => {
    setUserEdit(empleado);
    (action === 'Edit') ? openCLoseModalEdit() : openCLoseModalDelete();
  };

  const handleOpen = () => setOpen(true);

  const editDataApi = (localDataEdit, id) => {
    const requestOption = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(localDataEdit),
    };

    fetch(`http://localhost:3001/empleados/${id}`, requestOption)
      .then((response) => response.json())
      .catch((err) => console.log(err));
    openCLoseModalEdit();
  };

  const deleteDataApi = (id) => {
    const requestOption = {
      method: 'DELETE',
    };

    fetch(`http://localhost:3001/empleados/${id}`, requestOption)
      .then((response) => response.json())
      .then(() => {
        setDataStaff(dataStaff.filter((staff) => staff.id !== userEdit.id));
      })
      .catch((err) => console.log(err));
    openCLoseModalDelete();
  };

  useEffect(() => {
    fetch('http://localhost:3001/empleados')
      .then((response) => response.json())
      .then((data) => setDataStaff(data));
  }, []);

  const bodyDelete = (
    <div>
      <p>
        Estás seguro que deseas eliminar a
        <br />
        <span>{userEdit && userEdit.name}</span>
        ?
      </p>
      <div align="right">
        <Button color="secondary" onClick={() => deleteDataApi(userEdit.id)}>Sí</Button>
        <Button onClick={() => openCLoseModalDelete()}>No</Button>
      </div>

    </div>
  );

  return (
    <section className={styles.staff}>
      <div className={styles.staffBtnContainer}>
        <StaffBtn handleClick={handleOpen} />
      </div>
      <ModalStaff open={open} setOpen={setOpen} />
      <main className={styles.main}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>ID</b></TableCell>
                <TableCell><b>Nombre</b></TableCell>
                <TableCell><b>Apellido</b></TableCell>
                <TableCell><b>Rol</b></TableCell>
                <TableCell><b>Correo</b></TableCell>
                <TableCell><b>Fecha de Inicio</b></TableCell>
                <TableCell><b>Acciones</b></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {dataStaff.map((empleado) => (
                <TableRow key={empleado.id}>
                  <TableCell>{empleado.id}</TableCell>
                  <TableCell>{empleado.name}</TableCell>
                  <TableCell>{empleado.lastname}</TableCell>
                  <TableCell>{empleado.role}</TableCell>
                  <TableCell>{empleado.email}</TableCell>
                  <TableCell>{empleado.date}</TableCell>
                  <TableCell>
                    <EditIcon onClick={() => getStaff(empleado, 'Edit')} />
                    &nbsp;&nbsp;&nbsp;
                    <DeleteIcon onClick={() => getStaff(empleado, 'Delete')} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Modal
          open={modalEdit}
          onClose={openCLoseModalEdit}
        >
          <form>
            <Box sx={modal}>
              <h3>Editar</h3>
              <TextField
                id="date"
                name="date"
                label="Fecha de inicio"
                type="date"
                sx={{ width: 220 }}
                defaultValue={userEdit && userEdit.date}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <br />
              <TextField
                id="standard-select-currency"
                select
                name="role"
                label="Roles"
                defaultValue={userEdit && userEdit.role}
                onChange={handleChange}
                variant="standard"
              >
                {roles.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <TextField
                required
                id="standard-required"
                name="name"
                label="Nombre"
                variant="standard"
                defaultValue={userEdit && userEdit.name}
                onChange={handleChange}
              />
              <br />
              <TextField
                required
                id="standard-required"
                name="lastname"
                label="Apellido"
                variant="standard"
                defaultValue={userEdit && userEdit.lastname}
                onChange={handleChange}
              />
              <br />
              <TextField
                id="standard-email-input"
                label="Email"
                name="email"
                type="email"
                autoComplete="current-email"
                variant="standard"
                defaultValue={userEdit && userEdit.email}
                onChange={handleChange}
              />
              <br />
              <br />
              <div align="right">
                <Button color="primary" onClick={() => editDataApi(dataEdited, userEdit.id)}>Guardar</Button>
                <Button onClick={() => openCLoseModalEdit()}>Cancelar</Button>
              </div>
            </Box>
          </form>
        </Modal>

        <Modal
          open={modalDelete}
          onClose={openCLoseModalDelete}
        >
          {bodyDelete}
        </Modal>
      </main>
    </section>
  );
};

export default Staff;
