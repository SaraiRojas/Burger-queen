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
  bgcolor: 'white',
  color: '#00BB2D',
  heigth: '6em',
  width: '4em',
  minWidth: '0',
  marginTop: '1.2em',
};

const Alert = forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const BtnAddServe = ({ order, id }) => {
  const [dataService, setDataService] = useState();
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  console.log('BtnAddServe', id);

  const updateDataService = (dataServiceServe, idUpdateData) => {
    // eslint-disable-next-line no-param-reassign
    dataServiceServe.status = 'ready';
    const requestOption = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataServiceServe),
    };

    fetch(`http://localhost:3001/orders/${idUpdateData}`, requestOption)
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
    setDataService(order);
    updateDataService(dataService, id);
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
          La orden de
          &nbsp;
          {order.client}
          <br />
          de la Mesa
          &nbsp;
          {order.table}
          <br />
          se ha completado con exito!
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default BtnAddServe;
