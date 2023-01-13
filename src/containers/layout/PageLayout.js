import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';

function PageLayout({ ...props }) {
  const theme = useTheme();
  const smQuery = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      className="page-container"
      bgcolor="background.default"
      overflow="auto"
      paddingTop="66px"
      pr={smQuery? '5%' : '15%'}
      pl={smQuery? '5%' : '15%'}
      {...props}
    />
  );
}

export default PageLayout;
