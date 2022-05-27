/* eslint-disable react/prop-types */
import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardOrder from '../CardOrder/CardOrder';
import style from '../../Admin/Menu/Menu.module.css';

const Orders = () => {
  const [dataMenu, setDataMenu] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  console.log('orders data menu', dataMenu);

  useEffect(() => {
    fetch('http://localhost:3001/orders')
      .then((response) => response.json())
      .then((data) => setDataMenu(data));
  }, [refreshData]);

  // eslint-disable-next-line prefer-destructuring
  const products = dataMenu.products;
  console.log('orders products', products);

  return (
    <section className={style.sectionMenu}>
      <Container>
        <>
          <Typography
            variant="h4"
            component="h2"
            marginBottom={3}
            marginTop={5}
          >
            Pedidos
          </Typography>
          <Grid container spacing={3}>
            {dataMenu.filter((elem) => elem.status === 'process').map((order) => (
              <CardOrder
                key={order.id}
                // table={table}
                order={order}
                id={order.id}
                refreshData={refreshData}
                setRefreshData={setRefreshData}
              />
            ))}
          </Grid>
        </>
      </Container>
    </section>
  );
};

export default Orders;
