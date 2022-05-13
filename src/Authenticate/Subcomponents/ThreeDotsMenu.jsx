/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ModalEditMenu from './ModalEditMenu';
import ModalDeleteMenu from './ModalDeleteMenu';

// const options = [
//   {
//     id: 1,
//     value: 'Editar',
//   },
//   {
//     id: 1,
//     value: 'Borrar',
//   },
// ];

const ITEM_HEIGHT = 30;

const ThreeDotsMenu = ({ product }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = (e) => {
    handleClose();
    const option = e.target.innerText;
    console.log(option);
    if (option === 'EDITAR') {
      setOpenModal(!openModal);
    } else {
      setOpenModalDelete(!openModalDelete);
    }
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {/* {options.map((option) => (
          <MenuItem key={option.id} selected={option === 'Pyxis'} onClick={handleEdit}>
            {option}
          </MenuItem>
        ))} */}
        <MenuItem>
          <Button color="secondary" onClick={handleEdit}>Editar</Button>
          <Button onClick={handleEdit}>Borrar</Button>
        </MenuItem>
      </Menu>
      <ModalEditMenu product={product} openModal={openModal} setOpenModal={setOpenModal} />
      <ModalDeleteMenu
        product={product}
        openModalDelete={openModalDelete}
        setOpenModalDelete={setOpenModalDelete}
      />
    </div>
  );
};

export default ThreeDotsMenu;
