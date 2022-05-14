import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CardMenuLunch from './CardMenuLunch';
import ModalMenu from '../Menu/ModalMenu';
import style from '../Menu/Menu.module.css';

const btnStyle = {
  bgcolor: 'black',
  color: '#F3B240',
  fontWeight: 600,
  marginTop: '1em',
  marginRight: '50em',
  width: '10em',
};

const MenuLunch = () => {
  const [dataMenu, setDataMenu] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    fetch('http://localhost:3001/menuLunch')
      .then((response) => response.json())
      .then((data) => setDataMenu(data));
  }, []);

  return (
    <section className={style.sectionMenu}>
      <div className={style.btnModal}>
        {/* <MenuBtn handleClick={handleOpen} /> */}
        <Button sx={btnStyle} onClick={handleOpen}>
          <AddIcon />
          Producto
        </Button>
      </div>
      <ModalMenu menu="menuLunch" open={open} setOpen={setOpen} />
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
    </section>
  );
};

export default MenuLunch;
