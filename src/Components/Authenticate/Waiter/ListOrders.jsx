/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import {
  Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './ListOrders.module.css';

const ListOrders = () => {
  const [dataOrder, setDataOrder] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/orders')
      .then((response) => response.json())
      .then((data) => setDataOrder(data));
  }, []);

  return (
    <section className={styles.listOrders}>
      <Box>
        <Typography
          variant="subtitle1"
          component="h2"
          sx={{
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: '2em',
            marginBottom: '2em',
          }}
        >
          Lista de Ordenes
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Mesa</b></TableCell>
                <TableCell><b>Cliente</b></TableCell>
                <TableCell><b>Status</b></TableCell>
                <TableCell><b>Productos</b></TableCell>
                <TableCell><b>Total</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataOrder.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.table}</TableCell>
                  <TableCell>{order.client}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>
                    {order.products.map(
                      (product) => <TableRow key={product.id}>{product.name}</TableRow>,
                    )}
                  </TableCell>
                  <TableCell>{order.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </section>
  );
};

export default ListOrders;
