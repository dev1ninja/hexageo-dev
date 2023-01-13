import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, IconButton, Box, Switch, useTheme } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SvgIcon from '../../components/common/SvgIcon';

function CustomAppBar({ checked, setIsDarkTheme }) {
  const theme = useTheme();
  const changeTheme = () => {
    setIsDarkTheme(!checked);
  };

  return (
    <AppBar position="fixed" sx = {{ background: theme.palette.background.default }}>
      <Box display="flex" justifyContent="space-between" pl="5%" pr="5%">
        <IconButton
          id="sidebar-menu"
          edge="start"
          color="inherit"
        >
          <SvgIcon width="30px" name="logo" />
          <Box color="text.primary" pl={2}>Hexageo.io</Box>
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
