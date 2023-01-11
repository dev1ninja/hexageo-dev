import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Divider,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { makeStyles } from '@mui/styles';
import SvgIcon from '../../components/common/SvgIcon';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(4),
    '@media only screen and (min-width: 800px)': {
      paddingLeft: '15%',
    },
    paddingLeft: '10%',
    paddingRight: '0%',
    marginBottom: theme.spacing(5),
  },
  contentText: {
    marginTop: 20,
  },
  borderBottom: {
    borderBottom: '1px solid rgba(254, 244, 236, 0.38)',
    borderBottomColor: 'rgba(254, 244, 236, 0.38)',
    borderBottomWidth: '0.5px',
  },
  copyright: {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: 'grid',
    gap: '10px',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item md={6} xs={6}>
        <Box display="flex" justifyContent="space-between" pl={10} pr={10}>
          <IconButton
            id="sidebar-menu"
            edge="start"
            color="inherit"
          >
            <SvgIcon width="30px" name="logo" />
            <Box pl={2}>Hexageo.io</Box>
          </IconButton>
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <TwitterIcon fontSize="large" color="tertiary" />
          <FacebookIcon fontSize="large" color="tertiary" />
          <InstagramIcon fontSize="large" color="tertiary" />
          <LinkedInIcon fontSize="large" color="tertiary" />
          <TelegramIcon fontSize="large" color="tertiary" />
        </Box>
      </Grid>
      <Grid item md={6} xs={6}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt={4}
          mb={2}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              p={2}
            >
              <Typography variant="h6" align="left">
                Home
              </Typography>
              <Typography variant="h6" align="left">
                Overview
              </Typography>
              <Typography variant="h6" align="left">
                Profitability Calculator
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              p={2}
            >
              <Typography variant="h6" align="left">
                How it works
              </Typography>
              <Typography variant="h6" align="left">
                FAQ
              </Typography>
              <Typography variant="h6" align="left">
                Contact
              </Typography>
            </Box>
          </Box>
          
        </Box>
      </Grid>
      <Grid xs={12} item>
        <Divider sx={{ borderBottomWidth: 3, bgcolor: 'secondary.main' }} />
        <Box className={classes.copyright}>
          <Typography variant="body2">
            © Copyright Hexageo 2022 - All Rights Reserved
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer;
