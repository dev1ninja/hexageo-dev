import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SvgIcon from '../../components/common/SvgIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.green,
    color: theme.palette.text.primary,
  },
}));

function CustomAppBar({ checked, setIsDarkTheme }) {
  const classes = useStyles();
  const changeTheme = () => {
    setIsDarkTheme(!checked);
  };

  return (
    <AppBar position="fixed" classes={classes}>
      <Box display="flex" justifyContent="space-between" pl={10} pr={10}>
        <IconButton
          id="sidebar-menu"
          edge="start"
          color="inherit"
        >
          <SvgIcon width="30px" name="logo" />
          <Box pl={2}>Hexageo.io</Box>
        </IconButton>
        <Box display="flex" alignItems="center">
          <Box pr={2}><Switch checked={checked} onChange={changeTheme} /></Box>
          <AccountCircleIcon color="secondary" fontSize="large" />
        </Box>
      </Box>
    </AppBar>
  );
}

CustomAppBar.propTypes = {
  checked: PropTypes.bool,
  setIsDarkTheme: PropTypes.func,
};

export default CustomAppBar;
