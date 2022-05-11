import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardMenuLunch from '../Components/CardMenuLunch';

const MenuLunch = () => {
  const [dataMenu, setDataMenu] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/menuLunch')
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
          Menu Almuerzo y Cena
        </Typography>
        <Grid container spacing={5}>
          {dataMenu.map((product) => (
            <CardMenuLunch product={product} />
          ))}
        </Grid>
      </>
    </Container>
  );
};

export default MenuLunch;
