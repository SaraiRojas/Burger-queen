import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import MenuItem from '@mui/material/MenuItem';

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
  color: 'white',
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
  const [currency, setCurrency] = useState('');
  const [open, setOpen] = useState(false);
  // const [textError, setTextError] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
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
              label="Fecha de inicio"
              type="date"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="standard-select-currency"
              select
              label="Roles"
              value={currency}
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
              label="Nombre"
              variant="standard"
              // onChange={handleChange}
              // helperText={textError}
            />
            <TextField
              required
              id="standard-required"
              label="Apellido"
              variant="standard"
            />
            <TextField
              id="standard-email-input"
              label="Email"
              type="email"
              autoComplete="current-email"
              variant="standard"
            />
            <TextField
              id="standard-password-input"
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <TextField
              id="standard-password-input"
              label="Confirmar contraseña"
              type="password"
              autoComplete="current-password"
              variant="standard"
              sx={styleT}
            />
            <Button type="submit">Guardar</Button>
          </Box>
        </form>
      </Modal>
    </div>
  );
};

export default ModalStaff;
