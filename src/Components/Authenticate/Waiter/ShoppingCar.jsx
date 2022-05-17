/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const btnCar = {
  minWidth: '0',
  fontSize: '3.5em',
  color: 'black',
  marginRight: '0.2em',
};

const styles = {
  width: 60,
  height: 62,
  color: '#F3B240',
  fontSize: 20,
};

const ShoppingCar = ({ count }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <section>
      <Badge badgeContent={count} color="primary">
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={styles}
        >
          <AddShoppingCartIcon sx={btnCar} color="action" />
        </Button>
      </Badge>
      <div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem>Enviar cocina</MenuItem>
        </Menu>
      </div>
    </section>
  );
};

export default ShoppingCar;
