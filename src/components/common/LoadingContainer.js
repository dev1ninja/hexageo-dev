import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

function LoadingContainer({ loading, children, error, ...rest }) {
  const boxProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 1,
    height: '200px',
    ...rest,
  };

  if (loading) {
    return (
      <Box {...boxProps}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box {...boxProps}>
        <Typography color="error">{error.message}</Typography>
      </Box>
    );
  }

  if (typeof children === 'function') {
    return children();
  }

  return children;
}

LoadingContainer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default LoadingContainer;
