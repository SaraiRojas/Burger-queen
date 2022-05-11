import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardMenu from '../Components/CardMenu';

const Menu = () => {
  const [dataMenu, setDataMenu] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/menu')
      .then((response) => response.json())
      .then((data) => setDataMenu(data));
  }, []);
  return (
    <Container>
      <>
        <Typography
          variant="h4"
          component="h2"
          marginBottom={3}
          marginTop={5}
        >
          Menu Desayuno
        </Typography>
        <Grid container spacing={5}>
          {dataMenu.map((product) => (
            <CardMenu product={product} />
          ))}
        </Grid>
      </>
    </Container>
  );
};

export default Menu;
