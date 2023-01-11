import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ICONS from '../../constants/svgs';
import { colors } from '../../theme';

function SvgIcon({ name, color, ...props }) {
  const Icon = ICONS[name];
  let style = {
    fill: colors[color],
  };

  if (name === 'rect') {
    style = {...style, width: '100%', height: '100%' };
  }

  if (!Icon) {
    return null;
  }

  return <Box width="54px" component={Icon} style={style} {...props} />;
}

SvgIcon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

export default SvgIcon;
