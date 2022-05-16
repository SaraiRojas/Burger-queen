/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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

const ModalDeleteMenu = ({
  menu, product, openModalDelete, setOpenModalDelete,
}) => {
  const [dataMenu, setDataMenu] = useState([]);
  const data = product;

  const handleClose = () => setOpenModalDelete(false);

  const deleteDataApi = (id) => {
    const requestOption = {
      method: 'DELETE',
    };
    if (menu === 'menu') {
      fetch(`http://localhost:3001/menu/${id}`, requestOption)
        .then((response) => response.json())
        .then(() => {
          setDataMenu(dataMenu.filter((itemMenu) => itemMenu.id !== data.id));
        })
        .catch((err) => console.log(err));
    } else {
      fetch(`http://localhost:3001/menuLunch/${id}`, requestOption)
        .then((response) => response.json())
        .then(() => {
          setDataMenu(dataMenu.filter((itemMenu) => itemMenu.id !== data.id));
        })
        .catch((err) => console.log(err));
    }

    handleClose();
  };

  return (
    <Modal
      open={openModalDelete}
      onClose={handleClose}
    >
      <Box sx={modal}>
        <div>
          <p>
            Estás seguro que deseas eliminar a
            <br />
            <span>{data && data.name}</span>
            ?
          </p>
          <div align="right">
            <Button color="secondary" onClick={() => deleteDataApi(data.id)}>Sí</Button>
            <Button onClick={() => handleClose()}>No</Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalDeleteMenu;
