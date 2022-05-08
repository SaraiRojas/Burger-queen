/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const btnStyle = {
  bgcolor: 'black',
  color: '#F3B240',
  fontWeight: 600,
  marginTop: '1em',
  marginRight: '50em',
};

const StaffBtn = ({ onClick }) => (
  <Button onClick={onClick} sx={btnStyle}>
    <AddIcon />
    Empleado
  </Button>
);

export default StaffBtn;
