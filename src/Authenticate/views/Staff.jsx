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
import ModalStaff from '../Components/ModalStaff';
import StaffBtn from '../Components/StaffBtn';
import styles from './Staff.module.css';

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

  const getStaff = (empleado) => {
    setUserEdit(empleado);
    openCLoseModalEdit();
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

  useEffect(() => {
    fetch('http://localhost:3001/empleados')
      .then((response) => response.json())
      .then((data) => setDataStaff(data));
  }, []);

  const bodyEdit = (
    <div>
      <h3>Editar</h3>
      <TextField name="date" label="Fecha de Inicio" type="date" defaultValue={userEdit && userEdit.date} onChange={handleChange} />
      <br />
      <TextField name="role" label="Rol" defaultValue={userEdit && userEdit.role} onChange={handleChange} />
      <br />
      <TextField name="name" label="Nombre" defaultValue={userEdit && userEdit.name} onChange={handleChange} />
      <br />
      <TextField name="lastname" label="Apellido" defaultValue={userEdit && userEdit.lastname} onChange={handleChange} />
      <br />
      <TextField name="email" label="Email" defaultValue={userEdit && userEdit.email} onChange={handleChange} />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => editDataApi(dataEdited, userEdit.id)}>Guardar</Button>
        <Button onClick={() => openCLoseModalEdit()}>Cancelar</Button>
      </div>
    </div>
  );

  const bodyDelete = (
    <div>
      <p>
        Estás seguro que deseas eliminar la consola
      </p>
      <div align="right">
        <Button color="secondary">Sí</Button>
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
                <TableCell>Id</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Rol</TableCell>
                <TableCell>Correo</TableCell>
                <TableCell>Fecha de inicio</TableCell>
                <TableCell>Acciones</TableCell>
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
                    <EditIcon onClick={() => getStaff(empleado)} />
                    &nbsp;&nbsp;&nbsp;
                    <DeleteIcon onClick={openCLoseModalDelete} />
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
          {bodyEdit}
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
