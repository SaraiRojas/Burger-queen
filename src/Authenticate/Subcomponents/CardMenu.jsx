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
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './CardMenu.module.css';
import ThreeDotsMenu from './ThreeDotsMenu';

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

const CardMenu = ({ product }) => {
  console.log('hola');
  return (
    <Grid item xs={4} md={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3} className="paper">
          <img src={product.image} alt="" className={styles.imgCard} />
          <Box
            sx={{
              paddingX: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Typography variant="subtitle1" component="h2">
                {product.name}
              </Typography>
              <ThreeDotsMenu />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              marginTop={3}
            >
              <Rating
                name="size-small"
                size="small"
                defaultValue={product.popularity}
                precision={0.25}
                readOnly
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Typography variant="h6" component="h2" marginTop={0}>
                $&nbsp;
                {product.price}
                &nbsp;MXN
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default CardMenu;
