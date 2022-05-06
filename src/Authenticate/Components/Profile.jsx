/* eslint-disable react/prop-types */
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { auth } from '../../Firebase/firebase.config';
import style from './Profile.module.css';

const styles = {
  bgcolor: 'black',
  width: 60,
  height: 62,
  borderRadius: 60,
  color: '#F3B240',
  fontWeight: 'bold',
  fontSize: 20,
};

const Profile = ({ authenticate }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = async () => {
    await signOut(auth);
    handleClose();
    navigate('/');
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <Button
        className={style.btnProfile}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={styles}
      >
        GH
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {authenticate.email}
        </Typography>
        <MenuItem onClick={handleLogOut}>Salir</MenuItem>
      </Menu>
    </div>
  );
};

export default Profile;
