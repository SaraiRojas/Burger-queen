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

const style = {
  display: 'flex',
  flexDirection: 'column',
};

const ITEM_HEIGHT = 30;

const ThreeDotsMenu = ({
  menu, product, refreshData, setRefreshData,
}) => {
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
        <MenuItem sx={style}>
          <Button color="secondary" onClick={handleEdit}>Editar</Button>
          <Button onClick={handleEdit}>Borrar</Button>
        </MenuItem>
      </Menu>
      <ModalEditMenu
        menu={menu}
        product={product}
        openModal={openModal}
        setOpenModal={setOpenModal}
        refreshData={refreshData}
        setRefreshData={setRefreshData}
      />
      <ModalDeleteMenu
        menu={menu}
        product={product}
        openModalDelete={openModalDelete}
        setOpenModalDelete={setOpenModalDelete}
        refreshData={refreshData}
        setRefreshData={setRefreshData}
      />
    </div>
  );
};

export default ThreeDotsMenu;
