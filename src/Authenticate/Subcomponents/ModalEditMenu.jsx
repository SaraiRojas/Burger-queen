/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import styles from './ModalMenu.module.css';

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

const ModalEditMenu = ({ product, openModal, setOpenModal }) => {
  // It does not matter that it has no info, as long as it is an object
  // const [data, setData] = useState(product);
  const data = product;
  console.log(data);

  const handleClose = () => setOpenModal(false);

  const editDataApi = (e, datalocal) => {
    e.preventDefault();
    console.log(datalocal);
    console.log(datalocal.id);

    // const employeeData = {
    //   date: data[0].value,
    //   role: data[2].value,
    //   name: data[3].value,
    //   lastname: data[4].value,
    //   email: data[5].value,
    // };

    // console.log(employeeData);

    const requestOption = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datalocal),
    };

    fetch(`http://localhost:3001/empleados/${datalocal.id}`, requestOption)
      .then((response) => response.json())
      .catch((err) => console.log(err));
    handleClose();
  };

  return (
    <section className={styles.modalStaff}>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Editar Producto
            </Typography>
            <TextField
              required
              id="standard-required"
              name="name"
              label="Nombre"
              variant="standard"
              defaultValue={data && data.name}
            />
            <TextField
              required
              id="standard-required"
              name="price"
              type="number"
              label="Precio"
              variant="standard"
              defaultValue={data && data.price}
            />
            <TextField
              required
              id="standard-required"
              name="popularity"
              type="number"
              label="Popularidad"
              variant="standard"
              defaultValue={data && data.popularity}
            />
            <TextField
              required
              id="standard-required"
              name="image"
              label="Link"
              variant="standard"
              defaultValue={data && data.image}
            />
            <Button onClick={(e) => editDataApi(e, data)} type="submit">Guardar</Button>
          </Box>
        </form>
      </Modal>
    </section>
  );
};

export default ModalEditMenu;
