import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { makeStyles } from '@mui/styles';
import LoadingContainer from '../../components/common/LoadingContainer';
import RoundButton from '../../components/common/RoundButton';
import NewHardwareImg from '../../assets/images/new-hardware.png';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'grid',
    rowGap: '8px',
    columnGap: '40px',
    gridTemplateColumns: 'repeat(2, 1fr)',
    marginRight: '50px',
    marginLeft: '50px',
    '@media only screen and (max-width: 800px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
      marginRight: 0,
      marginLeft: 0,
    },
  },
}));

const hardwares = [
  {title: 'Awesome Hardware', amount: 1600},
  {title: 'Awesome Hardware', amount: 1400},
  {title: 'Awesome Hardware', amount: 1400},
  {title: 'Awesome Hardware', amount: 1400},
];

function HardwareShop() {
  const classes = useStyles();
  const theme = useTheme();
  const smQuery = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <LoadingContainer>
      <Box pt={15} pb={15}>
        <fieldset style={{ width: '100%', borderColor: '#A59263', borderWidth: '3px', borderRadius: 20, borderStyle: 'solid', padding: '0px'}}>
          <legend style={{marginLeft:'20px'}}>
            <Box display="flex" pl={2} pr={2}>
              <Typography variant="h4" color="secondary">Hardware</Typography>
              <Typography variant="h4" pl={1}>Shop</Typography>
            </Box>
          </legend>
          {/* <Box display="flex" pt={5} pb={5} pl={2} pr={2}> */}
          <Box
            className={classes.grid}
            // sx={{
            //   display: 'grid',
            //   rowGap: 1,
            //   columnGap: 5,
            //   gridTemplateColumns: 'repeat(2, 1fr)',
            //   marginRight: '50px',
            //   marginLeft: '50px',
            // }}
            pt={5} pb={5} pl={2} pr={2}
          >
            {hardwares.map((hardware, index) => (
              <fieldset key={index} style={{ borderWidth: '3px', borderColor: '#515151', borderRadius: 20, borderStyle: 'solid', backgroundImage: (smQuery ? 'linear-gradient(to top, #515151 18%, rgba(0,0,0,0) 18%' : 'linear-gradient(to top, #515151 12%, rgba(0,0,0,0) 12%)') }}>
                <legend style={{marginLeft:'20px'}}>
                  <Typography variant="h6" color="text.tertiary">New</Typography>
                </legend>
                <Box component="img" width="100%" src={NewHardwareImg} />
                <Box display="flex" justifyContent="space-between">
                  <Typography variant={smQuery ? 'h5' : 'h6'} color="primary">Awesome Hardware</Typography>
                  <Typography variant={smQuery ? 'h5' : 'h6'} color="primary">$1600</Typography>
                </Box>
              </fieldset>
            ))}
          </Box>
          <RoundButton
            variant="contained"
            color="tertiary"
            type="button"
            mt={-1}
            mb={3}
            mr={8}
            textAlign="right"
          >
            <Typography variant="h5" color="primary">+ Load More ...</Typography>
          </RoundButton>
        </fieldset>
      </Box>
    </LoadingContainer>
  )
}

export default HardwareShop;