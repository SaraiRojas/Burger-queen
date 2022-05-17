/* eslint-disable react/prop-types */
import React from 'react';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const btnCar = {
  minWidth: '0',
  fontSize: '3.5em',
  color: 'black',
  marginRight: '0.2em',
};

const ShoppingCar = ({ count }) => (
  <Badge badgeContent={count} color="primary">
    <AddShoppingCartIcon sx={btnCar} color="action" />
  </Badge>
);

export default ShoppingCar;
