import React from 'react';
import { Box } from '@mui/material';

function PageLayout({ ...props }) {

  return (
    <Box
      className="page-container"
      bgcolor="background.default"
      overflow="auto"
      paddingTop="66px"
      pr="15%"
      pl="15%"
      {...props}
    />
  );
}

export default PageLayout;
