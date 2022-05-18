/* eslint-disable react/prop-types */
import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CardMenu from './CardMenu';
// import MenuBtn from '../Subcomponents/MenuBtn';
import ModalMenu from './ModalMenu';
import style from './Menu.module.css';

const btnStyle = {
  bgcolor: 'black',
  color: '#F3B240',
  fontWeight: 600,
  marginTop: '1em',
  marginRight: '50em',
  width: '10em',
};

const Menu = ({ role }) => {
  const [dataMenu, setDataMenu] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  console.log('Estoy en menu');

  useEffect(() => {
    fetch('http://localhost:3001/menu')
      .then((response) => response.json())
      .then((data) => setDataMenu(data));
    console.log(dataMenu);
  }, []);

  return (
    <section className={style.sectionMenu}>
      {(role === 'Admin')
        && (
        <div className={style.btnModal}>
          <Button sx={btnStyle} onClick={handleOpen}>
            <AddIcon />
            Producto
          </Button>
        </div>
        )}
      <ModalMenu
        menu="menu"
        open={open}
        setOpen={setOpen}
      />
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
          <Grid container spacing={3}>
            {dataMenu.map((product) => (
              <CardMenu
                role={role}
                menu="menu"
                product={product}
              />
            ))}
          </Grid>
        </>
      </Container>
    </section>
  );
};

export default Menu;
