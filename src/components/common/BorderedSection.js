import React from "react";
import PropTypes from 'prop-types';
import SvgIcon from "@mui/material/SvgIcon";
import { Box } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
 
}));

function BorderedSection({ icon, title, children }) {
  const classes = useStyles();

  return (
    <fieldset style={{ width: '100%', borderColor: '#00C7BB', borderRadius: 5}}>
      <legend>Contact details</legend>
      <label>Name:<br /></label>
      <input type="text" name="name"/><br />
      <label>Email:<br />
      <input type="text" name="email"/></label><br /> 
      <label>Mobile:<br />
      <input type="text" name="mobile"/></label><br /> 
    </fieldset>
  );
}

BorderedSection.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default BorderedSection;