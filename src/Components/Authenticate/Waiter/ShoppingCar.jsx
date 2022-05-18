/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';

const btnCar = {
  minWidth: '0',
  fontSize: '3.5em',
  color: 'black',
  marginRight: '0.2em',
};

const stylesBadge = {
  width: 60,
  height: 62,
  color: '#F3B240',
  fontSize: 20,
};

const menu = {
  padding: 2,
  textAligns: 'center',
};

const styleBox = {
  top: '50%',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

const ShoppingCar = ({
  count, setCount, dataProduct, setDataProduct,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const deleteOrder = (id) => {
    const order = dataProduct.filter((elem) => elem.id !== id);
    setDataProduct(order);
    setCount(count - 1);
  };

  const handleCancel = () => {
    handleClose();
    setDataProduct([]);
    setCount(0);
  };

  const getOrder = (e, dataOrder) => {
    e.preventDefault();
    const data = e.target.form;
    const newData = {
      client: data[0].value,
      table: data[1].value,
      products: dataOrder,
    };
    console.log(e);
    console.log('newData', newData);
    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData),
    };

    fetch('http://localhost:3001/orders', requestOption)
      .then((response) => response.json())
      .catch((err) => console.log(err));
    handleClose();
    setDataProduct([]);
    setCount(0);
  };

  console.log(dataProduct);
  return (
    <section>
      <Badge badgeContent={count} color="primary">
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={stylesBadge}
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
          <Box sx={styleBox}>
            <form>
              <Typography sx={menu} id="modal-modal-title" variant="h6" component="h2">
                Orden de Cliente
              </Typography>
              <TextField
                required
                id="standard-required"
                name="client"
                label="Nombre cliente"
                variant="standard"
              />
              <TextField
                required
                id="standard-required"
                type="number"
                name="table"
                label="No. Mesa"
                variant="standard"
              />
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><b>ID</b></TableCell>
                      <TableCell><b>Nombre</b></TableCell>
                      <TableCell><b>Precio</b></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dataProduct.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell>{order.name}</TableCell>
                        <TableCell>{order.price}</TableCell>
                        <TableCell>
                          <DeleteIcon onClick={() => deleteOrder(order.id)} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button type="submit" onClick={(e) => getOrder(e, dataProduct)}>Confirmar</Button>
              <Button onClick={handleCancel}>Cancelar</Button>
            </form>
          </Box>
        </Menu>
      </div>
    </section>
  );
};

export default ShoppingCar;
