/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, forwardRef } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useOutletContext } from 'react-router-dom';

const btnStyle = {
  bgcolor: 'black',
  color: '#F3B240',
  heigth: '1em',
  width: '2em',
  minWidth: '0',
  marginTop: '-1em',
  // marginRight: '.2em',
};

const Alert = forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const BtnAdd = ({ product }) => {
  const [count, setCount] = useOutletContext();
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
    setCount(count + 1);
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
        <AddIcon />
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          El producto
          &nbsp;
          {product.name}
          <br />
          se agregó exitosamente!
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default BtnAdd;
