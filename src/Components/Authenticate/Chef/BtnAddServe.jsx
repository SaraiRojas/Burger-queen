/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, forwardRef } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const btnStyle = {
  bgcolor: 'black',
  color: '#00BB2D',
  heigth: '1em',
  width: '2em',
  minWidth: '0',
  marginTop: '-1em',
};

const Alert = forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const BtnAddServe = ({ order }) => {
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Button
        sx={btnStyle}
        onClick={handleClick({
          vertical: 'top',
          horizontal: 'right',
        })}
      >
        <AddTaskIcon />
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          La orden
          &nbsp;
          {order.client}
          <br />
          se ha completado con exito!
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default BtnAddServe;
