/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import {
  createTheme,
  Grid,
  Paper,
  Rating,
  ThemeProvider,
  Typography,
} from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import styles from '../Admin/Menu/CardMenu.module.css';
import BtnAddServe from './BtnAddServe';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const btnAdd = {
  display: 'flex',
  justifyContent: 'end',
  position: 'absolute',
  top: '-10px',
  right: '0',
  padding: '0',
};

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const CardOrder = ({
  order, id, refreshData, setRefreshData,
}) => {
  console.log('estoy en cardOrder por eslint arrow function');
  return (
    <Grid item xs={12} sm={6}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3} className="paper">
          <img src={order.image} alt="" className={styles.imgCard} />
          <Box
            sx={{
              paddingX: 1,
              position: 'relative',
            }}
          >
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
                marginTop={0.5}
              >
                <Rating
                  name="size-small"
                  size="small"
                  defaultValue={order.popularity}
                  precision={0.25}
                  readOnly
                />
              </Box>
              <Box sx={btnAdd}>
                <BtnAddServe
                  order={order}
                  id={id}
                  refreshData={refreshData}
                  setRefreshData={setRefreshData}
                />
              </Box>
            </Box>
            <Typography
              variant="subtitle1"
              component="h2"
              className={styles.productName}
              sx={{
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: '0.8em',
              }}
            >
              {order.client}
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              className={styles.productName}
              sx={{
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: '0.8em',
              }}
            >
              Hora Inicio:&nbsp;
              {order.hours}
              &nbsp;horas
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><b>Cant.</b></TableCell>
                    <TableCell><b>Producto</b></TableCell>
                    <TableCell><b>Listo</b></TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {order.products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.id}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>
                        <Checkbox {...label} color="success" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography
              variant="subtitle1"
              component="h2"
              className={styles.productName}
              sx={{
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: '0.8em',
              }}
            >
              Mesa:&nbsp;
              {order.table}
            </Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default CardOrder;
