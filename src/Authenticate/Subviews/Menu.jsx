import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardMenu from '../Subcomponents/CardMenu';
import MenuBtn from '../Subcomponents/MenuBtn';
import ModalMenu from '../Subcomponents/ModalMenu';

const Menu = () => {
  const [dataMenu, setDataMenu] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    fetch('http://localhost:3001/menu')
      .then((response) => response.json())
      .then((data) => setDataMenu(data));
  }, []);
  return (
    <section>
      <div>
        <MenuBtn handleClick={handleOpen} />
      </div>
      <ModalMenu open={open} setOpen={setOpen} />
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
    </section>
  );
};

export default Menu;
