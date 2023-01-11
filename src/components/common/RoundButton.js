import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useButtonStyles = makeStyles(() => ({
  outlined: {
    letterSpacing: '1.25px',
  },
  root: {
    borderRadius: '50px',
  }
}));

function CustomButton({
  loading,
  children,
  disabled,
  buttonProps,
  startIcon,
  variant,
  color,
  type,
  size,
  fullWidth,
  onClick,
  ...rest
}) {
  const classes = useButtonStyles();
  return (
    <Box
      {...rest}
    >
      <Button
        disabled={loading || disabled}
        color={color}
        variant={variant}
        type={type}
        size={size}
        startIcon={startIcon}
        fullWidth={fullWidth}
        onClick={onClick}
        classes={classes}
        style={{ borderRadius: 50 }}
        {...buttonProps}
      >
        {children}
      </Button>
      {loading && (
        <Box
          component={CircularProgress}
          position="absolute"
          top="50%"
          left="50%"
          mt="-12px"
          ml="-12px"
          size={24}
        />
      )}
    </Box>
  );
}

CustomButton.propTypes = {
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  variant: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  startIcon: PropTypes.node,
  buttonProps: PropTypes.object,
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  variant: 'contained',
  color: 'primary',
};

export default CustomButton;
