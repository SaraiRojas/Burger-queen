/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const btnStyle = {
  bgcolor: 'black',
  color: '#F3B240',
  fontWeight: 600,
  marginTop: '1em',
  marginRight: '50em',
  width: '10em',
};

const StaffBtn = ({ handleClick }) => {
  console.log('btnStaff');
  return (
    <Button sx={btnStyle} onClick={handleClick}>
      <AddIcon />
      Empleado
    </Button>
  );
};

export default StaffBtn;
